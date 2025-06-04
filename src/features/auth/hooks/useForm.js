import { useState } from "react";

const useForm = (initialState) => {
    const [formState, setFormState] = useState(initialState);

    const handleChange = ({target}) => {
        const { name, value } = target;
        setFormState({
            ...formState, [name]: value
        });
    }

    const handleSubmit = () => {

    }


    return {
        formState,
        handleChange,
        handleSubmit
    }
}

export default useForm;