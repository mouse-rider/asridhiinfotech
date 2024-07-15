import Image from "next/image";
import img2 from "./img2.jpg"

const About = () => {
  return (
    <section
    id="about"
    className="bg-gray-1 pb-8 pt-20 dark:bg-dark-2 lg:pb-[70px] lg:pt-[120px]"
  >
    
    <div className="container">
      <div className="wow fadeInUp" data-wow-delay=".2s">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div className="mb-12 max-w-[540px] lg:mb-0">
            <h2 className="mt-5 mb-5 text-4xl font-bold leading-tight text-blue-800 dark:text-white sm:text-[40px] sm:leading-[1.2]">
                About Us
              </h2>
              
              <p className="mb-10 text-base leading-relaxed text-body-color dark:text-dark-6">
              Asridhi Infotech is a Solution and Services Company providing a wide range of services including Professional Services, Managed Services, and Business Process Outsourcing.
                <br /> <br />
                A trusted partner in career advancement and talent acquisition. We specialize in connecting skilled professionals with top employers across various industries.
                <br /> <br />
                We have highly qualified team of energetic and dedicated team of staffing experts in wide range of technology and solutions in all verticals to help our clients.
                <br /> <br />
                Our mission is to empower job seekers and businesses by providing exceptional staffing solutions that drive success and growth.
              </p>
            </div>
          </div>

          <div className="w-full px-4 lg:w-1/2">
            <div className="-mx-2 flex flex-wrap sm:-mx-4 lg:-mx-2 xl:-mx-4">
              <div className="w-full px-2 sm:w-1/2 sm:px-4 lg:px-2 xl:px-4">
                <div
                  className={`relative mb-4 sm:mb-8 sm:h-[400px] md:h-[540px] lg:h-[400px] xl:h-[500px] `}
                >
                  <Image
                    src="/images/about/about-image-01.jpg"
                    alt="about image"
                    fill
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>

              <div className="w-full px-2 sm:w-1/2 sm:px-4 lg:px-2 xl:px-4">
                <div className="relative mb-4 sm:mb-8 sm:h-[220px] md:h-[346px] lg:mb-4 lg:h-[225px] xl:mb-8 xl:h-[310px]">
                  <Image
                    src={img2}
                    alt="about image"
                    fill
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                <div className="relative z-10 mb-4 flex items-center justify-center overflow-hidden bg-primary px-6 py-12 sm:mb-8 sm:h-[160px] sm:p-5 lg:mb-4 xl:mb-8">
                  <div>
                    <span className="block text-5xl font-extrabold text-white">
                     Destination of Trust
                    </span>
                    
                    
                  </div>
                  <div>
                    <span className="absolute left-0 top-0 -z-10">
                      <svg
                        width="106"
                        height="144"
                        viewBox="0 0 106 144"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          opacity="0.1"
                          x="-67"
                          y="47.127"
                          width="113.378"
                          height="131.304"
                          transform="rotate(-42.8643 -67 47.127)"
                          fill="url(#paint0_linear_1416_214)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_1416_214"
                            x1="-10.3111"
                            y1="47.127"
                            x2="-10.3111"
                            y2="178.431"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="white" />
                            <stop
                              offset="1"
                              stopColor="white"
                              stopOpacity="0"
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                    <span className="absolute right-0 top-0 -z-10">
                      <svg
                        width="130"
                        height="97"
                        viewBox="0 0 130 97"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          opacity="0.1"
                          x="0.86792"
                          y="-6.67725"
                          width="155.563"
                          height="140.614"
                          transform="rotate(-42.8643 0.86792 -6.67725)"
                          fill="url(#paint0_linear_1416_215)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_1416_215"
                            x1="78.6495"
                            y1="-6.67725"
                            x2="78.6495"
                            y2="133.937"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="white" />
                            <stop
                              offset="1"
                              stopColor="white"
                              stopOpacity="0"
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                    <span className="absolute bottom-0 right-0 -z-10">
                      <svg
                        width="175"
                        height="104"
                        viewBox="0 0 175 104"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          opacity="0.1"
                          x="175.011"
                          y="108.611"
                          width="101.246"
                          height="148.179"
                          transform="rotate(137.136 175.011 108.611)"
                          fill="url(#paint0_linear_1416_216)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_1416_216"
                            x1="225.634"
                            y1="108.611"
                            x2="225.634"
                            y2="256.79"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="white" />
                            <stop
                              offset="1"
                              stopColor="white"
                              stopOpacity="0"
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default About;
