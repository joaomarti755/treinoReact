import { useState } from "react"
export default function App() {

    const [number, setNumber] = useState(0)

    function menos() {
    setNumber (number -1)
        console.log(number)
    }
    function mais() {
    setNumber (number +1)
        console.log(number)
    }
    function reset() {
    setNumber(0)
    }

    return <div>
        <h1>Contador</h1>
        <p>{number}</p>
        <button onClick={menos}>Menos</button>
        <button onClick={reset}>Reset</button>
        <button onClick={mais}>Mais</button>
    </div>
}