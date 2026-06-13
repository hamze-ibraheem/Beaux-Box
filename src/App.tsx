import { motion } from 'motion/react';
import { 
  Gift, 
  Leaf, 
  HeartHandshake, 
  Trees,
  ShoppingBag,
  ArrowRight,
  Mail,
  Instagram,
  Facebook
} from 'lucide-react';

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#e0e0e0] font-sans selection:bg-[#b89b72] selection:text-[#0f0f0f]">
      {/* 1. Header & Navigation */}
      <nav className="fixed w-full z-50 bg-[#0f0f0f]/90 backdrop-blur-md border-b border-[#2a2a2a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3 ml-1">
              <div className="w-5 h-5 border-[1.5px] border-[#b89b72] rotate-45 flex items-center justify-center">
                <div className="w-2 h-2 bg-[#b89b72]"></div>
              </div>
              <span className="font-serif text-xl tracking-widest uppercase text-[#b89b72]">Beaux Box</span>
            </div>
            <div className="hidden md:flex space-x-10">
              {['Shop', 'Our Ethos', 'Corporate Gifting', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#888] hover:text-[#b89b72] transition-colors">
                  {item}
                </a>
              ))}
            </div>
            <div className="flex items-center">
              <button className="bg-[#b89b72] text-[#0f0f0f] px-6 py-2.5 text-[10px] uppercase tracking-widest font-bold hover:bg-white transition-all flex items-center gap-2">
                <ShoppingBag className="w-4 h-4" />
                Curate a Box
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* 2. Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-br from-[#121212] to-[#0a0a0a] border-b border-[#2a2a2a]">
        <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#1a1a1a] via-[#0f0f0f] to-[#0f0f0f]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <span className="inline-block px-3 py-1 border border-[#b89b72]/30 text-[#b89b72] text-[9px] uppercase tracking-widest font-bold mb-6">Personalized & Sustainable</span>
            <h1 className="font-serif text-5xl md:text-7xl text-white leading-[1.1] mb-8">
              The Art of Thoughtful,<br/> <span className="italic font-light text-[#b89b72]">Sustainable</span> Gifting.
            </h1>
            <p className="text-lg md:text-xl text-[#aaa] mb-10 leading-relaxed font-light">
              Curated, all-natural products beautifully presented in reusable wooden keepsake boxes. 
              Personalized concierge service for every occasion, big or small.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-[#b89b72] text-[#0f0f0f] px-8 py-4 text-xs uppercase tracking-widest font-bold hover:bg-white transition-all flex items-center justify-center gap-2">
                Book a Zoom Consultation
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="bg-transparent border border-[#2a2a2a] text-white px-8 py-4 text-xs uppercase tracking-widest font-bold hover:bg-[#1a1a1a] transition-all flex items-center justify-center gap-2">
                Shop Ready-Made Boxes
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. How It Works / The Beaux Box Difference */}
      <section className="py-24 bg-[#0f0f0f] border-b border-[#2a2a2a]" id="corporate-gifting">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <span className="text-[#b89b72] text-[11px] uppercase tracking-widest mb-4 font-bold block">01. How It Works</span>
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">The Beaux Box Difference</h2>
            <p className="text-[#aaa] max-w-2xl mx-auto font-light">More than just a gift basket. We create memorable, eco-friendly experiences tailored precisely to your recipient.</p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: HeartHandshake,
                title: "1. The Concierge Design",
                desc: "We start with you. Through a simple form or a complimentary Zoom consultation with owner Annie, we learn exactly who you're treating and what they love."
              },
              {
                icon: Leaf,
                title: "2. The Premium Harvest",
                desc: "We fill the box with all-natural, small-batch, fair-trade wonders—from crystal-infused lotions and soothing creams to artisan chocolates. Safe for sensitive skin and loved by all genders."
              },
              {
                icon: Trees,
                title: "3. The Keepsake Crate",
                desc: "No cheap wrap or flimsy cardboard. Our sturdy, high-quality wooden boxes are designed to be beautiful, permanent additions to the home. Sustainable gifting at its finest."
              }
            ].map((step, idx) => (
              <FadeIn key={idx} delay={idx * 0.2} className="text-center group">
                <div className="w-16 h-16 mx-auto bg-[#131313] border border-[#2a2a2a] flex items-center justify-center mb-6 group-hover:border-[#b89b72]/50 transition-colors">
                  <step.icon className="w-6 h-6 text-[#b89b72]" />
                </div>
                <h3 className="font-serif text-xl text-white mb-3">{step.title}</h3>
                <p className="text-[#999] leading-relaxed text-sm font-light">{step.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Popular Box Themes */}
      <section className="py-24 bg-[#131313] border-b border-[#2a2a2a]" id="shop">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="flex justify-between items-end mb-12">
            <div>
              <span className="text-[#b89b72] text-[11px] uppercase tracking-widest mb-4 font-bold block">02. Featured Collections</span>
              <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">Curated Occasions</h2>
              <p className="text-[#aaa] font-light">Thoughtfully designed themes to inspire your next gift.</p>
            </div>
            <button className="hidden sm:flex text-[#b89b72] hover:text-white items-center gap-2 pb-1 text-[10px] uppercase tracking-widest font-bold transition-colors">
              View All <ArrowRight className="w-4 h-4" />
            </button>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "The Cottage Box",
                tag: "For the Hostess",
                desc: "Elevate their weekend away with artisan fair-trade chocolates, rich essential oils, and hand-poured soaps, beautifully nested in our signature wood display."
              },
              {
                title: "The Detox Box",
                tag: "Self-Care Essential",
                desc: "A sanctuary in a box. Features crystal-infused restorative potions, relaxing bath salts, and soothing creams strictly from all-natural ingredients."
              },
              {
                title: "The Welcome Baby Box",
                tag: "For New Parents",
                desc: "Ultra-gentle, sensitive-skin-safe organics for the little one, paired with vital self-care treats for exhausted, deserving new parents."
              },
              {
                title: "The Chalkboard Box",
                tag: "Teacher Appreciation",
                desc: "Going beyond the standard mug. We pack this keepsake with premium teas, high-quality lotions, and small-batch treats to say a profound 'thank you'."
              }
            ].map((box, idx) => (
              <FadeIn key={idx} delay={idx * 0.1} className="bg-gradient-to-tr from-[#111] to-[#1a1a1a] p-8 border border-[#2a2a2a] flex flex-col h-full hover:border-[#b89b72]/50 transition-colors">
                <span className="text-[#b89b72] text-[10px] uppercase tracking-[0.2em] font-bold mb-4">{box.tag}</span>
                <h3 className="font-serif text-xl text-white mb-4">{box.title}</h3>
                <p className="text-[#999] font-light mb-8 flex-grow text-sm">{box.desc}</p>
                <button className="w-full py-3 border border-[#2a2a2a] text-[#aaa] text-[10px] uppercase tracking-widest font-bold hover:bg-[#b89b72] hover:text-[#0f0f0f] transition-colors mt-auto">
                  Customize This Theme
                </button>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 5. The Ethos (About Us) */}
      <section className="py-24 bg-[#0a0a0a] border-b border-[#2a2a2a]" id="our-ethos">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="aspect-[4/5] bg-[#131313] border border-[#2a2a2a] relative flex items-center justify-center overflow-hidden">
                {/* Minimalist graceful placeholder indicating where an image would be */}
                <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1607004468148-52086eefa0bd?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center grayscale"></div>
                <div className="z-10 text-center p-8 bg-[#0f0f0f]/80 backdrop-blur-sm border border-[#2a2a2a]">
                   <p className="font-serif italic text-2xl text-[#b89b72]">"Every box tells a story."</p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <span className="text-[#b89b72] text-[11px] uppercase tracking-widest mb-4 font-bold block">03. Our Ethos</span>
              <h2 className="font-serif text-4xl mb-6 text-white">Gifting with Purpose</h2>
              <div className="space-y-6 text-[#aaa] font-light leading-relaxed text-sm">
                <p>
                  At Beaux Box, we believe that the vessel should be as enduring as the gesture itself. 
                  Our founder, Annie (Anne Marie), built this social enterprise on a singular vision: to replace disposable 
                  gift-giving culture with sustainable, cherished keepsakes.
                </p>
                <p>
                  We partner exclusively with small-batch, fair-trade artisans who share our unwavering commitment to 
                  quality and the environment. Every crystal-infused lotion, soothing cream, and organic treat is hand-selected 
                  not just for its luxury, but for its ethical footprint.
                </p>
                <p>
                  Whether it's a corporate gift for your team or a care package for a dear friend, Annie personally 
                  ensures that every detail reflects the unique spirit of the recipient, making Beaux Box a truly 
                  unforgettable experience.
                </p>
              </div>
              <button className="mt-10 bg-transparent text-[#b89b72] border border-[#b89b72]/50 px-8 py-3 text-[10px] uppercase tracking-widest font-bold hover:bg-[#b89b72] hover:text-[#0f0f0f] transition-all">
                Read the Full Story
              </button>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 6. Social Proof / Testimonials */}
      <section className="py-24 bg-[#0f0f0f] border-b border-[#2a2a2a] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <span className="text-[#b89b72] text-[11px] uppercase tracking-widest mb-4 font-bold block">The Reviews</span>
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-16">Words from our Patrons</h2>
          </FadeIn>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "The Beaux Boxes are wonderful high quality wood keepsake boxes... They're great for displays and showcasing our products in high end gift baskets.",
                author: "Corporate Client"
              },
              {
                text: "Beaux Box is an amazing company that sends out beautiful reusable wooden boxes filled with love.",
                author: "Loyal Customer"
              },
              {
                text: "Annie, the owner, zoomed with me, and custom curated the perfect gift box for my industry colleague.",
                author: "B2B Partner"
              }
            ].map((quote, idx) => (
              <FadeIn key={idx} delay={idx * 0.2} className="p-10 bg-gradient-to-br from-[#121212] to-[#0a0a0a] border border-[#2a2a2a] relative hover:border-[#b89b72]/30 transition-colors text-left">
                <span className="absolute text-6xl font-serif text-[#1a1a1a] top-4 left-6">"</span>
                <p className="text-[#ccc] italic relative z-10 font-serif text-[15px] leading-relaxed mb-8">
                  "{quote.text}"
                </p>
                <div className="w-8 h-px bg-[#b89b72]/30 mb-4"></div>
                <p className="text-[#b89b72] font-bold text-[10px] uppercase tracking-[0.2em]">{quote.author}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Footer */}
      <footer className="bg-[#0a0a0a] text-[#555] py-16" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 border-b border-[#2a2a2a] pb-12 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-6 h-6 border-[1.5px] border-[#b89b72] rotate-45 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 bg-[#b89b72]"></div>
                </div>
                <span className="font-serif text-2xl tracking-widest uppercase text-[#b89b72]">Beaux Box</span>
              </div>
              <p className="max-w-sm mb-6 leading-relaxed text-[11px] text-[#777]">
                Premium, all-natural products curated in our signature reusable wooden keepsake boxes. Handcrafted gifting by Annie.
              </p>
              <div className="flex gap-4 text-white">
                <a href="#" className="hover:text-[#b89b72] transition-colors"><Instagram className="w-4 h-4" /></a>
                <a href="#" className="hover:text-[#b89b72] transition-colors"><Facebook className="w-4 h-4" /></a>
                <a href="#" className="hover:text-[#b89b72] transition-colors"><Mail className="w-4 h-4" /></a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-[0.2em] text-[10px]">Explore</h4>
              <ul className="space-y-4 text-[11px] text-[#777] uppercase tracking-wider">
                <li><a href="#" className="hover:text-[#b89b72] transition-colors">Our Ethos</a></li>
                <li><a href="#" className="hover:text-[#b89b72] transition-colors">Corporate Gifting</a></li>
                <li><a href="#" className="hover:text-[#b89b72] transition-colors">Ready-Made Themes</a></li>
                <li><a href="#" className="hover:text-[#b89b72] transition-colors">Book a Consultation</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-[0.2em] text-[10px]">Join the Circle</h4>
              <p className="text-[11px] text-[#777] mb-4 uppercase tracking-wider">Join our newsletter for new box themes, seasonal curations, and artisan stories.</p>
              <form className="flex border-b border-[#333] transition-colors focus-within:border-[#b89b72]">
                <input 
                  type="email" 
                  placeholder="EMAIL ADDRESS" 
                  className="bg-transparent py-3 w-full text-[10px] outline-none text-[#e0e0e0] placeholder:text-[#555] uppercase tracking-widest"
                />
                <button type="button" className="text-[#777] hover:text-[#b89b72] px-4 transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center text-[9px] uppercase tracking-[0.4em] text-[#444]">
            <p>&copy; {new Date().getFullYear()} Beaux Box Sustainable Gifting</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-[#b89b72] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#b89b72] transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

