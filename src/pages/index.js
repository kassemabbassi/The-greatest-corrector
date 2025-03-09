import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [showCategories1, setShowCategories1] = useState(false); // État pour الأخطاء التصورية
  const [showCategories2, setShowCategories2] = useState(false); // État pour الأخطاء المعرفية

  // Fonction pour basculer entre la page d'accueil et les catégories
  const toggleCategories1 = () => {
    setShowCategories1(!showCategories1);
    setShowCategories2(false); // Assure que l'autre section est masquée
  };

  const toggleCategories2 = () => {
    setShowCategories2(!showCategories2);
    setShowCategories1(false); // Assure que l'autre section est masquée
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-6" dir="rtl">
      {/* En-tête avec logos et titre */}
      <div className="w-full flex items-center justify-center gap-4 mb-8">
        {/* Premier logo (à gauche) */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          className="w-16 h-16 md:w-20 md:h-20 bg-[#4f772d] rounded-full flex items-center justify-center shadow-lg hover:bg-[#31572c] transition duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-10 h-10 md:w-12 md:w-12 text-white"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </motion.div>

        {/* Titre */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl md:text-7xl font-bold text-[#90a955] font-scheherazade text-center tracking-wide hover:text-[#7a9948] transition duration-300"
        >
          المصلح الأعظم
        </motion.h1>

        {/* Deuxième logo (à droite) */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: -5 }}
          whileTap={{ scale: 0.9 }}
          className="w-16 h-16 md:w-20 md:h-20 bg-[#4f772d] rounded-full flex items-center justify-center shadow-lg hover:bg-[#31572c] transition duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-10 h-10 md:w-12 md:w-12 text-white"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </motion.div>
      </div>

      {/* Contenu principal */}
      <AnimatePresence mode="wait">
        {!showCategories1 && !showCategories2 ? (
          <motion.div
            key="home"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full flex flex-col items-center"
          >
            {/* Slogan (sous le titre) */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-3xl md:text-4xl text-[#d4af37] mb-8 font-scheherazade italic text-center leading-relaxed hover:text-[#c2a035] transition duration-300"
            >
              على خُطاه أخطاء تُصحّح
            </motion.p>

            {/* Description (paragraphe structuré) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="max-w-3xl bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-8 shadow-lg text-right hover:bg-opacity-20 transition duration-300"
            >
              <p className="text-xl md:text-2xl text-white leading-loose font-scheherazade">
                مرحبًا بكم في "المصلح الأعظم" — موقع تربوي إصلاحي موجه للمعلمين وأولياء الأمور، يهدف إلى تصحيح الأخطاء التصورية والسلوكية لدى المتعلمين استنادًا إلى الأساليب النبوية الحكيمة. فنبينا <span className="text-[#d4af37] font-bold">محمد ﷺ</span> هو "المصلح الأعظم"، معلم البشرية الأول، كفؤٌ لا يُجارى، عالج الأخطاء برفق وحزم، ووضع منهجًا خالدًا في التربية والتقويم يُنير درب كل مربي ومعلم.
                <br />
                <br />
                لنرتقِ معًا بأبنائنا نحو الفهم الصحيح والسلوك القويم!
              </p>
            </motion.div>

            {/* Boutons */}
            <div className="flex flex-col md:flex-row gap-4 mt-8">
              {/* Bouton 1 : الأخطاء التصورية */}
              <motion.button
                onClick={toggleCategories1}
                whileHover={{ scale: 1.05, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#4f772d] text-white text-xl md:text-2xl font-scheherazade font-bold py-3 px-6 rounded-lg shadow-md hover:bg-[#31572c] hover:shadow-lg transition duration-300"
              >
                الأخطاء التصورية
              </motion.button>

              {/* Bouton 2 : الأخطاء المعرفية */}
              <motion.button
                onClick={toggleCategories2}
                whileHover={{ scale: 1.05, rotate: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#d8e29a] text-gray-800 text-xl md:text-2xl font-scheherazade font-bold py-3 px-6 rounded-lg shadow-md hover:bg-[#b5c97a] hover:text-gray-900 hover:shadow-lg transition duration-300"
              >
                الأخطاء المعرفية
              </motion.button>
            </div>
          </motion.div>
        ) : showCategories1 ? (
          <motion.div
            key="categories1"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full flex flex-col items-center"
          >
            {/* Titre des catégories */}
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold text-[#90a955] font-scheherazade text-center mb-8"
            >
              اختر مجال التصحيح
            </motion.h2>

            {/* Liste des catégories */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
              {[
                "في مجال العقيدة",
                "في مجال العبادات",
                "في مجال الأخلاق",
                "في مجال الهدي القرآني",
              ].map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-6 shadow-lg text-center cursor-pointer hover:bg-opacity-20 transition duration-300"
                >
                  <p className="text-2xl md:text-3xl text-white font-scheherazade">
                    {category}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Bouton de retour */}
            <motion.button
              onClick={toggleCategories1}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 bg-[#d4af37] text-white text-xl md:text-2xl font-scheherazade font-bold py-3 px-6 rounded-lg shadow-md hover:bg-[#c2a035] hover:shadow-lg transition duration-300"
            >
              العودة إلى الصفحة الرئيسية
            </motion.button>
          </motion.div>
        ) : (
          <motion.div
            key="categories2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full flex flex-col items-center"
          >
            {/* Titre des catégories */}
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold text-[#90a955] font-scheherazade text-center mb-8"
            >
              اختر مجال التصحيح
            </motion.h2>

            {/* Liste des catégories */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
              {[
                "في علاقته بنفسه",
                "في علاقته بأقرانه",
                "في علاقته بالمعلم",
                "في علاقته بالممتلكات العامة",
              ].map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-6 shadow-lg text-center cursor-pointer hover:bg-opacity-20 transition duration-300"
                >
                  <p className="text-2xl md:text-3xl text-white font-scheherazade">
                    {category}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Bouton de retour */}
            <motion.button
              onClick={toggleCategories2}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 bg-[#d4af37] text-white text-xl md:text-2xl font-scheherazade font-bold py-3 px-6 rounded-lg shadow-md hover:bg-[#c2a035] hover:shadow-lg transition duration-300"
            >
              العودة إلى الصفحة الرئيسية
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}