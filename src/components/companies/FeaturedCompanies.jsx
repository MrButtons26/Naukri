import React from 'react';
import { useRef } from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

 export default function FeaturedCompanies() { 
  const featuredCompanies =[
    {
      name: "Persistent",
      rating: "3.7",
      reviews: "3.3K+",
      description: "Trusted global solutions company.",
      logo: "https://th.bing.com/th/id/OIP.bTWaiIirNZvVO2UDJMBoHwAAAA?w=400&h=400&rs=1&pid=ImgDetMain"
    },
    {
      name: "Jio",
      rating: "4.0",
      reviews: "20.6K+",
      description: "True 5G is here to unlock the limitless era.",
      logo: "https://th.bing.com/th/id/R.c5c2971506d941b094eefc624fdb1cd8?rik=sjD9gs%2bmO6d%2bOA&riu=http%3a%2f%2flogos-download.com%2fwp-content%2fuploads%2f2016%2f07%2fJio_logo_Reliance_Jio.png&ehk=GB%2bB21f3t8LTbP5qj4SSOWZoYgnzqBMQd7537lSkdPQ%3d&risl=&pid=ImgRaw&r=0"
    },
    {
      name: "Xoriant",
      rating: "3.8",
      reviews: "1.4K+",
      description: "Software development & technology services firm.",
      logo: "https://th.bing.com/th/id/OIP.R4mNOmj-KnVq59Zhk3rBKgHaHa?rs=1&pid=ImgDetMain"
    },
    {
      name: "Bread Financial",
      rating: "4.4",
      reviews: "174",
      description: "A tech-forward financial services company.",
      logo: "https://companieslogo.com/img/orig/BFH-c6eeddbf.png?t=1651392319"
    },
    {
      name: "ICICI",
      rating: "4.0",
      reviews: "5.2K+",
      description: "Leading private sector bank in India.",
      logo: "https://companieslogo.com/img/orig/IBN-af38b5c0.png?t=1648383607"
    },
    {
      name: "Infosys",
      rating: "4.5",
      reviews: "7.2K+",
      description: "Leading Multinational company in India.",
      logo: "https://static.vecteezy.com/system/resources/previews/020/336/451/large_2x/infosys-logo-infosys-icon-free-free-vector.jpg"
    },
    {
      name: "Wipro",
      rating: "4.0",
      reviews: "3.2K+",
      description: "Leading Multinational company in India.",
      logo: "https://th.bing.com/th/id/OIP.93i9bwE8MlAc_TQlzn0qfAHaGk?rs=1&pid=ImgDetMain"
    },
    {
      name: "Capgemini",
      rating: "4.0",
      reviews: "2.2K+",
      description: "Leading Multinational company in India.",
      logo: "https://th.bing.com/th/id/R.38a06754015be2263f4f54d47496b4bf?rik=LYQq09GaSSzfdw&riu=http%3a%2f%2ftous-logos.com%2fwp-content%2fuploads%2f2018%2f05%2fEmbl%c3%a8me-Capgemini.jpg&ehk=1FmWxjFZNYzgAhU4Xa1jaTGRJ7KcPN4x4Kg0fxPNIGQ%3d&risl=&pid=ImgRaw&r=0"
    }
  ];

  const featuredCompaniesSliderRef = useRef(null);

  const scrollLeft = (ref) => {
    ref.current.scrollBy({
      left: -300,
      behavior: 'smooth'
    });
  };

  const scrollRight = (ref) => {
    ref.current.scrollBy({
      left: 300,
      behavior: 'smooth'
    });
  };

  return (
    
    <div className="container mx-auto mt-8">

      <h2 className="mt-20 mb-8 text-center font-bold text-2xl">Featured companies actively hiring</h2>
      <div className="relative">
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
          <button onClick={() => scrollLeft(featuredCompaniesSliderRef)} className="mr-20 text-xl font-bold text-gray-500">
          <IoIosArrowBack/>
          </button>
        </div>
        <div className="flex overflow-x-hidden text-center " ref={featuredCompaniesSliderRef}>
          {featuredCompanies.map((company, index) => (
            <div key={index} className="flex-shrink-0 w-64 p-2">
              <button className="bg-white rounded-lg p-4 border border-gray-200 hover:shadow-xl">
                <img src={company.logo} alt={company.name} className="w-20 h-20 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">{company.name}</h3>
                <p className="text-sm mb-2 text-gray-600"> ⭐ {company.rating} ({company.reviews} reviews)</p>
                <p className="text-sm text-gray-800">{company.description}</p>
                <button className=' text-blue-800 bg-blue-100 rounded-3xl font-semibold m-6 px-4 py-2'>View Jobs</button>
              </button>
            </div>
            
          ))}
        </div>
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
          <button onClick={() => scrollRight(featuredCompaniesSliderRef)} className=" ml-16 text-xl font-bold text-gray-500">
            <IoIosArrowForward/>
          </button>
        </div>
        <div className="flex justify-center mt-4">
          <button className=" border border-blue-600 font-semibold text-blue-600 py-2 px-6 rounded-full shadow-md hover:bg-gray-100">
            View all companies
          </button>
        </div>
      </div>

    </div>
  );
  }