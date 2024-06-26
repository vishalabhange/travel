import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Showcase from "./components/Showcase";
import Destinations from "./components/Destinations.js";
import Footer from "./components/Footer";
import Login from "./components/Login.js";
import SignUp from "./components/Signup.js";
import CreateTrip from "./components/CreateTrip.js";
import UserProfileForm from "./components/UserProfileForm.js";
import Error from "./components/Error";
import { ErrorBoundary } from "react-error-boundary";
import UserProfileDisplay from "./components/UserProfileDisplay.js";
import Trip from "./components/Trip.js";
import TripDetails from "./components/trip-details.js";
import CreateTrips from "./components/CreateTrips.js";
import SearchResults from "./components/SearchResults.js";
import TouristLocator from "./components/TouristLocator.js";
import FullPageSlider from "./components/FullPageSlider.js";
import ChatPage from "./components/Chats.js";
import WeatherApp from "./components/Wheather.js";
import DestinationDetails from "./components/DestinationDetails.js";
import MyTrips from "./components/MyTrips.js";
import Settings from "./components/Settings.js";
import ChangePassword from "./components/ChangePassword.js";
import RecentTrips from "./components/RecentTrips.js";
import Language from "./components/Language.js";
import Sidebar from "./components/SideBar.js";
import LikedTrips from "./components/LikedTrips";
import { LikedTripsProvider } from "./components/LikedTripsContext.js";
import WhatsAppRedirect from "./components/WhatsAppRedirect";
import image1 from "../src/assests/image1.jpg";
import image2 from "../src/assests/image2.jpg";
import image3 from "../src/assests/image3.jpg";
import LegalAndAbout from "./components/LeagalAndAbout.js";
import CustomerServices from "./components/CustomerServices.js";
import Logout from "./components/Logout.js";
import HolidayPackages from "./components/HolidayPackages.js";
import Adventure from "./components/Adventure.js";
import WaterSport from "./components/WaterSport";
import WinterSport from "./components/WinterSport";
import Camping from "./components/Camping";
import AdventureDetails from "./components/AdventureDetail.js";
import BookingForm from "./components/BookingForm.js";
import Review from "./components/Review.js";
import WelcomePage from "./components/WelcomePage.js";
import SearchProfilePage from "./components/SearchProfileDisplay.js";

import { ClickedEmailProvider } from "./components/EmailContext";


function App() {
  const places = [
    {
      id: 1,
      name: "Lonavala",
      price: 100,
      location: "City X",
      image: image1,
    },
    {
      id: 2,
      name: "Goa",
      price: 120,
      location: "City Y",
      image: image2,
    },
    {
      id: 3,
      name: "Alibag",
      price: 90,
      location: "City Z",
      image: image3,
    },
    {
      id: 4,
      name: "Lonavala",
      price: 100,
      location: "City X",
      image: image1,
    },
    {
      id: 5,
      name: "Goa",
      price: 120,
      location: "City Y",
      image: image2,
    },
    {
      id: 6,
      name: "Alibag",
      price: 90,
      location: "City Z",
      image: image3,
    },
    {
      id: 7,
      name: "Lonavala",
      price: 100,
      location: "City X",
      image: image1,
    },
    {
      id: 8,
      name: "Goa",
      price: 120,
      location: "City Y",
      image: image2,
    },
    {
      id: 9,
      name: "Alibag",
      price: 90,
      location: "City Z",
      image: image3,
    },
  ];
  return (
    <Router>
      <ClickedEmailProvider>
      <ErrorBoundary>
        {/* <Header /> */}
        <LikedTripsProvider>
          <Routes>
            <Route path="/Showcase" element={<Showcase />} />
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/profile-form" element={<UserProfileForm />} />
            <Route path="/" element={<Destinations places={places} />} />
            <Route
              path="/destination/:id"
              element={<DestinationDetails places={places} />}
            />
            <Route path="/Help" element={<Footer />} />
            <Route path="/Profile" element={<UserProfileDisplay />} />
            <Route path="/SearchProfilePage" element={<SearchProfilePage />} />
            <Route path="/trip" element={<Trip />} />
            <Route path="/trip-details/:id" element={<TripDetails />} />
            <Route path="/liked-trips" element={<LikedTrips />} />
            <Route path="/CreateTrips" element={<CreateTrips />} />
            <Route path="/search/:q" component={SearchResults} />
            <Route path="/TouristLocator" element={<TouristLocator />} />
            <Route path="/FullPageSlider" element={<FullPageSlider />} />
            <Route path="/Chats" element={<ChatPage />} />
            <Route path="/Weather" element={<WeatherApp />} />
            <Route path="/MyTrips" element={<MyTrips />} />
            <Route path="/create-trip" element={<CreateTrip />} />
            <Route path="/holiday-packages" element={<HolidayPackages />} />
            <Route path="/booking-form" element={<BookingForm />} />

            <Route path="/adventure" element={<Adventure />} />
            <Route path="/water-sport" element={<WaterSport />} />
          <Route path="/winter-sport" element={<WinterSport />} />
          <Route path="/camping" element={<Camping />} />
          <Route path="/adventure-details" element={<AdventureDetails />} />

          <Route path="/review" element={<Review />} />
          <Route path="/WelcomePage" element={<WelcomePage />} />

           
            
            


            <Route path="/settings/*" element={<Settings />} />
            <Route path="/change-password" element={<ChangePassword />} />
            <Route path="/recent-trips" element={<RecentTrips/>}/>
            <Route path="/language" element={<Language/>}/>
            <Route path="/legal" element={<LegalAndAbout/>}/>
            <Route path="/customer-services" element={<CustomerServices/>}/>
            <Route path="/logout" element={<Logout/>}/>


            <Route path="*" element={<Error />} />
            <Route path="/whatsapp/:phoneNumber" element={<WhatsAppRedirect />} />
          </Routes>
        </LikedTripsProvider>
      </ErrorBoundary>
      </ClickedEmailProvider>
    </Router>

  );
}

export default App;
