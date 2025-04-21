import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import MistakeModel from "../../components/MistakeModel";
import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/router";
import Image from "next/image";

const mistakesList = [
    {
        id: 22,
        betise: "الظن أن قطع الرحم مبرر عند وجود خلاف",
        reponse: `
الأساليب النبويّة لتصحيح هذا الخطأ :
       *الأسلوب النبوي: ربط السلوك بالعاقبة الإيمانية
📖 الحديث: قال ﷺ:
"إنَّ الرَّحِمَ شِجْنَةٌ مِنَ الرَّحْمَنِ، فقالَ اللَّهُ: مَن وصَلَكِ وصَلْتُهُ، ومَن قَطَعَكِ قَطَعْتُهُ."
رواه البخاري في صحيحه 
🔎 الدلالة: 
في هذا الحديث، يُعلمنا النبي ﷺ أن صلة الرحم ليست مجرد فعل اجتماعي، بل هي عمل يُقرب الإنسان من رحمة الله. فالرحم، باعتبارها "شِجنة من الرحمن"، تعبيرٌ عن علاقة مقدسة مرتبطة بالرحمة الإلهية، إذ كلما وصلنا رحمنا، وصلتنا رحمة الله، وإذا قطعناها، فقد حرمنا أنفسنا من هذه الرحمة. هذا الأسلوب النبوي يربط الصلة بالعاطفة والرحمة في نفس الطفل، ويزرع فيه فكرة أن صلة الرحم ليست فقط عبادة لله، بل سعيٌ دائمٌ للحصول على نعمةٍ من الله في حياتنا اليومية.
🏠📚 التطبيق:  
إذا رفض الطفل زيارة أحد الأقارب بسبب خلاف، يوجهه المربي ويقول: "هل تعرف أن عائلتك مثل شجرة كبيرة؟ وكل غصن هو فرد من عائلتك. ماذا يحدث إذا كسرنا غصنًا من الشجرة؟" يجيب الطفل: "تتأذى الشجرة." فيقول المربي: "هذه الشجرة هي عائلتك، وإذا قطعتَ رحمك، تكون قد أذيتها. رحمة الله قريبة من وصل الرحم. هل تريد أن تكون قريبًا من الله؟" فيقول الطفل: "نعم!" ثم يقترح المربي: "اتصل بعمّتك أو أرسل لها رسالة، وابدأ بإصلاح العلاقة. هكذا تظل الشجرة متصلة وقوية، ورحمتُ الله تظل معك."
- يطلب المربي من الأطفال أن يرسموا شجرة العائلة على ورقة، مع تحديد كل فرع للعلاقات الأسرية، ويشرح لهم أهمية كل علاقة. ثم يسألهم: "ماذا يمكننا أن نفعل للحفاظ على هذه الشجرة قوية؟" ويشجعهم على التفكير في طرق لتقوية علاقاتهم.
        `
      }
            
      
]

export default function Others() {
  const router = useRouter();
  const [selectedMistake, setSelectedMistake] = useState(null);
  
  // Add navigation function for returning to domains page
  const handleReturn = () => {
    // You can replace this with your navigation logic
    // If using React Router, you would use navigate or history.push
    window.history.back(); // Simple navigation back to previous page
  };
  
  const groupMistakes = () => {
    const groups = [];
    for (let i = 0; i < mistakesList.length; i += 2) {
      groups.push(mistakesList.slice(i, i + 2));
    }
    return groups;
  };

  const mistakeGroups = groupMistakes();

  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-4 sm:p-6 bg-white" dir="rtl">
      {/* En-tête responsive */}
      <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-4 mb-6 sm:mb-8">
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

      {/* Sous-titre centré */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-xl sm:text-2xl md:text-3xl text-[#4f772d] font-bold mb-6 sm:mb-8 font-amiri italic text-center leading-relaxed"
      >
        قائمة الأخطاء وتصحيحها
      </motion.p>

      {/* Liste responsive */}
      <AnimatePresence mode="wait">
        {!selectedMistake ? (
          <motion.div
            key="list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-6xl space-y-4 sm:space-y-6 px-4 sm:px-6"
          >
            {mistakeGroups.map((group, index) => (
              <motion.div
                key={index}
                className={`flex flex-col sm:flex-row ${group.length === 1 ? 'justify-center' : 'justify-between'} gap-4 sm:gap-6 w-full`}
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
                      group.length === 1 ? 'w-full max-w-3xl' : 'w-full sm:w-1/2'
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
            key="detail"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-6xl cursor-pointer transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:bg-white/30 backdrop-blur-sm rounded-2xl px-4 sm:px-6"
          >
            <MistakeModel
              betise={mistakesList.find(m => m.id === selectedMistake).betise}
              reponse={mistakesList.find(m => m.id === selectedMistake).reponse}
              isSelected={true}
              onClick={() => setSelectedMistake(null)}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bouton de retour pour les détails */}
      {selectedMistake && (
        <motion.button
          onClick={() => setSelectedMistake(null)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 sm:mt-8 bg-[#4f772d] text-white text-lg sm:text-xl md:text-2xl font-amiri font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-lg shadow-md hover:bg-[#31572c] hover:shadow-lg transition duration-300 flex items-center gap-2 sm:gap-3"
        >
          <FaArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          العودة إلى القائمة
        </motion.button>
      )}
      
      {/* Nouveau bouton pour retourner aux domaines */}
      <motion.button
        onClick={() => router.push('/conceptual-mistakes/In-the-field-of-ethics')} // Redirection vers la page relation-with-creed
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-4 sm:mt-6 bg-[#90a955] text-white text-lg sm:text-xl md:text-2xl font-amiri font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-lg shadow-md hover:bg-[#4f772d] hover:shadow-lg transition duration-300 flex items-center gap-2 sm:gap-3"
      >
        <FaArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        العودة إلى المجالات
      </motion.button>
    </div>
  );
}