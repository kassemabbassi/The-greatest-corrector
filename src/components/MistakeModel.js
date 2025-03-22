import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaBookOpen, FaArrowDown } from "react-icons/fa";

export default function MistakeModel({ betise, reponse, isSelected, onClick }) {
  const [showReponse, setShowReponse] = useState(false);

  // Fonction pour styliser le texte avec النبي ﷺ
  const formatTextWithProphet = (text) => {
    return text.split(/(النبي ﷺ)/).map((part, index) => {
      if (part === "النبي ﷺ") {
        return (
          <span
            key={index}
            className="text-[#d4af37] font-bold px-2 py-1 rounded-md shadow-sm"
          >
            {part}
          </span>
        );
      }
      return part;
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className={`w-full rounded-xl p-6 shadow-xl transition duration-300 border-2 border-[#4f772d] border-opacity-50 relative overflow-hidden ${
        isSelected ? "cursor-default" : "cursor-pointer hover:shadow-2xl"
      }`}
      onClick={!isSelected ? onClick : undefined}
    >
      {/* Bordure décorative islamique (effet subtil) */}
      <div className="absolute inset-0 border-2 border-[#d4af37] border-opacity-20 rounded-xl pointer-events-none" />

      {/* En-tête */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <FaBookOpen className="w-8 h-8 text-[#d4af37] drop-shadow-md" />
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-2xl md:text-3xl text-white font-scheherazade font-semibold tracking-wide"
          >
            {betise}
          </motion.p>
        </div>

        {/* Bouton Réponse */}
        {isSelected && (
          <motion.button
            onClick={() => setShowReponse(!showReponse)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-white text-xl md:text-2xl font-scheherazade font-bold py-2 px-6 rounded-full shadow-md hover:text-[#d4af37] transition duration-300 flex items-center gap-2"
          >
            <FaArrowDown
              className={`w-5 h-5 transition-transform ${
                showReponse ? "rotate-180" : ""
              }`}
            />
            {showReponse ? "إخفاء" : "إظهار"}
          </motion.button>
        )}
      </div>

      {/* Réponse */}
      <AnimatePresence>
        {isSelected && showReponse && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-6 p-8 rounded-lg border border-[#d4af37] border-opacity-30"
          >
            <div className="space-y-6 text-right" dir="rtl">
              {reponse.split("\n").map((paragraph, index) => (
                <p
                  key={index}
                  className={`text-xl md:text-2xl text-[#e8edc8] font-scheherazade leading-relaxed tracking-wide ${
                    paragraph.startsWith("🔹") || paragraph.startsWith("💡")
                      ? "pr-6 text-[#d4af37] font-bold"
                      : ""
                  }`}
                >
                  {formatTextWithProphet(paragraph)}
                </p>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}