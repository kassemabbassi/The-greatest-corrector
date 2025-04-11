import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import MistakeModel from "../../components/MistakeModel";
import { FaArrowLeft } from "react-icons/fa";

const mistakesList = [

  {
    id: 21,
    betise: "الخلط بين صنع الله وصنع الإنسان، كعدم التمييز بين قدرة الله الشاملة ومحدودية قدرة البشر",
    reponse: `
    الأساليب النبوية في توضيح الفرق بين صنع الله المطلق وصنع الإنسان المحدود
  *  التحدي لبيان العجز البشري عن الخلق
  📖 الحديث:
  قال الله تعالى في الحديث القدسي: "ومن أظلم ممن ذهب يخلق كخلقي، فليخلقوا ذرة..."
  رواه البخاري في صحيحه (5953) 
  🔎 الدلالة:
  النبي ﷺ ينقل التحدي الإلهي للخلق البشري، ليُثبت الفارق بين الصنعة البشرية وخلق الله الحقيقي. تربويًا، يُنقّي المفاهيم التقنية في عقل الطفل ويضعها في حجمها.
  🏠📚 تطبيق في البيت أو القسم:
  يعرض المربي نبتتين: حبة حقيقية نمت، وأخرى بلاستيكية لم تنبت.
  ثم يقول: "الناس يصنعون الشكل، لكن الحياة لا يعطيها إلا الله."
  
  *  إثارة التساؤل لتحفيز التفكير
  📖 الحديث:
  قال ﷺ:
  "من خلق السماء؟" قالوا: الله.
  قال: "فمن خلق الأرض؟" قالوا: الله.
  قال: "فمن خلق الجبال؟" قالوا: الله...
  ثم قال لهم: "أفلا تتقون؟"
  رواه أحمد في مسنده (صحيح)
  🔎 الدلالة:
  النبي ﷺ استخدم أسلوب التساؤل المتدرّج الذي يوجّه العقل خطوة بخطوة نحو الاعتراف بقدرة الله المطلقة. وهذا الأسلوب يجعل المتعلم يقرّ بنفسه، دون تلقين، فيترسخ الفهم ويزول الخلط بين صنعة الإنسان ومقام الخالق.
  🏠📚 تطبيق في البيت أو القسم:
  يسأل المربي التلاميذ:
  "من صنع السيارة؟" – "الإنسان"
  "ومن خلق عقل الإنسان؟" – "الله"
  "ومن جعل الحديد في الأرض؟" – "الله"
  ثم يسأل: "إذن، هل الإنسان يخلق أم يصنع مما خلقه الله؟"
  👨🏫 تعليق المربي:
  "الله هو الخالق، أما الإنسان فمجتهد في استخدام ما خلقه الله له، فكيف نقارن بين الخالق والمخلوق؟"
  `
  }
  

      ];
export default function Others() {
  const [selectedMistake, setSelectedMistake] = useState(null);
  const groupMistakes = () => {
    const groups = [];
    for (let i = 0; i < mistakesList.length; i += 2) {
      groups.push(mistakesList.slice(i, i + 2));
    }
    return groups;
  };

  const mistakeGroups = groupMistakes();

  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-6 bg-white" dir="rtl">
      {/* En-tête avec logos et titre */}
      <div className="w-full flex items-center justify-center gap-4 mb-8">
        {/* Logo à gauche : Étoile islamique */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          className="w-16 h-16 md:w-20 md:h-20 bg-[#4f772d] rounded-full flex items-center justify-center shadow-lg hover:bg-[#31572c] transition duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            className="w-12 h-12 md:w-16 md:h-16 text-white"
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
          className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-[#4f772d] to-[#90a955] bg-clip-text text-transparent font-amiri text-center tracking-wide"
        >
          المصلح الأعظم
        </motion.h1>

        {/* Logo à droite : Étoile islamique */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: -5 }}
          whileTap={{ scale: 0.9 }}
          className="w-16 h-16 md:w-20 md:h-20 bg-[#4f772d] rounded-full flex items-center justify-center shadow-lg hover:bg-[#31572c] transition duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            className="w-12 h-12 md:w-16 md:h-16 text-white"
          >
            <path
              fill="currentColor"
              d="M32 2l6 18h18l-14 10 6 18-16-12-16 12 6-18L8 20h18l6-18z"
            />
          </svg>
        </motion.div>
      </div>

      {/* Sous-titre */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-3xl md:text-4xl text-[#4f772d] font-bold mb-8 font-amiri italic text-center leading-relaxed"
      >
        قائمة الأخطاء وتصحيحها
      </motion.p>

     {/* Liste des bêtises - partie modifiée */}
           <AnimatePresence mode="wait">
             {!selectedMistake ? (
               <motion.div
                 key="mistake-list"
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 exit={{ opacity: 0 }}
                 transition={{ duration: 0.5 }}
                 className="w-full max-w-6xl space-y-6"
               >
                 {mistakeGroups.map((group, index) => (
                   <motion.div
                     key={index}
                     className={`flex ${group.length === 1 ? 'justify-center' : 'justify-between'} gap-6`}
                   >
                     {group.map((mistake) => (
                       <motion.div
                         key={mistake.id}
                         initial={{ opacity: 0, y: 20 }}
                         animate={{ opacity: 1, y: 0 }}
                         exit={{ opacity: 0, y: -20 }}
                         transition={{ duration: 0.5 }}
                         onClick={() => setSelectedMistake(mistake.id)}
                         className={`cursor-pointer transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:bg-white/30 backdrop-blur-sm rounded-2xl ${
                           group.length === 1 ? 'w-full max-w-lg' : 'w-1/2'
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
                 ))}
               </motion.div>
             ) : (
               <motion.div
                 key="selected-mistake"
                 initial={{ opacity: 0, scale: 0.9 }}
                 animate={{ opacity: 1, scale: 1 }}
                 exit={{ opacity: 0, scale: 0.9 }}
                 transition={{ duration: 0.5 }}
                 className="w-full max-w-6xl cursor-pointer transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:bg-white/30 backdrop-blur-sm rounded-2xl"
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
          className="mt-8 bg-[#4f772d] text-white text-xl md:text-2xl font-amiri font-bold py-3 px-6 rounded-lg shadow-md hover:bg-[#31572c] hover:shadow-lg transition duration-300 flex items-center gap-3"
        >
          <FaArrowLeft className="w-6 h-6" /> 
          العودة إلى القائمة
        </motion.button>
      )}
    </div>
  );
}