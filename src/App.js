import "./App.css";
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

    return <div className="conter">
        <h1>Contador</h1>
        <p>{number}</p>
        <div>
        <button onClick={menos} className="button1">Menos</button>
        <button onClick={reset} className="button1">Reset</button>
        <button onClick={mais} className="button1">Mais</button>
        </div>
    </div>
}
