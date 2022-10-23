export const StudentContactFormComponent = () => {
  return (
    <form action="/sHomePage" id="contactForm">
    <h3>Student Contact Form</h3>
    <div className="mb-3">
      <label>First name</label>
      <input
        type="text"
        className="form-control"
        placeholder="First name"
      />
    </div>
    <div className="mb-3">
      <label>Last name</label>
      <input type="text" className="form-control" placeholder="Last name" />
    </div>
    <div className="mb-3">
      <label>Email address</label>
      <input
        type="email"
        className="form-control"
        placeholder="Enter email"
      />
    </div>
    <div className="mb-3">
      <label>Message</label>
      <br></br>
      <textarea className="mb-3" rows="4" cols="80" name="comment" form="contactForm">
            Enter text here...</textarea>
    </div>
    <div className="d-grid">
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </div>
  </form>
  )
}
