import { useRouteError } from "react-router-dom";
import Footer from "../../components/Footer";
import AppHeader from "../../components/Header";
import "./style.scss";

const NotFound = () => {
  const err = useRouteError();
  return (
    <>
    <div className={'app-container'}>
      <AppHeader />
        <div className={'not-found-container'}>
          <div>
            <h1>Something went wrong!</h1>
            <h2>{err.status + " :  " + err.statusText}</h2>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default NotFound;
