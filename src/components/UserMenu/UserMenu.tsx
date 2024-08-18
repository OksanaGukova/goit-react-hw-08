import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";
import css from './UserMenu.module.css'
import { AppDispatch } from "../../redux/store";

export const UserMenu = () => {
  const dispatch: AppDispatch = useDispatch();
  const { name } = useSelector(selectUser);

  return (
    <div className={css.container}>
      <p className={css.text}>Welcome, {name}</p>

      <button
        className={css.LogoutBtn}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </div>
  );
};


