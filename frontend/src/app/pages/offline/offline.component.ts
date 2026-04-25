import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-offline',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="offline-container">
      <div class="offline-content">
        <div class="offline-icon">📡</div>
        <h1>You're Offline</h1>
        <p>It looks like you've lost your internet connection.</p>
        <p class="offline-message">
          Don't worry! You can still browse our menu and view your saved reservations.
        </p>
        <button (click)="retry()" class="retry-button">
          Try Again
        </button>
      </div>
    </div>
  `,
  styles: [`
    .offline-container {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      background: linear-gradient(135deg, #0A0A0A 0%, #1a1a1a 100%);
      color: #fff;
    }

    .offline-content {
      text-align: center;
      padding: 2rem;
      max-width: 500px;
    }

    .offline-icon {
      font-size: 4rem;
      margin-bottom: 1rem;
      animation: pulse 2s infinite;
    }

    h1 {
      font-size: 2rem;
      margin-bottom: 1rem;
      font-family: 'Caudex', serif;
    }

    p {
      font-size: 1rem;
      margin-bottom: 0.5rem;
      color: #ccc;
    }

    .offline-message {
      margin-bottom: 2rem;
      color: #aaa;
    }

    .retry-button {
      background-color: #E67E22;
      color: #fff;
      border: none;
      padding: 0.75rem 2rem;
      font-size: 1rem;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    .retry-button:hover {
      background-color: #d66e12;
    }

    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }
  `]
})
export class OfflineComponent {
  retry(): void {
    window.location.reload();
  }
}
