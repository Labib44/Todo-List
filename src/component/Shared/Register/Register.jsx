import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');

     // const [token] = useToken(createUserEmail);
    const navigate = useNavigate();
  

    const handleSignUp = (data) => {
        console.log(data);
        setSignUpError('');

        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast('User Created Successfully')
                navigate('/');
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {})
                    .catch(error=> console.log(error));
            })
            .catch(error => {
                console.log(error)
                setSignUpError(error.message);
            });
    }
    return (
        <div className='flex justify-center hero min-h-screen bg-base-200'>
            <div className='w-96'>
                <h1 className='text-center text-2xl font-bold'>Register</h1>

                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full m-3">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input type="name" {...register("name", { required: 'Name is required' })} className="input input-primary input-bordered w-full" />
                        {errors.name && <p role="alert" className='text-red-600'>{errors.name?.message}</p>}
                    </div>
                    <div className="form-control w-full m-3">
                        <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                        <input type="email" {...register("email", { required: 'Email is required' })} className="input input-primary input-bordered w-full" />
                        {errors.email && <p role="alert" className='text-red-600'>{errors.email?.message}</p>}
                    </div>

                    <div className="form-control w-full m-3">
                        <label className="label">
                            <span className="label-text">Your Password</span>
                        </label>
                        <input type="password" {...register("password", { required: "Password is required", minLength: { value: 6, message: 'Password must be 6 charecters long' } })} className="input input-primary input-bordered w-full" />
                        {errors.password && <p role="alert" className='text-red-600'>{errors.password?.message}</p>}
                    </div>
                    {signUpError && <p className='text-red-700'>{signUpError}</p>}
                    <input type="submit" className='btn btn-accent w-full m-3' />
                    <p className='p-3'>Already have an account ?<Link to='/login' className='text-primary'>Login</Link></p>
                </form>
                <div className="divider">OR</div>
                <button className="btn btn-outline w-full btn-accent m-3">Sign In with Google</button>
            </div>
        </div>
    );
};

export default Register;