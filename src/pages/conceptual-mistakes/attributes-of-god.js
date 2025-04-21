import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import MistakeModel from "../../components/MistakeModel";
import { FaArrowLeft } from "react-icons/fa";
import {useRouter} from "next/router";
import Image from "next/image";
const mistakesList = [

  {
    id: 19,
    betise: "نسبة الصفات البشرية إلى الله (كالنوم، النسيان...)",
    reponse: `
الأساليب النبويّة لتصحيح هذا الخطأ :

     * الأسلوب النبوي: ترسيخ التعظيم من خلال الدعاء والانغماس في صفات الله
📖 الحديث:
كان النبي ﷺ يقول في سجوده:
"اللهم لك سجدتُ، وبك آمنتُ، ولك أسلمتُ، سجد وجهي للذي خلقه، وصوّره، وشقّ سمعه وبصره، تبارك الله أحسن الخالقين."
رواه مسلم في صحيحه 
🔎 الدلالة:
النبي ﷺ لا يُلقّننا دعاءً فحسب، بل يُربينا من خلاله. هو دعاء فيه سجود الجسد وخضوع القلب، وفيه استحضار أن الله هو الخالق المصور، المُبدع الذي منحنا السمع والبصر، بينما هو منزّه عن الحاجة والأعضاء. هذا النوع من الدعاء يغرس في نفس الطفل التسبيح العقلي والوجداني، ويؤسس في قلبه فكرة: "الله ليس كمثله شيء."
🏠📚التطبيق :
🔹 تمرين إدراكي – "من منحك؟":
يُطلب من الأطفال أن يُغمضوا أعينهم، أو يُسدّوا آذانهم، ويعيشوا لحظة "عدم الإحساس"، ثم يُسألوا:
– ما شعورك لو لم تكن ترى أو تسمع؟
– من الذي منحك هذا؟
ثم يُقال لهم بلُطف: "الذي خلق لك هذه النعم، لا يحتاجها هو، فهو سميع بصير بلا حدود، ولا ضعف، ولا نقص."
🔹 نشاط تطبيقي وجداني:
– يكتب الطفل جملة تعظيم لله، تبدأ بـ:
"سبحان الذي..." أو "تبارك الذي..."
– ويُكملها بصفة إلهية عظيمة، ويصفها بطريقة تُبيّن الفرق بينها وبين صفات البشر.
مثال: "سبحان الذي يسمع كل الأصوات، حتى همس القلب، ولا ينسى أحدًا، ونحن ننسى."
🔹 نشاط عائلي مشترك:
يُطلب من الطفل أن يسأل أحد والديه:
"ما أكثر صفة لله تُحبّها ولماذا؟"
ثم يكتب الطفل الجواب ويزينه في بطاقة جميلة يعلّقها في غرفته، فيها آية أو دعاء يعظّم تلك الصفة.

    `
  },
  {
    id: 20,
    betise: "الاعتقاد أنّ رحمة الله تعني عدم الحساب على الأخطاء",
    reponse: `
الأساليب النبويّة لتصحيح هذا الخطأ :
      *  ضرب المثل العملي لتحفيز الشعور بالمسؤولية
      📖 الحديث:
      قال النبي ﷺ:
      "مثل القائم على حدود الله والواقع فيها، كمثل قوم استهموا على سفينة... فأصاب بعضهم أعلاها وبعضهم أسفلها، فكان الذين في أسفلها إذا استقوا من الماء مروا على من فوقهم، فقالوا: لو أنّا خرقنا في نصيبنا خرقًا ولم نؤذِ من فوقنا، فإن تركوهم وما أرادوا هلكوا جميعًا، وإن أخذوا على أيديهم نجوا ونجوا جميعًا."
      رواه البخاري في صحيحه 
      🔎 الدلالة:
      يضرب النبي ﷺ مثلًا يوضح أن التساهل في الخطأ يؤدي للهلاك، حتى وإن كانت النية "طيبة". الرحمة لا تعني ترك الناس يخطئون دون محاسبة. تربويًا، هذا يُنمّي في الطفل وعيًا جماعيًا بالمسؤولية، ويعلّمه أن الرحمة تترافق مع التصحيح والتوجيه.
      🏠📚    التطبيق : 
      يرسم المربي سفينة على اللوح، ويقسمها إلى طابق علوي وسفلي، ثم يسرد القصة، ويسأل:
      "لو خرق أحدهم السفينة، هل نقول له: الله غفور؟ أم نوقفه؟"
      ثم يُعلّق: "الله غفور، لكن لا يسمح لنا بالإفساد."
      👨🏫 تعليق المربي:
      "الرحمة الحقيقية أن نحمي أنفسنا وغيرنا من الخطأ، وأن نُحاسب أنفسنا قبل أن نُحاسب."

      *  بيان أن الله يجمع بين الرحمة والعقاب
      📖 الحديث:
      قال ﷺ: "ما أحد أصبر على أذى سمعه من الله، يدّعون له الولد وهو يعافيهم ويرزقهم."
      رواه البخاري في صحيحه 
      🔎 الدلالة:
      النبي ﷺ يُبيّن عظمة حلم الله، لكنه لا ينفي الحساب والعقوبة لمن يستحقها. تربويًا، هذا يُربي الطفل على الحياء من الله، لا التمادي في المعصية.
      🏠📚     التطبيق:
      يسأل المربي: "هل يعقل أن يعفو الأب دائمًا دون أن يُنبه؟ فكيف بالله الذي لا يغفل عن شيء؟"
    `
  },  {
    id: 18,
    betise: "الله في كل مكان",
    reponse: `
الأساليب النبويّة لتصحيح هذا الخطأ :
      *  السؤال التوجيهي لاكتشاف التصور
      📖 الحديث:
      قال ﷺ للجارية: "أين الله؟" قالت: "في السماء." قال: "من أنا؟" قالت: "أنت رسول الله." قال: "أعتقها، فإنها مؤمنة."
      رواه مسلم في صحيحه  
      🔎 الدلالة:
      النبي ﷺ يستخرج العقيدة الصحيحة من الفتاة بالسؤال، فيؤكد أن الإيمان يقوم على التصور الصحيح لله. تربويًا، هذا الأسلوب يحفّز الطفل على التفكير بنفسه، مما يُرسّخ المعلومة في ذهنه.
      🏠📚  التطبيق:
      يسأل المربي: "أين ربنا؟ هل ترونه؟" ثم يشير إلى السماء ويقول: "الذي خلقنا فوق كل شيء، وهو يرانا ويسمعنا."

      * التذكير بعظمة الله وعدم مماثلته لخلقه
      📖 الحديث:
      قال ﷺ: "  إنَّكُمْ ليسَ تَدْعُونَ أَصَمَّ وَلَا غَائِبًا، إنَّكُمْ تَدْعُونَ سَمِيعًا قَرِيبًا   ."
      رواه البخاري في صحيحه   
      🔎 الدلالة:
      يُبيّن النبي ﷺ قرب الله من عباده بعلمه وقدرته، لا بذاته، مما يُزيل الغموض في تصوّر الأطفال لمكان الله. تربويًا، يُوازن بين القرب الإيماني والعلو الحقيقي.
      🏠📚  التطبيق:
      يقول أحد المتعلمين: "ربنا في كل مكان."
      يرد المربي: "هل يمكن أن يكون الله داخل هذه الطاولة؟ داخل الثلاجة؟" ثم يقول: "هو معنا بعلمه، لكنه فوقنا في السماء."
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
            className="w-full max-w-6xl space-y-4 sm:space-y-6"
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
                      group.length === 1 ? 'w-full max-w-xl' : 'w-full sm:w-1/2'
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
            className="w-full max-w-6xl cursor-pointer transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:bg-white/30 backdrop-blur-sm rounded-2xl"
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
       {/* Nouveau bouton pour retourner aux domaines */}
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