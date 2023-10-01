import React from 'react';

import Checkbox from '../../../ui/checkbox/checkbox.component';
import Choices from '../choices/choices.component';

import { IQuestion } from '../../../../models/app-form/app-form-question.model';

const QuestionChoicesInputs: React.FC<{
    choices?: string[];
    enableOtherOption?: boolean;
    changeHandler: (question: Partial<IQuestion>) => void;
}> = (props) => {
    const { choices, enableOtherOption, changeHandler } = props;

    return (
        <>
            <Choices
                choices={choices}
                changeHandler={(choices) => {
                    changeHandler({
                        choices,
                    });
                }}
            />

            <Checkbox
                isChecked={enableOtherOption || false}
                label="Enable “Other” option"
                togglingHandler={(checked) => {
                    changeHandler({
                        other: checked || false,
                    });
                }}
            />
        </>
    );
};

export default QuestionChoicesInputs;
