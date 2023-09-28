import { IProfileInfoUIData } from '../../models/app-form/app-form-ui.model';
import { IProfileInfo } from '../../models/app-form/app-form.model';

class ProfileInfoUtil {
    static getProfileInfoUIData(profileInfo?: Partial<IProfileInfo>): IProfileInfoUIData {
        return {
            education: {
                label: 'Education',
                mandatory: profileInfo?.education?.mandatory === true,
                show: profileInfo?.education?.show === true,
            },
            experience: {
                label: 'Experience',
                mandatory: profileInfo?.experience?.mandatory === true,
                show: profileInfo?.experience?.show === true,
            },
            resume: {
                label: 'Resume',
                mandatory: profileInfo?.resume?.mandatory === true,
                show: profileInfo?.resume?.show === true,
            },
        };
    }

    static getDefaultProfileInfoData() {
        return {
            education: {
                mandatory: true,
                show: true,
            },
            experience: {
                mandatory: true,
                show: true,
            },
            resume: {
                mandatory: true,
                show: true,
            },
            profileQuestions: [],
        };
    }
}

export default ProfileInfoUtil;
