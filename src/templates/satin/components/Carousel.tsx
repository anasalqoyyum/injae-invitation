export const Carousel = ({ images }: { images: string[] }) => {
  return (
    <div id="default-carousel" className="relative w-full rounded-xl border-4 md:border-8 border-satin-900" data-carousel="slide">
      <div className="relative h-56 overflow-hidden rounded-lg md:h-[32rem]">
        {images.map((image, idx) => (
          <div key={idx + 'z'} className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src={image} className="absolute top-3/4 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2" alt="..." />
          </div>
        ))}
      </div>
      <div className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 space-x-3">
        <button type="button" className="h-3 w-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        {images.slice(1).map((_, idx) => (
          <button
            key={idx + 'a'}
            type="button"
            className="h-3 w-3 rounded-full"
            aria-current="false"
            aria-label={`Slide ${idx + 1}`}
            data-carousel-slide-to={idx}
          />
        ))}
      </div>
      <button
        type="button"
        className="group absolute top-0 left-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
        data-carousel-prev>
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10">
          <svg
            aria-hidden="true"
            className="h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="group absolute top-0 right-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
        data-carousel-next>
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10">
          <svg
            aria-hidden="true"
            className="h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  )
}
