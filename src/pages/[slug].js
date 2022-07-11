import { useRouter } from 'next/router';

export default function DynamiPage() {
  const router = useRouter();
  const { slug } = router.query;

  return <p>Dynamic Page {slug}</p>;
}
