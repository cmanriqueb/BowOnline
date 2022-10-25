import {useNavigate } from "react-router-dom";
//import queryString from 'query-string';
//import {useForm} from '../../hooks/useForm';


export const StudentContactFormComponent = () => {
  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();
    // 👇️ redirect to /sCourses
    navigate('/sCourses');
  };
    return (
      <div className="row justify-content-center">
        <div className="col-5 ">
          <br /><br /><br />
        <h4>STUDENT CONTACT FORM</h4>
        <hr />
        <form onSubmit={handleSubmit}>
          <h3>Full Name</h3>
          <input type="text"
              placeholder="Type your full name"
              className="form-control"
              name="fulName"
              autoComplete="off"
          />
          <br />
          <h3>e-mail</h3>
          <input type="text"
              placeholder="Type your email"
              className="form-control"
              name="email"
              autoComplete="off"
          />
          <br />
          <h3>Message</h3>
          <textarea
              placeholder="Type your message"
              className="form-control"
              name="message"
              autoComplete="off"
          />
          <br />
          <button className="bnt btn-outline-primary">
              Submit
          </button>
        </form>
      </div>
    </div>
    )
  }
