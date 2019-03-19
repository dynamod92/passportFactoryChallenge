const getFactories = 'GET_FACTORIES';
const addFactory = 'ADD_FACTORY';
const updateFactory = 'UPDATE_FACTORY';
const initialState = {
    factoriesList: [],
    newFactory: {}
  };

  export const actionCreators = {
    getFactories: () => async dispatch => {
      const url = 'api/factory/Factories';
      const response = await fetch(url);
      const factories = await response.json();

      dispatch({
        type: getFactories,
        payload: factories
      })
    },
    addFactory: factoryData => async dispatch => {
      const url = 'api/factory/AddFactory';
      const response = await fetch(url,{
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(factoryData)
      });
  
      const newFactory = await response.json();
      dispatch({
        type: addFactory,
        payload: newFactory
      })
    },
    updateFactory: factoryData => async dispatch => {
      const url = 'api/factory/UpdateFactory';
      const response = await fetch(url,{
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(factoryData)
      });
  
      const factory = await response.json();
      dispatch({
        type: updateFactory,
        payload: factory
      })
    },
  };

export const reducer = (state, action) => {
  state = state || initialState;

    switch(action.type){
        case getFactories:
          return { ...state, factoriesList: action.payload};
        case addFactory:
          return { ...state, newFactory: action.payload};
        case updateFactory:
          return { ...state, factoriesList: [action.payload]};
        default:
    }
  return state;
};
