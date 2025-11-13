import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ServiceCard {
  title: string;
  location: string;
  price: string;
  rating: number;
  reviews: number;
  availability: string;
  tags: string[];
  image: string;
  badge?: string;
}

interface ExpertCard {
  name: string;
  specialty: string;
  city: string;
  rating: number;
  jobs: number;
  image: string;
  badges: string[];
}

interface StepCard {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="page">
      <header class="top-bar">
        <div class="brand">
          <div class="brand-icon">R</div>
          <span>Reserva</span>
        </div>
        <nav class="nav-links">
          <a href="#">Usługi</a>
          <a href="#">Jak to działa</a>
          <a href="#">Dla firm</a>
          <a href="#">Pomoc</a>
        </nav>
        <div class="cta-group">
          <button class="cta cta--ghost">Zaloguj się</button>
          <button class="cta cta--primary">Zostań wykonawcą</button>
        </div>
      </header>

      <section class="hero">
        <div class="hero-content">
          <h1>Rezerwuj zaufane usługi w swojej okolicy</h1>
          <p>Porównaj opinie, dostępność i ceny specjalistów w kilka sekund.</p>

          <div class="search-panel">
            <div class="search-fields">
              <label class="search-field">
                <span>Gdzie</span>
                <input type="text" placeholder="Wpisz lokalizację" />
              </label>
              <label class="search-field">
                <span>Usługa</span>
                <input type="text" placeholder="Czego potrzebujesz?" />
              </label>
              <label class="search-field">
                <span>Termin</span>
                <input type="text" placeholder="Dodaj datę" />
              </label>
              <label class="search-field">
                <span>Dodatkowe informacje</span>
                <input type="text" placeholder="Liczba godzin, zakres..." />
              </label>
              <button class="search-button">
                <span>🔍</span>
                Wyszukaj oferty
              </button>
            </div>

            <div class="quick-filters">
              <span>Popularne wyszukiwania:</span>
              <button *ngFor="let filter of quickFilters">{{ filter }}</button>
            </div>
          </div>
        </div>
        <div class="hero-stats">
          <div>
            <strong>2 300+</strong>
            <span>zweryfikowanych wykonawców</span>
          </div>
          <div>
            <strong>98%</strong>
            <span>pozytywnych opinii</span>
          </div>
          <div>
            <strong>24/7</strong>
            <span>wsparcie klienta</span>
          </div>
        </div>
      </section>

      <main class="content">
        <section class="section">
          <div class="section-header">
            <h2>Popularne usługi w Warszawie</h2>
            <a href="#">Zobacz wszystkie</a>
          </div>
          <div class="card-grid">
            <article class="service-card" *ngFor="let service of popularServices">
              <div class="card-image">
                <img [src]="service.image" [alt]="service.title" />
                <span class="badge" *ngIf="service.badge">{{ service.badge }}</span>
              </div>
              <div class="card-content">
                <div class="card-header">
                  <h3>{{ service.title }}</h3>
                  <span class="price">{{ service.price }}</span>
                </div>
                <p class="location">{{ service.location }}</p>
                <div class="rating">
                  <span class="stars">★ {{ service.rating }}</span>
                  <span class="reviews">({{ service.reviews }} opinii)</span>
                </div>
                <div class="tags">
                  <span class="tag" *ngFor="let tag of service.tags">{{ tag }}</span>
                </div>
                <p class="availability">{{ service.availability }}</p>
              </div>
            </article>
          </div>
        </section>

        <section class="section">
          <div class="section-header">
            <h2>Dostępne we Wrocławiu na weekend</h2>
            <a href="#">Rezerwuj teraz</a>
          </div>
          <div class="card-grid">
            <article class="service-card" *ngFor="let service of weekendServices">
              <div class="card-image">
                <img [src]="service.image" [alt]="service.title" />
                <span class="badge" *ngIf="service.badge">{{ service.badge }}</span>
              </div>
              <div class="card-content">
                <div class="card-header">
                  <h3>{{ service.title }}</h3>
                  <span class="price">{{ service.price }}</span>
                </div>
                <p class="location">{{ service.location }}</p>
                <div class="rating">
                  <span class="stars">★ {{ service.rating }}</span>
                  <span class="reviews">({{ service.reviews }} opinii)</span>
                </div>
                <div class="tags">
                  <span class="tag" *ngFor="let tag of service.tags">{{ tag }}</span>
                </div>
                <p class="availability">{{ service.availability }}</p>
              </div>
            </article>
          </div>
        </section>

        <section class="section experts">
          <div class="section-header">
            <h2>Polecani specjaliści</h2>
            <a href="#">Zobacz wszystkich</a>
          </div>
          <div class="experts-grid">
            <article class="expert-card" *ngFor="let expert of featuredExperts">
              <img [src]="expert.image" [alt]="expert.name" />
              <div class="expert-content">
                <div class="expert-header">
                  <h3>{{ expert.name }}</h3>
                  <span class="expert-rating">★ {{ expert.rating }}</span>
                </div>
                <p class="expert-specialty">{{ expert.specialty }} • {{ expert.city }}</p>
                <p class="expert-jobs">{{ expert.jobs }} zrealizowanych zleceń</p>
                <div class="tags">
                  <span class="tag" *ngFor="let badge of expert.badges">{{ badge }}</span>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section class="section how-it-works">
          <div class="section-header">
            <h2>Jak to działa?</h2>
          </div>
          <div class="steps-grid">
            <article class="step-card" *ngFor="let step of howItWorks">
              <div class="step-icon">{{ step.icon }}</div>
              <h3>{{ step.title }}</h3>
              <p>{{ step.description }}</p>
            </article>
          </div>
        </section>
      </main>

      <footer class="footer">
        <div class="footer-links">
          <a href="#">Regulamin</a>
          <a href="#">Polityka prywatności</a>
          <a href="#">Centrum pomocy</a>
        </div>
        <p>© {{ currentYear }} Reserva. Wszystkie prawa zastrzeżone.</p>
      </footer>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  readonly currentYear = new Date().getFullYear();

  readonly quickFilters = [
    'Sprzątanie mieszkań',
    'Hydraulik 24h',
    'Naprawa AGD',
    'Elektryk na już',
    'Montaż klimatyzacji'
  ];

  readonly popularServices: ServiceCard[] = [
    {
      title: 'Generalne sprzątanie apartamentu',
      location: 'Warszawa • Śródmieście',
      price: 'od 199 zł',
      rating: 4.9,
      reviews: 182,
      availability: 'Najbliższy termin: jutro, 08:00',
      tags: ['Środki eco', 'Własny sprzęt', 'Faktura VAT'],
      image: 'assets/services/cleaning.svg',
      badge: 'Najczęściej wybierane'
    },
    {
      title: 'Serwis i naprawa pralek',
      location: 'Warszawa • Praga Północ',
      price: 'od 149 zł',
      rating: 4.8,
      reviews: 96,
      availability: 'Dostępne dzisiaj od 16:30',
      tags: ['Diagnoza w cenie', 'Gwarancja 12 m-cy'],
      image: 'assets/services/appliance.svg'
    },
    {
      title: 'Montaż lamp i oświetlenia',
      location: 'Warszawa • Mokotów',
      price: 'od 129 zł',
      rating: 5.0,
      reviews: 74,
      availability: 'Termin ekspresowy: dziś 19:00',
      tags: ['Certyfikowany elektryk', 'Drobne naprawy gratis'],
      image: 'assets/services/lighting.svg'
    },
    {
      title: 'Mycie okien w biurach',
      location: 'Warszawa • Wola',
      price: 'od 249 zł',
      rating: 4.7,
      reviews: 68,
      availability: 'Rezerwacje na ten tydzień',
      tags: ['Ubezpieczenie OC', 'Praca po godzinach'],
      image: 'assets/services/windows.svg'
    }
  ];

  readonly weekendServices: ServiceCard[] = [
    {
      title: 'Malowanie pokoju dziecięcego',
      location: 'Wrocław • Krzyki',
      price: 'od 390 zł',
      rating: 4.9,
      reviews: 54,
      availability: 'Termin weekendowy dostępny',
      tags: ['Bezpłatna wycena', 'Farby w cenie'],
      image: 'assets/services/painting.svg',
      badge: 'Nowość'
    },
    {
      title: 'Mycie i pranie tapicerki',
      location: 'Wrocław • Śródmieście',
      price: 'od 249 zł',
      rating: 4.8,
      reviews: 88,
      availability: 'Zostały 2 wolne terminy',
      tags: ['Dojazd gratis', 'Pranie parowe'],
      image: 'assets/services/upholstery.svg'
    },
    {
      title: 'Całodobowy hydraulik',
      location: 'Wrocław • Fabryczna',
      price: 'od 180 zł',
      rating: 4.9,
      reviews: 143,
      availability: 'Reakcja w 45 minut',
      tags: ['24/7', 'Brak dodatkowych opłat'],
      image: 'assets/services/plumber.svg'
    },
    {
      title: 'Ogrodnik na sobotę',
      location: 'Wrocław • Psie Pole',
      price: 'od 159 zł',
      rating: 4.6,
      reviews: 41,
      availability: 'Najbliższa sobota 09:00',
      tags: ['Projekt rabaty', 'Pielęgnacja trawnika'],
      image: 'assets/services/gardening.svg'
    }
  ];

  readonly featuredExperts: ExpertCard[] = [
    {
      name: 'Anna Nowicka',
      specialty: 'Profesjonalne sprzątanie',
      city: 'Warszawa',
      rating: 4.97,
      jobs: 312,
      image: 'assets/experts/expert-anna.svg',
      badges: ['Superwykonawca', '5 lat doświadczenia']
    },
    {
      name: 'Piotr Malinowski',
      specialty: 'Złota rączka i drobne naprawy',
      city: 'Kraków',
      rating: 4.92,
      jobs: 198,
      image: 'assets/experts/expert-piotr.svg',
      badges: ['Polecany przez klientów', 'Dojazd w cenie']
    },
    {
      name: 'Natalia Wysocka',
      specialty: 'Projektowanie wnętrz',
      city: 'Gdańsk',
      rating: 5.0,
      jobs: 87,
      image: 'assets/experts/expert-natalia.svg',
      badges: ['Indywidualne projekty', 'Rozliczenie etapami']
    }
  ];

  readonly howItWorks: StepCard[] = [
    {
      icon: '📝',
      title: 'Opisz zlecenie',
      description: 'Wpisz lokalizację, termin i krótko opisz czego potrzebujesz.'
    },
    {
      icon: '🤝',
      title: 'Porównaj oferty',
      description: 'Otrzymaj propozycje od zweryfikowanych specjalistów i sprawdź opinie.'
    },
    {
      icon: '📅',
      title: 'Zarezerwuj online',
      description: 'Wybierz dogodny termin, potwierdź szczegóły i zapłać bezpiecznie.'
    }
  ];
}
