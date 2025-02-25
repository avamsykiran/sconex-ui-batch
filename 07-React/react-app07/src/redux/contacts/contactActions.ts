import { UnknownAction } from "@reduxjs/toolkit";
import Contact from "../../models/Contact";

export const WAIT:string ="WAIT";
export const ERR:string ="ERR";
export const REFRESH:string ="REFRESH CONTACTS";
export const EDIT:string = "EDIT CONTACT";
export const CANCEL_EDIT:string="CANCEL EDIT CONTACT";

export interface ContactAction extends UnknownAction {    
    payload?: Contact[] | string | number;
}

//action creators
export const createWaitForContactsAction = (msg:string): ContactAction => ({type:WAIT,payload:msg});
export const createErrForContactsAction = (msg:string): ContactAction => ({type:ERR,payload:msg});
export const createRefreshContactsAction = (contacts:Contact[]): ContactAction => ({type:REFRESH,payload:contacts});
export const createEditContactAction = (id:number): ContactAction => ({type:EDIT,payload:id});
export const createCancelEditContactAction = (id:number): ContactAction => ({type:CANCEL_EDIT,payload:id});
