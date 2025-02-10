import Contact from "../models/Contact";

interface ContactsListItemProps {
    c: Contact;
    del: (id:number) => void;
    edit: (id:number) => void;
}

const ContactsListItem = ({ c,del,edit }: ContactsListItemProps) => (
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
            <button type="button" className="btn btn-sm btn-info me-1" onClick={e => edit(c.id)}>
                <i className="bi bi-pen"></i>
            </button>
            <button type="button" className="btn btn-sm btn-danger" onDoubleClick={e => del(c.id)}>
                <i className="bi bi-trash"></i>
            </button>
        </div>
    </div>
);

export default ContactsListItem;