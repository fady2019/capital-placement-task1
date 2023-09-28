import React from 'react';

import classes from './input.styles.module.css';

const Input: React.FC<
    React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
> = (props) => {
    const { className, ...restProps } = props;

    const inputClassName = `${classes['input']} ${className || ''}`;

    return <input className={inputClassName} {...restProps} />;
};

export default Input;
