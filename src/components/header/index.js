import './style.css';
import HeaderLeft from './HeaderLeft';
import HeaderMiddle from './HeaderMiddle';
import HeaderRight from './HeaderRight';

export default function Header() {
  const color = 'gray';

  return (
    <header>
      <HeaderLeft color={color} />
      <HeaderMiddle color={color} />
      <HeaderRight />
    </header>
  );
}
