import React from 'react';
import Button from "../Button";


const SelectNft = ({utility}) => {

    // Display eligable NFTs and call "reserveEngagement" function on click, after the user selected the token he wants to claim with
    // You can skip the reservation step if you don't need to request additional data from the user before claiming the utility


    return (
        <div>
            <p className="font-bold text-2xl mb-2">Select NFT</p>
            <div className="space-y-5">
                {utility.nfts?.nfts.map((nft, nftIdx) => (
                    <div key={nft.attributes.id.tokenId} className="relative flex items-start">
                        <div className="flex h-5 items-center">
                            <input
                                id={nft.attributes.id.tokenId}
                                aria-describedby={`${nft.attributes.id.tokenId}-description`}
                                value={nft.attributes.id.tokenId}
                                onChange={(e) => {
                                    // TODO: Add onChange listener that sets the chosen token ID to utility
                                    //...
                                }}
                                name="plan"
                                type="radio"
                                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                        </div>
                        <div className="ml-3 text-sm">
                            <label htmlFor={nft.attributes.id.tokenId} className="font-medium text-gray-700">
                                {nft.attributes.title} {nft.valid ? '(valid)' : '(invalid)'}
                            </label>
                            <div id={`${nft.attributes.id.tokenId}-description`} className="text-gray-500">
                                <p className="font-bold">Last Engagement(s):</p>
                                {nft.engagements.map((engagement, engagementIdx) => (
                                    <p key={engagementIdx} className="font-bold">{engagement.created_at}</p>
                                ))}
                                <br/>
                                <p className="font-bold">Errors:</p>
                                {nft.errors?.map((error, errorIdx) => (
                                    <p key={errorIdx}>{error}</p>
                                ))}
                                {nft.errors?.length === 0 && <p>No errors</p>}
                            </div>
                        </div>
                        <div>
                            <img src={nft.attributes.media[0].thumbnail} className="h-24 ml-3"
                                 alt={nft.attributes.title}/>
                        </div>
                    </div>
                ))}
            </div>
            <Button className="mt-5" disabled={!utility.tokenId} onClick={() => {
                //TODO: Reserve usage slot on click to enter metadata in next step. Works like ordering a concert ticket.
                //...
            }}>Continue</Button>
        </div>

    );
};

export default SelectNft;
