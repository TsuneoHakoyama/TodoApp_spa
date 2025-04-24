import React from "react";
import { TaskInput } from "./components/TaskInput";
import { TaskList } from "./components/TaskList";

export const Index: React.FC = () => {
    return (
        <>
            <TaskInput />
            <TaskList />
        </>
    );
}
