import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaBookOpen, FaArrowDown } from "react-icons/fa";

export default function MistakeModel({ betise, reponse, isSelected, onClick }) {
  const [showReponse, setShowReponse] = useState(false);

  // Fonction pour styliser le texte avec النبي ﷺ
  const formatTextWithProphet = (text) => {
    const prophetMentions = [
      "النبي ﷺ", "رسول الله ﷺ", "الرسول ﷺ","ﷺ", 
      "محمد ﷺ", "رسولنا ﷺ", "نبينا ﷺ",
      "الحبيب ﷺ", "خاتم النبيين ﷺ"
    ];
  
    let result = [];
    let lastIndex = 0;
    
    // Trouver toutes les occurrences
    for (let i = 0; i < text.length; i++) {
      for (const mention of prophetMentions) {
        if (text.startsWith(mention, i)) {
          // Ajouter le texte avant la mention
          if (i > lastIndex) {
            result.push(text.substring(lastIndex, i));
          }
          
          // Ajouter la mention stylisée
          result.push(
            <span key={i} className="text-[#4f772d] font-bold px-1 py-0.5 rounded-md bg-[#e8edc8]">
              {mention}
            </span>
          );
          
          i += mention.length - 1;
          lastIndex = i + 1;
          break;
        }
      }
    }
    
    // Ajouter le reste du texte
    if (lastIndex < text.length) {
      result.push(text.substring(lastIndex));
    }
    
    return result;
  };

  // Fonction pour styliser les paragraphes
  const formatParagraph = (paragraph) => {
    // D'abord vérifier si le paragraphe commence par *
    if (paragraph.trim().startsWith("*")) {
      return (
        <span className="text-[#d62828] font-bold  bg-[#f8edeb] px-3 py-1 rounded-lg inline-block font-tajawal">
          {formatTextWithProphet(paragraph.substring(1).trim())}
        </span>
      );
    }
    
    
    // Ensuite vérifier les autres cas
    if (paragraph.startsWith("🔹") || paragraph.startsWith("💡")) {
      return (
        <span className="pr-6 text-[#4f772d] font-bold font-amiri">
          {formatTextWithProphet(paragraph)}
        </span>
      );
    }
    
    // Cas par défaut
    return formatTextWithProphet(paragraph);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className={`w-full rounded-xl p-6 shadow-lg transition duration-300 ${
        isSelected
          ? "bg-white border-2 border-[#4f772d]"
          : "bg-white hover:bg-gray-50 cursor-pointer"
      }`}
      onClick={!isSelected ? onClick : undefined}
    >
      {/* En-tête */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <FaBookOpen className="w-8 h-8 text-[#6a994e]" />
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-2xl md:text-3xl text-[#6a994e] font-scheherazade font-semibold tracking-wide"
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
            className="text-white text-xl md:text-2xl font-tajawal font-bold py-2 px-6 rounded-full shadow-md bg-[#6a994e] hover:bg-[#5a7f3e] transition duration-300 flex items-center gap-2"
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
            className="mt-6 p-6 rounded-lg bg-gray-50 border border-[#4f772d] border-opacity-30"
          >
            <div className="space-y-6 text-right" dir="rtl">
              {reponse.split("\n").map((paragraph, index) => (
                <p
                  key={index}
                  className="text-xl md:text-2xl text-gray-800 font-scheherazade leading-relaxed tracking-wide"
                >
                  {formatParagraph(paragraph)}
                </p>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}