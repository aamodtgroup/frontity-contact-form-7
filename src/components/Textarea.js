import React, { useEffect } from "react";
import FormIdContext from "../context/FormIdContext";
import { connect } from "frontity";

/**
 * Textarea Component.
 *
 * @param {Object} state Frontity state.
 * @param {Object} actions Actions.
 * @param {Object} inputProps Input props.
 *
 * @return {*}
 */
const Textarea = ({ state, actions, inputProps }) => {
    const id = React.useContext(FormIdContext);
    const inputName = inputProps.name;
    const placeholder = inputProps.placeholder;

    if (true === state.cf7.resetOnChange || true === state.theme.resetOnChange ) {
        useEffect(() => {
            actions.cf7.resetFields({ id })
        }, [state.router.link])
    }

    if ("undefined" === typeof state.cf7.forms[id].inputVals[inputName]) {
        actions.cf7.changeInputValue({
            id,
            inputName,
            value: inputProps.value,
        });
    }

    /**
     * Textarea onChange event handler.
     *
     * @param {Object} event Event.
     */
    const onChange = (event) => {
        actions.cf7.changeInputValue({
            id,
            inputName,
            value: event.target.value,
        });
    };

    return (
        <textarea
            name={inputProps.name}
            className={inputProps.className}
            id={inputProps.id}
            aria-invalid={inputProps.ariaInvalid}
            aria-required={inputProps.ariaRequired}
            cols={inputProps.cols}
            rows={inputProps.rows}
            value={state.cf7.forms[id].inputVals[inputName]}
            onChange={onChange}
            placeholder={placeholder}
        />
    );
};

export default connect(Textarea);
