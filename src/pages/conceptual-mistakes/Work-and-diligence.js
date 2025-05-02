import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import MistakeModel from "../../components/MistakeModel";
import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/router";
import Image from "next/image";
const mistakesList = [
    {
        id: 23,
        betise: "الخلط بين الجد والتشدد",
        reponse: `
الأساليب النبويّة لتصحيح هذا الخطأ :
        * الأسلوب النبوي: الحث على الموازنة بين العبادة والراحة  
        📖 الحديث:  
 قال ﷺ :يا عَبْدَ اللَّهِ، ألَمْ أُخْبَرْ أنَّكَ تَصُومُ النَّهارَ وتَقُومُ اللَّيْلَ؟ قُلتُ: بَلَى يا رَسولَ اللَّهِ، قالَ: فلا تَفْعَلْ، صُمْ وأَفْطِرْ، وقُمْ ونَمْ، فإنَّ لِجَسَدِكَ عَلَيْكَ حَقًّا، وإنَّ لِعَيْنِكَ عَلَيْكَ حَقًّا، وإنَّ لِزَوْجِكَ عَلَيْكَ حَقًّا} رواه البخاري و مسلم في الصحيحين 
        🔎 الدلالة:  
        النبي ﷺ لم يُربِّ أصحابه على التشدد والحرمان، بل على التوازن النابع من فهم عميق للإنسان: أن له روحًا تتوق للعبادة، وجسدًا يحتاج للراحة، وأهلاً ينتظرون الودّ. بأسلوب تربوي رحيم، وجه النبي ﷺ عبد الله بن عمرو ليُدرك أن العبادة لا تعني الانقطاع عن الحياة، بل تعني أن نعبد الله ونحن نعيش الحياة بكامل أبعادها، فنكون جادين دون قسوة، ومتعبدين دون غلو، ومحبين دون انشغال.  
        🏠📚  التطبيق:  
        يُعلن طفل في الفصل بحماس: "أنا لا أريد أن ألعب بعد اليوم، سأبقى أدرس وأتعبد فقط!"  
        فيطلب منه المربي أن يرسم ميزانًا، ثم يقول له:  
        "ضع في أحد الكفتين: الصلاة، قراءة القرآن، الدراسة. وفي الكفة الأخرى: اللعب، الضحك مع الأهل، المشي، الراحة. هل ترى كيف يتوازن الميزان؟"  
        فيقول الطفل: "نعم، إذا أهملت أحدهما اختل التوازن."  
        فيقول المربي: "النبي ﷺ قال: (إن لنفسك عليك حقًا). العبادة ليست أن تتعب نفسك فقط، بل أن تعرف متى تتعبها ومتى تريحها، ومتى تضحك، ومتى تصلي."
        `
      },
      {
        id: 24,
        betise: "الظن أن العمل اليدوي أو البسيط أقل قيمة",
        reponse: `
الأساليب النبويّة لتصحيح هذا الخطأ :
       * الأسلوب النبوي: التربية بالقدوة العملية في العمل اليدوي
📖 الحديث: 
عن البراء بن عازب رضي الله عنه قال:
"كانَ النبيُّ صَلَّى اللهُ عليه وسلَّمَ يَنْقُلُ التُّرَابَ يَومَ الخَنْدَقِ، حتَّى أغْمَرَ بَطْنَهُ، يقولُ: واللَّهِ لَوْلَا اللَّهُ ما اهْتَدَيْنَا، ولَا تَصَدَّقْنَا ولَا صَلَّيْنَا."
رواه البخاري في صحيحه 
🔎 الدلالة: في هذا الحديث، يُظهر النبي ﷺ كيف أنّ العمل اليدوي لا يرتبط بمكانة اجتماعية، بل هو مصدر فخر وتفانٍ في خدمة الله وعباده. حمل التراب في يوم الخندق كان عملًا شاقًا ومرهقًا، لكنه كان جزءًا من النضال والجهاد. هذا يعلمنا أنّ الأعمال التي قد تُعتبر متواضعة، مثل العمل في النظافة أو رعي الأغنام أو الخياطة، هي أعمال ذات قيمة عالية في الإسلام. النبي ﷺ من خلال عمله هذا، جسّد التواضع وأكد أنّ العمل اليدوي هو شرف ورفعة، لا ينبغي التقليل من قيمته أبدًا.
🏠📚التطبيق :
يفتح المربي نقاشًا مع الأطفال فيقول:
"تخيلوا أن الشوارع مليئة بالقمامة، أو أن المدرسة لم يُبنَ لها جدران، أو لا يوجد من يقود الحافلات… من الذي يقوم بهذه الأعمال؟"
ثم يكتب على كلمات مثل: عامل نظافة – عامل بناء – سائق حافلة – خياط – مزارع، ويسأل:
"هل هذه الأعمال مهمة؟ هل يمكن أن نستغني عن أصحابها؟"
بعد ذلك، يُعرض فيديو قصير أو صور توضح هؤلاء العاملين في مواقعهم، وهم يتعبون من أجل خدمة المجتمع، ويُسأل الأطفال:
"كيف سيكون المجتمع من دونهم؟"
✍️ نشاط تطبيقي: يُطلب من الأطفال أن يكتب كلٌّ منهم رسالة شكر قصيرة موجهة إلى عامل نظافة أو سائق أو بنّاء يقول فيها مثلًا:
"شكرًا لأنك تعمل بجد وتُساعدنا في أن نعيش في مكان نظيف وآمن. عملك عظيم ونحن نحترمه."
في البيت، يُشجَّع الطفل على إلقاء التحية على عامل نظافة أو سائق، أو أن يُحضِر له زجاجة ماء أو كلمة طيبة، ويُقال له:
"النبي ﷺ حمل التراب بيده، فهل نحتقر من يعمل اليوم بيده؟ كل من يعمل بإخلاص هو محترم عند الله."
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
                      {/* Titre principal avec le symbole ﷺ */}
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center justify-center"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-[#4f772d] to-[#90a955] bg-clip-text text-transparent font-amiri text-center tracking-wide">
              المصلح الأعظم
            </h1>
            <motion.span 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#4f772d] mr-2 font-arabic"
            >
              ﷺ
            </motion.span>
          </motion.div>
          
          
        </div>
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