import React from 'react';

const MissionVisionValues = () => {
    const values = [
    {
        title: "Rooted Stewardship",
        description: "We serve as guardians of the Earth's green legacy, honoring trees as ancient sentinels that sustain all life. Our commitment extends beyond planting - we nurture each sapling like a promise to future generations, protecting urban canopies and old-growth forests with equal reverence.",
        icon: "🌳",  // Tree emoji
        examples: ["Tree adoption programs", "Ancient tree preservation", "Urban forestry initiatives"]
    },
    {
        title: "Sustainable Ecosystems",
        description: "We cultivate more than trees - we grow entire living systems. By selecting native species, restoring watersheds, and creating wildlife corridors, we build climate-resilient landscapes where nature's balance flourishes for centuries to come.",
        icon: "♻️",  // Recycling symbol
        examples: ["Native species reforestation", "Permaculture training", "Soil regeneration projects"]
    },
    {
        title: "Innovative Reforestation",
        description: "We pioneer the frontier of ecological restoration - deploying drone seed bombers in fire-ravaged areas, using AI to track forest health, and developing biodegradable tree shelters. Technology and tradition merge to accelerate Earth's healing.",
        icon: "🚀",  // Rocket emoji
        examples: ["Drone-assisted planting", "Blockchain tree tracking", "Smart irrigation systems"]
    },
    {
        title: "Collaborative Conservation",
        description: "We weave networks of change - uniting indigenous elders with climate scientists, schoolchildren with policymakers, artists with forest rangers. Together we create solutions greater than any single group could achieve alone.",
        icon: "🤝",  // Handshake emoji
        examples: ["Community planting festivals", "Corporate partnerships", "Global reforestation alliances"]
    },
    {
        title: "Deep-Rooted Education",
        description: "We cultivate environmental wisdom through hands-on forest schools, citizen science programs, and digital learning platforms. Knowledge becomes action as we empower communities to become lifelong stewards of their local ecosystems.",
        icon: "📚",  // Books emoji
        examples: ["Youth arboretum programs", "Farmer agroforestry training", "VR forest experiences"]
    },
    {
        title: "Unshakable Resilience",
        description: "Like the sequoias that withstand wildfires, we adapt and persevere. When droughts challenge our saplings or storms damage our work, we respond with nature's wisdom - learning, evolving, and growing stronger through every challenge.",
        icon: "⚡",  // Lightning bolt
        examples: ["Climate-adaptive species research", "Disaster response nurseries", "Fire-resistant landscaping"]
    },
    {
        title: "Inclusive Greening",
        description: "We believe clean air and green spaces are fundamental rights, not privileges. Our initiatives prioritize marginalized communities, ensuring tree equity transforms concrete heat islands into thriving neighborhood forests for all.",
        icon: "🌍",  // Earth emoji
        examples: ["Urban heat island mitigation", "Food forest projects", "Accessible nature therapy programs"]
    }
]

    return (
        <div className='min-h-screen' style={{
            backgroundImage: 'url(https://i.ibb.co.com/rfdJNkwj/Lovepik-com-400234979-big-tree.png)',
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            maxWidth: '100vw',
        }}>
            {/* Heading */}
            <div className='w-full h-[50vh] relative flex justify-center items-center'>
                <div className='h-[60%] w-[30vh] bg-green-500/50 rounded-full absolute blur-3xl'></div>
                <div className='text-white text-center flex flex-col justify-center items-center h-full gap-7 relative z-10 px-4'>
                    <p className='lg:text-xl text-xl tracking-wider'>Save Tree Foundation's</p>
                    <h2 className='lg:text-5xl text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-200 to-white tracking-wider'>
                        Vision, Mission, Values
                    </h2>
                    <p className='max-w-2xl text-lg opacity-90'>
                        Our guiding principles for a greener tomorrow
                    </p>
                </div>
            </div>

            {/* Vision & Mission */}
            <div className='grid lg:grid-cols-5 gap-5 px-5 mb-10'>
                <div className='relative col-span-3 p-5 backdrop-blur-md bg-white/10 hover:bg-white/15 transition-all duration-300  rounded-2xl'>
                    <div className={`relative text-white z-20 rounded-xl p-6 sm:p-8 h-full 
                          border-2 border-dashed border-white/20
                        `}>
                        <h2 className='text-4xl font-bold mb-4'>Our Vision</h2>
                        <div className='text-xl border-l-4 border-green-300 ml-1 pl-4 leading-relaxed space-y-4'>
                            <p>
                                We envision a <span className='font-semibold text-green-200'>greener, healthier planet</span> where ancient forests stand tall,
                                biodiversity flourishes in harmony, and human communities exist in sacred balance with nature's wisdom.
                                A world where the scars of deforestation heal into vibrant ecosystems, climate change becomes a conquered challenge,
                                and every individual embraces their role as guardians of Earth's most precious lifelines—our trees.
                            </p>

                            <div className='space-y-3'>
                                <p className='font-medium'>We dream of a world where:</p>
                                <ul className='space-y-2 pl-2'>
                                    <li className='flex items-start'>
                                        <span className='text-green-300 mr-2'>✓</span>
                                        <span>
                                            <span className='font-semibold'>Cities transform</span> into urban forests—where concrete jungles give way to
                                            vertical gardens, tree-lined avenues purify the air, and green rooftops become the norm rather than the exception.
                                        </span>
                                    </li>
                                    <li className='flex items-start'>
                                        <span className='text-green-300 mr-2'>✓</span>
                                        <span>
                                            <span className='font-semibold'>Wildlife reclaims</span> its rightful place—where migratory corridors connect protected habitats,
                                            endangered species rebound, and the symphony of birdsong replaces the silence of extinction.
                                        </span>
                                    </li>
                                    <li className='flex items-start'>
                                        <span className='text-green-300 mr-2'>✓</span>
                                        <span>
                                            <span className='font-semibold'>Future generations inherit</span> more than we received—where every child knows the names
                                            of native trees, where carbon-neutral communities are the standard, and where forests are valued as living
                                            cathedrals rather than timber resources.
                                        </span>
                                    </li>
                                    <li className='flex items-start'>
                                        <span className='text-green-300 mr-2'>✓</span>
                                        <span>
                                            <span className='font-semibold'>Indigenous wisdom guides</span> conservation efforts—where traditional ecological
                                            knowledge shapes modern sustainability practices, creating a bridge between ancestral stewardship
                                            and innovative solutions.
                                        </span>
                                    </li>
                                    <li className='flex items-start'>
                                        <span className='text-green-300 mr-2'>✓</span>
                                        <span>
                                            <span className='font-semibold'>Every planted seed becomes</span> an act of hope—where citizen-led reforestation
                                            movements transform barren lands into thriving woodlands, proving that collective action can rewrite
                                            our environmental future.
                                        </span>
                                    </li>
                                </ul>
                            </div>

                            <p className='italic text-green-100'>
                                This is not just a vision—it's a blueprint we're actively creating through education, innovation,
                                and unwavering commitment to the living tapestry of our planet.
                            </p>
                        </div>

                    </div>
                </div>
                <div className='relative col-span-2 p-5 backdrop-blur-md bg-white/10 hover:bg-white/15 transition-all duration-300  rounded-2xl'>
                    <div className={`relative text-white z-20 rounded-xl p-6 sm:p-8 h-full 
                          border-2 border-dashed border-white/20`}>
                        <h2 className='text-4xl font-bold mb-4'>Our Mission</h2>
                        <p className='text-xl border-l-4 border-green-300 ml-1 pl-4 leading-relaxed'>
                            Save Tree Foundation is dedicated to preserving, planting, and protecting trees as a fundamental solution to environmental degradation. Through large-scale reforestation, conservation advocacy, and community empowerment, we aim to: <br />

                            <span className='text-2xl font-medium '>🌳 Restore Ecosystems :</span> <br />
                            <span className='ml-2 block'>Planting native trees to revive forests, combat desertification, and support biodiversity.</span>
                            <span className='text-2xl font-medium '>🌿 Combat Climate Change :</span> <br />
                            <span className='ml-2 block'>Absorbing carbon dioxide, improving air quality, and cooling urban heat islands. </span>
                            <span className='text-2xl font-medium '>🤝 Engage Communities :</span> <br />
                            <span className='ml-2 block'>Educating and mobilizing people to become guardians of their local environment. </span>
                            <span className='text-2xl font-medium '>🌎 Advocate for Policy Change :</span> <br />
                            <span className='ml-2 block'>Pushing for stronger environmental protections and sustainable land-use policies. </span>

                            We believe that every tree counts, and together, we can grow a movement that heals the planet.
                        </p>
                    </div>
                </div>
            </div>

            {/* Values Section */}
            <div className='px-5 pb-20 relative'>
                
                <h3 className='text-3xl font-bold text-white text-center mb-10'>Our Core Values</h3>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {values.map((value, index) => (
                        <div key={index} className={`relative text-white rounded-xl p-6 
                            backdrop-blur-md bg-white/15 border border-white/20
                            transition-all duration-300 hover:bg-white/20 hover:shadow-lg hover:shadow-green-500/10`}>
                                <div className='h-[60%] w-[30%] bg-green-500/50 rounded-full absolute blur-3xl'></div>
                            <div className='text-lime-50 text-2xl font-bold mb-3'>{value.title}</div>
                            <p className='text-lg opacity-90 leading-relaxed pl-3 border-l-4 border-green-500'>{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Call to Action */}
            <div className='text-center pb-20 px-5'>
                <div className='max-w-3xl mx-auto p-8 rounded-2xl backdrop-blur-sm bg-white/10 border border-white/20'>
                    <h3 className='text-3xl font-bold text-white mb-4'>Join Our Mission</h3>
                    <p className='text-xl text-white/90 mb-6'>
                        Together, let's grow a forest of hope—one tree at a time.
                    </p>
                    <div className='flex flex-wrap justify-center gap-4'>
                        <button className='px-6 py-3 bg-green-600 hover:bg-green-700 rounded-full font-medium transition-all'>
                            Volunteer
                        </button>
                        <button className='px-6 py-3 bg-transparent border-2 border-white hover:bg-white/10 rounded-full font-medium transition-all'>
                            Donate
                        </button>
                        <button className='px-6 py-3 bg-transparent border-2 border-white hover:bg-white/10 rounded-full font-medium transition-all'>
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MissionVisionValues;