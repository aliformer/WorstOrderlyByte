import InAppMessageHandler from "./InAppMessageHandler"
const initInAppHandler = (endpoint, token, deviceId, appId, module) => {
  const initInAppMessageHandler = new InAppMessageHandler(endpoint, token, deviceId, appId)
  initInAppMessageHandler.initialize(module)
  return  initInAppMessageHandler
}

export default initInAppHandler