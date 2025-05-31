import React from 'react';
import ProfileCard from './ProfileCard';

const ManagementCommittee = () => {
    const managementCommittee = [
        {
            name: "Korvi Rakshand",
            email: "korvi@jaago.com", // Assuming email format
            designation: "Executive Director",
            description: "Leads the Management Committee and oversees the overall operations of JAAGO Foundation, translating the Board's strategic directives into actionable plans.",
            image: "/images/korvi-rakshand.jpg" // Example image path
        },
        {
            name: "Zihaduz Zaman",
            email: "zihad@jaago.com",
            designation: "Asst. Director, Digital School Program",
            description: "Leads the Digital School Program initiatives, implementing technological solutions for JAAGO's educational projects.",
            image: "/images/zihaduz-zaman.jpg"
        },
        {
            name: "Esha Farooqe",
            email: "esha@jaago.com",
            designation: "Asst. Director, Fundraising & Grant Management",
            description: "Oversees fundraising activities and grant management, ensuring sustainable resources for JAAGO Foundation's programs.",
            image: "/images/esha-farooqe.jpg"
        },
        {
            name: "Sazzadul Islam",
            email: "sazzad@jaago.com",
            designation: "General Manager, Finance",
            description: "Manages the financial operations of JAAGO Foundation, ensuring fiscal responsibility and transparency.",
            image: "/images/sazzadul-islam.jpg"
        }
    ];
    return (
        <div className='w-full grid grid-cols-2 gap-5 '>
            {
                managementCommittee.map((item,index)=><ProfileCard key={index} object={item} index={index}></ProfileCard>)
            }

        </div>
    );
};

export default ManagementCommittee;