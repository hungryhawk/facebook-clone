import './style.css';
import HeaderLeft from './HeaderLeft';
import HeaderMiddle from './HeaderMiddle';

export default function Header() {
  const color = 'gray';

  return (
    <header>
      <HeaderLeft color={color} />
      <HeaderMiddle color={color} />
    </header>
  );
}
