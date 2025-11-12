import "./Header.css"

function Header (){
    return(
        <header class="header">
    <div class="logo">
      <span class="j">J</span><span class="d">D</span>evelops
    </div>

    <button class="menu-toggle" id="menu-toggle">&#9776;</button>

    <nav class="nav" id="nav-menu">
      <a href="./index.html">Home</a>
      <a href="#">Services</a>
      <a href="./projectsIndex.html">Projects</a>
      <a href="#">Contact</a>
    </nav>
  </header>
    )
}

export default Header;