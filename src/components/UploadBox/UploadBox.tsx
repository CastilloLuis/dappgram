import React, { useState } from 'react';
import {
  UploadBoxContainer,
  InputFieldContainer,
  UploadBoxImage,
  Button,
  GoBackLabel
} from './UploadBox.styles';

interface UploadBoxProps {
  setShowUploadBox: (value: boolean) => void;
  onUploadImage: (file: File, description: string) => void;
  loading: boolean;
}

export const UploadBox: React.FC<UploadBoxProps> = ({ onUploadImage, setShowUploadBox, loading }) => {
  const [fileToUpload, setFileToUpload] = useState<File>(null);
  const [inputFile, setInputFile] = useState<HTMLInputElement>(null);
  const [description, setDescription] = useState<string>('');
  const [preview, setPreview] = useState<string>('');

  const handleDescription = (value: string): void => {
    setDescription(value);
  }

  const generatePreview = (file: File): void => {
    if (!file) return;
    setFileToUpload(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  }

  return (
    <UploadBoxContainer>
      <UploadBoxImage onClick={() => !preview && inputFile.click()}>
        {
          preview ? (
            <>
              <span>Preview</span>
              <img src={preview} alt="Preview" />
            </>
          ) : (
            <>
            <i>📷</i>
            <span>Select your image</span>
            <input type="file" hidden ref={_ => setInputFile(_)} onChange={e => generatePreview(e.target.files[0])}/>
            </>
          )
        }
      </UploadBoxImage>
      <InputFieldContainer
        placeholder="Write your description"
        onChange={e => handleDescription(e.target.value)}
      />
      <Button
        type="button"
        disabled={description.length === 0 || !fileToUpload}
        onClick={() => onUploadImage(fileToUpload, description)}
      >
        <span>{loading ? 'Loading ...' : 'Upload'}</span>
      </Button>
      <GoBackLabel onClick={() => setShowUploadBox(false)}>Go back</GoBackLabel>
    </UploadBoxContainer>
  )
}
