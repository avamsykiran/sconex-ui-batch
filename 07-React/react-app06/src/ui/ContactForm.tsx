import { SyntheticEvent, useState } from "react";
import Contact from "../models/Contact";
import { useDispatch } from "react-redux";
import { createCancelEditContactAction } from "../redux/contacts/contactActions";
import { createAddContactActionThunk, createUpdateContactActionThunk } from "../redux/contacts/contactThunks";

interface ContactFormProps {    
    c?: Contact;    
}

const ContactForm = ({ c }: ContactFormProps) => {

    let [contact, setContact] = useState<Contact>(c ? { ...c } : { id: 0, fullName: '', mobile: '', mailId: '' });

    const dispatch = useDispatch<any>();

    const formSubmited = (event: SyntheticEvent) => {
        event.preventDefault();
        if(contact.isEditable){
            dispatch(createUpdateContactActionThunk({...contact}));
        }else {
            dispatch(createAddContactActionThunk({...contact}));
            setContact({ id: 0, fullName: '', mobile: '', mailId: '' });
        }
    }

    const reset = () => {
        if(contact.isEditable){
            dispatch(createCancelEditContactAction(contact.id));
        }else{
            setContact({ id: 0, fullName: '', mobile: '', mailId: '' });
        }
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