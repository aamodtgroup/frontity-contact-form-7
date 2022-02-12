import React, { useContext, useEffect } from "react";
import FormIdContext from "../context/FormIdContext";
import { connect } from "frontity";

/**
 * Input Component.
 *
 * @param {Object} state Frontity State.
 * @param {Object} actions Actions methods.
 * @param {Object} inputProps Input props.
 * @return {*}
 */
const File = ({ state, actions, inputProps }) => {
    // Context is used so that we can pass the form id to different components.
    const id = useContext(FormIdContext);
    const inputName = inputProps.name;

    if (true === state.cf7.resetOnChange) {
        useEffect(() => {
            actions.cf7.resetFields({ id })
        }, [state.router.link])
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
            value: event.target.files[0],
        });
    };

    return (
        <input
            name={inputProps.name}
            className={inputProps.className}
            id={inputProps.id}
            aria-invalid={inputProps.ariaInvalid}
            aria-required={inputProps.ariaRequired}
            size={inputProps.size}
            type={inputProps.type}
            accept={inputProps.accept}
            onChange={onChange}
            placeholder={inputProps.placeholder}
        />
    );
};

export default connect(File);
