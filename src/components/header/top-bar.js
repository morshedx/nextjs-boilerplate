import Link from 'next/link';

const TopBar = () => {
  return (
    <div>
      <div>
        <ul style={{ listStyle: 'none', gap: 30 }}>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopBar;
