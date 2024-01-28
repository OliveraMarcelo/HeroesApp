import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';


export const Navbar = () => {

    const navigate = useNavigate();
    const {user, logout} = useContext(AuthContext)
console.log(user);
    const onLogout = () => {
        logout()
        console.log('quiero salir xd');
        //replace true para que replace evita que vuelva al historial anterior 
        navigate('/login', {
            replace: true
        }) 
    };

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2 navbar_custom">

            <Link
                className="navbar-brand"
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse breakpoint-disabled-items ">
                <div className="navbar-nav ">

                    <NavLink
                        className={({ IsActive }) => `nav-item nav-link ${IsActive ? 'active' : ''}`}
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink
                        className={({ IsActive }) => `nav-item nav-link ${IsActive ? 'active' : ''}`}
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    <NavLink
                        className={({ IsActive }) => `nav-item nav-link ${IsActive ? 'active' : ''}`}
                        to="/hero"
                    >
                        Heroes
                    </NavLink>
                    <NavLink
                        className={({ IsActive }) => `nav-item nav-link ${IsActive ? 'active' : ''}`}
                        to="/search"
                    >
                        Buscador
                    </NavLink>
                </div>

            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">

                <ul className="navbar-nav ml-auto items-breakpoint breakpoint-disabled-items">
                    <span className="nav-item nav-link text-primary"
                    >
                        {user?.name}
                    </span>
                    <button className='nav-item nav-link btn' onClick={onLogout}>
                        Logout
                    </button>

                </ul>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>


        </nav>
    )
}
