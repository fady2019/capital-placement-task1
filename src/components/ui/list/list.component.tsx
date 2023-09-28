import React from 'react';

const List: React.FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>> = (
    props
) => {
    const { style, ...restProps } = props;

    return <ul style={{ listStyle: 'none', ...style }} {...restProps}></ul>;
};

export default List;
