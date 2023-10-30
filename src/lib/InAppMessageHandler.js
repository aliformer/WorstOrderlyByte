import http from "./httpHandler";
import EventHandler from "./EventHandler";
import { useContextInApp } from "../provider/Provider";
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
    this.userInfo = [];
    this.deviceId = deviceId;
    this.context = useContextInApp();
  }

  async authenticate(username, password) {
    const getUser = this.http.bind("");
  }

  async getUserInfo() {
    try {
    
      const userInfo = await http.get(`${this.endpoint}/user-info`);
      return userInfo.json();
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
  async filterMessagesByExpiry() {}
  async mapUserMessages() {
    const userInfo = await this.getUserInfo();
    const mapCampaigns = userInfo.campaigns;
    const messages = [];
    for (const campaign of mapCampaigns) {
      const messageDetail = await this.getMessageById(campaign.templateId);
      messages.push(messageDetail);
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
  messageHandler(messages) {
    this.context.inAppProperties = messages[0] ?? this.messages[0]
    return this.context
  }
  messageFactory(templateId, messageTemplate) {
    this.messages = this.message.map((message) => {
      if (message.templateId === templateId) {
        message.body = messageTemplate;
      }
    });
  }
  showModal(show, messages) {
    this.messageHandler(messages)
    this.context.setShowModal(show);
  }
  initialize(){
    if(!this.userInfo){
        this.adapter()
        this.mapUserMessages()
    }
  }
  triggerModal(messages){
    const {useLocation} = this.module
    const location = useLocation()
    const matchedMessages =  messages.filter(message => location.includes(message.trigger))
    this.showModal(true, matchedMessages)
    }
}

// api list

// /campaigns
// /campaigns/template/:id
// /user-info
// /event
// /event/:eventName
