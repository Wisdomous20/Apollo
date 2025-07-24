'use client';

import Image from 'next/image';
import Navigation from '../../components/Navigation';
import Head from 'next/head';

export default function AboutUs() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div
        className="min-h-screen bg-white"
        style={{ fontFamily: "'Cinzel', serif" }}
      >
        <Navigation />

        {/* Hero Section - Rooted in Healing */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden mt-[4.5rem] md:mt-[5.5rem]">
          {/* Background Image with Gradient Overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/about-apollo.jpg"
              alt="Hospital exterior"
              fill
              className="object-cover blur-xs md:blur-sm"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-blue-900/20 to-black/50"></div>
          </div>
          {/* Content */}
          <div className="relative z-10 max-w-[75rem] mx-auto px-[1.5rem] text-center">
            <h1
              className="text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] font-light text-white mb-[1.5rem] leading-[1.1]"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Rooted in Healing,
              <br />
              <span className="font-medium">Dedicated to Your Well-being</span>
            </h1>
            <p
              className="text-[1.125rem] md:text-[1.25rem] lg:text-[1.375rem] text-slate-200 max-w-[50rem] mx-auto leading-[1.6] font-light"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              For over three decades, we have been a cornerstone of healthcare
              excellence in our community, combining cutting-edge medical
              technology with compassionate, personalized care that puts you
              first.
            </p>
          </div>
          {/* Straight-line divider */}
          <div className="absolute bottom-0 left-0 right-0 h-[0.125rem] bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
        </section>

        {/* Combined Mission and Values Section with Diagonal Split */}
        <section className="relative overflow-hidden">
          {/* Our Mission Section - Top Part */}
          <div className="relative bg-gradient-to-br from-slate-50 to-blue-50/30">
            {/* Background Image for Mission Section */}
            <div className="absolute inset-0 z-0 opacity-[0.04] hidden lg:block">
              <Image
                src="/placeholder.svg?height=800&width=1200"
                alt="Healthcare consultation background"
                fill
                className="object-cover"
              />
            </div>

            {/* Mission Content Container with Diagonal Clip */}
            <div
              className="relative z-10 py-[4rem] md:py-[6rem] lg:py-[8rem]"
              style={{
                clipPath:
                  'polygon(0 0, 100% 0, 100% calc(100% - 4rem), 0 100%)',
              }}
            >
              <div className="max-w-[75rem] mx-auto px-[1.5rem]">
                {/* Desktop Layout */}
                <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 gap-[3rem] lg:gap-[4rem] items-center">
                  {/* Mission Content */}
                  <div className="order-2 lg:order-1">
                    <h2
                      className="text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-light text-slate-800 mb-[2rem] leading-[1.2]"
                      style={{ fontFamily: "'Cinzel', serif" }}
                    >
                      Our Mission
                    </h2>
                    <div className="w-[4rem] h-[0.125rem] bg-blue-600 mb-[2.5rem]"></div>
                    <p
                      className="text-[1.125rem] md:text-[1.25rem] lg:text-[1.375rem] text-slate-600 leading-[1.7] font-light mb-[1.5rem]"
                      style={{ fontFamily: "'Cinzel', serif" }}
                    >
                      To provide exceptional healthcare services that inspire
                      trust, deliver personalized treatment, and empower our
                      patients to achieve optimal health and wellness throughout
                      their lives.
                    </p>
                    <p
                      className="text-[1rem] md:text-[1.125rem] text-slate-500 leading-[1.6] font-light"
                      style={{ fontFamily: "'Cinzel', serif" }}
                    >
                      We believe that healing extends beyond medical
                      treatment—it encompasses the entire patient experience,
                      from the moment you walk through our doors to your journey
                      toward complete recovery.
                    </p>
                  </div>
                  {/* Mission Supporting Image with Diagonal Shape */}
                  <div className="order-1 lg:order-2 relative">
                    <div className="relative h-[20rem] md:h-[25rem] lg:h-[30rem]">
                      {/* Main diagonal container */}
                      <div
                        className="relative h-full w-full overflow-hidden bg-slate-200"
                        style={{
                          clipPath:
                            'polygon(15% 0%, 100% 0%, 100% 85%, 0% 100%)',
                        }}
                      >
                        <Image
                          src="/doctor-patient.jpg"
                          alt="Doctor consulting with patient"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/10 to-slate-900/30"></div>
                      </div>
                      {/* Decorative accent shape */}
                      <div
                        className="absolute top-[2rem] right-[2rem] w-[6rem] h-[6rem] bg-blue-600/15 -z-10"
                        style={{
                          clipPath:
                            'polygon(30% 0%, 100% 0%, 70% 100%, 0% 100%)',
                        }}
                      ></div>
                      {/* Secondary decorative element */}
                      <div
                        className="absolute -bottom-[1rem] left-[1rem] w-[4rem] h-[4rem] bg-red-500/20 -z-10"
                        style={{
                          clipPath:
                            'polygon(0% 20%, 80% 0%, 100% 80%, 20% 100%)',
                        }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Mobile Layout - Text Over Image */}
                <div className="lg:hidden relative">
                  <div className="relative h-[25rem] overflow-hidden bg-slate-200 rounded-lg">
                    <Image
                      src="/doctor-patient.jpg"
                      alt="Doctor consulting with patient"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>

                    {/* Mission Content Overlay */}
                    <div className="absolute inset-0 flex flex-col justify-end p-[1.5rem] text-white">
                      <h2
                        className="text-[1.75rem] font-light mb-[1rem] leading-[1.2]"
                        style={{ fontFamily: "'Cinzel', serif" }}
                      >
                        Our Mission
                      </h2>
                      <div className="w-[3rem] h-[0.125rem] bg-blue-400 mb-[1.5rem]"></div>
                      <p
                        className="text-[1rem] leading-[1.6] font-light mb-[1rem] text-slate-100"
                        style={{ fontFamily: "'Cinzel', serif" }}
                      >
                        To provide exceptional healthcare services that inspire
                        trust, deliver personalized treatment, and empower our
                        patients to achieve optimal health and wellness
                        throughout their lives.
                      </p>
                      <p
                        className="text-[0.875rem] leading-[1.5] font-light text-slate-200"
                        style={{ fontFamily: "'Cinzel', serif" }}
                      >
                        We believe that healing extends beyond medical
                        treatment—it encompasses the entire patient experience,
                        from the moment you walk through our doors to your
                        journey toward complete recovery.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Values Section - Bottom Part with Diagonal Top */}
          <div className="relative bg-gradient-to-br from-white to-red-50/20 -mt-[4rem]">
            <div
              className="relative z-10 pt-[6rem] pb-[4rem] md:pb-[6rem]"
              style={{
                clipPath: 'polygon(0 4rem, 100% 0, 100% 100%, 0 100%)',
              }}
            >
              <div className="max-w-[75rem] mx-auto px-[1.5rem]">
                <div className="text-center mb-[3rem] md:mb-[4rem]">
                  <h2
                    className="text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-light text-slate-800 mb-[1.5rem] leading-[1.2]"
                    style={{ fontFamily: "'Cinzel', serif" }}
                  >
                    Our Values
                  </h2>
                  <div className="w-[4rem] h-[0.125rem] bg-red-600 mx-auto"></div>
                </div>

                {/* Desktop Values Grid */}
                <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-[2rem] md:gap-[2.5rem]">
                  {/* Excellence Value */}
                  <div className="text-center group">
                    <div className="relative w-[8rem] h-[8rem] mx-auto mb-[1.5rem] overflow-hidden bg-slate-100 rounded-full border-2 border-red-200 group-hover:border-red-300 transition-colors duration-300">
                      <Image
                        src="/placeholder.svg?height=200&width=200"
                        alt="Excellence in healthcare"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h3
                      className="text-[1.25rem] md:text-[1.375rem] font-medium text-slate-800 mb-[1rem]"
                      style={{ fontFamily: "'Cinzel', serif" }}
                    >
                      Excellence
                    </h3>
                    <p
                      className="text-[1rem] text-slate-600 leading-[1.6] font-light"
                      style={{ fontFamily: "'Cinzel', serif" }}
                    >
                      Committed to the highest standards of medical care and
                      continuous improvement.
                    </p>
                  </div>
                  {/* Compassion Value */}
                  <div className="text-center group">
                    <div className="relative w-[8rem] h-[8rem] mx-auto mb-[1.5rem] overflow-hidden bg-slate-100 rounded-full border-2 border-red-200 group-hover:border-red-300 transition-colors duration-300">
                      <Image
                        src="/placeholder.svg?height=200&width=200"
                        alt="Compassionate care"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h3
                      className="text-[1.25rem] md:text-[1.375rem] font-medium text-slate-800 mb-[1rem]"
                      style={{ fontFamily: "'Cinzel', serif" }}
                    >
                      Compassion
                    </h3>
                    <p
                      className="text-[1rem] text-slate-600 leading-[1.6] font-light"
                      style={{ fontFamily: "'Cinzel', serif" }}
                    >
                      Treating every patient with empathy, respect, and genuine
                      care.
                    </p>
                  </div>
                  {/* Innovation Value */}
                  <div className="text-center group">
                    <div className="relative w-[8rem] h-[8rem] mx-auto mb-[1.5rem] overflow-hidden bg-slate-100 rounded-full border-2 border-red-200 group-hover:border-red-300 transition-colors duration-300">
                      <Image
                        src="/placeholder.svg?height=200&width=200"
                        alt="Healthcare innovation"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h3
                      className="text-[1.25rem] md:text-[1.375rem] font-medium text-slate-800 mb-[1rem]"
                      style={{ fontFamily: "'Cinzel', serif" }}
                    >
                      Innovation
                    </h3>
                    <p
                      className="text-[1rem] text-slate-600 leading-[1.6] font-light"
                      style={{ fontFamily: "'Cinzel', serif" }}
                    >
                      Embracing cutting-edge technology and progressive
                      treatment methods.
                    </p>
                  </div>
                </div>

                {/* Mobile Values Carousel */}
                <div className="md:hidden">
                  <div className="relative">
                    <div
                      className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-[1rem] pb-[1rem]"
                      id="values-carousel"
                    >
                      {/* Excellence Value */}
                      <div className="flex-none w-[280px] snap-center text-center bg-white rounded-lg p-[1.5rem] border border-red-100">
                        <div className="relative w-[6rem] h-[6rem] mx-auto mb-[1rem] overflow-hidden bg-slate-100 rounded-full border-2 border-red-200">
                          <Image
                            src="/placeholder.svg?height=200&width=200"
                            alt="Excellence in healthcare"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <h3
                          className="text-[1.125rem] font-medium text-slate-800 mb-[0.75rem]"
                          style={{ fontFamily: "'Cinzel', serif" }}
                        >
                          Excellence
                        </h3>
                        <p
                          className="text-[0.875rem] text-slate-600 leading-[1.5] font-light"
                          style={{ fontFamily: "'Cinzel', serif" }}
                        >
                          Committed to the highest standards of medical care and
                          continuous improvement.
                        </p>
                      </div>
                      {/* Compassion Value */}
                      <div className="flex-none w-[280px] snap-center text-center bg-white rounded-lg p-[1.5rem] border border-red-100">
                        <div className="relative w-[6rem] h-[6rem] mx-auto mb-[1rem] overflow-hidden bg-slate-100 rounded-full border-2 border-red-200">
                          <Image
                            src="/placeholder.svg?height=200&width=200"
                            alt="Compassionate care"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <h3
                          className="text-[1.125rem] font-medium text-slate-800 mb-[0.75rem]"
                          style={{ fontFamily: "'Cinzel', serif" }}
                        >
                          Compassion
                        </h3>
                        <p
                          className="text-[0.875rem] text-slate-600 leading-[1.5] font-light"
                          style={{ fontFamily: "'Cinzel', serif" }}
                        >
                          Treating every patient with empathy, respect, and
                          genuine care.
                        </p>
                      </div>
                      {/* Innovation Value */}
                      <div className="flex-none w-[280px] snap-center text-center bg-white rounded-lg p-[1.5rem] border border-red-100">
                        <div className="relative w-[6rem] h-[6rem] mx-auto mb-[1rem] overflow-hidden bg-slate-100 rounded-full border-2 border-red-200">
                          <Image
                            src="/placeholder.svg?height=200&width=200"
                            alt="Healthcare innovation"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <h3
                          className="text-[1.125rem] font-medium text-slate-800 mb-[0.75rem]"
                          style={{ fontFamily: "'Cinzel', serif" }}
                        >
                          Innovation
                        </h3>
                        <p
                          className="text-[0.875rem] text-slate-600 leading-[1.5] font-light"
                          style={{ fontFamily: "'Cinzel', serif" }}
                        >
                          Embracing cutting-edge technology and progressive
                          treatment methods.
                        </p>
                      </div>
                    </div>

                    {/* Pagination Dots */}
                    <div className="flex justify-center mt-[1.5rem] gap-[0.5rem]">
                      <div className="w-[0.5rem] h-[0.5rem] rounded-full bg-red-600 transition-all duration-300"></div>
                      <div className="w-[0.5rem] h-[0.5rem] rounded-full bg-red-200 transition-all duration-300"></div>
                      <div className="w-[0.5rem] h-[0.5rem] rounded-full bg-red-200 transition-all duration-300"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Diagonal divider line accent */}
            <div
              className="absolute top-0 left-0 right-0 h-[0.25rem] bg-gradient-to-r from-red-500/20 via-blue-500/40 to-red-500/20"
              style={{
                clipPath: 'polygon(0 100%, 100% 0, 100% 100%, 0 100%)',
              }}
            ></div>
          </div>
        </section>

        {/* Our Services Section */}
        <section className="relative py-[4rem] md:py-[6rem] lg:py-[8rem] bg-slate-50 border-t border-red-100">
          {/* Services Section Background Image */}
          <div className="absolute inset-0 z-0 opacity-[0.03]">
            <Image
              src="/placeholder.svg?height=600&width=1200"
              alt="Medical facility interior"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative z-10 max-w-[75rem] mx-auto px-[1.5rem]">
            <div className="text-center mb-[3rem] md:mb-[4rem]">
              <h2
                className="text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-light text-slate-800 mb-[1.5rem] leading-[1.2]"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                Our Services
              </h2>
              <div className="w-[4rem] h-[0.125rem] bg-slate-400 mx-auto mb-[1.5rem]"></div>
              <p
                className="text-[1.125rem] md:text-[1.25rem] text-slate-600 max-w-[50rem] mx-auto leading-[1.6] font-light"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                Comprehensive healthcare solutions designed to meet your unique
                needs at every stage of life.
              </p>
            </div>

            {/* Desktop Services Grid */}
            <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem] md:gap-[2.5rem]">
              {/* Primary Care */}
              <div className="group relative bg-white border border-slate-200 hover:border-slate-300 transition-all duration-300 overflow-hidden">
                {/* Service Header Image */}
                <div className="relative h-[12rem] overflow-hidden bg-slate-100">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Primary care examination"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="relative z-10 p-[2rem] md:p-[2.5rem]">
                  <div className="w-[3rem] h-[0.125rem] bg-blue-600 mb-[1.5rem]"></div>
                  <h3
                    className="text-[1.375rem] md:text-[1.5rem] font-medium text-slate-800 mb-[1rem] leading-[1.3]"
                    style={{ fontFamily: "'Cinzel', serif" }}
                  >
                    Primary Care
                  </h3>
                  <p
                    className="text-[1rem] md:text-[1.125rem] text-slate-600 leading-[1.6] font-light mb-[1.5rem]"
                    style={{ fontFamily: "'Cinzel', serif" }}
                  >
                    Comprehensive preventive care, routine check-ups, and
                    treatment for common health conditions. Our experienced
                    physicians provide personalized care for patients of all
                    ages.
                  </p>
                  <ul
                    className="text-[0.875rem] md:text-[1rem] text-slate-500 space-y-[0.5rem] font-light"
                    style={{ fontFamily: "'Cinzel', serif" }}
                  >
                    <li>• Annual wellness exams</li>
                    <li>• Chronic disease management</li>
                    <li>• Preventive screenings</li>
                    <li>• Immunizations</li>
                  </ul>
                </div>
              </div>
              {/* Psychological and Mental Health */}
              <div className="group relative bg-white border border-slate-200 hover:border-slate-300 transition-all duration-300 overflow-hidden">
                {/* Service Header Image */}
                <div className="relative h-[12rem] overflow-hidden bg-slate-100">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Mental health therapy session"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="relative z-10 p-[2rem] md:p-[2.5rem]">
                  <div className="w-[3rem] h-[0.125rem] bg-red-600 mb-[1.5rem]"></div>
                  <h3
                    className="text-[1.375rem] md:text-[1.5rem] font-medium text-slate-800 mb-[1rem] leading-[1.3]"
                    style={{ fontFamily: "'Cinzel', serif" }}
                  >
                    Psychological & Mental Health
                  </h3>
                  <p
                    className="text-[1rem] md:text-[1.125rem] text-slate-600 leading-[1.6] font-light mb-[1.5rem]"
                    style={{ fontFamily: "'Cinzel', serif" }}
                  >
                    Professional mental health services in a supportive
                    environment. Our licensed therapists and psychiatrists
                    provide evidence-based treatments for various mental health
                    conditions.
                  </p>
                  <ul
                    className="text-[0.875rem] md:text-[1rem] text-slate-500 space-y-[0.5rem] font-light"
                    style={{ fontFamily: "'Cinzel', serif" }}
                  >
                    <li>• Individual therapy</li>
                    <li>• Group counseling</li>
                    <li>• Psychiatric evaluations</li>
                    <li>• Crisis intervention</li>
                  </ul>
                </div>
              </div>
              {/* Aesthetic Services */}
              <div className="group relative bg-white border border-slate-200 hover:border-slate-300 transition-all duration-300 overflow-hidden md:col-span-2 lg:col-span-1">
                {/* Service Header Image */}
                <div className="relative h-[12rem] overflow-hidden bg-slate-100">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Aesthetic medical treatment"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="relative z-10 p-[2rem] md:p-[2.5rem]">
                  <div className="w-[3rem] h-[0.125rem] bg-blue-600 mb-[1.5rem]"></div>
                  <h3
                    className="text-[1.375rem] md:text-[1.5rem] font-medium text-slate-800 mb-[1rem] leading-[1.3]"
                    style={{ fontFamily: "'Cinzel', serif" }}
                  >
                    Aesthetic Services
                  </h3>
                  <p
                    className="text-[1rem] md:text-[1.125rem] text-slate-600 leading-[1.6] font-light mb-[1.5rem]"
                    style={{ fontFamily: "'Cinzel', serif" }}
                  >
                    Advanced cosmetic and aesthetic treatments performed by
                    certified professionals. Enhance your natural beauty with
                    safe, effective procedures in a clinical setting.
                  </p>
                  <ul
                    className="text-[0.875rem] md:text-[1rem] text-slate-500 space-y-[0.5rem] font-light"
                    style={{ fontFamily: "'Cinzel', serif" }}
                  >
                    <li>• Non-surgical facial treatments</li>
                    <li>• Skin rejuvenation</li>
                    <li>• Cosmetic consultations</li>
                    <li>• Medical-grade skincare</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Mobile Services Carousel */}
            <div className="md:hidden">
              <div className="relative">
                <div
                  className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-[1rem] pb-[1rem]"
                  id="services-carousel"
                >
                  {/* Primary Care */}
                  <div className="flex-none w-[300px] snap-center bg-white border border-slate-200 overflow-hidden rounded-lg">
                    <div className="relative h-[10rem] overflow-hidden bg-slate-100">
                      <Image
                        src="/placeholder.svg?height=300&width=400"
                        alt="Primary care examination"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                    <div className="p-[1.5rem]">
                      <div className="w-[2.5rem] h-[0.125rem] bg-blue-600 mb-[1rem]"></div>
                      <h3
                        className="text-[1.125rem] font-medium text-slate-800 mb-[0.75rem] leading-[1.3]"
                        style={{ fontFamily: "'Cinzel', serif" }}
                      >
                        Primary Care
                      </h3>
                      <p
                        className="text-[0.875rem] text-slate-600 leading-[1.5] font-light mb-[1rem]"
                        style={{ fontFamily: "'Cinzel', serif" }}
                      >
                        Comprehensive preventive care, routine check-ups, and
                        treatment for common health conditions.
                      </p>
                      <ul
                        className="text-[0.75rem] text-slate-500 space-y-[0.25rem] font-light"
                        style={{ fontFamily: "'Cinzel', serif" }}
                      >
                        <li>• Annual wellness exams</li>
                        <li>• Chronic disease management</li>
                        <li>• Preventive screenings</li>
                      </ul>
                    </div>
                  </div>
                  {/* Psychological and Mental Health */}
                  <div className="flex-none w-[300px] snap-center bg-white border border-slate-200 overflow-hidden rounded-lg">
                    <div className="relative h-[10rem] overflow-hidden bg-slate-100">
                      <Image
                        src="/placeholder.svg?height=300&width=400"
                        alt="Mental health therapy session"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                    <div className="p-[1.5rem]">
                      <div className="w-[2.5rem] h-[0.125rem] bg-red-600 mb-[1rem]"></div>
                      <h3
                        className="text-[1.125rem] font-medium text-slate-800 mb-[0.75rem] leading-[1.3]"
                        style={{ fontFamily: "'Cinzel', serif" }}
                      >
                        Mental Health
                      </h3>
                      <p
                        className="text-[0.875rem] text-slate-600 leading-[1.5] font-light mb-[1rem]"
                        style={{ fontFamily: "'Cinzel', serif" }}
                      >
                        Professional mental health services in a supportive
                        environment with licensed therapists.
                      </p>
                      <ul
                        className="text-[0.75rem] text-slate-500 space-y-[0.25rem] font-light"
                        style={{ fontFamily: "'Cinzel', serif" }}
                      >
                        <li>• Individual therapy</li>
                        <li>• Group counseling</li>
                        <li>• Psychiatric evaluations</li>
                      </ul>
                    </div>
                  </div>
                  {/* Aesthetic Services */}
                  <div className="flex-none w-[300px] snap-center bg-white border border-slate-200 overflow-hidden rounded-lg">
                    <div className="relative h-[10rem] overflow-hidden bg-slate-100">
                      <Image
                        src="/placeholder.svg?height=300&width=400"
                        alt="Aesthetic medical treatment"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                    <div className="p-[1.5rem]">
                      <div className="w-[2.5rem] h-[0.125rem] bg-blue-600 mb-[1rem]"></div>
                      <h3
                        className="text-[1.125rem] font-medium text-slate-800 mb-[0.75rem] leading-[1.3]"
                        style={{ fontFamily: "'Cinzel', serif" }}
                      >
                        Aesthetic Services
                      </h3>
                      <p
                        className="text-[0.875rem] text-slate-600 leading-[1.5] font-light mb-[1rem]"
                        style={{ fontFamily: "'Cinzel', serif" }}
                      >
                        Advanced cosmetic treatments performed by certified
                        professionals in a clinical setting.
                      </p>
                      <ul
                        className="text-[0.75rem] text-slate-500 space-y-[0.25rem] font-light"
                        style={{ fontFamily: "'Cinzel', serif" }}
                      >
                        <li>• Non-surgical treatments</li>
                        <li>• Skin rejuvenation</li>
                        <li>• Medical-grade skincare</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center mt-[1.5rem] gap-[0.5rem]">
                  <div className="w-[0.5rem] h-[0.5rem] rounded-full bg-blue-600 transition-all duration-300"></div>
                  <div className="w-[0.5rem] h-[0.5rem] rounded-full bg-slate-300 transition-all duration-300"></div>
                  <div className="w-[0.5rem] h-[0.5rem] rounded-full bg-slate-300 transition-all duration-300"></div>
                </div>
              </div>
            </div>
          </div>
          {/* Bottom straight divider */}
          <div className="absolute bottom-0 left-[10%] right-[10%] h-[0.0625rem] bg-slate-200"></div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-[3rem] md:py-[4rem] bg-slate-800 text-white relative overflow-hidden">
          {/* CTA Background Image */}
          <div className="absolute inset-0 z-0 opacity-[0.1]">
            <Image
              src="/placeholder.svg?height=400&width=1200"
              alt="Healthcare team"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative z-10 max-w-[75rem] mx-auto px-[1.5rem] text-center">
            <h3
              className="text-[1.5rem] md:text-[1.75rem] font-light mb-[1rem] leading-[1.3]"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Ready to Experience Exceptional Care?
            </h3>
            <p
              className="text-[1rem] md:text-[1.125rem] text-slate-300 mb-[2rem] font-light"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Contact us today to schedule your appointment or learn more about
              our services.
            </p>
            <div className="flex flex-col sm:flex-row gap-[1rem] justify-center items-center">
              <a
                href="tel:+1234567890"
                className="inline-flex items-center px-[2rem] py-[0.75rem] bg-red-600 hover:bg-red-700 text-white font-medium transition-colors duration-200 text-[1rem]"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                Call (123) 456-7890
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-[2rem] py-[0.75rem] border border-blue-400 hover:border-blue-500 text-blue-400 hover:text-blue-500 font-medium transition-colors duration-200 text-[1rem]"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                Schedule Online
              </a>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
}
