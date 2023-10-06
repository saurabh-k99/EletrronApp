import React from 'react'
import problem from '../problem'

const Problem = () => {
    return (
        <div className='problemContainer'>
            <section>{problem.description}</section>
            <section>
                {
                    Object.keys(problem.options).map(option => (
                        <span>
                            <input type="radio" name='options'/> <b>{problem.options[option]}</b>
                        </span>
                    ))
                }

            </section>

            <Link to={'/feedback'}>Submit Test</Link>
        </div>
    )
}

export default Problem