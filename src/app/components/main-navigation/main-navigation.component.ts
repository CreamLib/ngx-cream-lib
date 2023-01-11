import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  Output,
  QueryList,
  Renderer2,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-main-navigation',
  templateUrl: './main-navigation.component.html',
  styleUrls: ['./main-navigation.component.css'],
})
export class MainNavigationComponent implements OnInit, AfterViewInit {
  constructor(
    private renderer: Renderer2,
    private cdr: ChangeDetectorRef,
    private Location: Location
  ) {}

  @Input() setId: string | undefined;

  @Output() isExpanded = false;

  @ViewChild('mainNav') nav!: ElementRef;

  currentUrl: string = this.Location.path();
  navSectionID = '';

  navData = [
    {
      label: 'Blocks',
      subs: [
        {
          label: 'Accordion',
          url: 'portal/accordion',
        },
        {
          label: 'Collapsible',
          url: 'portal/collapsible',
        },
        {
          label: 'Modal',
          url: 'portal/modal',
        },
        {
          label: 'Tabs',
          url: 'portal/tabs',
        },
      ],
    },
    {
      label: 'Feedback',
      subs: [
        {
          label: 'Messages',
          url: 'portal/messages',
        },
        {
          label: 'Snackbar',
          url: 'portal/snackbar',
        },
        {
          label: 'Toast',
          url: 'portal/toast',
        },
      ],
    },
    {
      label: 'Utilities',
      subs: [
        {
          label: 'Chip',
          url: 'portal/chip',
        },
        {
          label: 'Dropdown',
          url: 'portal/dropdown',
        },
        {
          label: 'Icon Button',
          url: 'portal/icon-button',
        },
        {
          label: 'Progress Spinner',
          url: 'portal/progress-spinner',
        },
        {
          label: 'Text Ellipsis',
          url: 'portal/text-ellipsis',
        },
      ],
    },
    {
      label: 'Directives',
      subs: [
        {
          label: 'Tooltip',
          url: 'portal/tooltip',
        },
      ],
    },
    {
      label: 'Config & Help',
    },
  ];

  @ViewChildren('navLink') links!: QueryList<ElementRef>;
  @ViewChildren('levelOne') sections!: QueryList<ElementRef>;

  // Starting...
  ngOnInit(): void {
    this.navSectionID = 'navSection' + this.randomID();
  }

  ngAfterViewInit(): void {
    this.links.forEach(link => {
      if (link.nativeElement.getAttribute('href') === this.Location.path()) {
        const controlButton = link.nativeElement.parentNode.parentNode.previousSibling;
        controlButton.setAttribute('aria-expanded', 'true');
        controlButton.classList.add('opened');
      }
    });
    if (window.innerWidth >= 1000) {
      setTimeout(() => {
        this.openNav();
      }, 500);
    } else {
      setTimeout(() => {
        this.closeNav();
      }, 500);
    }
    this.cdr.detectChanges();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    if (window.innerWidth >= 1000) {
      this.openNav();
    } else {
      this.closeNav();
    }
    this.cdr.detectChanges();
  }
  @HostListener('window:keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.key === 'Escape' && window.innerWidth < 1000) {
      this.closeNav();
      event.stopPropagation();
      return;
    }
  }

  // Return sub array
  getSubData(levelOne: string) {
    const navData = Object.values(this.navData).filter(data => data.label === levelOne);
    return navData[0].subs;
  }

  closeNav() {
    this.renderer.removeClass(this.nav.nativeElement, 'opened');
    this.renderer.addClass(this.nav.nativeElement, 'closed');
    this.isExpanded = false;
  }

  openNav() {
    this.renderer.removeClass(this.nav.nativeElement, 'closed');
    this.renderer.addClass(this.nav.nativeElement, 'opened');
    this.isExpanded = true;
  }

  closeNavCondition() {
    if (window.innerWidth < 1000) {
      this.closeNav();
    }
  }

  /* Class manipulation is needed for CSS animation */
  toggleOpen() {
    if (this.nav.nativeElement.classList.contains('opened')) {
      this.closeNav();
    } else {
      this.openNav();
    }
  }

  // When last link has focus close menu
  isLast(e: Event) {
    if (this.links.last.nativeElement === e.target && window.innerWidth < 1000) {
      this.closeNav();
    }
  }

  // Nav collapsibles
  openSection(e: Event) {
    if ((e.target as HTMLElement).getAttribute('aria-expanded') == 'false') {
      (e.target as HTMLElement).classList.remove('close');
      (e.target as HTMLElement).classList.add('open');
      (e.target as HTMLElement).setAttribute('aria-expanded', 'true');
    } else {
      (e.target as HTMLElement).classList.remove('open');
      (e.target as HTMLElement).classList.add('close');
      (e.target as HTMLElement).setAttribute('aria-expanded', 'false');
    }
  }

  randomID() {
    const idRandom = Math.round(Math.random() * (20000 - 1) + 1);
    return idRandom;
  }
}
