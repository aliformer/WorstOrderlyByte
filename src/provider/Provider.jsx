/* eslint-disable prettier/prettier */
import React, {
  ChildContextProvider,
  Context,
  createContext,
  useContext,
  useReducer,
  useState,
} from 'react';

export const initialState = {
  campaignId: '',
  trigger: '',
  target:'',
  template: {
    templateId: '', 
    body: {
      title: "",
      imgUrl: "",
      button: [
        {
          label:"", 
          action:{
          },
          url:'',
          type:'link'
        }
      ]
    }
  },
  createdAt: new Date(),
  expiresAt: new Date(),
  saveToInbox: false,
  read: false,
  userId:''
};

const InAppContext = createContext(initialState);
const ShowContext = createContext(false)
export const InAppProvider = ({
  children,
}) => {
  const [inAppProperties, setInAppProperties] = useState(initialState);
  const [showModal, setShowModal] = useState(false)
  return (
    <ShowContext.Provider value={{ showModal, setShowModal }}>
      <InAppContext.Provider value={{ inAppProperties, setInAppProperties }}>
        {children}
      </InAppContext.Provider>
    </ShowContext.Provider>
  );
};

export const useContextInApp = () => {
  const {inAppProperties, setInAppProperties} = useContext(InAppContext)
  const {showModal, setShowModal} = useContext(ShowContext)
  return {inAppProperties, setInAppProperties, showModal, setShowModal} 
}