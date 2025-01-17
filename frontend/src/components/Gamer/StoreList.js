import React from "react";
import StoreItem from "./StoreItem";
import "./styles/StoreList.css";

// Yuanyuan
// Store List
const StoreList = ({ game }) => {
    const renderStoreGames = () => {
        return game.map((c) => (
            <StoreItem key={`gameID_${c._id}`} game={c}></StoreItem>
        ));
    }

    return (
        <div className="storeList col-md-4 col-sm-6">{renderStoreGames()}</div>
    );
}

export default StoreList;