import './styles/StoreGamesItem.css';

// StoreGamesItem component for each game from
// the StoreGamesList component.
// Takes game object as props from the 
// StoreGamesList component.
// Nathaniel
const StoreGamesItem = ({ game }) => {
  return (
    <div className="storeGamesItemContainer">
      {/*A container for holding the game image, title, and published by */}
      <div className="storeGamesItemSection1">
        <div className="storeGamesItemImage">
          <img src={game.gameImageURL} alt="myGameImage" />
        </div>
        <div className="storeGamesItemTitle">
          {game.gameTitle}
        </div>
        <div className="storeGamesItemPublishedBy">
          {game.publishedBy}
        </div>
      </div>
      <div className="storeGamesItemDescSection">
        {game.gameDesc}
      </div>
      <div className="storeGamesItemPriceSection">
        ${game.gamePrice}
      </div>
    </div>
  );
}

export default StoreGamesItem;