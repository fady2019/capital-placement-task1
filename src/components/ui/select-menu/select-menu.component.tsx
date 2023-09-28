import { useEffect, useLayoutEffect, useRef, useState } from 'react';

import classes from './select-menu.styles.module.css';

import { ReactComponent as ArrowDownIcon } from '../../../assets/icons/arrow-down.svg';

const SelectMenu: React.FC<{
    label: string;
    options: { id: string; label: React.ReactNode }[];
    defaultValue?: string;
    required?: boolean;
    onChange?: (id: string | undefined) => void;
}> = (props) => {
    const { label, options, defaultValue, required } = props;

    const [selectedOption, setSelectedOption] = useState<string | undefined>(defaultValue);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const onChangeRef = useRef(props.onChange);

    useEffect(() => {
        if (!onChangeRef.current) {
            return;
        }

        onChangeRef.current(selectedOption);
    }, [selectedOption]);

    useLayoutEffect(() => {
        onChangeRef.current = props.onChange;
    });

    const handleMenuToggling = () => {
        setIsOpen((curr) => !curr);
    };

    const handleMenuItemSelecting = (id: string) => {
        if (id === selectedOption && required !== true) {
            setSelectedOption(undefined);
        } else {
            setSelectedOption(id);
        }

        setIsOpen(false);
    };

    const selectMenuLabel = options.find((op) => op.id === selectedOption)?.label || label;

    return (
        <div className={classes['select-menu']} role="menu">
            <div
                className={classes['select-menu__btn']}
                role="button"
                tabIndex={0}
                onClick={handleMenuToggling}
            >
                <p className={classes['label']}>{selectMenuLabel}</p>
                <ArrowDownIcon />
            </div>

            {isOpen && (
                <div className={classes['select-menu_options-container']}>
                    <ul className={classes['select-menu_options']}>
                        {options.map(({ id, label }) => {
                            const optionClassName = `${classes['select-menu_option']} ${
                                selectedOption === id ? classes['select-menu_option--active'] : ''
                            }`;

                            return (
                                <li
                                    key={id}
                                    className={optionClassName}
                                    role="menuitem"
                                    tabIndex={0}
                                    onClick={handleMenuItemSelecting.bind(null, id)}
                                >
                                    {label}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default SelectMenu;
