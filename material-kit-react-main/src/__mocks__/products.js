import { v4 as uuid } from 'uuid';

export const products = [
  {
    id: uuid(),
    createdAt: '27/03/2019',
    description: 'Certification au choix (AWS, Azure, Google Cloud, DevOps, Scrum, Agile, etc.)',
    media: '/static/images/products/certif.png',
    title: 'Certification',
    totalDownloads: '594 / 600'
  },
  {
    id: uuid(),
    createdAt: '31/03/2019',
    description: 'Carte cadeau parmis une selection de 1000+ enseignes',
    media: '/static/images/products/card.png',
    title: 'Carte Cadeaux',
    totalDownloads: '150 / 200'
  },
  {
    id: uuid(),
    createdAt: '03/04/2019',
    description: 'Lot d\'accessoires pour le bureau',
    media: '/static/images/products/equipement.png',
    title: 'Equipement de bureau',
    totalDownloads: '346 / 500'
  },
  {
    id: uuid(),
    createdAt: '04/04/2019',
    description: 'Ticket de cinéma à utiliser dans un cinéma de votre choix',
    media: '/static/images/products/ticket.png',
    title: 'Ticket de cinema',
    totalDownloads: '80 / 100'
  },
  {
    id: uuid(),
    createdAt: '04/04/2019',
    description: 'Bon pour un week-end pour 1 ou 2 personnes dans un hôtel de votre choix',
    media: '/static/images/products/hotel.png',
    title: 'Week-end gastronomique',
    totalDownloads: '1176 / 1500'
  },
  {
    id: uuid(),
    createdAt: '04/04/2019',
    description: 'Séance de bien-être dans un spa de votre choix (massage, soin du visage, etc.)',
    media: '/static/images/products/spa.png',
    title: 'Séance bien-être',
    totalDownloads: '835 / 1000'
  }
];
