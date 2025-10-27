"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Coffee, Star, Heart } from 'lucide-react';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "About", id: "about" },
            { name: "Menu", id: "product" },
            { name: "Reviews", id: "testimonial" },
            { name: "Contact", id: "contact" },
            { name: "Events", id: "https://facebook.com/coffeehouse" }
          ]}
          logoSrc="https://images.pexels.com/photos/16822611/pexels-photo-16822611.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          logoAlt="A Starbucks cup on a wooden table near a window in a cozy café in Taipei, Taiwan."
          brandName="Coffee House"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Sip, Stay, and Savor at Coffee House"
          description="Your neighborhood café for great coffee, great vibes, and great company. Perfect for work, study, or catching up with friends."
          tag="Welcome"
          tagIcon={Coffee}
          buttons={[
            { text: "Order Now", href: "contact" },
            { text: "View Menu", href: "product" }
          ]}
          imageSrc="https://images.pexels.com/photos/5198144/pexels-photo-5198144.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Intimate cafe setting with a neon sign reading 'All you need is love (and cake)'"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Our Story"
          description={[
            "Coffee House began as a dream to create a space where the community could gather, connect, and enjoy exceptional coffee.",
            "We source our beans directly from sustainable farms and roast them fresh daily to ensure every cup delivers the perfect balance of flavor and aroma."
          ]}
          buttons={[
            { text: "Learn More", href: "about" }
          ]}
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardTwo
          title="Our Signature Menu"
          description="Handcrafted beverages made with premium beans and local ingredients"
          tag="Fresh Daily"
          tagIcon={Star}
          products={[
            {
              id: "1",
              brand: "Coffee House",
              name: "Classic Espresso",
              price: "$3.50",
              rating: 5,
              reviewCount: "2.1k",
              imageSrc: "https://images.pexels.com/photos/6801212/pexels-photo-6801212.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "A white ceramic mug on a tray, placed over a closed book on a wooden table."
            },
            {
              id: "2",
              brand: "Coffee House",
              name: "Artisan Latte",
              price: "$5.25",
              rating: 5,
              reviewCount: "3.8k",
              imageSrc: "https://images.pexels.com/photos/302897/pexels-photo-302897.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Captivating image of a barista pouring milk art into a cappuccino cup, showcasing latte art skills."
            },
            {
              id: "3",
              brand: "Coffee House",
              name: "Cappuccino Supreme",
              price: "$4.75",
              rating: 4,
              reviewCount: "1.9k",
              imageSrc: "https://images.pexels.com/photos/851555/pexels-photo-851555.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Close-up of a white cup of latte with artistic foam on a rustic wooden table."
            },
            {
              id: "4",
              brand: "Coffee House",
              name: "Cold Brew Delight",
              price: "$4.50",
              rating: 5,
              reviewCount: "2.7k",
              imageSrc: "https://images.pexels.com/photos/7282737/pexels-photo-7282737.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Refreshing iced coffee with visible ice cubes from above, showcasing chilled beverage."
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="What Our Customers Say"
          description="Real feedback from our valued community members"
          tag="Reviews"
          tagIcon={Heart}
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Marketing Manager",
              company: "TechStart Inc",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Confident businesswoman using her tablet and phone, smiling outdoors in sunlight."
            },
            {
              id: "2",
              name: "Mike Chen",
              role: "Graduate Student",
              company: "Local University",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/6894103/pexels-photo-6894103.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Top view of a stylish home office desk with a laptop, planner, and coffee cup, showing hands on a blueprint."
            },
            {
              id: "3",
              name: "Lisa Rodriguez",
              role: "Creative Director",
              company: "Design Studio",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Smiling businesswoman with glasses and afro hairstyle in an office setting."
            },
            {
              id: "4",
              name: "David Kim",
              role: "Remote Developer",
              company: "Freelance",
              rating: 4,
              imageSrc: "https://images.pexels.com/photos/733856/pexels-photo-733856.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "A woman writes in a notebook at a café table with a coffee and smartphone nearby."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Get in Touch"
          description="Ready to visit us or have questions? We'd love to hear from you. Contact us for orders, events, or just to say hello!"
          inputs={[
            { name: "name", type: "text", placeholder: "Your Name", required: true },
            { name: "email", type: "email", placeholder: "Email Address", required: true },
            { name: "phone", type: "tel", placeholder: "Phone Number", required: false }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your visit plans, event ideas, or any questions...",
            rows: 5,
            required: true
          }}
          buttonText="Send Message"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Menu",
              items: [
                { label: "Coffee & Espresso", href: "product" },
                { label: "Specialty Drinks", href: "product" },
                { label: "Pastries & Snacks", href: "product" }
              ]
            },
            {
              title: "About",
              items: [
                { label: "Our Story", href: "about" },
                { label: "Community Events", href: "https://facebook.com/coffeehouse" },
                { label: "Contact Us", href: "contact" }
              ]
            },
            {
              title: "Visit Us",
              items: [
                { label: "Location & Hours", href: "contact" },
                { label: "WiFi & Amenities", href: "about" },
                { label: "Group Bookings", href: "contact" }
              ]
            }
          ]}
          logoSrc="https://images.pexels.com/photos/16822611/pexels-photo-16822611.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          copyrightText="© 2025 Coffee House. Made with ♥ for our community."
        />
      </div>
    </ThemeProvider>
  );
}