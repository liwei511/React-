import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import {Provider} from 'react-redux';
import store from './redux/store'
// import Hello from 'component/Hello/Hello';
import getRouter from 'router/router';

renderWithHotReload(getRouter());

/* 热更新 */
if (module.hot) {
    module.hot.accept('./router/router', () => {
        const getRouter = require('router/router').default;
        renderWithHotReload(getRouter());
    })
}

function renderWithHotReload(RootElement) {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                {RootElement}
            </Provider>
        </AppContainer>,
        document.getElementById('app')
    )
}
// var b = React.createElement('button', {onClick: clickTest}, '点击');

// var clickTest = ()=> {
// 	alert('hello click');
// }
// console.log(getRouter());
// if (module.hot) {
// 	module.hot.accept();
// }
// ReactDOM.render(getRouter(), document.getElementById('app'));
// var a = React.createElement('input', {type: 'text', 'defaultValue': '测试'});
// ReactDOM.render(a, document.getElementById('app'));
// /
// func('使用的Babel!');
// function clickTest() {
// 	alert('hello click2');
// }