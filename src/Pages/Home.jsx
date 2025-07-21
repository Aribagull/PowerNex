
import CustomerReviewSlider from "../Components/CustomerReview";
import Footer from "../Components/Footer";
import HeroSection from "../Components/HeroSection";
import HomeCrads from "../Components/HomeCards";
import LogoCarousel from "../Components/LogoCarousel";
import MidCards from "../Components/MidCard";

import FlexCards from "../Components/PromoGrid";


function HomePage() {
  
  return (
    <div className="">
      <HeroSection/>
      <FlexCards/>
      <HomeCrads/>
      <MidCards/>
      <CustomerReviewSlider/>
    
      <LogoCarousel/>
    </div>
  );
}

export default HomePage;
