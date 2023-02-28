import React, {useEffect, useState} from 'react';
import Whal3s from "@whal3s/whal3s.js";
import Uninitialized from "./NftValidationUtility/0_Uninitialized";
import ConnectWallet from "./NftValidationUtility/1_ConnectWallet";
import LoadingNfts from "./NftValidationUtility/2_LoadingNfts";
import SelectNft from "./NftValidationUtility/3_SelectNft";
import ClaimNft from "./NftValidationUtility/4_ClaimNft";
import ClaimedNft from "./NftValidationUtility/5_ClaimedNft";
import {NftValidationUtility as Whal3sNftValidationUtility} from "@whal3s/whal3s.js";

const NftValidationUtility = () => {

    // Utility ID
    //TODO: Insert Whal3s Utility id. You can copy it from Whal3s App.
    const id = '';

    const [utility, setUtility] = useState(undefined);
    const [step, setStep] = useState(0);


    useEffect(() => {

        // Inititalize Whal3s and set custom wallet configuration
        ///TODO: Create Whal3s object


        // Create new validation utility instance and assign to state
        //TODO: Create and initiate validation utility instance
    }, [])


    return (
        <>
            {step === Whal3sNftValidationUtility.STEP_UNINITIALIZED && <Uninitialized/>}
            {step === Whal3sNftValidationUtility.STEP_INITIALIZED && <ConnectWallet utility={utility}/>}
            {step === Whal3sNftValidationUtility.STEP_WALLET_CONNECTED && <LoadingNfts/>}
            {(step === Whal3sNftValidationUtility.STEP_NFTS_FETCHED || step === Whal3sNftValidationUtility.STEP_TOKEN_SELECTED) &&
                <SelectNft utility={utility}/>}
            {step === Whal3sNftValidationUtility.STEP_RESERVED && <ClaimNft utility={utility}/>}
            {step === Whal3sNftValidationUtility.STEP_CLAIMED && <ClaimedNft utility={utility}/>}
        </>
    );
};

export default NftValidationUtility;
