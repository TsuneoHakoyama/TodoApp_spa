import React from "react";

import { useTasks } from "../../../queries/TaskQuery";
import { TaskItem } from "./TaskItem";

export const TaskList: React.FC = () => {
    const { data: tasks, status } = useTasks()

    if (status === 'pending') {
        return <div className="loading" />
    } else if (status === 'error') {
        return <div className="align-center">データの読み込みに失敗しました</div>
    } else if (!tasks || tasks.length <= 0) {
        return <div className="align-center">登録されたTODOはありません</div>
    }

    return (
        <>
            <div className="inner">
                <ul className="task-list">
                    {tasks.map(task => (
                        <TaskItem key={task.id} task={ task } />
                    ))}
                </ul>
            </div>
        </>
    );
}
