import React from "react";
import { BsCheck } from "react-icons/bs";
import cn from "classnames";

const Check = ({ isCompleted }) => {
    return (
        <div
            className={cn(
                `border-2 rounded-md border-pink-400 ${
                    isCompleted ? "bg-pink-400" : ""
                } w-7 h-7 mr-3 flex items-center justify-center`,
                {
                    "bg-pink-400": isCompleted,
                }
            )}
        >
            {isCompleted && <BsCheck size={24} className="text-grey-900" />}
        </div>
    );
};

export default Check;
