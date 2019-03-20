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
            factoryName: this.props.factoryName,
            editMode: "Edit"
          };
   
        this.newChild = this.newChild.bind(this);
        this.onChange = this.onChange.bind(this);
        this.editFactory = this.editFactory.bind(this);
      }
      
    componentWillMount() {
        this.props.getChildren();
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.newChild) {
            if(nextProps.newChild.factoryId == this.props.id)
                this.props.childrenList.push(nextProps.newChild);
        }
    }

    newChild(){
        const newChild = {childName: "new child",  factoryId: this.props.id};
        this.props.addChild(newChild);
    }

    editFactory(){
        if(this.state.editMode === "Save"){
            this.setState({ readOnly: !this.state.readOnly, editMode: "Edit" });

            const updatedFactory = {
                factoryName: this.state.factoryName,
                id: this.props.id
            };
            this.props.updateFactory(updatedFactory);
        }
        else{
            this.setState({ readOnly: !this.state.readOnly,
            editMode: "Save" });
        }
    }

    render() {       
        const childrenItems = this.props.childrenList
            .filter(child => child.factoryId === this.props.id)
            .map(child => (
                <div key={child.id}>
                    <Child id={child.id} childName={child.childName} factoryId={this.props.id} ></Child>
                </div>
            ));
        
        return (
          <div>
            <details>
                <summary>{this.props.factoryName} 
                    <button type="button" className="btn btn-default btn-sm" onClick={this.newChild}>
                    Add Child
                    </button>
                    <input type="text" readOnly={this.state.readOnly} name="factoryName" key={this.state.id} value={this.state.factoryName} onChange={this.onChange}/>
                    <button type="button" className="btn btn-default btn-sm" onClick={this.editFactory}>
                        {this.state.editMode}
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
