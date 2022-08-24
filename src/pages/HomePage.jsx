import { useReducer } from 'react'

const initialState = {
    name: '',
    address: '',
    secondaryAddress: '',
    phoneNumber: '',
    hasSecondaryAddress: false,
    numberOfChars: 'Do not know yet'
  }
  
  const milosInfo = {
    name: 'Milos',
    address: 'BG',
    secondaryAddress: 'NS',
    phoneNumber: '69',
    hasSecondaryAddress: true,
    numberOfChars: ''
  }
  
  const ACTIONS = {
    NAME_CHANGED: 'name-changed',
    ADDRESS_CHANGED: 'address-changed',
    SECONDARY_ADDRESS_CHANGED: 'secondary-address-changed',
    PHONE_NUMBER_CHANGED: 'phone-number-changed',
    RESET_VALUES: 'reset-values',
    SET_VALUES_TO_MILOS: 'sadaslkhlkasjghjagdsjhkgskagdhkjsa',
    CALCULATE_NUMBER_OF_CHARS: 'calculate-number-of-chars'
  }
  
const reducer = (state, action) => {
    console.log(action)

    switch (action.type) {
        case ACTIONS.NAME_CHANGED:
            return {
                ...state,
                name: action.payload
            }
            case ACTIONS.ADDRESS_CHANGED:
            return {
                ...state,
                address: action.payload
            }
            case ACTIONS.SECONDARY_ADDRESS_CHANGED:
            return {
                ...state,
                secondaryAddress: action.payload,
                hasSecondaryAddress: action.payload.length > 0
            }
            case 'phone-number-changed':
            return {
                ...state,
                phoneNumber: action.payload
            }
            case ACTIONS.RESET_VALUES:
            return initialState
            case ACTIONS.SET_VALUES_TO_MILOS:
            return milosInfo
            case ACTIONS.CALCULATE_NUMBER_OF_CHARS:
            let numberOfChars = 0

            numberOfChars += state.name.length
            numberOfChars += state.address.length
            numberOfChars += state.secondaryAddress.length
            numberOfChars += state.phoneNumber.length

            return {
                ...state,
                numberOfChars
            }
            default:
            console.error(`Action ${action.type} not recognized`)
            return state
    }
}  

const HomePage = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
  
    const onNameChange = e => dispatch({
      type: ACTIONS.NAME_CHANGED,
      payload: e.target.value
    })
  
    const onAddressChange = e => dispatch({
      type: ACTIONS.ADDRESS_CHANGED,
      payload: e.target.value
    })
    const onSecondaryAddressChange = e => dispatch({
      type: ACTIONS.SECONDARY_ADDRESS_CHANGED,
      payload: e.target.value
    })
    const onPhoneNumberChange = e => dispatch({
      type: 'phone-number-changed',
      payload: e.target.value
    })
  
    const resetValues = () => dispatch({ type: ACTIONS.RESET_VALUES })
    const setMilosInfo = () => dispatch({ type: ACTIONS.SET_VALUES_TO_MILOS })
    const calculateNumberOfChars = () => dispatch({ type: ACTIONS.CALCULATE_NUMBER_OF_CHARS })

    return <div>
        <p>Hey my name is {state.name}, my address is {state.address} and my phone number is {state.phoneNumber}.</p>
        <p>I {state.hasSecondaryAddress ? '' : "don't"} have secondary address.</p>
        <p>Name</p>
        <input value={state.name} onChange={onNameChange} />
        <p>Address</p>
        <input value={state.address} onChange={onAddressChange} />
        <p>Secondary Address</p>
        <input value={state.secondaryAddress} onChange={onSecondaryAddressChange} />
        <p>Phone Number</p>
        <input value={state.phoneNumber} onChange={onPhoneNumberChange} />
        <button onClick={resetValues}>Reset Values</button>
        <button onClick={setMilosInfo}>Set Milos Values</button>
        <p>Number of Chars: {state.numberOfChars}</p>
        <button onClick={calculateNumberOfChars}>Caluclate Chars</button>
    </div>
}

export default HomePage
