import React, { useEffect } from "react";
import FormIdContext from "../context/FormIdContext";
import { connect, styled } from "frontity";

/**
 * Span component
 *
 * @param {Object} state Frontity state.
 * @param {Object} children children.
 * @param {String} className Classname.
 * @param {String} spanKey Key of children input field.
 *
 * @return {*}
 */
const Span = ({ state, actions, children, className, spanKey }) => {
    const id = React.useContext(FormIdContext);
    let errorMessage = "";

    if (true === state.cf7.resetOnChange || true === state.theme.resetOnChange ) {
        useEffect(() => {
            actions.cf7.resetFields({ id })
        }, [state.router.link])
    }

    if ("undefined" !== typeof state.cf7.forms[id].invalidFields) {
        errorMessage =
            "undefined" !== typeof state.cf7.forms[id].invalidFields[spanKey]
                ? state.cf7.forms[id].invalidFields[spanKey]
                : "";
    }

    return (
        <span className={className}>
            {children}
            {errorMessage && <NotValidTip>{errorMessage}</NotValidTip>}
        </span>
    );
};

const NotValidTip = styled.span`
    color: #f00;
    font-size: 1em;
    font-weight: normal;
    display: block;
`;

export default connect(Span);
