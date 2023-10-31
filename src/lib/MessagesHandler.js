import { arrayToLinkedList } from "../utils/iterator";
export function MessagesHandler(messages){
    ({messages: new arrayToLinkedList(messages),
    supressMessage: (supreess) => {
      this.showModal = 
    },
    showMessagesSequentially : () => {

    },
    showModal: (show, messages,location) => {
        this.messageHandler(messages)
        if(this.context.inAppProperties){
          this.context.setShowModal(show);
        }
      }})
}