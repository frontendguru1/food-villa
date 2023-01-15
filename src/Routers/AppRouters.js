import AboutUs from "../containers/AboutContainer"
import ContactUs from "../containers/ContactContainer";
import Restaurantes from "../components/Restaurantes";

export const AppRouters = [
  {
    path: '/',
    element: <Restaurantes />,
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
