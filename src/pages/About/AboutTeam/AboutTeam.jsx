import React, { useEffect, useState } from 'react';
import teamMembersData from '../../../assets/API/ApiTeamMembers.json'; // Импортируем данные из JSON файла

const Team = () => {
    const [teamMembers, setTeamMembers] = useState([]);

    useEffect(() => {
        setTeamMembers(teamMembersData);
    }, []);

    return (
        <div className="about__team">
            <h2 className='team__title'>Team</h2>
            <div className="team__container">
                {teamMembers.map((member, index) => (
                    <div className="team__member" key={index}>
                        <div className="member__photo-container">
                            <img
                                src={member.photo}
                                alt={member.name}
                                className="member__photo"
                            />
                        </div>
                        <div className='member__text'>
                            <h3 className="member__name">{member.name}</h3>
                            <p className="member__role">{member.role}</p>
                            <p className="member__email">{member.email}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Team;
