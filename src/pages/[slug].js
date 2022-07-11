import { useRouter } from 'next/router';

export default function DynamiPage() {
  const router = useRouter();
  const { pid } = router.query;

  return <p>Dynamic Page {pid}</p>;
}
