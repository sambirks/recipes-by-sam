
const Footer = () => {
    return (
        <section className="bg-red-800 dark:bg-red-400 text-gray-50">
            <div className="max-w-5xl flex justify-center border-t-2 text-center mx-auto">
                <div className="w-full pt-4">
                    <h2 className="text-2xl font-bold uppercase">Recipes By Sam</h2>
                    <nav className="flex flex-wrap justify-center justify-items-center py-4">
                        <ul className="md:flex">
                            <li className="text-lg font-bold uppercase cursor-pointer mx-2 hover:opacity-75">Home</li>
                            <li className="text-lg font-bold uppercase cursor-pointer mx-2 hover:opacity-75">Recipes</li>
                            <li className="text-lg font-bold uppercase cursor-pointer mx-2 hover:opacity-75">Blog</li>
                            <li className="text-lg font-bold uppercase cursor-pointer mx-2 hover:opacity-75">About</li>
                        </ul>
                    </nav>
                    <div className="text-sm mt-2">Light Photo by <a href="https://unsplash.com/@toddquackenbush?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Todd Quackenbush</a> on <a href="https://unsplash.com/s/photos/cooking?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></div>
                    <div className="text-sm mb-2">Dark Photo by <a href="https://unsplash.com/@brookelark?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Brooke Lark</a> on <a href="https://unsplash.com/s/photos/cooking?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></div>            
                </div>
            </div>
        </section>
    )
}

export default Footer