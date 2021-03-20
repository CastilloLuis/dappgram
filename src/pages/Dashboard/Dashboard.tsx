import React, { useEffect, useState } from 'react';

import { transformToBuffer } from '../../utils';
import ipfs from '../../../ipfs';

import {
  DashboardContainer,
  DashboardContent,
  UploadImage
} from './Dashboard.styles';
import { getAllImages, uploadImage } from '../../actions/drappgram.action';
import { Image } from '../../shared/entities';
import { UploadBox } from '../../components/UploadBox/UploadBox';
import { ImageBox } from '../../components/ImageBox/ImageBox';
import { TipModal } from '../../components/TipModal/TipModal';

interface DashboardProps {
  currentAccount: string;
}

export const Dashboard: React.FC<DashboardProps> = ({ currentAccount }) => {

  const [dashboardImages, setDashboardImages] = useState<Image[]>([]);
  const [showTipModal, setShowTipModal] = useState<boolean>(false);
  const [uploadingImage, setUploadingImage] = useState<boolean>(false);
  const [showUploadBox, setShowUploadBox] = useState<boolean>(false);

  useEffect(() => {
    detectImageUploaded();
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
      console.log(result);
      setDashboardImages(_ => [result.returnValues, ..._]);
    })
  }

  const onTipSelected = (value: number): void => {
    console.log(value);
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
                dashboardImages.map((image, idx) => (
                  <ImageBox
                    key={image.hash + idx++}
                    imageHash={image.hash}
                    description={image.description}
                    setShowTipModal={setShowTipModal}
                  />
                ))
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
    </DashboardContainer>
  )
}
