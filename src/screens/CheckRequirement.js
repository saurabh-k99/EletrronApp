import React from 'react';
import { useNavigate } from "react-router-dom";

// import { ipcRenderer } from 'electron';


// const wmi = window.require('node-wmi'); // Note the 'window.require' to access Node.js modules in a React component.

// const wmi = window.require('electron').remote.require('node-wmi');


// const { exec } = require('child_process');
// const { exec } = window.require('electron').remote.require('child_process');


const onClick = (navigate)=>{
    if (false) {
        // // Define the WMI query
        // const query = 'SELECT * FROM Win32_Process';
        // // Connect to WMI and execute the query
        // wmi.Query(query, (err, result) => {
        // if (err) {
        //     console.error(err);
        //     return;
        // }
        // // Process the result (list of running processes)
        // result.forEach(process => {
        //     console.log(`Process Name: ${process.Name}`);
        // });
        // });
        // console.log('This is Windows.');
  } else {
        const command = `ps -e | grep -e teams -e firefox -e anydesk -e 'chrome$'`;
        window.electron.exec(command, (res) => {
        if (!res) {
            console.log('not any app open');
            navigate('/home')
        }else{
            alert('please close the background app');
        }
        });
    }
}

const Home = () => {
    const navigate = useNavigate();

    return (
       <button  className= {'customButton'} onClick={()=> onClick(navigate)}>Start Assessment</button>
    )
}

export default Home