import "./Mode.css";
import { BsSun } from 'react-icons/bs';


export default function Mode({ handleModeChange }) {
  return (
    <div className="container-mode">
      <div className="mode-nav white-text">
      </div>
      <button onClick={handleModeChange} className="container-icon">
        <BsSun className="mode-icon" />
      </button>
    </div>
  );
}