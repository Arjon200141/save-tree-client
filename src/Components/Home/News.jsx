const News = () => {
    const newsArticles = [
        {
            id: 1,
            imageUrl: "https://i.ibb.co.com/nqjQ7Mh2/1.jpg",
            tags: ["Information & Update"],
            date: "Apr 16, 2025"
        },
        {
            id: 2,
            imageUrl: "https://i.ibb.co.com/qMkL2J38/2.jpg",
            tags: ["Success Stories", "Education", "Information & Update"],
            date: "Apr 16, 2025"
        },
        {
            id: 3,
            imageUrl: "https://i.ibb.co.com/XkZvtgzM/3.jpg",
            tags: ["Information & Update"],
            date: "Apr 16, 2025"
        }
    ];

    return (
        <div className="mt-6 md:mt-12">
            <div className="flex flex-col md:flex-row justify-between m-4 md:m-8 lg:m-12 gap-4 md:gap-0">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#339634]">News & Articles</h2>
                <button className="btn text-xl md:text-2xl lg:text-3xl rounded-full px-4 md:px-5 lg:px-6 bg-[#6f6f6f] text-white shadow-none py-3 md:py-4 lg:py-8 w-full md:w-auto">
                    View All Articles
                </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 m-4 md:m-8 lg:m-16">
                {newsArticles.map((article) => (
                    <div key={article.id} className="card bg-base-100 shadow-xl h-full flex flex-col">
                        <div className="border-2 border-dotted m-2 md:m-3 lg:m-3 p-2 md:p-3 rounded-lg flex flex-col h-full">
                            {/* Fixed height image */}
                            <figure className="h-48 md:h-52 lg:h-56 overflow-hidden rounded-t-lg">
                                <img
                                    src={article.imageUrl}
                                    alt="News article"
                                    className="w-full h-full object-cover"
                                />
                            </figure>

                            {/* Flexible content area with button at bottom */}
                            <div className="flex flex-col flex-grow justify-between mt-4">
                                <div>
                                    {article.tags.length === 1 ? (
                                        <div className="flex justify-between items-center gap-2">
                                            <p className="text-sm md:text-lg bg-[#54e7575e] px-2 md:px-3 font-medium border-green-300 rounded-full py-1">
                                                {article.tags[0]}
                                            </p>
                                            <p className="text-sm md:text-lg text-gray-500">{article.date}</p>
                                        </div>
                                    ) : (
                                        <>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-1 md:gap-2">
                                                {article.tags.map((tag, index) => (
                                                    <p 
                                                        key={index}
                                                        className="text-center text-sm md:text-lg bg-[#54e7575e] px-2 md:px-3 font-medium border-green-300 rounded-full py-1"
                                                    >
                                                        {tag}
                                                    </p>
                                                ))}
                                            </div>
                                            <p className="text-center text-sm md:text-lg text-gray-500 mt-2">
                                                {article.date}
                                            </p>
                                        </>
                                    )}
                                </div>

                                {/* Button always at bottom */}
                                <button className="bg-[#339634] hover:bg-black hover:text-white text-white btn px-3 md:px-4 py-1 md:py-2 rounded-full text-sm md:text-lg shadow-none mt-6 w-full">
                                    Read More
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default News;