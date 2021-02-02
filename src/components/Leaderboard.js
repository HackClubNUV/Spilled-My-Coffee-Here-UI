import React, { useState } from 'react'
import data from '../DummyData.json'
import LeaderboardCard from './LeaderboardCard'
import './leaderboard.styles.css'

const Leaderboard = () => {

    const [search, setSearch] = useState('');
    const [filteredUsers, setFilteredUsers] = useState(data);

    const searchFilterFunction = (text) => {
        if (text) {
            const newData = data.filter(function (item) {
                const userData = item.fullName
                    ? item.fullName.toUpperCase()
                    : ''.toUpperCase();
                const textData = text.toUpperCase();
                return userData.indexOf(textData) > -1;
            });
            setFilteredUsers(newData);
            setSearch(text);
        } else {
            setFilteredUsers(data);
            setSearch(text);
        }
    };

    return (
        <div className='h-screen flex flex-col justify-center items-center mainContainer'>
            <div className="w-8/12 flex justify-center py-3 mb-10 textContainer">
                <h1 className="text-2xl font-extrabold title">
                    Leaderboard
                </h1>
            </div>
            <div class="shadow flex w-full md:w-8/12 searchBox">
                <input
                    class="w-full p-3 searchBox" type="text" placeholder="Search..."
                    onChange={(text) => searchFilterFunction(text.target.value)}
                />
            </div>
            <div className="container w-full lg:w-8/12 h-screen mb-3 flex-grow 
            overflow-y-auto overscroll-contain scrollbar-thin scrollbar-thumb-pink-600
            scrollbar-track-gray-900 content"
            >
                <div className="sticky top-0 z-50">
                    <LeaderboardCard
                        data={{ rank: "RANK", fullName: "NAME", "level": "LEVEL", points: "POINTS" }}
                        className="leaderboard-card"
                    />
                </div>
                {
                    filteredUsers.map(element => {
                        return <LeaderboardCard
                            key={element.rank} data={element}
                            className="leaderboard-card"
                        />
                    })
                }
            </div>
        </div>
    )
}

export default Leaderboard
