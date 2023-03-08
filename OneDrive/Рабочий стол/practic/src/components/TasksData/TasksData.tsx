import React from 'react';

interface ITasksDataProsp {
    data: string[]
    result: string;
}

const TasksData = ({data, result}: ITasksDataProsp) => {
    return (
        <>
            <h1>Задания</h1>
            <div>
                {data.map((taskItem) => (
                    <li key={taskItem}>{taskItem}</li>
                ))}
            </div>
            {result && (
                <img src={`/images/${result}`} alt={result}/>
            )}
        </>
    );
};

export default React.memo(TasksData);