import React, { useEffect, useState } from 'react'
import problem from '../problem.js'
import { Link } from 'react-router-dom'

const Test = () => {
    const [imageSrc, setImageSrc] = useState('')


    useEffect(() => {
        const eventSource = new EventSource('http://localhost:5000/source')

        eventSource.onmessage = (event) => {
            console.log('data from sse: ', event.data)
            setImageSrc(event.data)
        }

        eventSource.onerror = (err) => {
            console.log('error from sse: ', err)
        }
    }, [])

    return (
        <div className='testContainer'>
            <section className='problemsContainer'>
                <table className='problemsTable'>
                    <thead>
                        <th></th>
                        <th>Problem</th>
                        <th>Type</th>
                        <th></th>
                    </thead>
                    <tbody>
                        {
                            [1, 2, 3].map((e) => (
                                <tr>
                                    <td>{e}</td>
                                    <td>{problem.name}</td>
                                    <td>{problem.type}</td>
                                    <td><Link className='customButton' to={'/problem'}>Solve</Link></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </section>

            <section className='proctorContainer'>
                <video
                    id='primary-camera'
                    style={{
                        width: '300px',
                        margin: '2rem 0'
                    }} />

                <img
                    src={imageSrc}
                    alt="Image from Secondary Device"
                    style={{
                        width: '300px',
                        minWidth: '200px',
                        margin: '2rem 0'
                    }}
                />
            </section>
        </div>
    )
}

export default Test