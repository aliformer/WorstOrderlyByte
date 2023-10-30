import { useState, useContext, useEffect } from 'react'
import { useContextInApp } from '../lib/provider/Provider'
export const InAppDialog = () => {
  const {  inAppProperties, showModal, setInAppProperties, setShowModal} = useContextInApp()
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
  return (
    <dialog open={inAppProperties.show}>
      <h1>{inAppProperties.userId}</h1>
      <button onClick={supressDialog}>{inAppProperties.deviceId}</button>
    </dialog>)
}