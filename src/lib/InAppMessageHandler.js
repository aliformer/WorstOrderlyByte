import http from './httpHandler'
export default class InAppMessageHandler {
    token
    endpoint
    messages
    userInfo
    deviceId
    appId

    constructor(endpoint, token, deviceId, appId){
        this.token = token;
        this.endpoint = endpoint
        this.messages = []
        this.userInfo = []
        this.appid = appId
        this.deviceId = deviceId
    }

    async getUserInfo(email, password){
        try{
        const userInfo = await http.get(`${this.endpoint}/user-info`)
        return userInfo.json()
        }
        catch (error){
            console.log('error', error)
            return error
        }
    }
    async getMessageById(id){
        try{
            const message = await http.get(`${this.endpoint}/campaigns/template/${id}`)
    
            return message.json()
            }
            catch (error){
                console.log('error', error)
                return error
            }
    }

    async getAllActiveCampaigns(){
        try{
            const campaigns = await http.get(`${this.endpoint}/campaigns?isActive=true`)
    
            return campaigns.json()
            }
            catch (error){
                console.log('error', error)
                return error
            }
    }
    async filterMessagesByExpiry(){

    }
    async mapUserMessages(filters){
        const userInfo = await this.getUserInfo()
        const mapCampaigns = userInfo.campaigns
        const messages = []
        for (const campaign of mapCampaigns){
            const messageDetail = await this.getMessageById(campaign.messageId)
            messages.push(messageDetail)
        }

        this.messages = messages.sort((a,b) =>a.expiresAt - b.expiresAt)
    }

    orderMessageByPriority(){

    }

    messageHandler(){
        this.messages
    }
    
     messageFactory(){

     }
}


// api list 

// /campaigns
// /campaigns/template/:id
// /user-info
// /event
// /event/:eventName