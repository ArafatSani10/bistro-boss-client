import { FaGoogle } from "react-icons/fa";
import UseAuth from "../Hooks/UseAuth";
import UseAxiosPublic from "../Hooks/UseAxiosPublic";
import { useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const { googleSignIn } = UseAuth();
    const axiosPublic = UseAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result =>{
                console.log(result.user);
                const userInfo = {
                    email:result.user?.email,
                    name:result.user?.displayName
                }
                axiosPublic.post('/users', userInfo)
                .then(res =>{
                    console.log(res.data);
                    navigate('/')
                })
            })
    }
    return (
        <div>
            <div className="divider"></div>
            <div>
                <button onClick={handleGoogleSignIn}>
                    <div className="flex items-center gap-4 border p-3 bg-slate-500 hover:bg-sky-400 rounded-lg">
                        <FaGoogle></FaGoogle>
                        <h1 className="text-xl">Google</h1>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;