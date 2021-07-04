import Textarea from "../components/Textarea";

export const cf7Textarea = {
    name: "cf7Textarea",
    test: ({ node }) =>
        node.component === "textarea" &&
        /wpcf7-form-control/.test(node.props.className),
    processor: ({ node }) => {
        const ariaInvalid =
            "undefined" === typeof node.props["aria-invalid"]
                ? null
                : node.props["aria-invalid"];
        const ariaRequired =
            "undefined" === typeof node.props["aria-required"]
                ? null
                : node.props["aria-required"];
        const className =
            "undefined" === typeof node.props.className
                ? null
                : node.props.className;
        const id = "undefined" === typeof node.props.id ? null : node.props.id;
        const name =
            "undefined" === typeof node.props.name ? null : node.props.name;
        const cols =
            "undefined" === typeof node.props.cols ? null : node.props.cols;
        const rows =
            "undefined" === typeof node.props.rows ? null : node.props.rows;
        const value =
            "undefined" === typeof node.props.value ? "" : node.props.value;
        const placeholder =
            "undefined" === typeof node.props.placeholder
                ? null
                : node.props.placeholder;

        node.props.inputProps = {
            ariaInvalid: ariaInvalid,
            ariaRequired: ariaRequired,
            className: className,
            id: id,
            name: name,
            cols: cols,
            rows: rows,
            value: value,
            placeholder: placeholder,
        };

        node.component = Textarea;
        return node;
    },
};
