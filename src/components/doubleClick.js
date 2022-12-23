import React, { useRef } from "react";

const DoubleClick = ({
  onClick = () => {},
  onDoubleClick = () => {},
  children,
}) => {
  const timer = useRef();

  const onClickHandler = (event) => {
   clearTimeout(timer.current);
  

   if(event.detail === 1){
    onClick();
   } else if (event.detail === 2) {

      onDoubleClick();
    }
  };

  return <div onClick={onClickHandler}>{children}</div>;
};
export default DoubleClick;
