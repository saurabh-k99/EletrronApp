import React from 'react'
import { ReactInternetSpeedMeter } from 'react-internet-meter';
import { toast } from 'react-toastify';
import '../components/alertBox.css';



const SpeedOMeter = () => {
    const [checkSpeed, SetCheckSpeed] = React.useState('-');

    React.useEffect(() => {
        window.addEventListener('offline', () => {
            SetCheckSpeed('Disabled')
        })
    })

    const showToast = (speed) => {
        let toastElement = document.getElementsByClassName('Toastify__toast');
            setTimeout(()=>{
                if(!toastElement.length){
                toast.warn(`Oops... Internet speed is slow!!! - ${speed} KB/s`, {
                    theme: "dark",
                    position: 'top-right',
                    hideProgressBar: true, // Show or hide the progress bar
                    closeOnClick: true, // Close the notification when clicked
                    autoClose: false,
                    className: 'alertPosition'
                  });
                }
            }, 2000);
    }

    return (
        <div>
            <ReactInternetSpeedMeter
                txtSubHeading="Internet is too slow!"
                outputType=""
                customClassName={''}
                txtMainHeading="Opps..."
                pingInterval={2000}
                thresholdUnit='kilobyte'
                threshold={300}
                imageUrl="https://res.cloudinary.com/demo/image/upload/h_210/f_auto,q_auto/paint.jpg"
                downloadSize="16730"
                callbackFunctionOnNetworkDown={(speed) => showToast(speed)}
                callbackFunctionOnNetworkTest={(speed) => SetCheckSpeed(speed)}
            />
            <span style={{
                color: 'white',
                fontSize: '0.8rem',
                fontWeight: 'bold'
            }}> {checkSpeed} KB/s </span>
        </div>
    )
}

export default SpeedOMeter