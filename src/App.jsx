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
    const fetching = () => {  
      
          inAppHandler.triggerModal(  window.location.pathname, inAppHandler.messages)
        
    }
    fetching()
  }, [isLoaded])
  const customMessageFromClient = {
    campaignId: '123',
    trigger: '/',
    target:'abc_123',
    template: {
      templateId: '12', 
      body: {
        title: "test from button",
        imgUrl: "",
        button: [
          {
            label:"", 
            action:{
            },
            url:'',
            type:'link'
          }
        ]
      }
    },
    createdAt: new Date(),
    expiresAt: new Date(),
    saveToInbox: false,
    read: false,
    userId:'user_123'
  }
  return (
    <div>
      {/* inject InAppDialog Component inside App Component  to display globaly*/}

      <button onClick={() =>inAppHandler.showModal(true, customMessageFromClient )}> test kalau pake button </button>
      <InAppDialog handler={inAppHandler}/>
    </div>
  )
}
