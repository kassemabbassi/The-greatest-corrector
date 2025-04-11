import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const [showCategories1, setShowCategories1] = useState(false); // État pour الأخطاء التصورية
  const [showCategories2, setShowCategories2] = useState(false); // État pour الأخطاء السلوكية

  const toggleCategories1 = () => {
    setShowCategories1(!showCategories1);
    setShowCategories2(false); // Assure que l'autre section est masquée
  };

  const toggleCategories2 = () => {
    setShowCategories2(!showCategories2);
    setShowCategories1(false); // Assure que l'autre section est masquée
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-4 sm:p-6 bg-white" dir="rtl">
      {/* En-tête avec logos et titre */}
      <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
        {/* Logo à gauche : Étoile islamique */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-[#4f772d] rounded-full flex items-center justify-center shadow-lg hover:bg-[#31572c] transition duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 text-white"
          >
            <path
              fill="currentColor"
              d="M32 2l6 18h18l-14 10 6 18-16-12-16 12 6-18L8 20h18l6-18z"
            />
          </svg>
        </motion.div>

        {/* Titre principal */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-[#4f772d] to-[#90a955] bg-clip-text text-transparent font-amiri text-center tracking-wide"
        >
          المصلح الأعظم
        </motion.h1>

        {/* Logo à droite : Étoile islamique */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: -5 }}
          whileTap={{ scale: 0.9 }}
          className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-[#4f772d] rounded-full flex items-center justify-center shadow-lg hover:bg-[#31572c] transition duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 text-white"
          >
            <path
              fill="currentColor"
              d="M32 2l6 18h18l-14 10 6 18-16-12-16 12 6-18L8 20h18l6-18z"
            />
          </svg>
        </motion.div>
      </div>

      {/* Slogan (sous-titre) en vert et gras */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#4f772d] font-bold mb-8 font-amiri italic text-center leading-relaxed"
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
            {/* Description */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="w-full max-w-3xl bg-gray-100 rounded-lg p-4 sm:p-6 md:p-8 shadow-lg text-right"
            >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-800 leading-relaxed font-amiri"
              >
                مرحبًا بكم في <strong className="text-[#4f772d]">"المصلح الأعظم"</strong> — موقع تربوي إصلاحي موجه للمعلمين وأولياء الأمور، يهدف إلى تصحيح الأخطاء التصورية والسلوكية لدى المتعلمين استنادًا إلى الأساليب النبوية الحكيمة. فنبينا <strong className="text-[#4f772d]">محمد ﷺ</strong> هو <em>"المصلح الأعظم"</em>، معلم البشرية الأول، كفؤٌ لا يُجارى، عالج الأخطاء برفق وحزم، ووضع منهجًا خالدًا في التربية والتقويم يُنير درب كل مربي ومعلم. لنرتقِ معًا بأبنائنا نحو الفهم الصحيح والسلوك القويم!
              </motion.p>
            </motion.div>

            {/* Boutons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full max-w-3xl">
              {/* Bouton 1 : الأخطاء التصورية */}
              <motion.button
                onClick={toggleCategories1}
                whileHover={{ scale: 1.05, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#4f772d] text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-amiri font-bold py-3 px-6 rounded-lg shadow-md hover:bg-[#31572c] hover:shadow-lg transition duration-300 flex-1"
              >
                الأخطاء التصورية
              </motion.button>

              {/* Bouton 2 : الأخطاء السلوكية */}
              <motion.button
                onClick={toggleCategories2}
                whileHover={{ scale: 1.05, rotate: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#90a955] text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-amiri font-bold py-3 px-6 rounded-lg shadow-md hover:bg-[#7a9948] hover:shadow-lg transition duration-300 flex-1"
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
            {/* Liste des catégories pour الأخطاء التصورية */}
            <div className="w-full max-w-4xl space-y-6">
              {[
                "في مجال العقيدة",
                "في مجال العبادات",
                "في مجال الأخلاق",
                "في مجال الهدي القرآني",
              ].reduce((acc, category, index, arr) => {
                if (index % 2 === 0) {
                  const pair = [
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                      whileHover={{ scale: 1.05, rotate: 2 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        if (category === "في مجال العقيدة") {
                          router.push("/conceptual-mistakes/relation-with-creed");
                        } else if (category === "في مجال العبادات") {
                          router.push("/conceptual-mistakes/relation-with-worship");
                        } else if (category === "في مجال الأخلاق") {
                          router.push("/conceptual-mistakes/relation-with-ethics");
                        } else if (category === "في مجال الهدي القرآني") {
                          router.push("/conceptual-mistakes/relation-with-quranic-guidance");
                        }
                      }}
                      className="bg-[#f0f4f8] rounded-lg p-4 sm:p-6 shadow-lg text-center cursor-pointer hover:bg-[#e2e8f0] transition duration-300 w-full"
                    >
                      <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#4f772d] font-amiri">
                        {category}
                      </p>
                    </motion.div>,
                  ];

                  if (index + 1 < arr.length) {
                    const nextCategory = arr[index + 1];
                    pair.push(
                      <motion.div
                        key={index + 1}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + (index + 1) * 0.1, duration: 0.5 }}
                        whileHover={{ scale: 1.05, rotate: 2 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                          if (nextCategory === "في مجال العقيدة") {
                            router.push("/conceptual-mistakes/relation-with-creed");
                          } else if (nextCategory === "في مجال العبادات") {
                            router.push("/conceptual-mistakes/relation-with-worship");
                          } else if (nextCategory === "في مجال الأخلاق") {
                            router.push("/conceptual-mistakes/relation-with-ethics");
                          } else if (nextCategory === "في مجال الهدي القرآني") {
                            router.push("/conceptual-mistakes/relation-with-quranic-guidance");
                          }
                        }}
                        className="bg-[#f0f4f8] rounded-lg p-4 sm:p-6 shadow-lg text-center cursor-pointer hover:bg-[#e2e8f0] transition duration-300 w-full"
                      >
                        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#4f772d] font-amiri">
                          {nextCategory}
                        </p>
                      </motion.div>
                    );
                  }

                  acc.push(
                    <div
                      key={`group-${index}`}
                      className={`flex flex-col sm:flex-row ${pair.length === 1 ? "justify-center" : "justify-between"} gap-4 w-full`}
                    >
                      {pair}
                    </div>
                  );
                }
                return acc;
              }, [])}
            </div>

            {/* Bouton de retour */}
            <motion.button
              onClick={toggleCategories1}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 bg-[#4f772d] text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-amiri font-bold py-3 px-6 rounded-lg shadow-md hover:bg-[#31572c] hover:shadow-lg transition duration-300"
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
            {/* Titre des catégories pour الأخطاء السلوكية */}
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-2xl sm:text-3xl md:text-4xl bg-gradient-to-r from-[#4f772d] to-[#90a955] bg-clip-text text-transparent mb-8 font-amiri italic text-center leading-relaxed"
            >
              الأخطاء السلوكية
            </motion.h2>

            {/* Liste des catégories pour الأخطاء السلوكية */}
            <div className="w-full max-w-4xl space-y-6">
              {[
                "في علاقته بالممتلكات العامة",
                "في علاقته بالآخرين(الأقران والمعلّمين)",
                "في علاقته بنفسه",
              ].reduce((acc, category, index, arr) => {
                if (index % 2 === 0) {
                  const pair = [
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                      whileHover={{ scale: 1.05, rotate: 2 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        if (category === "في علاقته بنفسه") {
                          router.push("/behavioral-mistakes/relation-with-self");
                        } else if (category === "في علاقته بالآخرين(الأقران والمعلّمين)") {
                          router.push("/behavioral-mistakes/relation-with-others");
                        } else if (category === "في علاقته بالممتلكات العامة") {
                          router.push("/behavioral-mistakes/relation-with-public-property");
                        }
                      }}
                      className="bg-[#f0f4f8] rounded-lg p-4 sm:p-6 shadow-lg text-center cursor-pointer hover:bg-[#e2e8f0] transition duration-300 w-full"
                    >
                      <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#4f772d] font-amiri">
                        {category}
                      </p>
                    </motion.div>,
                  ];

                  if (index + 1 < arr.length) {
                    const nextCategory = arr[index + 1];
                    pair.push(
                      <motion.div
                        key={index + 1}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + (index + 1) * 0.1, duration: 0.5 }}
                        whileHover={{ scale: 1.05, rotate: 2 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                          if (nextCategory === "في علاقته بنفسه") {
                            router.push("/behavioral-mistakes/relation-with-self");
                          } else if (nextCategory === "في علاقته بالآخرين(الأقران والمعلّمين)") {
                            router.push("/behavioral-mistakes/relation-with-others");
                          } else if (nextCategory === "في علاقته بالممتلكات العامة") {
                            router.push("/behavioral-mistakes/relation-with-public-property");
                          }
                        }}
                        className="bg-[#f0f4f8] rounded-lg p-4 sm:p-6 shadow-lg text-center cursor-pointer hover:bg-[#e2e8f0] transition duration-300 w-full"
                      >
                        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#4f772d] font-amiri">
                          {nextCategory}
                        </p>
                      </motion.div>
                    );
                  }

                  acc.push(
                    <div
                      key={`group-${index}`}
                      className={`flex flex-col sm:flex-row ${pair.length === 1 ? "justify-center" : "justify-between"} gap-4 w-full`}
                    >
                      {pair}
                    </div>
                  );
                }
                return acc;
              }, [])}
            </div>

            {/* Bouton de retour */}
            <motion.button
              onClick={toggleCategories2}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 bg-[#4f772d] text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-amiri font-bold py-3 px-6 rounded-lg shadow-md hover:bg-[#31572c] hover:shadow-lg transition duration-300"
            >
              العودة إلى الصفحة الرئيسية
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}