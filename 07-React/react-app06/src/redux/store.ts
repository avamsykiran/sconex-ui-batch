import { configureStore } from "@reduxjs/toolkit";
import { contactReducer } from "./contacts/contactReducer";

const store = configureStore({
    reducer: {contactsState:contactReducer}
});

export default store;

export type StoreState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

/*
const store = configureStore({
    reducer: {
        contactsState:contactReducer,
        empsState:empReducer,
        deptsState:deptReducer
    }
});

store
    |-contactsState
    |   |-contacts
    |   |-nextId
    |
    |-empsState
    |-deptsState
*/