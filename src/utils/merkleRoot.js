import { MerkleTree } from 'merkletreejs';
import keccak256 from "keccak256";


export class WhiteListMerkleTree {
    whitelistAddress = [
        "0x1dfe93191F2E77Dcf1ABa9516c8e2D432ECe6Cd3",
        "0x5b7acA9D4C0d569dB80C4495967B922b56ab2464",
        "0x1C1aBdAB65D5b10592DA6BEF542552Ae11F440EE",
        "0x5c6950Be6430dD52eAe3B2D2608434b880aE8FF5",
        "0x3eDBbEC879de8847DF1d0Df929Ef58C0e135f891",
        "0xE951A36026db11A283f0E8abEd72bC84eD43a8F0",
        "0x0925390fe5bfdFD004A1316a58B7F94D18227509",
        "0x5004A72481c242665107BA540a4ba7B907eFb8AA",
        "0x48d5727Ca93D9088AED3F486c345a6bA476B3A18",
        "0x31409c80845798e3336a4A65D31477400A773703",
        "0x26009122F10781198Edcb145A5f9f6A8A49feEa9",
        "0xb6DbF5254B0a99D7A94cC7151aC512933a137399",
        "0xc26910a3B413fc4d358500972cD1b2e958eB3F2e",
        "0x86AE14A38B636759b15a3a44AED51de1a7BA1e09"
    ]

    constructor() {
        this.leafNode = this.whitelistAddress.map((address) => (keccak256(address)));
        this.merkleTree = new MerkleTree(this.leafNode, keccak256, {sortPairs: true});
    }

    getMerkleTree(){
        return this.merkleTree;
    }

    getMerkleRoot(){
        return this.merkleTree.getHexRoot();
    }

    getMerkleProof(address) {
        const claimAddress = keccak256(address);
        return this.merkleTree.getHexProof(claimAddress);
    }
}