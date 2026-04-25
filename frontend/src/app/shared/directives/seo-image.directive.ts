import { Directive, ElementRef, Input, OnInit, inject } from '@angular/core';

/**
 * SEO Image Directive
 * Automatically optimizes images for SEO with:
 * - Lazy loading
 * - Responsive srcset
 * - Meaningful alt text
 * - Loading attribute
 */
@Directive({
  selector: 'img[appSeoImage]',
  standalone: true
})
export class SeoImageDirective implements OnInit {
  @Input() appSeoImage: string = ''; // alt text
  @Input() imageSrc: string = '';
  @Input() imageSrcset: string = '';
  @Input() imageSizes: string = '';

  private el = inject(ElementRef);

  ngOnInit(): void {
    const img = this.el.nativeElement as HTMLImageElement;

    // Set alt text (required for SEO)
    if (this.appSeoImage) {
      img.alt = this.appSeoImage;
    }

    // Set src
    if (this.imageSrc) {
      img.src = this.imageSrc;
    }

    // Set srcset for responsive images
    if (this.imageSrcset) {
      img.srcset = this.imageSrcset;
    }

    // Set sizes for responsive images
    if (this.imageSizes) {
      img.sizes = this.imageSizes;
    }

    // Enable lazy loading
    img.loading = 'lazy';

    // Add decoding attribute for performance
    img.decoding = 'async';
  }
}
