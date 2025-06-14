import { useSelector } from "react-redux";
import { selectError, selectLoading } from "../../redux/contacts/selectors";
import ContactForm from "../../components/ContactForm/ContactForm"
import SearchBox from "../../components/SearchBox/SearchBox"
import ContactList from "../../components/ContactList/ContactList";
import contactsPageCss from "./ContactsPage.module.css"

export default function TasksPage() {
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);

    return (
        <div className={contactsPageCss.box}>
            <ContactForm />
            <SearchBox />
            {loading && !error && <b>Request in progress...</b>}
            <ContactList />
        </div>
    )
}