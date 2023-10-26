import Svg, { Line, G } from 'react-native-svg';
import PropTypes from "prop-types";


const SvgPlus = ({ stroke, rotate = '0', height = "25", width = "25",  strokeWidth = "1" }) => {
    const cx = `${width / 2}`;
    const cy = `${height / 2}`;
    const x1 = `${width / 4}`;
    const y1 = `${height / 4}`;
    const x2 = `${width - x1}`;
    const y2 = `${height - y1}`;
   return (
        <Svg height={height} width={width} >
            <G rotation={rotate} origin={`${cx}, ${cy}`}>
              <Line x1={x1} y1={cy} x2={x2} y2={cy} stroke={stroke} strokeWidth={strokeWidth} />
              <Line x1={cx} y1={y2} x2={cx} y2={y1} stroke={stroke} strokeWidth={strokeWidth} />
            </G>    
        </Svg>
    )
}

// const SvgPlus = ({stroke, rotate = '0'}) => {
//     return (
//         <Svg height="25" width="25" >
//             <Circle cx="12.5" cy="12.5" r="12" fill="#fff" stroke={stroke} strokeWidth="1" />
//             <G rotation={rotate} origin="12, 12">
//               <Line x1="6.5" y1="12.5" x2="18.5" y2="12.5" stroke={stroke} strokeWidth="1" />
//               <Line x1="12.5" y1="18.5" x2="12.5" y2="6.5" stroke={stroke} strokeWidth="1" />
//             </G>    
//         </Svg>
//     )
// }


export default SvgPlus;


SvgPlus.propTypes = {
  stroke: PropTypes.string.isRequired,
  rotate: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  strokeWidth: PropTypes.string
}