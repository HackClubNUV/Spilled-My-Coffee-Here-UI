import React from 'react'
import classNames from 'classnames';

const LeaderboardCard = ({ data }) => {

    const { rank, fullName, level, points } = data;
    const containerClassnames = classNames({
        "container w-11/12 sm:w-8/12 h-16 my-2 mx-auto flex flex-row justify-evenly items-center shadow-xl card-container": true,
        "w-full sm:w-full mt-0  h-20 bg-black -ml-2 text-pink card-titleContainer": rank === "RANK",
        "sm:w-11/12 h-24 mt-5": rank === "1",
        "sm:w-10/12 h-20": rank === "2",
        "sm:w-9/12 h-16": rank === "3",
    });

    return (
        <div className={containerClassnames}>
            <h6 className="card-info">{rank}</h6>
            <div className="container w-2/6 flex flex-col items-center">
                <h6 className="card-name">{fullName}</h6>
                <p className="card-level"> {level}</p>
            </div>
            <h6 className="card-info">{points}</h6>
        </div>
    )
}

export default LeaderboardCard