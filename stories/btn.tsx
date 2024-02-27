import React from "react";
type Props = {
  color?: 'red' | 'blue' | 'green';
}

/** This is some Btn somment */
const Btn = ({color='blue'}: Props) => {
  /** This is internal comment */
  return <button style={{width: 150, height:50, backgroundColor: color}} >HERE</button>

}
export default Btn