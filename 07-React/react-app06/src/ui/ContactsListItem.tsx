import { useDispatch } from "react-redux";
import Contact from "../models/Contact";
import { createDeleteContactAction, createEditContactAction } from "../redux/contacts/contactActions";

interface ContactsListItemProps {
    c: Contact;
}

const ContactsListItem = ({ c }: ContactsListItemProps) => {

    const dispatch = useDispatch();

    const edit = (id:number) => { dispatch(createEditContactAction(id)) };
    
    const del = (id:number) => { dispatch(createDeleteContactAction(id)) };

    return (
        <div className="row border-bottom p-2">
            <div className="col-1 text-end">
                {c.id}
            </div>
            <div className="col">
                {c.fullName}
            </div>
            <div className="col-2 text-center">
                {c.mobile}
            </div>
            <div className="col-3">
                {c.mailId}
            </div>
            <div className="col-2 text-center">
                <button type="button" className="btn btn-sm btn-info me-1" onClick={_e => edit(c.id)}>
                    <i className="bi bi-pen"></i>
                </button>
                <button type="button" className="btn btn-sm btn-danger" onDoubleClick={_e => del(c.id)}>
                    <i className="bi bi-trash"></i>
                </button>
            </div>
        </div>
    );
};

export default ContactsListItem;