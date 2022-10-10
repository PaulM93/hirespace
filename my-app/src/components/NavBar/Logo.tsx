interface LogoProps {
  img: string;
  alt: string;
  height: string;
}

export default function Logo({ img, alt, height }: LogoProps) {
  return <img alt={alt} src={img} style={{ height: height }} />;
}
