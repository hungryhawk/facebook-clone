import { useEffect, useState, useRef } from 'react';
import ReturnIcon from '../../../../assets/icons/return';
import SearchIcon from '../../../../assets/icons/search';
import useClickOutside from '../../../../helpers/useClickOutside';
import './style.css';

function SearchMenu({ setShowSearchMenu }) {
  const menu = useRef(null);
  useClickOutside(menu, () => {
    setShowSearchMenu(false);
  });
  const [iconVisible, setIconVisible] = useState(true);
  const color = 'gray';
  const input = useRef(null);

  useEffect(() => {
    input.current.focus();
  }, []);
  return (
    <div className="header_left search_area scrollbar" ref={menu}>
      <div className="search_wrap">
        <div className="header_logo">
          <div
            className="circle hover1"
            onClick={() => setShowSearchMenu(false)}
          >
            <ReturnIcon color={color} />
          </div>
        </div>
        <div className="search">
          {iconVisible && (
            <div>
              <SearchIcon color={color} />
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
        <span>No Recent Searches</span>
        {/* <a>Edit</a> */}
      </div>
      <div className="search_history"></div>
      <div className="search_results scrollbar"></div>
    </div>
  );
}

export default SearchMenu;
