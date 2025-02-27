import { ethers } from "hardhat";

async function main() {
  // Connect to your deployed contract
  const contractAddress = "0x5711B9ea68A3b44Bcf319Fd43d57B8AD45426102";
  const OnchainSVGNFT = await ethers.getContractFactory("OnchainSVGNFT");
  const nft = await OnchainSVGNFT.attach(contractAddress);

  console.log("Connected to contract at:", nft.target);

  // Your corrected SVG
  const svg = `<svg width="512.6937866210938px" height="150.79999999999998px" xmlns="http://www.w3.org/2000/svg" viewBox="-6.346893310546875 -0.3999999999999915 512.6937866210938 150.79999999999998" style="background:#596886" preserveAspectRatio="xMidYMid"><defs><filter id="editing-hover" x="-100%" y="-100%" width="300%" height="300%"><feFlood flood-color="#052b4a" result="flood"></feFlood><feComposite operator="in" in2="SourceAlpha" in="flood" result="shadow"></feComposite><feOffset dx="-4" dy="-4" in="SourceGraphic" result="offset-1"></feOffset><feOffset dx="4" dy="4" in="shadow" result="offset-2"></feOffset><feMerge><feMergeNode in="offset-2"></feMergeNode><feMergeNode in="offset-1"></feMergeNode></feMerge></filter></defs><g filter="url(#editing-hover)"><g transform="translate(68.72498321533203, 105.70999908447266)"><path d="M32.37-6.23L32.37-6.23L32.37-6.23Q32.37-12.04 34.69-23.66L34.69-23.66L22.41-23.66L17.85 0L0.50 0L11.04-54.78L28.55-54.78L23.74-30.30L36.02-30.30L40.59-54.78L58.10-54.78L58.10-54.78Q56.94-48.64 55.44-41.75L55.44-41.75L52.62-28.22L52.62-28.22Q49.47-12.45 49.47-5.56L49.47-5.56L49.47-5.56Q49.47-2.74 50.38-1.16L50.38-1.16L50.38-1.16Q46.23 1.66 41.38 1.66L41.38 1.66L41.38 1.66Q36.52 1.66 34.45-0.66L34.45-0.66L34.45-0.66Q32.37-2.99 32.37-6.23ZM78.19 1.66L78.19 1.66L78.19 1.66Q59.93 1.66 59.93-15.52L59.93-15.52L59.93-15.52Q59.93-27.72 66.65-35.61L66.65-35.61L66.65-35.61Q73.79-43.99 86.15-43.99L86.15-43.99L86.15-43.99Q95.12-43.99 99.68-39.84L99.68-39.84L99.68-39.84Q104.25-35.69 104.25-26.98L104.25-26.98L104.25-26.98Q104.25-13.70 97.11-5.98L97.11-5.98L97.11-5.98Q90.14 1.66 78.19 1.66ZM80.34-34.45L80.34-34.45L80.34-34.45Q79.35-32.20 78.56-28.84L78.56-28.84L78.56-28.84Q77.77-25.48 76.78-20.17L76.78-20.17L76.78-20.17Q75.78-14.86 75.78-8.30L75.78-8.30L75.78-8.30Q75.78-6.14 76.48-4.73L76.48-4.73L76.48-4.73Q77.19-3.32 79.10-3.32L79.10-3.32L79.10-3.32Q81.01-3.32 82.21-4.23L82.21-4.23L82.21-4.23Q83.42-5.15 84.33-7.30L84.33-7.30L84.33-7.30Q85.99-11.12 87.32-18.22L87.32-18.22L87.32-18.22Q88.64-25.32 88.77-28.39L88.77-28.39L88.77-28.39Q88.89-31.46 88.89-33.74L88.89-33.74L88.89-33.74Q88.89-36.02 88.23-37.52L88.23-37.52L88.23-37.52Q87.56-39.01 85.70-39.01L85.70-39.01L85.70-39.01Q83.83-39.01 82.59-37.85L82.59-37.85L82.59-37.85Q81.34-36.69 80.34-34.45ZM128.98-4.57L128.98-4.57L128.98-4.57Q126.41 1.66 118.19 1.66L118.19 1.66L118.19 1.66Q114.04 1.66 111.39-1.25L111.39-1.25L111.39-1.25Q109.23-3.65 109.23-6.39L109.23-6.39L109.23-6.39Q109.23-12.62 112.13-26.23L112.13-26.23L118.19-58.10L135.04-59.76L126.99-17.76L126.99-17.76Q125.58-11.62 125.58-9.46L125.58-9.46L125.58-9.46Q125.58-4.73 128.98-4.57ZM139.65-2.49L139.65-2.49L139.65-2.49Q137.70-4.65 136.83-8.05L136.83-8.05L136.83-8.05Q135.95-11.45 135.95-17.02L135.95-17.02L135.95-17.02Q135.95-22.58 137.86-27.64L137.86-27.64L137.86-27.64Q139.77-32.70 143.26-36.35L143.26-36.35L143.26-36.35Q150.40-43.99 162.18-43.99L162.18-43.99L162.18-43.99Q166.42-43.99 169.49-42.58L169.49-42.58L183.68-43.99L177.54-11.62L177.54-11.62Q177.29-10.62 177.29-8.80L177.29-8.80L177.29-8.80Q177.29-6.97 178.41-5.81L178.41-5.81L178.41-5.81Q179.53-4.65 181.19-4.48L181.19-4.48L181.19-4.48Q180.36-1.66 177.33 0L177.33 0L177.33 0Q174.30 1.66 170.90 1.66L170.90 1.66L170.90 1.66Q167.49 1.66 165.21 0.37L165.21 0.37L165.21 0.37Q162.93-0.91 162.27-3.07L162.27-3.07L162.27-3.07Q160.94-1.00 158.12 0.33L158.12 0.33L158.12 0.33Q155.29 1.66 151.52 1.66L151.52 1.66L151.52 1.66Q147.74 1.66 144.67 0.66L144.67 0.66L144.67 0.66Q141.60-0.33 139.65-2.49ZM157.16-36.19L157.16-36.19L157.16-36.19Q156.21-34.69 155.38-32.16L155.38-32.16L155.38-32.16Q154.55-29.63 153.18-22.87L153.18-22.87L153.18-22.87Q151.81-16.10 151.81-11.29L151.81-11.29L151.81-11.29Q151.81-6.47 152.55-5.06L152.55-5.06L152.55-5.06Q153.30-3.65 154.63-3.65L154.63-3.65L154.63-3.65Q157.28-3.65 159.24-6.18L159.24-6.18L159.24-6.18Q161.19-8.71 161.93-13.20L161.93-13.20L166.33-37.52L166.33-37.52Q164.59-39.01 162.56-39.01L162.56-39.01L162.56-39.01Q160.52-39.01 159.32-38.35L159.32-38.35L159.32-38.35Q158.12-37.68 157.16-36.19ZM220.61-55.36L220.61-55.36L220.61-55.36Q240.95-55.36 240.95-41.00L240.95-41.00L240.95-41.00Q240.95-33.12 235.89-28.39L235.89-28.39L235.89-28.39Q230.91-23.66 222.19-23.66L222.19-23.66L222.19-23.66Q218.12-23.66 214.97-25.98L214.97-25.98L214.97-25.98Q213.48-26.98 212.48-28.30L212.48-28.30L212.48-28.30Q218.54-28.30 221.73-32.00L221.73-32.00L221.73-32.00Q224.93-35.69 224.93-42.91L224.93-42.91L224.93-42.91Q224.93-50.13 217.79-50.13L217.79-50.13L215.80-50.13L215.80-50.13Q215.30-50.13 214.89-50.05L214.89-50.05L205.34 0L187.33 0L197.54-54.37L197.54-54.37Q206.42-55.20 211.57-55.28L211.57-55.28L211.57-55.28Q216.71-55.36 220.61-55.36ZM259.46 1.66L259.46 1.66L259.46 1.66Q241.20 1.66 241.20-15.52L241.20-15.52L241.20-15.52Q241.20-27.72 247.92-35.61L247.92-35.61L247.92-35.61Q255.06-43.99 267.43-43.99L267.43-43.99L267.43-43.99Q276.39-43.99 280.95-39.84L280.95-39.84L280.95-39.84Q285.52-35.69 285.52-26.98L285.52-26.98L285.52-26.98Q285.52-13.70 278.38-5.98L278.38-5.98L278.38-5.98Q271.41 1.66 259.46 1.66ZM261.62-34.45L261.62-34.45L261.62-34.45Q260.62-32.20 259.83-28.84L259.83-28.84L259.83-28.84Q259.04-25.48 258.05-20.17L258.05-20.17L258.05-20.17Q257.05-14.86 257.05-8.30L257.05-8.30L257.05-8.30Q257.05-6.14 257.76-4.73L257.76-4.73L257.76-4.73Q258.46-3.32 260.37-3.32L260.37-3.32L260.37-3.32Q262.28-3.32 263.48-4.23L263.48-4.23L263.48-4.23Q264.69-5.15 265.60-7.30L265.60-7.30L265.60-7.30Q267.26-11.12 268.59-18.22L268.59-18.22L268.59-18.22Q269.92-25.32 270.04-28.39L270.04-28.39L270.04-28.39Q270.17-31.46 270.17-33.74L270.17-33.74L270.17-33.74Q270.17-36.02 269.50-37.52L269.50-37.52L269.50-37.52Q268.84-39.01 266.97-39.01L266.97-39.01L266.97-39.01Q265.10-39.01 263.86-37.85L263.86-37.85L263.86-37.85Q262.61-36.69 261.62-34.45ZM352.34-13.86L352.34-13.86Q346.86-6.31 341.59-2.32L341.59-2.32L341.59-2.32Q336.32 1.66 330.88 1.66L330.88 1.66L330.88 1.66Q325.44 1.66 323.53 0.58L323.53 0.58L323.53-17.68L323.53-17.68Q318.80-5.06 310.34-0.17L310.34-0.17L310.34-0.17Q307.27 1.66 304.36 1.66L304.36 1.66L304.36 1.66Q298.80 1.66 296.39 0.58L296.39 0.58L296.39 0.58Q295.81-18.43 295.31-23.70L295.31-23.70L295.31-23.70Q294.82-28.97 294.40-32.20L294.40-32.20L294.40-32.20Q293.57-38.68 290.75-41.33L290.75-41.33L290.75-41.33Q294.32-43.99 299.30-43.99L299.30-43.99L299.30-43.99Q308.93-43.99 310.25-32.04L310.25-32.04L310.25-32.04Q310.59-29.22 310.59-26.23L310.59-26.23L310.59-26.23Q310.59-21.75 309.59-6.14L309.59-6.14L309.59-6.14Q311.58-7.06 313.70-10.33L313.70-10.33L313.70-10.33Q315.82-13.61 317.56-18.09L317.56-18.09L317.56-18.09Q321.46-28.47 321.46-37.43L321.46-37.43L321.46-37.43Q321.46-38.84 321.09-40.34L321.09-40.34L321.09-40.34Q320.71-41.83 320.30-42.25L320.30-42.25L320.30-42.25Q323.20-43.99 327.64-43.99L327.64-43.99L327.64-43.99Q332.08-43.99 334.20-40.96L334.20-40.96L334.20-40.96Q336.32-37.93 336.90-32.37L336.90-32.37L336.90-32.37Q337.56-25.32 337.56-21.08L337.56-21.08L337.56-21.08Q337.56-15.19 336.98-6.47L336.98-6.47L336.98-6.47Q341.13-9.46 344.53-19.26L344.53-19.26L344.53-19.26Q347.94-29.05 347.94-36.02L347.94-36.02L347.94-36.02Q347.94-39.09 347.44-40.92L347.44-40.92L347.44-40.92Q350.18-43.99 354.91-43.99L354.91-43.99L354.91-43.99Q357.81-43.99 359.93-42.41L359.93-42.41L359.93-42.41Q362.05-40.84 362.05-37.89L362.05-37.89L362.05-37.89Q362.05-34.94 361.17-31.79L361.17-31.79L361.17-31.79Q360.30-28.64 358.89-25.40L358.89-25.40L358.89-25.40Q356.15-18.92 352.34-13.86L352.34-13.86Z" fill="#ffd5af"></path></g></g><style>text {font-size: 64px; font-family: Arial Black; dominant-baseline: central; text-anchor: middle;}</style></svg>`;

  // Mint the NFT
  console.log("----- Minting an NFT -----");
  const [owner] = await ethers.getSigners();
  const tx = await nft.mintNFT(owner.address, svg);
  const receipt = await tx.wait();
  const tokenId = receipt.logs[0].args.tokenId; // Extract tokenId from event
  console.log("NFT minted with Token ID:", tokenId.toString());
  console.log("Owner:", await nft.ownerOf(tokenId));

  // Get and log the token URI
  const tokenURI = await nft.tokenURI(tokenId);
  console.log("Token URI:", tokenURI);
  console.log("----- Minting Complete -----");
}

main().catch((error) => {
  console.error("----- Error -----");
  console.error(error);
  process.exitCode = 1;
});