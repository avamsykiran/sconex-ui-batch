import Contact from "../models/Contact";
import ContactsListHeader from "./ContactsListHeader";
import ContactsListItem from "./ContactsListItem";
import MsgBox from "./MsgBox";
import ContactForm from "./ContactForm";
import { useState } from "react";

const ContactsList = () => {

    let [contacts, setContacts] = useState<Contact[]>([
        { id: 1, fullName: "Vamsy Kiran", mobile: "9052224753", mailId: "vamsy.kiran@sconexsoft.com" },
        { id: 2, fullName: "KGN Murthy", mobile: "9999999999", mailId: "murthy@sconexsoft.com" },
        { id: 3, fullName: "V Kiran Kumar", mobile: "1234123423", mailId: "kiran@sconexsoft.com" }
    ]);

    let [nextId, setNextId] = useState<number>(4);

    const addContact = (c: Contact) => {
        c.id = nextId;
        setContacts([...contacts ?? [], c]);
        setNextId(nextId + 1);
    }

    const delContact = (id: number) => {
        setContacts(contacts!.filter(c => c.id !== id));
    }

    const markContactEditable = (id: number) => {
        setContacts(contacts!.map(c => c.id !== id ? c : { ...c, isEditable: true }));
    }

    const updateContact = (ct: Contact) => {
        setContacts(contacts!.map(c => c.id === ct.id ? { ...ct, isEditable: undefined } : c));
    }

    const unmarkContactEditable = (id: number) => {
        setContacts(contacts!.map(c => c.id !== id ? c : { ...c, isEditable: undefined }));
    }

    return (
        <section className="col-sm-8 mx-auto p-2">
            <h3>Contacts List</h3>

            <ContactsListHeader />
            <ContactForm save={addContact} />
            {
                contacts === null || contacts.length === 0 ?
                    <MsgBox msg="No contacts to display" msgType="info" /> :
                    contacts?.map(c => (
                        c.isEditable ?
                            <ContactForm key={c.id} c={c} save={updateContact} cancelEdit={unmarkContactEditable} /> :
                            <ContactsListItem key={c.id} c={c} del={delContact} edit={markContactEditable} />
                    ))
            }
        </section>
    );
};

export default ContactsList;