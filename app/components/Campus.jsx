import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { removeCampus } from '../reducers/thunks'

class Campus extends Component{
  constructor(props){
    super(props)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete(){
    this.props.delete(this.props.campus.id)
  }

  render(){
    return (
      <div className="col-md-4">
        <Link to={`/campuses/${this.props.campus.id}`}>
            <img src={this.props.campus.image} className="img-responsive img-rounded"></img>
            <h2>{this.props.campus.name}</h2>
        </Link>
        <button className="btn btn-sm btn-danger" onClick={this.handleDelete}>X</button>
      </div>
    )
  }
}

const mapState = null

const mapDispatch = (dispatch) => {
  return {
    delete: (id) => {
      const thunk = removeCampus(id)
      dispatch(thunk)
    }
  }
};

export default connect(mapState, mapDispatch)(Campus);
