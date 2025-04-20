// pages/index.jsx

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

// Variants centralisés pour les animations hover / tap
const hoverVariants = {
  hover: { scale: 1.1, rotate: 5 },
  tap: { scale: 0.9 },
};
const hoverVariantsNeg = {
  hover: { scale: 1.1, rotate: -5 },
  tap: { scale: 0.9 },
};

// Composant Logo réutilisable (avec taille agrandie)
function Logo({ variants }) {
  return (
    <motion.div
      variants={variants}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full overflow-hidden shadow-lg transition-colors duration-300 hover:bg-opacity-80"
      style={{ backgroundColor: "#4f772d" }}
    >
      <Image
        src="/1.png"
        alt="Logo المصلح الأعظم"
        layout="fill"
        objectFit="contain"
        priority
      />
    </motion.div>
  );
}

export default function Home() {
  const router = useRouter();
  const [showCategories1, setShowCategories1] = useState(false);
  const [showCategories2, setShowCategories2] = useState(false);

  const toggleCategories1 = () => {
    setShowCategories1((v) => !v);
    setShowCategories2(false);
  };
  const toggleCategories2 = () => {
    setShowCategories2((v) => !v);
    setShowCategories1(false);
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-start p-4 sm:p-6 bg-white"
      dir="rtl"
    >
      {/* En-tête avec logos et titre */}
      <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
   {/* Logo à gauche - Version statique (comme du texte) */}
   <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 flex items-center justify-center">
  <Image
    src="/1.png"
    alt="Logo"
    width={112}  // Réduit depuis 128
    height={112} // Réduit depuis 128
    className="object-contain w-full h-full" // Ajouté pour une meilleure adaptation
  />
</div>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-[#4f772d] to-[#90a955] bg-clip-text text-transparent font-amiri text-center tracking-wide"
        >
          المصلح الأعظم
        </motion.h1>
        {/* Logo à droite */}
        {/* Logo à gauche - Version statique (comme du texte) */}
        <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 flex items-center justify-center">
  <Image
    src="/1.png"
    alt="Logo"
    width={112}  // Réduit depuis 128
    height={112} // Réduit depuis 128
    className="object-contain w-full h-full" // Ajouté pour une meilleure adaptation
  />
</div>

      </div>

      {/* Slogan */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-2xl sm:text-3xl md:text-4xl text-[#4f772d] font-bold mb-8 font-amiri italic text-center leading-relaxed"
      >
        على خُطاه أخطاء تُصحّح
      </motion.p>

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
            {/* Carte descriptive */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="w-full max-w-3xl bg-gray-100 rounded-xl p-6 md:p-8 shadow-xl text-right"
            >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="text-lg md:text-2xl text-gray-800 leading-relaxed font-amiri"
              >
                مرحبًا بكم في{" "}
                <strong className="text-[#4f772d]">"المُصلِح الأعظم"</strong>،
                موقع تربوي إصلاحي موجَّه للمعلِّمين وأولياء الأمور، يهدف إلى
                تصحيح الأخطاء التصوُّريَّة والسلوكيَّة لدى المتعلِّمين استنادًا
                إلى الأساليب النبويَّة الحكيمة. فنبينا{" "}
                <strong className="text-[#4f772d]">محمد ﷺ</strong> هو "المصلِّح
                الأعظم"، معلِّم البشريَّة الأوَّل، كفءٌ لا يُجارى، عالج الأخطاء
                برفقٍ وحزم، ووضع منهجًا خالدًا في التربية والتقويم يُنير درب كلِّ
                مربٍّ ومعلِّم.
                <br />
                لِنرتقِ معًا بأبنائنا نحو الفهم الصحيح والسلوك القويم!
              </motion.p>
            </motion.div>

            {/* Boutons de navigation */}
            <div className="flex flex-col sm:flex-row gap-6 mt-10 w-full max-w-3xl">
              <motion.button
                onClick={toggleCategories1}
                variants={{
                  hover: { scale: 1.05, rotate: 2 },
                  tap: { scale: 0.95 },
                }}
                whileHover="hover"
                whileTap="tap"
                className="bg-[#4f772d] text-white text-2xl font-amiri font-bold py-4 px-8 rounded-xl shadow-lg hover:bg-[#31572c] transition duration-300 flex-1"
              >
                الأخطاء التصورية
              </motion.button>
              <motion.button
                onClick={toggleCategories2}
                variants={{
                  hover: { scale: 1.05, rotate: -2 },
                  tap: { scale: 0.95 },
                }}
                whileHover="hover"
                whileTap="tap"
                className="bg-[#90a955] text-white text-2xl font-amiri font-bold py-4 px-8 rounded-xl shadow-lg hover:bg-[#7a9948] transition duration-300 flex-1"
              >
                الأخطاء السلوكية
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
            <div className="w-full max-w-4xl space-y-6">
              {[
                "في مجال العقيدة",
                "في مجال العبادات",
                "في مجال الأخلاق",
                "في مجال الهدي القرآني",
              ].map((category, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + idx * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const paths = [
                      "/conceptual-mistakes/relation-with-creed",
                      "/conceptual-mistakes/In-the-field-of-acts-of-worship",
                      "/conceptual-mistakes/In-the-field-of-ethics",
                      "/conceptual-mistakes/quranic-guidance",
                    ];
                    router.push(paths[idx]);
                  }}
                  className="bg-[#f0f4f8] rounded-xl p-6 shadow-lg text-center cursor-pointer hover:bg-[#e2e8f0] transition duration-300"
                >
                  <p className="text-2xl text-[#4f772d] font-amiri">
                    {category}
                  </p>
                </motion.div>
              ))}
            </div>
            <motion.button
              onClick={toggleCategories1}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-10 bg-[#4f772d] text-white text-2xl font-amiri font-bold py-4 px-8 rounded-xl shadow-lg hover:bg-[#31572c] transition duration-300"
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
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-3xl sm:text-4xl md:text-5xl bg-gradient-to-r from-[#4f772d] to-[#90a955] bg-clip-text text-transparent mb-8 font-amiri italic text-center"
            >
              الأخطاء السلوكية
            </motion.h2>
            <div className="w-full max-w-4xl space-y-6">
              {[
                "في علاقته بنفسه",
                "في علاقته بالآخرين(الأقران والمعلّمين)",
                "في علاقته بالممتلكات العامة",
              ].map((category, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + idx * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const paths = [
                      "/behavioral-mistakes/relation-with-self",
                      "/behavioral-mistakes/relation-with-others",
                      "/behavioral-mistakes/relation-with-public-property",
                    ];
                    router.push(paths[idx]);
                  }}
                  className="bg-[#f0f4f8] rounded-xl p-6 shadow-lg text-center cursor-pointer hover:bg-[#e2e8f0] transition duration-300"
                >
                  <p className="text-2xl text-[#4f772d] font-amiri">
                    {category}
                  </p>
                </motion.div>
              ))}
            </div>
            <motion.button
              onClick={toggleCategories2}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-10 bg-[#4f772d] text-white text-2xl font-amiri font-bold py-4 px-8 rounded-xl shadow-lg hover:bg-[#31572c] transition duration-300"
            >
              العودة إلى الصفحة الرئيسية
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
