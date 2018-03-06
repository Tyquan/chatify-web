import React from 'react';
import {
  Link
} from 'react-router-dom';

const footerStyle = {
  marginTop: "100px",
  paddingTop: "100px",
  backgroundColor: '#D0E9EA',
  height: "200px"
};

export default () => (
  <div style={footerStyle}>
    <div class="row">
      <div class="col">
        <h1 className="text-center">User Footer Section</h1>
      </div>
    </div>
  </div>
);