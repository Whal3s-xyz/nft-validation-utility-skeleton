import React from 'react';
import Button from "../Button";

const ConnectWallet = ({utility}) => {

    // Display wallet connect button an call "connectWallet" function on click
    return (
        <div>
            {/*TODO: Let user connect wallet on button click*/}
            <Button onClick={() => utility.connectWallet()}>Connect Wallet</Button>
        </div>
    );
};

export default ConnectWallet;
