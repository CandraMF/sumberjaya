import React from "react";
import Image from "react";
import Link from "next/dist/client/link";
import ProductCard from "components/Widgets/ProductCard"

let products = {
    
    'biomass' : [
        {
            name: 'Wood Pellet',
            spec :{
                
            },
            other:'Wood pellets are the most commons type of pellet fuel and are generally made from compacted sawdust and related industrial wastes from the milling of lumber manufacture of wood product and furniture, and construction',
            image: 'Wood Pellet.jpg'
        },
        {
            name: 'Coconut Shell',
            spec :{
                
            },
            other:'Coconut shell is waste produce from a coconut after the juice and meat are separated from the coconut. It’s high in carbon and can be use as carbon active to absorb impurities for the benefit of health.',
            image: 'Coconut Shell.jpg'
        },
        {
            name: 'Husk Rice Pellet',
            spec :{
                
            },
            other:' They are low in moisture and resistant to water degradation, which makes storage and handling easy. Rice husk is a secure supply with an attractive cost price. Additionally, it is a carbon-lean fuel which creates renewable green energy.',
            image: 'Husk Rice Pellet.jpg'
        },
        {
            name: 'Hardwood Charcoal',
            spec :{
                'Total Moisture ':'6.3%, ar',
                'Moisture in Analysis' : '5.3%, adb',
                'Ash Content ' : '3.6%, adb',
                'Volatile Matter ':'9.6%,adb',
                'Fixed Carbon' : '81.5%,adb',
                'Total Sulfur ': '0.02%,adb',
                'Gross Calorific ': '7377 Kcal/Kg, adb',
                'Gross Calorific' : '7299 Kcal/Kg, ar',

            },
            other:' They are low in moisture and resistant to water degradation, which makes storage and handling easy. Rice husk is a secure supply with an attractive cost price. Additionally, it is a carbon-lean fuel which creates renewable green energy.',
            image: 'Hardwood Charcoal.jpg'
        },
        {
            name: 'Dried Sawdust Block',
            spec :{
                ' Material ': 'Albasia sawdust',
                'Moisture' : '10 – 14%',
                'Ash Content' : '0.1%',
                'Foreign matter':'9.6%,adb',
                'Powder' : '5%',
                'Size CD': '1-5 mm',
                'Block/Bale size': '57 x 38 x 28 cm',
            },
            other:'',
            image: 'Dried Sawdust Block.jpg'
        },
        {
            name: 'Dried Sawdust Black',
            spec :{
                'Total Moisture': '2.9 % ,wt',
                'Ash Content' : '3.7 % ,wt',
                'Volatile Matter' : '26.3%, wt',
                'Fixed Carbon':'67.1%, wt',
                'Total Sulfur' : '0.01%, wt',
                'Gross Calorific': '0.01%, wt',
            },
            other:'',
            image: 'Dried Sawdust Black.jpg'
        },
        {
            name: 'Binchotan Charcoal & Powder',
            spec :{
                'Food Grade.':'',
                'Low Water Content ' :'< 10%',
                'High Fixed Carbon ' : '> 90%',
                'High Caloric Content ':'>7000 Kal/gram',
            },
            other: 'An extraordinary absorber, Free of mercury or other dangerous ingredients, Qualitywater filter', 
            image: 'Binchotan Charcoal & Powder.jpg'
        },
        {
            name: 'Coco Briquette for Sisha',
            spec :{
                'Condition of Goods ':'Dry',
                'Ash Content ' :'3%',
                'Ash Colour' : 'white',
                'Burning Time':'2.5 Hours',
                'Color of coals' : 'Brightly Closed',
                'Hardness' : 'Pretty Hard',
                ' Gross Calorific' : '7000-7500Kcal/Kg',
            },
            other: '', 
            image: 'Coco Briquette for Sisha.jpg'
        },
        {
            name: 'Hardwood Charcoal',
            spec :{

            },
            other: 'Made from only natural hardwood, such as maple, oak, mesquite or even hickory. Once the wood is reduced to charcoal, it’s left in its original rough shape. In fact, the best way to determine the quality of the charcoal is to look at it—if you can recognize the shapes of real wood, you’ve got the real thing. Lights more quickly.Burns hotter (around 1,000°F), so you should make a smaller or more spreadout fire than you would with briquettes. Creates less ash.Imparts a purer, wood-fire flavor to foods.Any hardwood charcoal not completely burned during grilling may be put out and re-lit on another occasion for more grilling', 
            image: 'Charcoal.jpg'
        },
    ], 
    'feed' : [
        {
            name: 'Bagasse Sugarcane and Sugarcane Leaves',
            spec: {
                
            },
            other : 'The fermentable carbohydrates in both sugarcane juice and molasses are sucrose, glucose and fructose. Molasses is the soluble residue after extraction of the sucrose from cane juice. Compared with cane juice, molasses is therefore richer in minerals, organic acids and other plant soluble. The most appropriate commercial application for sugarcane juice is as the basis of a feeding system for monogastric animals. Traditionally in tropical countries these species have been managed as scavengers. When more intensive systems were introduced, imported cereal grains were the principal feed resources, thus competing directly with humans for food.',
            image: 'Bagasse Sugarcane and Sugarcane Leaves.jpg'
        },
        {
            name: 'Dried Pinaepple Peel Up',
            spec: {
                
            },
            other : 'Pineapple pulp as byproducts during processing factory from the canned pineapple, pineapple juice concentrate, Essential components of pineapple pulp and pulp pineapple shell. Because the pineapple planting material year round so we can offer pineapple pulp as feed to customers all year round, not seasonal.',
            image: 'Bagasse Sugarcane and Sugarcane Leaves.jpg'
        },
        {
            name: 'Dent Corn Silage',
            spec: {
                'Protein' :'8.2 %',
                'Digestibility ': '80.1 %',
                'Percetage of Particle ': '42 – 44%',
                'Huminity' : '65%',
                'Difficulty' : '35%',
            },
            other : 'Good-quality energy fermented feed from corn harvested early, cut to a predetermined length, packed in polyethylene bags under anaerobic silage conditions after adequate fermentation.',
            image: 'Bagasse Sugarcane and Sugarcane Leaves.jpg'
        },
    ],
    'agriculture' : [
        {
            name: 'Actiled Tapioka Strach',
            spec: {
                'Starch' : '84 % min',
                'Moisture' : '14 % max',
                'Ash' : '0.5 % max',
                'Fiber' : '0.5 % max',
                'Viscosity' : '400 BU min',
            },
            other : 'Tapioca starch dry by machine',
            image: 'Actiled Tapioka Strach.jpg'
        },
        {
            name: 'Tapioca Residu Powder',
            spec: {
                'Color' : 'Cream to off white',
                'Moisture' : '13 % max',
                'Mesh Size' : '80-90% min',
                'Starch content' : '50% min',
                'Viscosity' : '135 cps min',
            },
            other : 'Product of powder processed residue after extracting starch from tapioca. Starch content 40% or more. The most appropriate commercial application for sugarcane juice is as the basis of a feeding system for monogastric animals. Traditionally in tropical countries these species have been managed as scavengers. When more intensive systems were introduced, imported cereal grains were the principal feed resources, thus competing directly with humans for food.',
            image: 'Tapioca Residu Powder.jpg'
        },
        {
            name: 'Dried Crushed Crab Shell',
            spec: {
                'Size' : '<0.5 Cm',
                'Moisture' : '10%',
                'Impurity' : ' 3%',
                'Protein' : '28.03%',
            },
            other : '',
            image: 'Dried Crushed Crab Shell.jpg'
        },
        {
            name: 'Shrimp Shell',
            spec: {
                'Size' : '≥ 0.5 Cm',
                'Moisture' : '10%',
                'Impurity' : ' 3%',
                'Protein' : '55.10%',
            },
            other : 'Product of powder processed residue after extracting starch from tapioca. Starch content 40% or more. The most appropriate commercial application for sugarcane juice is as the basis of a feeding system for monogastric animals. Traditionally in tropical countries these species have been managed as scavengers. When more intensive systems were introduced, imported cereal grains were the principal feed resources, thus competing directly with humans for food.',
            image: 'Shrimp Shell.jpg'
        },
        {
            name: 'Cocopeat High EC',
            spec: {
                'Bale Size' : '30x30x(12-15) cm',
                'Size' : '5 mm',
                'Weight' : ' ± 5 Kg',
                'Electrical Conductivity ' : '> 0.6 mS/cm',
                'PH' : '5.0 – 7.0',
                'Moisture content ' : '< 25%',
                'Expansion' : '60 Lt/block',
            },
            other : 'Cocopeat High Electical Conductivity',
            image: 'Cocopeat High EC.jpg'
        },
        {
            name: 'Cocopeat Low EC',
            spec: {
                'Bale Size' : '30x30x(12-15) cm',
                'Size' : '5 mm',
                'Weight' : ' ± 5 Kg',
                'Electrical Conductivity ' : '> 0.6 mS/cm',
                'PH' : '5.0 – 7.0',
                'Moisture content ' : '< 25%',
                'Expansion' : '60 Lt/block',
            },
            other : 'Cocopeat Low Electical Conductivity',
            image: 'Cocopeat Low EC.jpg'
        },
        {
            name: 'Corn Cobs',
            spec: {
                
            },
            other : 'Corn cobs, which are usually treated as waste and used as a fuel can be used as animal feed,animal bedding, culinary ingredients, substitutes for plastic materials, crafts, and substitutes for gas fuel',
            image: 'Corn Cobs.jpg'
        },
        
    ]   
}

const Tabs = () => {
    const [openTab, setOpenTab] = React.useState(1);
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
                            Biomass Energy
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
                            Stock
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
                            Agriculture
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
                                            src="/img/products/biomass.jpg"
                                        />
                                    </div>
                                    <div className="w-full md:w-6/12 p-5">
                                        <p className="text-3xl mb-2 font-semibold leading-normal">Biomass Source Energy</p>
                                        <p>The energy stored in biomass can be released to produce renewable electricity or heat. Bio power can be generated through combustion or gasification of dry biomass or biogas (methane) captured through controlled anaerobic digestion. Co firing of biomass and fossil fuels (usually coal) is a low-cost means of reducing greenhouse gas emissions, improving costeffectiveness, and reducing air pollutants in existing power plants. Thermal energy (heating and cooling) is often produced at the scale of the individual building, through direct combustion of wood pellets, wood chips, and other sources of dry biomass. Combined heat and power (CHP) operations often represent the most efficient use of biomass (utilizing around 80 percent of potential energy). These facilities capture the waste heat and/or steam from bio power production and pipe it to nearby buildings to provide heat or to chillers for cooling.</p>
                                    </div>
                                </div>
                                <div className="mx-auto mt-5">
                                    <div className="justify-center flex flex-wrap">
                                        <div className="w-full lg:w-12/12">
                                            <div className="flex flex-wrap justify-center">
                                                {
                                                    Object.keys(products.biomass).map((item, index) => {
                                                        return <ProductCard key={index} product={products.biomass[index]}></ProductCard>
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                                <div className="flex flex-wrap items-center">
                                    <div className="md:w-6/12 lg:w-6/12 p-5">
                                        <img
                                            alt="..."
                                            className="max-w-full rounded-lg shadow-xl"
                                            src="/img/products/biomass.jpg"
                                        />
                                    </div>
                                    <div className="w-full md:w-6/12 p-5">
                                        <p className="text-3xl mb-2 font-semibold leading-normal">Feed Stock</p>
                                        <p>Feed, also called animal feed, food grown or developed for livestock and poultry. Modern feeds are produced by carefully selecting and blending ingredients to provide highly nutritional diets that both maintain the health of the animals and increase the quality of such end products as meat, milk, or eggs. Ongoing improvements in animal diets have resulted from research, experimentation, and chemical analysis.</p>
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
                                            src="/img/products/agricultur.jpg"
                                        />
                                    </div>
                                    <div className="w-full md:w-6/12 p-5">
                                        <p className="text-3xl mb-2 font-semibold leading-normal">Agriculture </p>
                                        <p>Feed, also called animal feed, food grown or developed for livestock and poultry. Modern feeds are produced by carefully selecting and blending ingredients to provide highly nutritional diets that both maintain the health of the animals and increase the quality of such end products as meat, milk, or eggs. Ongoing improvements in animal diets have resulted from research, experimentation, and chemical analysis.</p>
                                    </div>
                                </div>
                                <div className="mx-auto mt-5">
                                    <div className="justify-center flex flex-wrap">
                                        <div className="w-full lg:w-12/12">
                                            <div className="flex flex-wrap justify-center">
                                                {
                                                    Object.keys(products.agriculture).map((item, index) => {
                                                        return <ProductCard key={index} product={products.agriculture[index]}></ProductCard>
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
