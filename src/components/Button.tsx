import React from "react";

interface Button {
  ButtonText: string;
  ButtonStyle: string;
}

const Button: React.FC<Button> = ({ ButtonStyle, ButtonText }) => {
  return (
    <div>
      <button className={`${ButtonStyle} cursor-pointer`}>{ButtonText}</button>
    </div>
  );
};

export default Button;
