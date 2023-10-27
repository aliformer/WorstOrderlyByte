import './App.css'
import { useContext, useEffect, useState} from 'react'
import { InAppDialog } from './dialog/Dialog'
import { InAppContext } from './lib/provider/Provider'
import { getUserInfo } from './utils/InAppHelper'
export default function App() {
  const { inAppProperties, setInAppProperties } = useContext(InAppContext)
  const [isLoaded, setIsLoaded] = useState(false)
  useEffect(() => {
  // replace with trigger so then the modal wil display each trigger is emitted
   


    const fetching = async () =>{
      const data = await getUserInfo()
      if(data){
        setTimeout(() => {
          setIsLoaded(true)
          setInAppProperties({...data[0], show: true})
        }, 5000)
      }
    }
     fetching()
    }, [isLoaded])
  return (
    <div>
      <h1>hello world</h1>
      <button onClick={() => setInAppProperties({ userId: 'heheh', deviceId: 'has change', show: true })}> show man </button>
      <InAppDialog />
    </div>
  )
}
