export default function Hero() {
    return (
        <div className="relative">
            <div className="mx-auto max-w-7xl">
                <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl lg:h-screen">
                    <svg
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                        className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
                    >
                        <polygon points="0,0 90,0 50,100 0,100" />
                    </svg>

                    <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
                        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                            <h1 className="text-pretty text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
                                Transformă-ți <span className="text-blue-600">corpul</span> și <span className="text-blue-600">mintea</span>
                            </h1>
                            <p className="mt-8 text-lg font-medium text-gray-500 sm:text-xl/8">
                                Inspiră-te, antrenează-te și descoperă cele mai eficiente metode pentru progresul tău în fitness și
                                viață.
                            </p>
                            <div className="mt-10 flex items-center gap-x-6">
                                <a
                                    href="#"
                                    className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                                >
                                    Află mai multe <span aria-hidden="true">→</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <img
                    alt="David Motivează - Fitness & Motivație"
                    src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    className="aspect-[3/2] object-cover lg:aspect-auto lg:size-full"
                />
            </div>
        </div>
    );
}