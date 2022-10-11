import React, { useContext, useEffect } from 'react';
import FormIdContext from '../context/FormIdContext';
import { connect } from 'frontity';

/**
 * Input Component.
 *
 * @param {Object} state Frontity State.
 * @param {Object} actions Actions methods.
 * @param {Object} inputProps Input props.
 * @return {*}
 */
const Input = ({ state, actions, inputProps }) => {
	// Context is used so that we can pass the form id to different components.
	const id = useContext(FormIdContext);
	const inputName = inputProps.name;
	let ariaInvalid = inputProps.ariaInvalid;

	if (true === state.cf7.resetOnChange) {
		useEffect(() => {
			actions.cf7.resetFields({ id });
		}, [state.router.link]);
	}

	if ('undefined' === typeof state.cf7.forms[id].inputVals[inputName]) {
		actions.cf7.changeInputValue({
			id,
			inputName,
			value: inputProps.value,
		});
	}

	if ('undefined' !== typeof state.cf7.forms[id].invalidFields) {
		ariaInvalid = inputProps.name in state.cf7.forms[id].invalidFields;
	}

	/**
	 * OnChange handler for input.
	 *
	 * @param {Object} event Event.
	 *
	 * @return {void}
	 */
	const onChange = (event) => {
		actions.cf7.changeInputValue({
			id,
			inputName,
			value: event.target.value,
		});
	};

	return (
		<input
			name={inputProps.name}
			className={inputProps.className}
			id={inputProps.id}
			aria-invalid={ariaInvalid}
			aria-required={inputProps.ariaRequired}
			size={inputProps.size}
			type={inputProps.type}
			value={state.cf7.forms[id].inputVals[inputName]}
			onChange={onChange}
			placeholder={inputProps.placeholder}
		/>
	);
};

export default connect(Input);
