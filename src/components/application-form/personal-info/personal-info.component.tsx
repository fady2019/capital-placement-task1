import { useEffect, useLayoutEffect, useRef } from 'react';

import InfoItem from '../info-item/info-item.component';
import Card from '../../ui/card/card.component';
import Checkbox from '../../ui/checkbox/checkbox.component';
import List from '../../ui/list/list.component';
import Switch from '../../ui/switch/switch.component';

import useAppFormInfo, { EAppFormInfoReducerActionType } from '../../../hooks/app-form-info.hook';
import PersonalInfoUtil from '../../../utils/app-form/personal-info.util';
import { IPersonalInfo } from '../../../models/app-form/app-form.model';
import Questions from '../questions/questions.component';
import { IQuestion } from '../../../models/app-form/app-form-question.model';

const PersonalInfo: React.FC<{
    personalInfo?: IPersonalInfo;
    changeHandler: (personalInfo: Partial<IPersonalInfo>) => void;
}> = (props) => {
    const { info: personalInfo, dispatch } = useAppFormInfo<IPersonalInfo>(props.personalInfo);
    const changeHandlerRef = useRef(props.changeHandler);
    const isDataChanged = useRef(false);

    useEffect(() => {
        dispatch({
            type: EAppFormInfoReducerActionType.SET_DEFAULT,
            payload: { ...props.personalInfo },
        });
    }, [props.personalInfo]);

    useEffect(() => {
        if (!isDataChanged.current) {
            return;
        }

        changeHandlerRef.current(personalInfo);
        isDataChanged.current = false;
    }, [personalInfo]);

    useLayoutEffect(() => {
        changeHandlerRef.current = props.changeHandler;
    });

    const personalInfoUIData = PersonalInfoUtil.getPersonalInfoUIData(personalInfo);

    const handleToggling = (infoName: string, fieldName: string, checked: boolean) => {
        isDataChanged.current = true;

        dispatch({
            type: EAppFormInfoReducerActionType.UPDATE_INFO,
            payload: {
                key: infoName,
                info: { [fieldName]: checked },
            },
        });
    };

    const handleQuestionsUpdating = (questions: IQuestion[]) => {
        isDataChanged.current = true;

        dispatch({
            type: EAppFormInfoReducerActionType.UPDATE_QUESTIONS,
            payload: {
                key: 'personalQuestions',
                questions,
            },
        });
    };

    return (
        <Card title="Personal Information">
            <List>
                {Object.entries(personalInfoUIData).map(
                    ([key, { label, note, show, internalUse, hideInternalUseCheckbox, hideShowSwitch }]) => {
                        return (
                            <InfoItem key={key}>
                                <div className="item-title cd">
                                    <h2 className="label">{label}</h2>
                                    {note && <p className="note">({note})</p>}
                                </div>

                                <div className="actions">
                                    {hideInternalUseCheckbox !== true && (
                                        <Checkbox
                                            isChecked={internalUse}
                                            label="Internal"
                                            togglingHandler={handleToggling.bind(null, key, 'internalUse')}
                                        />
                                    )}

                                    {hideShowSwitch !== true && (
                                        <Switch
                                            isChecked={show}
                                            label={(checked) => (checked ? 'Show' : 'Hide')}
                                            togglingHandler={handleToggling.bind(null, key, 'show')}
                                        />
                                    )}
                                </div>
                            </InfoItem>
                        );
                    }
                )}
            </List>

            <Questions
                questions={personalInfo.personalQuestions}
                questionsChangesHandler={handleQuestionsUpdating}
            />
        </Card>
    );
};

export default PersonalInfo;
