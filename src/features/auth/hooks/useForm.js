// src/pages/auth/hooks/useForm.js
import { useState } from "react";
import api from "../../../api/api";
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
      const response = await api.post("/auth/login", formState);

      const { token, user } = response.data;

    
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

     
      navigate("/dashboard"); 
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

