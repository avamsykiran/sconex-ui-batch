import Contact from "../models/Contact";
import ContactsListHeader from "./ContactsListHeader";
import ContactsListItem from "./ContactsListItem";
import MsgBox from "./MsgBox";
import ContactForm from "./ContactForm";
import { useSelector } from "react-redux";
import { StoreState } from "../redux/store";

const ContactsList = () => {

    let contacts:Contact[] = useSelector<StoreState,Contact[]>( 
        (state:StoreState) => state.contactsState.contacts
    );

    return (
        <section className="col-sm-8 mx-auto p-2">
            <h3>Contacts List</h3>

            <ContactsListHeader />
            <ContactForm />
            {
                contacts === null || contacts.length === 0 ?
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