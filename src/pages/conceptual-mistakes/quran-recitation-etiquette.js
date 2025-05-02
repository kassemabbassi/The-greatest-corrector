import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import MistakeModel from "../../components/MistakeModel";
import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/router";  
import Image from "next/image";
const mistakesList = [
    {
        id: 28,
        betise: "الصوت الجميل أهم من التدبر",
        reponse: `
الأساليب النبويّة لتصحيح هذا الخطأ :
       * الأسلوب النبوي: ربط التلاوة بالعمل
📖 الحديث:
قال رسول الله ﷺ:
"القرآنُ حُجَّةٌ لكَ أو عليكَ."
رواه مسلم  في صحيحه 
🔎 الدلالة:
في هذا الحديث، يرسم النبي ﷺ خطًّا واضحًا بين قارئٍ يتلو القرآن فيستنير به ويسلك به درب الصلاح، وبين قارئٍ يجعله حُجّةً عليه، إذ يقرأ ولا يعمل، ويحفظ ولا يفقه.
فالنبي ﷺ يربط بين القراءة والسلوك، لا بين اللسان والأجر فقط.
إنه أسلوب تربوي عميق يدفع المتعلم لتفحّص نفسه بعد كل تلاوة:
هل ازدادت خشيتي؟ هل تغيّر سلوكي؟
🏠📚التطبيق:
تمثيل درامي قصير: "حديث القرآن معك"
🔸 يقوم المربي بتقسيم الأطفال إلى مجموعات.
🔸 كل مجموعة تمثل مشهدًا صامتًا فيه شخص يقرأ القرآن... ثم مشهدًا آخر يطبّق ما قرأه، أو يخالفه.
🔸 بعد التمثيل، يسأل المربي:
– في أي مشهد كان القرآن حُجّة له؟
– وما الذي جعله كذلك؟
🔸 يكتب كل طفل جملة تبدأ بـ:
"سأجعل القرآن حُجّة لي بأن..." ويُكملها من قلبه.
💡 تفعيل منزلي:
● يُطلب من الطفل أن يختار آية قرأها هذا الأسبوع، ويكتب بجانبها سلوكًا واحدًا تغيّر عنده بسببها.
        `
      },
      {
        id: 29,
        betise: "ضرورة ضم اليدين أثناء التلاوة",
        reponse: `
الأساليب النبويّة لتصحيح هذا الخطأ :
        *الأسلوب النبوي: بيان جواز تلاوة القرآن في أوضاع متعددة
📖 الحديث:
عن عبدِ اللَّهِ بنِ مغفَّلٍ رضي الله عنه قال:
"رأيتُ رسولَ اللَّهِ ﷺ يومَ فتحِ مَكَّةَ وَهوَ علَى ناقةٍ يقرأُ بسورةِ الفَتحِ."
رواه الترمذي وأحمد وصححه الألباني 🔎 الدلالة:
في هذا الحديث، النبي ﷺ يقرأ القرآن وهو راكبٌ على راحلته (أي دابّته)، وليس جالسًا باعتدال، ولا ضامًّا ليديه، ولا متوجهًا خصيصًا للقبلة.
هذا المشهد يُبرز كيف أن القراءة ليست مرتبطة بهيئة جسدية جامدة، بل النبي ﷺ مارسها في أوقات التحرك والسفر والفتح، مما يدل على سعة الشريعة ويسرها، وأن الخشوع في التلاوة لا يعني الجمود الجسدي، بل يقاس بحضور القلب وعظمة المعاني.
🏠📚التطبيق :
يرى المربي أحد الأطفال متخشبًا في جلسته وهو يقرأ، فيسأله:
"هل قرأ النبي ﷺ القرآن فقط وهو جالس على الأرض؟"
ثم يُخبره بهذا الحديث، ويُكمل:
"حتى على راحلته، في وقت الفتح والنصر، كان يقرأ. ليس المهم أن تضمّ يديك أو تجلس بزاوية صحيحة، المهم أن يقرأ قلبك مع لسانك."
ثم يُمكن عرض مشاهد تمثيلية: طفل يقرأ وهو جالس، وآخر وهو في سيارة، وآخر و هو ويسألهم:
"هل كلها صحيحة؟"
ثم يؤكد: "نعم، ما دام قلبك حاضرًا ونيتك خالصة."
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
        onClick={() => router.push('/conceptual-mistakes/quranic-guidance')} // Redirection vers la page relation-with-creed
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