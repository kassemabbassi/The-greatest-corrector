import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import MistakeModel from "../../components/MistakeModel";
import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/router";
import Image from "next/image";
const mistakesList = [
    {
    id: 16,
    betise: "الظنّ أنّ الكتب السماوية مجرد قصص تاريخية وليست توجيهات للحياة اليومية",
    reponse: `
الأساليب النبويّة لتصحيح هذا الخطأ :
 *الأسلوب النبوي: الاتّعاظ بالقصص القرآني وربطه بالواقع
📖 الحديث:
قال النبي ﷺ:
"يرحمُ اللهُ لوطًا، لقد كان يأوي إلى ركنٍ شديدٍ، ولو لبثتُ في السجن ما لبثَ يوسفُ لأجبتُ الداعي، ونحن أحقُّ من إبراهيم إذ قال له: {أَوَلَمْ تُؤْمِنْ، قالَ: بَلَى ولكِنْ لِيَطْمَئِنَّ قَلْبِي}"
رواه البخاري في صحيحه 
🔎 الدلالة:
النبي ﷺ لم يروِ القصص القرآني بشكل جامد، بل جعله نافذته للتعبير عن مشاعره، وتعليمه، وتعميق القيم. تعاطف مع الأنبياء، وعلّق على مواقفهم بلغة وجدانية راقية. هذا الأسلوب يُعلّم الطفل أن قصص الأنبياء ليست دروسًا ماضية، بل نوافذ تطل على حياته اليومية، وأنه يستطيع أن يجد فيها العزاء، والإلهام، والحكمة.
🏠📚 التطبيق:
🔹 نشاط التأمّل والمشاركة:
يُطلب من الطفل أن يختار نبيًا تأثّر بقصته (مثل يوسف، نوح، موسى...)، ثم يجيب في ورقة أو بشكل شفوي على الأسئلة التالية:
1.	ما الموقف الذي لفت انتباهك من قصته؟
2.	ما المشاعر التي شعرت بها لو كنت مكانه؟
3.	كيف يمكن أن يُساعدك هذا الموقف في حياتك اليومية (في البيت أو المدرسة)؟
يُصمّم المتعلم "بطاقة أثر" يكتب فيها:
– اسم النبي
– الآية التي تأثر بها
– الجملة التي تُلخّص الأثر في نفسه
ويُعلّقها في ركن (من وحي القرآن) في البيت أو المدرسة.
      
      *  عرض الآثار المترتبة على الفعل
      📖 الحديث:
      قال النبي ﷺ: "مثل الذي يقرأ القرآن وهو حافظ له مع السفرة الكرام البررة..."
      رواه البخاري في صحيحه
      🔎 الدلالة:
      النبي ﷺ يربط بين قراءة القرآن وتكريم الملائكة للقارئ، ليربط الطفل بين العمل بالكتاب والمكانة عند الله. تربويًا، هذا يُعزّز احترام النص وفاعليته في حياة المسلم.
      🏠📚  التطبيق:
      يقول المربي "من منكم قرأ اليوم من القرآن؟" ثم يسأل: "ما الأثر الذي تركه فيك؟"
    `
  },
  {
    id: 17,
    betise: "عدم التفريق بين التحريف الذي وقع في بعض الكتب السماوية وبين بقاء القرآن محفوظًا",
    reponse: `
الأساليب النبويّة لتصحيح هذا الخطأ :
     * الأسلوب النبوي: التحدي والإعجاز في ألفاظ القرآن
📖 الحديث:
قال النبي ﷺ:
«ما من نبي إلا أُعطي ما مثله آمن عليه البشر، وإنما كان الذي أوتيته وحيًا أوحاه الله إليّ، فأرجو أن أكون أكثرهم تابعًا يوم القيامة»
رواه البخاري ومسلم  في الصحيحين 
🔎 الدلالة:
النبي ﷺ يبيّن أن معجزة كل نبي كانت محسوسة، كالعصا أو شفاء المرضى، أما معجزته الخالدة فهي القرآن؛ وحيٌ محفوظٌ متلوّ، يتحدى الزمان والمكان، يفهمه العامة والخاصة، ويؤثر في القلوب. وبقاؤه دون تحريف عبر القرون دليل على إعجازه.
🏠📚االتطبيق :
يعرض المربي صورًا أو مقاطع تمثّل معجزات الأنبياء السابقة (كمثال تمثيلي فقط)، ثم يسأل:
"أين هذه المعجزات الآن؟ هل يمكننا رؤيتها أو لمسها؟"
ثم يقول: "لكن القرآن… بين أيدينا اليوم كما نزل على النبي ﷺ، نسمعه، نحفظه، نعمل به، فهل هذا ليس أعظم معجزة؟"
      
      *  التحذير من تحريف النصوص
      📖 الحديث:
      قال ﷺ: " إن كذبا عليَّ ليس ككذب على أحد، من كذب عليّ متعمّدا فليتبوّأ مقعده من النار   ."
      رواه البخاري في صحيحه
      🔎 الدلالة:
      تحذير النبي ﷺ من الكذب حتى في النقل عنه، دليل على أن التحريف مرفوض. تربويًا، يُرسّخ قيمة الأمانة، ويدفع الطفل للتساؤل عن صدق الكتب الأخرى، وامتياز القرآن بالحفظ.
      🏠📚     التطبيق:
      يسأل المربي : "لماذا نحفظ القرآن كما هو؟ هل يمكن تغييره؟" ثم يعرض مثالًا على نص تاريخي تغيّر مع الزمن.
    `
  },{
    id: 15,
    betise: "عدم الربط بين الكتب السماوية بدياناتها والرسل الذين أنزلت عليهم",
    reponse: `
الأساليب النبويّة لتصحيح هذا الخطأ :

      *  الإقرار مع الإضافة التوضيحية
      📖 الحديث:
      قال رسول الله ﷺ:
      "الأنبياء إخوة لعلات، أمهاتهم شتى ودينهم واحد."
      رواه البخاري في صحيحه
      🔎 الدلالة:
      أقر النبي ﷺ أن هناك اختلافًا ظاهريًا في تفاصيل الشرائع، لكنه أضاف توضيحًا بأن الدين واحد، ما يعني أن جميع الأنبياء جاؤوا برسالة واحدة من عند الله، وإن اختلفت في بعض التفاصيل. هذا الأسلوب يُوجّه ذهن المتعلم إلى الوحدة بين الرسالات، مع مراعاة الخصوصيات.
      🏠📚  التطبيق:
      يرسم المربي شجرة تُظهر الأنبياء الثلاثة: موسى، عيسى، ومحمد عليهم السلام، ويضع بجانب كل نبي اسمه واسم الكتاب الذي نزل عليه. ثم يسأل:
      "ما الذي يجمع هؤلاء الأنبياء رغم اختلاف الأزمنة والكتب؟"
      ثم يقود النقاش لاكتشاف أنهم جميعًا جاؤوا بدين واحد من عند الله.
      
      *  التفسير بالتمثيل الواقعي
      📖 الحديث:
      قال النبي ﷺ:
مَثَلِي ومَثَلُ الأنْبِياءِ مِن قَبْلِي كَمَثَلِ رَجُلٍ بَنَى بُنْيانًا فأحْسَنَهُ وأَجْمَلَهُ، إلَّا مَوْضِعَ لَبِنَةٍ مِن زاوِيَةٍ مِن زَواياهُ، فَجَعَلَ النَّاسُ يَطُوفُونَ به ويَعْجَبُونَ له ويقولونَ: هَلّا وُضِعَتْ هذِه اللَّبِنَةُ قالَ فأنا اللَّبِنَةُ، وأنا خاتَمُ النبيِّينَ
رواه مسلم و البخاري في الصحيحين 
      🔎 الدلالة:
      النبي ﷺ هنا استخدم التمثيل الواقعي ليبين أن كل الأنبياء جاءوا ليكملوا البناء الذي بدأه من قبله، وأن الرسالة الإلهية واحدة، وبالتالي كل كتاب سماوي هو جزء من البناء الكلي للإيمان. هذا الأسلوب يوضح أنه رغم تنوع الرسالات، إلا أنها مترابطة وتكمل بعضها.
      🏠📚   التطبيق:
      يمكن للمربي أن يعرض أمام الأطفال نموذجًا مصغرًا لبناء (مثل مكعبات اللعب)، ثم يسألهم:
      "ماذا يحدث إذا وضعنا حجرًا ناقصًا في هذا البناء؟ ماذا يحصل لو حاولنا بناء جدار كامل بغير لبنة واحدة؟"
      ثم يشرح لهم أن الكتب السماوية جاءت لتكمل بعضها وتسد نقصًا في الفهم أو الحاجة للبشر.
    `
  },

];

export default function Others() {
  const router = useRouter();
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

      {/* Bouton de retour responsive */}
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
       <motion.button
        onClick={() => router.push('/conceptual-mistakes/relation-with-creed')} // Redirection vers la page relation-with-creed
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