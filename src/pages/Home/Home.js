import React, {Component} from 'react';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this.count=2;
    }
    _handleClick() {
        this.setState({
            count: ++this.state.count
        });
    }
    render() {
        return (
            <div>
                this is home~{this.count}<br/>
                当前计数：{this.state.count}
                <button onClick={() => this._handleClick()}>自增</button>
                <input type="text" placeholder="输入数字" defaultValue="测试"/>
            </div>
        )
    }
}