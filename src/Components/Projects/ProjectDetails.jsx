import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';

const ProjectDetails = () => {
    const { eventId } = useParams();
    const [eventData, setEventData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
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

    // Fetch event data
    useEffect(() => {
        const fetchEvent = async () => {
            try {
                const response = await fetch('/event.json');
                if (!response.ok) {
                    throw new Error('Failed to fetch events');
                }
                const data = await response.json();
                const event = data.find(e => e.event_id.toString() === eventId);
                if (!event) {
                    throw new Error('Event not found');
                }
                setEventData(event);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchEvent();
    }, [eventId]);

    const handleNextImage = () => {
        const images = getEventImages(eventData.event);
        setCurrentImageIndex(prev => (prev + 1) % images.length);
    };

    const handlePrevImage = () => {
        const images = getEventImages(eventData.event);
        setCurrentImageIndex(prev => (prev - 1 + images.length) % images.length);
    };

    // Helper functions to handle data variations
    const getEventImages = (event) => {
        return event.image_urls || event.images || [];
    };

    const getLocationString = (location) => {
        if (!location) return 'Location not specified';
        if (typeof location === 'string') return location;
        if (typeof location === 'object') {
            const parts = [];
            if (location.venue) parts.push(location.venue);
            if (location.institution) parts.push(location.institution);
            if (location.district) parts.push(location.district);
            return parts.join(', ');
        }
        return 'Multiple locations';
    };

    const getParticipantsString = (participants) => {
        if (!participants) return 'Not specified';
        if (typeof participants === 'string') return participants;
        if (typeof participants === 'object') {
            const parts = [];
            if (participants.organizers) {
                if (Array.isArray(participants.organizers)) {
                    parts.push(...participants.organizers);
                } else {
                    parts.push(participants.organizers);
                }
            }
            if (participants.attendees) parts.push(participants.attendees);
            return parts.join(', ');
        }
        return 'Various participants';
    };

    const getEventMessage = (event) => {
        return event.message || event.call_to_action || event.purpose || '';
    };

    const getEventDescription = (event) => {
        return event.description || event.purpose || 'No description available';
    };

    if (loading) {
        return <LoadingSpinner isDarkMode={isDarkMode} />;
    }

    if (error) {
        return <ErrorScreen error={error} isDarkMode={isDarkMode} navigate={navigate} />;
    }

    if (!eventData) {
        return <NotFoundScreen isDarkMode={isDarkMode} navigate={navigate} />;
    }

    const { event } = eventData;
    const images = getEventImages(event);
    const hasMultipleImages = images.length > 1;

    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-fixed bg-cover bg-center"
            style={{
                backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://i.ibb.co/93nhHXKj/Lovepik-com-400234979-big-tree.png')"
            }}
        >
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="max-w-7xl mx-auto"
            >
                <BackButton navigate={navigate} />

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-2xl border border-white/20"
                >
                    {/* Image Gallery Section */}
                    <div className="relative h-96 overflow-hidden group">
                        {images.length > 0 ? (
                            <>
                                <motion.img
                                    key={currentImageIndex}
                                    src={images[currentImageIndex]}
                                    alt={event.name}
                                    className="w-full h-full object-cover"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                />
                                
                                {hasMultipleImages && (
                                    <>
                                        <GalleryNavigation 
                                            onPrev={handlePrevImage}
                                            onNext={handleNextImage}
                                        />
                                        <ImageCounter 
                                            current={currentImageIndex + 1} 
                                            total={images.length} 
                                        />
                                    </>
                                )}
                            </>
                        ) : (
                            <div className="w-full h-full flex items-center justify-center bg-gray-800/50">
                                <span className="text-white">No images available</span>
                            </div>
                        )}
                        
                        <EventTitleOverlay 
                            event={event} 
                            getLocationString={getLocationString}
                        />
                    </div>

                    <div className="p-6 md:p-8">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <div className="lg:col-span-2">
                                <EventSection 
                                    title="Description"
                                    content={getEventDescription(event)}
                                    delay={0.4}
                                />

                                {event.outcome && (
                                    <EventSection 
                                        title="Outcome"
                                        content={event.outcome}
                                        delay={0.5}
                                    />
                                )}

                                {getEventMessage(event) && (
                                    <EventSection 
                                        title="Message"
                                        content={getEventMessage(event)}
                                        delay={0.6}
                                    />
                                )}
                            </div>

                            <div className="lg:col-span-1">
                                <EventDetailsSidebar 
                                    event={event}
                                    getLocationString={getLocationString}
                                    getParticipantsString={getParticipantsString}
                                />

                                {hasMultipleImages && (
                                    <ThumbnailGallery 
                                        images={images}
                                        currentIndex={currentImageIndex}
                                        setCurrentIndex={setCurrentImageIndex}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

// Sub-components for better organization
const LoadingSpinner = ({ isDarkMode }) => (
    <div className={`flex justify-center items-center min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className={`w-12 h-12 border-4 ${isDarkMode ? 'border-gray-300 border-t-transparent' : 'border-gray-700 border-t-transparent'} rounded-full`}
        />
    </div>
);

const ErrorScreen = ({ error, isDarkMode, navigate }) => (
    <div className={`flex justify-center items-center min-h-screen ${isDarkMode ? 'bg-gray-900 text-red-400' : 'bg-gray-50 text-red-600'}`}>
        <div className="text-center p-6 max-w-md">
            <h2 className="text-2xl font-bold mb-4">Error Loading Event</h2>
            <p>{error}</p>
            <button
                onClick={() => navigate(-1)}
                className={`mt-4 px-4 py-2 rounded-md ${isDarkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white transition-colors`}
            >
                Go Back
            </button>
        </div>
    </div>
);

const NotFoundScreen = ({ isDarkMode, navigate }) => (
    <div className={`flex justify-center items-center min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
        <div className="text-center p-6 max-w-md">
            <h2 className="text-2xl font-bold mb-4">Event Not Found</h2>
            <button
                onClick={() => navigate(-1)}
                className={`mt-4 px-4 py-2 rounded-md ${isDarkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white transition-colors`}
            >
                Go Back
            </button>
        </div>
    </div>
);

const BackButton = ({ navigate }) => (
    <div className="flex items-center mb-8">
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate(-1)}
            className="flex items-center text-white hover:text-green-300 transition-colors"
        >
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Events
        </motion.button>
    </div>
);

const GalleryNavigation = ({ onPrev, onNext }) => (
    <>
        <button 
            onClick={onPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
        >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
        </button>
        <button 
            onClick={onNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
        >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
        </button>
    </>
);

const ImageCounter = ({ current, total }) => (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
        {current} / {total}
    </div>
);

const EventTitleOverlay = ({ event, getLocationString }) => (
    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
        <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white mb-2"
        >
            {event.name}
        </motion.h1>
        <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center">
                <svg className="w-5 h-5 text-green-300 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-green-300">{event.date}</span>
            </div>
            <div className="flex items-center">
                <svg className="w-5 h-5 text-blue-300 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-blue-300">{getLocationString(event.location)}</span>
            </div>
        </div>
    </div>
);

const EventSection = ({ title, content, delay }) => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay, duration: 0.6 }}
        className="mb-8"
    >
        <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/20 pb-2">{title}</h2>
        <p className="text-gray-200 leading-relaxed">{content}</p>
    </motion.div>
);

const EventDetailsSidebar = ({ event, getLocationString, getParticipantsString }) => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="bg-white/5 rounded-lg p-6 border border-white/10 mb-8"
    >
        <h3 className="text-xl font-bold text-white mb-4">Event Details</h3>
        
        <div className="space-y-4">
            <DetailItem 
                title="Organizer" 
                content={event.organizer} 
                color="green-300"
            />
            
            <DetailItem 
                title="Participants" 
                content={getParticipantsString(event.participants)} 
                color="green-300"
            />
            
            {event.activities && event.activities.length > 0 && (
                <div>
                    <h4 className="text-sm font-semibold text-green-300 mb-1">Activities</h4>
                    <div className="flex flex-wrap gap-2">
                        {event.activities.map((activity, index) => (
                            <Tag key={index} text={activity} />
                        ))}
                    </div>
                </div>
            )}
            
            {event.tags && event.tags.length > 0 && (
                <div>
                    <h4 className="text-sm font-semibold text-green-300 mb-1">Tags</h4>
                    <div className="flex flex-wrap gap-2">
                        {event.tags.map((tag, index) => (
                            <Tag key={`tag-${index}`} text={`#${tag}`} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    </motion.div>
);

const DetailItem = ({ title, content, color }) => (
    <div>
        <h4 className={`text-sm font-semibold text-${color} mb-1`}>{title}</h4>
        <p className="text-gray-200">{content}</p>
    </div>
);

const Tag = ({ text }) => (
    <motion.span 
        whileHover={{ scale: 1.05 }}
        className="px-3 py-1 text-xs rounded-full bg-white/10 text-gray-200"
    >
        {text}
    </motion.span>
);

const ThumbnailGallery = ({ images, currentIndex, setCurrentIndex }) => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
    >
        <h3 className="text-xl font-bold text-white mb-4">More Photos</h3>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2">
            {images.map((img, index) => (
                <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setCurrentIndex(index)}
                    className={`cursor-pointer rounded-md overflow-hidden border-2 ${currentIndex === index ? 'border-green-400' : 'border-transparent'} transition-all`}
                >
                    <img 
                        src={img} 
                        alt={`Event - ${index + 1}`}
                        className="w-full h-20 object-cover"
                        loading="lazy"
                    />
                </motion.div>
            ))}
        </div>
    </motion.div>
);

export default ProjectDetails;