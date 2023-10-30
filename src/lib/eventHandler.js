export default class EventHandler {
  
  constructor(appId){
    this.module  = null,
    this.appId = appId
  }
  adapter(appId){
    switch(appId){
      case null : 
          this.module = import('react-router-dom')
        break 
      default:
        this.module = import('react-router-native')
        break
      }
  }

}