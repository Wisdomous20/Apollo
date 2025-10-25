import dynamic from 'next/dynamic';

const LoginPage = dynamic(() => import('@/components/Login'), { ssr: false });

export default function LoginRoute() {
  return <LoginPage />;
}
