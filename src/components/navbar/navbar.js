import logo from '../../iisc.png'

const Navbar=(props)=> {
    const logoStyle={
        width:"50px"
    }
    const contentStyle={
        textAlign:"center",
        color:"white",
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
            <h2 className="nav-link " style={contentStyle}>FNAC CELL GROUPING</h2>
            </div>
        </span>
        
        
</nav>
      </div>
    );
  }
  
  export default Navbar;