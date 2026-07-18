// import Versions from './components/Versions'
// import electronLogo from './assets/electron.svg'

// function App(): React.JSX.Element {
//   const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

//   return (
//     <>
//       <img alt="logo" className="logo" src={electronLogo} />
//       <div className="creator">Powered by electron-vite</div>
//       <div className="text">
//         Build an Electron app with <span className="react">React</span>
//         &nbsp;and <span className="ts">TypeScript</span>
//       </div>
//       <p className="tip">
//         Please try pressing <code>F12</code> to open the devTool
//       </p>
//       <div className="actions">
//         <div className="action">
//           <a href="https://electron-vite.org/" target="_blank" rel="noreferrer">
//             Documentation
//           </a>
//         </div>
//         <div className="action">
//           <a target="_blank" rel="noreferrer" onClick={ipcHandle}>
//             Send IPC
//           </a>
//         </div>
//       </div>
//       <Versions></Versions>
//     </>
//   )
// }

// export default App

import { useState } from 'react';

function App(): React.JSX.Element {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping') //for some reason we need this so will learn it and get back to you. 

  const [tracking_id, set_tracking_id] = useState('');
  

  return(

    <>
    <div>
      <h1> Hello World </h1> 
    </div>


    <div>
      <label> Please Enter Tracking ID -- </label>
      <input value={tracking_id}
      onChange={(event) => set_tracking_id(event.target.value)}    
      placeholder='Enter Tracking ID (UPS/FedEx/USPS'
      /> 
    </div>
        
    
    </>
  )


}

export default App;