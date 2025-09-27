# Images d'arrière-plan - Prestige Fleet

## Images locales utilisées dans le projet

### Images disponibles dans `/public/`
- `IMG-20250823-WA0002.jpg` - Mercedes avec coucher de soleil
- `IMG-20250823-WA0004.jpg` - Jeep Grand Cherokee dans paysage marocain  
- `IMG-20250823-WA0005.jpg` - Convoi de véhicules sur route de montagne
- `IMG-20250823-WA0007.jpg` - Jeep dans palmeraie
- `IMG-20250823-WA0016.jpg` - Mercedes V-Class dans cadre luxueux

## Utilisation des images dans le projet

### 1. Hero Slider (HeroSlider.tsx)
**Localisation :** `src/components/HeroSlider.tsx`

```javascript
const slides: HeroSlide[] = [
  {
    id: 1,
    image: '/IMG-20250823-WA0002.jpg', // Mercedes coucher de soleil
  },
  {
    id: 2,
    image: '/IMG-20250823-WA0005.jpg', // Convoi montagne
  },
  {
    id: 3,
    image: '/IMG-20250823-WA0007.jpg', // Jeep palmeraie
  },
];
```

### 2. Pages d'en-tête (Hero Sections)

#### About Page (`src/pages/About.tsx`)
```javascript
backgroundImage: 'url(/IMG-20250823-WA0005.jpg)' // Convoi montagne
```

#### Contact Page (`src/pages/Contact.tsx`)
```javascript
backgroundImage: 'url(/IMG-20250823-WA0005.jpg)' // Convoi montagne
```

#### Fleet Page (`src/pages/Fleet.tsx`)
```javascript
backgroundImage: 'url(/IMG-20250823-WA0016.jpg)' // Mercedes V-Class luxe
```

#### Services Page (`src/pages/Services.tsx`)
```javascript
backgroundImage: 'url(/IMG-20250823-WA0016.jpg)' // Mercedes V-Class luxe
```

### 3. Cartes de services

#### Home Page & Services Page
```javascript
const services = [
  {
    // Transferts aéroport
    image: '/IMG-20250823-WA0016.jpg', // Mercedes V-Class
  },
  {
    // Tours de ville
    image: '/IMG-20250823-WA0005.jpg', // Convoi montagne
  },
  {
    // Trajets inter-villes
    image: '/IMG-20250823-WA0007.jpg', // Jeep palmeraie
  },
  {
    // Excursions désert
    image: '/IMG-20250823-WA0004.jpg', // Jeep Grand Cherokee
  },
  {
    // Transport corporate
    image: '/IMG-20250823-WA0002.jpg', // Mercedes coucher de soleil
  },
  {
    // Circuits sur mesure
    image: '/IMG-20250823-WA0005.jpg', // Convoi montagne
  },
];
```

### 4. Flotte de véhicules

#### FleetCarousel.tsx & Fleet Page
```javascript
const vehicles = [
  {
    id: 'vclass',
    name: 'Mercedes V-Class',
    image: '/IMG-20250823-WA0016.jpg', // Mercedes V-Class luxe
  },
  {
    id: 'eclass', 
    name: 'Mercedes E-Class',
    image: '/IMG-20250823-WA0002.jpg', // Mercedes coucher de soleil
  },
  {
    id: 'prado',
    name: 'Toyota Prado', 
    image: '/IMG-20250823-WA0004.jpg', // Jeep Grand Cherokee
  },
  {
    id: 'sprinter',
    name: 'Mercedes Sprinter',
    image: '/IMG-20250823-WA0007.jpg', // Jeep palmeraie
  },
];
```

## Description des images

### IMG-20250823-WA0002.jpg
- **Véhicule :** Mercedes avec logo visible
- **Cadre :** Coucher de soleil doré, paysage rural
- **Usage :** Hero slider, Mercedes E-Class, transport corporate
- **Ambiance :** Luxe, élégance, fin de journée

### IMG-20250823-WA0004.jpg  
- **Véhicule :** Jeep Grand Cherokee bleu
- **Cadre :** Palmiers, ciel bleu, végétation tropicale
- **Usage :** Excursions désert, Toyota Prado
- **Ambiance :** Aventure, nature, 4x4

### IMG-20250823-WA0005.jpg
- **Véhicules :** Convoi de plusieurs 4x4
- **Cadre :** Route de montagne, paysage rocheux
- **Usage :** Hero slider, tours de ville, circuits sur mesure
- **Ambiance :** Groupe, voyage, découverte

### IMG-20250823-WA0007.jpg
- **Véhicule :** Jeep noire vue arrière
- **Cadre :** Palmeraie dense, ciel bleu
- **Usage :** Hero slider, trajets inter-villes, Mercedes Sprinter
- **Ambiance :** Oasis, fraîcheur, nature

### IMG-20250823-WA0016.jpg
- **Véhicule :** Mercedes V-Class noire
- **Cadre :** Cadre luxueux avec palmiers, pelouse
- **Usage :** Fleet page hero, transferts aéroport, Mercedes V-Class
- **Ambiance :** Prestige, confort, service premium

## Avantages des images locales

### Authenticité
- **Véhicules réels** de la flotte Prestige Fleet
- **Paysages marocains** authentiques
- **Plaques d'immatriculation** marocaines visibles
- **Cohérence visuelle** avec l'identité de l'entreprise

### Performance
- **Hébergement local** = chargement plus rapide
- **Pas de dépendance** aux CDN externes
- **Contrôle total** sur la disponibilité des images
- **Optimisation possible** selon les besoins

### SEO et Marketing
- **Images originales** = meilleur référencement
- **Crédibilité renforcée** auprès des clients
- **Différenciation** par rapport à la concurrence
- **Storytelling authentique** de l'entreprise

## Recommandations techniques

### Optimisation
1. **Compression** : Réduire la taille des fichiers sans perte de qualité
2. **Formats modernes** : Considérer WebP pour de meilleures performances
3. **Responsive** : Créer plusieurs tailles pour différents écrans
4. **Lazy loading** : Chargement différé pour améliorer les performances

### Accessibilité
1. **Attributs alt** : Descriptions précises pour chaque image
2. **Contraste** : Vérifier la lisibilité du texte sur les images
3. **Fallbacks** : Images de secours en cas de problème de chargement

### Maintenance
1. **Sauvegarde** : Conserver les originaux haute résolution
2. **Versioning** : Système de nommage cohérent pour les mises à jour
3. **Documentation** : Tenir à jour la liste des images utilisées