import React from 'react';
import 'antd/dist/antd.min.css';

type linkPropsType = {
href : string,
target: string,
text: string
}

const Link: React.FC<linkPropsType> = ({href, target, text}) => {
  // Anchor tag can be replaced by Link if using react-router
  return (
    <a href={href} target={target}>{text}</a>
  )
};

export default Link