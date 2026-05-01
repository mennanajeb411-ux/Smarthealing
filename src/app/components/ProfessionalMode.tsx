import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Upload, Activity, Droplet, Thermometer, AlertTriangle, TrendingUp } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Slider } from './ui/slider';

interface ProfessionalModeProps {
  onNavigate: (screen: string) => void;
  language: 'en' | 'ar';
}

export default function ProfessionalMode({ onNavigate, language }: ProfessionalModeProps) {
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    age: '',
    gender: '',
    diabetes: '',
    woundType: '',
    painScore: [5],
    temperature: '',
    ph: '',
    moisture: ''
  });

  const content = {
    en: {
      title: "Professional Wound Analysis",
      subtitle: "Clinical Grade Assessment",
      patientData: "Patient Data",
      age: "Age",
      gender: "Gender",
      male: "Male",
      female: "Female",
      diabetes: "Diabetes Status",
      yes: "Yes",
      no: "No",
      woundType: "Wound Type",
      burn: "Burn",
      laceration: "Laceration",
      diabeticUlcer: "Diabetic Ulcer",
      surgical: "Surgical",
      pressure: "Pressure Ulcer",
      clinicalParams: "Clinical Parameters",
      painScore: "Pain Score (0-10)",
      temperature: "Temperature (°C)",
      ph: "pH Level",
      moisture: "Moisture Level",
      low: "Low",
      moderate: "Moderate",
      high: "High",
      uploadImage: "Upload Wound Image",
      analyze: "Analyze Wound",
      analyzing: "Analyzing clinical data...",
      results: "Clinical Analysis Results",
      riskScore: "Risk Score",
      healingPrediction: "Healing Prediction",
      recommendedPatch: "Recommended Patch",
      treatmentProtocol: "Treatment Protocol",
      priority: "Priority Level",
      followupSchedule: "Follow-up Schedule",
      newAnalysis: "New Analysis",
      exportReport: "Export PDF Report"
    },
    ar: {
      title: "التحليل الطبي المتخصص للجروح",
      subtitle: "تقييم سريري احترافي",
      patientData: "بيانات المريض",
      age: "العمر",
      gender: "الجنس",
      male: "ذكر",
      female: "أنثى",
      diabetes: "حالة السكري",
      yes: "نعم",
      no: "لا",
      woundType: "نوع الجرح",
      burn: "حرق",
      laceration: "جرح قطعي",
      diabeticUlcer: "قرحة سكري",
      surgical: "جراحي",
      pressure: "قرحة فراش",
      clinicalParams: "المعايير السريرية",
      painScore: "مستوى الألم (0-10)",
      temperature: "درجة الحرارة (°م)",
      ph: "مستوى الحموضة",
      moisture: "مستوى الرطوبة",
      low: "منخفض",
      moderate: "متوسط",
      high: "عالي",
      uploadImage: "رفع صورة الجرح",
      analyze: "تحليل الجرح",
      analyzing: "جاري تحليل البيانات السريرية...",
      results: "نتائج التحليل السريري",
      riskScore: "درجة الخطورة",
      healingPrediction: "توقع الشفاء",
      recommendedPatch: "اللاصق الموصى به",
      treatmentProtocol: "بروتوكول العلاج",
      priority: "مستوى الأولوية",
      followupSchedule: "جدول المتابعة",
      newAnalysis: "تحليل جديد",
      exportReport: "تصدير تقرير PDF"
    }
  };

  const t = content[language];

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAnalyze = () => {
    setAnalyzing(true);
    setResult(null);

    setTimeout(() => {
      const riskScore = Math.floor(Math.random() * 40) + 60;
      const healingDays = Math.floor(Math.random() * 10) + 7;

      const patchesData = {
        en: [
          { name: 'Collagen Patch', desc: 'Promotes natural tissue regeneration', image: 'collagen' },
          { name: 'Stem Cell Patch', desc: 'Advanced cellular healing technology', image: 'stemcell' },
          { name: 'Growth Factor Patch', desc: 'Accelerates wound closure', image: 'growth' },
          { name: 'Antimicrobial Patch', desc: 'Prevents infection and bacteria', image: 'antimicrobial' },
          { name: 'Smart Hydrogel Patch', desc: 'Moisture-balanced intelligent dressing', image: 'hydrogel' }
        ],
        ar: [
          { name: 'لاصق كولاجين', desc: 'يعزز تجديد الأنسجة الطبيعي', image: 'collagen' },
          { name: 'لاصق خلايا جذعية', desc: 'تقنية شفاء خلوي متقدمة', image: 'stemcell' },
          { name: 'لاصق عامل النمو', desc: 'يسرع إغلاق الجرح', image: 'growth' },
          { name: 'لاصق مضاد للميكروبات', desc: 'يمنع العدوى والبكتيريا', image: 'antimicrobial' },
          { name: 'لاصق هيدروجيل ذكي', desc: 'ضمادة ذكية متوازنة الرطوبة', image: 'hydrogel' }
        ]
      };

      const priorities = {
        en: ['Emergency', 'Urgent', 'Routine'],
        ar: ['طارئ', 'عاجل', 'روتيني']
      };

      const selectedPatch = patchesData[language][Math.floor(Math.random() * patchesData[language].length)];

      setResult({
        riskScore,
        riskLevel: riskScore > 80 ? 'High' : riskScore > 60 ? 'Moderate' : 'Low',
        riskColor: riskScore > 80 ? 'text-red-400' : riskScore > 60 ? 'text-yellow-400' : 'text-green-400',
        healingDays,
        patch: selectedPatch,
        priority: priorities[language][riskScore > 80 ? 0 : riskScore > 60 ? 1 : 2],
        priorityColor: riskScore > 80 ? 'bg-red-500/20 text-red-400' : riskScore > 60 ? 'bg-yellow-500/20 text-yellow-400' : 'bg-green-500/20 text-green-400',
        protocol: language === 'en'
          ? `1. Debridement if needed\n2. Apply ${selectedPatch.name}\n3. Antibiotic coverage\n4. Monitor for infection`
          : `1. إزالة الأنسجة الميتة إذا لزم الأمر\n2. تطبيق ${selectedPatch.name}\n3. تغطية بالمضادات الحيوية\n4. مراقبة العدوى`,
        followup: language === 'en'
          ? `Day 3: Initial check\nDay 7: Progress review\nDay ${healingDays}: Expected healing`
          : `اليوم 3: فحص أولي\nاليوم 7: مراجعة التقدم\nاليوم ${healingDays}: الشفاء المتوقع`
      });
      setAnalyzing(false);
    }, 3000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative z-10 min-h-screen px-6 py-8"
    >
      <div className="max-w-6xl mx-auto">
        <Button
          variant="ghost"
          onClick={() => onNavigate('choice')}
          className="text-white/60 hover:text-white mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          {language === 'en' ? 'Back' : 'رجوع'}
        </Button>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold text-white mb-2">{t.title}</h1>
          <p className="text-lg text-white/70">{t.subtitle}</p>
        </motion.div>

        {!analyzing && !result && (
          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="glass-card-strong p-6">
              <h3 className="text-xl font-semibold text-white mb-6">{t.patientData}</h3>

              <div className="space-y-4">
                <div>
                  <Label className="text-white/80">{t.age}</Label>
                  <Input
                    type="number"
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                    className="bg-white/5 border-white/10 text-white mt-2"
                    placeholder="35"
                  />
                </div>

                <div>
                  <Label className="text-white/80">{t.gender}</Label>
                  <Select value={formData.gender} onValueChange={(v) => setFormData({ ...formData, gender: v })}>
                    <SelectTrigger className="bg-white/5 border-white/10 text-white mt-2">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">{t.male}</SelectItem>
                      <SelectItem value="female">{t.female}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="text-white/80">{t.diabetes}</Label>
                  <Select value={formData.diabetes} onValueChange={(v) => setFormData({ ...formData, diabetes: v })}>
                    <SelectTrigger className="bg-white/5 border-white/10 text-white mt-2">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="yes">{t.yes}</SelectItem>
                      <SelectItem value="no">{t.no}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="text-white/80">{t.woundType}</Label>
                  <Select value={formData.woundType} onValueChange={(v) => setFormData({ ...formData, woundType: v })}>
                    <SelectTrigger className="bg-white/5 border-white/10 text-white mt-2">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="burn">{t.burn}</SelectItem>
                      <SelectItem value="laceration">{t.laceration}</SelectItem>
                      <SelectItem value="diabetic">{t.diabeticUlcer}</SelectItem>
                      <SelectItem value="surgical">{t.surgical}</SelectItem>
                      <SelectItem value="pressure">{t.pressure}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </Card>

            <Card className="glass-card-strong p-6">
              <h3 className="text-xl font-semibold text-white mb-6">{t.clinicalParams}</h3>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <Label className="text-white/80">{t.painScore}</Label>
                    <span className="text-cyan-400 font-semibold">{formData.painScore[0]}/10</span>
                  </div>
                  <Slider
                    value={formData.painScore}
                    onValueChange={(v) => setFormData({ ...formData, painScore: v })}
                    max={10}
                    step={1}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label className="text-white/80">{t.temperature}</Label>
                  <div className="relative mt-2">
                    <Thermometer className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                    <Input
                      type="number"
                      value={formData.temperature}
                      onChange={(e) => setFormData({ ...formData, temperature: e.target.value })}
                      className="bg-white/5 border-white/10 text-white pl-10"
                      placeholder="37.0"
                      step="0.1"
                    />
                  </div>
                </div>

                <div>
                  <Label className="text-white/80">{t.ph}</Label>
                  <Input
                    type="number"
                    value={formData.ph}
                    onChange={(e) => setFormData({ ...formData, ph: e.target.value })}
                    className="bg-white/5 border-white/10 text-white mt-2"
                    placeholder="7.0"
                    step="0.1"
                  />
                </div>

                <div>
                  <Label className="text-white/80">{t.moisture}</Label>
                  <Select value={formData.moisture} onValueChange={(v) => setFormData({ ...formData, moisture: v })}>
                    <SelectTrigger className="bg-white/5 border-white/10 text-white mt-2">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">{t.low}</SelectItem>
                      <SelectItem value="moderate">{t.moderate}</SelectItem>
                      <SelectItem value="high">{t.high}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </Card>

            <Card className="glass-card-strong p-6 lg:col-span-2">
              <Label className="text-white/80 block mb-4">{t.uploadImage}</Label>
              {uploadedImage ? (
                <div className="relative">
                  <img
                    src={uploadedImage}
                    alt="Uploaded wound"
                    className="w-full h-64 object-cover rounded-xl"
                  />
                  <Button
                    onClick={() => setUploadedImage(null)}
                    variant="destructive"
                    size="sm"
                    className="absolute top-2 right-2"
                  >
                    {language === 'en' ? 'Remove' : 'إزالة'}
                  </Button>
                </div>
              ) : (
                <label className="border-2 border-dashed border-white/20 rounded-xl p-12 flex flex-col items-center justify-center cursor-pointer hover:border-cyan-400/50 transition-colors">
                  <Upload className="w-12 h-12 text-cyan-400 mb-4" />
                  <p className="text-white/70">{language === 'en' ? 'Click to upload or drag and drop' : 'انقر للرفع أو اسحب وأفلت'}</p>
                  <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                </label>
              )}
            </Card>

            <div className="lg:col-span-2">
              <Button
                onClick={handleAnalyze}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-6 text-lg"
              >
                <Activity className="w-5 h-5 mr-2" />
                {t.analyze}
              </Button>
            </div>
          </div>
        )}

        {analyzing && (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="glass-card-strong rounded-3xl p-12 text-center"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center"
            >
              <Activity className="w-12 h-12 text-white" />
            </motion.div>
            <h2 className="text-2xl font-bold text-white mb-4">{t.analyzing}</h2>
            <div className="flex justify-center gap-2">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                  className="w-2 h-2 bg-cyan-400 rounded-full"
                />
              ))}
            </div>
          </motion.div>
        )}

        {result && (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="space-y-6"
          >
            {uploadedImage && (
              <Card className="glass-card-strong p-4">
                <img
                  src={uploadedImage}
                  alt="Analyzed wound"
                  className="w-full h-80 object-cover rounded-xl"
                />
              </Card>
            )}

            <Card className="glass-card-strong p-6">
              <h2 className="text-2xl font-bold text-white mb-6">{t.results}</h2>

              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="glass-card rounded-xl p-6 text-center">
                  <p className="text-white/60 text-sm mb-2">{t.riskScore}</p>
                  <div className={`text-4xl font-bold ${result.riskColor} mb-1`}>{result.riskScore}%</div>
                  <div className="text-white/80">{result.riskLevel}</div>
                </div>

                <div className="glass-card rounded-xl p-6 text-center">
                  <p className="text-white/60 text-sm mb-2">{t.healingPrediction}</p>
                  <div className="text-4xl font-bold text-cyan-400 mb-1">{result.healingDays}</div>
                  <div className="text-white/80">{language === 'en' ? 'days' : 'أيام'}</div>
                </div>

                <div className={`glass-card rounded-xl p-6 text-center ${result.priorityColor}`}>
                  <p className="text-white/60 text-sm mb-2">{t.priority}</p>
                  <div className="text-2xl font-bold">{result.priority}</div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="glass-card rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
                    <Droplet className="w-5 h-5 text-cyan-400" />
                    {t.recommendedPatch}
                  </h3>
                  <div className="mb-4">
                    <PatchImage type={result.patch.image} />
                  </div>
                  <p className="text-white font-semibold text-lg mb-2">{result.patch.name}</p>
                  <p className="text-white/70 text-sm">{result.patch.desc}</p>
                </div>

                <div className="glass-card rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-blue-400" />
                    {t.followupSchedule}
                  </h3>
                  <p className="text-white/70 whitespace-pre-line text-sm">{result.followup}</p>
                </div>

                <div className="glass-card rounded-xl p-6 md:col-span-2">
                  <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-yellow-400" />
                    {t.treatmentProtocol}
                  </h3>
                  <p className="text-white/70 whitespace-pre-line leading-relaxed">{result.protocol}</p>
                </div>
              </div>

              <div className="flex gap-4 mt-6">
                <Button
                  onClick={() => {
                    setResult(null);
                    setUploadedImage(null);
                  }}
                  className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
                >
                  {t.newAnalysis}
                </Button>
                <Button
                  variant="outline"
                  className="border-cyan-400/50 text-cyan-300 hover:bg-cyan-400/10"
                >
                  {t.exportReport}
                </Button>
              </div>
            </Card>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

function PatchImage({ type }: { type: string }) {
  const getPatchImageUrl = () => {
    switch (type) {
      case 'collagen':
        return 'https://images.unsplash.com/photo-1527456272-623855a33ca8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080';
      case 'stemcell':
        return 'https://images.unsplash.com/photo-1643660527074-0ddcec3bda96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080';
      case 'growth':
        return 'https://images.unsplash.com/photo-1561328165-f0b762a9508e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080';
      case 'antimicrobial':
        return 'https://images.unsplash.com/photo-1688565631957-0306970fdd74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080';
      case 'hydrogel':
        return 'https://images.unsplash.com/photo-1752842350805-cc481da22935?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080';
      default:
        return 'https://images.unsplash.com/photo-1578841513541-8bb6d894dc38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080';
    }
  };

  const getPatchGradient = () => {
    switch (type) {
      case 'collagen':
        return 'from-pink-500/80 to-rose-500/80';
      case 'stemcell':
        return 'from-purple-500/80 to-indigo-500/80';
      case 'growth':
        return 'from-green-500/80 to-emerald-500/80';
      case 'antimicrobial':
        return 'from-yellow-500/80 to-orange-500/80';
      case 'hydrogel':
        return 'from-cyan-500/80 to-blue-500/80';
      default:
        return 'from-gray-500/80 to-slate-500/80';
    }
  };

  return (
    <div className="w-full h-48 rounded-xl relative overflow-hidden group">
      <img
        src={getPatchImageUrl()}
        alt="Medical patch"
        className="w-full h-full object-cover"
      />
      <div className={`absolute inset-0 bg-gradient-to-br ${getPatchGradient()} mix-blend-multiply group-hover:opacity-75 transition-opacity`} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
    </div>
  );
}
