#!/usr/bin/env node

const { PrismaClient } = require('@prisma/client');
const { ALL_SERVICES } = require('../src/types/services.js');

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
});

async function initializeServices() {
  try {
    console.log('🔄 Initializing Apollo Medical Services...');

    // Check if services already exist
    const existingServicesCount = await prisma.service.count();

    if (existingServicesCount > 0) {
      console.log(
        `✅ Services already initialized (${existingServicesCount} services found)`
      );
      return;
    }

    // Insert all default services
    let createdCount = 0;

    for (const service of ALL_SERVICES) {
      try {
        await prisma.service.create({
          data: {
            id: service.id,
            name: service.name,
            category: service.category,
            description: service.description,
            duration: service.duration,
            price: service.price || null,
            isActive: service.isActive,
            icon: service.icon || null,
          },
        });
        createdCount++;
        console.log(`  ✓ Created: ${service.name}`);
      } catch (error) {
        if (error.code === 'P2002') {
          console.log(`  ⚠ Skipped duplicate: ${service.name}`);
        } else {
          console.error(`  ❌ Error creating ${service.name}:`, error.message);
        }
      }
    }

    console.log(`🎉 Successfully initialized ${createdCount} services!`);

    // Display summary by category
    const summary = await prisma.service.groupBy({
      by: ['category'],
      _count: {
        id: true,
      },
    });

    console.log('\n📊 Services Summary:');
    summary.forEach((item) => {
      const categoryName = item.category
        .replace(/_/g, ' ')
        .toLowerCase()
        .replace(/\b\w/g, (l) => l.toUpperCase());
      console.log(`  ${categoryName}: ${item._count.id} services`);
    });
  } catch (error) {
    console.error('❌ Error initializing services:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

initializeServices();
