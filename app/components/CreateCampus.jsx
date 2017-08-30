import React from 'react';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

function CreateCampus(props){
  return (
    <form>
      <div class="form-group">
        <label for="inputName">Campus Name</label>
        <input type="text" class="form-control" id="inputName" placeholder="Enter name" />
        <label for="inputImage">Image URL (optional)</label>
        <input type="text" class="form-control" id="inputImage" placeholder="Enter URL" />
      </div>
      <button type="submit" class="btn btn-default">Create</button>
    </form>
  )
}

const mapState = (state, ownProps) => {
  return {}
}

const mapDispatch = null;

export default connect(mapState, mapDispatch)(CreateCampus);
