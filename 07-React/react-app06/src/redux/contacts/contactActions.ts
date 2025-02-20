import { UnknownAction } from "@reduxjs/toolkit";
import Contact from "../../models/Contact";

export const ADD:string = "ADD CONTACT"; 
export const UPDATE:string ="UPDATE CONTACT";
export const DELETE:string ="DELETE CONTACT";
export const EDIT:string = "EDIT CONTACT";
export const CANCEL_EDIT:string="CANCEL EDIT CONTACT";

export interface ContactAction extends UnknownAction {    
    payload?: Contact | number;
}

//action creators
export const createAddContactAction = (contact:Contact): ContactAction  => ({type:ADD,payload:contact});
export const createUpdateContactAction = (contact:Contact): ContactAction => ({type:UPDATE,payload:contact});
export const createDeleteContactAction = (id:number): ContactAction => ({type:DELETE,payload:id});
export const createEditContactAction = (id:number): ContactAction => ({type:EDIT,payload:id});
export const createCancelEditContactAction = (id:number): ContactAction => ({type:CANCEL_EDIT,payload:id});
