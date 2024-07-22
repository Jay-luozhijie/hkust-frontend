import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(HttpBackend) // 加载翻译文件
  .use(LanguageDetector) // 自动检测用户语言
  .use(initReactI18next) // 传递i18n实例给react-i18next
  .init({
    lng: 'zh', // 强制设置默认语言为简体中文
    fallbackLng: 'zh', // 默认回退语言
    debug: true, // 启用调试模式以查看加载详情
    interpolation: {
      escapeValue: false, // 不需要对结果做转义处理
    },
    react: {
      useSuspense: false // 在组件中使用翻译不使用Suspense
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json' // 设置语言文件路径
    },
    supportedLngs: ['en', 'zh', 'tc'], // 定义支持的语言列表
    nonExplicitSupportedLngs: true // 支持非明确区分语言代码（如'zh'自动适应'zh-CN'和'zh-TW'）
  });

export default i18n;
