import React from 'react';

import classes from './icon-button.styles.module.css';

const IconButton: React.FC<
    React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
> = (props) => {
    const { className, ...restProps } = props;

    const iconButtonClassName = `${className || ''} ${classes['icon-button']}`;

    return <button className={iconButtonClassName} type="button" {...restProps} />;
};

export default IconButton;
