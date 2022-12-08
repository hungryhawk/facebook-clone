import { useEffect, useState, useRef } from 'react';
import Return from '../../../svg/return';
import Search from '../../../svg/search';
import useClickOutside from './useClickOutside';
import './style.css';

function SearchMenu({ setShowSearchMenu }) {
  const [iconVisible, setIconVisible] = useState(true);
  const color = 'gray';
  const input = useRef(null);

  

  useEffect(() => {
    input.current.focus();
  }, []);
  return (
    <div className="header_left search_area scrollbar">
      <div className="search_wrap">
        <div className="header_logo">
          <div
            className="circle hover1"
            onClick={() => setShowSearchMenu(false)}
          >
            <Return color={color} />
          </div>
        </div>
        <div className="search">
          {iconVisible && (
            <div>
              <Search color={color} />
            </div>
          )}

          <input
            type="text"
            placeholder="Search Facebook"
            ref={input}
            onFocus={() => setIconVisible(false)}
            onBlur={() => setIconVisible(true)}
          />
        </div>
      </div>
      <div className="search_history_header">
        <span>Recent Searches</span>
        <a>Edit</a>
      </div>
      <div className="search_history"></div>
      <div className="search_results scrollbar"></div>
    </div>
  );
}

export default SearchMenu;
