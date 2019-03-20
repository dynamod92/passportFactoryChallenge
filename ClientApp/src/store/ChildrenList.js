const getChildren = 'GET_CHILDREN';
const addChild = 'ADD_CHILD';
const updateChild = 'UPDATE_CHILD';
const initialState = {
    childrenList: [],
    newChild: {}
  };

export const actionCreators = {
  getChildren: () => async dispatch => {

    const url = 'api/factory/Children';
    const response = await fetch(url);
    const children = await response.json();
      dispatch({
        type: getChildren,
        payload: children
      })
  },
  addChild: childData => async dispatch => {
    const url = 'api/factory/AddChild';
    const response = await fetch(url,{
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(childData)
    });

    const newChild = await response.json();

    dispatch({
      type: addChild,
      payload: newChild
    })
},
  updateChild: childData => async dispatch => {
    const url = 'api/factory/UpdateChild';
    const response = await fetch(url,{
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(childData)
    });

    const childrenList = await response.json();

      dispatch({
        type: updateChild,
        payload: childrenList
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
            return { ...state, childrenList: action.payload};
        default:
    }
  return state;
};
