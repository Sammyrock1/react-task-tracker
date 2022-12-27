import PropTypes from 'prop-types';
import Button from './Button';


const Header = ({title,onAdd,ShowAdd}) => {

    return (
      <header className="header">
        <h1>{title}</h1>
        <Button color={ShowAdd? "red" : "green"} 
        text={ShowAdd? "close" : "Add"} 
        onClick={onAdd} />
      </header>
    );
}

Header.defaultProps = {
  title: "Task Tracker",
};

    Header.headerPropTypes={
        title: PropTypes.string.isRequired,
    }
//css styling in  jsx
    // const headingStyle={
    //     color : "red",
    //     backgroundColor: "black"
    // }

export default Header;