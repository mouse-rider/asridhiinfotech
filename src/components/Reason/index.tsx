import Image from 'next/image';
import img1 from './img1.jpg'; // Example images, replace with your image paths
import img2 from './img2.jpg';
import img3 from './img3.jpg';

const Reason = () => {
  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        {/* First Row */}
        <h2 className="mt-5 mb-5 text-4xl font-bold leading-tight text-blue-800 dark:text-white sm:text-[40px] sm:leading-[1.2]">
                Why Choose Asridhi InfoTech
              </h2>
        <div className="flex mb-8">
          <div className="w-1/2 pr-2">
            <div className="relative h-80 rounded-lg overflow-hidden border-2 border-black">
              <Image
                src={img1}
                alt="Image 1"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <p className="mt-4 text-center text-black font-bold">With years of experience in the staffing and recruiting industry, our team brings unparalleled expertise to every client engagement.</p>
          </div>
          <div className="w-1/2 pl-2">
            <div className="relative h-80 rounded-lg overflow-hidden border-2 border-black">
              <Image
                src={img2}
                alt="Image 2"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <p className="mt-4 text-center text-black font-bold">We take a personalized approach to each client partnership, developing a customized recruitment strategy aligned with your goals.</p>
          </div>
        </div>

        {/* Second Row */}
        <div className="flex justify-center">
          <div className="w-full md:w-1/2">
            <div className="relative h-96 rounded-lg overflow-hidden border-2 border-black">
              <Image
                src={img3}
                alt="Image 3"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <p className="mt-4 text-center text-black font-bold mb-6">Whether you're a start-up looking to expand your team or an established enterprise seeking to streamline your hiring process, we're here to help you find the perfect fit.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reason;
