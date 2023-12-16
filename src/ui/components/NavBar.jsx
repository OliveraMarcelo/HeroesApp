import { Link, NavLink, useNavigate } from 'react-router-dom';


export const Navbar = () => {

    const navigate = useNavigate();

    const onLogout = () => {
        console.log('quiero salir xd');
        //replace true para que replace evita que vuelva al historial anterior 
        navigate('/login',{
            replace:true
        })
    };

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">

            <Link
                className="navbar-brand"
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

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
                        to="/heroes"
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
                <ul className="navbar-nav ml-auto">
                    <span className="nav-item nav-link text-primary"
                    >
                        Marcelo Olivera
                    </span>
                    <button className='nav-item nav-link btn' onClick={onLogout}>
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}