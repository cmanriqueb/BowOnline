import { Link, NavLink } from 'react-router-dom';


export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                BOW ONLINE
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={({isActive}) => `nav-item nav-link ${ isActive ? 'active':''}` }
                        to="/aHomePage"
                    >
                        ADMIN
                    </NavLink>

                    <NavLink 
                        className={({isActive}) => `nav-item nav-link ${ isActive ? 'active':''}` }
                        to="/sHomePage"
                    >
                        STUDENT
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}