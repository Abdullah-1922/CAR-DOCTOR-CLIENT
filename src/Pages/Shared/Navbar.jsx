import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

    const NavItems =<div className="flex gap-1 lg:gap-5 flex-col lg:flex-row">
    <NavLink className='btn btn-sm' to={'/'}><li> Home</li> </NavLink>
   <NavLink  to={'aboutUs'} className='btn btn-sm'  ><li > About</li> </NavLink>
    <NavLink  className='btn btn-sm' ><li> Services</li> </NavLink>
    <NavLink  className='btn btn-sm' ><li> Blog</li> </NavLink>
    <NavLink  className='btn btn-sm' ><li> Content</li> </NavLink>
    
    
    </div>



  return (
    <div className="h-[68px]">
     <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {
        NavItems
       }
      </ul>
    </div>
    <Link to={'/'} className="btn btn-ghost normal-case text-xl"> <img className="w-[50px]" src="https://i.ibb.co/mhdSzWB/logo.png" alt="" /></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
       {
        NavItems
       }
    </ul>
  </div>
  <div className="navbar-end">
  <button className="btn btn-outline  btn-sm btn-warning">Appointment </button>
  </div>
</div>
    </div>
  );
};

export default Navbar;
