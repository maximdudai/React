import React from "react";

const DisplayProfile = ({img_url, name, id, Followers, Following, since, twitter, location, company}) => {

    const profileClassName = 'bg-slate-600 p-2 rounded';

    return (
        <div className="userGitHubProfile w-full mt-5 flex flex-col justify-center items-center md: ">

            <div className="userProfileImage w-11/12 flex justify-center border-dashed border-2 border-slate-500 rounded">
                <img 
                    className="p-2 w-10/12 rounded"
                    src={img_url}
                    alt="GitHub Profile"
                />
            </div>

            <div className="userProfileContent p-3 w-full">
                <div className={`${profileClassName} flex flex-row justify-between w-full text-lg`}>
                    <div className="userItem">User</div>
                    <div className="userContent">{name}</div>
                </div>
            </div>

            <div className="userProfileContent p-3 w-full">
                <div className={`${profileClassName} flex flex-row justify-between w-full text-lg`}>
                    <div className="userItem">ID</div>
                    <div className="userContent">{id}</div>
                </div>
            </div>

            <div className="userProfileContent p-3 w-full">
                <div className={`${profileClassName} flex flex-row justify-between w-full text-lg`}>
                    <div className="userItem">Followers</div>
                    <div className="userContent">{Followers}</div>
                </div>
            </div>

            <div className="userProfileContent p-3 w-full">
                <div className={`${profileClassName} flex flex-row justify-between w-full text-lg`}>
                    <div className="userItem">Following</div>
                    <div className="userContent">{Following}</div>
                </div>
            </div>

            <div className="userProfileContent p-3 w-full">
                <div className={`${profileClassName} flex flex-row justify-between w-full text-lg`}>
                    <div className="userItem">Since</div>
                    <div className="userContent">{since}</div>
                </div>
            </div>

            {/* Twitter */}
            {
                twitter
                &&
                <div className="userProfileContent p-3 w-full">
                    <div className={`${profileClassName} flex flex-row justify-between w-full text-lg`}>
                        <div className="userItem">Twitter</div>
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
                        <div className="userItem">Location</div>
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
                        <div className="userItem">Company</div>
                        <div className="userContent">{company}</div>
                    </div>
                </div>
            }

        </div>
    )
};
export default DisplayProfile;