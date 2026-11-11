(function () {
  'use strict';

  var CATS = [
    { id: 'zerkala', name: 'Зеркала', sub: 'Заготовки с акриловым зеркалом', img: 'img/mirror-1.webp' },
    { id: 'panno', name: 'Панно и рамки', sub: 'Для росписи, фото и картин', img: 'img/panno-1.webp' },
    { id: 'mini', name: 'Мини-наличники', sub: 'Ёлочные игрушки и миниатюры', img: 'img/mini-2.webp' },
    { id: 'dekor', name: 'Декор и подарки', sub: 'Вазы, подставки, мозаика', img: 'img/vase-1.webp' },
    { id: 'chasy', name: 'Заготовки для часов', sub: 'Ажурный циферблат 35 см', img: 'img/clock-1.webp' }
  ];

  // Каждый товар объединяет похожие позиции старого каталога в одну карточку с выбором варианта
  var PRODUCTS = [
    {
      id: 'mirror', cat: 'zerkala', pop: 2, tag: 'Хит',
      name: 'Зеркало-заготовка «Русский наличник»',
      meta: '51×34 см, акриловое зеркало в комплекте',
      imgs: ['img/mirror-1.webp', 'img/mirror-2.webp'],
      opts: [{ key: 'model', label: 'Модель', values: [
        { v: '№1, зеркало 17×30 см', p: 1150, o: 2000 },
        { v: '№2, зеркало 20×30 см', p: 1150, o: 2000 },
        { v: '№3, зеркало 20×30 см', p: 1250, o: 2000 }
      ] }],
      mp: 'На Wildberries такое зеркало стоит от 1 966 ₽',
      lead: 'Резная рама из многослойной фанеры и акриловое зеркало. Распишите раму в любимых цветах, и получится зеркало для прихожей или подарок, которого нет ни у кого.',
      specs: [['Размер наличника', '51×34 см'], ['Зеркало', 'акриловое, 20×30 или 17×30 см'], ['Материал', 'берёзовая фанера 3 мм, несколько слоёв'], ['Подходит для', 'росписи акрилом, декупажа, морилки']]
    },
    {
      id: 'panno20', cat: 'panno', pop: 3,
      name: 'Панно-наличник «Русское окошко», поле 20×30 см',
      meta: '51×34 см, 3 слоя фанеры',
      imgs: ['img/panno-1.webp', 'img/panno-2.webp'],
      opts: [{ key: 'model', label: 'Модель', values: [
        { v: '№1', p: 1000, o: 2000 }, { v: '№2', p: 1000, o: 1500 }, { v: '№3', p: 1000, o: 2000 },
        { v: '№5', p: 1000, o: 2000 }, { v: '№6', p: 1000, o: 2000 }, { v: 'Резная рамка №7', p: 1000, o: 2000 }
      ] }],
      mp: 'На Wildberries такое панно стоит 1 875 ₽',
      lead: 'Основа для картины в раме-наличнике. Напишите внутри пейзаж, вставьте холст или фотографию и распишите резьбу.',
      specs: [['Размер панно', '51×34 см'], ['Внутреннее поле', '20×30 см'], ['Материал', 'берёзовая фанера 3 мм, 3 слоя'], ['Подходит для', 'росписи, декупажа, фото и картин']]
    },
    {
      id: 'artboard', cat: 'panno', pop: 1, tag: 'Хит',
      name: 'Артборд-панно «Ажурный наличник»',
      meta: 'высота 55 см, поле 20×30 см',
      imgs: ['img/artboard-1.webp', 'img/artboard-2.webp'],
      opts: [],
      price: { p: 1000, o: 2000 },
      mp: 'На Wildberries этот артборд стоит 1 875 ₽',
      lead: 'Самый нарядный наличник в каталоге: ажурные «уши» по бокам и резной верх. В комплекте прозрачное окошко из ПЭТ под картину или фото.',
      specs: [['Высота панно', '55 см'], ['Внутреннее поле', '20×30 см'], ['В комплекте', 'окошко из ПЭТ 20×30 см'], ['Материал', 'берёзовая фанера 3 мм']]
    },
    {
      id: 'frame15', cat: 'panno', pop: 6,
      name: 'Рамка-наличник, поле 15×20 см',
      meta: 'настольная, 3 слоя фанеры',
      imgs: ['img/frame15-1.webp', 'img/frame15-2.webp'],
      opts: [{ key: 'model', label: 'Модель', values: [
        { v: '№1', p: 500, o: 1000 }, { v: '№2', p: 500, o: 1000 }, { v: '№3', p: 500, o: 1000 }, { v: '№4', p: 500, o: 1000 },
        { v: '№5', p: 500, o: 1000 }, { v: '№6', p: 500, o: 1000 }, { v: '№7', p: 500, o: 1000 }
      ] }],
      lead: 'Рамка для фото 15×20 или небольшой картины. Стоит на столе или вешается на стену.',
      specs: [['Внутреннее окно', '15×20 см'], ['Размер', 'от 34×25 до 46×26 см, зависит от модели'], ['Материал', 'берёзовая фанера 3 мм, 3 слоя']]
    },
    {
      id: 'set2', cat: 'panno', pop: 9,
      name: 'Набор из 2 рамок-наличников, поле 15×20 см',
      meta: '2 штуки в наборе',
      imgs: ['img/set2-1.webp', 'img/set2-2.webp'],
      opts: [{ key: 'model', label: 'Набор', values: [
        { v: '№3 + №3', p: 910, o: 1100 }, { v: '№4 + №4', p: 910, o: 1150 },
        { v: '№5 + №4', p: 910, o: 1150 }, { v: '№7 + №4', p: 910, o: 1150 }
      ] }],
      lead: 'Две рамки под фото или картины 15×20 см. Удобно для парной композиции на стене или для мастер-класса вдвоём.',
      specs: [['Внутреннее окно', '15×20 см'], ['Количество', '2 рамки'], ['Материал', 'берёзовая фанера 3 мм']]
    },
    {
      id: 'photo10', cat: 'panno', pop: 5,
      name: 'Наличник под фото 10×15 см',
      meta: 'высота около 24 см',
      imgs: ['img/photo10-1.webp', 'img/photo10-2.webp'],
      opts: [{ key: 'model', label: 'Модель', values: [
        { v: '№1', p: 350, o: 500 }, { v: '№2', p: 350, o: 500 }, { v: '№3', p: 350, o: 1000 }, { v: '№4', p: 350, o: 800 },
        { v: '№5', p: 350, o: 500 }, { v: '№6', p: 350, o: 1000 }, { v: '№7', p: 350, o: 500 }
      ] }],
      mp: 'На Wildberries такая рамка стоит 671 ₽',
      lead: 'Маленькая настольная рамка для фотографии 10×15. Можно оставить натуральной или расписать.',
      specs: [['Под фото', '10×15 см'], ['Высота', 'около 24 см'], ['Материал', 'берёзовая фанера 3 мм, 3 слоя']]
    },
    {
      id: 'mini', cat: 'mini', pop: 4, tag: 'К Новому году', tagGreen: true,
      name: 'Мини-наличник 11 см',
      meta: 'для ёлочных игрушек, магнитов, миниатюр',
      imgs: ['img/mini-1.webp', 'img/mini-2.webp'],
      opts: [
        { key: 'model', label: 'Модель', values: [{ v: '№1' }, { v: '№2' }, { v: '№3' }] },
        { key: 'look', label: 'Исполнение', values: [{ v: 'с рамкой' }, { v: 'с окном' }, { v: 'без окна и рамки' }] },
        { key: 'hang', label: 'Петелька', values: [{ v: 'с подвесом' }, { v: 'без подвеса' }] },
        { key: 'qty', label: 'Количество', values: [{ v: '1 шт.', p: 80, o: 150 }, { v: '3 шт.', p: 225, o: 300 }, { v: '5 шт.', p: 350, o: 500, only: { look: 'с рамкой' } }] }
      ],
      mp: 'На Ozon один такой наличник стоит 247 ₽',
      lead: 'Маленький резной наличник высотой 11 см. С петелькой это готовая основа для ёлочной игрушки, без неё для магнита или миниатюрной картины.',
      specs: [['Высота', '11 см'], ['Материал', 'фанера 3 мм'], ['Подходит для', 'ёлочных игрушек, магнитов, миниатюр'], ['Наборы', '1, 3 или 5 штук']]
    },
    {
      id: 'stand', cat: 'dekor', pop: 7,
      name: 'Подставка для телефона, заготовка',
      meta: 'для росписи и мастер-классов',
      imgs: ['img/stand-1.webp', 'img/stand-2.webp'],
      opts: [{ key: 'qty', label: 'Количество', values: [{ v: '3 шт.', p: 210 }, { v: '5 шт.', p: 325 }, { v: '10 шт.', p: 600 }] }],
      mp: 'На Ozon набор из 10 штук стоит 892 ₽',
      lead: 'Простая подставка под телефон, которую легко расписать. Наборы по 5 и 10 штук удобно брать на детский мастер-класс.',
      specs: [['Размер', '11×11×8 см'], ['Материал', 'берёзовая фанера'], ['Наборы', '3, 5 или 10 штук']]
    },
    {
      id: 'vase', cat: 'dekor', pop: 8,
      name: 'Ваза для одного цветка с бирдекелем',
      meta: 'высота 21 см, готовый подарок',
      imgs: ['img/vase-1.webp', 'img/vase-2.webp'],
      opts: [{ key: 'model', label: 'Цвет платья', values: [{ v: 'Изумрудный', p: 400 }, { v: 'Серебристый', p: 400 }, { v: 'Чёрный, без бирдекеля', p: 350 }] }],
      mp: 'На Wildberries такая ваза стоит от 579 ₽',
      lead: 'Силуэт девушки с колбой для одного цветка и подставка под кружку в комплекте. Готовый подарок на 8 Марта, день рождения или просто так.',
      specs: [['Высота', '21 см'], ['В комплекте', 'ваза, колба для цветка, бирдекель'], ['Материал', 'фанера 3 мм']]
    },
    {
      id: 'mosaic', cat: 'dekor', pop: 10,
      name: 'Ажурная мозаика 10×10 см, 10 штук',
      meta: 'плитки для стен, шкатулок и подставок',
      imgs: ['img/mosaic-1.webp'],
      opts: [], price: { p: 500 },
      lead: 'Десять резных квадратов 10×10 см. Из них собирают панно на стену, украшают шкатулки или используют как подставки под горячее.',
      specs: [['Размер плитки', '10×10 см'], ['Количество', '10 штук'], ['Материал', 'фанера 3 мм']]
    },
    {
      id: 'clock', cat: 'chasy', pop: 11,
      name: 'Заготовка для часов «Ажур», 35 см',
      meta: '2 слоя фанеры, накладка под механизм',
      imgs: ['img/clock-1.webp', 'img/clock-2.webp'],
      opts: [{ key: 'model', label: 'Узор', values: [{ v: '№1', p: 700, o: 1000 }, { v: '№2', p: 700, o: 1000 }, { v: '№3', p: 700, o: 1000 }] }],
      lead: 'Ажурный циферблат диаметром 35 см. Распишите, залейте смолой или выложите стразами, вставьте часовой механизм, и часы готовы.',
      specs: [['Диаметр', '35 см'], ['Материал', 'фанера 3 мм, 2 слоя'], ['В комплекте', 'накладка из ХДФ под часовой механизм'], ['Механизм', 'не входит, подходит стандартный']]
    }
  ];

  // ---------- helpers ----------
  function $(s, r) { return (r || document).querySelector(s); }
  function $all(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function rub(n) { return n.toLocaleString('ru-RU').replace(/ /g, ' ') + ' ₽'; }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function byId(id) { for (var i = 0; i < PRODUCTS.length; i++) if (PRODUCTS[i].id === id) return PRODUCTS[i]; return null; }
  function catById(id) { for (var i = 0; i < CATS.length; i++) if (CATS[i].id === id) return CATS[i]; return null; }

  function priceOf(p, sel) {
    if (p.price) return p.price;
    var res = null;
    p.opts.forEach(function (o) { o.values.forEach(function (v) { if (v.p != null && sel[o.key] === v.v) res = { p: v.p, o: v.o }; }); });
    return res || minPrice(p);
  }
  function minPrice(p) {
    if (p.price) return p.price;
    var best = null;
    p.opts.forEach(function (o) { o.values.forEach(function (v) { if (v.p != null && (!best || v.p < best.p)) best = { p: v.p, o: v.o }; }); });
    return best;
  }
  function hasRange(p) {
    if (p.price) return false;
    var set = {};
    p.opts.forEach(function (o) { o.values.forEach(function (v) { if (v.p != null) set[v.p] = 1; }); });
    return Object.keys(set).length > 1;
  }
  function defaultSel(p) {
    var s = {};
    p.opts.forEach(function (o) { s[o.key] = o.values[0].v; });
    return s;
  }
  function selLabel(p, sel) {
    return p.opts.map(function (o) { return sel[o.key]; }).join(', ');
  }

  var ICON_PLUS = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>';
  var ICON_ARROW = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';

  // ---------- cart ----------
  var cart = [];
  try { cart = JSON.parse(localStorage.getItem('artrezka-cart') || '[]') || []; } catch (e) { cart = []; }
  function saveCart() { try { localStorage.setItem('artrezka-cart', JSON.stringify(cart)); } catch (e) {} }
  function cartCount() { return cart.reduce(function (a, i) { return a + i.q; }, 0); }
  function cartSum() { return cart.reduce(function (a, i) { return a + i.q * i.p; }, 0); }

  function addToCart(p, sel, q) {
    var label = selLabel(p, sel);
    var pr = priceOf(p, sel);
    var key = p.id + '|' + label;
    var ex = null;
    cart.forEach(function (i) { if (i.key === key) ex = i; });
    if (ex) ex.q += q; else cart.push({ key: key, id: p.id, label: label, p: pr.p, q: q });
    saveCart(); renderCartBadge(); renderCart();
    toast('Добавлено в корзину: ' + p.name);
  }

  function renderCartBadge() {
    var n = cartCount();
    $all('[data-cart-count]').forEach(function (b) { b.textContent = n; b.hidden = n === 0; });
  }

  function shipBlock() {
    return '<p style="font-size:14px;color:#7A6150">Доставка в пункт Ozon от 100 ₽, точную цену покажем при оформлении</p>';
  }

  function renderCart() {
    var body = $('[data-cart-body]'), foot = $('[data-cart-foot]');
    if (!cart.length) {
      body.innerHTML = '<div class="empty"><b>Корзина пока пустая</b>Загляните в каталог: там наличники, зеркала и ёлочные игрушки.</div>';
      foot.innerHTML = '<a class="btn btn-block" href="#catalog" data-cart-close>Перейти в каталог</a>';
      return;
    }
    body.innerHTML = cart.map(function (i, idx) {
      var p = byId(i.id);
      return '<div class="citem"><img src="' + p.imgs[0] + '" alt=""><div><b>' + esc(p.name) + '</b>' +
        (i.label ? '<span>' + esc(i.label) + '</span>' : '') +
        '<div class="qty" style="margin-top:8px;width:max-content"><button type="button" data-dec="' + idx + '" aria-label="Меньше">−</button><span>' + i.q + '</span><button type="button" data-inc="' + idx + '" aria-label="Больше">+</button></div></div>' +
        '<div class="citem-right"><b>' + rub(i.p * i.q) + '</b><button class="remove" type="button" data-rm="' + idx + '">Удалить</button></div></div>';
    }).join('');
    var sum = cartSum();
    foot.innerHTML = shipBlock() +
      '<div class="row total"><span>Товары на сумму</span><span>' + rub(sum) + '</span></div>' +
      '<a class="btn btn-block" href="#checkout" data-cart-close>Оформить заказ</a>';
  }

  function openCart() { renderCart(); $('[data-drawer]').classList.add('open'); $('[data-drawer]').setAttribute('aria-hidden', 'false'); }
  function closeCart() { $('[data-drawer]').classList.remove('open'); $('[data-drawer]').setAttribute('aria-hidden', 'true'); }

  document.addEventListener('click', function (e) {
    var t = e.target.closest('[data-cart-open]'); if (t) { openCart(); return; }
    t = e.target.closest('[data-cart-close]'); if (t) { closeCart(); }
    t = e.target.closest('[data-inc]'); if (t) { cart[+t.dataset.inc].q++; saveCart(); renderCart(); renderCartBadge(); renderSummary(); return; }
    t = e.target.closest('[data-dec]'); if (t) { var i = cart[+t.dataset.dec]; i.q--; if (i.q < 1) cart.splice(+t.dataset.dec, 1); saveCart(); renderCart(); renderCartBadge(); renderSummary(); return; }
    t = e.target.closest('[data-rm]'); if (t) { cart.splice(+t.dataset.rm, 1); saveCart(); renderCart(); renderCartBadge(); renderSummary(); return; }
    t = e.target.closest('[data-quick]'); if (t) {
      var p = byId(t.dataset.quick);
      if (p.opts.length) { location.hash = 'product-' + p.id; } else { addToCart(p, {}, 1); }
      return;
    }
    t = e.target.closest('[data-menu-open]'); if (t) { $('[data-menu]').classList.add('open'); return; }
    t = e.target.closest('[data-menu-close]') || (e.target.closest('.mmenu-panel a')); if (t) { $('[data-menu]').classList.remove('open'); }
    t = e.target.closest('[data-soon]'); if (t) { e.preventDefault(); toast('Ссылка на ' + t.dataset.soon + ' появится, когда заведём группу'); }
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { closeCart(); $('[data-menu]').classList.remove('open'); } });

  // ---------- toast ----------
  var toastTimer;
  function toast(msg) {
    var el = $('[data-toast]'); el.textContent = msg; el.classList.add('show');
    clearTimeout(toastTimer); toastTimer = setTimeout(function () { el.classList.remove('show'); }, 2400);
  }

  // ---------- cards ----------
  function card(p) {
    var mp = minPrice(p);
    return '<article class="card">' +
      '<a class="card-media" href="#product-' + p.id + '" aria-label="' + esc(p.name) + '"><img src="' + p.imgs[0] + '" alt="' + esc(p.name) + '" loading="lazy">' +
      (p.tag ? '<span class="tag' + (p.tagGreen ? ' green' : '') + '">' + esc(p.tag) + '</span>' : '') + '</a>' +
      '<div class="card-body"><a class="card-title" href="#product-' + p.id + '">' + esc(p.name) + '</a>' +
      '<span class="card-meta">' + esc(p.meta) + '</span>' +
      '<div class="card-foot"><div class="price"><b>' + (hasRange(p) ? 'от ' : '') + rub(mp.p) + '</b>' + (mp.o ? '<s>' + rub(mp.o) + '</s>' : '') + '</div>' +
      '<button class="add" type="button" data-quick="' + p.id + '" aria-label="' + (p.opts.length ? 'Выбрать вариант: ' : 'В корзину: ') + esc(p.name) + '">' + (p.opts.length ? ICON_ARROW : ICON_PLUS) + '</button></div>' +
      '</div></article>';
  }

  function renderHome() {
    $('[data-cats]').innerHTML = CATS.map(function (c) {
      var n = PRODUCTS.filter(function (p) { return p.cat === c.id; }).length;
      return '<a class="cat" href="#catalog-' + c.id + '"><img src="' + c.img + '" alt="" loading="lazy"><div><b>' + c.name + '</b><span>' + c.sub + '</span></div></a>';
    }).join('');
    var pop = PRODUCTS.slice().sort(function (a, b) { return a.pop - b.pop; }).slice(0, 4);
    $('[data-popular]').innerHTML = pop.map(card).join('');
  }

  // ---------- catalog ----------
  var curCat = 'all';
  function renderCatalog(cat) {
    curCat = cat || 'all';
    var c = catById(curCat);
    $('[data-cat-title]').textContent = c ? c.name : 'Каталог';
    $('[data-cat-sub]').textContent = c ? c.sub : 'Заготовки и декор из фанеры с лазерной резкой';
    $('[data-crumb]').innerHTML = c ? '<a href="#catalog">Каталог</a> / ' + c.name : 'Каталог';
    $('[data-chips]').innerHTML = [{ id: 'all', name: 'Все товары' }].concat(CATS).map(function (x) {
      return '<button class="chip' + (x.id === curCat ? ' on' : '') + '" type="button" data-chip="' + x.id + '">' + x.name + '</button>';
    }).join('');
    var list = PRODUCTS.filter(function (p) { return curCat === 'all' || p.cat === curCat; });
    var s = $('[data-sort]').value;
    list.sort(function (a, b) {
      if (s === 'asc') return minPrice(a).p - minPrice(b).p;
      if (s === 'desc') return minPrice(b).p - minPrice(a).p;
      return a.pop - b.pop;
    });
    $('[data-catalog]').innerHTML = list.map(card).join('');
  }
  document.addEventListener('click', function (e) {
    var t = e.target.closest('[data-chip]'); if (!t) return;
    location.hash = t.dataset.chip === 'all' ? 'catalog' : 'catalog-' + t.dataset.chip;
  });
  $('[data-sort]').addEventListener('change', function () { renderCatalog(curCat); });

  // ---------- product ----------
  var pState = null;
  function optDisabled(p, o, v, sel) {
    if (!v.only) return false;
    for (var k in v.only) if (sel[k] !== v.only[k]) return true;
    return false;
  }
  function fixSel(p, sel) {
    p.opts.forEach(function (o) {
      o.values.forEach(function (v) { if (sel[o.key] === v.v && optDisabled(p, o, v, sel)) sel[o.key] = o.values[0].v; });
    });
  }

  function renderProduct(id) {
    var p = byId(id);
    if (!p) { location.hash = 'catalog'; return; }
    if (!pState || pState.id !== id) pState = { id: id, sel: defaultSel(p), img: 0, q: 1 };
    fixSel(p, pState.sel);
    var pr = priceOf(p, pState.sel);
    var c = catById(p.cat);
    var save = pr.o ? Math.round((1 - pr.p / pr.o) * 100) : 0;

    var opts = p.opts.map(function (o) {
      return '<div class="opt"><div class="opt-label">' + o.label + ': <span>' + esc(pState.sel[o.key]) + '</span></div><div class="opts">' +
        o.values.map(function (v) {
          var dis = optDisabled(p, o, v, pState.sel);
          return '<button type="button" class="' + (pState.sel[o.key] === v.v ? 'on' : '') + '" data-opt="' + o.key + '" data-val="' + esc(v.v) + '"' + (dis ? ' disabled title="Только в исполнении «с рамкой»"' : '') + '>' + esc(v.v) + '</button>';
        }).join('') + '</div></div>';
    }).join('');

    $('[data-product]').innerHTML =
      '<nav class="crumbs" aria-label="Навигация"><a href="#home">Главная</a><span>/</span><a href="#catalog-' + c.id + '">' + c.name + '</a><span>/</span><span>' + esc(p.name) + '</span></nav>' +
      '<div class="pdp" style="padding-top:12px">' +
      '<div class="gallery"><div class="thumbs">' + p.imgs.map(function (src, i) {
        return '<button type="button" class="' + (i === pState.img ? 'on' : '') + '" data-img="' + i + '" aria-label="Фото ' + (i + 1) + '"><img src="' + src + '" alt=""></button>';
      }).join('') + '</div><div class="main-img"><img src="' + p.imgs[pState.img] + '" alt="' + esc(p.name) + '"></div></div>' +
      '<div class="pdp-info"><h1>' + esc(p.name) + '</h1><p class="lead">' + esc(p.lead) + '</p>' +
      '<div class="pdp-price"><b>' + rub(pr.p) + '</b>' + (pr.o ? '<s>' + rub(pr.o) + '</s><span class="save">−' + save + '%</span>' : '') + '</div>' +
      (p.mp ? '<div class="mp-note"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8B3A1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 12l-8 8-9-9V3h8z"/><circle cx="7.5" cy="7.5" r="1.5"/></svg><span>' + esc(p.mp) + '. На сайте дешевле.</span></div>' : '') +
      opts +
      '<div class="buy"><div class="qty"><button type="button" data-q="-1" aria-label="Меньше">−</button><span>' + pState.q + '</span><button type="button" data-q="1" aria-label="Больше">+</button></div>' +
      '<button class="btn" type="button" data-add style="flex:1">В корзину · ' + rub(pr.p * pState.q) + '</button></div>' +
      '<div class="info-boxes">' +
      '<div class="info-box"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8B3A1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 7l9-4 9 4v10l-9 4-9-4z"/><path d="M3 7l9 4 9-4M12 11v10"/></svg><div><b>Доставка в пункт Ozon от 100 ₽</b><span>Отправляем из Пятигорска по всей России</span></div></div>' +
      '<div class="info-box"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8B3A1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="6" width="18" height="13" rx="2"/><path d="M3 10h18M7 15h4"/></svg><div><b>Оплата частями: ' + rub(Math.ceil(pr.p * pState.q / 4)) + ' × 4</b><span>Первый платёж сейчас, остальные раз в 2 недели</span></div></div>' +
      '</div>' +
      '<div class="specs"><h3>Характеристики</h3><dl>' + p.specs.map(function (s) { return '<dt>' + s[0] + '</dt><dd>' + s[1] + '</dd>'; }).join('') + '</dl></div>' +
      '</div></div>';

    var rel = PRODUCTS.filter(function (x) { return x.id !== p.id && x.cat === p.cat; });
    if (rel.length < 4) rel = rel.concat(PRODUCTS.filter(function (x) { return x.id !== p.id && x.cat !== p.cat; }).sort(function (a, b) { return a.pop - b.pop; }));
    $('[data-related]').innerHTML = '<div class="section-head"><div><h2>Вам может понравиться</h2></div></div><div class="grid">' + rel.slice(0, 4).map(card).join('') + '</div><div style="height:88px"></div>';

    var mb = $('[data-mbuy]');
    mb.innerHTML = '<div class="price"><b>' + rub(pr.p * pState.q) + '</b>' + (pr.o ? '<s>' + rub(pr.o * pState.q) + '</s>' : '') + '</div><button class="btn" type="button" data-add>В корзину</button>';
    mb.hidden = false;
  }

  document.addEventListener('click', function (e) {
    if (!pState) return;
    var p = byId(pState.id);
    var t = e.target.closest('[data-opt]');
    if (t) { pState.sel[t.dataset.opt] = t.dataset.val; renderProduct(pState.id); return; }
    t = e.target.closest('[data-img]');
    if (t) { pState.img = +t.dataset.img; renderProduct(pState.id); return; }
    t = e.target.closest('[data-q]');
    if (t) { pState.q = Math.max(1, pState.q + (+t.dataset.q)); renderProduct(pState.id); return; }
    t = e.target.closest('[data-add]');
    if (t) { addToCart(p, Object.assign({}, pState.sel), pState.q); }
  });

  // ---------- checkout ----------
  function renderSummary() {
    var el = $('[data-summary]'); if (!el) return;
    if (!cart.length) { el.innerHTML = '<div class="empty" style="padding:24px 0"><b>Корзина пустая</b><a href="#catalog">Перейти в каталог</a></div>'; return; }
    var sum = cartSum();
    el.innerHTML = '<h3 style="font-size:22px">Ваш заказ</h3>' + cart.map(function (i) {
      var p = byId(i.id);
      return '<div class="row" style="font-size:15px"><span>' + esc(p.name) + (i.label ? ' (' + esc(i.label) + ')' : '') + ' × ' + i.q + '</span><b style="white-space:nowrap">' + rub(i.p * i.q) + '</b></div>';
    }).join('') +
      '<div class="row" style="border-top:1px solid #E2D4BF;padding-top:12px"><span>Доставка</span><span>от 100 ₽</span></div>' +
      '<div class="row total"><span>Товары на сумму</span><span>' + rub(sum) + '</span></div>';
  }

  function bindDemoForm(sel) {
    var f = $(sel); if (!f) return;
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      var ok = $('[data-ok]', f); ok.classList.add('show');
    });
  }
  bindDemoForm('[data-contact-form]');
  bindDemoForm('[data-checkout-form]');

  // ---------- router ----------
  function route() {
    var h = (location.hash || '').replace('#', '');
    var view = 'home', arg = null, anchor = null;
    if (h === '' || h === 'home') view = 'home';
    else if (h.indexOf('home-') === 0) { view = 'home'; anchor = h; }
    else if (h === 'catalog') view = 'catalog';
    else if (h.indexOf('catalog-') === 0) { view = 'catalog'; arg = h.slice(8); }
    else if (h.indexOf('product-') === 0) { view = 'product'; arg = h.slice(8); }
    else if (h === 'delivery') view = 'delivery';
    else if (h === 'checkout') view = 'checkout';

    $all('[data-view]').forEach(function (v) { v.classList.toggle('active', v.dataset.view === view); });
    $all('[data-nav]').forEach(function (a) { a.classList.toggle('active', a.dataset.nav === h || (h === 'catalog' && a.dataset.nav === 'catalog')); });
    $('[data-mbuy]').hidden = true;

    if (view === 'home') renderHome();
    if (view === 'catalog') renderCatalog(arg);
    if (view === 'product') renderProduct(arg);
    if (view === 'checkout') renderSummary();

    if (anchor) { var el = document.getElementById(anchor); if (el) { el.scrollIntoView({ behavior: 'smooth' }); return; } }
    window.scrollTo(0, 0);
  }
  window.addEventListener('hashchange', route);
  renderCartBadge();
  route();
})();
