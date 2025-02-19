import { SyntheticEvent, useState } from "react";
import Contact from "../models/Contact";

interface ContactFormProps {
    save: (contact: Contact) => void;
    c?: Contact;
    cancelEdit?: (id: number) => void;
}

const ContactForm = ({ save, c, cancelEdit }: ContactFormProps) => {

    let [contact, setContact] = useState<Contact>(c ? { ...c } : { id: 0, fullName: '', mobile: '', mailId: '' });

    const formSubmited = (event: SyntheticEvent) => {
        event.preventDefault();
        save({ ...contact });
        if (!contact.isEditable) {
            setContact({ id: 0, fullName: '', mobile: '', mailId: '' });
        }
    }

    const reset = () => {
        contact.isEditable ?
            cancelEdit!(contact.id) :
            setContact({ id: 0, fullName: '', mobile: '', mailId: '' });
    }

    return (
        <form className="row border-bottom p-2" onSubmit={formSubmited}>
            <div className="col-1 text-end">
                {contact.id}
            </div>
            <div className="col">
                <input className="form-control" type="text" value={contact.fullName}
                    onChange={e => setContact({ ...contact,fullName: e.target.value })} />
            </div>
            <div className="col-2 text-center">
                <input className="form-control" type="text" value={contact.mobile}
                    onChange={e => setContact({ ...contact,mobile: e.target.value })} />
            </div>
            <div className="col-3">
                <input className="form-control" type="text" value={contact.mailId}
                    onChange={e => setContact({ ...contact,mailId: e.target.value })} />
            </div>
            <div className="col-2 text-center">
                <button className="btn btn-sm btn-primary me-1">
                    {
                        contact.isEditable ?
                            <i className="bi bi-floppy"></i> :
                            <i className="bi bi-plus-lg"></i>
                    }
                </button>
                <button type="button" className="btn btn-sm btn-danger" onClick={_e => reset()}>
                    <i className="bi bi-x-lg"></i>
                </button>
            </div>
        </form>
    );
};

export default ContactForm;