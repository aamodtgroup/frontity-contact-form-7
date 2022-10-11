import Input from '../components/Input';

export const cf7Inputs = {
	name: 'cf7Inputs',
	test: ({ node }) =>
		node.component === 'input' &&
		/wpcf7-form-control/.test(node.props.className) &&
		!/wpcf7-file/.test(node.props.className),
	processor: ({ node }) => {
		const ariaInvalid =
			'undefined' === typeof node.props['aria-invalid']
				? null
				: node.props['aria-invalid'];
		const ariaRequired =
			'undefined' === typeof node.props['aria-required']
				? null
				: node.props['aria-required'];
		const className =
			'undefined' === typeof node.props.className
				? null
				: node.props.className;
		const id = 'undefined' === typeof node.props.id ? null : node.props.id;
		const name =
			'undefined' === typeof node.props.name ? null : node.props.name;
		const size =
			'undefined' === typeof node.props.size ? null : node.props.size;
		const type =
			'undefined' === typeof node.props.type ? null : node.props.type;
		const value =
			'undefined' === typeof node.props.value ? '' : node.props.value;
		const placeholder =
			'undefined' === typeof node.props.placeholder
				? null
				: node.props.placeholder;

		node.props.inputProps = {
			ariaInvalid: ariaInvalid,
			ariaRequired: ariaRequired,
			className: className,
			id: id,
			name: name,
			size: size,
			type: type,
			value: value,
			placeholder: placeholder,
		};

		node.component = Input;
		return node;
	},
};
