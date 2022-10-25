import { Link } from "react-router-dom";
import { enrolments } from "../data";

export const SearchResultCourseCard = ({
id,
name,
description,
term,
start_date,
end_date,
fee,
}) => {
  const removeEnrol = (event,courseId) => {
    event.preventDefault();
    console.log(courseId);
    //removeById(enrolments,courseId);
  }

  const imageURL = `/assets/bvc.jpg`;
  return (
    <div className="col">
        <form onSubmit={event => removeEnrol(event,{id})}>
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-4">
                        <img src={imageURL} className="card-img animate__animated animate__bounce" alt={name}></img>
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="course-tittle">{name}</h5>
                            {/* <h5 className="course-description">{description}</h5> */}
                            <br/>
                            <h5 className="course-term">TERM {term}</h5>
                            <h5 className="course-start_date">START DATE: {start_date}</h5>
                            <h5 className="course-end_date">END DATE: {end_date}</h5>
                            <h5 className="course-fee">FEE: {fee} CAD</h5>
                            <br />
                            <button className="bnt btn-outline-primary">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
  )
}
