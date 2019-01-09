import React from 'react';


const todoList = ( props ) => {
    return (
        <div>
            <ul>
                {props.items.map((item, index) => {
                    return <li key={index}>
                        <input
                            checked={props.done}
                            onChange={props.change}
                            type="checkbox"/>
                        {item}
                        <a href="#" onClick={ props.delete }>[X]</a>
                    </li>
                })}
            </ul>
        </div>
    );
};

export default todoList;