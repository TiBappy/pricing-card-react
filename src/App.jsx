import { Suspense } from "react";
import "./App.css";
import Daisynav from "./daisynav/Daisynav";
import NavBar from "./NavBar/NavBar";
import PricingOptions from "./PricingContainer/PricingOptions";

const pricingPromise = fetch("pricing.json").then((res) => res.json());
function App() {
  return (
    <>
      {/* <Daisynav></Daisynav> */}
      <NavBar></NavBar>
      <Suspense
        fallback={<span className="loading loading-ring loading-xl"></span>}
      >
        <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
      </Suspense>
    </>
  );
}

export default App;
