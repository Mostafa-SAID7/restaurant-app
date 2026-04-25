import { Injectable, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

export interface RestaurantSchema {
  name: string;
  description: string;
  image: string;
  url: string;
  telephone: string;
  email?: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  openingHoursSpecification?: Array<{
    dayOfWeek: string;
    opens: string;
    closes: string;
  }>;
  priceRange: string;
  servesCuisine: string | string[];
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
  };
}

export interface MenuItemSchema {
  name: string;
  description: string;
  image: string;
  price: number;
  priceCurrency: string;
}

export interface ReviewSchema {
  author: string;
  reviewRating: number;
  reviewBody: string;
  datePublished: string;
}

@Injectable({
  providedIn: 'root'
})
export class StructuredDataService {
  private document = inject(DOCUMENT);

  /**
   * Add Restaurant schema to page
   */
  addRestaurantSchema(data: RestaurantSchema): void {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Restaurant',
      name: data.name,
      description: data.description,
      image: data.image,
      url: data.url,
      telephone: data.telephone,
      ...(data.email && { email: data.email }),
      address: {
        '@type': 'PostalAddress',
        streetAddress: data.address.streetAddress,
        addressLocality: data.address.addressLocality,
        addressRegion: data.address.addressRegion,
        postalCode: data.address.postalCode,
        addressCountry: data.address.addressCountry
      },
      ...(data.openingHoursSpecification && {
        openingHoursSpecification: data.openingHoursSpecification.map(hours => ({
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: hours.dayOfWeek,
          opens: hours.opens,
          closes: hours.closes
        }))
      }),
      priceRange: data.priceRange,
      servesCuisine: data.servesCuisine,
      ...(data.aggregateRating && {
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: data.aggregateRating.ratingValue,
          reviewCount: data.aggregateRating.reviewCount
        }
      })
    };

    this.addJsonLdScript(schema);
  }

  /**
   * Add Menu schema to page
   */
  addMenuSchema(restaurantName: string, items: MenuItemSchema[]): void {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Menu',
      name: `${restaurantName} Menu`,
      hasMenuSection: [
        {
          '@type': 'MenuSection',
          name: 'Featured Items',
          hasMenuItem: items.map(item => ({
            '@type': 'MenuItem',
            name: item.name,
            description: item.description,
            image: item.image,
            offers: {
              '@type': 'Offer',
              price: item.price,
              priceCurrency: item.priceCurrency
            }
          }))
        }
      ]
    };

    this.addJsonLdScript(schema);
  }

  /**
   * Add Review schema to page
   */
  addReviewSchema(restaurantName: string, reviews: ReviewSchema[]): void {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'AggregateRating',
      itemReviewed: {
        '@type': 'Restaurant',
        name: restaurantName
      },
      review: reviews.map(review => ({
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: review.author
        },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: review.reviewRating
        },
        reviewBody: review.reviewBody,
        datePublished: review.datePublished
      }))
    };

    this.addJsonLdScript(schema);
  }

  /**
   * Add Breadcrumb schema to page
   */
  addBreadcrumbSchema(items: Array<{ name: string; url: string }>): void {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.url
      }))
    };

    this.addJsonLdScript(schema);
  }

  /**
   * Add Organization schema to page
   */
  addOrganizationSchema(data: {
    name: string;
    url: string;
    logo: string;
    sameAs?: string[];
  }): void {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: data.name,
      url: data.url,
      logo: data.logo,
      ...(data.sameAs && { sameAs: data.sameAs })
    };

    this.addJsonLdScript(schema);
  }

  /**
   * Add FAQPage schema to page
   */
  addFaqSchema(faqs: Array<{ question: string; answer: string }>): void {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map(faq => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer
        }
      }))
    };

    this.addJsonLdScript(schema);
  }

  /**
   * Add generic JSON-LD script to page
   */
  private addJsonLdScript(schema: any): void {
    // Remove existing JSON-LD script if present
    const existingScript = this.document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Create and add new script
    const script = this.document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema);
    this.document.head.appendChild(script);
  }

  /**
   * Clear all JSON-LD scripts from page
   */
  clearJsonLd(): void {
    const scripts = this.document.querySelectorAll('script[type="application/ld+json"]');
    scripts.forEach(script => script.remove());
  }
}
