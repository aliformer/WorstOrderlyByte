import './App.css'
import { useContext, useEffect, useState } from 'react'
import { InAppDialog } from './dialog/Dialog'
import { useContextInApp} from './provider/Provider'
import { getUserInfo } from './utils/InAppHelper'
import initInAppHandler from './lib/InAppInstance'
import * as router from 'react-router-dom'
export default function App(props) {
  
  const inAppHandler = initInAppHandler('http://localhost:3400', '123', 'abc-qwerer', null, router)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const fetching = async () => {  
      setTimeout(() => {
          inAppHandler.triggerModal(  window.location.pathname, inAppHandler.messages)
        }, 5000)
    }
    fetching()
  }, [isLoaded])

  
  return (
    <div>
      {/* inject InAppDialog Component inside App Component  to display globaly*/}
      <InAppDialog handler={inAppHandler}/>
    </div>
  )
}
