import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { InputItem } from 'antd-mobile';
import './header.less';

class NppHeader extends Component {
    static propTypes = {
        className: PropTypes.string
    }

    static defaultProps = {
        className: ""
    }

    state = {
        val: ''
    }

    onChange(that, val) {
        that.setState({
            val: val
        })
        console.log(that.state.val)
    }

    render() {

        return (
            <header className={`header ${this.props.className||''}`}>
                <div className="header__main">
                    <span className="header__left">
                        <InputItem
                            placeholder="请输入店铺或者物品名称"
                            onChange={(val) => {this.onChange(this, val)}}
                        ></InputItem>
                    </span>
                    <span className="header__right">
                        <svg className="icon" aria-hidden="true">
                            <use xlinkHref="#icongonggao"></use>
                        </svg>
                    </span>
                </div>
            </header>
        )
    }
}

export default NppHeader