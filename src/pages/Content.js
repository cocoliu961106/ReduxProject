import React from 'react';


// Redux 工作原理：
// Store(储存state) ——》(订阅)Components ——》
// (触发)Action ——》(传递给)Reducer ——》(改变)Store(中的state)

export default class Content extends React.Component {

    render() {
        return (
            <div>
                Hello World123!
            </div>
        );
    }
}
