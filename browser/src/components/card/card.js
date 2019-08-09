import React, { Component } from './node_modules/react';

import './card.less';

export default class card extends Component {
    
    render() {
        return(
            <div className="card">
                <div className="card__titile">title</div>
                <div class="card__main">
                    <div className="card__main__img">
                        <span></span>
                    </div>
                    <div className="card__main__cont">
                        <h4>超级贵的</h4>
                        <div class="card__main__cont__text">
                            <b>起拍价：¥ 1,0000</b>
                            <font>目前参与人数：668人</font>
                            <button>点击参与</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}