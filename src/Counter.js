import React from 'react';
import { connect } from 'react-redux';
import * as actions from './redux/actions/actionCreator';


const Counter = props => {
    return (
        <div style={{width:'400px', margin:'100px auto', padding:'10px'}}>
            <h2>Current count: {props.count}</h2>
            <button onClick={props.add}>add</button>
            <button onClick={props.sub}>sub</button><br/>
            <button onClick={() => props.addNum(10)}>add10</button>
            <button onClick={() => props.subNum(15)}>sub15</button>
        </div>
    )
}

const mapSateToProps = state => {
    return {
        count: state.count
    }
}

const mapDispatchToProps = dispatch => {
    return {
        add: () => dispatch(actions.incCount()),
        sub: () => dispatch(actions.decCount()),
        addNum: num => dispatch(actions.addNumber(num)),
        subNum: num => dispatch(actions.subNumber(num))
    }
}
export default connect(mapSateToProps,mapDispatchToProps)(Counter);