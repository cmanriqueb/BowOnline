import PropTypes from 'prop-types';

const getResult = (a,b) => a+b;

export const App = ({
    title, 
    number, 
    boolean}) => {
    // if (!title){
    //     throw new Error("Title can't be null")
    // }
    return (
    <>
    <h1>{getResult(3,5)}</h1>
    <h2>{title}</h2>
    <h2>{number}</h2>
    <h2>{boolean}</h2>
    </>
    )
}

App.propTypes = {
    title: PropTypes.string.isRequired,
    number: PropTypes.number,
    bool: PropTypes.bool
}

App.defaultProps = {
    title: "App Title"
}