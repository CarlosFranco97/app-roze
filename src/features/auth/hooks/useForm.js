// src/pages/auth/hooks/useForm.js
import { useState } from "react";
import loginUser  from "../api/loginUser";
import { useNavigate } from "react-router-dom";

const useForm = (initialState) => {
  const [formState, setFormState] = useState(initialState);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormState({
      ...formState, 
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await loginUser(formState);

      const { token, user } = response.data;

      console.log(response);
    
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

     
      navigate("/aboutus"); 
    } catch (err) {
      console.error("Error al iniciar sesión", err);
      setError("Correo o contraseña incorrectos");
    }
  };

  return {
    formState,
    handleChange,
    handleLogin,
    error,
  };
};

export default useForm;

