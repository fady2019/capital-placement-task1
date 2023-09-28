import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

import classes from './checkbox.styles.module.css';

import { ReactComponent as CheckIcon } from '../../../assets/icons/check.svg';

const Checkbox: React.FC<{
    isChecked: boolean;
    label?: string;
    togglingHandler: (checked: boolean) => void;
}> = (props) => {
    const { isChecked, label } = props;

    const [checked, setChecked] = useState(isChecked);
    const togglingHandlerRef = useRef(props.togglingHandler);
    const isToggled = useRef(false);

    useEffect(() => {
        if (!isToggled.current) {
            return;
        }

        togglingHandlerRef.current(checked);
        isToggled.current = false;
    }, [checked]);

    useEffect(() => {
        setChecked(isChecked);
    }, [isChecked]);

    useLayoutEffect(() => {
        togglingHandlerRef.current = props.togglingHandler;
    });

    const handleCheckboxToggling = () => {
        isToggled.current = true;

        setChecked((curr) => !curr);
    };

    const checkboxBtnClassName = `${classes['checkbox__btn']} ${
        checked ? classes['checkbox__btn--checked'] : ''
    }`;

    return (
        <div className={classes['checkbox']} role="checkbox" onClick={handleCheckboxToggling}>
            <button className={checkboxBtnClassName} type="button">
                <CheckIcon />
            </button>

            {label && <label className={classes['checkbox__label']}>{label}</label>}
        </div>
    );
};

export default Checkbox;
