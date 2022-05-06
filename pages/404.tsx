import PulpFiction from '../public/images/giphy.gif';
import Image from 'next/image';
import Link from 'next/link';
function NotFoundPage() {
  return (
    <>
      <section className='grid h-screen'>
        <div className='flex justify-center items-center'>
          <button className='border-2 bg-white hover:scale-110 rounded text-black w-40 text-center '>
            <Link href='/' passHref>
              <h1 className='uppercas'>Let me help you</h1>
            </Link>
          </button>
        </div>
        <div className='flex justify-center text-white flex-col items-center'>
          <h1 className='lowercase text-2xl py-6'>
            Are you a little lost maybe?
          </h1>
          <Image
            src={PulpFiction}
            width={800}
            height={450}
            className='rounded-lg'
            alt='pulp-meme'
          />
        </div>
      </section>
    </>
  );
}

export default NotFoundPage;
