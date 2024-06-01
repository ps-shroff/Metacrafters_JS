let nftCollection = [];

function mintNFT(animal_name, eyeColor, breed, weight) {
    const nft = {
        animal_name: animal_name,
        eyeColor: eyeColor,
        breed: breed,
        weight: weight
    };
    nftCollection.push(nft);
}

function listNFTs() {
    nftCollection.forEach((nft, index) => {
        console.log(`NFT ${index + 1}:`);
        console.log(`Name: ${nft.animal_name}`);
        console.log(`Eye Color: ${nft.eyeColor}`);
        console.log(`breed: ${nft.breed}`);
        console.log(`weight: ${nft.weight}`);
        console.log('--------------------------');
    });
}

function getTotalSupply() {
    return nftCollection.length;
}

mintNFT("Lion", "Blue", "Barbary", "150-200");
mintNFT("Elephant", "Green", "savanna", "1000-2000");
mintNFT("Tiger", "Brown", "Bengal", "150-200");

listNFTs();

console.log(`Total NFTs minted: ${getTotalSupply()}`);
