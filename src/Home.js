import React, { Component } from 'react'
import Header from './components/Header'
import { connect } from 'react-redux'
import MyDropzone from './components/MyDropzone'

//this.props.number = store.state.num
class Home extends Component {
    render() {
        return (
            <div>
                <MyDropzone />
                <h2>Home Page</h2>
                {this.props.number}
                <Header />
            </div>
        )
    }
}
//Chuyen state thanh props, state.num -> this.props.number
const mapStateToProps = (state, ownProps) => {
    return {
        number: state.num
    }
}

//Su dung connect de ket noi giua component va store
export default connect(mapStateToProps)(Home)