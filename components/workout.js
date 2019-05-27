import React, { Fragment, useState } from 'react'
import { getDay } from 'date-fns';
import users from '../users.json';

export default function Workout({ match }) {
    const { name } = match.params
    const [dayIndex, setDayIndex] = useState(getDay(new Date()));
    const currentDay = users[name].week[dayIndex];

    const previousDay = () => {
        setDayIndex(dayIndex - 1 < 0 ? 6 : dayIndex - 1)
    }

    const nextDay = () => {
        setDayIndex(dayIndex + 1 > 6 ? 0 : dayIndex + 1)
    }

    const getTotalTime = () => {
        const sum = currentDay.exercises.reduce((stack, exercise) => stack + exercise.time, 0);
        if (currentDay.repetitions) {
            return sum * currentDay.repetitions / 60;
        }
        return sum / 60;
    }

    return (
        <Fragment>
            <div className="controls">
                <button onClick={previousDay} className="prev"></button>
                <button onClick={nextDay}></button>
            </div>
            {currentDay.rest && <div className="day"><h1>{currentDay.name}</h1><h2>Descanso</h2></div>}
            {
                !currentDay.rest && (
                    <div className="day">
                        <h1>{currentDay.name}</h1>
                        <h2>{currentDay.session} - {Math.floor(getTotalTime())} min</h2>
                        <ul>
                            {currentDay.exercises.map((exercise, i) =>
                                <li key={i}>{exercise.name} ({exercise.time} segundos) </li>
                            )}
                        </ul>
                        {currentDay.repetitions && <em>{currentDay.repetitions} repetições</em>}
                    </div>
                )
            }
        </Fragment>
    )
}
