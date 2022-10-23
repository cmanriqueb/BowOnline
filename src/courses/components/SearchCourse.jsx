import { Link, useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string';
import {useForm} from '../../hooks/useForm';
import {getCourseByName} from '../helpers'
import { SearchResultCourseCard } from "./SearchResultCourseCard";

export const SarchCourse = () => {

 const navigate = useNavigate();
 const location = useLocation();
 const {q=''} = queryString.parse(location.search);
 const courses = getCourseByName(q);

 const showSearchMessages = (q.length === 0);
 const showNotFoundMessage = (q.length > 0) && courses.length === 0;

  const {searchText, onInputChange} = useForm({
    searchText: q
  });

  const onSearchSubmit = (event) => {
    event.preventDefault();
    console.log({searchText});
    navigate(`?q=${searchText}`);
  }

  return (
    <>
    <h1>SEARCH COURSE</h1>
    <hr />
    <div className="row">
        <div className="col-5">
            <h4>Search for a course based on name</h4>
            <hr />
            <form onSubmit={onSearchSubmit}>
                <input type="text"
                    placeholder="Search a course"
                    className="form-control"
                    name="searchText"
                    autoComplete="off"
                    value={searchText}
                    onChange={onInputChange}
                />
                <br />
                <button className="bnt btn-outline-primary">
                    Search
                </button>
            </form>
        </div>
        <div className="col-7">
            <h4>Results</h4>
            <hr />
            <div className="alert alert-primary" style={{ display: showSearchMessages ? '' : 'none'}}>
                Search a course
            </div>
            <div className="alert alert-danger"style={{ display: showNotFoundMessage ? '' : 'none'}}>
                No course found with name <b>{q}</b>
            </div>
            <div>{
                    courses.map( course => (
                        <SearchResultCourseCard key={course.id} {...course}/>
                    ))
                }
            </div>
        </div>
    </div>
    </>
  )
}
