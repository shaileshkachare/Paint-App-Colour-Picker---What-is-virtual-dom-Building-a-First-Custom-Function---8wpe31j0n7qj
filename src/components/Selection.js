
// import React from "react"
// import "../styles/Child.css"

// class Selection extends React.Component{
//     constructor(){
//         super()
//         this.state={
//             selectionStyle:{background:''}
//         }
//     }
//     updateSelectionStyle=(value)=>{
//         this.setState({selectionStyle: value})
//     }
//     render(){
//         return <div className="fix-box" style={this.state.selectionStyle} onClick={()=>{
//             // this.setState({selectionStyle: this.props.nextBackground})
//             this.props.applyColor(this.updateSelectionStyle)
//         }}>
//             <h2 className="subheading">Selection</h2>
//         </div>
//     }

import React, {useState} from 'react';
import '../styles/Child.css';
function Selection(props) {
     const [background, setBackground] = useState({ background: '' });
     return (
          <div onClick={() => props.applyColor(setBackground)}
           className='fix-box' style={background}>
               <h2 className='subheading'>Selection</h2>
          </div>
     );
}

export default Selection;