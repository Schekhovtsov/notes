import React from 'react';
import {useForm} from 'react-hook-form';

const Form = () => {

    const { register, handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = data => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='form-group'>
                <input placeholder='Введите заметку'
                       {...register("example")}
                />
            </div>
        </form>
    );
};

export default Form;