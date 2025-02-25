import axios, { AxiosResponse } from "axios";
import Contact from "../models/Contact";

const apiUrl = "http://localhost:9898/contacts";

export default class ContactService {
    
    getAllContacts = () : Promise<AxiosResponse<Contact[]>> => axios.get<Contact[]>(apiUrl);
    
    getContactById = (id:number) : Promise<AxiosResponse<Contact>> => axios.get<Contact>(`${apiUrl}/${id}`);
    
    deleteContactById = (id:number) : Promise<AxiosResponse<void>> => axios.delete<void>(`${apiUrl}/${id}`);
    
    addContact = (c:Contact) : Promise<AxiosResponse<Contact>> => axios.post<Contact>(apiUrl,c);
    
    updateContact = (c:Contact) : Promise<AxiosResponse<Contact>> => axios.put<Contact>(`${apiUrl}/${c.id}`,c);
}
