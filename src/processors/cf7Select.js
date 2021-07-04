import Select from "../components/Select";

export const cf7Select = {
    name: "cf7Select",
    test: ({ node }) =>
        node.component === "select" &&
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
        const value =
            "undefined" === typeof node.children[0].props.value
                ? null
                : node.children[0].props.value;
        const optionChildrens =
            "undefined" === typeof node.children ? null : node.children;

        const options = optionChildrens.map((item) => {
            return {
                label: item.children[0].content,
                value: item.props.value,
            };
        });

        node.props.inputProps = {
            ariaInvalid: ariaInvalid,
            ariaRequired: ariaRequired,
            className: className,
            id: id,
            name: name,
            value: value,
            options: options,
        };

        node.component = Select;
        return node;
    },
};
