import React from 'react';
const companies = [
  {
    name: "Upland Software",
    rating: 4.6,
    reviews: 117,
    tags: ["Software Product", "B2B", "Corporate", "Public"],
    logo: "https://seeklogo.com/images/U/upland-software-icon-logo-1CED1DDC2D-seeklogo.com.png",
  },
  {
    name: "Ketto",
    rating: 4.0,
    reviews: 192,
    tags: ["Private", "Work-Life Balance", "Career Growth", "Work Satisfaction"],
    logo: "https://th.bing.com/th?id=OIP.Z6kn1kKhRgFG96WORbJL8QHaDh&w=350&h=166&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
  },
  {
    name: "Bureau Veritas Consumer Pr...",
    rating: 4.0,
    reviews: 1600,
    tags: ["Foreign MNC", "Forbes Global 2000", "TOP", "B2B", "Miscellaneous"],
    logo: "https://www.bing.com/th?id=OIP.mCXk7nbRAPoLUSYa_1o_PQHaE8&w=223&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
  },
  {
    name: "Lucknow Healthcity Trauma ...",
    rating: 5.0,
    reviews: 19,
    tags: ["Medical Services / Hospital"],
    logo: "https://th.bing.com/th?id=OIP.j3zNwPx-rSLrPTAg30ruOAHaFq&w=285&h=218&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
  },
  {
    name: "Jeena & Company",
    rating: 4.2,
    reviews: 133,
    tags: ["Logistics / Shipping", "Urban Transport", "Courier / Logistics"],
    logo: "https://th.bing.com/th?id=OIP.Ar3xtrd3FghkUGCC9KhZQgHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
  },
  {
    name: "Course5 Intelligence",
    rating: 4.1,
    reviews: 337,
    tags: ["Software Product", "Indian MNC", "B2B"],
    logo: "https://th.bing.com/th?id=OIP.dsjwK2BeKrOcFx9CufKMlgHaD4&w=345&h=180&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
  },
  {
    name: "Hitachi Digital",
    rating: 3.7,
    reviews: 524,
    tags: ["IT Services & Consulting", "Emerging Technologies", "B2B"],
    logo: "https://th.bing.com/th?id=OIP.KcbVWwKs_inIwiO0S1SkXQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
  },
  {
    name: "Epsilon",
    rating: 4.0,
    reviews: 566,
    tags: ["B2B", "Private", "Foreign MNC", "Advertising & Marketing"],
    logo: "https://th.bing.com/th?id=OIP.P2IrpAFNwXrVvo-xw6pY0AHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
  }
];

export default function SponsoredCompanies () {
  return (
    <div className=" py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mt-8 mb-4">Sponsored companies</h2>
        <div className="flex flex-wrap justify-center text-sm text-gray-600">
          {["All", "IT Services", "Technology", "Manufacturing & Production", "Infrastructure, Transport & Real Estate", "BFSI", "Healthcare & Life Sciences", "BPM"].map(category => (
            <button key={category} className="bg-white py-1 px-2 m-2 rounded-full shadow-sm border border-gray-300">
              {category}
            </button>
          ))}
          <button className="bg-white py-1 px-2 m-2 rounded-full shadow-sm border border-gray-300">+2 more</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {companies.map(company => (
            <button key={company.name} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl border border-gray-200 mt-5">
              <img src={company.logo} alt={`${company.name} logo`} className="h-16 mx-auto mb-4" />
              <h3 className="text-md font-bold text-center mb-2">{company.name}</h3>
              <div className="flex items-center justify-center mb-1 ">
                <span className="text-gray-500 font-semibold text-sm">⭐ {company.rating} <span className=' text-gray-200 text-sm'> | </span> </span>
                <span className="ml-2 text-gray-400 text-sm">{company.reviews} reviews</span>
              </div>
              <div className="flex flex-wrap justify-center">
                {company.tags.map(tag => (
                  <span key={tag} className=" border border-gray-200 text-gray-700 text-xs py-1 px-2 m-1 rounded-full">{tag}</span>
                ))}
              </div>
            </button>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button className=" border border-blue-600 font-semibold text-blue-600 py-2 px-6 rounded-full shadow-md hover:bg-gray-100">
            View all companies
          </button>
        </div>
      </div>
    </div>
  );
}