import React, { FormEvent, useReducer, useState } from "react";
import itemReducer from "../reducer/ItemReducer";

const ItemComponent = () => {
  // useReducer gives us access to the current state and dispatch for our actions
  // in order to set it up, we need to pass it our reducer (itemReducer) and our initial state
  const [state, dispatch] = useReducer(itemReducer, { items: [] });
  const [itemName, setItemName] = useState<string>("");

  const addItem = (event: FormEvent) => {
    event.preventDefault();
    const newItem = {
      id: Date.now(),
      name: itemName,
    };
    dispatch({ type: "ADD_ITEM", payload: newItem });
  };

  const removeItem = (id: number) => {
    // dispatch our REMOVE_ITEM action so we can access the REMOVE_ITEM reducer function (with our id as our payload)
    dispatch({ type: "REMOVE_ITEM", payload: id})
  }

  return (
    <>
      <h2>Item Form</h2>
      <form onSubmit={addItem}>
        <input
          type="text"
          autoComplete="off"
          value={itemName}
          onChange={(event) => setItemName(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {state.items.map((item) => (
          <li key={item.id}>
            {item.name} <button onClick={() => removeItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ItemComponent;
