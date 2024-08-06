import rectimg from '../../assets/react-core-concepts.png';
const reactDescrip = ['Fundamental','Crucial', 'Core'];
import './Header.css'

function genrand(max){
  return Math.floor(Math.random() * (max + 1));
}

function Header(){

  const descr = reactDescrip[genrand(2)];
  return(
    <header>
        <img src={rectimg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {descr} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
  )
}
export default Header;