import React from "react";

const ImageForm = () => {
    return (
        <div className="text-center w-full mt-5 flex flex-col justify-center items-center md:h-3/4 lg:w-1/3">
            <p className="formTitle text-lg text-white mb-1">
                {'This SmartBrain will detect faces in your pictures, link it here and you will see!'}
            </p>
            <div className="formInput w-full flex justify-center items-center p-3 text-lg">
                <input 
                    className="p-2 w-full text-center focus:outline-none"
                    placeholder="Image URL"
                    type={'text'}
                />
                <button
                    className="p-2 px-12 bg-slate-800 rounded text-white shadow-lg hover:shadow-slate-900/50"
                >Detect</button>
            </div>
        </div>
    )
};
export default ImageForm;