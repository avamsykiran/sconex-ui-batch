import Contact from "../../models/Contact"
import { ADD, CANCEL_EDIT, ContactAction, DELETE, EDIT, UPDATE } from "./contactActions";

interface ContactReducerState {
    contacts: Contact[];
    nextId: number;
}

let initailState: ContactReducerState = { contacts: [], nextId: 1 };

export const contactReducer = (state: ContactReducerState = initailState, action: ContactAction): ContactReducerState => {
    let { contacts, nextId } = state;

    let { type, payload } = action;

    switch (type) {
        case ADD:
            if (payload && typeof payload !== 'number') {
                let contact: Contact = payload;
                contact.id = nextId;
                contacts = [...contacts, contact];
                nextId = nextId + 1;
            }
            break;
        case UPDATE:
            if (payload && typeof payload !== 'number') {
                let contactToUpdate: Contact = payload;
                contacts = contacts.map(c => c.id === contactToUpdate.id ? { ...contactToUpdate, isEditable: undefined } : c);
            }
            break;
        case DELETE:
            contacts = contacts.filter(c => c.id !== payload);
            break;
        case EDIT:
            contacts = contacts.map(c => c.id === payload ? { ...c, isEditable: true } : c);
            break;
        case CANCEL_EDIT:
            contacts = contacts.map(c => c.id === payload ? { ...c, isEditable: undefined } : c);
            break;
    }

    return { contacts, nextId };
}