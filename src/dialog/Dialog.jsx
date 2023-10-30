import { useState, useContext, useEffect } from 'react'
import { useContextInApp } from '../provider/Provider'
export const InAppDialog = ({handler}) => {
  const {inAppProperties, setInAppProperties, showModal, setShowModal} = useContextInApp()
  const supressDialog = () => {
    setShowModal(!showModal)
    handler.trigger()
  }
  useEffect(()=> {
    handler.triggerModal(handler.messages)
  }, [inAppProperties])
  return (
    <dialog open={showModal}>
      <h1>{inAppProperties.userId}</h1>
      <button onClick={supressDialog}>{inAppProperties.deviceId}</button>
    </dialog>
    )
}