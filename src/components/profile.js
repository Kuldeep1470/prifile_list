import React, { useState, useEffect } from "react";

export const Profile = (props) => {
  const [profiles, setProfiles] = useState([]);
  // This method fetches the records from the database.
  useEffect(() => {
    async function getProfiles() {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${props.Id}`
      );

      if (!response.ok) {
        const message = `An error occured: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const profiles = await response.json();
      setProfiles(profiles);
    }

    getProfiles();
    return;
  });
  return (
    <ul className="profile-card">
      <li>
        <img
          src={`https://avatars.dicebear.com/api/male/${profiles.id + 100}.svg`}
          alt=""
        />
      </li>
      <li>
        <span>
          {" User ID: "}
          {profiles.userId}
        </span>{" "}
        <span>
          {"ID: "}
          {profiles.id}
        </span>
      </li>
      <li>{profiles.title}</li>
      <li>{profiles.body}</li>
    </ul>
    // <>lasjdf</>
  );
};
