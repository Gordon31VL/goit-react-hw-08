import { useId } from "react"
import searchStyles from "./SearchBox.module.css"
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
    const dispatch = useDispatch();
    const searchNameId = useId();

    return (
        <div className={searchStyles.searchBox}>
            <label htmlFor={searchNameId}>Find contacts by name</label>
            <input type="text" name="searchByName" id={searchNameId} onChange={(e) => dispatch(changeFilter(e.target.value))} className={searchStyles.textInput}></input>
        </div>
    )
}