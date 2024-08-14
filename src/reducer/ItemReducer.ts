import { ItemState } from "./ItemState"
import ItemActions from "./ItemActions"

// state - current state
// action - an action that has been dispatched 
// we check the action.type to see which reducer function to execute
const itemReducer = (state: ItemState, action: ItemActions): ItemState => {
    //Switch statements - alternate syntax for if else statements
    switch(action.type) { 
        case "ADD_ITEM": // if (action.type === "ADD_ITEM")
            // add item to our ItemState array
            // payload: action.payload
            // newItemState is equal to the old item state, plus the payload that we are adding
            const newItemState = [ ...state.items, action.payload ]
            
            // ...state makes it so we can grab all of the properties that we aren't trying to modify from our state when creating our updated state object
            // any property we name/set afterwards (in this case, items) becomes overwritten with our new data
            return { ...state, items: newItemState }
        case "REMOVE_ITEM": // else if (action.type === "REMOVE_ITEM")
            // remove item
            const removeItemState = state.items.filter(item => item.id !== action.payload)

            return { ...state, items: removeItemState }
        default: // else {}
            return state;
    }
}

export default itemReducer