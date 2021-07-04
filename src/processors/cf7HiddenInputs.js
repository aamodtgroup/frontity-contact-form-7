import HiddenInput from "../components/HiddenInput";

export const cf7HiddenInputs = {
    name: "cf7HiddenInputs",
    test: ({ node }) =>
        node.component === "input" &&
        /hidden/.test(node.props.type) &&
        /_wpcf7/.test(node.props.name),

    processor: ({ node }) => {
        const name =
            "undefined" === typeof node.props.name ? null : node.props.name;
        const value =
            "undefined" === typeof node.props.value ? null : node.props.value;

        node.props.inputProps = {
            name: name,
            value: value,
        };

        node.component = HiddenInput;
        return node;
    },
};
