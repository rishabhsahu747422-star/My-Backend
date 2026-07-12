const ImageKit = require("imagekit");

let storageInstance = new ImageKit({
  publicKey,
  privateKey,
  urlEndpoint,
});

const sendFile = async () => {
  return await storageInstance.upload({ file, fileName });
};

module.exports = sendFile;
