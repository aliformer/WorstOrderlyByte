import './App.css'
import { useContext, useEffect, useState } from 'react'
import { InAppDialog } from './dialog/Dialog'
import { useContextInApp} from './provider/Provider'
import { getUserInfo } from './utils/InAppHelper'
import initInAppHandler from './lib/InAppInstance'
export default function App() {
  const inAppHandler = initInAppHandler('http://localhost:3400', '123', 'abc-qwerer', 'EasyBuy')
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
      {/* inject InAppDialog Component inside App Component  to display globaly*/}
      <InAppDialog />
    </div>
  )
}
