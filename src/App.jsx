import './App.css'
import { useContext, useEffect, useState } from 'react'
import { InAppDialog } from './dialog/Dialog'
import { InAppContext, ShowContext } from './provider/Provider'
import { getUserInfo } from './utils/InAppHelper'
export default function App() {
 
  const {inAppProperties, setInAppProperties} = useContext(InAppContext) ;
  const {showModal, setShowModal}= useContext(ShowContext); 

  const [isLoaded, setIsLoaded] = useState(false)
  useEffect(() => {
    const fetching = async () => {
      const data = await getUserInfo()
      if (data) {
        setTimeout(() => {
          setIsLoaded(true)
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
      <button onClick={() => setShowModal(true)}> test button </button>
      <InAppDialog />
    </div>
  )
}
