"use client";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

interface GalleryLightboxProps {
  open: boolean;
  index: number;
  images: { src: string; alt: string }[];
  onClose: () => void;
}

export default function GalleryLightbox({ open, index, images, onClose }: GalleryLightboxProps) {
  return (
    <Lightbox
      open={open}
      close={onClose}
      index={index}
      slides={images.map(img => ({ src: img.src, alt: img.alt }))}
      plugins={[Zoom]}
      zoom={{ maxZoomPixelRatio: 4, scrollToZoom: true }}
      render={{
        buttonPrev: undefined,
        buttonNext: undefined,
      }}
    />
  );
}
