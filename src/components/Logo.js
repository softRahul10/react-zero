import avatar from './avatar.png';
const size = {
    width:'50px',
    height:'50px',
    borderRadius:'50%',
}
const freeSize = {maxWidth:'100%',maxHeight:'100%'};

const Logo = (props) => <img style={props.size === undefined ? freeSize : size} src={avatar} />
export default Logo;