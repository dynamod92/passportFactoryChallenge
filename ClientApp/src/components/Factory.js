import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../store/ChildrenList';
import Child from './Child';

class Factory extends Component {

    constructor(props) {
        super(props);
        this.state = {
            childName: this.props.childName,
            readOnly: true,
            factoryId: this.props.factoryId,
            editMode: "Edit"
          };
   
        this.newChild = this.newChild.bind(this);

      }
    componentWillMount() {
        this.props.getChildren();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.newChild) {
          this.props.childrenList.unshift(nextProps.newChild);
        }
    }

    newChild(){
        const newChild = {childName: "new child",  factoryId: this.props.id};
        this.props.addChild(newChild);
    }

    render() {
        const childrenItems = this.props.childrenList
            .filter(child => child.factoryId === this.props.id)
            .map(child => (
                <div key={child.id}>
                    <Child childName={child.childName} factoryId={this.props.id} ></Child>
                </div>
            ));
        
        return (
          <div>
            <details>
                <summary>{this.props.name}
                    <button type="button" className="btn btn-default btn-sm" onClick={this.newChild}>
                    <span className="glyphicon glyphicon-plus" ></span>Add Child Node
                    </button>
                </summary>
                {childrenItems}
            </details>
          </div>
        );
    } 
}

export default connect(
    state => state.childrenList,
    dispatch => bindActionCreators(actionCreators, dispatch)
  )(Factory);
