import React, { useState } from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Heart, Sparkles, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const heroPhotos = [
  "/Photos/WhatsApp Image 2025-06-20 at 21.15.41_2e0c466f.jpg",
  "/Photos/WhatsApp Image 2025-06-20 at 21.15.42_89e8b3e5.jpg",
  "/Photos/WhatsApp Image 2025-06-20 at 21.15.43_2b38e96a.jpg",
  "/Photos/WhatsApp Image 2025-06-20 at 21.25.34_c899b820.jpg",
  "/Photos/WhatsApp Image 2025-06-20 at 21.15.44_e8e7dd6e.jpg",
  "/Photos/WhatsApp Image 2025-06-20 at 21.15.45_67f680a0.jpg",
  "/Photos/WhatsApp Image 2025-06-20 at 21.15.45_d9019950.jpg",
  "/Photos/WhatsApp Image 2025-06-20 at 21.15.46_1b6583ff.jpg",
  "/Photos/WhatsApp Image 2025-06-20 at 21.15.36_f81ef63b.jpg",
  "/Photos/WhatsApp Image 2025-06-20 at 21.15.37_8ed72600.jpg",
  "/Photos/WhatsApp Image 2025-06-20 at 21.15.38_34e3864b.jpg",
  "/Photos/WhatsApp Image 2025-06-20 at 21.15.38_f7dafee8.jpg",
  "/Photos/WhatsApp Image 2025-06-20 at 21.15.39_2aa71b9a.jpg",
  "/Photos/WhatsApp Image 2025-06-20 at 21.15.40_1230a481.jpg",
  "/Photos/WhatsApp Image 2025-06-20 at 21.15.40_c99b6cc8.jpg",
];

export function HeroScrollDemo() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            <div className="flex items-center justify-center space-x-4 mb-6">
              <Heart className="w-12 h-12 text-pink-500 fill-current animate-pulse" />
              <Sparkles className="w-10 h-10 text-yellow-400 animate-spin-slow" />
              <Heart className="w-12 h-12 text-red-500 fill-current animate-pulse" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-2xl font-elegant text-center">
              <span className="bg-gradient-to-r from-yellow-200 to-pink-200 bg-clip-text text-transparent">
                संजीव आणि दीपाली
              </span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-pink-100 font-marathi text-center">
              प्रेमाची २३ वर्षांची गाथा
            </p>
            
            <p className="text-lg md:text-xl text-pink-200 italic font-body text-center">
              23 Years of Love Story
            </p>
            
            <div className="flex items-center justify-center space-x-4 mt-8">
              <Calendar className="w-6 h-6 text-pink-200" />
              <div className="text-center">
                <p className="text-white text-xl font-semibold font-marathi">
                  २५ एप्रिल २००२
                </p>
                <p className="text-pink-100 text-base font-body">
                  April 25, 2002
                </p>
              </div>
            </div>
          </motion.div>
        }
      >
        <div className="relative h-full w-full">
          <motion.div 
            className="h-full w-full bg-gradient-to-br from-pink-50 to-rose-100 rounded-2xl border-4 border-pink-200/50 flex items-center justify-center relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {/* Decorative elements */}
            <div className="absolute top-4 left-4">
              <Heart className="w-8 h-8 text-pink-400 fill-current opacity-60" />
            </div>
            <div className="absolute top-4 right-4">
              <Heart className="w-8 h-8 text-red-400 fill-current opacity-60" />
            </div>
            <div className="absolute bottom-4 left-4">
              <Sparkles className="w-6 h-6 text-yellow-400 opacity-60" />
            </div>
            <div className="absolute bottom-4 right-4">
              <Sparkles className="w-6 h-6 text-yellow-400 opacity-60" />
            </div>
            
            {/* Photo Gallery */}
            <div className="w-full p-4">
              <h3 className="text-3xl font-bold text-pink-800 font-elegant mb-6 text-center">
                Wedding Memories
              </h3>
              
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 max-h-[30rem] overflow-y-auto p-2">
                {heroPhotos.map((src, idx) => (
                  <motion.div
                    key={src}
                    className="cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setLightboxSrc(src)}
                    onContextMenu={e => { 
                      e.preventDefault(); 
                      setLightboxSrc(src); 
                    }}
                  >
                    <img 
                      src={src}
                      alt={`Wedding memory ${idx + 1}`}
                      className="rounded-lg shadow-md w-full h-auto"
                      style={{ maxHeight: "150px" }}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </ContainerScroll>
      
      {/* Lightbox with Download Button */}
      {lightboxSrc && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightboxSrc(null)}
        >
          <div className="max-w-4xl w-full relative">
            {/* Download Button */}
            <a
              href={lightboxSrc}
              download="Sanjeev_Deepali_wedding_photo.jpg"
              className="absolute top-4 right-16 text-white bg-pink-600 hover:bg-pink-700 rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition"
              title="Download photo"
              onClick={e => e.stopPropagation()}
            >
              {/* Down Arrow SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
              </svg>
            </a>
            {/* Close Button */}
            <button 
              className="absolute top-4 right-4 text-white text-2xl bg-black/50 rounded-full w-10 h-10 flex items-center justify-center"
              onClick={() => setLightboxSrc(null)}
              title="Close"
            >
              ×
            </button>
            <img 
              src={lightboxSrc}
              alt="Enlarged view"
              className="w-full h-auto max-h-[80vh] object-contain"
              onClick={e => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
}
