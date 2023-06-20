

// Create a variable to hold the number of NFT's
let numNFTs = 0;

// This function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(name, description, image) {
  // Create an NFT object with the provided metadata
  const nft = {
    name: name,
    description: description,
    image: image
  };

  // Increment the count of NFTs
  numNFTs++;

  // Return the created NFT object if needed
  return nft;
}

// Create an array to hold the minted NFTs
const nftCollection = [];

// Create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
  for (let i = 0; i < nftCollection.length; i++) {
    const nft = nftCollection[i];
    console.log("Name: " + nft.name);
    console.log("Description: " + nft.description);
    console.log("Image: " + nft.image);
    console.log("---------------------");
  }
}

// Print the total number of NFTs we have minted to the console
function getTotalSupply() {
  return numNFTs;
}

// Call your functions below this line

// Mint some NFTs
const nft1 = mintNFT("NFT 1", "Description of NFT 1", "image1.png");
const nft2 = mintNFT("NFT 2", "Description of NFT 2", "image2.png");

// Store the minted NFTs in the collection
nftCollection.push(nft1);
nftCollection.push(nft2);

// List all NFTs
listNFTs();

// Get the total supply of NFTs
console.log("Total Supply: " + getTotalSupply());
