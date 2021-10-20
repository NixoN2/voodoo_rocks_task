import "./Search.css";
import { FaSearch } from "react-icons/fa";
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import {actions} from "../../store/store";
import {useDispatch} from "react-redux";
const Search = () => {
    const dispatch = useDispatch();
    const onInputChange = (e) => dispatch(actions.setSearch(e.target.value));
    return (
        <div className="pt-4 d-flex justify-content-center">
            <InputGroup className="w-75">
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>Search<FaSearch /></InputGroupText>
                </InputGroupAddon>
                <Input onChange={onInputChange} placeholder="Filter by author..." />
            </InputGroup>
        </div>
    )
}
export default Search;