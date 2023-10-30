import './App.css'
import { useContext, useEffect, useState} from 'react'
import { InAppDialog } from './dialog/Dialog'
import { InAppContext } from './lib/provider/Provider'
import { getUserInfo } from './utils/InAppHelper'
export default function App() {
  const { inAppProperties, setInAppProperties, showModal, setShowModal } = useContext(InAppContext)
  const [isLoaded, setIsLoaded] = useState(false)
  useEffect(() => {
    const fetching = async () =>{
      const data = await getUserInfo()
      if(data){
        setTimeout(() => {
          setIsLoaded(true)
          console.log('showModal', inAppProperties)
          setShowModal(true)
        }, 5000)
      }
    }
     fetching()
    }, [isLoaded])
  return (
    <div>
      <div> 
      </div>
      <h1>hello world</h1>
      <button onClick={() => setShowModal(!showModal)}> test button </button>
      <InAppDialog />
    </div>
  )
}
