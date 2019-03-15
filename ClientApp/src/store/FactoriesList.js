const getFactories = 'GET_FACTORIES';
const addFactory = 'ADD_FACTORY';
const updateFactory = 'UPDATE_FACTORY';
const initialState = {
    factoriesList: [],
    newFactory: {}
  };

  export const actionCreators = {
    getFactories: () => dispatch => {
        dispatch({
          type: getFactories,
          payload: [{factoryName: "Factory 1", id: 1},{factoryName: "Factory 2", id: 2}]
        })
    },
    addFactory: newFactory => dispatch => {
      dispatch({
        type: addFactory,
        payload: newFactory
      })
  },
    updateFactory: factoryData => dispatch => {
        dispatch({
          type: updateFactory,
          payload: factoryData
        })
    }
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
