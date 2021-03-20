// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.7.4;

contract Dappgram {

  string public name = "dappgram";
  uint public imagesCount = 0;
  // Store Images
  mapping(uint => Image) public images;
  struct Image {
    uint id;
    string hash;
    string description;
    uint tipAmount;
    address payable author;
  }

  // events
  event ImageUploaded(
    uint id, 
    string hash, 
    string description, 
    uint tipAmount, 
    address payable author
  );

  event ImageTipped(
    uint id, 
    string hash, 
    string description, 
    uint tipAmount, 
    address payable author
  );

  // Create Images
  function uploadImages(string memory _imgHash, string memory _description) public {
    require(bytes(_description).length > 0); // with a valid description
    require(bytes(_imgHash).length > 0); // with a valid img
    require(msg.sender != address(0)); // not a valid address

    imagesCount += 1; // Increment image id
    address payable sender = msg.sender;
    images[imagesCount] = Image(imagesCount, _imgHash, _description, 0, sender);
    emit ImageUploaded(imagesCount, _imgHash, _description, 0, sender);
  }

  // Tip Images
  function tipImageOwner(uint _id) public payable {
    require(_id > 0 && _id <= imagesCount);

    Image memory image = images[_id];
    address payable author = image.author;
    author.transfer(msg.value); // pay to the image's author
    image.tipAmount += msg.value;
    images[_id] = image;
    emit ImageTipped(
      _id,
      image.hash,
      image.description,
      image.tipAmount,
      author
    );
  }

}