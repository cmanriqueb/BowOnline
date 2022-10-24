import {StudentNavBar} from './StudentNavBar';
import {useNavigate } from "react-router-dom";
import queryString from 'query-string';
import {useForm} from '../../hooks/useForm';


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
      <div className="col-5">
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
      </form>
    </div>
      // <form onSubmit={onSearchSubmit}>
      //   <h3>Sign In</h3>
      //   <div className="mb-3">
      //     <label>Email address</label>
      //     <input
      //       type="email"
      //       className="form-control"
      //       placeholder="Enter email"
      //     />
      //   </div>
      //   <div className="mb-3">
      //     <label>Password</label>
      //     <input
      //       type="password"
      //       className="form-control"
      //       placeholder="Enter password"
      //     />
      //   </div>
      //   <div className="mb-3">
      //     <div className="custom-control custom-checkbox">
      //       <input
      //         type="checkbox"
      //         className="custom-control-input"
      //         id="customCheck1"
      //       />
      //       <label className="custom-control-label" htmlFor="customCheck1">
      //         Remember me
      //       </label>
      //     </div>
      //   </div>
      //   <div className="d-grid">
      //     <button type="submit" className="btn btn-primary">
      //       Submit
      //     </button>
      //   </div>
      //   <p className="forgot-password text-right">
      //     Forgot <a href="#">password?</a>
      //   </p>
      //   <p className="forgot-password text-right">
      //       New User? <a href="/sSignUp">sign up!</a>
      //     </p>
      // </form>
    )
  }