import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import MistakeModel from "../../components/MistakeModel";
import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/router";
import Image from "next/image";

const mistakesList = [
    {
        id: 20,
        betise: "الاعتقاد أن الاستئذان مطلوب فقط مع الغرباء",
        reponse: `
        الأساليب النبويّة في التعامل مع هذا الخطأ:
        * الأسلوب النبوي للإصلاح: تعليم الاستئذان كأدب عام  
        📖 الحديث:  
        قال رسول الله ﷺ: "إذا دخل أحدكم على أهله، فليسلّم، فإن كان أحدٌ من أهل البيت في البيت، وإلا كان ذلك تحية من الله تعالى."  
        رواه مسلم في صحيحه (2171)  
        🔎 الدلالة:  
        في هذا الحديث، النبي ﷺ يُرسّخ الاستئذان والتحية كجزء أساسي من آداب الإسلام اليومية، ليس فقط مع الغرباء، بل مع الأهل أيضًا. الاستئذان لا يُعتبر مجرد إجراء شكلي، بل هو أدب يُعزز الاحترام والتقدير بين أفراد الأسرة. يُعلمنا النبي ﷺ أن التحية ليست محصورة في مكان أو زمان معين، بل هي وسيلة لتوطيد علاقات المحبة والاحترام، مما يُربي الطفل على مبدأ حسن التعامل مع الجميع سواء في المنزل أو في الخارج.  
        🏠📚   التطبيق:  
        يطلب المربي من الأطفال أن يمثلوا مشهداً داخل الفصل أو المنزل:  
        "تخيلوا أنكم تدخلون إلى المنزل، هل ترون أحدًا؟ هل تقولون السلام عليكم؟"  
        يُجيب أحد الأطفال: "أدخل وأمشي مباشرة إلى غرفتي."  
        ثم يُوضح المربي: "النبي ﷺ علّمنا أن التحية مهمة، حتى مع أهل البيت، فهي بداية للتواصل الجيد."  
        📝 نشاط تفاعلي:  
        بعد التطبيق، يطلب المربي من الأطفال أن يبدؤوا يومهم في المنزل بقول السلام عليكم عند دخولهم على أهلهم، ويُسجّل الأطفال في دفتر الملاحظات كيف استجاب أفراد العائلة لهذا السلوك. كما يُحفّزهم المربي على ملاحظة ردود الفعل ومدى تأثير التحية على علاقتهم مع أهلهم.
        `
      },
      {
        id: 21,
        betise: "الأكل ليس له آداب شرعية",
        reponse: `
        الأساليب النبويّة في التعامل مع هذا الخطأ:
        * الأسلوب النبوي: التعليم بالتوجيه المباشر  
        📖 الحديث:  
        قال عمر بن أبي سلمة: "كنت غلامًا في حجر رسول الله ﷺ، وكانت يدي تطيش في الصحفة، فقال لي: «يا غلام، سمِّ الله، وكُل بيمينك، وكُل مما يليك»"  
        رواه البخاري في صحيحه (5376) ومسلم في صحيحه (2022)  
        🔎 الدلالة:  
        النبي ﷺ في هذا الحديث استخدم أسلوب التوجيه المباشر ليتعامل مع الوضع في وقته، مُظهرًا كيف يمكن تعليم الطفل آداب الأكل في مواقف حياتية بسيطة. بدلاً من تقديم شرح طويل، جاء التوجيه مباشرة ليُحدث تأثيرًا سريعًا في فهم الطفل لهذه الآداب العملية. التربية بهذه الطريقة تجعل التعاليم جزءًا من الحياة اليومية وتغرس في المتعلم أهمية احترام النعم والتعامل معها بأدب.  
        🏠📚  التطبيق:  
        عندما يبدأ الطفل في تناول طعامه بطريقة غير لائقة، يقترب منه المربي بلطف ويسأله: "ماذا تعلمت من النبي ﷺ عندما كان يتناول الطعام؟"  
        إذا أجاب الطفل: "أنه كان يأكل بيده اليمنى"، يرد المربي قائلاً: "نعم، وهو علمنا أيضًا أن نبدأ باسم الله، وأن نتناول ما يقرب منا. في حياتنا اليومية، تكون كل هذه التفاصيل طريقًا لرفع شأننا عند الله."  
        ثم يطلب المربي من الطفل أن يبدأ طعامه وهو يقول بسم الله، ويُشجعه على تناول الطعام بطريقة مرتبة.
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