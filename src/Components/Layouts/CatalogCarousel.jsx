import React, { useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const CatalogCarousel = ({ items }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollAmount = container.offsetWidth * 0.8;

    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative w-full">
      {/* Botão Esquerda */}
      <button
        className="absolute left-0 top-1/2 z-10 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black"
        onClick={() => scroll("left")}
      >
        <ChevronLeft />
      </button>

      {/* Container Scroll */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto scroll-smooth gap-4 no-scrollbar py-3"
      >
        {items.map((item, index) => {
          const highResCoverUrl = item.cover_url.replace(
            "t_thumb",
            "t_cover_big"
          );
          return (
            <div
              key={index}
              className="min-w-[200px] flex flex-col p-3 rounded-lg overflow-hidden bg-background-secondary text-white"
            >
              <div className="overflow-hidden rounded-xl group">
                <img
                  src={highResCoverUrl}
                  alt={item.name}
                  className="w-full h-[200px] object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
              </div>
              <div className="py-2 flex justify-between truncate overflow-hidden">
                <h3
                  className="text-sm font-semibold truncate whitespace-nowrap overflow-hidden"
                  title={item.name}
                >
                  {item.name}
                </h3>
              </div>
              <div>
                <h3 className="text-xs font-semibold text-gray-500">
                  {item.genres.length > 0
                    ? item.genres[0].name
                    : "No genre available"}
                </h3>
              </div>
              {item.total_rating && (
                <div className="flex flex-row-reverse items-center mt-auto">
                  <h5 className="text-sm">{item.total_rating.toFixed(2)}%</h5>
                  <Star
                    fill="#ebb740"
                    strokeWidth={0}
                    className="mx-1 w-4 fill"
                  ></Star>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Botão Direita */}
      <button
        className="absolute right-0 top-1/2 z-10 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black"
        onClick={() => scroll("right")}
      >
        <ChevronRight />
      </button>
    </div>
  );
};

export default CatalogCarousel;
