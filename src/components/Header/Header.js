import './Header.css';
import { MdOutlinePinDrop } from "react-icons/md";


export default function Header() {
  return (
    <div className='header'>
      <header>
        <h1 className='header-title'>Hello.</h1>
        <div className='header-desc-box'>
          <p>
            <MdOutlinePinDrop /> Student & Dev. based in Cincy 
          </p>
        </div>
      </header>
    </div>
  );
}