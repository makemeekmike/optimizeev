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
      name: "Brittany M",
      role: "CEO & Co-founder",
      image: "https://res.cloudinary.com/dork9pzwh/image/upload/v1741621973/_MG_7622_copy_2_uw2dde.jpg",
      bio: "Real Estate Developer x EV Charging x Play Maker x Techstars Detroit"
    },
    
    {
      name: "Bryan Campbell",
      role: "CTO",
      image: "https://res.cloudinary.com/dork9pzwh/image/upload/v1741521447/T07V759U268-U07V4H44951-a84ee3a93af4-192_femciv.jpg",
      bio: "Founder X Big Tech, Visionary Technical Leader for Innovative Software Solutions"
    },
    {
      name: "Tu Le",
      role: "Adviser",
      image: "https://res.cloudinary.com/dork9pzwh/image/upload/v1741380620/T0535GC8W5U-U05AXLN791P-fa761e1c0f51-512_rgjzzh.jpg",
      bio: "Founder @ Sino Auto Insights | EIR - Mobility Innovation"
    },
    {
      name: "Mack Hendricks",
      role: "Adviser",
      image: "https://res.cloudinary.com/dork9pzwh/image/upload/v1741380718/1710541636409_sl7sfl.jpg",
      bio: "Entrepreneur | Voice Geek | Cloud Geek"
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

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
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
                    className="w-40 h-40 rounded-full mx-auto object-cover"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-secondary-900">
                    {member.name}
                  </h3>
                  <p className="text-primary-600">{member.role}</p>
                  <p className="mt-2 text-secondary-600 text-sm">{member.bio}</p>
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