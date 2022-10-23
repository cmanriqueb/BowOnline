import { useState } from 'react';
import PropTypes from 'prop-types';

export const CounterApp = ({value}) => {

  const [counter, setCounter] = useState(value); // useState ( valor inicial de la variable counter )

  const handleAdd = () => setCounter(counter+1) // también se puede escribir
                                                // setCounter( (c) => c + 1)   esto haría que c = counter y retorne : counter +1
  const handleSub = () => setCounter(counter-1)
  const handleReset = () => setCounter(value)

  return (
    <>
        <h1>CounterApp</h1>
        <h2> { counter } </h2>
        <button onClick={
            handleAdd // es lo mismo que ----> (event) => handleAdd(event)
        }>
            +1
        </button>
        <button onClick={
            handleSub // es lo mismo que ----> (event) => handleAdd(event)
        }>
            -1
        </button>
        <button onClick={
            handleReset // es lo mismo que ----> (event) => handleAdd(event)
        }>
            Reset
        </button>
    </>
  );
}


CounterApp.propTypes = {
    value: PropTypes.number
}
