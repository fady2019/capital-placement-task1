import React from 'react';

import classes from './form-item.styles.module.css';

const FormItem: React.FC<
    React.PropsWithChildren<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>
> = (props) => {
    const { className, ...restProps } = props;

    const formItemClassName = `${classes['form-item']} ${className || ''}`;

    return <div className={formItemClassName} {...restProps}></div>;
};

export default FormItem;
