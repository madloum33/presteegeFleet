const vehicles = [
    {
      id: 'vclass',
      name: t('fleet.vclass.name'),
      passengers: t('fleet.vclass.passengers'),
      features: t('fleet.vclass.features'),
      image: '/IMG-20250823-WA0016.jpg',
      price: '150€/day',
      description: i18n.language === 'fr'
        ? 'Le Mercedes V-Class allie luxe et polyvalence. Parfait pour les familles et groupes, il offre un espace généreux et tout le confort premium Mercedes.'
        : 'The Mercedes V-Class combines luxury and versatility. Perfect for families and groups, it offers generous space and all the premium Mercedes comfort.',
      specs: [
        { icon: <Users className="h-5 w-5" />, label: '7 passengers', value: '7' },
        { icon: <Luggage className="h-5 w-5" />, label: 'Large luggage capacity', value: 'XL' },
        { icon: <Snowflake className="h-5 w-5" />, label: 'Air conditioning', value: 'Yes' },
        { icon: <Wifi className="h-5 w-5" />, label: 'WiFi', value: 'Yes' },
      ],
    },
    {
      id: 'eclass',
      name: t('fleet.eclass.name'),
      passengers: t('fleet.eclass.passengers'),
      features: t('fleet.eclass.features'),
      image: '/IMG-20250823-WA0002.jpg',
      price: '120€/day',
      description: i18n.language === 'fr'
        ? 'La Mercedes E-Class représente l\'élégance et le raffinement. Idéale pour les transferts business et les occasions spéciales.'
        : 'The Mercedes E-Class represents elegance and refinement. Ideal for business transfers and special occasions.',
      specs: [
        { icon: <Users className="h-5 w-5" />, label: '4 passengers', value: '4' },
        { icon: <Fuel className="h-5 w-5" />, label: 'Fuel efficient', value: 'Yes' },
        { icon: <Snowflake className="h-5 w-5" />, label: 'Air conditioning', value: 'Yes' },
        { icon: <Shield className="h-5 w-5" />, label: 'Safety systems', value: 'Advanced' },
      ],
    },
    {
      id: 'prado',
      name: t('fleet.prado.name'),
      passengers: t('fleet.prado.passengers'),
      features: t('fleet.prado.features'),
      image: '/IMG-20250823-WA0004.jpg',
      price: '180€/day',
      description: i18n.language === 'fr'
        ? 'Le Toyota Prado est le véhicule parfait pour les excursions dans le désert et les terrains difficiles, sans compromis sur le confort.'
        : 'The Toyota Prado is the perfect vehicle for desert excursions and difficult terrain, without compromising on comfort.',
      specs: [
        { icon: <Users className="h-5 w-5" />, label: '7 passengers', value: '7' },
        { icon: <Shield className="h-5 w-5" />, label: '4x4 capability', value: 'Yes' },
        { icon: <Snowflake className="h-5 w-5" />, label: 'Air conditioning', value: 'Yes' },
        { icon: <Luggage className="h-5 w-5" />, label: 'Cargo space', value: 'Large' },
      ],
    },
    {
      id: 'sprinter',
      name: t('fleet.sprinter.name'),
      passengers: t('fleet.sprinter.passengers'),
      features: t('fleet.sprinter.features'),
      image: '/IMG-20250823-WA0007.jpg',
      price: '200€/day',
      description: i18n.language === 'fr'
        ? 'Le Mercedes Sprinter est idéal pour les grands groupes. Transport confortable et spacieux pour jusqu\'à 16 passagers.'
        : 'The Mercedes Sprinter is ideal for large groups. Comfortable and spacious transport for up to 16 passengers.',
      specs: [
        { icon: <Users className="h-5 w-5" />, label: '16 passengers', value: '16' },
        { icon: <Snowflake className="h-5 w-5" />, label: 'Air conditioning', value: 'Yes' },
        { icon: <Wifi className="h-5 w-5" />, label: 'WiFi', value: 'Yes' },
        { icon: <Luggage className="h-5 w-5" />, label: 'Storage', value: 'Abundant' },
      ],
    },
  ];