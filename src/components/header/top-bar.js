import Link from 'next/link';
import { Container, Flex } from '@chakra-ui/react';

const TopBar = () => {
  return (
    <div>
      <Container>
        <Flex as="ul" sx={{ listStyle: 'none', gap: 30 }}>
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
        </Flex>
      </Container>
    </div>
  );
};

export default TopBar;
