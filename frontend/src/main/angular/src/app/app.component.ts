import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container">
      <header>
        <h1>🚀 Spring Boot + Angular 20</h1>
        <p>Najnowsze stabilne wersje</p>
      </header>

      <main>
        <div class="hello-section">
          <h2>Hello World!</h2>
          <div class="versions">
            <div class="version-card">
              <h3>☕ Java</h3>
              <p>Version 21 (LTS)</p>
            </div>
            <div class="version-card">
              <h3>🍃 Spring Boot</h3>
              <p>Version 3.5.5</p>
            </div>
            <div class="version-card">
              <h3>🅰️ Angular</h3>
              <p>Version 20</p>
            </div>
          </div>
        </div>

        <div class="api-section">
          <h3>Test API Connection</h3>
          <button (click)="testBackend()" [disabled]="loading">
            {{ loading ? 'Testowanie...' : 'Test Backend API' }}
          </button>

          <div class="response" *ngIf="apiResponse">
            <h4>Odpowiedź z Spring Boot:</h4>
            <pre>{{ apiResponse | json }}</pre>
          </div>

          <div class="error" *ngIf="apiError">
            <h4>Błąd połączenia:</h4>
            <p>{{ apiError }}</p>
            <small>Sprawdź czy backend działa na porcie 8080</small>
          </div>
        </div>
      </main>

      <footer>
        <p>✨ Gotowy projekt do importu w IntelliJ IDEA</p>
      </footer>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Spring Boot Angular App';
  apiResponse: any = null;
  apiError: string = '';
  loading = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    console.log('🚀 Application started successfully!');
    console.log('Frontend: Angular 20');
    console.log('Backend: Spring Boot 3.5.5');
  }

  testBackend() {
    this.loading = true;
    this.apiResponse = null;
    this.apiError = '';

    this.http.get('/api/hello').subscribe({
      next: (response) => {
        this.apiResponse = response;
        this.loading = false;
        console.log('✅ Backend connection successful:', response);
      },
      error: (error) => {
        this.apiError = `Nie można połączyć się z backendem: ${error.message}`;
        this.loading = false;
        console.error('❌ Backend connection failed:', error);
      }
    });
  }
}