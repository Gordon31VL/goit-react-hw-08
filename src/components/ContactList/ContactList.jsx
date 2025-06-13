import { useDispatch, useSelector } from "react-redux"
import Contact from "../Contact/Contact"
import ContactListStyle from "./ContactList.module.css"
import { deleteContact } from "../../redux/contactsOps"
import { selectFilteredContacts } from "../../redux/contactsSlice"

export default function ContactList() {
    const dispatch = useDispatch();

    const filteredContacts = useSelector(selectFilteredContacts);

    const handlerDelete = id => {
        dispatch(deleteContact(id))
    }

    return (
        <ul className={ContactListStyle.box}>
            {filteredContacts.map((contact) => {
                return (
                    <Contact key={contact.id} contact={contact} onDelete={handlerDelete}></Contact>
                )
            })}
        </ul>
    )
}