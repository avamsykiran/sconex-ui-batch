import React, { SyntheticEvent } from "react";
import Contact from "../models/Contact";

interface ContactFormState extends Contact {

}

interface ContactFormProps {
    save: (contact:Contact) => void;
}

export default class ContactForm extends React.Component<ContactFormProps, ContactFormState> {

    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            fullName: '',
            mobile: '',
            mailId: ''
        }
    }

    formSubmited = (event:SyntheticEvent) => {
        event.preventDefault();
        this.props.save({...this.state});
        this.reset();
    }

    reset = () => {
        this.setState({ id: 0, fullName: '', mobile: '', mailId: '' });
    }

    render() {
        let { id, fullName, mobile, mailId } = this.state;

        return (
            <form className="row border-bottom p-2" onSubmit={this.formSubmited}>
                <div className="col-1 text-end">
                    {id}
                </div>
                <div className="col">
                    <input className="form-control" type="text" value={fullName}
                        onChange={e => this.setState({ fullName: e.target.value })} />
                </div>
                <div className="col-2 text-center">
                    <input className="form-control" type="text" value={mobile}
                        onChange={e => this.setState({ mobile: e.target.value })} />
                </div>
                <div className="col-3">
                    <input className="form-control" type="text" value={mailId}
                        onChange={e => this.setState({ mailId: e.target.value })} />
                </div>
                <div className="col-2 text-center">
                    <button className="btn btn-sm btn-primary me-1">
                        <i className="bi bi-plus-lg"></i>
                    </button>
                    <button type="button" className="btn btn-sm btn-danger" onClick={_e => this.reset()}>
                        <i className="bi bi-x-lg"></i>
                    </button>
                </div>
            </form>
        );
    }
}
