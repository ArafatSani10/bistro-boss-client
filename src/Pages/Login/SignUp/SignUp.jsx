import { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../Provides/AuthProviders';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';
import UseAxiosPublic from '../../Hooks/UseAxiosPublic';
import SocialLogin from '../SocialLogin';

const SignUp = () => {
    const axiosPublic = UseAxiosPublic();

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = data => {

        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);

                updateUserProfile(data.name, data.PhotoUrl)
                    .then(() => {
                        // console.log(' user profile info updated ')
                        const userInfo = {
                            name: data.name,
                            email: data.email
                        }

                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log('user added to the database')
                                    reset();
                                    Swal.fire("user created succesful!!!");
                                    navigate('/');
                                }
                            })

                    })
                    .catch(error => console.log(error))
            })


    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <Helmet>
                <title>
                    Bistro Boss || signUp
                </title>
            </Helmet>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign Up now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: "Name is required" })} placeholder="Name" name="name" className="input input-bordered" />
                            {errors.name && <span className='text-red-600 text-[20px] font-bold'>{errors.name.message}</span>}
                        </div>
                        {/* photo */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoURL</span>
                            </label>
                            <input type="text" {...register("PhotoURL", { required: "PhotoURL  is required" })} placeholder="PhotoURL " name="PhotoURL" className="input input-bordered" />
                            {errors.PhotoUrl && <span className='text-red-600 text-[20px] font-bold'>{errors.PhotoUrl.message}</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: "Email is required" })} name="email" placeholder="email" className="input input-bordered" />
                            {errors.email && <span className='text-red-600 text-[20px] font-bold'>{errors.email.message}</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", {
                                required: true,

                                minLength: 6,
                                maxLength: 20,
                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                            })} placeholder="password" className="input input-bordered" />
                            {errors.password?.type === "required" && (
                                <p className='text-red-600 text-[20px] font-bold '>password is required </p>
                            )}
                            {errors.password?.type === "minLength" && (
                                <p className='text-red-600 text-[20px] font-bold '>password is must be 6 characters </p>
                            )}
                            {errors.password?.type === "maxLength" && (
                                <p className='text-red-600 text-[20px] font-bold '>password is less than 20  characters </p>
                            )}
                            {errors.password?.type === "pattern" && (
                                <p className='text-red-600 text-[20px] font-bold '>password must have one uppercase one lowecase,one number and one special character </p>
                            )}
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                    </form>

                    <p><small>already have an account</small> <Link to='/login'>Login</Link></p>
                    <SocialLogin></SocialLogin>
                  
                </div>
            </div>
        </div>
    );
};

export default SignUp;
