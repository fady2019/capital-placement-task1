export interface IAppFormUIItemData {
    label: string;
    note?: string;
    show: boolean;
    hideShowSwitch?: boolean;
}

export interface IPersonalInfoUIItemData extends IAppFormUIItemData {
    internalUse: boolean;
    hideInternalUseCheckbox?: boolean;
}

export interface IProfileInfoUIItemData extends IAppFormUIItemData {
    mandatory: boolean;
    hideMandatoryCheckbox?: boolean;
}

export interface IPersonalInfoUIData {
    [key: string]: IPersonalInfoUIItemData;
}

export interface IProfileInfoUIData {
    [key: string]: IProfileInfoUIItemData;
}
