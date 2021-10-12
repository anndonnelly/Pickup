import { csrfFetch } from "./csrf";
const LOAD = "event/LOAD";
const ADD_ONE = "event/ADD_ONE"
const LOAD_LOCATIONS = "event/LOAD_LOCATIONS";
const LOAD_TYPES = "events/LOAD_TYPES";
const UPDATE_EVENT = "events/UPDATE_EVENT";
const DELETE_EVENT = "items/REMOVE_ITEM";

const load = list => ({
    type: LOAD,
    list
})

const addEvent = event => ({
  type: ADD_ONE,
  event
})
// means add to state

const loadLocations = (location) => ({
  type: LOAD_LOCATIONS,
  location,
});

const loadTypes = (types) => ({
  type: LOAD_TYPES,
  types,
});

const update = (event) => ({
  type: UPDATE_EVENT,
  event,
});

const remove = (eventId) => ({
  type: DELETE_EVENT,
  eventId,
});

export const getEvents = () => async dispatch => {
    const res = await csrfFetch("/api/events");

    if (res.ok){
        const listEvents = await res.json()
        dispatch(load(listEvents));
        return listEvents;
    }
}

// thunk
export const createEvent = (payload) => async dispatch => {
  const res = await csrfFetch("/api/events", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

   if (res.ok) {
     const newEvent = await res.json();
     dispatch(addEvent(newEvent));
     return newEvent;
   }
}

export const getLocations = () => async(dispatch)=> {
  const res = await csrfFetch("/api/locations");
  console.log(res)

  if (res.ok) {
    const locations = await res.json();
    // list of all locations in a json obj
    dispatch(loadLocations(locations));
    return locations;
  }
}

export const getTypes = () => async (dispatch) => {
  const res = await csrfFetch("/api/types");

  if (res.ok) {
    const types = await res.json();
    dispatch(loadTypes(types));
    return types;
  }
};

export const getOneEvent = (id) => async (dispatch) => {
  const res = await fetch(`/api/events/${id}`);
  
  if (res.ok) {
    const event = await res.json();
    dispatch(addEvent(event));
    return event;
  }
}


export const updateEvent = (data) => async (dispatch) => {
  const response = await csrfFetch(`/api/events/${data.id}`, {
    method: "put",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    const event = await response.json();
    dispatch(update(event));
    return event;
  }
};

export const deleteEvent = (eventId) => async (dispatch) => {
  const response = await csrfFetch(`/api/events/${eventId}`, {
    method: "delete",
  });

  if (response.ok) {
    const event = await response.json();
    dispatch(remove(event.id));
  }
};

const initialState = {
    list: [],
    locations: [],
    types: []
}
// TODO: sort list by createdAt

export const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD: {
      const allEvents = {};
      action.list.forEach((event) => {
        allEvents[event.id] = event;
      });
      return { ...state, list: allEvents };
    }
    case ADD_ONE:
    case UPDATE_EVENT: {
      const newList = { ...state.list };
      newList[action.event.id] = action.event;
      const newState = {
        ...state,
        list: newList,
      };
      return newState;
    }
    case LOAD_LOCATIONS: {
      return {
        ...state,
        locations: action.location,
      };
    }
    case LOAD_TYPES: {
      return {
        ...state,
        types: action.types,
      };
    }
    case DELETE_EVENT: {
      const newState = { ...state };
      delete newState[action.eventId];
      return newState;
    }
    default:
      return state;
  }
};

export default eventReducer;