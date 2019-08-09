import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './npp-list.less';

export default class NppList extends Component {
    static propTypes = {
        options: PropTypes.array.isRequired
    }

    render() {
        return (
            <div className="npp-list">
                {
                    this.props.options.map((item, key) => (
                        <div className="npp-list__item" key={key}>
                            <span
                                className="npp-list__item__cover"
                                style={{ backgroundImage: `url(${item.indexImage})` }}
                            >
                            </span>
                            <div className="npp-list__item__bottom">
                                <p className="npp-list__item__title">
                                    {item.titleName}
                                </p>
                                <div className="npp-list__item__user">
                                    <img src={item.headPic} alt="" />
                                    <font>{item.username || '佚名'}</font>
                                    <span>
                                        <svg className="icon" aria-hidden="true">
                                            <use xlinkHref="#icon-dianzan"></use>
                                        </svg>
                                        {item.likeCount}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
        )
    }
}