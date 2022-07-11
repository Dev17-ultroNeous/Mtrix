
import { useForm } from 'react-hook-form';
import axios from 'axios';

function Form() {
    const {
        register,
        handleSubmit,
    } = useForm();
    const onSubmit = (data) => {

        axios.post('http://localhost:8000/api/details', data).then((res) => {
            console.log(res.data);
        }).catch((err) => console.log(err))

    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input placeholder='Enter title' {...register('title', { required: true })} /><br />
            <input placeholder='Enter description' {...register('description', { required: true })} />
            <br />
            <input type="submit" />
        </form>
    );
}

export default Form;