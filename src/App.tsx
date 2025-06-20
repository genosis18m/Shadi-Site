import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Star, Sparkles, Calendar, Camera } from 'lucide-react';
import { HeroScrollDemo } from '@/components/HeroScrollDemo';

// Enhanced Marathi quotes with English translations
const loveQuotes = [
  {
    marathi: "प्रेम म्हणजे दोन हृदयांचा एकच ठोका",
    english: "Love is two hearts beating as one",
    id: 1
  },
  {
    marathi: "तुझ्याशिवाय माझे जीवन अधूरे आहे",
    english: "Without you, my life is incomplete",
    id: 2
  },
  {
    marathi: "आमचे प्रेम चांद्रातारांसारखे निरंतर आहे",
    english: "Our love is eternal like the moon and stars",
    id: 3
  },
  {
    marathi: "तू माझा साथी, मित्र आणि प्रेयसी आहेस",
    english: "You are my companion, friend, and beloved",
    id: 4
  },
  {
    marathi: "आमचे लग्न स्वर्गात ठरले होते",
    english: "Our marriage was made in heaven",
    id: 5
  },
  {
    marathi: "प्रेम हे जीवनातील सर्वात सुंदर भावना आहे",
    english: "Love is life's most beautiful emotion",
    id: 6
  },
  {
    marathi: "तेईस वर्षे, एकच प्रेम",
    english: "Twenty-three years, one love",
    id: 7
  },
  {
    marathi: "आमची प्रेमकहाणी कधीच संपणार नाही",
    english: "Our love story will never end",
    id: 8
  }
];

// Additional inspirational quotes for sections
const sectionQuotes = [
  {
    marathi: "प्रेमात वय नसते, फक्त भावना असते",
    english: "Love has no age, only emotions"
  },
  {
    marathi: "खरे प्रेम वेळेसोबत वाढत जाते",
    english: "True love grows with time"
  },
  {
    marathi: "आमचे बंध अजूनही मजबूत आहे",
    english: "Our bond is still strong"
  },
  {
    marathi: "प्रेमाची शक्ती अजेय आहे",
    english: "The power of love is invincible"
  },
  {
    marathi: "आमचे हृदय एकत्र धडधडते",
    english: "Our hearts beat together"
  }
];

// Enhanced Floating Hearts Component with more variety
const FloatingHearts = () => {
  const [hearts, setHearts] = useState<Array<{ 
    id: number; 
    left: number; 
    size: number; 
    color: string;
    delay: number;
  }>>([]);

  const heartColors = ['text-pink-400', 'text-red-400', 'text-rose-400', 'text-pink-500', 'text-red-500'];

  useEffect(() => {
    const interval = setInterval(() => {
      const newHeart = {
        id: Date.now() + Math.random(),
        left: Math.random() * 100,
        size: Math.random() * 25 + 15,
        color: heartColors[Math.floor(Math.random() * heartColors.length)],
        delay: Math.random() * 2
      };
      setHearts(prev => [...prev, newHeart]);
      
      setTimeout(() => {
        setHearts(prev => prev.filter(heart => heart.id !== newHeart.id));
      }, 6000);
    }, 600);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      <AnimatePresence>
        {hearts.map(heart => (
          <motion.div
            key={heart.id}
            initial={{ y: '100vh', opacity: 0, rotate: 0, scale: 0 }}
            animate={{ 
              y: '-20vh', 
              opacity: [0, 1, 1, 0],
              rotate: [0, 180, 360],
              scale: [0, 1, 1, 0],
              x: [0, 50, -30, 20, 0]
            }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ 
              duration: 6,
              ease: "easeOut",
              times: [0, 0.1, 0.8, 1],
              delay: heart.delay
            }}
            className="absolute"
            style={{ left: `${heart.left}%` }}
          >
            <Heart 
              className={`${heart.color} fill-current drop-shadow-lg`}
              style={{ width: heart.size, height: heart.size }}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

// Enhanced Floating Sparkles
const FloatingSparkles = () => {
  const [sparkles, setSparkles] = useState<Array<{ 
    id: number; 
    left: number; 
    top: number;
    size: number; 
    delay: number;
  }>>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newSparkle = {
        id: Date.now() + Math.random(),
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 15 + 10,
        delay: Math.random() * 3
      };
      setSparkles(prev => [...prev, newSparkle]);
      
      setTimeout(() => {
        setSparkles(prev => prev.filter(sparkle => sparkle.id !== newSparkle.id));
      }, 4000);
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      <AnimatePresence>
        {sparkles.map(sparkle => (
          <motion.div
            key={sparkle.id}
            initial={{ opacity: 0, scale: 0, rotate: 0 }}
            animate={{ 
              opacity: [0, 1, 1, 0],
              scale: [0, 1, 1.2, 0],
              rotate: [0, 180, 360]
            }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ 
              duration: 4,
              ease: "easeInOut",
              delay: sparkle.delay
            }}
            className="absolute"
            style={{ 
              left: `${sparkle.left}%`,
              top: `${sparkle.top}%`
            }}
          >
            <Sparkles 
              className="text-yellow-300 fill-current drop-shadow-lg"
              style={{ width: sparkle.size, height: sparkle.size }}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

// Enhanced Floating Balloon Component
const FloatingBalloon = ({ quote, delay }: { quote: typeof loveQuotes[0], delay: number }) => {
  return (
    <motion.div 
      className="absolute"
      style={{
        left: `${Math.random() * 80 + 10}%`,
        top: `${Math.random() * 60 + 20}%`
      }}
      initial={{ y: 100, opacity: 0, scale: 0 }}
      animate={{ 
        y: [0, -30, -15, 0],
        opacity: 1,
        scale: 1,
        rotate: [-3, 2, -1, -3]
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut"
      }}
    >
      <div className="relative group cursor-pointer">
        <motion.div 
          className="transform hover:scale-110 transition-transform duration-300"
          whileHover={{ scale: 1.2, y: -10 }}
          whileTap={{ scale: 0.9 }}
        >
          {/* Enhanced Balloon */}
          <div className="w-20 h-24 bg-gradient-to-b from-pink-400 via-rose-400 to-red-500 rounded-full relative shadow-2xl">
            <div className="absolute inset-2 bg-gradient-to-b from-pink-300 to-pink-400 rounded-full opacity-70"></div>
            <div className="absolute top-3 left-4 w-8 h-8 bg-white opacity-50 rounded-full"></div>
            <div className="absolute top-6 left-6 w-3 h-3 bg-white opacity-80 rounded-full"></div>
          </div>
          {/* String */}
          <div className="w-0.5 h-12 bg-gray-700 mx-auto shadow-sm"></div>
        </motion.div>
        
        {/* Enhanced Quote tooltip */}
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none z-50">
          <motion.div 
            className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border-2 border-pink-200 min-w-80"
            initial={{ scale: 0.8, y: 10 }}
            whileHover={{ scale: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-purple-800 font-bold text-lg mb-3 font-marathi">{quote.marathi}</p>
            <p className="text-pink-600 text-base italic font-body">{quote.english}</p>
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-l-10 border-r-10 border-t-10 border-transparent border-t-white/95"></div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

// Google Drive Video Component
const GoogleDriveVideo = ({ title, description, driveId, index }: {
  title: string;
  description: string;
  driveId: string;
  index: number;
}) => {
  return (
    <motion.div 
      className="bg-white/15 backdrop-blur-md rounded-3xl p-6 shadow-2xl border border-pink-200/30 hover:shadow-pink-500/20 transition-all duration-500 click-effect"
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: index * 0.2, duration: 0.8 }}
      whileHover={{ scale: 1.03, y: -8 }}
      viewport={{ once: true }}
    >
      <div className="relative overflow-hidden rounded-2xl mb-6 group">
        <iframe
          src={`https://drive.google.com/file/d/${driveId}/preview`}
          className="w-full h-64 rounded-2xl"
          allow="autoplay"
          title={title}
        ></iframe>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
      </div>
      <motion.h3 
        className="text-2xl font-bold text-white mb-3 font-elegant"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: index * 0.3 + 0.2 }}
      >
        {title}
      </motion.h3>
      <motion.p 
        className="text-pink-100 text-base font-body leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: index * 0.3 + 0.4 }}
      >
        {description}
      </motion.p>
    </motion.div>
  );
};

// Photo Upload Placeholder Component
const PhotoPlaceholder = ({ title, subtitle }: { title: string; subtitle?: string }) => {
  return (
    <motion.div 
      className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border-2 border-dashed border-pink-300/50 hover:border-pink-300 transition-all duration-300 click-effect"
      whileHover={{ scale: 1.02, borderColor: 'rgb(249 168 212)' }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="text-center space-y-4">
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <Camera className="w-16 h-16 text-pink-300 mx-auto" />
        </motion.div>
        <h3 className="text-2xl font-bold text-white font-elegant">{title}</h3>
        {subtitle && <p className="text-pink-200 font-body">{subtitle}</p>}
        <p className="text-pink-100 text-sm font-body">
          Replace this section with your beautiful photos
        </p>
      </div>
    </motion.div>
  );
};


function App() {
  return (
    <div className="min-h-screen relative overflow-hidden">

      {/* Ganesh Ji left */}
      <div className="absolute top-40 left-7 z-40 flex items-center">
        <img
          src="/Photos/ganeshji.png"
          alt="Ganesh Ji"
          style={{
            width: 300,
            height: 300,
            opacity: 0.7,
            pointerEvents: "none",
            userSelect: "none",
          }}
          className="block"
        />
      </div>
      {/* Ganesh Ji right (mirrored) */}
      <div className="absolute top-40 right-7 z-40 flex items-center">
        <img
          src="/Photos/ganeshji.png"
          alt="Ganesh Ji"
          style={{
            width: 300,
            height: 300,
            opacity: 0.7,
            pointerEvents: "none",
            userSelect: "none",
            transform: "scaleX(-1)",
          }}
          className="block"
        />
      </div>

      {/* Background and floating effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-pink-500 via-rose-500 via-red-400 to-pink-600 animate-gradient-shift"></div>
      <FloatingHearts />
      <FloatingSparkles />
      <div className="fixed inset-0 pointer-events-none z-20">
        {loveQuotes.map((quote, index) => (
          <FloatingBalloon 
            key={quote.id} 
            quote={quote} 
            delay={index * 2} 
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-30">
        {/* Hero Section */}
        <section className="min-h-screen">
          <HeroScrollDemo />
        </section>

        {/* Inspirational Quote Section */}
        <section className="py-20 px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="bg-white/15 backdrop-blur-md rounded-3xl p-12 border border-pink-200/30 relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute top-4 left-4">
                <Heart className="w-8 h-8 text-pink-300 fill-current opacity-30" />
              </div>
              <div className="absolute bottom-4 right-4">
                <Sparkles className="w-8 h-8 text-yellow-300 opacity-30" />
              </div>
              <motion.h3 
                className="text-4xl font-bold text-white mb-6 font-marathi"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {sectionQuotes[0].marathi}
              </motion.h3>
              <motion.p 
                className="text-xl text-pink-100 italic font-body"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {sectionQuotes[0].english}
              </motion.p>
            </motion.div>
          </motion.div>
        </section>

        {/* Responsive Video Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.h2 
                className="text-5xl font-bold text-white mb-6 font-elegant"
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                आमच्या लग्नाचे व्हिडिओ
              </motion.h2>
              <motion.p 
                className="text-pink-100 text-2xl italic font-body mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Our Wedding Videos
              </motion.p>
              <motion.div 
                className="flex items-center justify-center mt-6"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <Star className="w-6 h-6 text-yellow-300 fill-current" />
                <Star className="w-8 h-8 text-yellow-300 fill-current mx-3" />
                <Star className="w-6 h-6 text-yellow-300 fill-current" />
              </motion.div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Video 1 */}
              <div className="bg-[#FFD1E3] rounded-2xl p-4 shadow-md border-2 border-[#E75480] flex flex-col items-center">
                <h3 className="font-bold text-lg mb-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-100 via-pink-300 to-pink-700" style={{textShadow:'0 2px 8px #fff, 0 1px 1px #e75480'}}>श्रीमंत पूजन</h3>
                <div className="w-full aspect-video rounded-xl overflow-hidden border-2 border-pink-300 bg-black">
                  <iframe
                    src="https://drive.google.com/file/d/1MSW-qaKZFn4yqebM1gHpOT8y2JXfJPPd/preview"
                    className="w-full h-full"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    title="श्रीमंत पूजन"
                  ></iframe>
                </div>
              </div>
              {/* Video 2 */}
              <div className="bg-[#FFD1E3] rounded-2xl p-4 shadow-md border-2 border-[#E75480] flex flex-col items-center">
                <h3 className="font-bold text-lg mb-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-100 via-pink-300 to-pink-700" style={{textShadow:'0 2px 8px #fff, 0 1px 1px #e75480'}}>वरात</h3>
                <div className="w-full aspect-video rounded-xl overflow-hidden border-2 border-pink-300 bg-black">
                  <iframe
                    src="https://drive.google.com/file/d/17QkLS05IX4GVMdpsWR3SPHBGRpi-ywEa/preview"
                    className="w-full h-full"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    title="वरात"
                  ></iframe>
                </div>
              </div>
              {/* Video 3 */}
              <div className="bg-[#FFD1E3] rounded-2xl p-4 shadow-md border-2 border-[#E75480] flex flex-col items-center">
                <h3 className="font-bold text-lg mb-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-100 via-pink-300 to-pink-700" style={{textShadow:'0 2px 8px #fff, 0 1px 1px #e75480'}}>लग्न</h3>
                <div className="w-full aspect-video rounded-xl overflow-hidden border-2 border-pink-300 bg-black">
                  <iframe
                    src="https://drive.google.com/file/d/1h_msCOsqAzFlz89oN8na2T3-pybprLSD/preview"
                    className="w-full h-full"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    title="लग्न"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Another Enhanced Quote Section */}
        <section className="py-16 px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, rotateX: 20 }}
            whileInView={{ opacity: 1, rotateX: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/15 backdrop-blur-md rounded-3xl p-12 border border-pink-200/30 relative">
              <motion.h3 
                className="text-4xl font-bold text-white mb-6 font-marathi"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                {sectionQuotes[1].marathi}
              </motion.h3>
              <motion.p 
                className="text-xl text-pink-100 italic font-body"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {sectionQuotes[1].english}
              </motion.p>
            </div>
          </motion.div>
        </section>

        {/* Enhanced Still Going Strong Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              className="bg-white/20 backdrop-blur-md rounded-3xl p-12 border border-pink-200/30 shadow-2xl relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.div 
                className="absolute top-6 left-6"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Heart className="w-12 h-12 text-pink-300 fill-current opacity-20" />
              </motion.div>
              <motion.div 
                className="absolute bottom-6 right-6"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-10 h-10 text-yellow-300 opacity-20" />
              </motion.div>
              
              <motion.div 
                className="mb-8 flex justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
              >
                <img
                  src="/Photos/still_strong.jpg"
                  alt="Still Going Strong"
                  className="rounded-3xl border-4 border-pink-200 shadow-xl w-full max-w-xs md:max-w-sm"
                  style={{ maxHeight: 320, objectFit: 'cover' }}
                />
              </motion.div>

              <motion.h3 
                className="text-5xl font-bold text-white mb-4 font-elegant"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                Love not fading away
              </motion.h3>
              
              <motion.p 
                className="text-1.5xl text-pink-100 italic font-marathi"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                वय वाढलंय, पण प्रेम अजून तेच जुनं आणि खास आहे
              </motion.p>
              
              <motion.p 
                className="text-xl text-pink-200 italic font-body mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                We've aged, but our love is still the same—old and special.
              </motion.p> 

              <motion.div 
                className="flex items-center justify-center space-x-6"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1, type: "spring", stiffness: 200 }}
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Heart className="w-12 h-12 text-red-400 fill-current" />
                </motion.div>
                <span className="text-4xl font-bold text-white font-elegant">
                  संजीव ♥ दीपाली
                </span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                >
                  <Heart className="w-12 h-12 text-red-400 fill-current" />
                </motion.div>
              </motion.div>

              <motion.p 
                className="text-pink-200 text-lg mt-6 font-body"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.3 }}
              >
                23 Years of Love • Since 2002
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Final Quote Section */}
        <section className="py-16 px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 border border-pink-200/30">
              <motion.h3 
                className="text-4xl font-bold text-white mb-6 font-marathi"
                initial={{ opacity: 0, rotateY: 20 }}
                whileInView={{ opacity: 1, rotateY: 0 }}
                transition={{ delay: 0.2 }}
              >
                पूर्वी तिला गुलाब द्यायचो, आता pain balm देतो… प्रेमाचं evolution बघा!
              </motion.h3>
              <motion.p 
                className="text-xl text-pink-100 italic font-body"
                initial={{ opacity: 0, rotateY: -20 }}
                whileInView={{ opacity: 1, rotateY: 0 }}
                transition={{ delay: 0.4 }}
              >
                I used to give her roses, now I hand her pain balm… witness the evolution of love!
              </motion.p>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}

export default App;
