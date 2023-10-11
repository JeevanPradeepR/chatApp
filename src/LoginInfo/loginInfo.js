import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "./user";
import {useState} from 'react'
function LoginInfo() {
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();

  const [name, setName] = useState('')
  const [age, setAge] = useState(0)
  const [email, setEmail] = useState('')

  return (
    
    <div>
  
      Iam login component
      <br />
      <input value={name} onChange={e=>setName(e.target.value)}></input>
      <button
        onClick={() =>
          dispatch(
            login({ name: name, age: "25", email: "email@email.com" })
          )
        }
      >
        sample
      </button>
      <br />
      {user.email} <br />
      {user.age} <br />
      {user.name}
      <br />
      <button onClick={() => dispatch(logout())}>Logout</button>
      <br />
    </div>
  );
}
export default LoginInfo;
