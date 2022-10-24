import {Link, useNavigate } from "react-router-dom";
//import queryString from 'query-string';
//import {useForm} from '../../hooks/useForm';


export const StudentLoginComponent =  () => {
  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();
    // 👇️ redirect to /sCourses
    navigate('/sCourses');
  };
  
  // const location = useLocation();
  // const {q=''} = queryString.parse(location.search);
 
  //  const {searchText, onInputChange} = useForm({
  //    searchText: q
  //  });
 
  //  const onSearchSubmit = (event) => {
  //    event.preventDefault();
  //    console.log({searchText});
  //    navigate(`?q=${searchText}`);
  //  }
    return (
      <div className="row justify-content-center">
        <div className="col-5 ">
        <h4>STUDENT LOGIN</h4>
        <hr />
        <form onSubmit={handleSubmit}>
          <h3>username</h3>
          <input type="text"
              placeholder="Type your username"
              className="form-control"
              name="username"
              autoComplete="off"
          />
          <br />
          <h3>password</h3>
          <input type="text"
              placeholder="Type your password"
              className="form-control"
              name="[password]"
              autoComplete="off"
          />
          <br />
          <button className="bnt btn-outline-primary">
              Search
          </button>
          <br />
          <br />
          <Link to="/sSignup">
            New User? Sign-up here
          </Link>
        </form>
      </div>
    </div>
    )
  }