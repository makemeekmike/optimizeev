import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  Users, 
  Award,
  Globe,
  Lightbulb,
  Heart,
  Sparkles,
  Zap
} from 'lucide-react';

const AboutUs = () => {
  const stats = [
    { label: "Charging Stations Managed", value: "10,000+" },
    { label: "Cities Covered", value: "150+" },
    { label: "Client Satisfaction", value: "97%" },
    { label: "Uptime Guarantee", value: "99.9%" }
  ];

  const values = [
    {
      icon: Target,
      title: "Innovation Excellence",
      description: "Pushing the boundaries of EV charging technology"
    },
    {
      icon: Heart,
      title: "Sustainability",
      description: "Committed to a greener future for all"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working together to achieve common goals"
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Making sustainable transport accessible worldwide"
    },
    {
      icon: Award,
      title: "Quality",
      description: "Delivering the highest quality solutions"
    },
    {
      icon: Sparkles,
      title: "Continuous Growth",
      description: "Continuously improving and evolving"
    }
  ];

  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-founder",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80",
      bio: "Former Tesla executive with 15+ years in EV infrastructure"
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
      bio: "AI and machine learning expert, previously at Google"
    },
    {
      name: "Dr. Emily Williams",
      role: "Head of Innovation",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80",
      bio: "PhD in Electrical Engineering, 20+ patents in charging technology"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative py-20 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold text-secondary-900 sm:text-5xl">
              Revolutionizing EV Charging Infrastructure
            </h1>
            <p className="mt-4 text-xl text-secondary-600 max-w-3xl mx-auto">
              We're on a mission to make electric vehicle charging more reliable,
              efficient, and accessible for everyone.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl font-bold text-primary-600">{stat.value}</p>
                <p className="mt-2 text-sm text-secondary-600">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Our Story */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-secondary-900">Our Story</h2>
            <p className="mt-4 text-lg text-secondary-600">
              Founded in 2022, OptimizeEV emerged from a simple observation: EV charging
              infrastructure wasn't keeping pace with the rapid adoption of electric
              vehicles. Our founders, combining expertise in AI, electrical engineering,
              and infrastructure management, set out to create a solution that would
              transform how charging stations are managed and maintained.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Our Values */}
      <div className="py-20 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-secondary-900">Our Values</h2>
            <p className="mt-4 text-lg text-secondary-600 max-w-3xl mx-auto">
              These core values guide everything we do at OptimizeEV
            </p>
          </motion.div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm"
              >
                <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-900">
                  {value.title}
                </h3>
                <p className="mt-2 text-secondary-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Leadership Team */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-secondary-900">
              Leadership Team
            </h2>
            <p className="mt-4 text-lg text-secondary-600 max-w-3xl mx-auto">
              Meet the experts leading the charge in EV infrastructure innovation
            </p>
          </motion.div>

          <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 rounded-full mx-auto object-cover"
                  />
                </div>
                <div className="mt-6">
                  <h3 className="text-xl font-semibold text-secondary-900">
                    {member.name}
                  </h3>
                  <p className="text-primary-600">{member.role}</p>
                  <p className="mt-2 text-secondary-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;