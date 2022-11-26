import './style.css';
import HeaderLeft from './HeaderLeft';
import HeaderMiddle from './HeaderMiddle';
import HeaderRight from './HeaderRight';

export default function Header({avatarUrl, avatar, setAvatar}) {
  const color = 'gray';

  return (
    <header>
      <HeaderLeft color={color} />
      <HeaderMiddle color={color} />
      <HeaderRight avatarUrl={avatarUrl} avatar={avatar} setAvatar={setAvatar}/>
    </header>
  );
}
