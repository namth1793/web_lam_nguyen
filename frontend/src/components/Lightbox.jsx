import { useEffect } from 'react';

const isVideo = (src) => src && src.match(/\.(mp4|webm|ogg)$/i);

export default function Lightbox({ image, title, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center"
        onClick={e => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white/80 hover:text-white transition-colors text-4xl leading-none"
          aria-label="Close"
        >
          &times;
        </button>

        {isVideo(image) ? (
          <video
            src={image}
            controls
            autoPlay
            className="rounded-2xl max-h-[80vh] w-full shadow-2xl bg-black"
          />
        ) : (
          <img
            src={image}
            alt={title}
            className="rounded-2xl max-h-[80vh] w-full object-contain shadow-2xl"
          />
        )}

        {/* Title */}
        {title && (
          <p className="mt-4 text-white font-display font-semibold text-lg text-center drop-shadow">
            {title}
          </p>
        )}
      </div>
    </div>
  );
}
