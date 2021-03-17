import React, { useState, useReducer } from 'react';
import reducer, { initialState } from "../src/reducers/index";
import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';
import { addOne, applyNumber, changeOp, clearDisplay, setMemTotal, resetMemory } from './actions/index';
function App() {

const [state, dispatch] = useReducer(reducer, initialState)

const handleChanges = e => {
  dispatch(addOne(e.target.value));
};

// const changeOper = e => {
//   dispatch(changeOp(e.target.value));
// };
const changeToAdd = e => {
  dispatch(changeOp(' +'))
  
}
const changeToSub = e => {
  dispatch(changeOp(' -'))
  
}
const changeToMult = e => {
  dispatch(changeOp(' *'))
  
}
const clearFunc = e => {
  dispatch(clearDisplay())
}

const setMemTot = e => {
  dispatch(setMemTotal())
}

const clearMem = e => {
  dispatch(resetMemory())
}

const applyNum = e => {
  dispatch(applyNumber(state.memory))
}

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png"/> Lambda Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b>{state.operation} </span>
              <span id="memory"><b>Memory:</b>{state.memory} </span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick={setMemTot}/>
              <CalcButton value={"MR"} onClick={applyNum}/>
              <CalcButton value={"MC"}onClick={clearMem}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={handleChanges}/>
              <CalcButton value={2}/>
              <CalcButton value={3}/>
            </div>

            <div className="row">
              <CalcButton value={4}/>
              <CalcButton value={5}/>
              <CalcButton value={6}/>
            </div>

            <div className="row">
              <CalcButton value={7}/>
              <CalcButton value={8}/>
              <CalcButton value={9}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick ={changeToAdd}/>
              <CalcButton value={"*"} onClick ={changeToMult} />
              <CalcButton value={"-"} onClick ={changeToSub} />
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={clearFunc}  />
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
