import { useState } from 'react';

export default function ServiceImageSlider({ images, title, onImageClick, height = 'h-52' }) {
  const [idx, setIdx] = useState(0);
  const src = images[idx];
  const multi = images.length > 1;

  return (
    <div
      className={`relative overflow-hidden ${height} cursor-zoom-in`}
      onClick={() => onImageClick(src, title)}
    >
      <img
        src={src}
        alt={title}
        loading="lazy"
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        onError={e => { e.target.src = 'https://images.unsplash.com/photo-1560184897-ae75f418493e?w=400&q=80'; }}
      />

      {multi && (
        <>
          <button
            onClick={e => { e.stopPropagation(); setIdx(i => (i - 1 + images.length) % images.length); }}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white rounded-full w-7 h-7 flex items-center justify-center text-base font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10"
          >‹</button>
          <button
            onClick={e => { e.stopPropagation(); setIdx(i => (i + 1) % images.length); }}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white rounded-full w-7 h-7 flex items-center justify-center text-base font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10"
          >›</button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10">
            {images.map((_, i) => (
              <span
                key={i}
                className={`block h-1.5 rounded-full transition-all duration-300 ${i === idx ? 'w-4 bg-white' : 'w-1.5 bg-white/60'}`}
              />
            ))}
          </div>
        </>
      )}

      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <span className="text-white text-3xl drop-shadow">🔍</span>
      </div>
    </div>
  );
}
