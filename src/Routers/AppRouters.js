import AboutUs from "../containers/AboutContainer"
import ContactUs from "../containers/ContactContainer";
import Restaurantes from "../components/Restaurantes";
import RestaurantDetails from "../components/RestaurantDetails";
import NotFound from "../containers/NotFound";

export const AppRouters = [
  {
    path: '/',
    element: <Restaurantes />,

  },
  {
    path: '/restaurant/:resId',
    element: <RestaurantDetails />
  },
  {
    path: '/about',
    element: <AboutUs />
  },
  {
    path: '/contact',
    element: <ContactUs />
  }
];
