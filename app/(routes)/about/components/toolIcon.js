import React, { useEffect } from 'react';
import { useState } from 'react';
import {FigmaIcon} from '../../../_assets/_icons/figma';
import {FramerIcon} from "../../../_assets/_icons/framer";
import {ReactIcon} from '../../../_assets/_icons/react';
import {NextIcon} from '../../../_assets/_icons/next';
import {GithubIcon} from '../../../_assets/_icons/github';


const ToolIcon = (name) => {
  const [showTooltip, setShowTooltip] = useState(false);
    const [icon, setIcon] = useState(null);

    useEffect(() => {
        if (name === 'Figma') {
            setIcon(<FigmaIcon />)
        } else if (name === 'Framer') {
            setIcon(<FramerIcon />)
        } else if (name === 'React') {
            setIcon(<ReactIcon />)
        } else if (name === 'Next') {
            setIcon(<NextIcon />)
        } else if (name === 'Github') {
            setIcon(<GithubIcon />)
        }
    }, [name])

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div
      className="tool-icon"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
        {icon}


      {showTooltip && <div className="tooltip">{name}</div>}
    </div>
  );
};

export default ToolIcon;

