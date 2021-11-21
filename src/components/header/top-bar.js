import Link from 'next/link';
import { Container } from '@chakra-ui/react';

const TopBar = () => {
  return (
    <div>
      <Container>
        <ul>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
          <li>
            <Link href="/warranty-policy">
              <a>Warranty Policy</a>
            </Link>
          </li>
        </ul>
      </Container>
    </div>
  );
};

export default TopBar;
