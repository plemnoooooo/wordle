export enum States {
    Unassigned,
    Unavaliable,
    Misplaced,
    Aligned
}

export interface Props {
    letter: string,
    state: States,
    delay: number
}

export enum BackgroundColours {
    Default = "#b3b3b3",
    Unavaliable = "#383838",
    Misplaced = "#e3b10b",
    Aligned = "#0be362"
}