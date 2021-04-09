import Link from "next/link"

const Hero = () => {
    return (
        <section className="relative h-screen bg-lightImg dark:bg-darkImg bg-cover bg-center bg-no-repeat z-0">
            <div className="absolute bg-gray-100 bg-opacity-50 dark:bg-gray-700 dark:bg-opacity-50 w-full h-full">
                <div className="max-w-5xl relative justify-center pt-36 my-2 mx-auto">
                <h1 className="text-4xl font-bold uppercase text-center mx-4">Recipes by Sam</h1>
                <p className="text-2xl font-bold uppercase text-center my-6 mx-4">Browse this Awesome Selection of Amazing Recipes</p>
                    <div className="text-center">
                    <Link href="/recipes">
                    <a className="text-xl border-2 border-red-800 dark:border-red-400 rounded-lg shadow-md font-bold uppercase p-4 hover:bg-red-800 dark:hover:bg-red-400 hover:text-white">
                        Browse Recipes
                    </a>
                </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero