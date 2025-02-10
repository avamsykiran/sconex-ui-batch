import React from "react";
import Contact from "../models/Contact";
import ContactsListHeader from "./ContactsListHeader";
import ContactsListItem from "./ContactsListItem";
import MsgBox from "./MsgBox";
import ContactForm from "./ContactForm";

interface ContactsListProps {

}

interface ContactsListState {
    contacts: Contact[] | null;
    nextId: number;
}

export default class ContactsList extends React.Component<ContactsListProps, ContactsListState> {

    constructor(props:ContactsListProps) {
        super(props);
        this.state = {
            contacts: [
                { id: 1, fullName: "Vamsy Kiran", mobile: "9052224753", mailId: "vamsy.kiran@sconexsoft.com" },
                { id: 2, fullName: "KGN Murthy", mobile: "9999999999", mailId: "murthy@sconexsoft.com" },
                { id: 3, fullName: "V Kiran Kumar", mobile: "1234123423", mailId: "kiran@sconexsoft.com" }
            ],
            nextId: 4
        }
    }

    addContact = (c: Contact) => {
        c.id = this.state.nextId;
        this.setState({ contacts: [...this.state.contacts??[], c], nextId: this.state.nextId + 1 });
    }

    delContact = (id:number) => {
        this.setState({ contacts: this.state.contacts!.filter(c => c.id !== id) });
    }

    markContactEditable = (id:number) => {
        this.setState({ contacts: this.state.contacts!.map( c => c.id!==id?c:{...c,isEditable:true}) });
    }
    
    updateContact = (ct: Contact) => {                        
        this.setState({ contacts: this.state.contacts!.map( c => c.id===ct.id?{...ct,isEditable:undefined}:c) });        
    }

    unmarkContactEditable = (id:number) => {
        this.setState({ contacts: this.state.contacts!.map( c => c.id!==id?c:{...c,isEditable:undefined}) });
    }

    render() {
        let { contacts } = this.state;        

        return (
            <section className="col-sm-8 mx-auto p-2">
                <h3>Contacts List</h3>

                <ContactsListHeader />
                <ContactForm save={this.addContact} />
                {
                    contacts === null || contacts.length === 0 ?
                        <MsgBox msg="No contacts to display" msgType="info" /> :
                        contacts?.map(c => (
                            c.isEditable?
                            <ContactForm key={c.id} c={c} save={this.updateContact} cancelEdit={this.unmarkContactEditable} /> :
                            <ContactsListItem key={c.id} c={c} del={this.delContact} edit={this.markContactEditable} />
                        ))
                }
            </section>
        );
    }
} 