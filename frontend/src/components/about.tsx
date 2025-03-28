export default function About() {
    return (
        <div className="overflow-hidden bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                <div className="max-w-4xl">
                    <p className="text-base/7 font-semibold text-blue-600">Despre mine</p>
                    <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                        Motivez, inspir și împing limitele progresului tău
                    </h1>
                    <p className="mt-6 text-balance text-xl/8 text-gray-700">
                        Cred cu tărie că oricine poate deveni cea mai bună versiune a sa. Fie că ești la început de drum sau cauți
                        să-ți depășești limitele, sunt aici să-ți ofer motivația, strategiile și resursele necesare pentru succes.
                    </p>
                </div>
                <section className="mt-20 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
                    <div className="lg:pr-8">
                        <h2 className="text-pretty text-2xl font-semibold tracking-tight text-gray-900">Misiunea mea</h2>
                        <p className="mt-6 text-base/7 text-gray-600">
                            Am început acest drum din pasiune pentru fitness și autodisciplină. Cu peste 5 ani de experiență în antrenamente
                            și nutriție, scopul meu este să ajut cât mai mulți oameni să își atingă obiectivele, să câștige încredere în sine și
                            să își schimbe stilul de viață.
                        </p>
                        <p className="mt-8 text-base/7 text-gray-600">
                            Împărtășesc antrenamente eficiente, planuri de nutriție și sfaturi practice care funcționează. Fie că vrei să
                            crești masă musculară, să slăbești sau pur și simplu să ai mai multă energie zilnic, aici găsești tot ce ai nevoie
                            pentru a reuși.
                        </p>
                    </div>
                    <div className="pt-16 lg:row-span-2 lg:-mr-16 xl:mr-auto">
                        <div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
                            <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline outline-1 -outline-offset-1 outline-black/10">
                                <img
                                    alt="David antrenându-se"
                                    src="https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?&auto=format&fit=crop&crop=center&w=560&h=560&q=90"
                                    className="block size-full object-cover"
                                />
                            </div>
                            <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline outline-1 -outline-offset-1 outline-black/10 lg:-mt-40">
                                <img
                                    alt="David lucrând cu urmăritorii"
                                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?&auto=format&fit=crop&crop=left&w=560&h=560&q=90"
                                    className="block size-full object-cover"
                                />
                            </div>
                            <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline outline-1 -outline-offset-1 outline-black/10">
                                <img
                                    alt="Planuri de nutriție"
                                    src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?&auto=format&fit=crop&crop=left&w=560&h=560&q=90"
                                    className="block size-full object-cover"
                                />
                            </div>
                            <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline outline-1 -outline-offset-1 outline-black/10 lg:-mt-40">
                                <img
                                    alt="Rezultatele urmăritorilor"
                                    src="https://images.unsplash.com/photo-1598257006458-087169a1f08d?&auto=format&fit=crop&crop=center&w=560&h=560&q=90"
                                    className="block size-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="max-lg:mt-16 lg:col-span-1">
                        <p className="text-base/7 font-semibold text-gray-500">Impactul meu</p>
                        <hr className="mt-6 border-t border-gray-200" />
                        <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                            <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
                                <dt className="text-sm/6 text-gray-600">Urmăritori</dt>
                                <dd className="order-first text-6xl font-semibold tracking-tight text-gray-600">
                                    <span>250</span>K
                                </dd>
                            </div>
                            <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
                                <dt className="text-sm/6 text-gray-600">Planuri create</dt>
                                <dd className="order-first text-6xl font-semibold tracking-tight text-gray-600">
                                    <span>15</span>K
                                </dd>
                            </div>
                            <div className="flex flex-col gap-y-2 max-sm:border-b max-sm:border-dotted max-sm:border-gray-200 max-sm:pb-4">
                                <dt className="text-sm/6 text-gray-600">Ore de antrenament</dt>
                                <dd className="order-first text-6xl font-semibold tracking-tight text-gray-600">
                                    <span>10</span>K
                                </dd>
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <dt className="text-sm/6 text-gray-600">Transformări</dt>
                                <dd className="order-first text-6xl font-semibold tracking-tight text-gray-600">
                                    <span>50</span>K
                                </dd>
                            </div>
                        </dl>
                    </div>
                </section>
            </div>
        </div>
    )
}
