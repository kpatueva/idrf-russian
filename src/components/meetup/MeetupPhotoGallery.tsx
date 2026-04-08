import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import RevealSection from './RevealSection';

import photo1 from '../../assets/1O4A2410_resized.jpg';
import photo2 from '../../assets/1O4A2362_resized.jpg';
import photo3 from '../../assets/1O4A2195_resized.jpg';
import photo4 from '../../assets/1O4A2143_resized.jpg';
import photo5 from '../../assets/1O4A1955_resized.jpg';
import photo6 from '../../assets/081607.jpg';
import photo7 from '../../assets/081612.jpg';
import photo8 from '../../assets/081627.jpg';
import photo9 from '../../assets/081639.jpg';

interface Photo {
  id: number;
  src: string;
  alt: string;
}

const photos: Photo[] = [
  { id: 1, src: photo1, alt: 'IDRF мероприятие' },
  { id: 2, src: photo2, alt: 'IDRF мероприятие' },
  { id: 3, src: photo3, alt: 'IDRF мероприятие' },
  { id: 4, src: photo4, alt: 'IDRF мероприятие' },
  { id: 5, src: photo5, alt: 'IDRF мероприятие' },
  { id: 6, src: photo6, alt: 'IDRF мероприятие' },
  { id: 7, src: photo7, alt: 'IDRF мероприятие' },
  { id: 8, src: photo8, alt: 'IDRF мероприятие' },
  { id: 9, src: photo9, alt: 'IDRF мероприятие' },
];

export default function MeetupPhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (photo: Photo, index: number) => {
    setSelectedPhoto(photo);
    setCurrentIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
    document.body.style.overflow = 'unset';
  };

  const goToPrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : photos.length - 1;
    setCurrentIndex(newIndex);
    setSelectedPhoto(photos[newIndex]);
  };

  const goToNext = () => {
    const newIndex = currentIndex < photos.length - 1 ? currentIndex + 1 : 0;
    setCurrentIndex(newIndex);
    setSelectedPhoto(photos[newIndex]);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') goToPrevious();
    if (e.key === 'ArrowRight') goToNext();
  };

  return (
    <section id="gallery" className="py-20 bg-[#1A1A2E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealSection className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            Фото с прошлых мероприятий
          </h2>
          <div className="w-16 h-[3px] bg-[#FECE33] mx-auto" />
        </RevealSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {photos.map((photo, index) => (
            <RevealSection key={photo.id} delay={index * 60}>
              <div
                className="group relative overflow-hidden rounded-2xl cursor-pointer"
                onClick={() => openLightbox(photo, index)}
              >
                <div className="aspect-[4/3] overflow-hidden bg-white/5">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </RevealSection>
          ))}
        </div>
      </div>

      {selectedPhoto && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-10 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            aria-label="Закрыть"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-4 z-10 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            aria-label="Предыдущее фото"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-4 z-10 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            aria-label="Следующее фото"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          <div
            className="max-w-6xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />
            <div className="text-center mt-4">
              <p className="text-white/60 text-sm">
                {currentIndex + 1} / {photos.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
