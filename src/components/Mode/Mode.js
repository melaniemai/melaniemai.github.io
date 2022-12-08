import "./Mode.css";
import { BsSun } from 'react-icons/bs';


export default function Mode({ handleModeChange }) {
  return (
    <div className="container-mode">
      <div className="mode-nav white-text">
        {/* <ul>
          <li>
            <a href="">Works</a>
          </li>
          <li>
            <a target="_blank" href="">Source</a>
          </li>
          <li>
            <a href="">Me</a>
          </li>
        </ul> */}
      </div>
      <button onClick={handleModeChange} className="container-icon">
        <BsSun className="mode-icon" />
      </button>
    </div>
  );
}