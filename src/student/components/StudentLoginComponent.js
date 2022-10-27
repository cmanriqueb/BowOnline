import React from "react";

class StudentLoginComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
          fullName:'',
          password:'',
        }
    }

     handleFullname=(event)=>{
        this.setState({
          fullName:event.target.value
        })
     }
     handlepassword=(event)=>{
        this.setState({
            password:event.target.value
        })
     }
     handleSubmit = event => {
      alert(`WELCOME ${this.state.fullName}`)
      event.preventDefault(); //prevent default refresh
      this.setState({
        fullName:'',
        password:'',
      });
      window.location.href = '/sCourses';
   }
   render(){
      const {fullName,password} = this.state 

    return (
      <div className="row justify-content-center">
        <div className="col-5 ">
          <br /><br /><br />
        <h4>STUDENT LOGIN</h4>
        <hr />
        <form onSubmit={this.handleSubmit}>
          <h3>Userame</h3>
          <input type="text"
              placeholder="Type your username"
              className="form-control"
              value={ fullName }
              onChange={this.handleFullname}
          />
          <br />
          <h3>Password</h3>
          <input type="password"
              placeholder="Type your password"
              className="form-control"
              value={ password }
              onChange={this.handlepassword}
          />
          <br />
          <br />
          <button className="bnt btn-outline-primary">
              login
          </button>
        </form>
      </div>
    </div>
    )
    }
}

export default StudentLoginComponent