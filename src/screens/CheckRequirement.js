import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import '../components/alertBox.css';
// import { ipcRenderer } from 'electron';


// const wmi = window.require('node-wmi'); // Note the 'window.require' to access Node.js modules in a React component.

// const wmi = window.require('electron').remote.require('node-wmi');


// const { exec } = require('child_process');
// const { exec } = window.require('electron').remote.require('child_process');


const onClick = (navigate, notify)=>{
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
        // const screenCount = ipcRenderer.sendSync('getScreenCount');
        window.electron.exec(command, ({screenCount, res}) => {
        if (res || screenCount > 1) {
            notify('There might be either screen is shared or app is running in background');
        }else{
            console.log('not any app open');
            navigate('/home')
        }
        });
    }
}

const Home = () => {
    const navigate = useNavigate();
    const [showAlert, setShowAlert] = useState(false);


    const notify = (message) => {
        let toastElement = document.getElementsByClassName('Toastify__toast');
        if(!toastElement.length){
                toast.warn(message, {
                theme: "dark",
                position: 'top-right',
                hideProgressBar: true, // Show or hide the progress bar
                closeOnClick: true, // Close the notification when clicked
                autoClose: 2000,
                className: 'alertPosition'
                });
        }
      };
    


    return (
        <>
               <button  className= {'customButton'} onClick={()=> onClick(navigate, notify)}>Start Assessment</button>
        </>
    )
}

export default Home