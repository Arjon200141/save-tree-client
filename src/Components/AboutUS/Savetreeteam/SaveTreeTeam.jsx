import React from 'react';
import 'react-tooltip/dist/react-tooltip.css'
import { useLocation, useNavigate } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';

const SaveTreeTeam = () => {
    const nav = useNavigate();
    const location = useLocation();

    // Helper function to check active route
    const isActive = (path) => location.pathname === path;

    const teamDescriptions = {
        management: {
            title: "Management Committee",
            description: "The strategic core of Save Tree Foundation, providing vision and governance to ensure our conservation efforts create lasting impact. They bridge policy with action."
        },
        junior: {
            title: "Junior Management Committee",
            description: "Emerging leaders driving innovation in reforestation projects. They combine youthful energy with technical expertise to develop scalable environmental solutions."
        },
        leaders: {
            title: "Field Team Leaders",
            description: "The hands-on conservationists who translate plans into planted trees. They lead volunteer teams, conduct biodiversity surveys, and implement restoration techniques."
        }
    };

    const teamImages = {
        tarif: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80',
        asif: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
        alinur: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
        summiya: 'https://images.unsplash.com/photo-1573497019709-161a4d0e1a5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
        promith: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
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

    const renderContent = () => {
        const path = location.pathname;
        
        if (path === "/save-tree-team/juniorManCom") {
            return (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <img src={member.img} alt={member.name} className="w-full h-64 object-cover" />
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-[#2a7d2e]">{member.name}</h3>
                                <p className="text-lg font-semibold text-gray-600 mb-4">{member.role}</p>
                                <p className="text-gray-700">{member.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            );
        } else if (path === "/save-tree-team/teamLeaders") {
            return (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
                    {managementCommittee.map((member, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <img src={member.img} alt={member.name} className="w-full h-64 object-cover" />
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-[#2a7d2e]">{member.name}</h3>
                                <p className="text-lg font-semibold text-gray-600 mb-4">{member.role}</p>
                                <p className="text-gray-700">{member.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            );
        } else {
            // Default view for "/save-tree-team"
            return (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
                    {[...teamMembers, ...managementCommittee].map((member, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <img src={member.img} alt={member.name} className="w-full h-64 object-cover" />
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-[#2a7d2e]">{member.name}</h3>
                                <p className="text-lg font-semibold text-gray-600 mb-4">{member.role}</p>
                                <p className="text-gray-700">{member.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            );
        }
    };

    return (
        <div>
           
            {/* team details */}
            <div className='grid grid-cols-4 gap-5 px-24 my-10 '>
                <div className='space-y-10'>
                    <div className='space-y-10'>
                        {Object.entries({
                            "/save-tree-team": teamDescriptions.management,
                            "/save-tree-team/juniorManCom": teamDescriptions.junior,
                            "/save-tree-team/teamLeaders": teamDescriptions.leaders
                        }).map(([path, { title, description }]) => (
                            <div 
                                key={path}
                                data-tooltip-id="team-tooltip"
                                data-tooltip-content={description}
                                data-tooltip-place="right"
                                onClick={() => nav(path)}
                                className={`
                                    cursor-pointer px-5 h-[150px] w-full flex justify-center items-center 
                                    border-[10px] border-[#2a7d2e] rounded-bl-full rounded-tr-full
                                    transition-colors duration-300
                                    ${isActive(path) 
                                        ? "bg-[#2a7d2e] text-white" 
                                        : "bg-gray-100 hover:bg-[#2a7d2e] hover:text-white"
                                    }`
                                }
                            >
                                <h2 className='text-3xl font-bold text-center'>{title}</h2>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='col-span-3 h-[90vh] overflow-y-auto'>
                    {renderContent()}
                </div>
            </div>
            <Tooltip 
                id="team-tooltip" 
                className="max-w-xs bg-[#2a7d2e] text-white p-3 rounded-lg shadow-xl"
                opacity={1}
            />
        </div>
    );
};

export default SaveTreeTeam;