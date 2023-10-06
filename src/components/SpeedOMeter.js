import React from 'react'
import { ReactInternetSpeedMeter } from 'react-internet-meter'

const SpeedOMeter = () => {
    const [checkSpeed, SetCheckSpeed] = React.useState('-');

    React.useEffect(() => {
        window.addEventListener('offline', () => {
            SetCheckSpeed('Disabled')
        })
    })

    const showToast = (speed) => {
        let toast = document.getElementById('customToast')

        if(!toast) {
            toast = document.createElement('div')
            document.appendChild(toast)
            toast.id = 'customToast'
            toast.innerText = 'Oops... Internet speed is slow!!!'
        }
console.log('inside toast: ', toast)
        toast.style.display = 'block'

        setTimeout((toast) => {
            toast.style.display = 'none'
        }, 2000)
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
            {checkSpeed} KB/s
        </div>
    )
}

export default SpeedOMeter