import React from 'react';
import { Star, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: '3rd Grade Teacher',
      school: 'Lincoln Elementary',
      avatar: '👩‍🏫',
      rating: 5,
      text: 'Classroom Copilot has transformed how I plan lessons. What used to take hours now takes minutes, and the quality is incredible!'
    },
    {
      name: 'Michael Chen',
      role: '5th Grade Teacher', 
      school: 'Roosevelt Middle School',
      avatar: '👨‍🏫',
      rating: 5,
      text: 'The AI-generated lessons are so comprehensive and age-appropriate. My students are more engaged than ever before.'
    },
    {
      name: 'Emily Rodriguez',
      role: '2nd Grade Teacher',
      school: 'Sunshine Elementary',
      avatar: '👩‍💼',
      rating: 5,
      text: 'I love how the platform creates activities for different learning styles. Every student in my class benefits.'
    }
  ];

  return (
    <section className="testimonials">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2>Loved by Teachers Everywhere</h2>
          <p>See what educators are saying about Classroom Copilot</p>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-avatar">
                  <span className="avatar-emoji">{testimonial.avatar}</span>
                </div>
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="star filled" />
                  ))}
                </div>
              </div>
              
              <div className="testimonial-content">
                <Quote className="quote-icon" size={24} />
                <p>{testimonial.text}</p>
              </div>
              
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                  <span>{testimonial.school}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="testimonials-stats">
          <div className="stat-item">
            <div className="stat-number">4.9/5</div>
            <div className="stat-label">Average Rating</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">2,500+</div>
            <div className="stat-label">Happy Teachers</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">50,000+</div>
            <div className="stat-label">Students Impacted</div>
          </div>
        </div>
      </div>
    </section>
  );
};
