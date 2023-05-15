import React from "react";
import Image from "react";
import Link from "next/dist/client/link";
import ProductCard from "components/Widgets/ProductCard"

let products = {

    'charcoal': [
        {
            name: 'Charcoal',
            spec: {
                '1' : 'First Class Premium A',
                '2' : 'Ash .2.5%',
                '3' : 'Ash color is silvery white 120 min burn time',
                '4' : '95% hardness',
                '5' : '80% carbon',
                '6' : 'Calories 8500 calories per kilo',
                '7' : 'No popping',
                '8' : 'Odorless',
                '9' : 'smokeless',
                '0' : 'Crackless',
                '11' : 'Does not give a different taste to the flavors of shisha',
                '12' : 'It burns quickly 1015 minutes',
                '13' : 'A friend of the environment',
                '14' : 'Natural Sulawesi coconut shells 70%, sumatra 20%, sweetener 10%',
                '15' : 'Cubes 25 mm by 25 mm *',
                '16' : 'Kilo 72 pieces *',
                '17' : 'Packing 1 kg in an inner bag in a colored inner carton, in a 10 kg master carton... Charcoal specifications and shape (the carton is colored four colors and weighs 150 grams)',
            },
            other: '',
            image: '1_charcoal.jpg'
        },
    ],
    'feed': [
        {
            name: 'Bagasse Sugarcane and Sugarcane Leaves',
            spec: {

            },
            other: 'The fermentable carbohydrates in both sugarcane juice and molasses are sucrose, glucose and fructose. Molasses is the soluble residue after extraction of the sucrose from cane juice. Compared with cane juice, molasses is therefore richer in minerals, organic acids and other plant soluble. The most appropriate commercial application for sugarcane juice is as the basis of a feeding system for monogastric animals. Traditionally in tropical countries these species have been managed as scavengers. When more intensive systems were introduced, imported cereal grains were the principal feed resources, thus competing directly with humans for food.',
            image: 'Bagasse Sugarcane and Sugarcane Leaves.jpg'
        },
        {
            name: 'Dried Pinaepple Peel Up',
            spec: {

            },
            other: 'Pineapple pulp as byproducts during processing factory from the canned pineapple, pineapple juice concentrate, Essential components of pineapple pulp and pulp pineapple shell. Because the pineapple planting material year round so we can offer pineapple pulp as feed to customers all year round, not seasonal.',
            image: 'Bagasse Sugarcane and Sugarcane Leaves.jpg'
        },
        {
            name: 'Dent Corn Silage',
            spec: {
                'Protein': '8.2 %',
                'Digestibility ': '80.1 %',
                'Percetage of Particle ': '42 – 44%',
                'Huminity': '65%',
                'Difficulty': '35%',
            },
            other: 'Good-quality energy fermented feed from corn harvested early, cut to a predetermined length, packed in polyethylene bags under anaerobic silage conditions after adequate fermentation.',
            image: 'Bagasse Sugarcane and Sugarcane Leaves.jpg'
        },
    ],
    'cocoa': [
        {
            name: 'Alkalized Cocoa Powder',
            spec: {
                'Fat': '10% -12%',
                'pH Value': '6.8 - 7.2',
                'Fineness': '(+/-) 99%',
                'Color': 'Color',
                'Moisture': '5% Max',
                'Ash Content': '12% Max',
                'Taste': 'Nice cocoa taste',
                'Smell': 'the nice smell of cocoa',
                'Shelf Life': '2 Years From Manufacturer date',
            },
            other: '',
            image: '3_cocoa powder.jpg'
        },
        {
            name: 'Natural Cocoa Powder',
            spec: {
                'Fat': '10% -12%',
                'pH Value': '5.4 - 6.7',
                'Fineness': '(+/-) 99%',
                'Color': 'Brown, Dark Brown',
                'Moisture': '5% Max',
                'Ash Content': '8% Max',
                'Taste': 'Nice cocoa taste.',
                'Smell': 'the nice smell of cocoa',
                'Shelf Life': '2 Years From Manufacturer date',
            },
            other: '',
            image: '2_cocoa powder.jpg'
        },
        {
            name: 'Black Cocoa Powder',
            spec: {
                'Fat': '8% -10%',
                'pH Value': '7.0 – 8.5',
                'Fineness': '(+/-) 99%',
                'Color': 'Black',
                'Moisture': '5% Max',
                'Ash Content': '12% Max',
                'Taste': 'Nice cocoa taste.',
                'Smell': 'A special and nice smell of cocoa',
                'Shelf Life': '2 Years From Manufacturer date',
            },
            other: '',
            image: '1_cocoa powder.jpg'
        },
        {
            name: 'Natural Low Fat Non Sterilization',
            spec: {
                'Fat': '8% -10%',
                'pH Value': '5.0 – 6.0',
                'Fineness': '(+/-) 99%',
                'Color': 'Brown, Dark Brown',
                'Moisture': '5% Max',
                'Ash Content': '8% Max',
                'Taste': 'Nice cocoa taste.',
                'Smell': 'A special and nice smell of cocoa',
                'Shelf Life': '2 Years From Manufacturer date',
            },
            other: '',
            image: '1_cocoa powder.jpg'
        },
        {
            name: 'Alkalized Low Fat Non Sterilization',
            spec: {
                "Fat": "8% -10%",
                "pH Value": "6.8 - 7.2",
                "Fineness": "(+/-) 99%",
                "Color": "Brown, Dark Brown",
                "Moisture": "5% Max",
                "Ash Content": "12% Max",
                "Taste": "Nice cocoa taste.",
                "Smell": "A special and nice smell of cocoa",
                "Shelf Life": "2 Years From Manufacturer date",
            },
            other: '',
            image: '3_cocoa powder.jpg'
        },

    ]
}

const Tabs = ({ activeTab }) => {
    const [openTab, setOpenTab] = React.useState(1);

    React.useEffect(() => {
      // Perbarui nilai openTab ketika activeTab berubah
      setOpenTab(activeTab);
    }, [activeTab]);
  
    
    return (
        <>
            <div className="w-full">
                <ul
                    className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
                    role="tablist"
                > 
                    <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                        <a
                            className={
                                "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                (openTab === 1
                                    ? "text-white bg-orange-500"
                                    : "text-blueGray-600 bg-white")
                            }
                            onClick={e => {
                                e.preventDefault();
                                setOpenTab(1);
                            }}
                            data-toggle="tab"
                            href="#link1"
                            role="tablist"
                        >
                            Charcoal Coconut Briquette
                        </a>
                    </li>
                    <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                        <a
                            className={
                                "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                (openTab === 2
                                    ? "text-white bg-orange-500"
                                    : "text-blueGray-600 bg-white")
                            }
                            onClick={e => {
                                e.preventDefault();
                                setOpenTab(2);
                            }}
                            data-toggle="tab"
                            href="#link2"
                            role="tablist"
                        >
                            Coco Peat & Coco Fiber
                        </a>
                    </li>
                    <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                        <a
                            className={
                                "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                                (openTab === 3
                                    ? "text-white bg-orange-500"
                                    : "text-blueGray-600 bg-white")
                            }
                            onClick={e => {
                                e.preventDefault();
                                setOpenTab(3);
                            }}
                            data-toggle="tab"
                            href="#link3"
                            role="tablist"
                        >
                            Cocoa Powder
                        </a>
                    </li>
                </ul>
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 rounded mt-10">
                    <div className="px-4 py-5 flex-auto">
                        <div className="tab-content tab-space">
                            <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                <div className="flex flex-wrap items-center">
                                    <div className="md:w-6/12 lg:w-6/12 p-5">
                                        <img
                                            alt="..."
                                            className="max-w-full rounded-lg shadow-xl"
                                            src="/img/products/Coco Briquette for Sisha.jpg"
                                        />
                                    </div>
                                    <div className="w-full md:w-6/12 p-5">
                                        <p className="text-3xl mb-2 font-semibold leading-normal">Charcoal Coconut Briquette</p>
                                        <p>Charcoal coconut briquette is a type of fuel made from coconut shells that have been charred and compressed into briquettes. These briquettes are a renewable and eco-friendly alternative to traditional charcoal, which is often made from non-renewable sources such as wood or fossil fuels.</p>
                                        <br></br>
                                        <p>Charcoal coconut briquettes are made using a process that involves heating coconut shells in the absence of oxygen to produce a substance called char. The char is then mixed with a natural binder and compressed into briquettes of various sizes and shapes. The resulting briquettes are highly dense and burn longer and hotter than traditional charcoal, making them a popular choice for grilling and cooking.</p>
                                    </div>
                                </div>
                                <div className="mx-auto mt-5">
                                    <div className="justify-center flex flex-wrap">
                                        <div className="w-full lg:w-12/12">
                                            <div className="flex flex-wrap justify-center">
                                                {
                                                    Object.keys(products.charcoal).map((item, index) => {
                                                        return <ProductCard key={index} product={products.charcoal[index]}></ProductCard>
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                                <div className="flex flex-wrap ">
                                    <div className="md:w-6/12 lg:w-6/12 p-5">
                                        <img
                                            alt="..."
                                            className="max-w-full rounded-lg shadow-xl"
                                            src="/img/products/2_coco fiber.jpg"
                                        />
                                    </div>
                                    <div className="w-full md:w-6/12 p-5">
                                        <p className="text-3xl mb-2 font-semibold leading-normal">Coco Peat & Coco Fiber</p>
                                        <p>Coco peat is a byproduct of the coconut fiber industry, made from the outer husk of the coconut. It is highly absorbent and has good water retention properties, making it a useful soil amendment for plants that need a well-draining soil. It also contains nutrients and microorganisms that can improve soil health.</p>
                                        <br></br>
                                        <p>Coco fiber is made from the long fibers extracted from the coconut husk. It is used as a mulch or soil amendment and is highly absorbent with good water retention properties. It can improve soil structure and promote healthy root growth, making it a popular choice among growers and gardeners.</p>
                                    </div>
                                </div>
                                <div className="mx-auto mt-5">
                                    <div className="justify-center flex flex-wrap">
                                        <div className="w-full lg:w-12/12">
                                            <div className="flex flex-wrap justify-center">
                                                {
                                                    Object.keys(products.feed).map((item, index) => {
                                                        return <ProductCard key={index} product={products.feed[index]}></ProductCard>
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                                <div className="flex flex-wrap items-center">
                                    <div className="md:w-6/12 lg:w-6/12 p-5">
                                        <img
                                            alt="..."
                                            className="max-w-full rounded-lg shadow-xl"
                                            src="/img/AssetSumber/cocoa.jpg"
                                        />
                                    </div>
                                    <div className="w-full md:w-6/12 p-5">
                                        <p className="text-3xl mb-2 font-semibold leading-normal">Cocoa Powder </p>
                                        <p>Cocoa powder is a food product that is derived from cocoa beans, which are harvested from the cocoa tree. The beans are fermented, dried, and roasted before being ground into a fine powder. This powder has a rich, chocolatey flavor and is commonly used as an ingredient in baked goods, desserts, and hot chocolate.</p>
                                        <br></br>
                                        <p>Cocoa powder is a good source of antioxidants, which can help to protect the body against damage caused by free radicals. It also contains a range of minerals, including iron, magnesium, and zinc, which are important for maintaining good health. Additionally, cocoa powder is low in calories and fat, making it a healthier alternative to chocolate bars and other high-fat, high-calorie snacks.</p>
                                    </div>
                                </div>
                                <div className="mx-auto mt-5">
                                    <div className="justify-center flex flex-wrap">
                                        <div className="w-full lg:w-12/12">
                                            <div className="flex flex-wrap justify-center">
                                                {
                                                    Object.keys(products.cocoa).map((item, index) => {
                                                        return <ProductCard key={index} product={products.cocoa[index]}></ProductCard>
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Tabs;
