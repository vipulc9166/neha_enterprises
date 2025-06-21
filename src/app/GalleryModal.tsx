"use client";
import { useState } from "react";
import Image from "next/image";

interface GalleryModalProps {
  src: string;
  alt: string;
  open: boolean;
  onClose: () => void;
}

export default function GalleryModal({ src, alt, open, onClose }: GalleryModalProps) {
  const [zoom, setZoom] = useState(1);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
      <div className="relative flex flex-col items-center">
        <button
          className="absolute top-2 right-2 bg-white rounded-full p-2 shadow text-xl font-bold z-10"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        <div className="flex gap-4 mb-2 z-10">
          <button
            className="bg-white rounded-full p-2 shadow text-lg font-bold"
            onClick={() => setZoom((z) => Math.max(0.5, z - 0.2))}
            aria-label="Zoom Out"
          >
            -
          </button>
          <span className="bg-white rounded px-3 py-1 shadow text-sm font-semibold">{Math.round(zoom * 100)}%</span>
          <button
            className="bg-white rounded-full p-2 shadow text-lg font-bold"
            onClick={() => setZoom((z) => Math.min(3, z + 0.2))}
            aria-label="Zoom In"
          >
            +
          </button>
        </div>
        <div className="overflow-auto max-h-[80vh] max-w-[90vw] flex items-center justify-center">
          <Image
            src={src}
            alt={alt}
            width={800}
            height={600}
            style={{ transform: `scale(${zoom})`, transition: "transform 0.2s" }}
            className="rounded-xl shadow bg-white"
            priority
          />
        </div>
      </div>
    </div>
  );
}
