
import React, { Component } from "react"
import { withRouter } from 'react-router-dom'
import { Layout } from 'antd'

import Slider from './Slider'
import Main from './Main'
import './Home.css'



class Home extends Component {

    render() {
        return (
            <div className="home_page">
                <Layout style={{ minHeight: '100vh' }}>
                    <Slider props={this.props} state={this.state} />
                    <Layout>
                        <Main props={this.props} />
                    </Layout>
                </Layout>
            </div>
        );
    }
}

Home = withRouter(Home)

export default Home

