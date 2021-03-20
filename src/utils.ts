export const transformToBuffer = (file: File): Promise<Buffer> => {
  return new Promise((res, rej) => {
    const fileReader = new FileReader();
    fileReader.readAsArrayBuffer(file);
    fileReader.onload = () => {
      res(Buffer.from(fileReader.result as ArrayBuffer))
    }
    fileReader.onerror = () => rej('Error during buffering :(');
  });
}

export const getIpfsImage = (hash: string): string => {
  return `https://ipfs.infura.io/ipfs/${hash}`;
}
