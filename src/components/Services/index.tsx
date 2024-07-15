import Image from 'next/image';
import img1 from './img1.jpg'; 
import img2 from './img2.jpg';
import img3 from './img3.jpg';
import img4 from './img4.jpg';
import img5 from './img5.jpg';
import img6 from './img6.jpg'; 

const Services = () => {
  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-blue-800 font-bold text-4xl mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
         
          <div className="relative overflow-hidden rounded-lg group">
            <Image
              src={img1}
              alt="Image 1"
              layout="responsive"
              width={500}
              height={350}
              className="rounded-lg transition duration-300 transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity rounded-lg flex items-center justify-center">
              <p className="text-white text-center font-bold">Temporary Staffing</p>
            </div>
            <p className="mt-2 text-center text-gray-600">Short-term staffing solutions to meet immediate needs.</p>
          </div>
          <div className="relative overflow-hidden rounded-lg group">
            <Image
              src={img2}
              alt="Image 2"
              layout="responsive"
              width={500}
              height={350}
              className="rounded-lg transition duration-300 transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity rounded-lg flex items-center justify-center">
              <p className="text-white text-center font-bold">Permanent Placement</p>
            </div>
            <p className="mt-2 text-center text-gray-600">Helping you find the right permanent employees.</p>
          </div>
          <div className="relative overflow-hidden rounded-lg group">
            <Image
              src={img3}
              alt="Image 3"
              layout="responsive"
              width={500}
              height={350}
              className="rounded-lg transition duration-300 transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity rounded-lg flex items-center justify-center">
              <p className="text-white text-center font-bold">Executive Search</p>
            </div>
            <p className="mt-2 text-center text-gray-600">Specialized recruitment for executive-level positions.</p>
          </div>

          {/* Second Row */}
          <div className="relative overflow-hidden rounded-lg group col-span-3 md:col-span-1">
            <Image
              src={img4}
              alt="Image 4"
              layout="responsive"
              width={500}
              height={350}
              className="rounded-lg transition duration-300 transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity rounded-lg flex items-center justify-center">
              <p className="text-white text-center font-bold">Contract to Hire</p>
            </div>
            <p className="mt-2 text-center text-gray-600">Recruiting for short and long-term contract positions as per our client needs.</p>
          </div>
          <div className="relative overflow-hidden rounded-lg group col-span-3 md:col-span-1">
            <Image
              src={img5}
              alt="Image 5"
              layout="responsive"
              width={500}
              height={350}
              className="rounded-lg transition duration-300 transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity rounded-lg flex items-center justify-center">
              <p className="text-white text-center font-bold">Project Based Hiring</p>
            </div>
            <p className="mt-2 text-center text-gray-600">Placing candidates for specific projects within specified tenures as per client demands.</p>
          </div>
          <div className="relative overflow-hidden rounded-lg group col-span-3 md:col-span-1">
            <Image
              src={img6}
              alt="Image 6"
              layout="responsive"
              width={500}
              height={350}
              className="rounded-lg transition duration-300 transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity rounded-lg flex items-center justify-center">
              <p className="text-white text-center font-bold">Consulting Services</p>
            </div>
            <p className="mt-2 text-center text-gray-600">Consulting on the hiring process</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
