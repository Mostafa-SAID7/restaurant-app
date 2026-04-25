import { Injectable, inject } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PwaService {
  private swUpdate = inject(SwUpdate);
  private updateAvailable$ = new Subject<void>();

  constructor() {
    this.checkForUpdates();
  }

  private checkForUpdates(): void {
    if (!this.swUpdate.isEnabled) {
      return;
    }

    // Check for updates periodically
    setInterval(() => {
      this.swUpdate.checkForUpdate().catch(err => {
        console.error('Error checking for service worker updates:', err);
      });
    }, 60000); // Check every minute

    // Listen for available updates
    this.swUpdate.versionUpdates.subscribe(event => {
      if (event.type === 'VERSION_READY') {
        this.updateAvailable$.next();
      }
    });
  }

  getUpdateAvailable$() {
    return this.updateAvailable$.asObservable();
  }

  activateUpdate(): void {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.activateUpdate().then(() => {
        window.location.reload();
      }).catch(err => {
        console.error('Error activating service worker update:', err);
      });
    }
  }

  isOnline(): boolean {
    return navigator.onLine;
  }

  isInstallable(): boolean {
    return 'BeforeInstallPromptEvent' in window;
  }
}
