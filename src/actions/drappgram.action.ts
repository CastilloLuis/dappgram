import { Image } from "../shared/entities";

export async function getImagesCount(): Promise<number> {
  const contract = window.contracts.dappgram;
  const imagesCount = await contract.imagesCount.call();
  return parseInt(imagesCount);
}

export async function uploadImage(
  imgHash: string, 
  description: string, 
  from: string
): Promise<void> {
  const contract = window.contracts.dappgram;
  await contract.uploadImages(imgHash, description, { from });
}

export async function getAllImages(): Promise<Image[]> {
  const contract = window.contracts.dappgram;
  const total = await getImagesCount();
  const idxArray = Array.apply( null, { length: total } );
  const images = await Promise.all(idxArray.map(async (_, i) => {
    const img = await contract.images(i+1);
    return img;
  })) as Image[];
  return images;
}

export async function tipImageOwner(imageId: string, from: string, value: string): Promise<void> {
  const contract = window.contracts.dappgram;
  await contract.tipImageOwner(imageId, { from, value: window.web3.utils.toWei(value) });
}