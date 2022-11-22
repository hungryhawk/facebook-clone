import './style.css';
import HeaderLeft from './HeaderLeft';

export default function Header() {
  const color = 'gray';

  return (
    <header>
      <HeaderLeft color={color} />
    </header>
  );
}
