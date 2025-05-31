import React from 'react';
import { motion } from 'framer-motion';

// Placeholder images - replace with actual imports
const teamImages = {
  tarif: 'https://i.ibb.co/wNYVd2Vw/Tarif-Mostafiz-Founder-Chairman.jpg',
  asif: 'https://i.ibb.co/J12G24j/Asif-Mostafiz-Vice-Chairman.jpg',
  alinur: 'https://i.ibb.co/zhrvc3fh/Alinur-Rahman-General-Secretary.jpg',
  summiya: 'https://i.ibb.co/ynrLwZjG/Summiya-Islam-Treasurer.jpg',
  promith: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
};

const About = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const fadeInUp = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  const cardHover = {
    scale: 1.03,
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  };

  const teamMembers = [
    {
      name: "Tarif Mostafiz",
      role: "Founder & Chairman",
      description: "As the visionary behind the foundation, Tarif leads with a deep passion for environmental stewardship, guiding strategic initiatives and long-term goals to combat deforestation and promote sustainability.",
      img: teamImages.tarif
    },
    {
      name: "Asif Mostafiz",
      role: "Vice Chairman",
      description: "Asif supports the foundation's growth and outreach efforts, playing a key role in partnership development and community engagement to expand the impact of their green initiatives.",
      img: teamImages.asif
    },
    {
      name: "Alinur Rahman",
      role: "General Secretary",
      description: "With strong organizational skills and a commitment to action, Alinur manages the foundation's operations, ensuring smooth execution of programs and alignment with its environmental mission.",
      img: teamImages.alinur
    },
    {
      name: "Summiya Islam",
      role: "Treasurer",
      description: "Summiya oversees the financial health of the foundation, ensuring transparency and responsible budgeting to support its conservation projects and educational campaigns.",
      img: teamImages.summiya
    }
  ];

  const managementCommittee = [
    {
      name: "Tarif Mostafiz",
      role: "Chairman",
      description: "As Chairman of the Management Committee, Tarif Mostafiz provides strategic oversight and operational leadership. His guidance ensures that the foundation's environmental goals are translated into actionable programs.",
      img: teamImages.tarif
    },
    {
      name: "Alinur Rahman",
      role: "Sr. Manager, HR",
      description: "Alinur oversees human resource management, supporting team development and maintaining an efficient, motivated workforce.",
      img: teamImages.alinur
    },
    {
      name: "Summiya Islam",
      role: "Sr. Assistant Manager, Communication Team",
      description: "Summiya manages public relations and internal communications, helping shape the foundation's message and outreach efforts.",
      img: teamImages.summiya
    },
    {
      name: "Promith Sarkar",
      role: "Officer, Research Team",
      description: "Promith contributes to data collection and analysis, supporting the foundation's research-driven approach to environmental initiatives.",
      img: teamImages.promith
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="font-sans text-gray-800 "
      style={{
          backgroundImage: 'url(https://i.ibb.co/93nhHXKj/Lovepik-com-400234979-big-tree.png)',
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          maxWidth: '100vw',
        }}
    >
      {/* Hero Section */}
      <div className="relative h-screen max-h-[600px]  flex items-center justify-center text-center text-white overflow-hidden"
        
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-[#4CAF50]/20 filter blur-3xl"></div>
          <div className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-[#1a5e20]/20 filter blur-3xl"></div>
        </div>
        <div className="relative z-10 px-4 max-w-4xl">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            About <span className="text-[#a5d6a7]">Save Tree</span> Foundation
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-2xl mx-auto"
          >
            Rooted in the belief that lasting environmental change begins at the grassroots level
          </motion.p>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-12"
          >
            <a
              href="#history"
              className="inline-block px-8 py-3 backdrop-blur-md bg-white/10 hover:bg-white/15 transition-all duration-300  shadow-md"
            >
              Explore Our Story
            </a>
          </motion.div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* Navigation Tabs
      <motion.div
        className="flex flex-wrap justify-center  py-4 shadow-lg sticky top-0 z-50"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {['History', 'Mission', 'Vision', 'Who We Are', 'Our Team'].map((tab, index) => (
          <motion.a
            key={index}
            href={`#${tab.toLowerCase().replace(' ', '-')}`}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="mx-2 my-1 px-6 py-2 rounded-full text-[#2a7d2e] font-medium  relative group"
          >
            {tab}
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-[#2a7d2e] transition-all duration-300 group-hover:w-3/4"></span>
          </motion.a>
        ))}
      </motion.div> */}

      {/* History Section */}
      <section id="history" className="py-20 backdrop-blur-md bg-white/10 hover:bg-white/15 transition-all duration-300">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            className="flex flex-col lg:flex-row items-center gap-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="lg:w-1/2">
              <motion.h2
                className="text-4xl font-bold text-[#2a7d2e] mb-8 relative inline-block"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Our History
                <span className="absolute bottom-[-20px] left-0 w-full h-1 bg-[#4CAF50] transform -translate-y-2"></span>
              </motion.h2>
              <motion.p
                className="text-lg mb-8 text-white"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Our journey began with a simple yet powerful act. On January 22, 2021, Tarif Mostafiz inspired by a shared vision with her elder brother Asif Mostafiz and encouraged by supportive friends and family, planted over 17 trees on the rooftop of her home alongside her father.
              </motion.p>
              <motion.p
                className="text-lg text-white"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                This small beginning marked the birth of the Save Tree Foundation driven by the belief that change starts at home and spreads through community action.
              </motion.p>
            </div>
            <motion.div
              className="lg:w-1/2 relative"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-96 w-full">
                <img
                  src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Tree planting"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <p className="text-md font-light">January 22, 2021 - The Beginning</p>
                </div>
              </div>
              <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-2xl bg-[#4CAF50]"></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Sections */}
      <div className="py-20 ">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            className="grid md:grid-cols-2 gap-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
          >
            <motion.section
              id="mission"
              variants={fadeInUp}
              whileHover={cardHover}
              className="backdrop-blur-md bg-white/10 hover:bg-white/15 transition-all duration-300 p-8 rounded-2xl shadow-lg relative overflow-hidden h-full"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#2a7d2e]/10 rounded-full transform translate-x-16 -translate-y-16"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#2a7d2e]/10 rounded-full transform -translate-x-16 translate-y-16"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-[#2a7d2e] to-[#4CAF50] rounded-full flex items-center justify-center text-white text-3xl mb-6 mx-auto shadow-md">
                  <i className="fas fa-bullseye"></i>
                </div>
                <h3 className="text-3xl font-bold text-[#2a7d2e] text-center mb-6">Our Mission</h3>
                <p className="text-lg text-white text-center px-4">
                  To inspire and empower future generations to protect, nurture, and sustain our natural environment through education, community engagement, and direct action.
                </p>
              </div>
            </motion.section>

            <motion.section
              id="vision"
              variants={fadeInUp}
              whileHover={cardHover}
              className="backdrop-blur-md bg-white/10 hover:bg-white/15 transition-all duration-300 p-8 rounded-2xl shadow-lg relative overflow-hidden h-full"
            >
              <div className="absolute top-0 left-0 w-32 h-32 bg-[#4CAF50]/10 rounded-full transform -translate-x-16 -translate-y-16"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#4CAF50]/10 rounded-full transform translate-x-16 translate-y-16"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-[#4CAF50] to-[#81c784] rounded-full flex items-center justify-center text-white text-3xl mb-6 mx-auto shadow-md">
                  <i className="fas fa-eye"></i>
                </div>
                <h3 className="text-3xl font-bold text-[#2a7d2e] text-center mb-6">Our Vision</h3>
                <p className="text-lg text-white text-center px-4">
                  To build a greener, healthier world by fostering a culture of environmental stewardship where every individual, especially youth, plays an active role in preserving nature for generations to come.
                </p>
              </div>
            </motion.section>
          </motion.div>
        </div>
      </div>

      {/* Who We Are Section */}
      <section id="who-we-are" className="py-20 ">
        <div className="container backdrop-blur-md bg-white/10 hover:bg-white/15 transition-all duration-300 rounded-2xl mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              className=" text-5xl font-bold text-[#2a7d2e] pt-12 ml-12 text-center relative inline-block"
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Who We Are
              <span className="absolute bottom-[-16px] left-0 w-full h-1 bg-[#4CAF50] transform -translate-y-2"></span>
            </motion.h2>

            <motion.div
              className="flex flex-col lg:flex-row gap-12 items-center mb-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="lg:w-1/2">
                <p className="text-lg text-white mb-6">
                  Save Tree Foundation is a non-political, non-profit, voluntary, and environmentally focused public welfare organization dedicated to the conservation and sustainable management of natural resources.
                </p>
                <p className="text-lg text-white">
                  Rooted in the belief that lasting environmental change begins at the grassroots level, the foundation works across various districts in Bangladesh to promote ecological awareness and action—particularly among youth and children.
                </p>
              </div>
              <div className="lg:w-1/2 relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl h-96 w-full">
                  <img
                    src="https://i.ibb.co/Z1bSbghK/IMG-7111-1.jpg"
                    alt="Team working together"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
                <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-2xl bg-[#4CAF50]"></div>
              </div>
            </motion.div>

            <motion.div
              className="bg-gradient-to-r from-[#2a7d2e] to-[#4CAF50] p-8 rounded-2xl shadow-lg text-center my-12 relative overflow-hidden"
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/always-grey.png')] opacity-10"></div>
              <div className="relative z-10">
                <p className="text-2xl md:text-3xl font-bold text-white mb-6">
                  "Save Trees For Our Next Generation."
                </p>
              </div>
            </motion.div>

            <motion.h3
              className="text-3xl font-bold text-[#2a7d2e]  mb-12 text-center"
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Our Programs
            </motion.h3>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                {
                  icon: "fas fa-tree",
                  title: "Tree Plantation Campaigns",
                  desc: "Across urban and rural areas",
                  color: "from-[#2a7d2e] to-[#388e3c]"
                },
                {
                  icon: "fas fa-graduation-cap",
                  title: "Environmental Education",
                  desc: "Workshops for schools and communities",
                  color: "from-[#388e3c] to-[#4CAF50]"
                },
                {
                  icon: "fas fa-child",
                  title: "Youth Engagement",
                  desc: "Hands-on conservation activities",
                  color: "from-[#4CAF50] to-[#66bb6a]"
                },
                {
                  icon: "fas fa-bullhorn",
                  title: "Awareness Campaigns",
                  desc: "Promoting sustainable lifestyles",
                  color: "from-[#66bb6a] to-[#81c784]"
                }
              ].map((program, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={cardHover}
                  className={`backdrop-blur-md bg-white/10 hover:bg-white/15 transition-all duration-300 p-6 rounded-xl shadow-lg text-white text-center h-full`}
                >
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl mb-4 mx-auto backdrop-blur-sm">
                    <i className={program.icon}></i>
                  </div>
                  <h4 className="text-xl text-[#41af46] font-bold mb-3 ">{program.title}</h4>
                  <p className="text-white/90">{program.desc}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="mt-20  bg-white/10 hover:bg-white/15 transition-all duration-300 rounded-2xl shadow-2xl overflow-hidden"
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="md:flex">
                <div className="md:w-1/2 bg-gradient-to-br from-[#2a7d2e] to-[#4CAF50] p-10 text-white flex flex-col justify-center">
                  <h3 className="text-3xl font-bold mb-4">Join Our Movement</h3>
                  <p className="text-lg mb-6">
                    We invite you to stand with us, plant a tree, spread the word, and help shape a sustainable tomorrow.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="px-6 py-3 bg-white text-[#2a7d2e] rounded-full font-bold hover:bg-gray-100 hover:shadow-lg transition-all duration-300 shadow-md">
                      Become a Volunteer
                    </button>
                    
                  </div>
                </div>
                <div className="md:w-1/2">
                  <img
                    src="https://i.ibb.co/0pzLFbg9/4.jpg"
                    alt="Join us"
                    className="w-full h-full object-cover min-h-64"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section id="our-team" className="py-20 backdrop-blur-md bg-white/10 hover:bg-white/15 transition-all duration-300">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.h2
            className="text-5xl font-bold text-[#2a7d2e] mb-12 text-center relative inline-block"
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Team
            <span className="absolute bottom-[-16px] left-0 w-full h-1 bg-[#4CAF50] transform -translate-y-2"></span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h3
              className="text-3xl font-bold text-[#2a7d2e] mb-8 text-center"
              initial={{ y: -10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Central Board
            </motion.h3>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={cardHover}
                  className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300"
                >
                  <div className="relative h-64 overflow-hidden group">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <p className="text-white text-sm">{member.description}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-[#2a7d2e]">{member.name}</h4>
                    <p className="text-[#4CAF50] font-semibold">{member.role}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.h3
              className="text-3xl font-bold text-[#2a7d2e] mt-16 mb-8 text-center"
              initial={{ y: -10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Management Committee
            </motion.h3>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {managementCommittee.map((member, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={cardHover}
                  className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300"
                >
                  <div className="relative h-64 overflow-hidden group">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <p className="text-white text-sm">{member.description}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-[#2a7d2e]">{member.name}</h4>
                    <p className="text-[#4CAF50] font-semibold">{member.role}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;