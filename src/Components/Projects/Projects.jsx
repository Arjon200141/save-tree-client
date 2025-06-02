import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const navigate = useNavigate();

    // Check for dark mode preference
    useEffect(() => {
        const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        setIsDarkMode(darkModeMediaQuery.matches);

        const handleChange = (e) => {
            setIsDarkMode(e.matches);
        };

        darkModeMediaQuery.addEventListener('change', handleChange);
        return () => darkModeMediaQuery.removeEventListener('change', handleChange);
    }, []);

    // Fetch events data
    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await fetch('/event.json');
                if (!response.ok) {
                    throw new Error('Failed to fetch events');
                }
                const data = await response.json();
                setEvents(data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchEvents();
    }, []);

    // Helper function to get location string
    const getLocationString = (location) => {
        if (typeof location === 'string') return location;
        if (typeof location === 'object') {
            if (location.venue && location.district) {
                return `${location.venue}, ${location.district}`;
            }
            if (location.institution && location.district) {
                return `${location.institution}, ${location.district}`;
            }
            return 'Multiple locations';
        }
        return 'Location not specified';
    };

    // Helper function to get first image URL
    const getFirstImage = (event) => {
        return event.image_urls?.[0] || event.images?.[0] || '';
    };

    // Handle navigation to event details
    const handleViewEvent = (eventId) => {
        navigate(`/events/${eventId}`);
    };

    if (loading) {
        return (
            <div className={`flex justify-center items-center min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className={`w-12 h-12 border-4 ${isDarkMode ? 'border-gray-300 border-t-transparent' : 'border-gray-700 border-t-transparent'} rounded-full`}
                />
            </div>
        );
    }

    if (error) {
        return (
            <div className={`flex justify-center items-center min-h-screen ${isDarkMode ? 'bg-gray-900 text-red-400' : 'bg-gray-50 text-red-600'}`}>
                <div className="text-center p-6 max-w-md">
                    <h2 className="text-2xl font-bold mb-4">Error Loading Events</h2>
                    <p>{error}</p>
                    <button
                        onClick={() => window.location.reload()}
                        className={`mt-4 px-4 py-2 rounded-md ${isDarkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white transition-colors`}
                    >
                        Try Again
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div
            className="min-h-screen py-12 px-4 sm:px-6 lg:px-8"
            style={{
                backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://i.ibb.co/93nhHXKj/Lovepik-com-400234979-big-tree.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed"
            }}
        >
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="max-w-7xl mx-auto"
            >
                <motion.h1
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-bold text-center mb-12 text-white"
                >
                    Our <span className="text-green-300">Events</span>
                </motion.h1>

                {events.length === 0 ? (
                    <div className="text-center py-12">
                        <p className="text-xl text-white">No events found</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {events.map((eventData, index) => (
                            <motion.div
                                key={eventData.event_id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                    ease: "easeOut"
                                }}
                                whileHover={{
                                    y: -5,
                                    transition: { duration: 0.3 }
                                }}
                                className="rounded-xl overflow-hidden backdrop-blur-sm bg-white/10 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <div className="relative h-64 overflow-hidden group">
                                    <motion.img
                                        src={getFirstImage(eventData.event)}
                                        alt={eventData.event.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.8 }}
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <div className="absolute bottom-0 left-0 right-0 p-6">
                                        <h3 className="text-2xl font-bold text-white mb-2">{eventData.event.name}</h3>
                                        <div className="flex items-center space-x-2">
                                            <svg className="w-4 h-4 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                            <span className="text-green-300 text-sm">{eventData.event.date}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="flex items-center mb-4">
                                        <svg className="w-4 h-4 text-blue-300 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <span className="text-blue-300 text-sm">
                                            {getLocationString(eventData.event.location)}
                                        </span>
                                    </div>

                                    <p className="mb-6 text-gray-200 leading-relaxed">
                                        {eventData.event.description?.length > 120
                                            ? `${eventData.event.description.substring(0, 120)}...`
                                            : eventData.event.description || eventData.event.purpose || 'No description available'}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {eventData.event.activities?.slice(0, 4).map((activity, index) => (
                                            <motion.span
                                                key={index}
                                                whileHover={{ scale: 1.05 }}
                                                className="px-3 py-1 text-xs rounded-full bg-white/10 text-gray-200"
                                            >
                                                #{activity}
                                            </motion.span>
                                        ))}
                                        {eventData.event.tags?.slice(0, 4).map((tag, index) => (
                                            <motion.span
                                                key={`tag-${index}`}
                                                whileHover={{ scale: 1.05 }}
                                                className="px-3 py-1 text-xs rounded-full bg-white/10 text-gray-200"
                                            >
                                                #{tag}
                                            </motion.span>
                                        ))}
                                    </div>

                                    <motion.button
                                        whileHover={{
                                            scale: 1.02,
                                            backgroundColor: "rgba(22, 163, 74, 0.9)"
                                        }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={() => handleViewEvent(eventData.event_id)}
                                        className="w-full py-3 rounded-lg font-medium bg-green-600/80 text-white transition-all flex items-center justify-center"
                                    >
                                        View Details
                                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </motion.button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </motion.div>
        </div>
    );
};

export default Projects;