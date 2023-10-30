import { useState, useContext, useEffect } from 'react'
import { useContextInApp } from '../provider/Provider'
export const InAppDialog = () => {
  const {inAppProperties, setInAppProperties, showModal, setShowModal} = useContextInApp()
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
  useEffect(()=> {

    if(inAppProperties.campaign.path === window.location.pathname){

    }

  }, [inAppProperties.event])
  return (
    <dialog open={showModal}>
      <h1>{inAppProperties.userId}</h1>
      <button onClick={supressDialog}>{inAppProperties.deviceId}</button>
    </dialog>)
}