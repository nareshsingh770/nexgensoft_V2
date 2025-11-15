import ScrollAnimation from "../components/ScrollAnimation";
import ContactForm from "../components/ContactForm";

import { facts, services, TeamData } from "@/lib/appConstant";
import Logo from "@/components/Logo";
export default function Home() {

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero.png"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60 dark:bg-black/80" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-20 text-center relative z-10">
          <ScrollAnimation>
            <Logo className="text-5xl md:text-7xl" />
            <h1 className="text-3xl md:text-7xl font-bold mb-6 text-pink-600">
              Build Your Digital Future
            </h1>
            <p className="text-sm md:text-2xl text-gray-200 max-w-3xl mx-auto mb-10">
              Professional web development and digital services to transform
              your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#contact"
                className="px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:opacity-90 transition-all hover:scale-105 inline-flex items-center gap-2"
              >
                Get Started
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
              <a
                href="#contact"
                className="px-8 py-4 bg-pink-600/10 text-white border-2 border-pink-600/30 rounded-lg font-semibold hover:bg-pink-600/20 transition-all hover:scale-105 backdrop-blur-sm"
              >
                Contact Us
              </a>
            </div>
          </ScrollAnimation>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-muted py-20">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollAnimation>
            <h2 className="text-4xl font-bold text-center mb-4 text-pink-600">
              Services We Offer
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your needs
            </p>
          </ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ScrollAnimation key={index}>
                <div className="bg-background p-6 rounded-xl hover:shadow-lg transition-all hover:-translate-y-1">
                  <service.icon className="text-pink-600 h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">{service.desc}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Design Section */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <ScrollAnimation>
          <div className="">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-4xl font-bold mb-6 text-pink-600">
                  Modern Design & Essential Features
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  We leverage the latest trending technologies to deliver
                  exceptional user experiences. Our modern design approach
                  ensures your digital presence stands out with cutting-edge
                  interfaces that are both beautiful and functional.
                </p>
                <p className="text-lg text-muted-foreground">
                  Every project is built with performance, accessibility, and
                  user satisfaction at its core.
                </p>
              </div>
              <div className="order-1 md:order-2">
                <img
                  src="/images/modern_design.svg"
                  alt="Modern Design"
                  className="w-full h-auto rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </section>

      {/* Team of Experts Section */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <ScrollAnimation>
          <div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-1 md:order-1">
                <img
                  src="/images/team_expert.svg"
                  alt="Modern Design"
                  className="w-full h-auto rounded-xl shadow-2xl"
                />
              </div>
              <div className="order-2 md:order-2">
                <h2 className="text-4xl font-bold mb-6 text-pink-600">
                  Team of Experts
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Our professional team stays ahead of the curve with the latest
                  technologies and industry best practices. We combine years of
                  experience with continuous learning to deliver solutions that
                  meet market demands. Each team member brings specialized
                  expertise in modern frameworks, cloud technologies, and
                  innovative development approaches.
                </p>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </section>

      {/* Cool Facts Section */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <ScrollAnimation>
          <h2 className="text-4xl font-bold text-center mb-12 text-pink-600">
            Cool Facts About Our Products
          </h2>
        </ScrollAnimation>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {facts.map((fact, index) => (
            <ScrollAnimation key={index}>
              <div className="text-center p-6">
                <fact.icon className="h-16 w-16 text-primary mx-auto mb-4 text-pink-600" />
                <h3 className="text-2xl font-bold mb-2">{fact.title}</h3>
                <p className="text-muted-foreground">{fact.desc}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="bg-muted py-20">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollAnimation>
            <h2 className="text-4xl font-bold text-center mb-12 text-pink-600">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {TeamData.map((member, index) => (
                <ScrollAnimation key={index}>
                  <div className="bg-background rounded-xl p-6 text-center hover:shadow-lg transition-all hover:-translate-y-2">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-primary"
                    />
                    <h3 className="text-xl font-bold mb-1 text-pink-600">
                      {member.name}
                    </h3>
                    <p className="text-primary font-semibold mb-3">
                      {member.role}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {member.bio}
                    </p>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Contact Section */}
      <section id='contact' className="max-w-6xl mx-auto px-4 py-20">
        <ScrollAnimation>
          <h2 className="text-4xl font-bold text-center mb-4 text-pink-600">
            Get In Touch
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Ready to start your project? Contact us today!
          </p>
        </ScrollAnimation>
        <ScrollAnimation>
          <ContactForm />
        </ScrollAnimation>
      </section>
    </main>
  );
}
