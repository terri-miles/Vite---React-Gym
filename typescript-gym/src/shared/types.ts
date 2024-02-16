export enum SelectedPage {
    HOME = 'home',
    BENEFITS = 'benefits',
    OURCLASSES = 'ourclasses',
    CONTACTUS = 'contactus',
};

export type BenefitsType = {
    icon: JSX.Element
    title: string
    description: string
}

export type ClassType = {
    name: string
    description?: string
    image: string
}