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
export const InAppContext = createContext();

export const InAppProvider = ({
  children,
}) => {
  const [inAppProperties, setInAppProperties] = useState(initialState);
  return (
    <InAppContext.Provider value={{ inAppProperties, setInAppProperties }}>
      {children}
    </InAppContext.Provider>
  );
};


