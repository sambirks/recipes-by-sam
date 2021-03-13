import Layout from '../components/Layout'

const About = () => {
    return (
        <Layout>
            <section className="container py-12 mx-auto">
                <div className="py-12">
                    <h2 className="text-4xl font-bold uppercase text-center my-6">About Me</h2>
                    <h4 className="text-2xl font-bold uppercase text-center my-6">Hi I'm Sam and I created this little Recipe Website for everyone and anyone!</h4>
                </div>
                <div className="container py-24 mx-auto bg-red-800 dark:bg-red-400">
                    <div className="max-w-3xl mx-auto">
                        <p className="text-xl text-center text-gray-50">
                        Hi I'm Sam and I created this little Recipe Website. One of my passions in life is cooking and I love exploring new foods and tinkering with recipes and making them my own. I am also very lucky to be surronded by people who also love to cook and eat. Some of them have contributed dishes to the website, you can meet them below!
                        </p>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default About