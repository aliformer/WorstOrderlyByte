import { useState, useContext, useEffect } from 'react'
import { InAppContext } from '../lib/provider/Provider'
export const InAppDialog = () => {
  const { inAppProperties: { userId, deviceId, show}, setInAppProperties } = useContext(InAppContext)
  return (<dialog open={show}>
      <h1>{userId}</h1>
      <button onClick={() => setInAppProperties({ userId: '0', deviceId: "is change from before" , show:false})}>{deviceId}</button>
    </dialog>)
}