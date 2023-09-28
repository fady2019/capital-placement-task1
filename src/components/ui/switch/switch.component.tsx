import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

import classes from './switch.styles.module.css';

const Switch: React.FC<{
    isChecked: boolean;
    label?: (checked: boolean) => string;
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

    const handleSwitchToggling = () => {
        isToggled.current = true;

        setChecked((curr) => !curr);
    };

    const switchBtnClassName = `${classes['switch__btn']} ${checked ? classes['switch__btn--checked'] : ''}`;

    return (
        <div className={classes['switch']} role="switch" onClick={handleSwitchToggling}>
            <button className={switchBtnClassName} type="button">
                <span className={classes['switch__dot']}></span>
            </button>

            {label && <label className={classes['switch__label']}>{label(checked)}</label>}
        </div>
    );
};

export default Switch;
