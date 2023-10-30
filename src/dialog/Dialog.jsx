import { useState, useContext, useEffect } from 'react'
import { InAppContext } from '../lib/provider/Provider'
export const InAppDialog = () => {
  const { inAppProperties, setInAppProperties, showModal, setShowModal} =
    useContext(InAppContext)
  const [eventName, setEventName] = useState(null)
  const dispatcher = (eventName) => {
    dispatchEvent.apply(callEvent(eventName))
  }
  const accuireInAppPropsByEvent = (eventName) => {
    return null
  }
  const callEvent = (eventName) => {
    const inAppProps = accuireInAppPropsByEvent(eventName)
    return [eventName, setInAppProperties(inAppProps)]
  }

  const supressDialog = () => {
    setShowModal(!showModal)
  }
  // useEffect(() => {
  //   const handleTrigger = () => {
  //     dispatcher(eventName)
  //   }
  //   handleTrigger()
  // }, [eventName, inAppProperties])
  return (
    <dialog open={inAppProperties.show}>
      <h1>{inAppProperties.userId}</h1>
      <button onClick={supressDialog}>{inAppProperties.deviceId}</button>
    </dialog>)
}