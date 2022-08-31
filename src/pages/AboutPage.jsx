import { useState, useEffect } from 'react'

const AboutPage = () => {
    // PROPS || STATE
    const [person, setPerson] = useState(null)
    const [number, setNumber] = useState(0)
    const [number2, setNumber2] = useState(0)

    useEffect(() => {
        console.log('USEEFFECT RUN')
    })

    useEffect(() => {
        console.log('INIT USEEFFECT RUN')
    }, [])

    useEffect(() => {
        console.log('NUMBER 2 CHANGED')
    }, [number2])

    useEffect(() => {
        fetch('https://swapi.dev/api/people/1')
            .then(res => res.json())
            .then(data => setPerson(data))
    }, [])

    return <div>
        <h1>About Page</h1>
        <p>{JSON.stringify(person)}</p>
        <p>{number}</p>
        <button onClick={() => setNumber(number => ++number)}>INC</button>
        <p>{number2}</p>
        <button onClick={() => setNumber2(number => ++number)}>INC</button>
    </div>
}

export default AboutPage
