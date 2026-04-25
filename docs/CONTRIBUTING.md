# Contributing Guide

## Welcome!

Thank you for your interest in contributing to the Restaurant App! This document provides guidelines and instructions for contributing.

## Code of Conduct

- Be respectful and inclusive
- Welcome diverse perspectives
- Focus on constructive feedback
- Report inappropriate behavior

## Getting Started

### 1. Fork the Repository

Click the "Fork" button on GitHub to create your own copy.

### 2. Clone Your Fork

```bash
git clone https://github.com/YOUR_USERNAME/restaurant-app.git
cd restaurant-app
```

### 3. Add Upstream Remote

```bash
git remote add upstream https://github.com/Mostafa-SAID7/restaurant-app.git
```

### 4. Create a Branch

```bash
git checkout -b feature/your-feature-name
```

Use descriptive branch names:
- `feature/add-user-authentication`
- `fix/menu-loading-bug`
- `docs/update-readme`
- `refactor/optimize-performance`

## Development Workflow

### 1. Install Dependencies

```bash
cd frontend
npm install
```

### 2. Make Your Changes

- Write clean, readable code
- Follow the existing code style
- Add comments for complex logic
- Keep commits atomic and focused

### 3. Test Your Changes

```bash
npm test
```

Ensure all tests pass before submitting.

### 4. Build the Project

```bash
npm run build
```

Verify the build completes without errors.

### 5. Commit Your Changes

```bash
git add .
git commit -m "feat: add new feature description"
```

Follow conventional commit format:
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation
- `style:` - Code style changes
- `refactor:` - Code refactoring
- `test:` - Test additions
- `chore:` - Build/dependency updates

### 6. Push to Your Fork

```bash
git push origin feature/your-feature-name
```

### 7. Create a Pull Request

1. Go to the original repository
2. Click "New Pull Request"
3. Select your branch
4. Fill in the PR template
5. Submit the PR

## Pull Request Guidelines

### PR Title

Use clear, descriptive titles:
- ✅ "Add menu filtering by category"
- ❌ "Update stuff"

### PR Description

Include:
- What changes were made
- Why the changes were made
- How to test the changes
- Any related issues

### PR Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Related Issues
Closes #123

## Testing
How to test these changes

## Screenshots (if applicable)
Add screenshots for UI changes

## Checklist
- [ ] Tests pass
- [ ] Code follows style guidelines
- [ ] Documentation updated
- [ ] No breaking changes
```

## Code Style Guidelines

### TypeScript

```typescript
// Use meaningful variable names
const userEmail = 'user@example.com';

// Use const by default
const MAX_ITEMS = 10;

// Use arrow functions
const calculateTotal = (items: MenuItem[]): number => {
  return items.reduce((sum, item) => sum + item.price, 0);
};

// Use interfaces for types
interface User {
  id: string;
  name: string;
  email: string;
}

// Add JSDoc comments
/**
 * Calculates the total price of menu items
 * @param items - Array of menu items
 * @returns Total price
 */
const getTotal = (items: MenuItem[]): number => {
  // implementation
};
```

### Angular Components

```typescript
// Use standalone components
import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  standalone: true,
  template: `<div>{{ item.name }}</div>`,
})
export class MenuItemComponent {
  @Input() item!: MenuItem;
}

// Use OnPush change detection
@Component({
  selector: 'app-menu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `...`,
})
export class MenuComponent {}
```

### HTML/Template

```html
<!-- Use meaningful class names -->
<div class="menu-container">
  <h1 class="menu-title">Menu</h1>
  
  <!-- Use *ngIf for conditional rendering -->
  <div *ngIf="items.length > 0">
    <!-- Use *ngFor for lists -->
    <div *ngFor="let item of items" class="menu-item">
      {{ item.name }}
    </div>
  </div>
</div>
```

### SCSS

```scss
// Use variables for colors
$primary-color: #ff6b6b;
$secondary-color: #4ecdc4;

// Use nesting
.menu {
  display: flex;
  
  &-item {
    padding: 1rem;
    
    &:hover {
      background-color: $primary-color;
    }
  }
}

// Use mixins for reusable styles
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.centered {
  @include flex-center;
}
```

## Testing Guidelines

### Unit Tests

```typescript
describe('MenuService', () => {
  let service: MenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return menu items', () => {
    const items = service.getMenuItems();
    expect(items.length).toBeGreaterThan(0);
  });
});
```

### Component Tests

```typescript
describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display menu items', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.menu-item')).toBeTruthy();
  });
});
```

## Documentation

### Update Documentation

- Update README.md for major changes
- Add comments to complex code
- Update API documentation
- Add examples for new features

### Documentation Format

```markdown
## Feature Name

Brief description of the feature.

### Usage

```typescript
// Code example
```

### Parameters

- `param1` (type) - Description
- `param2` (type) - Description

### Returns

Description of return value
```

## Reporting Issues

### Bug Reports

Include:
- Clear description of the bug
- Steps to reproduce
- Expected behavior
- Actual behavior
- Screenshots/logs
- Environment details

### Feature Requests

Include:
- Clear description of the feature
- Use case/motivation
- Proposed implementation (optional)
- Examples

## Review Process

1. **Automated Checks**
   - Tests must pass
   - Code style must be valid
   - Build must succeed

2. **Code Review**
   - At least one approval required
   - Maintainers review for quality
   - Feedback provided constructively

3. **Merge**
   - Approved PRs are merged
   - Branch is deleted
   - Issue is closed

## Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Example

```
feat(menu): add filtering by category

Add ability to filter menu items by category.
Users can now select a category and see only
items from that category.

Closes #123
```

## Performance Considerations

- Avoid unnecessary re-renders
- Use OnPush change detection
- Lazy load features
- Optimize bundle size
- Cache API responses

## Accessibility

- Use semantic HTML
- Add ARIA labels
- Ensure keyboard navigation
- Test with screen readers
- Maintain color contrast

## Security

- Never commit secrets
- Validate user input
- Sanitize output
- Use HTTPS
- Keep dependencies updated

## Questions?

- Check existing issues
- Read documentation
- Ask in discussions
- Contact maintainers

## Recognition

Contributors will be recognized in:
- README.md
- Release notes
- GitHub contributors page

Thank you for contributing! 🎉
