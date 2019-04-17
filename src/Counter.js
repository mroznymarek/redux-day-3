import React from 'react'
import { connect } from 'react-redux'

const Counter = (props) => (
    <div>
        <h1>
            {props._number}
        </h1>
    </div>
)

const mapStateToProps = state => ({
    _number: state.counter.number,
})

export default connect(
    mapStateToProps
)(Counter)