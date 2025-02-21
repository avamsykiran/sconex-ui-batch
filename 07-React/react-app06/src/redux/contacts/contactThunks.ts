import { ThunkAction, UnknownAction} from "@reduxjs/toolkit";
import ContactService from "../../service/ContactService";
import { AxiosResponse } from "axios";
import { StoreState } from "../store";
import { ContactAction, createErrForContactsAction, createRefreshContactsAction, createWaitForContactsAction } from "./contactActions";
import Contact from "../../models/Contact";

//thunk action creators

const contactService : ContactService = new ContactService();

export const createLoadContactsActionThunk = ():ThunkAction<void, StoreState, unknown,UnknownAction> => async (dispatch) => {
    dispatch(createWaitForContactsAction("Please wait while loading data...!"));
    try{
        let resp : AxiosResponse<Contact[]> = await contactService.getAllContacts();
        dispatch(createRefreshContactsAction(resp.data));
    }catch(exception:any){
        console.error(exception);
        dispatch(createErrForContactsAction("Sorry! Unable to process the requested action! Please retry later!"));
    }
}

export const createAddContactActionThunk = (contact:Contact):ThunkAction<void, StoreState, unknown,ContactAction> => async (dispatch) => {
    dispatch(createWaitForContactsAction("Please wait while adding data...!"));
    try{
        await contactService.addContact(contact);
        dispatch(createLoadContactsActionThunk());
    }catch(exception:any){
        console.error(exception);
        dispatch(createErrForContactsAction("Sorry! Unable to process the requested action! Please retry later!"));
    }    
};

export const createUpdateContactActionThunk = (contact:Contact):ThunkAction<void, StoreState, unknown,ContactAction> => async (dispatch) => {
    dispatch(createWaitForContactsAction("Please wait while updating data...!"));
    try{
        contact.isEditable=undefined;
        await contactService.updateContact(contact);
        dispatch(createLoadContactsActionThunk());
    }catch(exception:any){
        console.error(exception);
        dispatch(createWaitForContactsAction("Sorry! Unable to process the requested action! Please retry later!"));
    }    
};

export const createDeleteContactActionThunk = (id:number):ThunkAction<void, StoreState, unknown,ContactAction> => async (dispatch) => {
    dispatch(createWaitForContactsAction("Please wait while deleting data...!"));
    try{
        await contactService.deleteContactById(id);
        dispatch(createLoadContactsActionThunk());
    }catch(exception:any){
        console.error(exception);
        dispatch(createWaitForContactsAction("Sorry! Unable to process the requested action! Please retry later!"));
    }    
};
