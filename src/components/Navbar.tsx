'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { LucideIcon } from 'lucide-react';
import {
  Users,
  LayoutDashboard,
  CheckCircle2,
  ChevronDown
} from 'lucide-react';

type LinkItem = {
  title: string;
  href: string;
  icon: LucideIcon;
  description?: string;
};

export const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const scrolled = useScroll(10);

  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={cn('sticky top-0 z-50 w-full border-b border-transparent transition-all duration-300', {
        'bg-background/95 supports-[backdrop-filter]:bg-background/50 border-border backdrop-blur-lg shadow-sm':
          scrolled,
      })}
    >
      <nav className="container-custom flex h-20 items-center justify-between relative">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 font-heading text-2xl font-bold shrink-0 z-20">
          <img src="/logo.png" alt="My Vidyon" className="h-12 w-auto" />
        </Link>

        {/* Desktop Menu - Centered */}
        <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <NavigationMenu>
            <NavigationMenuList>

              {/* Home */}
              <NavigationMenuItem>
                <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50" asChild>
                  <Link to="/">
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* About Us */}
              <NavigationMenuItem>
                <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50" asChild>
                  <Link to="/about">
                    About Us
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Services (ERP Solutions) */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">Services</NavigationMenuTrigger>
                <NavigationMenuContent className="bg-background p-1 pr-1.5">
                  <ul className="bg-popover grid w-[300px] gap-2 rounded-md border p-2 shadow-sm">
                    <li>
                      <ListItem
                        title="ERP Solutions"
                        href="/erp-solutions"
                        description="Comprehensive management for schools"
                        icon={LayoutDashboard}
                      />
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Product (Attendance System) */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">Product</NavigationMenuTrigger>
                <NavigationMenuContent className="bg-background p-1 pr-1.5">
                  <ul className="bg-popover grid w-[300px] gap-2 rounded-md border p-2 shadow-sm">
                    <li>
                      <ListItem
                        title="Attendance System"
                        href="/attendance-system"
                        description="AI-powered facial recognition"
                        icon={CheckCircle2}
                      />
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Features */}
              <NavigationMenuItem>
                <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50" asChild>
                  <Link to="/features">
                    Features
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Careers */}
              <NavigationMenuItem>
                <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50" asChild>
                  <Link to="/careers">
                    Careers
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Contact */}
              <NavigationMenuItem>
                <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50" asChild>
                  <Link to="/contact">
                    Contact
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Toggle */}
        <Button
          size="icon"
          variant="outline"
          onClick={() => setOpen(!open)}
          className="lg:hidden z-50 ml-auto"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
        >
          <MenuToggleIcon open={open} className="size-5" duration={300} />
        </Button>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu open={open} className="flex flex-col gap-4 overflow-y-auto pt-20 pb-10">
        <div className="flex flex-col gap-4 px-4">
          <Link to="/" className="text-lg font-semibold py-2 border-b" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/about" className="text-lg font-semibold py-2 border-b" onClick={() => setOpen(false)}>About Us</Link>

          <MobileDropdown title="Services">
            <MobileLink
              title="ERP Solutions"
              href="/erp-solutions"
              description="Comprehensive management for schools"
              icon={LayoutDashboard}
              onClick={() => setOpen(false)} />
          </MobileDropdown>

          <MobileDropdown title="Product">
            <MobileLink
              title="Attendance System"
              href="/attendance-system"
              description="AI-powered facial recognition"
              icon={CheckCircle2}
              onClick={() => setOpen(false)} />
          </MobileDropdown>

          <Link to="/features" className="text-lg font-semibold py-2 border-b" onClick={() => setOpen(false)}>Features</Link>
          <Link to="/careers" className="text-lg font-semibold py-2 border-b" onClick={() => setOpen(false)}>Careers</Link>
          <Link to="/contact" className="text-lg font-semibold py-2 border-b" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      </MobileMenu>
    </header>
  );
}

function MobileDropdown({ title, children }: { title: string, children: React.ReactNode }) {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="flex flex-col border-b">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between text-lg font-semibold py-2 w-full text-left bg-transparent"
      >
        {title}
        <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", isOpen && "rotate-180")} />
      </button>
      <div className={cn("grid transition-all duration-200 ease-in-out overflow-hidden", isOpen ? "grid-rows-[1fr] pb-2" : "grid-rows-[0fr]")}>
        <div className="min-h-0 flex flex-col gap-2">
          {children}
        </div>
      </div>
    </div>
  )
}

type MobileMenuProps = React.ComponentProps<'div'> & {
  open: boolean;
};

function MobileMenu({ open, children, className, ...props }: MobileMenuProps) {
  if (!open || typeof window === 'undefined') return null;

  return createPortal(
    <div
      id="mobile-menu"
      className={cn(
        'bg-background/95 supports-[backdrop-filter]:bg-background/50 backdrop-blur-lg',
        'fixed top-0 right-0 bottom-0 left-0 z-40 flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200',
        className
      )}
      {...props}
    >
      {children}
    </div>,
    document.body,
  );
}

function MobileLink({
  title,
  description,
  icon: Icon,
  className,
  href,
  onClick,
  ...props
}: LinkItem & Omit<React.ComponentProps<typeof Link>, "to"> & { onClick?: () => void }) {
  return (
    <Link
      to={href}
      onClick={onClick}
      className={cn("w-full flex flex-row gap-x-3 items-start p-3 rounded-lg hover:bg-accent transition-colors group", className)}
      {...props}
    >
      <div className="bg-primary/10 group-hover:bg-primary/20 flex shrink-0 aspect-square size-10 items-center justify-center rounded-md border border-primary/20 shadow-sm transition-colors">
        <Icon className="text-primary size-5" />
      </div>
      <div className="flex flex-col items-start justify-center">
        <span className="font-medium text-sm text-foreground/90 group-hover:text-primary transition-colors">{title}</span>
        <span className="text-muted-foreground text-xs line-clamp-2 mt-0.5">{description}</span>
      </div>
    </Link>
  );
}

function ListItem({
  title,
  description,
  icon: Icon,
  className,
  href,
  onClick,
  ...props
}: React.ComponentProps<typeof NavigationMenuLink> & LinkItem & { onClick?: () => void }) {
  return (
    <NavigationMenuLink className={cn('w-full', className)} {...props} asChild>
      <Link to={href} onClick={onClick} className="w-full flex flex-row gap-x-3 items-start p-3 rounded-lg hover:bg-accent transition-colors group">
        <div className="bg-primary/10 group-hover:bg-primary/20 flex shrink-0 aspect-square size-10 items-center justify-center rounded-md border border-primary/20 shadow-sm transition-colors">
          <Icon className="text-primary size-5" />
        </div>
        <div className="flex flex-col items-start justify-center">
          <span className="font-medium text-sm text-foreground/90 group-hover:text-primary transition-colors">{title}</span>
          <span className="text-muted-foreground group-hover:text-white text-xs line-clamp-2 mt-0.5 transition-colors">{description}</span>
        </div>
      </Link>
    </NavigationMenuLink>
  );
}

function useScroll(threshold: number) {
  const [scrolled, setScrolled] = React.useState(false);

  const onScroll = React.useCallback(() => {
    setScrolled(window.scrollY > threshold);
  }, [threshold]);

  React.useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  React.useEffect(() => {
    onScroll();
  }, [onScroll]);

  return scrolled;
}

export default Navbar;
