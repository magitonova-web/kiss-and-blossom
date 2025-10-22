import { useEffect, useState } from "react";
import letter1 from "@/assets/letter1.jpg";
import letter2 from "@/assets/letter2.jpg";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const loveQuotes = [
    {
      text: "In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine.",
      author: "Maya Angelou"
    },
    {
      text: "You are my today and all of my tomorrows.",
      author: "Leo Christopher"
    },
    {
      text: "I love you not only for what you are, but for what I am when I am with you.",
      author: "Roy Croft"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className={`container mx-auto max-w-6xl text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-6 px-8 py-2 rounded-full bg-primary/10 border border-primary/20">
            <span className="text-sm font-medium text-primary tracking-wider">WITH ALL MY LOVE</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in" style={{ fontFamily: 'Playfair Display, serif' }}>
            <span className="text-gradient">For Kimberly</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12">
            A collection of moments, words, and feelings crafted with love
          </p>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-primary/50" />
            <span className="text-4xl animate-float">💕</span>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-primary/50" />
          </div>
        </div>
      </section>

      {/* Love Quotes Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16" style={{ fontFamily: 'Playfair Display, serif' }}>
            Words of <span className="text-gradient">Love</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {loveQuotes.map((quote, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-elegant animate-slide-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="absolute top-4 left-4 text-6xl text-primary/10" style={{ fontFamily: 'Playfair Display, serif' }}>"</div>
                <div className="relative z-10">
                  <p className="text-lg text-foreground/90 mb-6 leading-relaxed italic">
                    {quote.text}
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
                    <p className="text-sm font-medium text-muted-foreground">— {quote.author}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Handwritten Letters Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent via-secondary/20 to-transparent">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Letters from the <span className="text-gradient">Heart</span>
            </h2>
            <p className="text-lg text-muted-foreground">Words that will forever be cherished</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Letter 1 */}
            <div className="group animate-slide-up" style={{ animationDelay: '100ms' }}>
              <div className="relative p-6 rounded-3xl bg-gradient-to-br from-card to-secondary/30 border-2 border-accent/30 shadow-frame hover:shadow-elegant transition-all duration-700 hover:scale-[1.02]">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative">
                  <div className="absolute -top-3 -left-3 w-12 h-12 bg-accent rounded-full opacity-20 blur-xl" />
                  <div className="absolute -bottom-3 -right-3 w-12 h-12 bg-primary rounded-full opacity-20 blur-xl" />
                  <img
                    src={letter1}
                    alt="First handwritten love letter"
                    className="w-full h-auto rounded-2xl shadow-soft"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="mt-6 text-center">
                <p className="text-sm font-medium text-primary italic" style={{ fontFamily: 'Playfair Display, serif' }}>
                  "To My Brilliant Engineer in the Making"
                </p>
              </div>
            </div>

            {/* Letter 2 */}
            <div className="group animate-slide-up" style={{ animationDelay: '300ms' }}>
              <div className="relative p-6 rounded-3xl bg-gradient-to-br from-card to-secondary/30 border-2 border-accent/30 shadow-frame hover:shadow-elegant transition-all duration-700 hover:scale-[1.02]">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative">
                  <div className="absolute -top-3 -right-3 w-12 h-12 bg-primary rounded-full opacity-20 blur-xl" />
                  <div className="absolute -bottom-3 -left-3 w-12 h-12 bg-accent rounded-full opacity-20 blur-xl" />
                  <img
                    src={letter2}
                    alt="Second handwritten love letter"
                    className="w-full h-auto rounded-2xl shadow-soft"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="mt-6 text-center">
                <p className="text-sm font-medium text-primary italic" style={{ fontFamily: 'Playfair Display, serif' }}>
                  "A Promise of Forever"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="p-12 rounded-3xl bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 border border-primary/20 shadow-elegant">
            <div className="mb-6 flex justify-center gap-2">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-3xl animate-float" style={{ animationDelay: `${i * 200}ms` }}>
                  ✨
                </span>
              ))}
            </div>
            <p className="text-2xl md:text-3xl font-medium mb-6 leading-relaxed" style={{ fontFamily: 'Playfair Display, serif' }}>
              "Every love story is beautiful, but ours is my favorite."
            </p>
            <div className="flex items-center justify-center gap-3 text-xl text-muted-foreground">
              <span>Forever & Always</span>
              <span className="text-2xl text-primary">💖</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border/50">
        <div className="container mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            Made with endless love for Kimberly
          </p>
          <div className="mt-4 flex justify-center gap-2">
            <span className="text-lg animate-float">💕</span>
            <span className="text-lg animate-float" style={{ animationDelay: '200ms' }}>💝</span>
            <span className="text-lg animate-float" style={{ animationDelay: '400ms' }}>💖</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
