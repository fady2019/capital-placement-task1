import { useEffect, useLayoutEffect, useRef } from 'react';

import InfoItem from '../info-item/info-item.component';
import Card from '../../ui/card/card.component';
import Checkbox from '../../ui/checkbox/checkbox.component';
import List from '../../ui/list/list.component';
import Switch from '../../ui/switch/switch.component';
import Questions from '../questions/questions.component';

import ProfileInfoUtil from '../../../utils/app-form/profile-info.util';
import { IProfileInfo } from '../../../models/app-form/app-form.model';
import useAppFormInfo, { EAppFormInfoReducerActionType } from '../../../hooks/app-form-info.hook';
import { IQuestion } from '../../../models/app-form/app-form-question.model';

const ProfileInfo: React.FC<{
    profileInfo?: IProfileInfo;
    changeHandler: (profileInfo: Partial<IProfileInfo>) => void;
}> = (props) => {
    const { info: profileInfo, dispatch } = useAppFormInfo<IProfileInfo>();
    const changeHandlerRef = useRef(props.changeHandler);
    const isDataChanged = useRef(false);

    useEffect(() => {
        dispatch({
            type: EAppFormInfoReducerActionType.SET_DEFAULT,
            payload: { ...props.profileInfo },
        });
    }, [props.profileInfo]);

    useEffect(() => {
        if (!isDataChanged.current) {
            return;
        }

        changeHandlerRef.current(profileInfo);
        isDataChanged.current = false;
    }, [profileInfo]);

    useLayoutEffect(() => {
        changeHandlerRef.current = props.changeHandler;
    });

    const profileInfoUIData = ProfileInfoUtil.getProfileInfoUIData(profileInfo);

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
                key: 'profileQuestions',
                questions,
            },
        });
    };

    return (
        <Card title="Profile">
            <List>
                {Object.entries(profileInfoUIData).map(
                    ([key, { label, note, show, mandatory, hideShowSwitch, hideMandatoryCheckbox }]) => {
                        return (
                            <InfoItem key={key}>
                                <div className="item-title cd">
                                    <h2 className="label">{label}</h2>
                                    {note && <p className="note">({note})</p>}
                                </div>

                                <div className="actions">
                                    {hideShowSwitch !== true && (
                                        <Checkbox
                                            isChecked={mandatory}
                                            label="Mandatory"
                                            togglingHandler={handleToggling.bind(null, key, 'mandatory')}
                                        />
                                    )}

                                    {hideMandatoryCheckbox !== true && (
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
                questions={profileInfo.profileQuestions}
                questionsChangesHandler={handleQuestionsUpdating}
            />
        </Card>
    );
};

export default ProfileInfo;
