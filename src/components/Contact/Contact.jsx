import ContactStyles from './Contact.module.css'

export default function Contact({ contact, onDelete }) {
    
    return (
        <>
                <li className={ContactStyles.box}>
                    <p>{contact.name}</p>
                    <p>{contact.number}</p>
                    <button type="button" onClick={() => onDelete(contact.id) } className={ContactStyles.btn}>Delete</button>
                </li>    
        </>
    )
}