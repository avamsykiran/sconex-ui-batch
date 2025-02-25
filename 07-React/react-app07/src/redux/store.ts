import { configureStore } from "@reduxjs/toolkit";
import { contactReducer } from "./contacts/contactReducer";
import {thunk,ThunkMiddleware} from 'redux-thunk';

const store = configureStore({
    reducer: {contactsState:contactReducer},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk as unknown as ThunkMiddleware)
});

export default store;

export type StoreState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
