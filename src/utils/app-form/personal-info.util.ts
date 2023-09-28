import { IPersonalInfoUIData } from '../../models/app-form/app-form-ui.model';
import { IPersonalInfo } from '../../models/app-form/app-form.model';

class PersonalInfoUtil {
    static getPersonalInfoUIData(personalInfo?: Partial<IPersonalInfo>): IPersonalInfoUIData {
        return {
            firstName: {
                label: 'First Name',
                internalUse: personalInfo?.firstName?.internalUse === true,
                show: personalInfo?.firstName?.show === true,
                hideShowSwitch: true,
                hideInternalUseCheckbox: true,
            },
            lastName: {
                label: 'Last Name',
                internalUse: personalInfo?.lastName?.internalUse === true,
                show: personalInfo?.lastName?.show === true,
                hideShowSwitch: true,
                hideInternalUseCheckbox: true,
            },
            email: {
                label: 'Email',
                internalUse: personalInfo?.emailId?.internalUse === true,
                show: personalInfo?.emailId?.show === true,
                hideShowSwitch: true,
                hideInternalUseCheckbox: true,
            },
            phoneNumber: {
                label: 'Phone',
                note: 'without dial code',
                internalUse: personalInfo?.phoneNumber?.internalUse === true,
                show: personalInfo?.phoneNumber?.show === true,
            },
            nationality: {
                label: 'Nationality',
                internalUse: personalInfo?.nationality?.internalUse === true,
                show: personalInfo?.nationality?.show === true,
            },
            currentResidence: {
                label: 'Current Residence',
                internalUse: personalInfo?.currentResidence?.internalUse === true,
                show: personalInfo?.currentResidence?.show === true,
            },
            idNumber: {
                label: 'ID Number',
                internalUse: personalInfo?.idNumber?.internalUse === true,
                show: personalInfo?.idNumber?.show === true,
            },
            dateOfBirth: {
                label: 'Date of Birth',
                internalUse: personalInfo?.dateOfBirth?.internalUse === true,
                show: personalInfo?.dateOfBirth?.show === true,
            },
            gender: {
                label: 'Gender',
                internalUse: personalInfo?.gender?.internalUse === true,
                show: personalInfo?.gender?.show === true,
            },
        };
    }

    static getDefaultPersonalInfoData() {
        return {
            firstName: {
                internalUse: false,
                show: true,
            },
            lastName: {
                internalUse: false,
                show: true,
            },
            emailId: {
                internalUse: false,
                show: true,
            },
            phoneNumber: {
                internalUse: false,
                show: true,
            },
            nationality: {
                internalUse: false,
                show: true,
            },
            currentResidence: {
                internalUse: false,
                show: true,
            },
            idNumber: {
                internalUse: false,
                show: true,
            },
            dateOfBirth: {
                internalUse: false,
                show: true,
            },
            gender: {
                internalUse: false,
                show: true,
            },
            personalQuestions: [],
        };
    }
}

export default PersonalInfoUtil;
