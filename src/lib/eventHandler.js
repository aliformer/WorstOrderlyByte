const Events = [
  'inAppMessage-show',
  'inAppMessage-hide',
  'inAppMessage-received',
  'inAppMessage-sent',
  'inAppMessage-error',
]
import { InAppContext } from '../provider/Provider'
import {useContext} from 'react'
const {inAppPropeties, setInAppProperties} = useContext(InAppContext)

const 