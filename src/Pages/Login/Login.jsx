import { Link } from 'react-router-dom';
import img from './Login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
const Login = () => {
const {signIn}=useContext(AuthContext)
const handleSignIn=e=>{
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    console.log(email,password);
    signIn(email,password)
    .then(res=>{
        const user=res.user
        console.log(user);
    }).catch(err=>console.log(err.message))

}



  return (
    <div>
      <div className='hero min-h-screen bg-base-200'>
        <div className='hero-content  flex-col lg:flex-row'>
          <div className=' mr-5'>
          <img src={img} alt="" />
          </div>
          <div className='card flex-shrink-0 w-full  lg:w-1/2 shadow-2xl bg-base-100'>
            <form onSubmit={handleSignIn} className='card-body'>
            <h1 className='text-3xl font-bold text-center'>Login now!</h1>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Email</span>
                </label>
                <input
                name='email'
                  type='email'
                  placeholder='email'
                  className='input input-bordered'
                  required
                />
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Password</span>
                </label>
                <input
                name='password'
                  type='password'
                  placeholder='password'
                  className='input input-bordered'
                  required
                />
                <label className='label'>
                  <a href='#' className='label-text-alt link link-hover'>
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className='form-control mt-6'>
                <button type='submit' className='btn btn-primary'>Login</button>
              </div>
            </form>
            <p className='text-center pb-6'>New to Car Doctors <Link  className='text-red-600 font-bold hover:text-blue-600' to={'/signup'}>Sign Up</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
