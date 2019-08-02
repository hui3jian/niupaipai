import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import { ListView } from 'antd-mobile';
import './npp-list.less';


export default class NppList extends Component {
    static propTypes = {
        title: PropTypes.string
    }

    render() {
        return (
            <div class="npp-list">
                list
            </div>
        )
    }
}