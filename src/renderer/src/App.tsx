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


  const [set_name, set_set_name] = useState('');
  const [tracking_id, set_tracking_id] = useState('');
  const [retailer, set_retailer] = useState('Pokémon Center');

  const [order_id, set_order_id] = useState('');

  const [quantity, set_quantity] = useState('0');


  const [delivered,set_delivered] = useState('false');



  

  return(

    <>
    <div>
      <h1> Order Verfier </h1> 
    </div>


    <section className='All Information'> 
      {/** Potentially can make this also a select but with some many options do not want to list like i did for retailer.  */}

      <div>
        <label> Please Enter Set Name  -- </label>
        <input value={set_name}
        onChange={(event) => set_set_name(event.target.value)}    
        placeholder='Pitch Black, Destin Rivals...'
        /> 
      </div>

      <div>
          <label> Select Retailer </label>
          <select value={retailer}
          onChange={(event) => set_retailer(event.target.value)}
          >
           <option value='Pokémon Center'> Pokémon Center </option>
           <option value = 'Target'>  Target </option>
           <option value = 'Walmart'> Walmart </option>
           <option value = 'N/A'>  N/A </option>
          </select>
      </div>


      <div> 
          {/* <label> Enter Quantity </label>

          <input value={quantity}
          onChange={event =>{

            const value = event.target.value; //Grab the current value. 
            if(value === '' || /^\d+$/.test(value))
            {
              set_quantity(value);
            }

          }
        }
          />  */}

      </div>


      <div>
            <label> Enter Tracking Number </label>

            <input value={tracking_id}
            onChange={(event) => set_tracking_id(event.target.value)}
            placeholder='FedEx/UPS...'
            /> 
      </div>

      <div>
          <label> Enter Retailer Order ID </label>
          <input value={order_id}
          onChange={(event) => set_order_id(event.target.value)}
          placeholder='P03.....'
          />
      </div>

      <div> 
        <label> Set Status of Order: </label>
            <select value={delivered}
            onChange={event => set_delivered(event.target.value)}
            > 
                <option value='true'> Delivered </option>
                <option value='false'> Not Delivered </option>
            </select>

      </div>

    




    </section>
        
    
    </>
  )


}

export default App;