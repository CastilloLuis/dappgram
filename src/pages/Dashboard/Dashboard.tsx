import React, { useEffect, useState } from 'react';

import { transformToBuffer } from '../../utils';
import ipfs from '../../../ipfs';

import {
  DashboardContainer,
  DashboardContent,
  UploadImage
} from './Dashboard.styles';
import { getAllImages, tipImageOwner, uploadImage } from '../../actions/drappgram.action';
import { Image } from '../../shared/entities';
import { UploadBox } from '../../components/UploadBox/UploadBox';
import { ImageBox } from '../../components/ImageBox/ImageBox';
import { TipModal } from '../../components/TipModal/TipModal';
import { Toastr } from '../../components/Toastr/Toastr';

interface DashboardProps {
  currentAccount: string;
}

export const Dashboard: React.FC<DashboardProps> = ({ currentAccount }) => {

  const [dashboardImages, setDashboardImages] = useState<Image[]>([]);
  const [showTipModal, setShowTipModal] = useState<boolean | number>(false);
  const [uploadingImage, setUploadingImage] = useState<boolean>(false);
  const [showUploadBox, setShowUploadBox] = useState<boolean>(false);
  const [toastrMessage, setToastrMessage] = useState<string>(null);

  useEffect(() => {
    detectImageUploaded();
    detectImageTipped();
    getDashboardImages();
  }, []);
  
  const getDashboardImages = async (): Promise<void> => {
    const images = await getAllImages();
    setDashboardImages(images);
  }

  const onUploadImage = async (file: File, description: string): Promise<void> => {
    setUploadingImage(true);
    const bufferedFile = await transformToBuffer(file);
    try {
      const result = await ipfs.add(bufferedFile as any);
      await uploadImage(result.path, description, currentAccount);
      setShowUploadBox(false);
      setUploadingImage(false);
    } catch (e) {
      setUploadingImage(false);
      throw new Error(`😔 ${e}`);
    }
  }

  const detectImageUploaded = (): void => {
    const imageUploaded = window.contracts.dappgram.ImageUploaded;
    imageUploaded({}, async (err, result) => {
      if (err) throw new Error(err);
      setDashboardImages(_ => [result.returnValues, ..._]);
    })
  }

  const detectImageTipped = (): void => {
    const imageTipped = window.contracts.dappgram.ImageTipped;
    imageTipped({}, async (err, result) => {
      if (err) throw new Error(err);
      getDashboardImages();
      const tipReceived = `${result.returnValues.tipAmount}`;
      setToastrMessage(`You received a tip of ${window.web3.utils.fromWei(tipReceived, 'ether')} eth`);
      setTimeout(() => {
        setToastrMessage(null);
      }, 3000);
    });
  }

  const onTipSelected = async (value: number): Promise<void> => {
    await tipImageOwner(`${showTipModal}`, currentAccount, `${value}`);
    setShowTipModal(false);
  }

  return (
    <DashboardContainer>
      {showUploadBox && (
        <>
          <UploadBox
            setShowUploadBox={setShowUploadBox}
            onUploadImage={onUploadImage}
            loading={uploadingImage}
          />
        </>
      )}
      {
        !showUploadBox && (
          <>
            <DashboardContent>
              {
                dashboardImages.reverse().map((image, idx) => (
                  <ImageBox
                    key={image.hash + idx++}
                    imageHash={image.hash}
                    description={image.description}
                    tip={`${image.tipAmount}`}
                    isAuthor={image.author === currentAccount}
                    setShowTipModal={() => setShowTipModal(image.id)}
                  />
                ))
              }
              {
                dashboardImages.length === 0 && <span>Empty Dashboard</span>
              }
            </DashboardContent>
            <UploadImage onClick={() => setShowUploadBox(true)}>+</UploadImage>
          </>
        )
      }
      {showTipModal && (
        <TipModal 
          onTipSelected={onTipSelected}
          setShowTipModal={setShowTipModal}
        />
      )}
      {toastrMessage && (
        <Toastr message={toastrMessage} />
      )}
    </DashboardContainer>
  )
}
