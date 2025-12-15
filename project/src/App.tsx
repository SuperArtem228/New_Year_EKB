import { useState } from 'react';
import {
  Phone,
  MessageCircle,
  Clock,
  Users,
  Music,
  Sparkles,
  Gift,
  Calendar,
  CheckCircle,
  Star,
  ChevronDown,
  Menu,
  X
} from 'lucide-react';

const WHATSAPP_LINK = "https://api.whatsapp.com/send?phone=79024450763&text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%21%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%BA%D0%B0%D0%B7%D0%B0%D1%82%D1%8C%20%D0%94%D0%B5%D0%B4%D0%B0%20%D0%9C%D0%BE%D1%80%D0%BE%D0%B7%D0%B0%20%D0%B8%20%D0%A1%D0%BD%D0%B5%D0%B3%D1%83%D1%80%D0%BE%D1%87%D0%BA%D1%83%21";

function App() {
  const [selectedDate, setSelectedDate] = useState<'27-30' | '31'>('27-30');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header
        onNavigate={scrollToSection}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <Hero />
      <Program />
      <Pricing selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      <AdditionalServices />
      <Corporate />
      <HowToOrder />
      <Gallery />
      <Reviews />
      <FAQ />
      <Contacts />
    </div>
  );
}

function Header({ onNavigate, mobileMenuOpen, setMobileMenuOpen }: {
  onNavigate: (id: string) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}) {
  const navItems = [
    { id: 'program', label: 'Программа' },
    { id: 'pricing', label: 'Цены' },
    { id: 'services', label: 'Доп. услуги' },
    { id: 'corporate', label: 'Корпоративы' },
    { id: 'how-to-order', label: 'Как заказать' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contacts', label: 'Контакты' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <Sparkles className="w-8 h-8 text-red-600" />
            <div>
              <h1 className="text-xl font-bold text-gray-900">Дед Мороз и Снегурочка</h1>
              <p className="text-sm text-gray-600">Екатеринбург</p>
            </div>
          </div>

          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className="text-gray-700 hover:text-red-600 transition-colors text-sm font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center space-x-2 bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-all font-medium"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Заказать</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-gray-700"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className="block w-full text-left py-2 text-gray-700 hover:text-red-600 transition-colors"
              >
                {item.label}
              </button>
            ))}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition-all font-medium mt-4"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Заказать</span>
            </a>
          </div>
        )}
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-red-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Дед Мороз и Снегурочка<br />на заказ в Екатеринбурге
          </h2>
          <p className="text-xl sm:text-2xl text-gray-700 mb-12">
            Уютное детское поздравление за 20 минут.<br />На русском или английском.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <Clock className="w-10 h-10 text-red-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">20 минут</h3>
              <p className="text-gray-600 text-sm">Оптимальная длительность для детского внимания</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <Users className="w-10 h-10 text-red-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Два персонажа</h3>
              <p className="text-gray-600 text-sm">Дед Мороз и Снегурочка всегда вместе</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <Music className="w-10 h-10 text-red-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Своя колонка</h3>
              <p className="text-gray-600 text-sm">Профессиональное музыкальное сопровождение</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 bg-red-600 text-white px-8 py-4 rounded-full hover:bg-red-700 transition-all font-semibold text-lg shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="w-6 h-6" />
              <span>Заказать</span>
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 bg-white text-red-600 px-8 py-4 rounded-full hover:bg-gray-50 transition-all font-semibold text-lg border-2 border-red-600"
            >
              <Calendar className="w-6 h-6" />
              <span>Уточнить дату</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Program() {
  const features = [
    {
      icon: <Gift className="w-6 h-6" />,
      title: 'Квартира, дом, детсад, школа',
      description: 'Приезжаем в любую локацию в Екатеринбурге'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Программа под возраст',
      description: 'Адаптируем поздравление под возраст детей'
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: 'Русский и английский',
      description: 'Поздравление на двух языках в рамках программы'
    },
    {
      icon: <Music className="w-6 h-6" />,
      title: 'Интерактив и игры',
      description: 'Хороводы, загадки, танцы с детьми'
    },
  ];

  return (
    <section id="program" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Что включено в программу</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Классическое новогоднее поздравление с учетом возраста и пожеланий
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-gradient-to-br from-red-50 to-white p-6 rounded-2xl border border-red-100">
              <div className="text-red-600 mb-4">{feature.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-green-50 border border-green-200 rounded-2xl p-6 text-center">
          <p className="text-gray-800">
            <strong>Важно:</strong> Программа длится 20 минут — оптимальное время для детского внимания.
            Родители могут снимать фото и видео бесплатно.
          </p>
        </div>
      </div>
    </section>
  );
}

function Pricing({ selectedDate, setSelectedDate }: {
  selectedDate: '27-30' | '31';
  setSelectedDate: (date: '27-30' | '31') => void;
}) {
  const packages = {
    standard: {
      name: 'Стандарт',
      prices: {
        '27-30': 2000,
        '31': 5000,
      },
      features: [
        'Дед Мороз + Снегурочка',
        '20 минут программы',
        'Хороводы и игры',
        'Музыкальное сопровождение',
        'Поздравление на русском/английском',
      ],
    },
    vip: {
      name: 'VIP',
      prices: {
        '27-30': 3000,
        '31': 7000,
      },
      features: [
        'Всё из пакета Стандарт',
        'Персонализация поздравления',
        'Сценарий под ключ',
        'Индивидуальный подход',
        'Учёт увлечений ребёнка',
      ],
      badge: 'Популярный',
    },
  };

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-green-50 via-white to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Цены на поздравления</h2>
          <p className="text-lg text-gray-600 mb-8">Выберите дату и подходящий пакет</p>

          <div className="inline-flex bg-white rounded-full p-1 shadow-md">
            <button
              onClick={() => setSelectedDate('27-30')}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                selectedDate === '27-30'
                  ? 'bg-red-600 text-white'
                  : 'text-gray-700 hover:text-red-600'
              }`}
            >
              27–30 декабря
            </button>
            <button
              onClick={() => setSelectedDate('31')}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                selectedDate === '31'
                  ? 'bg-red-600 text-white'
                  : 'text-gray-700 hover:text-red-600'
              }`}
            >
              31 декабря
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-8">
          <PriceCard
            name={packages.standard.name}
            price={packages.standard.prices[selectedDate]}
            features={packages.standard.features}
          />
          <PriceCard
            name={packages.vip.name}
            price={packages.vip.prices[selectedDate]}
            features={packages.vip.features}
            badge={packages.vip.badge}
            highlighted
          />
        </div>

        <div className="bg-yellow-50 border-2 border-yellow-300 rounded-2xl p-6 text-center max-w-3xl mx-auto">
          <Star className="w-8 h-8 text-yellow-600 mx-auto mb-3" />
          <p className="text-lg font-semibold text-gray-900 mb-2">
            Скидка 15% при бронировании 15–20 декабря
          </p>
          <p className="text-gray-700">
            Успейте забронировать со скидкой! Скидка применяется к указанным ценам.
          </p>
        </div>
      </div>
    </section>
  );
}

function PriceCard({
  name,
  price,
  features,
  badge,
  highlighted
}: {
  name: string;
  price: number;
  features: string[];
  badge?: string;
  highlighted?: boolean;
}) {
  return (
    <div className={`relative bg-white rounded-2xl shadow-lg p-8 ${highlighted ? 'border-2 border-red-600 scale-105' : 'border border-gray-200'}`}>
      {badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white px-4 py-1 rounded-full text-sm font-medium">
          {badge}
        </div>
      )}

      <h3 className="text-2xl font-bold text-gray-900 mb-4">{name}</h3>

      <div className="mb-6">
        <span className="text-5xl font-bold text-gray-900">{price.toLocaleString('ru-RU')}</span>
        <span className="text-2xl text-gray-600"> ₽</span>
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start space-x-3">
            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>

      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center justify-center space-x-2 w-full py-4 rounded-full font-semibold transition-all ${
          highlighted
            ? 'bg-red-600 text-white hover:bg-red-700 shadow-lg'
            : 'bg-gray-100 text-red-600 hover:bg-gray-200'
        }`}
      >
        <MessageCircle className="w-5 h-5" />
        <span>Заказать</span>
      </a>
    </div>
  );
}

function AdditionalServices() {
  const services = [
    {
      title: 'Персонализация поздравления',
      price: '+1000 ₽',
      description: 'Учитываем имя, увлечения ребёнка, что можно и нельзя упоминать',
      icon: <Sparkles className="w-8 h-8" />
    },
    {
      title: 'Сценарий под ключ',
      price: '+2000 ₽',
      description: 'Полностью индивидуальный сценарий без реквизита',
      icon: <Gift className="w-8 h-8" />
    },
    {
      title: 'Расширенный формат',
      price: 'По договорённости',
      description: 'Дольше или активнее занять детей — обсуждается в WhatsApp',
      icon: <Clock className="w-8 h-8" />
    },
    {
      title: 'Больше английского',
      price: 'По договорённости',
      description: 'Если нужно больше английского как обучение — уточните в WhatsApp',
      icon: <MessageCircle className="w-8 h-8" />
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Дополнительные услуги</h2>
          <p className="text-lg text-gray-600">Сделайте поздравление ещё более особенным</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-gradient-to-br from-white to-red-50 border border-red-100 rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div className="text-red-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-2xl font-bold text-red-600 mb-3">{service.price}</p>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">Все дополнительные услуги обсуждаются индивидуально</p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-green-600 text-white px-8 py-4 rounded-full hover:bg-green-700 transition-all font-semibold"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Обсудить в WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function Corporate() {
  return (
    <section id="corporate" className="py-20 bg-gradient-to-br from-red-50 to-green-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Users className="w-16 h-16 text-red-600 mx-auto mb-6" />
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Для корпоративов</h2>
        <p className="text-xl text-gray-700 mb-8">
          Организуем новогоднее поздравление для вашего коллектива.<br />
          Формат и стоимость подбираем индивидуально.
        </p>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 bg-red-600 text-white px-8 py-4 rounded-full hover:bg-red-700 transition-all font-semibold text-lg shadow-lg"
        >
          <MessageCircle className="w-6 h-6" />
          <span>Написать в WhatsApp</span>
        </a>
      </div>
    </section>
  );
}

function HowToOrder() {
  const steps = [
    {
      number: '1',
      title: 'Напишите в WhatsApp',
      description: 'Отправьте сообщение по кнопке выше или напрямую по номеру',
    },
    {
      number: '2',
      title: 'Уточните детали',
      description: 'Расскажите о возрасте детей, дате, локации и пожеланиях',
    },
    {
      number: '3',
      title: 'Подтвердите слот',
      description: 'Согласуем удобное время и забронируем за вами',
    },
    {
      number: '4',
      title: 'Оплата переводом',
      description: 'Производится переводом перед поздравлением',
    },
  ];

  return (
    <section id="how-to-order" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Как заказать</h2>
          <p className="text-lg text-gray-600">Простой процесс из четырёх шагов</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-gradient-to-br from-red-600 to-red-700 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">{step.title}</h3>
              <p className="text-gray-600 text-center">{step.description}</p>

              {index < steps.length - 1 && (
                <ChevronDown className="hidden lg:block absolute top-8 -right-4 w-8 h-8 text-gray-300 rotate-[-90deg]" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-green-600 text-white px-8 py-4 rounded-full hover:bg-green-700 transition-all font-semibold text-lg shadow-lg"
          >
            <MessageCircle className="w-6 h-6" />
            <span>Начать оформление</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Фотогалерея</h2>
          <p className="text-lg text-gray-600">Добавим ваши фото и видео после поздравлений</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="aspect-square bg-gradient-to-br from-red-100 to-green-100 rounded-2xl flex items-center justify-center border-2 border-dashed border-gray-300">
              <div className="text-center">
                <Sparkles className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-500 text-sm">Фото {item}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center bg-blue-50 border border-blue-200 rounded-2xl p-6">
          <p className="text-gray-800">
            Родители могут снимать фото и видео бесплатно во время поздравления.<br />
            Лучшие моменты мы добавим в галерею на сайте.
          </p>
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Отзывы</h2>
        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-dashed border-yellow-300 rounded-2xl p-12">
          <Star className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
          <p className="text-xl text-gray-700">
            Отзывы добавим после новогоднего сезона
          </p>
          <p className="text-gray-600 mt-2">
            Сейчас мы принимаем заказы на декабрь 2024
          </p>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Сколько длится поздравление?',
      answer: '20 минут — это оптимальное время, чтобы дети не устали и получили максимум впечатлений.',
    },
    {
      question: 'Поздравление на английском — как это работает?',
      answer: 'В рамках программы персонажи могут использовать английский язык для приветствий, поздравлений и простых фраз. Это не полноценный урок, а элемент новогоднего праздника.',
    },
    {
      question: 'В каких форматах работаете?',
      answer: 'Мы работаем везде в Екатеринбурге: квартиры, дома, детские сады, школы и корпоративные мероприятия. Выездов за город нет.',
    },
    {
      question: 'Что нужно подготовить к приезду?',
      answer: 'Ничего особенного! Просто немного места для хоровода и игр. Свою колонку привезём с собой.',
    },
    {
      question: 'На сколько детей рассчитана программа?',
      answer: 'Программа подходит для любого количества детей — от одного ребёнка до группы в детском саду или школе.',
    },
    {
      question: 'А колонка у вас есть?',
      answer: 'Да! Мы всегда привозим свою профессиональную колонку с музыкальным сопровождением.',
    },
    {
      question: 'Как с корпоративами?',
      answer: 'Для корпоративных мероприятий мы подбираем формат и стоимость индивидуально. Напишите в WhatsApp, и мы всё обсудим.',
    },
    {
      question: 'Какие даты доступны?',
      answer: 'Мы работаем 27, 28, 29, 30 и 31 декабря. Цены различаются в зависимости от даты — 31 декабря дороже.',
    },
    {
      question: 'Как проходит оплата?',
      answer: 'Оплата производится переводом. Все детали обсуждаем в WhatsApp при бронировании.',
    },
    {
      question: 'Можно ли снимать фото и видео?',
      answer: 'Конечно! Родители могут свободно снимать фото и видео во время поздравления — это бесплатно.',
    },
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-red-50 via-white to-green-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Частые вопросы</h2>
          <p className="text-lg text-gray-600">Не нашли ответ? Напишите в WhatsApp</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">Остались вопросы? Мы на связи!</p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-green-600 text-white px-8 py-4 rounded-full hover:bg-green-700 transition-all font-semibold"
          >
            <MessageCircle className="w-6 h-6" />
            <span>Задать вопрос</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function Contacts() {
  return (
    <footer id="contacts" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Sparkles className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-2">Дед Мороз и Снегурочка</h2>
          <p className="text-gray-400">Екатеринбург</p>
        </div>

        <div className="flex flex-col items-center space-y-6 mb-12">
          <a
            href="tel:+79024450763"
            className="flex items-center space-x-3 text-xl hover:text-red-400 transition-colors"
          >
            <Phone className="w-6 h-6" />
            <span>+7 902 445-07-63</span>
          </a>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-green-600 text-white px-8 py-4 rounded-full hover:bg-green-700 transition-all font-semibold text-lg"
          >
            <MessageCircle className="w-6 h-6" />
            <span>Написать в WhatsApp</span>
          </a>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© 2024 Дед Мороз и Снегурочка • Екатеринбург</p>
          <p className="mt-2 text-sm">Все обсуждения и бронирование через WhatsApp</p>
        </div>
      </div>
    </footer>
  );
}

export default App;
