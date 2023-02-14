import React from "react";

const DisplayProfile = () => {

    const profileClassName = 'bg-slate-600 p-2 rounded';

    const twitter = false;
    const location = false;
    const company = false;

    return (
        // https://avatars.githubusercontent.com/u/108686152?v=4
        <div className="userGitHubProfile w-full mt-5 flex flex-col justify-center items-center md: ">

            <div className="userProfileImage w-11/12 flex justify-center border-dashed border-2 border-slate-500 rounded">
                <img 
                    className="p-2 w-10/12 rounded"
                    src="https://avatars.githubusercontent.com/u/108686152?v=4"
                    alt="GitHub Profile"
                />
            </div>

            <div className="userProfileContent p-3 w-full">
                <div className={`${profileClassName} flex flex-row justify-between w-full text-lg`}>
                    <div className="userItem">Name</div>
                    <div className="userContent">Maxim Dudai</div>
                </div>
            </div>

            <div className="userProfileContent p-3 w-full">
                <div className={`${profileClassName} flex flex-row justify-between w-full text-lg`}>
                    <div className="userItem">ID</div>
                    <div className="userContent">108686152</div>
                </div>
            </div>

            <div className="userProfileContent p-3 w-full">
                <div className={`${profileClassName} flex flex-row justify-between w-full text-lg`}>
                    <div className="userItem">Followers</div>
                    <div className="userContent">0</div>
                </div>
            </div>

            <div className="userProfileContent p-3 w-full">
                <div className={`${profileClassName} flex flex-row justify-between w-full text-lg`}>
                    <div className="userItem">Following</div>
                    <div className="userContent">0</div>
                </div>
            </div>

            <div className="userProfileContent p-3 w-full">
                <div className={`${profileClassName} flex flex-row justify-between w-full text-lg`}>
                    <div className="userItem">Since</div>
                    <div className="userContent">2022-07-04T16:01:46Z</div>
                </div>
            </div>

            {/* Twitter */}
            {
                !twitter
                &&
                <div className="userProfileContent p-3 w-full">
                    <div className={`${profileClassName} flex flex-row justify-between w-full text-lg`}>
                        <div className="userItem">Twitter</div>
                        <div className="userContent">maxd_dev</div>
                    </div>
                </div>
            }

            {/* Location */}
            {
                !location
                &&
                <div className="userProfileContent p-3 w-full">
                    <div className={`${profileClassName} flex flex-row justify-between w-full text-lg`}>
                        <div className="userItem">Location</div>
                        <div className="userContent">Portugal, Alcobaça</div>
                    </div>
                </div>
            }

            {/* company */}
            {
                !company
                &&
                <div className="userProfileContent p-3 w-full">
                    <div className={`${profileClassName} flex flex-row justify-between w-full text-lg`}>
                        <div className="userItem">Company</div>
                        <div className="userContent">innoTech</div>
                    </div>
                </div>
            }

        </div>
    )
};
export default DisplayProfile;