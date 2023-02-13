// import React from 'react';

// const ColourSelector = (props) => {
//   const { config, selectNextBackground } = props
//   const { background } = config;
//   return (
//     <button className={/* classname should come here */} onClick={() => selectNextBackground({background: background})}>
//       {/* label should come here */}
//     </button>
//   )
// }
// export default ColourSelector;
import React from "react"

class Color extends React.Component{
    constructor(){
        super()
    }
    render(){
        console.log(this.props)
        return <div className='color' style={{backgroundColor: this.props.color}} onClick={()=>{
            this.props.updateSelectedColor(this.props.color)
          }}></div>
    }
}

export default Color;

