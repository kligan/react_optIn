import React from 'react';
import ReactDOM from 'react-dom';
import Cash from '../../components/Cash';

it("renders without crashing", ()=>{
const div = document.createElement("div");

ReactDOM.render(<Cash />, div)
})