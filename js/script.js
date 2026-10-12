/**
 * ==========================================================================
 * KANTO STORE - CORE JAVASCRIPT APPLICATION
 * Vanilla JS: DOM Manipulation, LocalStorage State, Dynamic Filtering,
 * Cart & Wishlist Management, Checkout Simulation & Interactive Modals.
 * ==========================================================================
 */

(function () {
  'use strict';

  // --------------------------------------------------------------------------
  // 1. DATASETS (SINGLES & PRODUCTOS SELLADOS)
  // --------------------------------------------------------------------------
  const SINGLES_DATA = [
    {
      id: 'sing-01',
      name: 'Charizard ex (Especial Rara)',
      set: 'Escarlata y Púrpura - 151',
      setKey: '151',
      setNumber: '199/165',
      rarity: 'Ultra Rara',
      rarityKey: 'ultra',
      language: 'Español',
      langKey: 'es',
      condition: 'Mint',
      conditionKey: 'mint',
      price: 250,
      stock: 2,
      image: 'images/charizard-ex.svg',
      featured: true,
      description: 'Ilustración especial de Charizard ex con relieve foil completo. Estado 10/10 sin desgastes visibles.'
    },
    {
      id: 'sing-02',
      name: 'Pikachu ex (Ilustración Secreta)',
      set: 'Corona Astral',
      setKey: 'corona',
      setNumber: '238/191',
      rarity: 'Secreta',
      rarityKey: 'secret',
      language: 'Español',
      langKey: 'es',
      condition: 'Mint',
      conditionKey: 'mint',
      price: 180,
      stock: 3,
      image: 'images/pikachu-special.svg',
      featured: true,
      description: 'Carta secreta de Corona Astral en estado impecable. Centrado simétrico y bordes perfectos.'
    },
    {
      id: 'sing-03',
      name: 'Umbreon VMAX (Moonbreon Alt Art)',
      set: 'Cielos Evolutivos',
      setKey: 'cielos',
      setNumber: '215/203',
      rarity: 'Secreta',
      rarityKey: 'secret',
      language: 'Inglés',
      langKey: 'en',
      condition: 'Mint',
      conditionKey: 'mint',
      price: 320,
      stock: 1,
      image: 'images/umbreon-vmax.svg',
      featured: true,
      description: 'La carta más codiciada de la era Espada y Escudo. Textura en relieve profunda y protección en Toploader.'
    },
    {
      id: 'sing-04',
      name: 'Mewtwo VSTAR (Galarian Gallery)',
      set: 'Zenit Supremo',
      setKey: 'zenit',
      setNumber: 'GG44/GG70',
      rarity: 'Ultra Rara',
      rarityKey: 'ultra',
      language: 'Inglés',
      langKey: 'en',
      condition: 'Near Mint',
      conditionKey: 'nm',
      price: 220,
      stock: 4,
      image: 'images/mewtwo-vstar.svg',
      featured: true,
      description: 'Ilustración de combate aéreo contra Charizard. Micro-desgaste casi imperceptible en borde posterior.'
    },
    {
      id: 'sing-05',
      name: 'Blastoise ex (Ilustración Especial)',
      set: 'Escarlata y Púrpura - 151',
      setKey: '151',
      setNumber: '200/165',
      rarity: 'Ultra Rara',
      rarityKey: 'ultra',
      language: 'Español',
      langKey: 'es',
      condition: 'Near Mint',
      conditionKey: 'nm',
      price: 140,
      stock: 2,
      image: 'images/charizard-ex.svg',
      featured: false,
      description: 'Arte alternativo submarino de Blastoise ex. Estado sobresaliente evaluado físicamente por Kanto Store.'
    },
    {
      id: 'sing-06',
      name: 'Venusaur ex (Ilustración Especial)',
      set: 'Escarlata y Púrpura - 151',
      setKey: '151',
      setNumber: '198/165',
      rarity: 'Ultra Rara',
      rarityKey: 'ultra',
      language: 'Español',
      langKey: 'es',
      condition: 'Mint',
      conditionKey: 'mint',
      price: 130,
      stock: 3,
      image: 'images/charizard-ex.svg',
      featured: false,
      description: 'Foil holográfico limpio, libre de líneas de impresión o rayones. Esquinas vivas sin rebabas.'
    },
    {
      id: 'sing-07',
      name: 'Gengar VMAX (Holo Competición)',
      set: 'Golpe Fusión',
      setKey: 'fusion',
      setNumber: '157/264',
      rarity: 'Rara',
      rarityKey: 'rare',
      language: 'Español',
      langKey: 'es',
      condition: 'Played',
      conditionKey: 'played',
      price: 85,
      stock: 2,
      image: 'images/mewtwo-vstar.svg',
      featured: false,
      description: 'Desgaste visible en bordes posteriores (blanqueamiento menor). Excelente para torneos con fundas protectoras.'
    },
    {
      id: 'sing-08',
      name: 'Lugia V (Arte Alternativo)',
      set: 'Tempestad Plateada',
      setKey: 'tempestad',
      setNumber: '186/195',
      rarity: 'Ultra Rara',
      rarityKey: 'ultra',
      language: 'Inglés',
      langKey: 'en',
      condition: 'Near Mint',
      conditionKey: 'nm',
      price: 290,
      stock: 1,
      image: 'images/umbreon-vmax.svg',
      featured: false,
      description: 'Hermosa carta artística de Lugia sobrevolando mares tempestuosos. Conservación superior garantizada.'
    },
    {
      id: 'sing-09',
      name: 'Gardevoir ex',
      set: 'Escarlata y Púrpura',
      setKey: 'paldea',
      setNumber: '086/198',
      rarity: 'Rara',
      rarityKey: 'rare',
      language: 'Español',
      langKey: 'es',
      condition: 'Mint',
      conditionKey: 'mint',
      price: 65,
      stock: 5,
      image: 'images/pikachu-special.svg',
      featured: false,
      description: 'Pieza angular del metagame competitivo actual. Condición impecable de sobre a funda.'
    },
    {
      id: 'sing-10',
      name: 'Rayquaza VMAX (Alt Art Secreto)',
      set: 'Cielos Evolutivos',
      setKey: 'cielos',
      setNumber: '218/203',
      rarity: 'Secreta',
      rarityKey: 'secret',
      language: 'Inglés',
      langKey: 'en',
      condition: 'Near Mint',
      conditionKey: 'nm',
      price: 300,
      stock: 1,
      image: 'images/umbreon-vmax.svg',
      featured: false,
      description: 'Rayquaza dominando los cielos boscosos. Detalle de relieve intacto con ligera variación de centrado.'
    },
    {
      id: 'sing-11',
      name: 'e-Nigma / Iono (Ultra Rara)',
      set: 'Evoluciones en Paldea',
      setKey: 'paldea',
      setNumber: '269/193',
      rarity: 'Ultra Rara',
      rarityKey: 'ultra',
      language: 'Español',
      langKey: 'es',
      condition: 'Mint',
      conditionKey: 'mint',
      price: 190,
      stock: 2,
      image: 'images/pikachu-special.svg',
      featured: false,
      description: 'Partidario Waifu Full Art de máxima demanda. Superficie libre de arañazos y textura brillante.'
    },
    {
      id: 'sing-12',
      name: 'Arceus VSTAR',
      set: 'Astros Brillantes',
      setKey: 'astros',
      setNumber: '123/172',
      rarity: 'Rara',
      rarityKey: 'rare',
      language: 'Inglés',
      langKey: 'en',
      condition: 'Played',
      conditionKey: 'played',
      price: 75,
      stock: 3,
      image: 'images/mewtwo-vstar.svg',
      featured: false,
      description: 'Carta jugada con marcas sutiles de barajeo en bordes. 100% legal para juego competitivo con sleeves.'
    },
    {
      id: 'sing-13',
      name: 'Charmander (Ilustración Rara)',
      set: 'Escarlata y Púrpura - 151',
      setKey: '151',
      setNumber: '168/165',
      rarity: 'Poco Común',
      rarityKey: 'uncommon',
      language: 'Español',
      langKey: 'es',
      condition: 'Mint',
      conditionKey: 'mint',
      price: 95,
      stock: 4,
      image: 'images/charizard-ex.svg',
      featured: false,
      description: 'Charmander en la ladera del cañón. Parte de la icónica línea evolutiva ilustrada de 151.'
    },
    {
      id: 'sing-14',
      name: 'Squirtle (Ilustración Rara)',
      set: 'Escarlata y Púrpura - 151',
      setKey: '151',
      setNumber: '170/165',
      rarity: 'Poco Común',
      rarityKey: 'uncommon',
      language: 'Español',
      langKey: 'es',
      condition: 'Mint',
      conditionKey: 'mint',
      price: 90,
      stock: 3,
      image: 'images/charizard-ex.svg',
      featured: false,
      description: 'Squirtle paseando en la playa de arena. Hermoso foil y estado de conservación cristalino.'
    },
    {
      id: 'sing-15',
      name: 'Bulbasaur (Ilustración Rara)',
      set: 'Escarlata y Púrpura - 151',
      setKey: '151',
      setNumber: '166/165',
      rarity: 'Poco Común',
      rarityKey: 'uncommon',
      language: 'Español',
      langKey: 'es',
      condition: 'Near Mint',
      conditionKey: 'nm',
      price: 85,
      stock: 2,
      image: 'images/charizard-ex.svg',
      featured: false,
      description: 'Bulbasaur disfrutando del follaje soleado. Condición óptima para carpetas de coleccionista.'
    },
    {
      id: 'sing-16',
      name: 'Mew ex (Ultra Rara)',
      set: 'Escarlata y Púrpura - 151',
      setKey: '151',
      setNumber: '151/165',
      rarity: 'Ultra Rara',
      rarityKey: 'ultra',
      language: 'Inglés',
      langKey: 'en',
      condition: 'Near Mint',
      conditionKey: 'nm',
      price: 120,
      stock: 3,
      image: 'images/mewtwo-vstar.svg',
      featured: false,
      description: 'El mítico Mew de la colección 151 original con borde plateado moderno.'
    }
  ];

  const SEALED_DATA = [
    {
      id: 'seal-01',
      name: 'Booster Box Escarlata y Púrpura: 151',
      category: 'box',
      categoryLabel: 'Booster Box',
      price: 1250,
      stock: 6,
      image: 'images/booster-box.svg',
      description: 'Caja con 36 sobres sellados de fábrica con termorretráctil oficial de Pokéball. Garantía de sobres no pesados ni manipulados.'
    },
    {
      id: 'seal-02',
      name: 'Elite Trainer Box (ETB) Corona Astral',
      category: 'etb',
      categoryLabel: 'Elite Trainer Box',
      price: 420,
      stock: 8,
      image: 'images/etb-stellar.svg',
      description: 'Contiene 9 sobres de mejora de Corona Astral, 1 carta promocional foil con sello exclusivo, 65 fundas protectoras y dados contadores.'
    },
    {
      id: 'seal-03',
      name: 'Sobre de Mejora (Booster Pack) Destinos de Paldea',
      category: 'pack',
      categoryLabel: 'Sobre de Mejora',
      price: 45,
      stock: 45,
      image: 'images/booster-pack.svg',
      description: 'Sobre individual sellado de fábrica con 10 cartas coleccionables + 1 código para Pokémon TCG Live.'
    },
    {
      id: 'seal-04',
      name: 'Booster Box Cielos Evolutivos (Edición Coleccionista)',
      category: 'box',
      categoryLabel: 'Booster Box',
      price: 1850,
      stock: 2,
      image: 'images/booster-box.svg',
      description: 'Caja de 36 sobres sellada de la aclamada expansión de las evoluciones de Eevee y dragones. Producto de inversión premium.'
    },
    {
      id: 'seal-05',
      name: 'Mazo Temático de Combate de Liga: Miraidon ex',
      category: 'deck',
      categoryLabel: 'Mazo de Combate',
      price: 160,
      stock: 12,
      image: 'images/theme-deck.svg',
      description: 'Mazo competitivo de nivel 3 listo para jugar torneos oficiales. Incluye 60 cartas estratégicas, caja para mazo y contadores.'
    },
    {
      id: 'seal-06',
      name: 'Elite Trainer Box (ETB) Escarlata y Púrpura: 151',
      category: 'etb',
      categoryLabel: 'Elite Trainer Box',
      price: 450,
      stock: 5,
      image: 'images/etb-stellar.svg',
      description: 'Incluye carta promocional de Snorlax ilustración especial, 9 sobres de 151, fundas protectoras temáticas y accesorios de juego.'
    },
    {
      id: 'seal-07',
      name: 'Sobre de Mejora (Booster Pack) Corona Astral',
      category: 'pack',
      categoryLabel: 'Sobre de Mejora',
      price: 40,
      stock: 30,
      image: 'images/booster-pack.svg',
      description: 'Sobre oficial de 10 cartas de la expansión Corona Astral con posibilidades de Pokémon Teracristal Astral.'
    },
    {
      id: 'seal-08',
      name: 'Mazo de Combate de Liga: Gardevoir ex',
      category: 'deck',
      categoryLabel: 'Mazo de Combate',
      price: 150,
      stock: 9,
      image: 'images/theme-deck.svg',
      description: 'Baraja competitiva completa de 60 cartas centrada en la aceleración psíquica y la estrategia de control.'
    }
  ];

  // --------------------------------------------------------------------------
  // 2. ESTADO GLOBAL DE LA APLICACIÓN (LOCALSTORAGE)
  // --------------------------------------------------------------------------
  const STORAGE_KEYS = {
    CART: 'kanto_store_cart_v1',
    WISHLIST: 'kanto_store_wishlist_v1'
  };

  let cart = loadFromStorage(STORAGE_KEYS.CART, []);
  let wishlist = loadFromStorage(STORAGE_KEYS.WISHLIST, []);

  // Filtros activos para el catálogo de singles
  const activeFilters = {
    query: '',
    set: 'all',
    rarity: 'all',
    language: 'all',
    condition: 'all',
    sortBy: 'featured'
  };

  // Categoría activa para productos sellados
  let activeSealedCategory = 'all';

  // --------------------------------------------------------------------------
  // 3. ELEMENTOS DEL DOM
  // --------------------------------------------------------------------------
  const dom = {
    // Badges en cabecera
    cartCountBadge: document.getElementById('cart-count-badge'),
    wishlistCountBadge: document.getElementById('wishlist-count-badge'),

    // Botones de acción en cabecera
    cartBtn: document.getElementById('cart-toggle-btn'),
    wishlistBtn: document.getElementById('wishlist-nav-btn'),
    mobileToggle: document.getElementById('mobile-menu-btn'),
    navLinks: document.getElementById('nav-links'),

    // Secciones de productos
    featuredGrid: document.getElementById('featured-singles-grid'),
    catalogGrid: document.getElementById('catalog-singles-grid'),
    sealedGrid: document.getElementById('sealed-products-grid'),
    wishlistGrid: document.getElementById('wishlist-grid'),

    // Filtros de singles
    searchInput: document.getElementById('filter-search'),
    clearSearchBtn: document.getElementById('clear-search-btn'),
    filterSet: document.getElementById('filter-set'),
    filterRarity: document.getElementById('filter-rarity'),
    filterLang: document.getElementById('filter-lang'),
    filterCond: document.getElementById('filter-cond'),
    filterSort: document.getElementById('filter-sort'),
    resultsCount: document.getElementById('results-count'),
    activeTagsList: document.getElementById('active-tags-list'),
    resetFiltersBtn: document.getElementById('reset-filters-btn'),

    // Tabs de productos sellados
    sealedTabsContainer: document.getElementById('sealed-tabs-container'),

    // Drawer de carrito
    cartDrawerOverlay: document.getElementById('cart-drawer-overlay'),
    closeCartBtn: document.getElementById('close-cart-btn'),
    cartItemsBody: document.getElementById('cart-items-body'),
    cartSubtotal: document.getElementById('cart-subtotal'),
    cartShipping: document.getElementById('cart-shipping'),
    cartTotal: document.getElementById('cart-total'),
    shippingProgressBar: document.getElementById('shipping-bar-fill'),
    shippingProgressText: document.getElementById('shipping-status-text'),
    clearCartBtn: document.getElementById('clear-cart-btn'),
    openCheckoutBtn: document.getElementById('open-checkout-btn'),

    // Modal de Checkout
    checkoutModalBackdrop: document.getElementById('checkout-modal-backdrop'),
    closeCheckoutBtn: document.getElementById('close-checkout-btn'),
    checkoutForm: document.getElementById('checkout-form'),
    checkoutSummarySubtotal: document.getElementById('checkout-summary-subtotal'),
    checkoutSummaryTotal: document.getElementById('checkout-summary-total'),

    // Métodos de Pago en Checkout
    paymentMethods: document.querySelectorAll('.payment-method-card'),
    paymentInfoQr: document.getElementById('payment-info-qr'),
    paymentInfoBank: document.getElementById('payment-info-bank'),
    paymentInfoCod: document.getElementById('payment-info-cod'),

    // Modal de Éxito / Confirmación
    orderSuccessBackdrop: document.getElementById('order-success-backdrop'),
    closeSuccessBtn: document.getElementById('close-success-btn'),
    orderReceiptContent: document.getElementById('order-receipt-content'),
    orderCodeDisplay: document.getElementById('order-code-display'),
    whatsappShareBtn: document.getElementById('whatsapp-share-btn'),
    printReceiptBtn: document.getElementById('print-receipt-btn'),

    // Modal de Vista Rápida / Inspección
    quickviewBackdrop: document.getElementById('quickview-modal-backdrop'),
    closeQuickviewBtn: document.getElementById('close-quickview-btn'),
    quickviewContent: document.getElementById('quickview-body-content'),

    // Contenedor de Toasts
    toastContainer: document.getElementById('toast-container')
  };

  // --------------------------------------------------------------------------
  // 4. INICIALIZACIÓN
  // --------------------------------------------------------------------------
  function init() {
    updateCounters();
    renderFeaturedSingles();
    renderCatalogSingles();
    renderSealedProducts();
    renderWishlist();
    renderCart();

    setupEventListeners();
  }

  // --------------------------------------------------------------------------
  // 5. RENDERIZADO: CARTAS DESTACADAS (SINGLES)
  // --------------------------------------------------------------------------
  function renderFeaturedSingles() {
    if (!dom.featuredGrid) return;
    const featuredItems = SINGLES_DATA.filter(item => item.featured);
    dom.featuredGrid.innerHTML = featuredItems.map(item => createCardHTML(item)).join('');
  }

  // --------------------------------------------------------------------------
  // 6. RENDERIZADO & FILTROS: CATÁLOGO DE SINGLES
  // --------------------------------------------------------------------------
  function renderCatalogSingles() {
    if (!dom.catalogGrid) return;

    let filtered = SINGLES_DATA.filter(item => {
      // Búsqueda por texto (nombre o número)
      if (activeFilters.query) {
        const q = activeFilters.query.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesSet = item.set.toLowerCase().includes(q);
        const matchesNumber = item.setNumber.toLowerCase().includes(q);
        if (!matchesName && !matchesSet && !matchesNumber) return false;
      }

      // Expansión
      if (activeFilters.set !== 'all' && item.setKey !== activeFilters.set) {
        return false;
      }

      // Rareza
      if (activeFilters.rarity !== 'all' && item.rarityKey !== activeFilters.rarity) {
        return false;
      }

      // Idioma
      if (activeFilters.language !== 'all' && item.langKey !== activeFilters.language) {
        return false;
      }

      // Estado de Conservación
      if (activeFilters.condition !== 'all' && item.conditionKey !== activeFilters.condition) {
        return false;
      }

      return true;
    });

    // Ordenamiento
    if (activeFilters.sortBy === 'price-asc') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (activeFilters.sortBy === 'price-desc') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (activeFilters.sortBy === 'name-asc') {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      // Por defecto: destacados primero
      filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    // Actualizar contador
    if (dom.resultsCount) {
      dom.resultsCount.textContent = `Mostrando ${filtered.length} de ${SINGLES_DATA.length} cartas disponibles`;
    }

    // Renderizar tags activos
    renderActiveFilterTags();

    if (filtered.length === 0) {
      dom.catalogGrid.innerHTML = `
        <div class="empty-catalog-message">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            <line x1="8" y1="11" x2="14" y2="11"></line>
          </svg>
          <h3>No se encontraron cartas</h3>
          <p>Intenta ajustar los criterios de búsqueda o restablecer los filtros para ver el catálogo completo.</p>
          <button class="btn btn-secondary" id="empty-state-reset-btn">Restablecer todos los filtros</button>
        </div>
      `;
      const resetBtn = document.getElementById('empty-state-reset-btn');
      if (resetBtn) {
        resetBtn.addEventListener('click', resetAllFilters);
      }
      return;
    }

    dom.catalogGrid.innerHTML = filtered.map(item => createCardHTML(item)).join('');
  }

  function renderActiveFilterTags() {
    if (!dom.activeTagsList) return;
    const tags = [];

    if (activeFilters.query) {
      tags.push({ key: 'query', label: `Búsqueda: "${activeFilters.query}"` });
    }
    if (activeFilters.set !== 'all') {
      const opt = dom.filterSet.options[dom.filterSet.selectedIndex];
      tags.push({ key: 'set', label: `Set: ${opt.text}` });
    }
    if (activeFilters.rarity !== 'all') {
      const opt = dom.filterRarity.options[dom.filterRarity.selectedIndex];
      tags.push({ key: 'rarity', label: `Rareza: ${opt.text}` });
    }
    if (activeFilters.language !== 'all') {
      const opt = dom.filterLang.options[dom.filterLang.selectedIndex];
      tags.push({ key: 'language', label: `Idioma: ${opt.text}` });
    }
    if (activeFilters.condition !== 'all') {
      const opt = dom.filterCond.options[dom.filterCond.selectedIndex];
      tags.push({ key: 'condition', label: `Estado: ${opt.text}` });
    }

    if (tags.length === 0) {
      dom.activeTagsList.innerHTML = '<span style="color: var(--text-muted); font-size: 0.8rem;">Sin filtros aplicados</span>';
      return;
    }

    dom.activeTagsList.innerHTML = tags.map(tag => `
      <span class="filter-tag">
        ${tag.label}
        <span onclick="window.kantoStore.removeFilter('${tag.key}')" title="Eliminar filtro">&times;</span>
      </span>
    `).join('');
  }

  function resetAllFilters() {
    activeFilters.query = '';
    activeFilters.set = 'all';
    activeFilters.rarity = 'all';
    activeFilters.language = 'all';
    activeFilters.condition = 'all';
    activeFilters.sortBy = 'featured';

    if (dom.searchInput) dom.searchInput.value = '';
    if (dom.clearSearchBtn) dom.clearSearchBtn.style.display = 'none';
    if (dom.filterSet) dom.filterSet.value = 'all';
    if (dom.filterRarity) dom.filterRarity.value = 'all';
    if (dom.filterLang) dom.filterLang.value = 'all';
    if (dom.filterCond) dom.filterCond.value = 'all';
    if (dom.filterSort) dom.filterSort.value = 'featured';

    renderCatalogSingles();
    showToast('Filtros restablecidos', 'info');
  }

  // --------------------------------------------------------------------------
  // FORMATO DE MONEDA BOLIVIANA (Bs)
  // Formato: Bs 120, Bs 250, Bs 1.250
  // --------------------------------------------------------------------------
  function formatPrice(amount) {
    return `Bs ${Math.round(amount).toLocaleString('de-DE')}`;
  }

  // --------------------------------------------------------------------------
  // 7. COMPONENTE: TARJETA DE PRODUCTO (SINGLE)
  // --------------------------------------------------------------------------
  function createCardHTML(item) {
    const isWishlisted = wishlist.includes(item.id);
    const rarityClass = `badge-rarity-${item.rarityKey}`;
    const conditionClass = `badge-condition-${item.conditionKey}`;

    return `
      <article class="product-card" data-id="${item.id}">
        <div class="card-image-wrap" onclick="window.kantoStore.openQuickView('${item.id}')" title="Ver detalles y examen de condición">
          <img src="${item.image}" alt="${item.name}" loading="lazy" />
          
          <div class="card-badges">
            <span class="badge ${rarityClass}">★ ${item.rarity}</span>
            <span class="badge ${conditionClass}">${item.condition}</span>
            <span class="badge badge-language">${item.language}</span>
          </div>

          <button class="wishlist-btn-card ${isWishlisted ? 'active' : ''}" 
                  onclick="event.stopPropagation(); window.kantoStore.toggleWishlist('${item.id}')" 
                  title="${isWishlisted ? 'Quitar de Wishlist' : 'Añadir a Wishlist'}"
                  aria-label="Wishlist">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="${isWishlisted ? '#f43f5e' : 'none'}" stroke="currentColor" stroke-width="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
        </div>

        <div class="card-content">
          <div class="card-meta">
            <span>${item.setNumber}</span>
            <span>Stock: <strong>${item.stock} ud.</strong></span>
          </div>
          
          <h4 class="card-title" onclick="window.kantoStore.openQuickView('${item.id}')" style="cursor: pointer;">${item.name}</h4>
          <p class="card-set-info">${item.set}</p>

          <div class="card-footer">
            <div class="card-price-block">
              <span class="price-label">Precio Kanto</span>
              <span class="card-price">${formatPrice(item.price)}</span>
            </div>

            <button class="btn-card-add" onclick="window.kantoStore.addToCart('${item.id}', 'single')" title="Agregar al Carrito">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              <span>Agregar</span>
            </button>
          </div>
        </div>
      </article>
    `;
  }

  // --------------------------------------------------------------------------
  // 8. RENDERIZADO: PRODUCTOS SELLADOS
  // --------------------------------------------------------------------------
  function renderSealedProducts() {
    if (!dom.sealedGrid) return;

    let filtered = SEALED_DATA;
    if (activeSealedCategory !== 'all') {
      filtered = SEALED_DATA.filter(p => p.category === activeSealedCategory);
    }

    dom.sealedGrid.innerHTML = filtered.map(item => `
      <article class="sealed-card">
        <div class="sealed-img-wrap">
          <img src="${item.image}" alt="${item.name}" loading="lazy" />
        </div>
        <div class="sealed-body">
          <span class="sealed-type">${item.categoryLabel}</span>
          <h4 class="sealed-title">${item.name}</h4>
          <p class="sealed-desc">${item.description}</p>
          
          <div class="card-footer">
            <div class="card-price-block">
              <span class="price-label">Precio Sellado</span>
              <span class="card-price">${formatPrice(item.price)}</span>
            </div>

            <button class="btn-card-add" onclick="window.kantoStore.addToCart('${item.id}', 'sealed')">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              <span>Comprar</span>
            </button>
          </div>
        </div>
      </article>
    `).join('');
  }

  // --------------------------------------------------------------------------
  // 9. RENDERIZADO: LISTA DE DESEOS (WISHLIST)
  // --------------------------------------------------------------------------
  function renderWishlist() {
    if (!dom.wishlistGrid) return;

    const wishlistCards = SINGLES_DATA.filter(item => wishlist.includes(item.id));

    if (wishlistCards.length === 0) {
      dom.wishlistGrid.innerHTML = `
        <div class="empty-wishlist-box">
          <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
          <h3>Tu Wishlist está vacía</h3>
          <p>Explora el catálogo y presiona el ícono de corazón para guardar las cartas que buscas. Te notificaremos si alguna carta agotada regresa a stock.</p>
          <a href="#catalogo" class="btn btn-primary">Explorar Catálogo</a>
        </div>
      `;
      return;
    }

    dom.wishlistGrid.innerHTML = wishlistCards.map(item => `
      <article class="product-card">
        <div class="card-image-wrap" onclick="window.kantoStore.openQuickView('${item.id}')">
          <img src="${item.image}" alt="${item.name}" />
          <div class="card-badges">
            <span class="badge badge-rarity-${item.rarityKey}">★ ${item.rarity}</span>
            <span class="badge badge-condition-${item.conditionKey}">${item.condition}</span>
          </div>
          <button class="wishlist-btn-card active" onclick="event.stopPropagation(); window.kantoStore.toggleWishlist('${item.id}')" title="Quitar de Wishlist">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#f43f5e" stroke="currentColor" stroke-width="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
        </div>
        <div class="card-content">
          <div class="card-meta">
            <span>${item.setNumber}</span>
            <span style="color: var(--cond-mint); font-weight: 700;">● Stock Garantizado</span>
          </div>
          <h4 class="card-title">${item.name}</h4>
          <p class="card-set-info">${item.set}</p>
          <div class="card-footer">
            <div class="card-price-block">
              <span class="price-label">Precio</span>
              <span class="card-price">${formatPrice(item.price)}</span>
            </div>
            <button class="btn-card-add" onclick="window.kantoStore.moveWishlistToCart('${item.id}')" title="Mover al Carrito">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              <span>Al Carrito</span>
            </button>
          </div>
        </div>
      </article>
    `).join('');
  }

  // --------------------------------------------------------------------------
  // 10. GESTIÓN DEL CARRITO DE COMPRAS
  // --------------------------------------------------------------------------
  function addToCart(productId, productType = 'single') {
    let product;
    if (productType === 'single') {
      product = SINGLES_DATA.find(p => p.id === productId);
    } else {
      product = SEALED_DATA.find(p => p.id === productId);
    }

    if (!product) return;

    const existingIndex = cart.findIndex(item => item.id === productId);

    if (existingIndex > -1) {
      if (cart[existingIndex].quantity < product.stock) {
        cart[existingIndex].quantity += 1;
        showToast(`Cantidad de "${product.name}" actualizada (+1)`, 'info');
      } else {
        showToast(`Stock máximo disponible alcanzado para "${product.name}"`, 'warning');
        return;
      }
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        condition: product.condition || 'Sellado de Fábrica',
        stock: product.stock,
        quantity: 1
      });
      showToast(`¡"${product.name}" añadido al carrito!`, 'success');
    }

    saveToStorage(STORAGE_KEYS.CART, cart);
    updateCounters();
    renderCart();
  }

  function updateCartQuantity(productId, delta) {
    const item = cart.find(i => i.id === productId);
    if (!item) return;

    const newQty = item.quantity + delta;
    if (newQty <= 0) {
      removeFromCart(productId);
      return;
    }

    if (newQty > item.stock) {
      showToast(`Solo quedan ${item.stock} unidades en inventario`, 'warning');
      return;
    }

    item.quantity = newQty;
    saveToStorage(STORAGE_KEYS.CART, cart);
    updateCounters();
    renderCart();
  }

  function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveToStorage(STORAGE_KEYS.CART, cart);
    updateCounters();
    renderCart();
    showToast('Producto eliminado del carrito', 'info');
  }

  function clearCart() {
    if (cart.length === 0) return;
    cart = [];
    saveToStorage(STORAGE_KEYS.CART, cart);
    updateCounters();
    renderCart();
    showToast('Carrito vaciado con éxito', 'info');
  }

  function renderCart() {
    if (!dom.cartItemsBody) return;

    if (cart.length === 0) {
      dom.cartItemsBody.innerHTML = `
        <div class="empty-cart-state">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          <p>Tu carrito de compras está vacío.</p>
          <button class="btn btn-secondary" onclick="window.kantoStore.closeCartDrawer(); window.location.hash='#catalogo';" style="margin-top: 1rem;">
            Ver Catálogo de Singles
          </button>
        </div>
      `;
      if (dom.cartSubtotal) dom.cartSubtotal.textContent = 'Bs 0';
      if (dom.cartShipping) dom.cartShipping.textContent = 'Bs 0';
      if (dom.cartTotal) dom.cartTotal.textContent = 'Bs 0';
      if (dom.shippingProgressBar) dom.shippingProgressBar.style.width = '0%';
      if (dom.shippingProgressText) dom.shippingProgressText.textContent = 'Agrega Bs 300 más para obtener Envío Gratis con Toploader';
      return;
    }

    let subtotal = 0;

    dom.cartItemsBody.innerHTML = cart.map(item => {
      const itemSubtotal = item.price * item.quantity;
      subtotal += itemSubtotal;

      return `
        <div class="cart-item">
          <img class="cart-item-img" src="${item.image}" alt="${item.name}" />
          <div class="cart-item-details">
            <div class="cart-item-title">${item.name}</div>
            <div class="cart-item-condition">Estado: ${item.condition}</div>
            <div class="cart-item-price">${formatPrice(item.price)}</div>
            <div class="cart-item-controls">
              <button class="qty-btn" onclick="window.kantoStore.updateCartQuantity('${item.id}', -1)">-</button>
              <span class="qty-number">${item.quantity}</span>
              <button class="qty-btn" onclick="window.kantoStore.updateCartQuantity('${item.id}', 1)">+</button>
            </div>
          </div>
          <button class="cart-item-remove" onclick="window.kantoStore.removeFromCart('${item.id}')" title="Eliminar">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            </svg>
          </button>
        </div>
      `;
    }).join('');

    // Cálculo de envío gratis a partir de Bs 300
    const FREE_SHIPPING_THRESHOLD = 300;
    const shippingCost = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : (subtotal > 0 ? 25 : 0);
    const total = subtotal + shippingCost;

    if (dom.cartSubtotal) dom.cartSubtotal.textContent = formatPrice(subtotal);
    if (dom.cartShipping) {
      dom.cartShipping.textContent = shippingCost === 0 ? '¡GRATIS!' : formatPrice(shippingCost);
      dom.cartShipping.style.color = shippingCost === 0 ? 'var(--cond-mint)' : 'var(--text-secondary)';
    }
    if (dom.cartTotal) dom.cartTotal.textContent = formatPrice(total);

    // Barra de progreso de envío
    if (dom.shippingProgressBar && dom.shippingProgressText) {
      if (subtotal >= FREE_SHIPPING_THRESHOLD) {
        dom.shippingProgressBar.style.width = '100%';
        dom.shippingProgressText.innerHTML = '<strong style="color: var(--cond-mint);">¡Felicitaciones! Has desbloqueado Envío Gratis Protegido 🚚</strong>';
      } else {
        const remaining = FREE_SHIPPING_THRESHOLD - subtotal;
        const percent = Math.min(100, Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100));
        dom.shippingProgressBar.style.width = `${percent}%`;
        dom.shippingProgressText.textContent = `Agrega ${formatPrice(remaining)} más para Envío Gratis (${percent}%)`;
      }
    }
  }

  // --------------------------------------------------------------------------
  // 11. GESTIÓN DE WISHLIST
  // --------------------------------------------------------------------------
  function toggleWishlist(productId) {
    const card = SINGLES_DATA.find(p => p.id === productId);
    if (!card) return;

    const index = wishlist.indexOf(productId);
    if (index > -1) {
      wishlist.splice(index, 1);
      showToast(`"${card.name}" eliminada de tu Wishlist`, 'info');
    } else {
      wishlist.push(productId);
      showToast(`"${card.name}" guardada en Wishlist. Te avisaremos cambios de stock.`, 'heart');
    }

    saveToStorage(STORAGE_KEYS.WISHLIST, wishlist);
    updateCounters();
    renderFeaturedSingles();
    renderCatalogSingles();
    renderWishlist();
  }

  function moveWishlistToCart(productId) {
    addToCart(productId, 'single');
    toggleWishlist(productId);
  }

  function moveAllWishlistToCart() {
    if (wishlist.length === 0) return;
    wishlist.forEach(id => {
      addToCart(id, 'single');
    });
    wishlist = [];
    saveToStorage(STORAGE_KEYS.WISHLIST, wishlist);
    updateCounters();
    renderFeaturedSingles();
    renderCatalogSingles();
    renderWishlist();
    showToast('¡Todas las cartas de tu Wishlist fueron añadidas al carrito!', 'success');
  }

  // --------------------------------------------------------------------------
  // 12. CONTADORES DE NAVEGACIÓN
  // --------------------------------------------------------------------------
  function updateCounters() {
    const totalCartItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (dom.cartCountBadge) {
      dom.cartCountBadge.textContent = totalCartItems;
      dom.cartCountBadge.style.display = totalCartItems > 0 ? 'flex' : 'none';
    }

    if (dom.wishlistCountBadge) {
      dom.wishlistCountBadge.textContent = wishlist.length;
      dom.wishlistCountBadge.style.display = wishlist.length > 0 ? 'flex' : 'none';
    }
  }

  // --------------------------------------------------------------------------
  // 13. CHECKOUT & SIMULACIÓN DE PAGOS (QR, BANCO, CONTRA ENTREGA)
  // --------------------------------------------------------------------------
  function openCheckout() {
    if (cart.length === 0) {
      showToast('Tu carrito está vacío. Agrega productos para pagar.', 'warning');
      return;
    }
    closeCartDrawer();

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal >= 300 ? 0 : 25;
    const total = subtotal + shipping;

    if (dom.checkoutSummarySubtotal) dom.checkoutSummarySubtotal.textContent = formatPrice(subtotal);
    if (dom.checkoutSummaryTotal) dom.checkoutSummaryTotal.textContent = formatPrice(total);

    dom.checkoutModalBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeCheckout() {
    if (dom.checkoutModalBackdrop) {
      dom.checkoutModalBackdrop.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  function selectPaymentMethod(methodName) {
    dom.paymentMethods.forEach(card => {
      if (card.dataset.method === methodName) {
        card.classList.add('active');
      } else {
        card.classList.remove('active');
      }
    });

    if (dom.paymentInfoQr) dom.paymentInfoQr.style.display = methodName === 'qr' ? 'block' : 'none';
    if (dom.paymentInfoBank) dom.paymentInfoBank.style.display = methodName === 'transfer' ? 'block' : 'none';
    if (dom.paymentInfoCod) dom.paymentInfoCod.style.display = methodName === 'cod' ? 'block' : 'none';
  }

  function handleCheckoutSubmit(e) {
    e.preventDefault();

    if (cart.length === 0) {
      showToast('El carrito está vacío.', 'warning');
      return;
    }

    const formData = new FormData(dom.checkoutForm);
    const name = formData.get('fullName') || 'Entrenador Pokémon';
    const email = formData.get('email') || 'cliente@ejemplo.com';
    const phone = formData.get('phone') || '+51 999 888 777';
    const city = formData.get('city') || 'Lima / Región Kanto';
    const address = formData.get('address') || 'Calle Pallet #151';

    // Obtener método de pago seleccionado
    const activeMethodCard = document.querySelector('.payment-method-card.active');
    const paymentMethodKey = activeMethodCard ? activeMethodCard.dataset.method : 'qr';
    const paymentLabels = {
      qr: 'Código QR Instantáneo (Yape / Plin / Pix)',
      transfer: 'Transferencia Bancaria Directa',
      cod: 'Pago Contra Entrega (Efectivo / POS)'
    };
    const paymentMethodLabel = paymentLabels[paymentMethodKey] || 'QR';

    // Generar ID de pedido único simulado
    const orderNumber = `KS-${Math.floor(100000 + Math.random() * 900000)}`;
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal >= 300 ? 0 : 25;
    const total = subtotal + shipping;

    // Crear lista de artículos comprados para el recibo
    const itemsListHtml = cart.map(i => `
      <div style="display: flex; justify-content: space-between; margin-bottom: 0.35rem; color: var(--text-secondary);">
        <span>${i.quantity}x ${i.name} (${i.condition})</span>
        <strong style="color: var(--accent-gold);">${formatPrice(i.price * i.quantity)}</strong>
      </div>
    `).join('');

    // Actualizar contenido del modal de confirmación
    if (dom.orderCodeDisplay) dom.orderCodeDisplay.textContent = orderNumber;
    if (dom.orderReceiptContent) {
      dom.orderReceiptContent.innerHTML = `
        <div style="margin-bottom: 1rem; border-bottom: 1px solid var(--border-light); padding-bottom: 0.75rem;">
          <p><strong>Cliente:</strong> ${name}</p>
          <p><strong>Correo:</strong> ${email} | <strong>Teléfono:</strong> ${phone}</p>
          <p><strong>Dirección:</strong> ${address}, ${city}</p>
          <p><strong>Método de Pago:</strong> ${paymentMethodLabel}</p>
          <p><strong>Fecha:</strong> ${new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</p>
        </div>
        <div style="margin-bottom: 1rem;">
          <h5 style="margin-bottom: 0.5rem; font-size: 0.95rem; color: var(--text-primary);">Detalle de Cartas & Productos:</h5>
          ${itemsListHtml}
        </div>
        <div style="border-top: 1px solid var(--border-light); padding-top: 0.75rem;">
          <div style="display: flex; justify-content: space-between; color: var(--text-muted); font-size: 0.85rem;">
            <span>Subtotal:</span>
            <span>${formatPrice(subtotal)}</span>
          </div>
          <div style="display: flex; justify-content: space-between; color: var(--text-muted); font-size: 0.85rem;">
            <span>Envío Blindado (Toploader + Burbuja):</span>
            <span>${shipping === 0 ? 'GRATIS' : formatPrice(shipping)}</span>
          </div>
          <div style="display: flex; justify-content: space-between; font-size: 1.15rem; font-weight: 800; color: var(--accent-gold); margin-top: 0.5rem;">
            <span>Total Cancelado / A Cobrar:</span>
            <span>${formatPrice(total)}</span>
          </div>
        </div>
      `;
    }

    // Configurar enlace de WhatsApp
    if (dom.whatsappShareBtn) {
      const waText = encodeURIComponent(
        `¡Hola Kanto Store! Acabo de registrar mi pedido ${orderNumber} a nombre de ${name} por un total de ${formatPrice(total)} con método "${paymentMethodLabel}". Adjunto mis datos para coordinar el envío.`
      );
      dom.whatsappShareBtn.href = `https://wa.me/51999999999?text=${waText}`;
    }

    // Cerrar checkout, vaciar carrito y abrir confirmación
    closeCheckout();
    cart = [];
    saveToStorage(STORAGE_KEYS.CART, cart);
    updateCounters();
    renderCart();

    dom.orderSuccessBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
    showToast(`¡Pedido ${orderNumber} confirmado con éxito!`, 'success');
  }

  // --------------------------------------------------------------------------
  // 14. MODAL: INSPECCIÓN & VISTA RÁPIDA (QUICK VIEW)
  // --------------------------------------------------------------------------
  function openQuickView(productId) {
    const card = SINGLES_DATA.find(p => p.id === productId);
    if (!card || !dom.quickviewContent) return;

    const isWishlisted = wishlist.includes(card.id);

    dom.quickviewContent.innerHTML = `
      <div class="quickview-grid">
        <div class="quickview-img-box">
          <img src="${card.image}" alt="${card.name}" />
        </div>
        <div class="quickview-info-box">
          <div class="quickview-badges">
            <span class="badge badge-rarity-${card.rarityKey}">★ ${card.rarity}</span>
            <span class="badge badge-condition-${card.conditionKey}">${card.condition}</span>
            <span class="badge badge-language">${card.language}</span>
          </div>

          <h3 class="quickview-title">${card.name}</h3>
          <p style="color: var(--accent-blue-light); font-size: 0.9rem; margin-bottom: 0.75rem;">
            ${card.set} &bull; Colección: ${card.setNumber}
          </p>
          <div class="quickview-price">${formatPrice(card.price)}</div>

          <p style="color: var(--text-secondary); font-size: 0.92rem; line-height: 1.6; margin-bottom: 1.25rem;">
            ${card.description}
          </p>

          <div class="quickview-specs">
            <div><span>Centrado Frontal</span><strong>50/50 Impecable</strong></div>
            <div><span>Bordes & Esquinas</span><strong>Sin rebabas blancas</strong></div>
            <div><span>Superficie Foil</span><strong>Sin micro-rayones</strong></div>
            <div><span>Embalaje Kanto</span><strong>Toploader Blindado</strong></div>
          </div>

          <div style="display: flex; gap: 0.75rem;">
            <button class="btn btn-primary" style="flex-grow: 1;" onclick="window.kantoStore.addToCart('${card.id}', 'single'); window.kantoStore.closeQuickView();">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              Agregar al Carrito
            </button>
            <button class="btn btn-secondary" onclick="window.kantoStore.toggleWishlist('${card.id}'); window.kantoStore.closeQuickView();">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="${isWishlisted ? '#f43f5e' : 'none'}" stroke="currentColor" stroke-width="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    `;

    dom.quickviewBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeQuickView() {
    if (dom.quickviewBackdrop) {
      dom.quickviewBackdrop.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  // --------------------------------------------------------------------------
  // 15. TOAST NOTIFICATIONS HELPER
  // --------------------------------------------------------------------------
  function showToast(message, type = 'info') {
    if (!dom.toastContainer) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;

    let iconSvg = '';
    if (type === 'success') {
      iconSvg = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>';
    } else if (type === 'heart') {
      iconSvg = '<svg width="18" height="18" viewBox="0 0 24 24" fill="#f43f5e" stroke="#f43f5e" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>';
    } else if (type === 'warning') {
      iconSvg = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>';
    } else {
      iconSvg = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>';
    }

    toast.innerHTML = `${iconSvg}<span>${message}</span>`;
    dom.toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(80px)';
      setTimeout(() => toast.remove(), 400);
    }, 3200);
  }

  // --------------------------------------------------------------------------
  // 16. HELPERS: LOCAL STORAGE & UTILIDADES
  // --------------------------------------------------------------------------
  function loadFromStorage(key, fallback) {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : fallback;
    } catch (e) {
      console.warn('LocalStorage no disponible, usando memoria volatil.', e);
      return fallback;
    }
  }

  function saveToStorage(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.warn('Error guardando en LocalStorage', e);
    }
  }

  function copyToClipboard(text, successMessage = 'Copiado al portapapeles') {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        showToast(successMessage, 'success');
      }).catch(() => {
        showToast('Error al copiar', 'warning');
      });
    } else {
      showToast(successMessage, 'success');
    }
  }

  function openCartDrawer() {
    if (dom.cartDrawerOverlay) {
      dom.cartDrawerOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeCartDrawer() {
    if (dom.cartDrawerOverlay) {
      dom.cartDrawerOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  // --------------------------------------------------------------------------
  // 17. EVENT LISTENERS
  // --------------------------------------------------------------------------
  function setupEventListeners() {
    // Drawer del carrito
    if (dom.cartBtn) dom.cartBtn.addEventListener('click', openCartDrawer);
    if (dom.closeCartBtn) dom.closeCartBtn.addEventListener('click', closeCartDrawer);
    if (dom.cartDrawerOverlay) {
      dom.cartDrawerOverlay.addEventListener('click', (e) => {
        if (e.target === dom.cartDrawerOverlay) closeCartDrawer();
      });
    }
    if (dom.clearCartBtn) dom.clearCartBtn.addEventListener('click', clearCart);
    if (dom.openCheckoutBtn) dom.openCheckoutBtn.addEventListener('click', openCheckout);

    // Modal de Checkout
    if (dom.closeCheckoutBtn) dom.closeCheckoutBtn.addEventListener('click', closeCheckout);
    if (dom.checkoutModalBackdrop) {
      dom.checkoutModalBackdrop.addEventListener('click', (e) => {
        if (e.target === dom.checkoutModalBackdrop) closeCheckout();
      });
    }
    if (dom.checkoutForm) dom.checkoutForm.addEventListener('submit', handleCheckoutSubmit);

    // Toggle Invitado / Cliente Registrado
    const checkoutToggleBtns = document.querySelectorAll('.checkout-type-btn');
    checkoutToggleBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        checkoutToggleBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        showToast(`Modo seleccionado: ${btn.textContent}`, 'info');
      });
    });

    // Métodos de pago en Checkout
    dom.paymentMethods.forEach(card => {
      card.addEventListener('click', () => {
        selectPaymentMethod(card.dataset.method);
      });
    });

    // Modal de Éxito
    if (dom.closeSuccessBtn) {
      dom.closeSuccessBtn.addEventListener('click', () => {
        dom.orderSuccessBackdrop.classList.remove('active');
        document.body.style.overflow = '';
      });
    }
    if (dom.printReceiptBtn) {
      dom.printReceiptBtn.addEventListener('click', () => {
        window.print();
      });
    }

    // Modal de Quick View
    if (dom.closeQuickviewBtn) dom.closeQuickviewBtn.addEventListener('click', closeQuickView);
    if (dom.quickviewBackdrop) {
      dom.quickviewBackdrop.addEventListener('click', (e) => {
        if (e.target === dom.quickviewBackdrop) closeQuickView();
      });
    }

    // Filtros de Singles
    if (dom.searchInput) {
      dom.searchInput.addEventListener('input', (e) => {
        activeFilters.query = e.target.value.trim();
        if (dom.clearSearchBtn) {
          dom.clearSearchBtn.style.display = activeFilters.query ? 'block' : 'none';
        }
        renderCatalogSingles();
      });
    }

    if (dom.clearSearchBtn) {
      dom.clearSearchBtn.addEventListener('click', () => {
        dom.searchInput.value = '';
        activeFilters.query = '';
        dom.clearSearchBtn.style.display = 'none';
        renderCatalogSingles();
      });
    }

    if (dom.filterSet) {
      dom.filterSet.addEventListener('change', (e) => {
        activeFilters.set = e.target.value;
        renderCatalogSingles();
      });
    }

    if (dom.filterRarity) {
      dom.filterRarity.addEventListener('change', (e) => {
        activeFilters.rarity = e.target.value;
        renderCatalogSingles();
      });
    }

    if (dom.filterLang) {
      dom.filterLang.addEventListener('change', (e) => {
        activeFilters.language = e.target.value;
        renderCatalogSingles();
      });
    }

    if (dom.filterCond) {
      dom.filterCond.addEventListener('change', (e) => {
        activeFilters.condition = e.target.value;
        renderCatalogSingles();
      });
    }

    if (dom.filterSort) {
      dom.filterSort.addEventListener('change', (e) => {
        activeFilters.sortBy = e.target.value;
        renderCatalogSingles();
      });
    }

    if (dom.resetFiltersBtn) {
      dom.resetFiltersBtn.addEventListener('click', resetAllFilters);
    }

    // Tabs de Productos Sellados
    if (dom.sealedTabsContainer) {
      const tabs = dom.sealedTabsContainer.querySelectorAll('.sealed-tab-btn');
      tabs.forEach(tab => {
        tab.addEventListener('click', () => {
          tabs.forEach(t => t.classList.remove('active'));
          tab.classList.add('active');
          activeSealedCategory = tab.dataset.category;
          renderSealedProducts();
        });
      });
    }

    // Menú hamburguesa móvil
    if (dom.mobileToggle && dom.navLinks) {
      dom.mobileToggle.addEventListener('click', () => {
        dom.navLinks.classList.toggle('mobile-open');
      });

      // Cerrar menú al hacer clic en un enlace
      dom.navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          dom.navLinks.classList.remove('mobile-open');
        });
      });
    }

    // Botón de wishlist en navbar hace scroll a la sección
    if (dom.wishlistBtn) {
      dom.wishlistBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const wishlistSec = document.getElementById('wishlist');
        if (wishlistSec) {
          wishlistSec.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }

    // Tecla Escape cierra todos los modales abiertos
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeCartDrawer();
        closeCheckout();
        closeQuickView();
        if (dom.orderSuccessBackdrop) {
          dom.orderSuccessBackdrop.classList.remove('active');
          document.body.style.overflow = '';
        }
      }
    });
  }

  // --------------------------------------------------------------------------
  // 18. API GLOBAL EXPUESTA (WINDOW.KANTOSTORE)
  // --------------------------------------------------------------------------
  window.kantoStore = {
    addToCart,
    removeFromCart,
    updateCartQuantity,
    clearCart,
    toggleWishlist,
    moveWishlistToCart,
    moveAllWishlistToCart,
    openQuickView,
    closeQuickView,
    openCartDrawer,
    closeCartDrawer,
    openCheckout,
    closeCheckout,
    selectPaymentMethod,
    copyToClipboard,
    removeFilter: function (filterKey) {
      if (filterKey === 'query') {
        activeFilters.query = '';
        if (dom.searchInput) dom.searchInput.value = '';
        if (dom.clearSearchBtn) dom.clearSearchBtn.style.display = 'none';
      } else if (filterKey === 'set') {
        activeFilters.set = 'all';
        if (dom.filterSet) dom.filterSet.value = 'all';
      } else if (filterKey === 'rarity') {
        activeFilters.rarity = 'all';
        if (dom.filterRarity) dom.filterRarity.value = 'all';
      } else if (filterKey === 'language') {
        activeFilters.language = 'all';
        if (dom.filterLang) dom.filterLang.value = 'all';
      } else if (filterKey === 'condition') {
        activeFilters.condition = 'all';
        if (dom.filterCond) dom.filterCond.value = 'all';
      }
      renderCatalogSingles();
    }
  };

  // Ejecutar inicialización al cargar el DOM
  document.addEventListener('DOMContentLoaded', init);
})();
