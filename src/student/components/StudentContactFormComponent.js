import React from "react";

class StudentContactFormComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
          fullName:'',
          email:'',
          message:''
        }
    }

     handleFullname=(event)=>{
        this.setState({
          fullName:event.target.value
        })
     }


     handleEmail=(event)=>{
        this.setState({
            email:event.target.value
        })
     }


     handleMessage=(event)=>{
        this.setState({
            message:event.target.value
        })
     }


     handleSubmit = event => {
      alert(`${this.state.fullName} your message was sent, you will recieve a reply on ${this.state.email}`)
      event.preventDefault(); //prevent default refresh
      this.setState({
        fullName:'',
        email:'',
        message:''
      });
   }
   render(){
      const {fullName,email, message} = this.state 

    return (
      <div className="row justify-content-center">
        <div className="col-5 ">
          <br /><br /><br />
        <h4>STUDENT CONTACT FORM</h4>
        <hr />
        <form onSubmit={this.handleSubmit}>
          <h3>Full Name</h3>
          <input type="text"
              placeholder="Type your full name"
              className="form-control"
              value={ fullName }
              onChange={this.handleFullname}
          />
          <br />
          <h3>e-mail</h3>
          <input type="text"
              placeholder="Type your email"
              className="form-control"
              value={ email }
              onChange={this.handleEmail}
          />
          <br />
          <h3>Message</h3>
          <textarea
              placeholder="Type your message"
              className="form-control"
              value={ message }
              onChange={this.handleMessage}
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
}

export default StudentContactFormComponent