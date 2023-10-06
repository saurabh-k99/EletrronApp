import React from 'react'
import problem from '../problem'
import { Link } from 'react-router-dom'
import { getWebCamAccess } from '../utils/utils'

const Problem = ({setLocalStream}) => {
    return (
        <div className='problemContainer'>
            <section className='descriptionContainer'>{problem.description}</section>
            <section className='optionContainer'>
                {
                    Object.keys(problem.options).map(option => (
                        <span className='optionElement'>
                            <input type="radio" name='options' /> <b>{problem.options[option]}</b>
                        </span>
                    ))
                }

            </section>

            <section>
                <Link className='customButton' style={{
                    backgroundColor: 'green'
                }} onClick={() => getWebCamAccess(setLocalStream)} to={'/test'}>Problems List</Link>
                <Link className='customButton' to={'/feedback'}>Submit Test</Link>
            </section>
        </div>
    )
}

export default Problem