import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PwaService } from '../../services/pwa.service';

@Component({
  selector: 'app-install-prompt',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="showPrompt" class="install-prompt">
      <div class="prompt-content">
        <div class="prompt-icon">📱</div>
        <div class="prompt-text">
          <h3>Install NooR App</h3>
          <p>Get quick access to our menu and reservations</p>
        </div>
        <div class="prompt-actions">
          <button (click)="install()" class="install-btn">Install</button>
          <button (click)="dismiss()" class="dismiss-btn">Not Now</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .install-prompt {
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 1000;
      animation: slideUp 0.3s ease-out;
    }

    .prompt-content {
      background: linear-gradient(135deg, #0A0A0A 0%, #1a1a1a 100%);
      border: 1px solid #E67E22;
      border-radius: 8px;
      padding: 1rem;
      display: flex;
      align-items: center;
      gap: 1rem;
      color: #fff;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
      max-width: 350px;
    }

    .prompt-icon {
      font-size: 2rem;
      flex-shrink: 0;
    }

    .prompt-text {
      flex: 1;
    }

    .prompt-text h3 {
      margin: 0;
      font-size: 1rem;
      font-family: 'Caudex', serif;
    }

    .prompt-text p {
      margin: 0.25rem 0 0 0;
      font-size: 0.875rem;
      color: #aaa;
    }

    .prompt-actions {
      display: flex;
      gap: 0.5rem;
      flex-shrink: 0;
    }

    button {
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      cursor: pointer;
      font-size: 0.875rem;
      transition: all 0.2s;
    }

    .install-btn {
      background-color: #E67E22;
      color: #fff;
    }

    .install-btn:hover {
      background-color: #d66e12;
    }

    .dismiss-btn {
      background-color: transparent;
      color: #aaa;
      border: 1px solid #444;
    }

    .dismiss-btn:hover {
      color: #fff;
      border-color: #666;
    }

    @keyframes slideUp {
      from {
        transform: translateY(100%);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }

    @media (max-width: 600px) {
      .install-prompt {
        bottom: 10px;
        right: 10px;
        left: 10px;
      }

      .prompt-content {
        flex-direction: column;
        text-align: center;
      }
    }
  `]
})
export class InstallPromptComponent implements OnInit {
  private pwaService = inject(PwaService);
  showPrompt = false;
  private deferredPrompt: any;

  ngOnInit(): void {
    window.addEventListener('beforeinstallprompt', (e: any) => {
      e.preventDefault();
      this.deferredPrompt = e;
      this.showPrompt = this.pwaService.isInstallable();
    });
  }

  install(): void {
    if (this.deferredPrompt) {
      this.deferredPrompt.prompt();
      this.deferredPrompt.userChoice.then((choiceResult: any) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the install prompt');
        }
        this.deferredPrompt = null;
        this.showPrompt = false;
      });
    }
  }

  dismiss(): void {
    this.showPrompt = false;
  }
}
