import React from 'react';

import classes from './textarea.styles.module.css';

const Textarea: React.FC<
    React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>
> = (props) => {
    const { className, ...restProps } = props;

    const textareaClassName = `${classes['textarea']} ${className || ''}`;

    return <textarea className={textareaClassName} {...restProps} />;
};

export default Textarea;
