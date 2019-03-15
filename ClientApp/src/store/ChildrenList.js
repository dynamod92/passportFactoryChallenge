const getChildren = 'GET_CHILDREN';
const addChild = 'ADD_CHILD';
const updateChild = 'UPDATE_CHILD';
const initialState = {
    childrenList: [],
    newChild: {}
  };

export const actionCreators = {
  getChildren: list => dispatch => {
      dispatch({
        type: getChildren,
        payload: [{childName: "test 3", id: 3, factoryId: 2}]
      })
  },
  addChild: childData => dispatch => {
    console.log(childData)
    dispatch({
      type: addChild,
      payload: childData
    })
},
  updateChild: childData => dispatch => {
      dispatch({
        type: updateChild,
        payload: childData
      })
  }
};

export const reducer = (state, action) => {
  state = state || initialState;
    switch(action.type){
        case getChildren:
            return { ...state, childrenList: action.payload};
        case addChild:
            return { ...state, newChild: action.payload};
        case updateChild:
            return { ...state, childrenList: [action.payload]};
        default:
    }
  return state;
};
