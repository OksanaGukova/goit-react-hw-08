import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import css from "./SearchBox.module.css";
import { selectNameFilter } from "../../redux/filters/selectors";

export default function SearchBox() {
  const value = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  return (
    <div className={css.container}>
      <p className={css.text}>Find contact by name or phone number</p>
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
}
