import React, { useEffect, useState } from "react";
import '../App.css';

import axios from "axios";
import Dropzone from "./Dropzone";
import { Drop } from './styles';

const UserProfile = () => {

  const [userProfiles, setUserProfiles] = useState([]);

  const fetchUserProfiles = () => {
    axios.get('http://localhost:8080/api/v1/user-profile')
      .then(res => {
        setUserProfiles(res.data);
      });
  };

  useEffect(fetchUserProfiles, []);

  return userProfiles.map((userProfile, index) => {
    const username = userProfile.username;
    const userProfileId = userProfile.userProfileId;
    return (
      <section key={index} className="container row">
        <div className="item">
              {userProfileId ?
                <img src={`http://localhost:8080/api/v1/user-profile/${userProfileId}/image/download`} alt={'profile'}/> :
                null}
              <h2>{username}</h2>
              <p>{userProfileId}</p>
              <Drop>
                <Dropzone {...userProfile} />
              </Drop>
        </div>
      </section>
    );
  });
};

export default UserProfile;