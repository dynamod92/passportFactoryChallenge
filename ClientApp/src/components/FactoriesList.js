import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Factory from './Factory'
import { actionCreators } from '../store/FactoriesList';
import  './style.css'

class FactoriesList extends Component {

  constructor(props) {
    super(props);
    this.state = {
        factoryName: this.props.factoryName,
        id: this.props.factoryId
      };

    this.addFactory = this.addFactory.bind(this);
  }
  componentWillMount() {
    this.props.getFactories();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newFactory) {
      this.props.factoriesList.unshift(nextProps.newFactory);
    }
  }
  addFactory(){
    const newFactory = {factoryName: "New Factory", id: 7};

    this.props.addFactory(newFactory);
  }

  render() {
    const factoryItems = this.props.factoriesList.map(factory => (
      <div key={factory.id}>
        <Factory name={factory.factoryName} id={factory.id}></Factory>
      </div>
    ));

    return (
      
      <div>
        <details>
          <summary>Root</summary>
          <details>
            <summary>Factories
              <button type="button" className="btn btn-default btn-sm" onClick={this.addFactory}>
                Add
              </button>
              <button type="button" className="btn btn-default btn-sm">
                Edit
              </button>
            </summary>
            {factoryItems}
          </details>
        </details>
      </div>
    );
  }
}



export default connect(
  state => state.factoriesList,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(FactoriesList);
