import React from "react";
import { useRecoilValue } from "recoil";
import { toDoSelector } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

function TodoList() {
    const [toDo, doing, done] = useRecoilValue(toDoSelector);

    return (
        <div>
            <h1>To Dos</h1>
            <h1 />
            <CreateToDo />
            <ul>
                {toDo.map(toDo => (
                    <ToDo key={toDo.id} {...toDo} />
                ))}
            </ul>
            <hr />
            <h2>Doing</h2>
            <ul>
                {doing.map(toDo => (
                    <ToDo key={toDo.id} {...toDo} />
                ))}
            </ul>
            <h2>Done</h2>
            <ul>
                {done.map(toDo => (
                    <ToDo key={toDo.id} {...toDo} />
                ))}
            </ul>
            <hr />
        </div>
    );
}

export default TodoList;
