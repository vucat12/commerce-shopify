import Image from 'next/image';
import logo from '../../assets/logo.svg';

export default function LogoIcon({ className }: { className?: string }) {
  return (
    <Image
      src={logo}
      alt={`${process.env.SITE_NAME} logo`}
      aria-label={`${process.env.SITE_NAME} logo`}
      className={className}
      style={{
        width: 32,
        background: 'white'
      }}
    />
  );
}
