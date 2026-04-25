import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

export interface SeoMetadata {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  ogType?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  robots?: string;
  author?: string;
}

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private titleService = inject(Title);
  private metaService = inject(Meta);
  private router = inject(Router);

  private baseUrl = 'https://noor73.netlify.app';
  private defaultImage = 'https://noor73.netlify.app/assets/og-image.jpg';

  constructor() {
    this.initializeRouterListener();
  }

  /**
   * Set complete SEO metadata for a page
   */
  setSeoMetadata(metadata: SeoMetadata): void {
    // Set title
    this.titleService.setTitle(metadata.title);

    // Set meta description
    this.updateMetaTag('name', 'description', metadata.description);

    // Set keywords if provided
    if (metadata.keywords) {
      this.updateMetaTag('name', 'keywords', metadata.keywords);
    }

    // Set robots meta tag
    this.updateMetaTag('name', 'robots', metadata.robots || 'index, follow');

    // Set author if provided
    if (metadata.author) {
      this.updateMetaTag('name', 'author', metadata.author);
    }

    // Set canonical URL
    const canonicalUrl = metadata.canonical || this.getCurrentUrl();
    this.setCanonicalUrl(canonicalUrl);

    // Set Open Graph tags
    this.setOpenGraphTags({
      title: metadata.ogTitle || metadata.title,
      description: metadata.ogDescription || metadata.description,
      image: metadata.ogImage || this.defaultImage,
      url: metadata.ogUrl || this.getCurrentUrl(),
      type: metadata.ogType || 'website'
    });

    // Set Twitter Card tags
    this.setTwitterCardTags({
      card: metadata.twitterCard || 'summary_large_image',
      title: metadata.twitterTitle || metadata.title,
      description: metadata.twitterDescription || metadata.description,
      image: metadata.twitterImage || this.defaultImage
    });
  }

  /**
   * Set Open Graph meta tags
   */
  private setOpenGraphTags(og: {
    title: string;
    description: string;
    image: string;
    url: string;
    type: string;
  }): void {
    this.updateMetaTag('property', 'og:title', og.title);
    this.updateMetaTag('property', 'og:description', og.description);
    this.updateMetaTag('property', 'og:image', og.image);
    this.updateMetaTag('property', 'og:url', og.url);
    this.updateMetaTag('property', 'og:type', og.type);
  }

  /**
   * Set Twitter Card meta tags
   */
  private setTwitterCardTags(twitter: {
    card: string;
    title: string;
    description: string;
    image: string;
  }): void {
    this.updateMetaTag('name', 'twitter:card', twitter.card);
    this.updateMetaTag('name', 'twitter:title', twitter.title);
    this.updateMetaTag('name', 'twitter:description', twitter.description);
    this.updateMetaTag('name', 'twitter:image', twitter.image);
  }

  /**
   * Set canonical URL
   */
  private setCanonicalUrl(url: string): void {
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    link.href = url;
  }

  /**
   * Update or create a meta tag
   */
  private updateMetaTag(attrSelector: string, attrName: string, content: string): void {
    const tag = this.metaService.getTag(`${attrSelector}="${attrName}"`);
    if (tag) {
      this.metaService.updateTag({ [attrSelector]: attrName, content });
    } else {
      this.metaService.addTag({ [attrSelector]: attrName, content });
    }
  }

  /**
   * Get current URL
   */
  private getCurrentUrl(): string {
    return `${this.baseUrl}${this.router.url}`;
  }

  /**
   * Initialize router listener for automatic meta tag updates
   */
  private initializeRouterListener(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        // Scroll to top on navigation
        window.scrollTo(0, 0);
      });
  }

  /**
   * Get base URL
   */
  getBaseUrl(): string {
    return this.baseUrl;
  }

  /**
   * Get full URL for a path
   */
  getFullUrl(path: string): string {
    return `${this.baseUrl}${path}`;
  }
}
