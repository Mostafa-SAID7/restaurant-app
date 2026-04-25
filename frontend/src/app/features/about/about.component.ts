import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IconComponent } from '../../shared/components/icon.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterLink, IconComponent],
  templateUrl: './about.component.html'
})
export class AboutComponent {
  private fb = inject(FormBuilder);

  sending     = signal(false);
  messageSent = signal(false);

  contactForm = this.fb.group({
    name:    ['', Validators.required],
    email:   ['', [Validators.required, Validators.email]],
    subject: ['', Validators.required],
    message: ['', Validators.required],
  });

  team = [
    { name: 'Marcus Voss',    role: 'Executive Chef',    icon: 'chef', bio: 'Trained in Lyon and Tokyo, Chef Marcus brings two decades of Michelin-starred experience to every plate he creates at NooR.' },
    { name: 'Lucia Chen',     role: 'Head Sommelier',    icon: 'wine', bio: 'With a Masters in Viticulture from Bordeaux, Lucia curates our 500-label wine cellar and crafts the perfect pairing for every dish.' },
    { name: 'Sofia Renault',  role: 'Pastry Chef',       icon: 'category_desserts', bio: 'Sofia\'s dessert philosophy — precision meets poetry. Her chocolate noir has been featured in Bon Appétit and Food & Wine magazines.' },
  ];

  values = [
    { icon: 'leaf', title: 'Sustainability',      description: 'We source from certified organic farms and maintain a zero-food-waste kitchen policy.' },
    { icon: 'sparkles', title: 'Excellence',           description: 'Every dish that leaves our kitchen represents our relentless pursuit of perfection.' },
    { icon: 'handshake', title: 'Genuine Hospitality', description: 'We believe great food is made even better by genuine warmth and attentive service.' },
  ];

  contactDetails = [
    { icon: 'mapPin', label: 'Address', value: '18 West 29th Street, New York, NY 10001' },
    { icon: 'phone', label: 'Phone',   value: '+1 (555) NOOR-NYC' },
    { icon: 'envelope', label: 'Email',   value: 'reservations@noor.com' },
  ];

  hours = [
    { days: 'Mon – Thu', time: '6:00 pm – 11:00 pm' },
    { days: 'Fri – Sat', time: '6:00 pm – 1:00 am'  },
    { days: 'Sunday',    time: '6:00 pm – 10:00 pm' },
    { days: 'Lunch',     time: 'Fri – Sun from 12 pm' },
  ];

  sendMessage(): void {
    if (this.contactForm.invalid) { this.contactForm.markAllAsTouched(); return; }
    this.sending.set(true);
    setTimeout(() => {
      this.messageSent.set(true);
      this.sending.set(false);
      this.contactForm.reset();
    }, 1000);
  }
}
