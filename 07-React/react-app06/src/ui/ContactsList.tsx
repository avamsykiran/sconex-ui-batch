import Contact from "../models/Contact";
import ContactsListHeader from "./ContactsListHeader";
import ContactsListItem from "./ContactsListItem";
import MsgBox from "./MsgBox";
import ContactForm from "./ContactForm";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "../redux/store";
import { useEffect } from "react";
import { createLoadContactsActionThunk } from "../redux/contacts/contactThunks";
import { ContactReducerState, ContactStateStatus } from "../redux/contacts/contactReducer";

const ContactsList = () => {
    
    const dispatch = useDispatch<any>();

    useEffect(() => {
        dispatch(createLoadContactsActionThunk());
    },[]);

    let {contacts,msg,status} = useSelector<StoreState,ContactReducerState>( 
        (state:StoreState) => state.contactsState
    );


    return (
        <section className="col-sm-8 mx-auto p-2">
            <h3>Contacts List</h3>

            {
                msg && <MsgBox msg={msg} msgType={status===ContactStateStatus.WORK_IN_PROGRESS?"info":"err"} /> 
            }

            <ContactsListHeader />
            <ContactForm />
            {
                contacts && contacts.length===0 ?
                <MsgBox msg="No contacts to display" msgType="info" /> :
                    contacts?.map(c => (
                        c.isEditable ?
                            <ContactForm key={c.id} c={c} /> :
                            <ContactsListItem key={c.id} c={c} />
                    ))
            }
        </section>
    );
};

export default ContactsList;