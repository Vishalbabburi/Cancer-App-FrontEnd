import logo from '../../iisc.png'
import logo2 from '../../dese_1.png'

const Navbar=(props)=> {
    const logoStyle={
      marginLeft:"10px",
        width:"60px"
    }
    const logo2Style={
      width:"100px",
      marginRight:"10px"
  }
    const contentStyle={
        textAlign:"center",
        color:"white",
        fontWeight : "bolder",
        fontSize: "40px",
        marginLeft:"auto",
        marginRight:"auto"
    }
    return (
      <div>
        <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
        <a className="navbar-brand" href="#">
        <img style={logoStyle} src={logo} alt="logo" />
        </a>
        <span style={contentStyle}>
            <div >
            <h2 className="nav-link " style={contentStyle}>FNAC CELL GRADING</h2>
            </div>
        </span>
        <a className="" href="#">
        <img style={logo2Style} src={logo2} alt="logo" />
        </a>
        
        
</nav>
      </div>
    );
  }
  
  export default Navbar;