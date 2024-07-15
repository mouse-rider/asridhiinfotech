import { Feature } from "@/types/feature";
import Image from 'next/image'; // Import Image component from next/image

import image1 from "./image1.jpg";
import image2 from "./image2.jpg";
import image3 from "./image3.jpg";
import image4 from "./image4.jpg";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: <Image src={image1} alt="Image 1" width={35} height={35} />,
    title: "Customizable Talent Search",
    paragraph: "Utilizing free and open-source software to streamline operations and enhance efficiency in our staffing agency.",
    btn: "Learn More",
    btnLink: "/#",
  },
  {
    id: 2,
    icon: <Image src={image2} alt="Image 2" width={36} height={36} />,
    title: "Automated Candidate Matching",
    paragraph: "Utilize AI-powered algorithms to match candidates with job requirements swiftly and accurately.",
    btn: "Learn More",
    btnLink: "/#",
  },
  {
    id: 3,
    icon: <Image src={image3} alt="Image 3" width={37} height={37} />,
    title: "Real-Time Applicant Tracking",
    paragraph: "Monitor candidate progress throughout the hiring process, from application to placement.",
    btn: "Learn More",
    btnLink: "/#",
  },
  {
    id: 4,
    icon: <Image src={image4} alt="Image 4" width={37} height={37} />,
    title: "Integrated Payroll and Billing",
    paragraph: "Seamlessly manage payroll processing and client billing through a unified platform.",
    btn: "Learn More",
    btnLink: "/#",
  },
];

export default featuresData;
