import React, { useState } from 'react';
import 'bulma/css/bulma.css';

export const InputToDo = (props) => {

    // stateを作成
    const [text, setText] = useState('');

    //入力値をtextに反映
    const handleChange = e => setText(e.target.value);

    // Enter押下時、ToDoに追加
    const handleEnter = e => {
        if (e.key === 'Enter') {
            // 入力値が空白文字の場合終了
            if (!text.match(/\S/g)) return;
            // ToDoAppクラスの「handleAdd」関数を実行
            props.onAdd(text);
            setText('');
        }
    };

    return (
        <div className="panel-block">
            <input
                class="input"
                type="text"
                placeholder="Enter to add"
                value={text}
                onChange={handleChange}
                onKeyPress={handleEnter}
            />
        </div>
    );
}

export default InputToDo;