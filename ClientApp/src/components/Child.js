import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../store/ChildrenList';

class Child extends Component {

    constructor(props) {
        super(props);
        this.state = {
            childName: this.props.childName,
            readOnly: true,
            factoryId: this.props.factoryId,
            editMode: "Edit"
          };
   
        this.onChange = this.onChange.bind(this);
        this.editChild = this.editChild.bind(this);
      }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    editChild(){
        if(this.state.editMode === "Save"){
            this.setState({ readOnly: !this.state.readOnly, editMode: "Edit" });

            const updatedChild = {
                childName: this.state.childName,
                id: this.state.id,
                factoryId: this.props.factoryId
            };
            this.props.updateChild(updatedChild);
        }
        else{
            this.setState({ readOnly: !this.state.readOnly,
            editMode: "Save" });
        }
    }
    
    render() {
        return (
          <div>
           <input type="text" readOnly={this.state.readOnly} name="childName" value={this.state.childName} onChange={this.onChange}/> 
            <button type="button" onClick={this.editChild} className="btn btn-default btn-sm">
                {this.state.editMode}
            </button>
          </div>
        );
      }
    
}

export default connect(
    state => state.childrenList,
    dispatch => bindActionCreators(actionCreators, dispatch)
  )(Child);
