import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";


const NextArrow = ({ onClick }) => (
    <div
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full z-10 cursor-pointer hover:bg-gray-100"
        onClick={onClick}
    >
        <AiOutlineRight size={20} />
    </div>
);

const PrevArrow = ({ onClick }) => (
    <div
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full  z-10 cursor-pointer hover:bg-gray-100"
        onClick={onClick}
    >
        <AiOutlineLeft size={20} />
    </div>
);

const cards = [
    {
        title: "Effortless Walks: The Secret to Happy Dogs and Owners",
        text: "Walking your dog should be a joyful experience, not a juggling act. As a dog owner, you understand the struggle of managing leashes, treats, waste bags, and",
        image: "https://d23ltuj4aaogm5.cloudfront.net/wp-content/uploads/2021/04/4-27-21-Property-Managers-Take-Note-Happy-Pet-Owners-Mean-Happy-Long-Term-Residents.png",
    },
    {
        title: "Never Forget Your Pills Again with This Essential Travel Companion",
        text: "Traveling can be a thrilling experience, but keeping track of your medication on the go can be a challenge. Whether you’re a frequent flyer or an occasional traveler, maintaining a proper medication routine is crucial. Enter the game-changing travel pill organizer, a must-have for anyone looking to simplify their travel preparations and ensure they never miss a dose.",
        image: "https://www.thesenior.com.au/images/transform/v1/crop/frm/silverstone-feed-data/2c4ae62a-10ab-4574-8cc1-5e01a0aa8e49.jpg/r0_0_1000_667_w1000_h667_fmax.jpg",
    },
    {
        title: "Celebrate Friendship with These Cute Magnetic Socks Taste Revolution",
        text: "When it comes to adding a touch of whimsy and fun to your wardrobe, there’s nothing quite like a pair of cute magnetic socks. These aren’t just any socks; they have a playful twist that will make you and your partner smile every time you wear them.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7v00PHWNIa-ZwAar-3Jxo_UUH8kkPvqcAMQ&s",
    },
    {
        title: "Elevate Your Outdoor Adventures with a High-Quality Camping Bubble Tent",
        text: "The allure of being in the great outdoors is irresistible, but what if you could take it up a notch? Imagine sleeping under the stars without worrying about bugs or weather conditions. This experience becomes possible with a high-quality outdoor camping bubble tent.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaoJ2X2moQx0V4_ZGHBEsA52Od_qQFfOrRlg&s",
    },
    {
        title: "A Taste Revolution with Your Original Espresso Machine",
        text: "The aroma of freshly brewed coffee a unique allure that awakens our senses like nothing else. An original espresso machine, such as this Deluxe Semi-Automatic Espresso Coffee Maker with Steam Milk Frother, is all you need to recreate this sensation at home every morning.",
        image: "https://www.magimix.co.uk/img/cms/creative_element_uk/nespresso_original/image_original_capsule.jpg",
    },
    {
        title: "Chic & Green: Wheat Straw Seasoning Dish Taste Revolution",
        text: "In the quest for a more eco-friendly kitchen, the search for sustainable alternatives to everyday items has never been more important. One such item gaining popularity is the wheat straw plastic seasoning dish. This unique dish is not only practical but also aligns with the growing trend of environmentally conscious living.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOe3B3CU0VRXupPkauUXDVynxyBMGleEAIBQ&s",
    },
];

export default function CardCarousel() {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <div className="px-10 py-12 relative">
            <Slider {...settings}>
                {cards.map((card, index) => (
                    <div key={index} className="px-5">
                        <div className="bg-white rounded-lg shadow-customShadow overflow-hidden">
                            <img
                                src={card.image}
                                alt={card.title}
                                className="h-96 w-full object-cover"
                            />
                            <div className="p-2 font-lora">
                                <h2 className="text-base font-semibold mb-2 text-gray-700">{card.title}</h2>
                                <p className="text-sm text-gray-600 mb-1">
                                    {card.text.split(" ").slice(0, 24).join(" ")}{card.text.split(" ").length > 24 && ''}
                                </p>

                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
