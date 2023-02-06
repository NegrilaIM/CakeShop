import "../Styles/NavBar.scss"
import BasicMenu from './BasicMenu'

function NavBar () {

    return (
       <header className="Header-Nav">
         <h5>LOGO</h5>
         <BasicMenu />
         <h5 className="Pc-Nav">NAVMARE</h5>
       </header>
    )

}

export default NavBar