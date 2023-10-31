import { useState, useContext, useEffect } from 'react'
import { useContextInApp } from '../provider/Provider'
export const InAppDialog = ({handler}) => {
  const supressDialog = () => {
    handler.context.setShowModal(false, handler.messages)
    // handler.triggerModal(handler.messages)
  }
  return (
    <dialog open={handler.context.showModal}>
      <h1>{handler.context.inAppProperties?.template?.body?.title}</h1>
      <button onClick={supressDialog}>{handler.context.inAppProperties?.template?.templateId}</button>
    </dialog>
    )
}