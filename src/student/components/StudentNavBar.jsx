import { Link, NavLink, useNavigate } from 'react-router-dom';


export const StudentNavbar = () => {
    const navigate = useNavigate();
    const onLogout = () => {navigate('/',{replace:true})}
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                BOW ONLINE
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-brand">
                    <NavLink 
                        className={({isActive}) => `nav-item nav-link ${ isActive ? 'active':''}` }
                        to="/sHomePage"
                    >
                        STUDENT
                    </NavLink>
                </div>
                <div className="navbar-nav">
                    <NavLink 
                        className={({isActive}) => `nav-item nav-link ${ isActive ? 'active':''}` }
                        to="/sLogin"
                    >
                        Manage Courses
                    </NavLink>
                </div>
                <div className="navbar-nav">
                    <NavLink 
                        className={({isActive}) => `nav-item nav-link ${ isActive ? 'active':''}` }
                        to="/sCourseSearch"
                    >
                        Search Course
                    </NavLink>
                </div>
                <div className="navbar-nav">
                    <NavLink 
                        className={({isActive}) => `nav-item nav-link ${ isActive ? 'active':''}` }
                        to="/sContactForm"
                    >
                        Contact Form
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className='nav-item nav-link text-secondary'>
                        Carlos
                    </span>

                    <button className='nav-item nav-link btn'
                            onClick={onLogout}
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}