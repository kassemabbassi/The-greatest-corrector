import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FaBookOpen, FaArrowLeft, FaChevronDown, FaChevronUp } from "react-icons/fa";

// Function to apply styles to specific words
const applyProphetMentionStyle = (text) => {
  // Expressions régulières modifiées
  const prophetRegex = /ﷺ|رسول الله ﷺ|النبي ﷺ|النبوية|الأنبياء|الرسل/g;
  const quranRegex = /قرآنية|القرآن/g;
  const allahRegex = /(^|\s)الله($|\s|[^\u0621-\u064A])/g;
  
  // Modifié pour ne matcher que "مسلم" seul (avec ou sans espace autour)
  const referenceRegex = /الدلالة|رواه|البخاري|(^|\s)مسلم($|\s)|الترمذي|الصحيح/g;

  let styledText = text.replace(prophetRegex, (match) => 
    `<span class="prophet-mention">${match}</span>`
  );
  styledText = styledText.replace(quranRegex, (match) =>
    `<span class="quran-mention">${match}</span>`
  );
  styledText = styledText.replace(allahRegex, (match, before, after) =>
    `${before}<span class="allah-mention">الله</span>${after}`
  );
  styledText = styledText.replace(referenceRegex, (match, before, after) =>
    before ? `${before}<span class="reference-mention">مسلم</span>${after}` 
           : `<span class="reference-mention">${match}</span>`
  );

  return styledText;
};
export default function MistakeModel({ betise, reponse, isSelected, onClick }) {
  const [showContent, setShowContent] = useState(false);
  const [showCards, setShowCards] = useState(false);
  const [openSection, setOpenSection] = useState(null);

  useEffect(() => {
    if (isSelected) {
      setShowContent(true);
      const timer = setTimeout(() => setShowCards(true), 600);
      return () => clearTimeout(timer);
    } else {
      setShowContent(false);
      setShowCards(false);
      setOpenSection(null);
    }
  }, [isSelected]);

  const parseResponse = (text) => {
    const sections = [];
    const lines = text.split("\n").filter((line) => line.trim() !== "");
    let currentSection = null;

    lines.forEach((line) => {
      if (line.trim().startsWith("*")) {
        if (currentSection) sections.push(currentSection);
        currentSection = { title: line.trim().substring(1).trim(), content: [] };
      } else if (currentSection) {
        currentSection.content.push(line.trim());
      } else {
        if (!sections.intro) sections.intro = [];
        sections.intro.push(line.trim());
      }
    });

    if (currentSection) sections.push(currentSection);
    return sections;
  };

  const responseSections = parseResponse(reponse);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className={`w-full ${isSelected ? "min-h-screen" : ""}`}
      onClick={!isSelected ? onClick : undefined}
    >
      {!isSelected ? (
        <motion.div
          className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition duration-300 cursor-pointer"
          whileHover={{ y: -5 }}
        >
          <div className="flex items-center gap-4">
            <FaBookOpen className="w-8 h-8 text-[#6a994e]" />
            <p className="text-2xl sm:text-3xl text-[#4f772d] font-scheherazade font-semibold leading-relaxed">
              {betise}
            </p>
          </div>
        </motion.div>
      ) : (
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="bg-gradient-to-r from-[#4f772d] to-[#90a955] p-4 sm:p-6 shadow-md"
          >
            <div className="max-w-6xl mx-auto flex justify-between items-center">
              <motion.button
                onClick={onClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-white text-lg sm:text-xl font-tajawal font-bold py-2 px-6 rounded-full bg-white/20 hover:bg-white/30 transition flex items-center gap-2"
              >
                <FaArrowLeft className="w-5 h-5" />
                العودة
              </motion.button>
              <motion.h1
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-2xl sm:text-3xl md:text-4xl text-white font-bold font-amiri text-center"
              >
                {betise}
              </motion.h1>
              <div className="w-24"></div>
            </div>
          </motion.div>

          <div className="max-w-7xl mx-auto px-4 py-8">
            <AnimatePresence>
              {showContent && responseSections.intro && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: "easeOut" },
                  }}
                  className="mb-8 sm:mb-12 p-4 sm:p-6 md:p-8 bg-white rounded-xl shadow-lg"
                >
                  <div className="space-y-6 text-right" dir="rtl">
                    {responseSections.intro.map((paragraph, index) => (
                      <p
                        key={`intro-${index}`}
                        className="text-xl sm:text-2xl text-gray-800 font-scheherazade leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: applyProphetMentionStyle(paragraph) }}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {showCards && (
              <div className="space-y-8">
                {responseSections
                  .filter((s) => typeof s !== "string")
                  .map((section, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                      className="bg-white rounded-xl shadow-lg overflow-hidden"
                    >
                      <div
                        className="p-4 sm:p-6 cursor-pointer flex justify-between items-center"
                        onClick={() => toggleSection(index)}
                      >
                        <h3 className="text-xl sm:text-2xl font-bold text-[#d62828] font-tajawal">
                          {section.title}
                        </h3>
                        <motion.div
                          animate={{ rotate: openSection === index ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {openSection === index ? (
                            <FaChevronUp className="text-[#d62828]" />
                          ) : (
                            <FaChevronDown className="text-[#d62828]" />
                          )}
                        </motion.div>
                      </div>

                      <AnimatePresence>
                        {openSection === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div
                              className="p-4 sm:p-6 pt-0 space-y-3 text-right"
                              dir="rtl"
                            >
                              {section.content.map((paragraph, pIndex) => (
                                <p
                                  key={pIndex}
                                  className="text-lg sm:text-xl text-gray-800 font-scheherazade leading-relaxed"
                                  dangerouslySetInnerHTML={{ __html: applyProphetMentionStyle(paragraph) }}
                                />
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
              </div>
            )}
          </div>
        </div>
      )}
    </motion.div>
  );
}