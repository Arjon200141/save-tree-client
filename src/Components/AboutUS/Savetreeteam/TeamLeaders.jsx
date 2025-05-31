import React from 'react';
import ProfileCard from './ProfileCard';

const TeamLeaders = () => {
    const  teamLeaders= [
    {
      name: "Fiona Avanti Alim",
      email: "fiona@jaago.com",
      designation: "Manager, Child Welfare",
      description: "Leads initiatives for child protection and welfare programs.",
      image: "/images/fiona-alim.jpg",
      category: "Team Leaders"
    },
    {
      name: "Monower Hossain Shrabon",
      email: "monower@jaago.com",
      designation: "Sr. Officer, Youth Development Program",
      description: "Implements youth empowerment and skill development initiatives.",
      image: "/images/monower-shrabon.jpg",
      category: "Team Leaders"
    },
    {
      name: "Shoaib Ibne Muazzam",
      email: "shoaib@jaago.com",
      designation: "Asst. Manager, Administration",
      description: "Manages administrative operations and office coordination.",
      image: "/images/shoaib-muazzam.jpg",
      category: "Team Leaders"
    },
    {
      name: "Tanvir Morshed Chowdhury",
      email: "tanvir@jaago.com",
      designation: "Partnership Development Lead",
      description: "Develops and maintains strategic partnerships for JAAGO.",
      image: "/images/tanvir-chowdhury.jpg",
      category: "Team Leaders"
    },
    {
      name: "Farhana Aziz",
      email: "farhana@jaago.com",
      designation: "Sr. Manager, Human Resources Department",
      description: "Leads HR operations and organizational development strategies.",
      image: "/images/farhana-aziz.jpg",
      category: "Team Leaders"
    },
    {
      name: "Haowa Mustagfira Esha",
      email: "haowa@jaago.com",
      designation: "Sr. Manager, MEAL",
      description: "Oversees monitoring, evaluation, accountability and learning systems.",
      image: "/images/haowa-esha.jpg",
      category: "Team Leaders"
    },
    {
      name: "Iftikhar Ul Karim",
      email: "iftikhar@jaago.com",
      designation: "Sr. Manager, Project Implementation Team",
      description: "Leads ground-level execution of JAAGO's projects.",
      image: "/images/iftikhar-karim.jpg",
      category: "Team Leaders"
    },
    {
      name: "Kamrul Kibria Ayon",
      email: "kamrul@jaago.com",
      designation: "Sr. Manager, Fundraising & Grant Management",
      description: "Manages donor relationships and funding pipelines.",
      image: "/images/kamrul-ayon.jpg",
      category: "Team Leaders"
    },
    {
      name: "Safina Anjum",
      email: "safina@jaago.com",
      designation: "Sr. Manager, Founder's Office",
      description: "Coordinates strategic initiatives from the Founder's Office.",
      image: "/images/safina-anjum.jpg",
      category: "Team Leaders"
    }
  ]
    return (
        <div className='w-full grid grid-cols-2 gap-5 '>
            {
                teamLeaders.map((item,index)=><ProfileCard key={index} object={item} index={index}></ProfileCard>)
            }

        </div>
    );
};

export default TeamLeaders;