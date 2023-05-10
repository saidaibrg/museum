import Image from 'next/image';
 
function Page() {
  return (
    <Image
      src="/bee.png"
      width={500}
      height={500}
      alt="Confetti Image"
    />
  );
}
export default Page;