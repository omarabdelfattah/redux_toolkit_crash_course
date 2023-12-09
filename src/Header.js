import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleLogin, handleLogout, handleJobChange, handleResetJob } from "./redux/features/authSlice";
export default function Header() {
  const dispatch = useDispatch();
  const isLogged = useSelector(state => state.auth.isLogged );  
  const counter  = useSelector(state => state.counter.value);
  const user     = useSelector(state => state.auth.user);
  return (
    <header>
      <div> {counter} </div>
      {isLogged ? (
        <>
          <strong> Hello, {user.first_name} {user.last_name} | Position : ({user.job}) </strong>
          <div>
            <button style={{marginRight: '30px'}} onClick={() => dispatch(handleLogout())}> logout </button>
            <button onClick={() => dispatch(handleJobChange("Full stack web developer"))}> Switch to Full stack </button>
            <button onClick={() => dispatch(handleResetJob())}> Reset </button>
          </div>
        </>
      ) : (
        <button onClick={() => dispatch(handleLogin())}> login </button>
      )}
    </header>
  );
}
