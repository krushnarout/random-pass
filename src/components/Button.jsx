import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className="px-4 py-1 m-2 font-medium bg-[#f2f2f2] rounded-lg">
        {name}
      </button>
    </div>
  );
};

export default Button;
