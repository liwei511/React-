import {combineReducers} from 'redux';

import counter from './reducers/counter';
import userInfo from './reducers/userInfo'

// 一个项目有很多的reducers，这个js是把他们整合到一起自己整合
// export default function combineReducers(state = {}, action) {
//     return {
//         counter: counter(state.counter, action) ,
//         userInfo: userInfo(state.userInfo, action)
//     }
// }

export default combineReducers({
    counter,
    userInfo
});