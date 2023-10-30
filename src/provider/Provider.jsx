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
  userId:''
};

export const InAppContext = createContext(initialState);
export const ShowContext = createContext(false)
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
