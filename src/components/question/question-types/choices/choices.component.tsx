import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

import Input from '../../../ui/input/input.component';

import { IQuestion } from '../../../../models/app-form/app-form-question.model';

import classes from './choices.styles.module.css';

import { ReactComponent as PlusIcon } from '../../../../assets/icons/plus.svg';
import { ReactComponent as UnorderedIcon } from '../../../../assets/icons/unordered.svg';

const Choices: React.FC<{
    choices: IQuestion['choices'];
    changeHandler: (choices: IQuestion['choices']) => void;
}> = (props) => {
    let choicesSize = props.choices?.length || 0;
    const [choices, setChoices] = useState(choicesSize > 0 ? props.choices! : ['']);

    const changeHandlerRef = useRef(props.changeHandler);

    useEffect(() => {
        if (!choices.at(-1)) {
            return;
        }

        changeHandlerRef.current(choices);
    }, [choices]);

    useLayoutEffect(() => {
        changeHandlerRef.current = props.changeHandler;
    });

    const handleAddingChoice = () => {
        setChoices((curr) => curr.concat(''));
    };

    return (
        <div className={classes['choices-container']}>
            <label>Choice</label>

            <div className={classes['choices']}>
                {choices.map((choice, idx) => {
                    return (
                        <div key={idx} className={classes['choice']}>
                            <button className={classes['choice__reorder-btn']} type="button">
                                <UnorderedIcon />
                            </button>

                            <Input
                                type="text"
                                placeholder="Type here"
                                defaultValue={choice}
                                onChange={(e) => {
                                    setChoices((curr) => {
                                        const _choices = [...curr];
                                        _choices[idx] = e.target.value;
                                        return _choices;
                                    });
                                }}
                            />

                            {idx === choices.length - 1 && (
                                <button
                                    className={classes['choice__add-btn']}
                                    type="button"
                                    onClick={handleAddingChoice}
                                >
                                    <PlusIcon />
                                </button>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Choices;
