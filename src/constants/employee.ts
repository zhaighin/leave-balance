export const FULL_TIME = 'full time';
export const PART_TIME = 'pt';

export enum EmploymentStatus {
    FullTime = 'FULL TIME',
    PartTime = 'PART TIME'
}

export interface RowData {
    id: number,
    name: string,
    hireDate: string,
    employmentStatus: string,
    position: string,
    location: string,
}

export enum OutletLocation {
    IconCity = 'Icon City',
    Gurney = 'Gurney Plaza'
}