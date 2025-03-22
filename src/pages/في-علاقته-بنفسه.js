import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import MistakeModel from "../components/MistakeModel";
import { FaArrowLeft } from "react-icons/fa";

const mistakesList = [
  {
    id: 1,
    betise: "خطأ سلوكي: الكذب",
    reponse: `
      الأساليب النبوية في التعامل مع الكذب عند الأطفال:
      1. توضيح خطورة الكذب بأسلوب لطيف
      كان النبي ﷺ يعلم الناس عواقب الكذب دون تعنيف، بل بأسلوب يجعلهم يدركون خطورته بأنفسهم.

      🔹 المثال من السنة:
      قال النبي ﷺ: "إياكم والكذب، فإن الكذب يهدي إلى الفجور، وإن الفجور يهدي إلى النار..." (رواه البخاري ومسلم).

      💡 التطبيق: إذا كذب الطفل، يمكن إخباره بلطف: "هل تعلم أن الصدق يجعل الناس يثقون بك أكثر؟ أما الكذب فيجعلهم يشكون في كلامك."

      2. القدوة الصالحة في الصدق
      كان النبي ﷺ قدوة في الصدق، وكان يُعرف بالصادق الأمين، وهذا جعل الصحابة يثقون به ويقتدون به.

      🔹 المثال من السنة:
      عندما سأل هرقل أبا سفيان عن النبي ﷺ، قال: "هل جربتم عليه كذبًا؟" فقال: "لا." (رواه البخاري).

      💡 التطبيق: يمكن تعليم الأطفال الصدق بأن يكون المربي نفسه صادقًا في كلامه ووعوده معهم.
    `,
  },
  // Ajoutez d'autres bêtises ici si nécessaire
];

export default function Home() {
  const [selectedMistake, setSelectedMistake] = useState(null);

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
            className="w-10 h-10  md:w-12 text-white"
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
      <h1 className="text-4xl md:text-5xl font-bold text-[#d4af37] font-scheherazade text-center mb-10 drop-shadow-lg">
        قائمة الأخطاء وتصحيحها
      </h1>

      {/* Liste des bêtises */}
      <AnimatePresence mode="wait">
        {!selectedMistake ? (
          <motion.div
            key="mistake-list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={`w-full max-w-6xl grid gap-6 ${
              mistakesList.length === 1
                ? "grid-cols-1 justify-center"
                : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            }`}
          >
            {mistakesList.map((mistake) => (
              <motion.div
                key={mistake.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                onClick={() => setSelectedMistake(mistake.id)}
                className={`cursor-pointer ${
                  mistakesList.length === 1 ? "mx-auto max-w-lg" : ""
                }`}
              >
                <MistakeModel
                  betise={mistake.betise}
                  reponse={mistake.reponse}
                  isSelected={false}
                />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="selected-mistake"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-6xl"
          >
            <MistakeModel
              betise={mistakesList.find((m) => m.id === selectedMistake).betise}
              reponse={mistakesList.find((m) => m.id === selectedMistake).reponse}
              isSelected={true}
              onClick={() => setSelectedMistake(null)}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bouton de retour */}
      {selectedMistake && (
        <motion.button
          onClick={() => setSelectedMistake(null)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 text-white text-xl md:text-2xl font-scheherazade font-bold py-3 px-6 rounded-full shadow-lg hover:text-[#c2a035] transition duration-300 flex items-center gap-3"
        >
          <FaArrowLeft className="w-6 h-6" />
          العودة إلى القائمة
        </motion.button>
      )}
    </div>
  );
}