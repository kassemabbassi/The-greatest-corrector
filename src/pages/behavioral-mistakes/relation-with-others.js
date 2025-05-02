import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import MistakeModel from "../../components/MistakeModel";
import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/router";
import Image from "next/image";
const mistakesList = [
  {
    id: 1,
    betise: "السلوك العدواني",
    reponse: `
    الأساليب النبويّة في التعامل مع هذا الخطأ:
      *بيان خطر العدوان بأسلوب يُحيي الرحمة بدل الردع
      🕊 من هديه ﷺأنّه قال :
      "ليس الشديد بالصُّرَعة، إنما الشديد الذي يملك نفسه عند الغضب."
      📘 رواه البخاري ومسلم في صحيحهما.
      الدلالة:
      النبي ﷺ يُعيد تعريف "القوة" في عقول الناشئة: ليست في القدرة على الضرب أو السيطرة على الآخرين، بل في التحكم بالنفس وقت الغضب.
      هذا التوجيه يوجّه الطفل ليبحث عن صور إيجابية من القوة، ويُخرجه من وهم أن الاعتداء على الآخر يُكسبه احترامًا أو هيبة.
      💡 التطبيق: 
      تنظيم نقاش موجّه داخل القسم مثلا:
      "ما الفرق بين من يتعامل ّ بالعنف ومن يتعامل ّ بالحوار عند حدوث الخلاف ؟(يمكن الاستعانة بالحديث) إذا وفق ما علّمنا إيّاه نبيُّنا ﷺ  من الأقوى فعلًا؟"
      يُستعمل الحديث كنقطة انطلاق، ويُشجَّع المتعلمون على تقديم أمثلة واقعية عاشوها.
      
      *التربية على حلم النبي ﷺ في المواقف المستفزّة
      🕊 من هديه ﷺ:
      قصة الأعرابي الذي بال في المسجد، فقام الصحابة ليؤدّبوه، فقال لهم النبي ﷺ:
      "لا تُزرموه (لا تقطعوا عليه بوله)... ثم دعا بدلو من ماء فصبّه عليه."
      📘 رواه البخاري في صحيحه.
      الدلالة:
      النبي ﷺ قابل الخطأ الصادم بحلم ورفق، ثم وجّه صاحب الخطأ بلغة هادئة ومحترِمة.
      💡 التطبيق:
      تقديم القصة في أثناء الحصّة ، ثم مناقشتها مع الأطفال:
      "كيف تصرّف النبي؟ هل ردّ بعنف؟ ماذا نتعلّم من هذا؟"
      تطبيق تمثيلي صغير حول "فضّ النزاع"، يتدرّب فيه المتعلمون على التصرّف بلطف مع من يُخطئ بحقهم.
      
      *ربط العدوان بالحرمان من محبة النبي ﷺ
      🕊 من هديه ﷺ أنّه قال : 
      "إن من أحبكم إليّ وأقربكم مني مجلسًا يوم القيامة أحاسنكم أخلاقًا..."
      📘 رواه الترمذي في سننه.
      الدلالة:
      النبي ﷺ يربط الأخلاق الحسنة بالقرب منه في الآخرة، والعدوان يحرم صاحبه من هذه المحبّة والمكانة.
      💡 التطبيق: 
      تنظيم نشاط بعنوان:
      "كيف أقترب من النبي ﷺ؟"
      يُطلب من المتعلمين أن يذكروا سلوكًا عدوانيًا يُبعدهم عنه، وسلوكًا حسنا يُقرّبهم منه، ثم يُكتب ذلك في لوحة جماعية تعرض في القسم.
    `
  },
  {
    id: 2,
    betise: "الكذب",
    reponse: `
    الأساليب النبويّة لتصحيح هذا الخطأ:
      *بناء مفهوم الصدق في شخصية الطفل لا بالخوف من الناس، بل بحبّ الله والحقّ
      🕊 من هديه ﷺ:
      عن عبد الله بن عامر رضي الله عنه قال:
      "دعتني أمي يومًا ورسول الله ﷺ قاعد في بيتنا، فقالت: تعال أُعطِك، فقال لها رسول الله ﷺ: ما أردت أن تُعطيه؟ قالت: أُعطيه تمرًا. فقال لها: أما إنك لو لم تُعطِه شيئًا، كُتبت عليك كذبة."
      📘 رواه أبو داود في سننه.
      الدلالة:
      النبي ﷺ يُربّي على الدقة في الوعد والقول، حتى في الأمور البسيطة مع الصغار. فهو يزرع خلق الصدق في اللاوعي، لا كواجب مفروض، بل كعهد أخلاقي.
      💡 التطبيق:
      تنظيم نشاط تمثيلي يحاكي مواقف يومية فيها وعود وأقوال، ويُطلب من المتعلمين التمييز بين ما هو صدق وما هو تزييف.
      تعليق لافتة صفية كُتب عليها:
      "الصادق محبوب عند الناس... وعند النبي ﷺ."
      ومنح وسام "صادق القسم" دوريًا لمن يُظهر صدقًا في كلامه واعترافاته.
      
      *تعميق قيمة الصدق من خلال حكايات نبوية ملهمة
      🕊 من هديه ﷺ:
      قصة توبة كعب بن مالك حين تخلّف عن غزوة تبوك، وصدق مع النبي ﷺ، فتاب الله عليه بعد شدّة، وقال له ﷺ:
      "أمّا هذا فقد صدق."
      📘 رواه البخاري ومسلم في صحيحهما.
      الدلالة:
      النبي ﷺ مدح الصدق حتى لو كان مؤلمًا، وأثبت أن الصدق يُؤدي إلى رضا الله، ولو تسبّب في تعب مؤقّت.
      💡التطبيق:
      سرد القصة بلغة مبسّطة، ثم مناقشتها:
      "هل كان كعب خائفًا؟ نعم... لكن هل كذب؟ لا. ماذا حصل له؟ تاب الله عليه، ومدحه النبي ﷺ."
      ثم يُكلّف التلاميذ بكتابة رسالة بعنوان:
      "موقف صدق أفتخر به."
    `
  },
  {
    id: 3,
    betise: "التنمّر",
    reponse: `
   الأساليب النبويّة لتصحيح هذا الخطأ :
      *ترسيخ مبدأ الأخوّة و الاحترام المتبادل
      🕊 من هديه ﷺأنّه قال:
      "المسلم أخو المسلم، لا يظلمه، ولا يخذله، ولا يُسلمه، كل المسلم على المسلم حرام: دمه، وماله، وعِرضه."
      📘 رواه مسلم في صحيحه.
      الدلالة:
      النبي ﷺ يُربّي على الأخوّة الحقيقية: لا ظلم، لا سخرية، لا تشهير.
      التنمّر خيانة لهذه الأخوّة.
      💡التطبيق:
      توزيع بطاقات مكتوب عليها صفات إيجابية: "رحيم، حنون، عادل، شجاع"
      ويُطلب من المتعلمين تقديم البطاقة لمن يرون فيه هذه الصفة، ليُشعروا بعضهم بقيمتهم.
      ثم يُقال:
      "لو كنت مكان زميلك المتنمَّر عليه… ماذا تتمنّى أن يقول لك الآخرون؟"
      ويُربط ذلك بقول النبي ﷺ:
      "لا يظلمه، ولا يُسلمه."
      
      * التفريق بين السلوك الغلط و صاحبه
      النبي ﷺ علّمنا أن نُسمي الأفعال لا الأشخاص
      🕊 من هديه ﷺ:
      جاءه رجل يشرب الخمر مرارًا، فلما لعنه بعض الصحابة، قال النبي ﷺ:
      "لا تلعنوه، فوالله ما علمتُ إلا أنه يحبّ الله ورسوله."
      📘 رواه البخاري في صحيحه.
      الدلالة:
      النبي ﷺ علّمنا أن نُفرّق بين الخطأ والإنسان.
      فلا نُحقّر الطفل الذي يُخطئ، ولا نُشهر به، هذا أصل تربوي يُدمّر جذور التنمّر.
      💡التطبيق:
      حصة "الفعل ليس أنا"
      يُقدَّم للتلاميذ كرتان، على الأولى يُكتب "سلوك سيّئ"، وعلى الثانية "شخص طيّب".
      ثم يُقال لهم:
      "قد أكره الكذب… لكن هذا لا يعني أني أكره من كذب."
      يُدرّبهم المعلم على تفكيك الخطأ عن الشخص، كما فعل النبي ﷺ.
    `
  },
  {
    id: 8,
    betise: "الغشّ في الامتحانات",
    reponse: `
الأساليب النبويّة لتصحيح هذا الخطأ :
      *بيان خطورة الغش على النفس والمجتمع
      🕊 من هديه ﷺأنّه قال:
      "من غشّ فليس منا."
      📘 رواه مسلم في صحيحه.
      الدلالة:
      النبي ﷺ يُبين أن الغش ليس مجرد خطأ عابر، بل هو خيانة للقيم الأخلاقية، ويُفسد العلاقات بين أفراد المجتمع. والغش يُؤدي إلى فقدان الثقة بين الناس.
      💡التطبيق:
      نقاش في القسم: يُطرح السؤال على التلاميذ:
      "ما رأيكم في الشخص الذي ينجح بالغش؟ هل هذا النجاح حقيقي؟"
      عرض مجموعة من الوضعيات لأشخاض نجحوا بالغش و أحدثوا كوارث في المجتمع مثل الأخطاء الطبيّة القاتلة،...
      
      *التوعية بضرورة الاعتماد على النفس والصدق في العمل
      🕊 من هديه ﷺ أنّه قال:
      "إن الله يحب إذا عمل أحدكم عملاً أن يتقنه."
      📘 رواه الطبراني في الأوسط وصحّحه بعض العلماء..
      الدلالة:
      النبي ﷺ يُحثّنا على الإتقان والصدق في العمل، وعدم اللجوء إلى أساليب غير نزيهة. فالإتقان يؤدي إلى الثقة بالنفس والتقدم الحقيقي.
      💡 التطبيق:
      في حال اكتشاف الغش، يُوجه المعلم التلميذ بلطف إلى حديث النبي ﷺ ويقول له:
      "النجاح الحقيقي يأتي عندما تبذل جهدك الكامل في العمل، فالله يحب الإتقان في كل شيء."
      تُنظم مسابقة إتقان في القسم، يُمنح فيها مكافآت للمتعلمين الذين يظهرون تقدمًا حقيقيًا في دراستهم، بدون الغش.
      
      *تعزيز مبدأ الأمانة والعدالة في التعامل مع الامتحانات
      🕊 من هديه ﷺأنّه قال:
      "من غش فليس منا،"
      📘 رواه مسلم في صحيحه.
      الدلالة:
      الغش خيانة للأمانة، وهو ليس مقتصرًا على الامتحانات فقط، بل يشمل كل جوانب الحياة، ويُؤثر على العلاقات الشخصية والمهنية.
      💡 التطبيق:
      قبل الامتحانات، يُنظّم المعلم حوارًا توعويًا مع التلاميذ حول أهمية الأمانة في الحياة والدراسة، ويُسألون:
      "كيف يمكنك أن تكون أمينًا في دراستك؟"
      ويُحثّون على أن يتذكروا أن ما يتعلمونه هو من أجلهم، وليس فقط من أجل الحصول على درجات.
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
      {/* En-tête avec logos et titre */}
      <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
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

      {/* Sous-titre */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#4f772d] font-bold mb-8 font-amiri italic text-center leading-relaxed"
      >
        قائمة الأخطاء وتصحيحها
      </motion.p>

      {/* Liste des bêtises */}
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
                    className="cursor-pointer transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:bg-white/30 backdrop-blur-sm rounded-2xl w-full sm:w-1/2"
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
          className="mt-8 bg-[#4f772d] text-white text-lg sm:text-xl md:text-2xl font-amiri font-bold py-3 px-6 rounded-lg shadow-md hover:bg-[#31572c] hover:shadow-lg transition duration-300 flex items-center gap-3"
        >
          <FaArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          العودة إلى القائمة
        </motion.button>
      )}
      {/* Nouveau bouton pour retourner aux domaines */}
      <motion.button
        onClick={() => router.push('/')} // Redirection vers la page relation-with-creed
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