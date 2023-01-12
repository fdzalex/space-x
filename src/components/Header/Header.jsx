import React from "react";
import LABEL from "../../constants/Labels";
import CONSTANTS from "../../constants/Config";
import { Button } from "../../components/Button";
import { useLaunchContext } from "../../contexts/LaunchContext/LaunchContext";

export const Header = () => {
  const { filter, listLaunches } = useLaunchContext();
  return (
    <header className="app__header">
      <div className="app__logo">
        {/* missing src  */}
        <img 
          className="app__logo-image" 
          alt="" 
          src={CONSTANTS.LOGO} 
        />
        <span className="app__logo-txt">{LABEL.LAUNCHES}</span>
      </div>
      <Button
        filter={filter}
        //missing onClick
        onClick={() => listLaunches()}
        classes="button button--reload"
        label={LABEL.RELOAD}
        allowDisabledState={false}
      />
    </header>
  );
};
