import React from "react";

const DisplayProfile = ({bio, img_url, name, id, Followers, Following, since, twitter, location, company}) => {

    const profileClassName = 'bg-slate-600 p-2 rounded';

    return (
        <div className="userGitHubProfile mt-10 flex flex-col justify-between sm:flex-col md:w-2/3">

            <div className="userBio bg-slate-700 w-full p-4 rounded text-md text-white">
                <p>{bio}</p>
            </div>

           <div className="userInformations flex flex-row justify-between items-center w-full">
                
                <div className="userProfileImage flex justify-center">
                    <img 
                        className="p-2 w-auto rounded"
                        src={img_url}
                        alt="GitHub Profile"
                    />
                </div>

                <div className="profileData md:w-1/3">
                    <div className="userProfileContent p-3 w-full">
                        <div className={`${profileClassName} flex flex-row justify-between w-full text-lg`}>
                            <div className="userItem"><b>User</b></div>
                            <div className="userContent">{name}</div>
                        </div>
                    </div>

                    <div className="userProfileContent p-3 w-full">
                        <div className={`${profileClassName} flex flex-row justify-between w-full text-lg`}>
                            <div className="userItem"><b>ID</b></div>
                            <div className="userContent">{id}</div>
                        </div>
                    </div>

                    <div className="userProfileContent p-3 w-full">
                        <div className={`${profileClassName} flex flex-row justify-between w-full text-lg`}>
                            <div className="userItem"><b>Followers</b></div>
                            <div className="userContent">{Followers}</div>
                        </div>
                    </div>

                    <div className="userProfileContent p-3 w-full">
                        <div className={`${profileClassName} flex flex-row justify-between w-full text-lg`}>
                            <div className="userItem"><b>Following</b></div>
                            <div className="userContent">{Following}</div>
                        </div>
                    </div>

                    <div className="userProfileContent p-3 w-full">
                        <div className={`${profileClassName} flex flex-row justify-between w-full text-lg`}>
                            <div className="userItem"><b>Since</b></div>
                            <div className="userContent">{since}</div>
                        </div>
                    </div>

                    {/* Twitter */}
                    {
                        twitter
                        &&
                        <div className="userProfileContent p-3 w-full">
                            <div className={`${profileClassName} flex flex-row justify-between w-full text-lg`}>
                                <div className="userItem"><b>Twitter</b></div>
                                <div className="userContent">{twitter}</div>
                            </div>
                        </div>
                    }

                    {/* Location */}
                    {
                        location
                        &&
                        <div className="userProfileContent p-3 w-full">
                            <div className={`${profileClassName} flex flex-row justify-between w-full text-lg`}>
                                <div className="userItem"><b>Location</b></div>
                                <div className="userContent">{location}</div>
                            </div>
                        </div>
                    }

                    {/* company */}
                    {
                        company
                        &&
                        <div className="userProfileContent p-3 w-full">
                            <div className={`${profileClassName} flex flex-row justify-between w-full text-lg`}>
                                <div className="userItem"><b>Company</b></div>
                                <div className="userContent">{company}</div>
                            </div>
                        </div>
                    }
                </div>
           </div>
        </div>
    )
};
export default DisplayProfile;