import React from 'react';
import { BookOpen, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube, ArrowRight, Shield, Users, Heart, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: 'Features', href: '#features' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Templates', href: '#templates' },
      { name: 'Curriculum Standards', href: '#standards' },
      { name: 'AI Assistant', href: '#ai-assistant' },
      { name: 'Lesson Library', href: '#library' }
    ],
    resources: [
      { name: 'Help Center', href: '#help' },
      { name: 'Getting Started', href: '#getting-started' },
      { name: 'Video Tutorials', href: '#tutorials' },
      { name: 'Best Practices', href: '#best-practices' },
      { name: 'Blog', href: '#blog' },
      { name: 'Community', href: '#community' }
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Mission', href: '#mission' },
      { name: 'Careers', href: '#careers' },
      { name: 'Contact', href: '#contact' },
      { name: 'Press Kit', href: '#press' },
      { name: 'Partners', href: '#partners' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Terms of Service', href: '#terms' },
      { name: 'Cookie Policy', href: '#cookies' },
      { name: 'Data Security', href: '#security' },
      { name: 'Accessibility', href: '#accessibility' },
      { name: 'Student Privacy', href: '#student-privacy' }
    ]
  };

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#facebook' },
    { name: 'Twitter', icon: Twitter, href: '#twitter' },
    { name: 'LinkedIn', icon: Linkedin, href: '#linkedin' },
    { name: 'Instagram', icon: Instagram, href: '#instagram' },
    { name: 'YouTube', icon: Youtube, href: '#youtube' }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-main">
          <div className="footer-brand">
            <div className="footer-logo">
              <BookOpen size={32} className="logo-icon" />
              <span className="logo-text">Classroom Copilot</span>
            </div>
            <p className="footer-description">
              Empowering educators with AI-powered lesson planning tools that save time and enhance learning outcomes for students aged 5-12.
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-section">
              <h3 className="footer-title">Product</h3>
              <ul className="footer-list">
                {footerLinks.product.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="footer-link">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-section">
              <h3 className="footer-title">Resources</h3>
              <ul className="footer-list">
                {footerLinks.resources.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="footer-link">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-section">
              <h3 className="footer-title">Company</h3>
              <ul className="footer-list">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="footer-link">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-section">
              <h3 className="footer-title">Legal</h3>
              <ul className="footer-list">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="footer-link">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="footer-newsletter">
          <div className="newsletter-content">
            <h3 className="newsletter-title">Stay Updated</h3>
            <p className="newsletter-description">
              Get the latest educational insights, lesson planning tips, and product updates delivered to your inbox.
            </p>
            <form className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email address"
                className="newsletter-input"
                required
              />
              <button type="submit" className="newsletter-button">
                Subscribe
                <ArrowRight size={16} />
              </button>
            </form>
            <p className="newsletter-note">
              No spam, unsubscribe anytime. Read our <a href="#privacy" className="privacy-link">Privacy Policy</a>.
            </p>
          </div>
        </div>

        {/* Contact & Social */}
        <div className="footer-contact">
          <div className="contact-info">
            <h3 className="contact-title">Get in Touch</h3>
            <div className="contact-items">
              <div className="contact-item">
                <Mail size={18} />
                <span>support@classroomcopilot.com</span>
              </div>
              <div className="contact-item">
                <Phone size={18} />
                <span>Available via email</span>
              </div>
              <div className="contact-item">
                <MapPin size={18} />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          <div className="social-section">
            <h3 className="social-title">Follow Us</h3>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="social-link"
                  aria-label={social.name}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="footer-trust">
          <div className="trust-badges">
            <div className="trust-badge">
              <Shield size={18} />
              <span>Privacy Focused</span>
            </div>
            <div className="trust-badge">
              <Users size={18} />
              <span>Educator Built</span>
            </div>
            <div className="trust-badge">
              <BookOpen size={18} />
              <span>Education First</span>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; {currentYear} Classroom Copilot. All rights reserved.</p>
          </div>
          <div className="footer-made-with">
            <p>
              Made with <Heart size={16} className="heart-icon" /> for educators
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};