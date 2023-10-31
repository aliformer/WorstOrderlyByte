import * as router from 'react-router-dom'
// import * as routerMobile from 'react-router-native'

export default class EventHandler {
  constructor(appId){
    this.module  = null,
    this.appId = appId
  }
  adapter(module){
    this.module = module
    }
}