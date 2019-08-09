import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './dropdown.less';

export default class Dropdown extends Component {

    static propTypes = {
        options: PropTypes.array
    }

    state = {
        showDrop: false,
    }

    selectedItem(e, data) {
        console.log(e, data)
        this.handleDrop();
    }

    handleDrop() {
        this.setState({
            showDrop: !this.state.showDrop,
        })
    }

    render() {
        return (
            <div className="dropdown">
                {/* 触发事件的模块 */}
                <div className={`${this.state.showDrop ? 'attr__exposed' : ''} dropdown__trigger`} onClick={this.handleDrop.bind(this)}>
                    {this.props.children}
                </div>

                {/* 下拉选择内容 */}
                <div className={`${this.state.showDrop ? 'enter-animation' : 'leave-animation'} dropdown__main`}>
                    {this.state.showDrop && (
                        <ul>
                            {this.props.options.map((item, key) => (
                                <li key={key} onClick={(e) => { this.selectedItem(e, item) }}>
                                    {item.label}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* 点击遮罩，下拉层消失 */}
                {this.state.showDrop && (
                    <div className="dropdown__mask" onTouchStart={this.handleDrop.bind(this)}></div>
                )}
            </div>
        )
    }
}