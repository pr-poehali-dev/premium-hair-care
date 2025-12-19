import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      category: 'Окрашивание волос',
      items: [
        { name: 'Окрашивание в один тон', price: 'от 8 000 ₽' },
        { name: 'Сложное окрашивание (балаяж, шатуш)', price: 'от 15 000 ₽' },
        { name: 'Омбре / Сомбре', price: 'от 12 000 ₽' },
        { name: 'Airtouch', price: 'от 18 000 ₽' },
        { name: 'Тонирование', price: 'от 4 000 ₽' },
        { name: 'Мелирование', price: 'от 10 000 ₽' },
      ],
    },
    {
      category: 'Уход за волосами',
      items: [
        { name: 'Ботокс для волос', price: 'от 6 000 ₽' },
        { name: 'Кератиновое выпрямление', price: 'от 10 000 ₽' },
        { name: 'Нанопластика волос', price: 'от 12 000 ₽' },
        { name: 'Глубокое восстановление Olaplex', price: 'от 5 000 ₽' },
        { name: 'Ламинирование', price: 'от 4 500 ₽' },
        { name: 'SPA-уход премиум', price: 'от 7 000 ₽' },
      ],
    },
    {
      category: 'Стрижки',
      items: [
        { name: 'Женская стрижка', price: 'от 3 500 ₽' },
        { name: 'Мужская стрижка', price: 'от 2 000 ₽' },
        { name: 'Стрижка на длинные волосы', price: 'от 4 500 ₽' },
        { name: 'Детская стрижка', price: 'от 1 500 ₽' },
        { name: 'Стрижка челки', price: 'от 500 ₽' },
        { name: 'Стрижка горячими ножницами', price: 'от 5 000 ₽' },
      ],
    },
    {
      category: 'Укладки',
      items: [
        { name: 'Укладка на короткие волосы', price: 'от 2 000 ₽' },
        { name: 'Укладка на средние волосы', price: 'от 2 500 ₽' },
        { name: 'Укладка на длинные волосы', price: 'от 3 500 ₽' },
        { name: 'Вечерняя укладка', price: 'от 4 000 ₽' },
        { name: 'Свадебная прическа', price: 'от 8 000 ₽' },
        { name: 'Локоны / Кудри', price: 'от 3 000 ₽' },
      ],
    },
  ];

  const blogPosts = [
    {
      title: 'Тренды окрашивания 2024',
      excerpt: 'Узнайте о самых актуальных техниках окрашивания этого сезона',
      image: 'https://cdn.poehali.dev/projects/046555e9-6e84-48cc-b6b0-5d602eb06341/files/aefd8134-de20-4742-837b-3afe9215c060.jpg',
    },
    {
      title: 'Секреты здоровых волос',
      excerpt: 'Профессиональные советы по уходу за волосами в домашних условиях',
      image: 'https://cdn.poehali.dev/projects/046555e9-6e84-48cc-b6b0-5d602eb06341/files/aefd8134-de20-4742-837b-3afe9215c060.jpg',
    },
    {
      title: 'Кератиновое выпрямление: мифы и реальность',
      excerpt: 'Всё что нужно знать о процедуре кератинового выпрямления',
      image: 'https://cdn.poehali.dev/projects/046555e9-6e84-48cc-b6b0-5d602eb06341/files/aefd8134-de20-4742-837b-3afe9215c060.jpg',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-primary">Премиум Уход</h1>
            <div className="hidden md:flex gap-8">
              <button
                onClick={() => scrollToSection('home')}
                className="text-foreground hover:text-primary transition-colors"
              >
                Главная
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-foreground hover:text-primary transition-colors"
              >
                О бренде
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-foreground hover:text-primary transition-colors"
              >
                Услуги
              </button>
              <button
                onClick={() => scrollToSection('blog')}
                className="text-foreground hover:text-primary transition-colors"
              >
                Блог
              </button>
              <button
                onClick={() => scrollToSection('contacts')}
                className="text-foreground hover:text-primary transition-colors"
              >
                Контакты
              </button>
            </div>
            <Button
              onClick={() => scrollToSection('contacts')}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Записаться
            </Button>
          </div>
        </div>
      </nav>

      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative pt-20"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://cdn.poehali.dev/projects/046555e9-6e84-48cc-b6b0-5d602eb06341/files/aefd8134-de20-4742-837b-3afe9215c060.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 text-center text-white animate-fade-in">
          <h2 className="text-6xl md:text-8xl font-bold mb-6">
            Роскошь для<br />ваших волос
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-90">
            Премиальный уход и профессиональное окрашивание от мастеров высшей категории
          </p>
          <Button
            onClick={() => scrollToSection('services')}
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6"
          >
            Посмотреть услуги
          </Button>
        </div>
      </section>

      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-12 animate-fade-in">
              О бренде
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p className="animate-fade-in">
                Премиум Уход — это пространство, где роскошь встречается с профессионализмом.
                Мы специализируемся на комплексном уходе за волосами, используя только
                лучшие продукты мировых брендов.
              </p>
              <p className="animate-fade-in">
                Наши мастера регулярно проходят обучение в ведущих академиях Европы,
                осваивая самые современные техники окрашивания и ухода. Каждый клиент
                получает индивидуальный подход и консультацию по домашнему уходу.
              </p>
              <p className="animate-fade-in">
                Мы создали атмосферу, где каждая деталь продумана для вашего комфорта:
                от ароматного кофе до эргономичных кресел и спокойной музыки.
              </p>
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <Card className="text-center animate-scale-in">
                  <CardContent className="pt-6">
                    <div className="text-4xl mb-4">✨</div>
                    <h3 className="text-2xl font-bold mb-2">10+ лет</h3>
                    <p className="text-muted-foreground">опыта в индустрии красоты</p>
                  </CardContent>
                </Card>
                <Card className="text-center animate-scale-in">
                  <CardContent className="pt-6">
                    <div className="text-4xl mb-4">💎</div>
                    <h3 className="text-2xl font-bold mb-2">5000+</h3>
                    <p className="text-muted-foreground">довольных клиентов</p>
                  </CardContent>
                </Card>
                <Card className="text-center animate-scale-in">
                  <CardContent className="pt-6">
                    <div className="text-4xl mb-4">🏆</div>
                    <h3 className="text-2xl font-bold mb-2">Премиум</h3>
                    <p className="text-muted-foreground">косметика мировых брендов</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-4 animate-fade-in">
            Наши услуги
          </h2>
          <p className="text-center text-xl text-muted-foreground mb-16">
            Полный спектр услуг по уходу за волосами
          </p>
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {services.map((category, idx) => (
                <AccordionItem
                  key={idx}
                  value={`item-${idx}`}
                  className="bg-white rounded-lg border-2 border-border overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-secondary/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-2xl font-semibold">{category.category}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <div className="space-y-3 pt-2">
                      {category.items.map((item, itemIdx) => (
                        <div
                          key={itemIdx}
                          className="flex justify-between items-center py-3 border-b border-border last:border-0"
                        >
                          <span className="text-lg">{item.name}</span>
                          <span className="text-lg font-semibold text-primary">
                            {item.price}
                          </span>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section id="blog" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 animate-fade-in">
            Блог
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {blogPosts.map((post, idx) => (
              <Card
                key={idx}
                className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer animate-scale-in"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-64 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{post.title}</h3>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <Button variant="outline" className="w-full">
                    Читать далее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 animate-fade-in">
            Контакты
          </h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Icon name="MapPin" size={24} className="text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Адрес салона</h3>
                      <p className="text-muted-foreground">
                        г. Москва, ул. Тверская, д. 1
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Icon name="Phone" size={24} className="text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Телефон</h3>
                      <p className="text-muted-foreground">+7 (999) 123-45-67</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Icon name="Clock" size={24} className="text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Режим работы</h3>
                      <p className="text-muted-foreground">
                        Пн-Вс: 10:00 - 21:00
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Icon name="Mail" size={24} className="text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Email</h3>
                      <p className="text-muted-foreground">
                        info@premium-uhod.ru
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4">Записаться на приём</h3>
                  <form className="space-y-4">
                    <div>
                      <input
                        type="text"
                        placeholder="Ваше имя"
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        placeholder="Телефон"
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <select className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                        <option>Выберите услугу</option>
                        {services.map((category, idx) => (
                          <optgroup key={idx} label={category.category}>
                            {category.items.map((item, itemIdx) => (
                              <option key={itemIdx}>{item.name}</option>
                            ))}
                          </optgroup>
                        ))}
                      </select>
                    </div>
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold">Премиум Уход</h3>
            <p className="text-sm opacity-80">
              ИП Ирзина Татьяна Васильевна
            </p>
            <p className="text-sm opacity-80">
              ИНН: 123456789012 | ОГРНИП: 123456789012345
            </p>
            <div className="flex justify-center gap-6 pt-4">
              <Icon name="Instagram" size={24} className="cursor-pointer hover:opacity-80" />
              <Icon name="Phone" size={24} className="cursor-pointer hover:opacity-80" />
              <Icon name="Mail" size={24} className="cursor-pointer hover:opacity-80" />
            </div>
            <p className="text-xs opacity-60 pt-4">
              © 2024 Премиум Уход. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
