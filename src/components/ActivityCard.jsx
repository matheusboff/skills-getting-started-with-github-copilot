import React from 'react';
import './ActivityCard.css';

const ActivityCard = ({ activity }) => {
  return (
    <div className="activity-card">
      {/* Existing content for the activity card */}
      
      {/* Participants Section */}
      <div className="participants-section">
        <h4>Participantes</h4>
        {activity.participants && activity.participants.length > 0 ? (
          <ul className="participants-list">
            {activity.participants.map((participant, idx) => (
              <li key={idx} className="participant-item">
                <span role="img" aria-label="user">👤</span> {participant}
              </li>
            ))}
          </ul>
        ) : (
          <p className="no-participants">Nenhum participante inscrito ainda.</p>
        )}
      </div>
    </div>
  );
};

export default ActivityCard;

/* ActivityCard.css */
.activity-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin: 16px 0;
  background-color: #fff;
}

.participants-section {
  margin-top: 16px;
}

.participants-list {
  list-style-type: none;
  padding: 0;
}

.participant-item {
  display: flex;
  align-items: center;
  padding: 4px 0;
}

.no-participants {
  color: #999;
}