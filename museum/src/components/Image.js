import Image from 'next/image';
 
function Page() {
  return (
    <Image
      src="/about.png"
      width={600}
      height={500}
      alt="Demo Image"
    />

  );
}
export default Page;