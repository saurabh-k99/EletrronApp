import React from 'react'
import { Link } from 'react-router-dom'
import { getWebCamAccess } from '../utils/utils'
const Home = ({ setLocalStream }) => {
    return (
        <div className='homeContainer'>
            <div className='instructionContainer'>
                <ol>
                    <li>This is an online test.</li>
                    <li>Please make sure that you are using the latest version of the browser. We recommend using Google Chrome.</li>
                    <li>It mandatory to disable all the browser extensions and enabled Add-ons or open the assessment in incognito mode.</li>
                    <li>If you are solving a coding problem, you will either be required to choose a programming language from the options that have been enabled by the administrator or choose your preferred programming language in case no options have been enabled by the administrator. Note: In case youre solving coding problems: All inputs are from STDIN and output to STDOUT.</li>
                    <li>If test mandates you to use the webcam, please provide the required permissions and access.</li>
                    <li> To know the results, please contact the administrator.</li>
                    <li> To refer to the FAQ document, you can click on the HELP button which is present in the top right corner of the test environment.</li>
                </ol>
                <p>Best wishes from DoSelect!</p>
                <Link to={'/test'} onClick={() => getWebCamAccess(setLocalStream)}>Start Assesment</Link>
            </div>
        </div>
    )
}

export default Home