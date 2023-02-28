# Prerequisites

Clone the skeleton project from git and navigate into it and install JavaScript dependencies.
````shell
git clone git@github.com:Whal3s-xyz/nft-validation-utility-skeleton.git
cd nft-validation-utility-skeleton
npm install
````

If you are familiar with node scripts head ofter to [Get started section](#getting-started)

# Available Scripts

In the project directory, you can run:

## `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console

## `npm test`

Launches the test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## `npm run build`

Builds the app for production to the `build` folder.

## Getting started

Follow the steps and build your own utility dApp.

### Install whal3s.js

```shell
npm i @whal3s/whal3s.js
````

### Insert Utility ID
Insert your Utility ID (you copied from Whal3s App) into [NftValidationUtility.jsx:15](src%2Fcomponents%2FNftValidationUtility.jsx)
````javascript
const id = '[YOUR-UTILITY-ID]';
````


### Create Whal3s object
Create Whal3s object in [NftValidationUtility.jsx:24](src%2Fcomponents%2FNftValidationUtility.jsx)
```javascript
const whal3s = new Whal3s();
```

### Create Validation Utility Instance

Create Validation Utility Instance in [NftValidationUtility.jsx:29](src%2Fcomponents%2FNftValidationUtility.jsx)

````javascript
 whal3s.createValidationUtility(id).then((newUtility) => {
    newUtility.addEventListener('stepChanged', (step) => {
        setStep(step.detail.step)
    })
    setUtility(newUtility)
    setStep(newUtility.step)
})
````


### Let users connect their wallet

Call `utility.connectWallet()` when the Connect-Wallet-Button in [1_ConnectWallet.jsx:10](src%2Fcomponents%2FNftValidationUtility%2F1_ConnectWallet.jsx) is clicked.

````javascript
<Button onClick={() => utility.connectWallet()}>Connect Wallet</Button>
````


### Let users select one of their eligible NFTs

We already prepared an example visualization of all eligable NFTs.
You just need to set the token ID that should be used.

[3_SelectNft.jsx:25](src%2Fcomponents%2FNftValidationUtility%2F3_SelectNft.jsx)
````javascript
if(nft.valid)
    utility.tokenId = e.target.value
````

### Reserve usage spot

In this example we make use of the reservation feature. This is optional but can be used to block this usage spot while asking for additional data like shipping address.
To do so, call if the Button in [3_SelectNft.jsx:57](src%2Fcomponents%2FNftValidationUtility%2F3_SelectNft.jsx) is clicked.

````javascript
 utility.reserveEngagement()
````

### Claim utility

As already mentioned, we can add additional metadata to an engagement. This makes it possible to ship a completely serverless dApp.
In this example ([4_ClaimNft.jsx:29](src%2Fcomponents%2FNftValidationUtility%2F4_ClaimNft.jsx)) we only ask for a text input you can exchange it for name and email for example.
Finally you need to persist the claim. To do so, call `storeEngagement` on your utility object.
````javascript
 utility.storeEngagement({additionalData: additionalData})
````


### Finished

Now head over to [Whal3s App](https://app.whal3s.xyz)  and check ne freshly created engagement.
## Tips and tricks



### Account Center

You can customize the Wallet Configuration, like account center position, by passing a Configuration during Whal3s initialization.

````javascript
const whal3s = new Whal3s({
    accountCenter: {
        desktop: {
            position: 'bottomRight', // position the account center to bottom right
        },
    }
});
````

# Learn More

You can learn more in the [Whal3s documentation](https://docs.whal3s.xyz).
