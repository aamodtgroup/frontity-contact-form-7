import Akismet from "../components/Akismet";

export const cf7Akismet = {
    name: "cf7Inputs",
    test: ({ node }) => node.component === "input" && /ak_js/.test(node.props.id),
    processor: ({ node }) => {
        const id = "undefined" === typeof node.props.id ? null : node.props.id;
        const name = "undefined" === typeof node.props.name ? null : node.props.name;
        const type = "undefined" === typeof node.props.type ? null : node.props.type;
        const value = "undefined" === typeof node.props.value ? null : node.props.value;

        node.props.inputProps = {
            id: id,
            name: name,
            type: type,
            value: value,
        };

        node.component = Akismet;
        return node;
    },
};
