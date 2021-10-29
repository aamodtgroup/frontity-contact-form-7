import React from "react";
import { connect } from "frontity";

/**
 * Input Component.
 *
 * @param {Object} state Frontity State.
 * @param {Object} actions Actions methods.
 * @param {Object} inputProps Input props.
 * @return {*}
 */
const Akismet = ({ inputProps }) => {
    return (
        <input
            type={inputProps.type}
            id={inputProps.id}
            name={inputProps.name}
            value={inputProps.value}
        />
    );
};

export default connect(Akismet);
