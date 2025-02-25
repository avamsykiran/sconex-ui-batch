import Contact from "../../models/Contact"
import { CANCEL_EDIT, ContactAction, EDIT, WAIT, ERR, REFRESH } from "./contactActions";

export interface ContactReducerState {
    contacts?: Contact[];
    msg?: string;
    status: ContactStateStatus;
}

export enum ContactStateStatus {
    READY, WORK_IN_PROGRESS, ERROR
}

let initailState: ContactReducerState = { status: ContactStateStatus.READY };

export const contactReducer = (state: ContactReducerState = initailState, action: ContactAction): ContactReducerState => {
    let { contacts, msg, status } = state;

    let { type, payload } = action;

    switch (type) {
        case WAIT:
            msg = payload as string;
            status = ContactStateStatus.WORK_IN_PROGRESS;
            break;
        case ERR:
            msg = payload as string;
            status = ContactStateStatus.ERROR;
            break;
        case REFRESH:
            msg = undefined;
            status = ContactStateStatus.READY;
            contacts = payload as Contact[];
            break;
        case EDIT:
            contacts = contacts?.map(c => c.id === payload ? { ...c, isEditable: true } : c);
            break;
        case CANCEL_EDIT:
            contacts = contacts?.map(c => c.id === payload ? { ...c, isEditable: undefined } : c);
            break;
    }

    return { contacts, msg, status };
}