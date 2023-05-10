import Image from 'next/image';
 
function Page() {
  return (
    <Image
      src="/cat.png"
      width={500}
      height={500}
      alt="Shred Image"
    />
  );
}
export default Page;