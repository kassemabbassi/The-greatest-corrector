import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import MistakeModel from "../../components/MistakeModel";
import { FaArrowLeft,FaBookOpen } from "react-icons/fa";

const mistakesList = [
    {
    id: 2,
    betise: "ضعف الشخصية عند الأطفال",
    reponse: `
      الأساليب النبوية في التعامل مع ضعف الشخصية عند المتعلّمين:
      
      *تعزيز الثقة بالنفس والتشجيع 
      🕊 من هدي النبي ﷺ: عن ابن عباس رضي الله عنه، قال:
      قال لي رسول الله ﷺ:
      "يا غُلامُ إنِّي أعلِّمُكَ كلِماتٍ ، احفَظِ اللَّهَ يحفَظكَ ، احفَظِ اللَّهَ تَجِدْهُ تجاهَكَ ، إذا سأَلتَ فاسألِ اللَّهَ ، وإذا استعَنتَ فاستَعِن باللَّهِ ، واعلَم أنَّ الأمَّةَ لو اجتَمعت علَى أن ينفَعوكَ بشَيءٍ لم يَنفعوكَ إلَّا بشيءٍ قد كتبَهُ اللَّهُ لَكَ ، ولو اجتَمَعوا على أن يضرُّوكَ بشَيءٍ لم يَضرُّوكَ إلَّا بشيءٍ قد كتبَهُ اللَّهُ عليكَ ، رُفِعَتِ الأقلامُ وجفَّتِ الصُّحفُ"
      📘 رواه الترمذي في سننه.
      الدلالة: النبي ﷺ خاطب غلامًا صغيرًا بأسلوب الواثق منه، وعلّمه كلمات عظيمة كأنما يُخاطب رجلاً ناضجًا، مما يُعطي الطفل قيمة وثقة.
      💡التطبيق في القسم: إذا لاحظ المعلم تلميذًا ضعيف الشخصية، يمكن أن يقترب منه ويقول له:
      "أنت ذكي جدًا، وأريد أن أراك تتحمّل مسؤولية هذا النشاط". 
      ثم يشيد به أمام القسم حين يُنجز.
      
      *عدم الإحراج أو التوبيخ العلني
      🕊 من هدي النبي ﷺ:
      "كان النَّبيُّ صلَّى اللهُ عليه وسلَّمَ إذا بلَغَه عنِ الرَّجلِ الشيءُ لم يَقُلْ: ما بالُ فُلانٍ يَقولُ: كذا وكذا، ولكن يَقولُ: ما بالُ أقوامٍ يَقولونَ: كذا، وكذا."
      📘 رواه البخاري في الصحيح.
      الدلالة: كان ﷺ إذا أراد أن يُنكر شيئًا، لا يذكر الفاعل باسمه، بل يُعمّم ليحفظ كرامته، وهذا أساسي مع الأطفال الخجولين.
      💡التطبيق في القسم: إذا أخطأ الطفل، لا يُقال أمام الجميع: "أنت جبان" أو "لماذا لم تتكلم؟"، بل يُقال:
      "بعض التلاميذ أحيانًا يخافون أن يُخطئوا، وهذا طبيعي... لكن الشجاع هو من يُحاول ولا يستسلم واعلموا أنّ الخطأ هو بداية كل تعلّم."
      ثم ينظر للتلميذ المعني ويبتسم له دون تسمية.
      
      * الثناء على المبادرة، ولو كانت صغيرة
      🕊 من هديه ﷺ: كان ﷺ يقول عن المجتهد الذي يصيب أو يخطئ:
      "إذا حكم الحاكم فاجتهد ثم أصاب، فله أجران، وإن اجتهد فأخطأ، فله أجر واحد."
      📘 رواه البخاري في الصحيح.
      الدلالة: التشجيع على المحاولة، وعدم ربط القيمة بالنتيجة، بل بالنية والاجتهاد.
      💡 التطبيق في القسم:  حين يحاول الطفل الخجول الكلام أو الإجابة:
      "أحسنت لأنك حاولت، حتى لو لم تُصب فإنّك قد نِلت شرف المحاولة."
    `,
  },
  
  {
    id: 3,
    betise: "التعلّق بالهواتف والألعاب الالكترونيّة",
    reponse: `
      ❗ ملاحظة: هذا الخطأ لم يكن موجودًا زمن النبي ﷺ، لكن يمكن القياس على السلوكيات المماثلة من حيث الانشغال الزائد أو الإدمان على اللهو، ونستخرج من هديه ﷺ أساليب تربوية لمعالجة ذلك.
      
      *الترغيب في المفيد بالتشجيع لا التوبيخ
      🕊 من هديه ﷺ قال رسول الله ﷺ:
      "من سلك طريقًا يلتمس فيه علمًا، سهّل الله له به طريقًا إلى الجنة."
      📘 رواه الترمذي في سننه.
      الدلالة: النبي ﷺ كان يُحبّب الأطفال والشباب في العلم والعمل النافع بربطه بالجنة، لا بالمنع فقط.
      💡 التطبيق في القسم:  عندما يُطلب من التلميذ الابتعاد عن الهاتف، يُقال له:
      "هل تعلم أن كل مرة تقرأ و ترسم وتقضي وقتك في ما ينفعك فإنّك تمضي نحو التألّق والتميّز، هذه أشياء لا تمنحك إيّاها اللعبة."
      
      *القدوة العملية في تقنين استخدام الوسائل
      🕊 من سيرة النبي ﷺ:  كان النبي ﷺ يُقسّم وقته بين العبادة، والعمل، والمجالسة، والتعليم، ولم يكن يقضي يومه في تكرار الشيء نفسه.
      الدلالة:  تعليم التوازن عبر القدوة العملية.
      💡 التطبيق في القسم:  يمكن للمعلّم أن يحدّد وقتًا صغيرًا يوميًا للنشاط الترفيهي، ويقول للتلاميذ:
      "مثل ما النبي ﷺ كان يُقسّم وقته و هو خير قدوة، نحن أيضًا نلعب قليلًا، لكن بعدها نُنجز."
      
      *التدرّج في الفطام لا القطيعة المفاجئة
      🕊 من هديه ﷺ:  قال رسول الله ﷺ:
      "إن الله رفيق يحب الرفق في الأمر كله."
      📘 رواه البخاري في الصحيح
      الدلالة:  التربية النبوية تقوم على الرفق والتدرّج، لا القسوة والمنع الفجائي.
      💡 التطبيق في البيت أو القسم:
      "سنلعب بالهاتف بعد أن ننهي الدرس أو نصلي معًا"، ثم يُشجّع حين يُطيع: "أحسنت، التزمت بالاتفاق مثل الكبار."
      
      *تشجيع البدائل النافعة والأنشطة البدنية
      من الهدي النبوي:
      كان النبي ﷺ يُوازن بين الجدّ والراحة، وكان يُشجّع الصحابة على اللعب المباح الذي يروّح النفس ويقوّي الجسد، مثلما أقرّ الحبشة وهم يلعبون في المسجد، وشارك بنفسه في سباق مع السيدة عائشة رضي الله عنها.
      📘 رواه البخاري في الصحيح.
      💡 تطبيق في القسم (واقعي):
      يلاحظ المعلم أنّ أحد التلاميذ لا يلعب مع زملائه أثناء الفسحة، ويكتفي بالهاتف.
      فلا يُعنفه، بل يقول له:
      "أتعلم أنّ الرسول ﷺ شجّع على اللعب والركض لأنّ فيه قوة ونشاط؟ هلمّ نلعب جولة قصيرة، وبعدها يمكنك الجلوس. لكن جرّب أن ترى كيف تتغيّر حالك حين تتحرّك."
      ثمّ  يمكن أن يُشاركه في نشاط حركي بسيط جماعي، حتى ولو لم يكن رياضيًا.
    `,
  },
  {
    id: 4,
    betise: "التدخين",
    reponse: `
      *بيان الضرر بأسلوب رحيم غير جارح
      🕊 من هديه ﷺ:  قال النبي ﷺ:
      "لا ضرر ولا ضرار."
      📘 رواه ابن ماجه في سننه.
      الدلالة:  نهى عن الإضرار بالنفس أو بالغير، لكن دون تعنيف، بل بالتفهيم والتوعية بلغة تحترم عقل الشاب ومشاعره.
      💡 التطبيق في القسم أو في حوار تربوي:
      إذا عَلِم المعلّم أو المربّي أن أحد المتعلمين جرّب التدخين، يُحادثه بلطف بعيدًا عن العلنية، ويقول له:
      "أتعلم أن النبي ﷺ قال: لا ضرر ولا ضرار؟ التدخين يضرّ قلبك ورئتيك، ويجعلك عبدًا لشيء لا ينفعك... وأنا أعلم أنك أقوى من ذلك."
      ثم يسأله بلطف:
      "هل تعلم ما الذي دفعك إلى ذلك؟ تعال نبحث معا على خطورة هذا السلوك وكيفيّة التعافي منه."
      
      *إحياء الرقابة الداخلية لا الترهيب الخارجي
      🕊 من هديه ﷺ:  قال لابن عباس وهو غلام:
      "احفظ الله يحفظك... وإذا سألت فاسأل الله..."
      📘 رواه الترمذي في سننه.
      الدلالة: النبي ﷺ زرع في المتعلمين مبدأ المراقبة الذاتية لا الخوف من الناس، مما يجعل التلميذ يترك الخطأ من تلقاء نفسه.
      💡 التطبيق في القسم أو المنزل : 
      يُلاحظ المعلّم على أحد المتعلمين سلوكًا يدلّ على تعلّقه بالتدخين، فيدعوه بلطف إلى حوار فردي، ويقول له:
      "أتعلم لماذا أوصى النبي ﷺ غلامًا صغيرًا مثل ابن عباس أن يحفظ الله؟ لأن الإنسان القويّ هو من يُراقب نفسه، لا من ينتظر من يُراقبه."
      ثم يُصغي إليه باهتمام، ويختم:
      "أنا أعلم أن فيك خيرًا كثيرًا، وأثق أنك قادر على تمييز السلوك الصواب من الخطأ، هذا هو المعنى الحقيقي للشجاعة."
    `,
  },
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