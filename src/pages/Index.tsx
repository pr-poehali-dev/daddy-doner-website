import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const menuItems = [
    {
      name: 'Классический Дёнер',
      description: 'Сочное мясо курицы, свежие овощи, фирменный соус',
      price: '350₽',
      image: '/placeholder.svg',
      popular: true
    },
    {
      name: 'Острый Дёнер',
      description: 'С перцем халапеньо и острым соусом',
      price: '380₽',
      image: '/placeholder.svg',
      popular: false
    },
    {
      name: 'Мега Дёнер',
      description: 'Двойная порция мяса для больших аппетитов',
      price: '490₽',
      image: '/placeholder.svg',
      popular: true
    },
    {
      name: 'Картофель Фри',
      description: 'Хрустящий картофель с соусом на выбор',
      price: '150₽',
      image: '/placeholder.svg',
      popular: false
    },
    {
      name: 'Комбо',
      description: 'Дёнер + картофель фри + напиток',
      price: '499₽',
      image: '/placeholder.svg',
      popular: true
    },
    {
      name: 'Лаваш',
      description: 'Домашний лаваш с сыром и зеленью',
      price: '280₽',
      image: '/placeholder.svg',
      popular: false
    }
  ];

  const reviews = [
    {
      name: 'Алексей М.',
      rating: 5,
      text: 'Лучший дёнер в городе! Всегда свежие ингредиенты и щедрые порции.',
      date: '2 дня назад'
    },
    {
      name: 'Мария К.',
      rating: 5,
      text: 'Обожаю это место! Быстро, вкусно, недорого. Особенно нравится фирменный соус.',
      date: '5 дней назад'
    },
    {
      name: 'Дмитрий В.',
      rating: 5,
      text: 'Заказываю здесь постоянно. Всегда на высоте — и вкус, и обслуживание.',
      date: '1 неделю назад'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-2xl">🌯</span>
              </div>
              <h1 className="text-2xl font-bold text-foreground">ДядяДенер</h1>
            </div>
            
            <div className="hidden md:flex items-center gap-6">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Главная
              </button>
              <button
                onClick={() => scrollToSection('menu')}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Меню
              </button>
              <button
                onClick={() => scrollToSection('reviews')}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Отзывы
              </button>
              <button
                onClick={() => scrollToSection('contacts')}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Контакты
              </button>
            </div>

            <Button className="bg-primary hover:bg-primary/90">
              <Icon name="Phone" className="mr-2 h-4 w-4" />
              Позвонить
            </Button>
          </div>
        </div>
      </nav>

      <section id="hero" className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="bg-primary text-primary-foreground text-lg">🔥 Открыто до 23:00</Badge>
              <h2 className="text-5xl md:text-7xl font-bold leading-tight">
                Самый вкусный
                <span className="text-primary"> дёнер</span> в городе
              </h2>
              <p className="text-xl text-muted-foreground">
                Свежие ингредиенты, щедрые порции и легендарный фирменный соус. 
                Приготовлено с любовью для вас!
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg">
                  <Icon name="ShoppingBag" className="mr-2 h-5 w-5" />
                  Заказать онлайн
                </Button>
                <Button size="lg" variant="outline" className="text-lg">
                  <Icon name="MapPin" className="mr-2 h-5 w-5" />
                  Как добраться
                </Button>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-primary">10+</div>
                  <div className="text-sm text-muted-foreground">лет на рынке</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">15k+</div>
                  <div className="text-sm text-muted-foreground">счастливых клиентов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">4.9</div>
                  <div className="text-sm text-muted-foreground">средний рейтинг</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl rounded-full"></div>
              <img
                src="/placeholder.svg"
                alt="Дёнер ДядяДенер"
                className="relative rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="py-16 px-4 bg-card/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-secondary text-secondary-foreground text-lg">🍽️ Наше меню</Badge>
            <h3 className="text-4xl md:text-5xl font-bold mb-4">
              Выбирайте любимое
            </h3>
            <p className="text-xl text-muted-foreground">
              Приготовлено из свежих продуктов по авторским рецептам
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.map((item, index) => (
              <Card 
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card border-border overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {item.popular && (
                    <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                      <Icon name="Star" className="h-3 w-3 mr-1" />
                      Хит
                    </Badge>
                  )}
                </div>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-xl font-bold">{item.name}</h4>
                    <span className="text-xl font-bold text-primary">{item.price}</span>
                  </div>
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    <Icon name="ShoppingCart" className="mr-2 h-4 w-4" />
                    Добавить в корзину
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary text-primary-foreground text-lg">⭐ Отзывы</Badge>
            <h3 className="text-4xl md:text-5xl font-bold mb-4">
              Что говорят наши гости
            </h3>
            <p className="text-xl text-muted-foreground">
              Более 15,000 довольных клиентов
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">{review.text}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">{review.name}</span>
                    <span className="text-sm text-muted-foreground">{review.date}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16 px-4 bg-card/50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <Badge className="bg-secondary text-secondary-foreground text-lg">📍 Контакты</Badge>
              <h3 className="text-4xl font-bold">Приходите к нам!</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Адрес</div>
                    <div className="text-muted-foreground">ул. Примерная, д. 123, Москва</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Телефон</div>
                    <div className="text-muted-foreground">+7 (999) 123-45-67</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Часы работы</div>
                    <div className="text-muted-foreground">Пн-Вс: 10:00 - 23:00</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-muted-foreground">info@dyadyadener.ru</div>
                  </div>
                </div>
              </div>
              <div className="pt-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Icon name="MessageCircle" className="mr-2 h-5 w-5" />
                  Написать в WhatsApp
                </Button>
              </div>
            </div>
            <div className="bg-muted rounded-2xl h-[400px] flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <Icon name="Map" className="h-16 w-16 mx-auto mb-4" />
                <p>Карта загружается...</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border bg-card/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🌯</span>
                </div>
                <h4 className="text-xl font-bold">ДядяДенер</h4>
              </div>
              <p className="text-muted-foreground">
                Самый вкусный дёнер в городе с 2014 года
              </p>
            </div>
            <div>
              <h5 className="font-bold mb-4">Меню</h5>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Дёнер</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Комбо</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Напитки</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Десерты</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4">Информация</h5>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Доставка</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Вакансии</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4">Соцсети</h5>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <Icon name="Instagram" className="h-5 w-5 text-primary" />
                </a>
                <a href="#" className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <Icon name="Facebook" className="h-5 w-5 text-primary" />
                </a>
                <a href="#" className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <Icon name="Twitter" className="h-5 w-5 text-primary" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>© 2024 ДядяДенер. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
