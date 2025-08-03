import { Head } from "@inertiajs/react";
import { useState } from "react";

import cs from "@walk_good/pages/Index.module.css";

export default function WalkGoodTravel({ name }: { name?: string }) {
  const [showQuoteForm, setShowQuoteForm] = useState(false);

  return (
    <>
      <Head title="Walk Good Travel - Boutique Travel Agency | Palace Resort Specialists" />

      <div className={cs.root}>
        {/* Hero Section */}
        <header className={cs.hero}>
          <h1 className={cs.heroTitle}>Walk Good Travel</h1>
          <p className={cs.heroSubtitle}>Boutique Travel Agency</p>
          <p className={cs.heroTagline}>
            Specializing in Palace Resort experiences with exclusive member
            benefits
          </p>
        </header>

        {/* Main Benefits Section */}
        <section className={cs.benefitsSection}>
          <h2 className={cs.sectionTitle}>
            Exclusive Member Benefits & Substantial Savings
          </h2>

          <p className={cs.introText}>
            As verified Palace Resort members, we extend our exclusive
            membership privileges to our clients. When you book through Walk
            Good Travel, you receive Elite VIP benefits that are not available
            through standard booking channels, resulting in significant cost
            savings and enhanced experiences.
          </p>

          <div className={cs.benefitsList}>
            <div className={cs.benefit}>
              <h3 className={cs.benefitTitle}>Member Rate Pricing</h3>
              <p>
                Access to member-exclusive rates, typically hundreds of dollars
                below standard travel website pricing. Our experienced team
                manages all booking details and coordination.
              </p>
            </div>

            <div className={cs.benefit}>
              <h3 className={cs.benefitTitle}>VIP Resort Access</h3>
              <p>
                Exclusive VIP wristband providing access to designated premium
                beach areas and enhanced service standards from resort staff
                throughout your stay.
              </p>
            </div>

            <div className={cs.benefit}>
              <h3 className={cs.benefitTitle}>Complimentary Transportation</h3>
              <p>
                Shared airport transportation included for stays of four nights
                or longer, eliminating concerns about ground transportation
                logistics and additional costs.
              </p>
            </div>

            <div className={cs.benefit}>
              <h3 className={cs.benefitTitle}>Resort Credit Program</h3>
              <p>
                Substantial resort credits based on stay duration:
                <br />
                • $500 credit for 3-night stays
                <br />
                • $750 credit for 4-night stays
                <br />
                • $1,500 credit for 5-7 night stays
                <br />
                Credits may be applied toward select tours and resort
                activities.
              </p>
            </div>

            <div className={cs.benefit}>
              <h3 className={cs.benefitTitle}>Exclusive Resort Opportunity</h3>
              <p>
                Complimentary three-night stay at the new Grand Punta Cana
                resort, scheduled to open in Spring 2026, available to
                qualifying bookings.
              </p>
            </div>

            <div className={cs.benefit}>
              <h3 className={cs.benefitTitle}>Comprehensive Travel Services</h3>
              <p>
                As licensed travel professionals, we provide competitive airfare
                booking and curated excursion planning to complement your resort
                experience.
              </p>
            </div>
          </div>

          <div className={cs.guarantee}>
            <p className={cs.guaranteeText}>
              <strong>No Additional Fees or Obligations</strong>
              <br />
              Our member benefits are provided without requirements to attend
              sales presentations. We are licensed and insured travel
              professionals committed to transparent service.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className={cs.ctaSection}>
          <h2 className={cs.ctaTitle}>Begin Planning Your Experience</h2>
          <p className={cs.ctaText}>
            Contact our team for a personalized consultation and detailed
            pricing. We will assist you in selecting the ideal Palace Resort
            property and ensure you receive optimal rates and benefits.
          </p>

          <div className={cs.ctaButtons}>
            <button
              className={cs.primaryButton}
              onClick={() => setShowQuoteForm(!showQuoteForm)}
            >
              Request Quote
            </button>
            <a
              href="mailto:hello@walkgoodtravel.com"
              className={cs.secondaryButton}
            >
              Contact Us
            </a>
          </div>

          {showQuoteForm && (
            <div className={cs.quoteForm}>
              <h3>Quote Request Form</h3>
              <p>
                Please provide your travel preferences and we will respond
                within 24 hours with detailed pricing and availability.
              </p>
              <form className={cs.form}>
                <input
                  type="text"
                  placeholder="Full Name"
                  className={cs.formInput}
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className={cs.formInput}
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className={cs.formInput}
                />
                <select className={cs.formSelect}>
                  <option>Preferred Resort (if known)</option>
                  <option>Moon Palace Cancun</option>
                  <option>Grand at Moon Palace</option>
                  <option>Le Blanc Spa Resort</option>
                  <option>Palace Resorts - Other Property</option>
                  <option>Recommendation Requested</option>
                </select>
                <input
                  type="text"
                  placeholder="Preferred Travel Dates"
                  className={cs.formInput}
                />
                <input
                  type="number"
                  placeholder="Number of Nights (5 night minimum)"
                  className={cs.formInput}
                />
                <input
                  type="number"
                  placeholder="Total Number of Guests"
                  className={cs.formInput}
                />
                <textarea
                  placeholder="Special Requirements or Additional Information"
                  className={cs.formTextarea}
                ></textarea>
                <button type="submit" className={cs.submitButton}>
                  Submit Quote Request
                </button>
              </form>
            </div>
          )}
        </section>

        {/* FAQ Section */}
        <section className={cs.faqSection}>
          <h2 className={cs.sectionTitle}>Frequently Asked Questions</h2>

          <div className={cs.faqGrid}>
            <div className={cs.faqItem}>
              <h3>What is the minimum stay requirement?</h3>
              <p>
                To access member benefits, bookings must be for a minimum of
                five consecutive nights at participating Palace Resort
                properties.
              </p>
            </div>

            <div className={cs.faqItem}>
              <h3>How is payment processed?</h3>
              <p>
                We do not process payments directly. Upon confirmation of your
                reservation, Palace Resorts will provide a secure payment link
                for direct settlement with the resort.
              </p>
            </div>

            <div className={cs.faqItem}>
              <h3>Are sales presentations mandatory?</h3>
              <p>
                No. Unlike many promotional offers, our member benefits are
                provided without any obligation to attend sales presentations or
                timeshare demonstrations.
              </p>
            </div>

            <div className={cs.faqItem}>
              <h3>Can you accommodate group bookings?</h3>
              <p>
                Yes. We can coordinate multiple room reservations for groups
                based on resort availability and can provide group coordination
                services.
              </p>
            </div>

            <div className={cs.faqItem}>
              <h3>What are your professional credentials?</h3>
              <p>
                Walk Good Travel maintains appropriate licensing and
                professional insurance as travel service providers. All
                financial transactions are processed directly through Palace
                Resorts' secure systems.
              </p>
            </div>

            <div className={cs.faqItem}>
              <h3>What is your business model?</h3>
              <p>
                As a recognized agency partner, we receive promotional
                considerations from Palace Resorts for qualified bookings, which
                enables us to extend these member benefits to our clients.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className={cs.footer}>
          <p className={cs.footerText}>
            <strong>Walk Good Travel</strong> - Licensed & Insured Travel
            Services
            <br />
            Specializing in Palace Resort experiences since 2025
          </p>
          <p className={cs.footerContact}>
            Professional Inquiries:{" "}
            <a href="mailto:hello@walkgoodtravel.com">
              hello@walkgoodtravel.com
            </a>
          </p>
        </footer>
      </div>
    </>
  );
}
