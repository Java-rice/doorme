import React, { useState } from 'react';
import ProfileOwner from "../../assets/profile_owner.png";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import DoorBackOutlinedIcon from '@mui/icons-material/DoorBackOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import Bedroom from "../../assets/bedroom.png";
import GardenView from "../../assets/garden_icon.png";
import Wifi from '../../assets/wifi_icon.png';
import FreeWasher from '../../assets/wash_icon.png';
import CentralAirConditioning from '../../assets/central_air_icon.png';
import Refrigerator from '../../assets/refrigerator_icon.png';
import Kitchen from '../../assets/kitchen_icon.png';
import PetsAllowed from '../../assets/pet_icon.png';
import Dryer from '../../assets/dryer_icon.png';
import SecurityCamera from '../../assets/security_icon.png';
import Bicycle from '../../assets/bicycle_icon.png';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';

const ListingInfo = () => {
    const [showAmenities, setShowAmenities] = useState(false);

    const [showMore, setShowMore] = useState(false);

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    const amenityIcons = {
        'Garden view': GardenView,
        Kitchen: Kitchen,
        Wifi: Wifi,
        'Pets allowed': PetsAllowed,
        'Free washer - in building': FreeWasher,
        Dryer: Dryer,
        'Central air conditioning': CentralAirConditioning,
        'Security cameras on property': SecurityCamera,
        Refrigerator: Refrigerator,
        Bicycles: Bicycle
    };

    return (
        <div className="flex-auto max-w-6xl mx-auto ml-[132px] mt-[30px] p-6">
            <div className="flex justify-between items-center mb-4">
                <div className="w-auto pb-4 border-b-2 border-gray-300">
                    <div className="flex items-start">
                        <div className="flex flex-col">
                            <h1 className="text-2xl font-semibold">Entire rental unit hosted by Ghazal</h1>
                            <p className="text-black-600 mt-2">2 guests · 1 bedroom · 1 bed · 1 bath</p>
                        </div>
                        <div className="ml-[294px]">
                            <img src={ProfileOwner} alt="Landlord" className="w-14 h-14 rounded-full border-4 border-[#651FFF]" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-6">
                {/* Left Column */}
                <div className="mt-2">
                    <div className="flex mb-4 items-center">
                        <HomeOutlinedIcon style={{ width: '2rem', height: '2rem', marginRight: '0.5rem' }} />
                        <div>
                            <h2 className="text-lg font-semibold">Entire home</h2>
                            <p className="text-gray-600">You’ll have the apartment to yourself</p>
                        </div>
                    </div>

                    <div className="flex mb-4 items-center">
                        <AutoAwesomeOutlinedIcon style={{ width: '2rem', height: '2rem', marginRight: '0.5rem' }} />
                        <div>
                            <h2 className="text-lg font-semibold">Enhanced Clean</h2>
                            <p className="text-gray-600">The Landlord is committed to the DoorMe 5-Step Cleanliness Advocacy</p>
                        </div>
                    </div>

                    <div className="flex mb-4 items-center">
                        <DoorBackOutlinedIcon style={{ width: '2rem', height: '2rem', marginRight: '0.5rem' }} />
                        <div>
                            <h2 className="text-lg font-semibold">Enhanced Security</h2>
                            <p className="text-gray-600">With available security guards</p>
                        </div>
                    </div>

                    <div className="flex mb-4 items-center">
                        <CalendarTodayOutlinedIcon style={{ width: '2rem', height: '2rem', marginRight: '0.5rem' }} />
                        <div>
                            <h2 className="text-lg font-semibold">Flexible Renting Period Contract </h2>
                        </div>
                    </div>

                    <div className="mb-4 mt-14">
                        <p className="text-black">
                            Ugaliing magbasa bago magpunta!! Tandaan First come First serve Ibig sabihin open po kami sa lahat mapa walk-in or hindi.
                            <br /><br />
                            {showMore ? (
                                <>
                                    Two Rides going to SM Megamall and Robinson
                                    <br />- One ride going to Pasig Public Market
                                    <br />- Near Taytay and Ortigas
                                    <br />- Near San Isidro Chapel
                                    <br />- Near Palawan Pawnshop ng Pinalad
                                    <br /><br />
                                    Note: 7km from Pasig Palengke to Santo Domingo Street (Dulo ng Pinalad) and another 7km from Santo Domingo Street (Dulo ng Pinalad) to Pasig Palengke
                                </>
                            ) : (
                                <>
                                    Two Rides going to SM Megamall and Robinson
                                    <br />- One ride going to Pasig Public Market
                                </>
                            )}
                            <br /><br />
                            {!showMore && (
                                <button
                                    className="text-black underline"
                                    onClick={toggleShowMore}
                                >
                                    Show more
                                    <ArrowForwardIosOutlinedIcon  style={{ width: '0.9rem', height: '0.9rem', marginRight: '0.5rem' }} />
                                </button>
                                
                            )}
                            {showMore && (
                                <button
                                    className="text-black underline"
                                    onClick={toggleShowMore}
                                >
                                    Show less
                                    <KeyboardArrowUpOutlinedIcon className="w-2 h-2"/>
                                </button>
                            )}
                        </p>
                    </div>

                    <div className="mb-6 mt-10">
                        <h2 className="text-lg font-semibold">Where you'll sleep</h2>
                        <div className="bg-gray-100 rounded-lg p-4 flex flex-col items-start mt-2">
                            <img src={Bedroom} alt="Bedroom" className="w-auto h-auto rounded-lg mr-4 mt-1" />
                            <div>
                                <p className="font-semibold mt-2">Bedroom 1</p>
                                <p className="text-gray-600">1 queen bed</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-lg font-semibold mb-2">What this place offers</h2>
                        <div className={`grid grid-cols-2 gap-2 ${showAmenities ? '' : 'max-h-40 overflow-hidden'}`}>
                            {['Garden view', 'Kitchen', 'Wifi', 'Pets allowed', 'Free washer - in building', 'Dryer', 'Central air conditioning', 'Security cameras on property', 'Refrigerator', 'Bicycles'].map((amenity) => (
                                <div key={amenity} className="flex items-center text-black">
                                    <img src={amenityIcons[amenity]} alt={`${amenity} icon`} className="h-5 w-5 text-black mr-2" />
                                    <span>{amenity}</span>
                                </div>
                            ))}
                        </div>
                        <button onClick={() => setShowAmenities(!showAmenities)} className="text-black mt-4 outline outline-2 outline-black px-2 py-1 rounded-lg">
                            {showAmenities ? 'Show less' : 'Show all 37 amenities'}
                        </button>
                    </div>

                    {/* Location Map */}
                    <div className="mt-6">
                        <h2 className="text-lg font-semibold mb-2">Location</h2>
                        <img src="path/to/map.jpg" alt="Map" className="w-full rounded-lg" />
                    </div>
                </div>

                {/* Right Column */}
                <div className="w-auto bg-white rounded-lg shadow-lg border-2 p-5 sticky top-6 ml-16 mr-[-102px] mt-[-98px]">
                    <div className="flex flex-row items-center space-x-2">
                    <h2 className="text-xl font-semibold mb-2">₱5,000 <span className="text-sm font-normal">/ month</span></h2>
                    <div className="flex items-center">
                        <StarBorderIcon style={{ fontSize: '20px', marginRight: '4px', color: 'black' }} />
                        <span className="text-black">5.0 ·</span>
                    </div>
                    <span className="text-black">7 reviews</span>
                    </div>
                    <div className="flex items-center mb-4">
                        <CheckOutlinedIcon className="h-5 w-5 text-blue-600 mr-2" />
                        <span className="text-blue-600">4.84 · 123 reviews</span>
                    </div>
                    {/* Add booking form components here */}
                    <button className="bg-rose-600 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded w-full">Reserve</button>
                </div>
            </div>
        </div>
    );
};

export default ListingInfo;