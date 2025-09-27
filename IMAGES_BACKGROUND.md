# Images d'arrière-plan - Prestige Fleet

## Images utilisées dans le projet

### 1. Hero Slider (HeroSlider.tsx)
**Localisation :** `src/components/HeroSlider.tsx`

```javascript
const slides: HeroSlide[] = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/3881104/pexels-photo-3881104.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    // Marrakech luxury transport
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/2649403/pexels-photo-2649403.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    // Morocco landscape
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    // Desert scene
  },
];
```

### 2. Pages d'en-tête (Hero Sections)

#### About Page (`src/pages/About.tsx`)
```javascript
style={{ 
  backgroundImage: 'url(https://images.pexels.com/photos/2649403/pexels-photo-2649403.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)',
}}
```

#### Contact Page (`src/pages/Contact.tsx`)
```javascript
style={{ 
  backgroundImage: 'url(https://images.pexels.com/photos/2649403/pexels-photo-2649403.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)',
}}
```

#### Fleet Page (`src/pages/Fleet.tsx`)
```javascript
style={{ 
  backgroundImage: 'url(https://images.pexels.com/photos/3800461/pexels-photo-3800461.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)',
}}
```

#### Services Page (`src/pages/Services.tsx`)
```javascript
style={{ 
  backgroundImage: 'url(https://images.pexels.com/photos/3800461/pexels-photo-3800461.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)',
}}
```

### 3. Cartes de services (ServiceCard)

#### Home Page (`src/pages/Home.tsx`)
```javascript
const services = [
  {
    image: 'https://images.pexels.com/photos/723240/pexels-photo-723240.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    // Airport transfers
  },
  {
    image: 'https://images.pexels.com/photos/2649403/pexels-photo-2649403.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    // City tours
  },
  {
    image: 'https://images.pexels.com/photos/1547813/pexels-photo-1547813.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    // Intercity rides
  },
  {
    image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    // Desert excursions
  },
  {
    image: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    // Corporate travel
  },
  {
    image: 'https://images.pexels.com/photos/3881104/pexels-photo-3881104.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    // Custom itineraries
  },
];
```

### 4. Flotte de véhicules (FleetCarousel)

#### FleetCarousel.tsx
```javascript
const vehicles: Vehicle[] = [
  {
    id: 'vclass',
    image: 'https://images.pexels.com/photos/3800461/pexels-photo-3800461.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    // Mercedes V-Class
  },
  {
    id: 'eclass',
    image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    // Mercedes E-Class
  },
  {
    id: 'prado',
    image: 'https://images.pexels.com/photos/1805053/pexels-photo-1805053.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    // Toyota Prado
  },
  {
    id: 'sprinter',
    image: 'https://images.pexels.com/photos/3806259/pexels-photo-3806259.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    // Mercedes Sprinter
  },
];
```

#### Fleet Page - Véhicules détaillés
```javascript
const vehicles = [
  {
    image: 'https://images.pexels.com/photos/3800461/pexels-photo-3800461.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    // Mercedes V-Class
  },
  {
    image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    // Mercedes E-Class
  },
  {
    image: 'https://images.pexels.com/photos/1805053/pexels-photo-1805053.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    // Toyota Prado
  },
  {
    image: 'https://images.pexels.com/photos/3806259/pexels-photo-3806259.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    // Mercedes Sprinter
  },
];
```

### 5. Témoignages (TestimonialSlider)

#### Avatars des clients
```javascript
const testimonials = [
  {
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
    // Marie Dubois
  },
  {
    avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
    // James Wilson
  },
  {
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
    // Sofia Martinez
  },
  {
    avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
    // Ahmed Hassan
  },
  {
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
    // Emma Thompson
  },
  {
    avatar: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
    // Luigi Rossi
  },
];
```

### 6. Équipe (About Page)

#### Photos de l'équipe
```javascript
const teamMembers = [
  {
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop&crop=face',
    // Ahmed Benali - Fondateur
  },
  {
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop&crop=face',
    // Fatima Alaoui - Relations Client
  },
  {
    image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop&crop=face',
    // Mohamed Tazi - Opérations
  },
];
```

## Notes importantes

### Source des images
- **Toutes les images proviennent de Pexels** (images libres de droits)
- **Format des URLs :** `https://images.pexels.com/photos/[ID]/pexels-photo-[ID].jpeg`
- **Paramètres d'optimisation :** `?auto=compress&cs=tinysrgb&w=[WIDTH]&h=[HEIGHT]&fit=crop`

### Tailles utilisées
- **Hero backgrounds :** 1920x1080px
- **Service cards :** 600x400px
- **Fleet vehicles :** 800x600px
- **Avatars :** 150x150px ou 300x300px
- **Crop face :** Pour les portraits (`&crop=face`)

### Optimisations
- **Compression automatique :** `auto=compress`
- **Format optimisé :** `cs=tinysrgb`
- **Recadrage intelligent :** `fit=crop`
- **Responsive :** Différentes tailles selon l'usage

### Recommandations
1. **Performance :** Les images sont optimisées via Pexels CDN
2. **Responsive :** Utilisation de différentes tailles selon le contexte
3. **Fallback :** Prévoir des images de secours en cas d'indisponibilité
4. **SEO :** Attributs `alt` appropriés pour chaque image
5. **Lazy loading :** Implémenté automatiquement par les navigateurs modernes

### Images locales
- **Logo :** `public/image.png` (référencé dans le SEO schema)
- **OG Image :** `public/og-image.jpg` (pour les réseaux sociaux)