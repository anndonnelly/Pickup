import { csrfFetch } from "./csrf";
const LOAD = "event/LOAD";
const ADD_ONE = "event/ADD_ONE"
const LOAD_LOCATIONS = "event/LOAD_LOCATIONS";
const LOAD_TYPES = "events/LOAD_TYPES"

const load = list => ({
    type: LOAD,
    list
})

const addEvent = event => ({
  type: ADD_ONE,
  event
})

const loadLocations = (location) => ({
  type: LOAD_LOCATIONS,
  location,
});

const loadTypes = (types) => ({
  type: LOAD_TYPES,
  types,
});


export const getEvents = () => async dispatch => {
    const res = await csrfFetch("/api/events");

    if (res.ok){
        const listEvents = await res.json()
        dispatch(load(listEvents));
    }
}

// thunk
export const createEvent = (payload) => async dispatch => {
  const res = await csrfFetch("api/events", {
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
  }
}

export const getTypes = () => async (dispatch) => {
  const res = await csrfFetch("api/types");

  if (res.ok) {
    const types = await res.json();
    dispatch(loadTypes(types));
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
    case ADD_ONE: {
      const newList = {...state.list}
        newList[action.event.id] = action.event
      const newState = {
          ...state,
          list: newList,
        }
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
    default:
      return state;
  }
};

export default eventReducer;