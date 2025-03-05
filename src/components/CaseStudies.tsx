import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const caseStudies = [
  {
    company: "Metro Fleet Services",
    image: "https://images.unsplash.com/photo-1696446702239-e76522785166?auto=format&fit=crop&q=80",
    stats: {
      uptime: "99.2%",
      savings: "$432,000",
      efficiency: "41%"
    },
    description: "Leading transit authority achieves record-breaking uptime across 200+ charging stations."
  },
  {
    company: "GreenCharge Networks",
    image: "https://images.unsplash.com/photo-1697554401944-bea57cc38c19?auto=format&fit=crop&q=80",
    stats: {
      uptime: "98.7%",
      savings: "$289,000",
      efficiency: "35%"
    },
    description: "National charging network provider reduces maintenance costs while expanding operations."
  },
  {
    company: "EcoParking Solutions",
    image: "https://images.unsplash.com/photo-1698675145323-0d8c837c4116?auto=format&fit=crop&q=80",
    stats: {
      uptime: "97.9%",
      savings: "$156,000",
      efficiency: "38%"
    },
    description: "Commercial property developer streamlines operations across multiple locations."
  }
];

const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-extrabold text-secondary-900 sm:text-4xl"
          >
            Success Stories
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 max-w-2xl mx-auto text-xl text-secondary-500"
          >
            See how leading organizations are transforming their EV charging operations
          </motion.p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={study.image}
                  alt={study.company}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-secondary-900">{study.company}</h3>
                <p className="mt-2 text-secondary-500">{study.description}</p>
                
                <div className="mt-4 grid grid-cols-3 gap-4 py-4 border-y border-secondary-100">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary-600">{study.stats.uptime}</p>
                    <p className="text-sm text-secondary-500">Uptime</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary-600">{study.stats.savings}</p>
                    <p className="text-sm text-secondary-500">Saved</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary-600">{study.stats.efficiency}</p>
                    <p className="text-sm text-secondary-500">More Efficient</p>
                  </div>
                </div>
                
                <button className="mt-6 w-full flex items-center justify-center space-x-2 bg-secondary-50 text-secondary-900 px-4 py-2 rounded-lg font-medium hover:bg-secondary-100 transition-colors">
                  <span>Read Full Case Study</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;