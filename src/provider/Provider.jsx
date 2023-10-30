/* eslint-disable prettier/prettier */
import React, {
  ChildContextProvider,
  Context,
  createContext,
  useContext,
  useReducer,
  useState,
} from 'react';
const initialState = {
  messageId: '',
  campaignId: '',
  trigger: '',
  createdAt: new Date(),
  expiresAt: new Date(),
  saveToInbox: false,
  custoPayload: null,
  read: false,
};
const InAppContext = createContext();
const ShowContext = createContext()
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

export const useContextInApp = () =>{
    const {inAppProperties, setInAppProperties} = useContext(InAppContext) ;
    const {showModal, setShowModal} = useContext(ShowContext); 
    return {inAppProperties, showModal, setShowModal, setInAppProperties}
}