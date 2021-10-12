import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getOneEvent } from "../../store/event";


// import PokemonItems from "./PokemonItems";



const OneEvent = () => {
  const { eventId } = useParams();
  const event = useSelector((state) => state.event[eventId]);
  const dispatch = useDispatch();
  
//   const [showEditPokeForm, setShowEditPokeForm] = useState(false);
//   const [editItemId, setEditItemId] = useState(null);

  useEffect(() => {
    dispatch(getOneEvent(eventId));
    // setShowEditPokeForm(false);
    // setEditItemId(null);
  }, [dispatch, eventId]);

  return (
    <h1>poop</h1>
  );
};

export default OneEvent;