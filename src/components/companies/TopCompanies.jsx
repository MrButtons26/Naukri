import React, { useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

export default function TopCompanies() {
  const cardData = [
    {
      category: "MNCs",
      count: "1.9K+",
      companies: [
        "https://th.bing.com/th/id/OIP.93i9bwE8MlAc_TQlzn0qfAHaGk?rs=1&pid=ImgDetMain",
        "https://th.bing.com/th/id/R.38a06754015be2263f4f54d47496b4bf?rik=LYQq09GaSSzfdw&riu=http%3a%2f%2ftous-logos.com%2fwp-content%2fuploads%2f2018%2f05%2fEmbl%c3%a8me-Capgemini.jpg&ehk=1FmWxjFZNYzgAhU4Xa1jaTGRJ7KcPN4x4Kg0fxPNIGQ%3d&risl=&pid=ImgRaw&r=0",
        "https://static.vecteezy.com/system/resources/previews/020/336/451/large_2x/infosys-logo-infosys-icon-free-free-vector.jpg",
        "https://companieslogo.com/img/orig/IBN-af38b5c0.png?t=1648383607",
      ],
    },
    {
      category: "Edtech",
      count: "150",
      companies: [
        "https://fabrikbrands.com/wp-content/uploads/Polestar-Logo-History-1-1155x770.png",
        "https://fabrikbrands.com/wp-content/uploads/Dodge-Logo-History-1-1155x770.png",
        "https://fabrikbrands.com/wp-content/uploads/Jetta-Logo-1-1155x770.png",
        "https://fabrikbrands.com/wp-content/uploads/Logos-of-Multinational-Companies-3-1536x960.png",
      ],
    },
    {
      category: "Unicorns",
      count: "563",
      companies: [
        "https://fabrikbrands.com/wp-content/uploads/Logos-of-Multinational-Companies-7-1536x960.png",
        "https://fabrikbrands.com/wp-content/uploads/Logos-of-Multinational-Companies-6-1536x960.png",
        "https://fabrikbrands.com/wp-content/uploads/Logos-of-Multinational-Companies-5-1536x960.png",
        "https://fabrikbrands.com/wp-content/uploads/Logos-of-Multinational-Companies-4-1536x960.png",
      ],
    },
    {
      category: "Healthcare",
      count: "95",
      companies: [
        "https://fabrikbrands.com/wp-content/uploads/Logos-of-Multinational-Companies-12-1536x960.png",
        "https://fabrikbrands.com/wp-content/uploads/Logos-of-Multinational-Companies-16-1536x960.png",
        "data:image/jpeg;base64,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",
        "https://th.bing.com/th?id=OIP.H9QI0jU8F4w_tK8n9zQXHAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      ],
    },
    {
      category: "B2C",
      count: "2.2k",
      companies: [
        "https://fabrikbrands.com/wp-content/uploads/Logos-of-Multinational-Companies-8-1536x960.png",
        "https://fabrikbrands.com/wp-content/uploads/Logos-of-Multinational-Companies-9-1536x960.png",
        "https://fabrikbrands.com/wp-content/uploads/Logos-of-Multinational-Companies-10-1536x960.png",
        "https://fabrikbrands.com/wp-content/uploads/Logos-of-Multinational-Companies-11-1536x960.png",
      ],
    },
    {
      category: "Manufacturing",
      count: "868",
      companies: [
        "https://fabrikbrands.com/wp-content/uploads/Logos-of-Multinational-Companies-13-1536x960.png",
        "https://fabrikbrands.com/wp-content/uploads/Logos-of-Multinational-Companies-14-1536x960.png",
        "https://fabrikbrands.com/wp-content/uploads/Logos-of-Multinational-Companies-15-1536x960.png",
        "https://fabrikbrands.com/wp-content/uploads/Logos-of-Multinational-Companies-17-1536x960.png",
      ],
    },
    {
      category: "Fortune 500",
      count: "1.1k",
      companies: [
        "https://fabrikbrands.com/wp-content/uploads/Polestar-Logo-History-1-1155x770.png",
        "https://th.bing.com/th/id/OIP.93i9bwE8MlAc_TQlzn0qfAHaGk?rs=1&pid=ImgDetMain",
        "https://fabrikbrands.com/wp-content/uploads/Jetta-Logo-1-1155x770.png",
        "https://fabrikbrands.com/wp-content/uploads/Logos-of-Multinational-Companies-3-1536x960.png",
      ],
    },
    {
      category: "Product",
      count: "883",
      companies: [
        "https://th.bing.com/th/id/OIP.93i9bwE8MlAc_TQlzn0qfAHaGk?rs=1&pid=ImgDetMain",
        "https://th.bing.com/th/id/R.38a06754015be2263f4f54d47496b4bf?rik=LYQq09GaSSzfdw&riu=http%3a%2f%2ftous-logos.com%2fwp-content%2fuploads%2f2018%2f05%2fEmbl%c3%a8me-Capgemini.jpg&ehk=1FmWxjFZNYzgAhU4Xa1jaTGRJ7KcPN4x4Kg0fxPNIGQ%3d&risl=&pid=ImgRaw&r=0",
        "https://static.vecteezy.com/system/resources/previews/020/336/451/large_2x/infosys-logo-infosys-icon-free-free-vector.jpg",
        "https://companieslogo.com/img/orig/IBN-af38b5c0.png?t=1648383607",
      ],
    },
  ];

  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  return (
    <div className="container mx-auto ">
      <h2 className=" mt-20 mb-8 text-center font-bold text-2xl">
        Top companies hiring now
      </h2>
      <div className="relative">
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
          <button
            onClick={scrollLeft}
            className="mr-16 text-xl font-bold text-gray-500"
          >
            <IoIosArrowBack />
          </button>
        </div>
        <div className="flex overflow-x-hidden " ref={sliderRef}>
          {cardData.map((data, index) => (
            <div key={index} className="flex-shrink-0 w-64 px-4 py-6 ">
              <button className="bg-white p-4 input-border rounded-xl pl-6 hover:shadow-xl">
                <h3 className="text-md font-bold mb-1">
                  {data.category}
                  <span className=" self-center ml-3 text-gray-600">
                    <ion-icon name="chevron-forward-outline"></ion-icon>
                  </span>
                </h3>
                <p className="text-sm mb-2 text-gray-400">
                  {data.count} are actively hiring
                </p>
                <div className="flex space-x-2">
                  {data.companies.map((company, idx) => (
                    <img
                      key={idx}
                      src={company}
                      alt={`company-${idx}`}
                      className="w-10 h-10"
                    />
                  ))}
                </div>
              </button>
            </div>
          ))}
        </div>
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
          <button
            onClick={scrollRight}
            className="ml-16 text-xl font-bold text-gray-500"
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
}
