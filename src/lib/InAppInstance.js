const initInAppHandler = (endpoint, token, deviceId, appId) => {
  const initInAppMessageHandler = new InAppMessageHandler(endpoint, token, deviceId, appId)
return  initInAppMessageHandler
}

export default initInAppHandler