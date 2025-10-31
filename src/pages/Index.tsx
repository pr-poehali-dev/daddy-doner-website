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

  const promos = [
    {
      title: 'Каждый 5-й денер в подарок!',
      description: 'Покупай 4 денера — получай 5-й бесплатно. Акция действует до конца месяца.',
      discount: '-20%',
      icon: 'Gift'
    },
    {
      title: 'Комбо за 499₽',
      description: 'Денер + картофель фри + напиток. Лучшее предложение дня!',
      discount: '499₽',
      icon: 'Flame'
    },
    {
      title: 'Скидка 15% после 22:00',
      description: 'Ночные совы получают выгоду! Все меню со скидкой.',
      discount: '-15%',
      icon: 'Moon'
    }
  ];

  const gallery = [
    { id: 1, title: 'Классический Денер', image: '/placeholder.svg' },
    { id: 2, title: 'Острый Денер', image: '/placeholder.svg' },
    { id: 3, title: 'Фирменный соус', image: '/placeholder.svg' },
    { id: 4, title: 'Картофель Фри', image: '/placeholder.svg' },
    { id: 5, title: 'Свежие овощи', image: '/placeholder.svg' },
    { id: 6, title: 'Десерты', image: '/placeholder.svg' }
  ];

  const reviews = [
    {
      name: 'Алексей М.',
      rating: 5,
      text: 'Лучший денер в городе! Всегда свежие ингредиенты и щедрые порции. Ребята молодцы!',
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
      text: 'Заказываю здесь постоянно. Всегда на высоте — и вкус, и обслуживание. Рекомендую!',
      date: '1 неделю назад'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b-4 border-primary retro-pattern">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-2xl">🌯</span>
              </div>
              <h1 className="text-2xl font-bold text-foreground">Вертел я...</h1>
            </div>
            
            <div className="hidden md:flex items-center gap-6">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Главная
              </button>
              <button
                onClick={() => scrollToSection('promos')}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Акции
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Галерея
              </button>
              <button
                onClick={() => scrollToSection('reviews')}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Отзывы
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
              <Badge className="bg-secondary text-secondary-foreground text-lg">🔥 Открыто до 2:00</Badge>
              <h2 className="text-5xl md:text-7xl font-bold leading-tight">
                Вертел я...
                <span className="text-primary"> ваш голод!</span>
              </h2>
              <p className="text-2xl retro-text text-accent-foreground mt-4">
                «Здесь самый сочный дёнер с 90-х»
              </p>
              <p className="text-lg text-muted-foreground mt-2">
                Щедрые порции, легендарные соусы и атмосфера ретро-гаража. 
                Вертел я правила — только рецепты!
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg">
                  <Icon name="ShoppingBag" className="mr-2 h-5 w-5" />
                  Заказать сейчас
                </Button>
                <Button size="lg" variant="outline" className="text-lg">
                  <Icon name="MapPin" className="mr-2 h-5 w-5" />
                  Найти нас
                </Button>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-primary">5+</div>
                  <div className="text-sm text-muted-foreground">лет опыта</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">10k+</div>
                  <div className="text-sm text-muted-foreground">довольных гостей</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">4.9</div>
                  <div className="text-sm text-muted-foreground">рейтинг</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl rounded-full"></div>
              <img
                src="/placeholder.svg"
                alt="Денер"
                className="relative rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="promos" className="py-16 px-4 bg-card/50 retro-pattern">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-secondary text-secondary-foreground text-lg">🎉 Жгучие предложения</Badge>
            <h3 className="text-4xl md:text-5xl font-bold mb-4">
              Вертел я... эти цены!
            </h3>
            <p className="text-xl text-accent-foreground retro-text">
              Горячие акции как в 90-е
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {promos.map((promo, index) => (
              <Card 
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card border-border overflow-hidden"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon name={promo.icon as any} className="h-6 w-6 text-primary" />
                    </div>
                    <Badge className="bg-secondary text-secondary-foreground text-lg font-bold">
                      {promo.discount}
                    </Badge>
                  </div>
                  <h4 className="text-xl font-bold mb-2">{promo.title}</h4>
                  <p className="text-muted-foreground mb-4">{promo.description}</p>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary text-primary-foreground text-lg">📸 Видеосалон вкуса</Badge>
            <h3 className="text-4xl md:text-5xl font-bold mb-4">
              Вертел я... смотри что готовим!
            </h3>
            <p className="text-xl text-accent-foreground retro-text">
              Кассета «Хиты гаража»
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((item) => (
              <div
                key={item.id}
                className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-white font-bold text-lg">{item.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-16 px-4 bg-card/50 retro-pattern">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-secondary text-secondary-foreground text-lg">⭐ Гостевая книга</Badge>
            <h3 className="text-4xl md:text-5xl font-bold mb-4">
              Вертел я... послушай народ!
            </h3>
            <p className="text-xl text-accent-foreground retro-text">
              10k+ друзей гаража
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-foreground mb-4 leading-relaxed">"{review.text}"</p>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div>
                      <div className="font-semibold">{review.name}</div>
                      <div className="text-sm text-muted-foreground">{review.date}</div>
                    </div>
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="User" className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 border-t-4 border-primary retro-pattern">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🌯</span>
                </div>
                <h4 className="text-xl font-bold">Вертел я...</h4>
              </div>
              <p className="text-accent-foreground retro-text text-sm">
                Вертел я правила — только рецепты с 1999
              </p>
            </div>
            
            <div>
              <h5 className="font-bold mb-3">Меню</h5>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Денеры</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Комбо</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Напитки</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Десерты</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-bold mb-3">Контакты</h5>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" className="h-4 w-4" />
                  +7 (999) 123-45-67
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" className="h-4 w-4" />
                  ул. Ленина, 123
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Clock" className="h-4 w-4" />
                  10:00 - 02:00
                </li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-bold mb-3">Соцсети</h5>
              <div className="flex gap-3">
                <Button size="icon" variant="outline" className="hover:bg-primary hover:text-primary-foreground">
                  <Icon name="Instagram" className="h-5 w-5" />
                </Button>
                <Button size="icon" variant="outline" className="hover:bg-primary hover:text-primary-foreground">
                  <Icon name="Facebook" className="h-5 w-5" />
                </Button>
                <Button size="icon" variant="outline" className="hover:bg-primary hover:text-primary-foreground">
                  <Icon name="Twitter" className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
            <p>© 2024 Вертел я... Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;