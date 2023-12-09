import { React } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getUsers } from "./redux/features/usersSlice";

export default function Users() {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.users.data);
  const loading = useSelector((state) => state.users.loading);

  return (
    <section className="users">
      <button onClick={() => dispatch(getUsers())} disabled={loading}>
        {!loading ? "Get Users" : "Loading ..."}{" "}
      </button>

      <ul>
        {users.map((user) => (
          <li key={user.id}> {user.name} </li>
        ))}
      </ul>
    </section>
  );
}