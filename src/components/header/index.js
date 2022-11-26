import './style.css';
import HeaderLeft from './header_left';
import HeaderMiddle from './header_middle';
import HeaderRight from './header_right';

export default function Header({ avatarUrl, avatar, setAvatar }) {
  const color = 'gray';

  return (
    <header>
      <HeaderLeft color={color} />
      <HeaderMiddle color={color} />
      <HeaderRight
        avatarUrl={avatarUrl}
        avatar={avatar}
        setAvatar={setAvatar}
      />
    </header>
  );
}
