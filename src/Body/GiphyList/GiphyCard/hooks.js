import { useState } from "react";
import { saveAs } from "file-saver";

export const useHooks = (data) => {
  const [isCopied, setIsCopied] = useState(false);
  const openWindow = () => {
    window.open(data?.url);
  };

  const downloadImage = () => {
    saveAs(data.images.original.url, `${data.title}.gif`);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(data?.url);
    setIsCopied(!isCopied);
  };

  const handleMouseLeave = () => {
    setIsCopied(false);
  };
  return { isCopied, openWindow, downloadImage, handleCopy, handleMouseLeave };
};
