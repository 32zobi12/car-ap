
import reportWebVitals from './reportWebVitals';
import state from "./components/Redux/state";
import {rerenderEnterTree} from "./render";
rerenderEnterTree(state);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
