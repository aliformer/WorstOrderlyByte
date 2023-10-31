import http from "./httpHandler";
import EventHandler from "./EventHandler";
import { useContextInApp } from "../provider/Provider";
import { getUserInfo } from "../utils/InAppHelper";
import { useLocation } from "react-router-dom"; 
export default class InAppMessageHandler extends EventHandler {
  token;
  endpoint;
  messages;
  userInfo;
  deviceId;
  appId;
  http;
  
  constructor(endpoint, token, deviceId, appId, http) {
    super(appId);
    this.htpp = http;
    this.token = token;
    this.endpoint = endpoint;
    this.messages = [];
    this.userInfo = null;
    this.deviceId = deviceId;
    this.context = useContextInApp();
  }

  async authenticate(username, password) {
    const getUser = this.http.bind("");
  }

  async getUserInfo() {
    try {
      const userInfo = await getUserInfo()
      return userInfo;
    } catch (error) {
      console.log("error", error);
      return error;
    }
  }
  
  async getMessageById(id) {
    try {
      const message = await http.get(
        `${this.endpoint}/campaigns/template/${id}`
      );

      return message.json();
    } catch (error) {
      console.log("error", error);
      return error;
    }
  }

  async getAllActiveCampaigns() {
    try {
      const campaigns = await http.get(
        `${this.endpoint}/campaigns?isActive=true`
      );
      return campaigns.json();
    } catch (error) {
      console.log("error", error);
      return error;
    }
  }

  async filterAllActiveCampaign(){
    this.userInfo.trigger
  }
  async filterMessagesByExpiry() {}
  async mapUserMessages() {
    const userInfo = await this.getUserInfo();
    const mapCampaigns = userInfo[0].campaigns; 
    const messages = [];
    for (const campaign of mapCampaigns) {
      // const messageDetail = await this.getMessageById(campaign.templateId);
      messages.push(campaign);
    }

    this.messages = messages.sort((a, b) => a.expiresAt - b.expiresAt);
  }
  removeSeenMessage(templateId) {
    const filteredMessage = this.messages.filter(
      (message) => message.templateId !== templateId
    );
    this.messages = filteredMessage;
  }
  orderMessageByPriority() {}
  handleAction() {
    if (this.context.inAppProperties.button.type === "button") {
      if (this.context.inAppProperties.button.action)
        return this.context.inAppProperties.button.action;
    }
  }
  messageHandler(message) {
    this.context.inAppProperties = message
  }
  messageFactory(templateId, messageTemplate) {
    this.messages = this.message.map((message) => {
      if (message.templateId === templateId) {
        message.body = messageTemplate;
      }
    });
  }
  showModal(show, message,location) {
    this.messageHandler(message)
    

    if(this.context.inAppProperties){
      this.context.setShowModal(show);
    }
  }
  async initialize(module){
    try{
    if(!this.userInfo){
        this.adapter(module)
        await this.mapUserMessages()
      } 
    }
    
    catch (error){
      console.log('failed init adapter', error)
      return error
    }
  }
  triggerModal(location, messages){
    const matchedMessages =  messages.filter(message => message.trigger  === location)
    console.log(matchedMessages)
    this.showModal(true, matchedMessages[0]) 
  }
}

// api list

// /campaigns
// /campaigns/template/:id
// /user-info
// /event
// /event/:eventName
