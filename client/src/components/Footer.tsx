import { Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-background border-t">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-2 mb-2" data-testid="text-footer-built">
            Built with <Heart className="h-4 w-4 text-primary fill-primary" /> using React & Tailwind CSS
          </p>
          <p data-testid="text-footer-copyright">
            © {currentYear} Aigerim Sagimbayeva. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
