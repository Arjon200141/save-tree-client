import React from 'react';
import ProfileCard from './ProfileCard';

const JuniorManagementCommittee = () => {
    const juniorManCom= [
    {
      name: "Farhana Aziz",
      email: "farhana@jaago.com",
      designation: "Sr. Manager, Human Resources Department",
      description: "Leads HR operations and organizational development strategies.",
      image: "/images/farhana-aziz.jpg",
      category: "Junior Management Committee"
    },
    {
      name: "Haowa Mustagfira Esha",
      email: "haowa@jaago.com",
      designation: "Sr. Manager, MEAL",
      description: "Oversees monitoring, evaluation, accountability and learning systems.",
      image: "/images/haowa-esha.jpg",
      category: "Junior Management Committee"
    },
    {
      name: "Iftikhar Ul Karim",
      email: "iftikhar@jaago.com",
      designation: "Sr. Manager, Project Implementation Team",
      description: "Leads ground-level execution of JAAGO's projects.",
      image: "/images/iftikhar-karim.jpg",
      category: "Junior Management Committee"
    },
    {
      name: "Kamrul Kibria Ayon",
      email: "kamrul@jaago.com",
      designation: "Sr. Manager, Fundraising & Grant Management",
      description: "Manages donor relationships and funding pipelines.",
      image: "/images/kamrul-ayon.jpg",
      category: "Junior Management Committee"
    },
    {
      name: "Safina Anjum",
      email: "safina@jaago.com",
      designation: "Sr. Manager, Founder's Office",
      description: "Coordinates strategic initiatives from the Founder's Office.",
      image: "/images/safina-anjum.jpg",
      category: "Junior Management Committee"
    }
  ]
    return (
        <div className='w-full grid grid-cols-2 gap-5 '>
            {
                juniorManCom.map((item,index)=><ProfileCard key={index} object={item} index={index}></ProfileCard>)
            }

        </div>
    );
};

export default JuniorManagementCommittee;