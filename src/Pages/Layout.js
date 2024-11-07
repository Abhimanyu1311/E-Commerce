import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className='w-auto h-12 bg-blue-300 flex justify-end items-center px-6'>
        <div className='flex items-center space-x-4'>
          <Link to="/" className='hover:border px-2 border-slate-700'>Home</Link>
          <Link to="/about" className='hover:border px-2 border-slate-700'> About</Link>
          <Link to="/dashboard" className='hover:border px-2 border-slate-700'>Dashboard</Link>
          <Link to="/cart" className='hover:border px-2 border-slate-700'>Cart</Link>
          <Link to="/login" className='hover:border px-2 border-slate-700'>Login</Link>
        </div>
      </nav>
      <Outlet />
    </>
  )
};

export default Layout;