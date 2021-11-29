import StoreGamesList from "../../components/GamingCompany/StoreGamesList.js";
import "./styles/GamingCompanyStorePage.css";

// Gaming company's store page
// Nathaniel
const GamingCompanyStorePage = () => {
  return (
    <div>
      <h2 className="gameStoreTitle">Game Store</h2>
      <StoreGamesList></StoreGamesList>
    </div>
  );
}

export default GamingCompanyStorePage;