import React from 'react';
import { motion } from 'framer-motion';
import { 
  Truck, 
  Building, 
  Building2, 
  Landmark, 
  Car,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const solutions = [
  {
    title: "Fleet Operations",
    icon: Truck,
    audience: "Fleet Operators & Managers",
    description: "Comprehensive fleet charging management with predictive maintenance and real-time monitoring.",
    benefits: [
      "Optimize charging schedules",
      "Reduce fleet downtime",
      "Predictive maintenance alerts",
      "Cost optimization insights"
    ],
    image: "https://unsplash.com/photos/aerial-top-down-view-of-the-parking-lot-with-many-cars-of-supermarket-shoppers-in-the-city-grocery-store-xa_pKZWB2UM?auto=format&fit=crop&q=80"
  },
  {
    title: "Charging Networks",
    icon: Building,
    audience: "EV Charging Network Providers",
    description: "Enterprise-grade management platform for large-scale charging networks.",
    benefits: [
      "Network-wide monitoring",
      "Automated fault detection",
      "Load balancing",
      "Revenue optimization"
    ],
    image: "https://images.unsplash.com/photo-1696446702239-e76522785166?auto=format&fit=crop&q=80"
  },
  {
    title: "Property Solutions",
    icon: Building2,
    audience: "Commercial Property Developers",
    description: "Smart charging infrastructure management for commercial properties.",
    benefits: [
      "Tenant satisfaction",
      "Usage analytics",
      "Revenue generation",
      "Energy management"
    ],
    image: "https://images.unsplash.com/photo-1698675145323-0d8c837c4116?auto=format&fit=crop&q=80"
  },
  {
    title: "Public Infrastructure",
    icon: Landmark,
    audience: "Municipalities and Government Agencies",
    description: "Public charging infrastructure management with focus on reliability and accessibility.",
    benefits: [
      "Public access monitoring",
      "Usage reporting",
      "Maintenance scheduling",
      "Compliance tracking"
    ],
    image: "https://images.unsplash.com/photo-1697554401944-bea57cc38c19?auto=format&fit=crop&q=80"
  },
  {
    title: "OEM Integration",
    icon: Car,
    audience: "Automotive OEMs",
    description: "Seamless integration with vehicle manufacturers for optimal charging experience.",
    benefits: [
      "Vehicle compatibility",
      "Performance analytics",
      "Brand integration",
      "Customer insights"
    ],
    image: "https://images.unsplash.com/photo-1696446702239-e76522785166?auto=format&fit=crop&q=80"
  }
];

const Solutions = () => {
  return (
    <div id="solutions" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-extrabold text-secondary-900 sm:text-4xl"
          >
            Industry Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 max-w-2xl mx-auto text-xl text-secondary-500"
          >
            Tailored solutions for every sector of the EV charging industry
          </motion.p>
        </div>

        <div className="mt-16 space-y-16">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col lg:flex-row gap-8 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="w-full lg:w-1/2">
                <div className="relative rounded-2xl overflow-hidden">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-primary-600/20" />
                </div>
              </div>
              
              <div className="w-full lg:w-1/2">
                <div className="flex items-center mb-4">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <solution.icon className="h-6 w-6 text-primary-600" />
                  </div>
                  <h3 className="ml-4 text-2xl font-bold text-secondary-900">
                    {solution.title}
                  </h3>
                </div>
                
                <p className="text-lg text-primary-600 font-medium mb-2">
                  {solution.audience}
                </p>
                
                <p className="text-secondary-600 mb-6">
                  {solution.description}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {solution.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center text-secondary-700">
                      <CheckCircle className="h-5 w-5 text-primary-500 mr-3" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                
                <button className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium">
                  Learn more about {solution.title}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Solutions;