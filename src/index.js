import React ,{lazy,Suspense,createContext,useState} from 'react';
import './index.css';
import App from './App';
import ReactDOM from "react-dom";

import * as serviceWorker from './serviceWorker';
export const TokenContext = createContext(null)
export const ModalContext = createContext(null)

const Perfect=()=>
{
    const [token,setToken] = useState('')
    const [modal,setModal] = useState(false)
    return(
        <TokenContext.Provider value={{token, setToken}}>
            <ModalContext.Provider value={{modal,setModal}}>

                <App/>
                </ModalContext.Provider>
        </TokenContext.Provider>


        )
}


ReactDOM.render(

     <Perfect/>
     ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
