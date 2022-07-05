import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import '../assets/sass/reset.sass';

function App(props) {
  const navigate = useNavigate();

  const isAuth = () => {
    return true;
  }
  useEffect(() => {
    isAuth() ? navigate("/home"): navigate("/login");
  },[]);
  
  return (
    <>
      {props.children}
    </>
  );
}

export default App;
