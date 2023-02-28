import React, {useState} from 'react';
import Button from "../Button";

const ClaimNft = ({utility}) => {

    // Add additional data to the engagement before saving finally

    const [additionalData, setAdditionalData] = useState('');

    return (
        <div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Additional data
                </label>
                <div className="mt-1">
                    <input
                        type="text"
                        name="additionalData"
                        id="additionalData"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        value={additionalData} onChange={(e) => setAdditionalData(e.target.value)}
                    />
                </div>
            </div>

            <Button className="mt-5" disabled={!additionalData} onClick={() => {
                //TODO: Finally store engagement including metadata
                //...
            }}>Claim Utility</Button>
        </div>
    );
};

export default ClaimNft;
