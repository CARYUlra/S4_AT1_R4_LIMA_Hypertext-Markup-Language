(() => {
  const storageKey = 'pixelgear-cart';
  let cart = JSON.parse(localStorage.getItem(storageKey) || '[]');

  const normalizePrice = text => {
    const value = text && text.replace(/[^0-9]/g, '');
    return value ? Number(value) / 100 : 0;
  };

  const formatMoney = value => value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  const createDrawer = () => {
    if (document.querySelector('.cart-drawer')) return;
    const drawer = document.createElement('div');
    drawer.className = 'cart-drawer';
    drawer.innerHTML = `
      <div class="cart-overlay"></div>
      <aside class="cart-panel" aria-label="Carrinho de compras">
        <div class="cart-header"><div><small>PIXELGEAR</small><h2>Meu carrinho</h2></div><button class="cart-close" type="button" aria-label="Fechar carrinho">×</button></div>
        <div class="cart-items"></div>
        <div class="cart-footer">
          <div class="cart-total"><span>Subtotal</span><strong>R$ 0,00</strong></div>
          <button class="cart-checkout" type="button">Ir para o pagamento</button>
          <button class="cart-clear" type="button">Esvaziar carrinho</button>
        </div>
      </aside>`;
    document.body.appendChild(drawer);

    drawer.querySelector('.cart-overlay').addEventListener('click', closeCart);
    drawer.querySelector('.cart-close').addEventListener('click', closeCart);
    drawer.querySelector('.cart-clear').addEventListener('click', () => { cart = []; saveAndRender(); });
  };

  const openCart = () => {
    createDrawer();
    document.querySelector('.cart-drawer').classList.add('open');
  };

  const closeCart = () => document.querySelector('.cart-drawer')?.classList.remove('open');

  const saveAndRender = () => {
    localStorage.setItem(storageKey, JSON.stringify(cart));
    renderCart();
  };

  const renderCart = () => {
    const count = document.getElementById('cart-count');
    if (count) count.textContent = cart.reduce((sum, item) => sum + item.qty, 0);
    const builderCount = document.getElementById('builder-cart-count');
    if (builderCount) builderCount.textContent = cart.reduce((sum, item) => sum + item.qty, 0);

    const drawer = document.querySelector('.cart-drawer');
    if (!drawer) return;

    const container = drawer.querySelector('.cart-items');
    if (!cart.length) {
      container.innerHTML = '<div class="cart-empty"><span>♡</span><h3>Seu carrinho está vazio</h3><p>Adicione produtos e monte seu próximo setup.</p></div>';
    } else {
      container.innerHTML = cart.map((item, index) => `
        <article class="cart-item">
          ${item.image ? `<img src="${item.image}" alt="${item.name}">` : '<div class="cart-item-icon">▣</div>'}
          <div class="cart-item-info"><strong>${item.name}</strong><span>${formatMoney(item.price)}</span>
            <div class="quantity-control">
              <button type="button" data-action="minus" data-index="${index}" aria-label="Diminuir">−</button>
              <b>${item.qty}</b>
              <button type="button" data-action="plus" data-index="${index}" aria-label="Aumentar">+</button>
            </div>
          </div>
          <button class="cart-remove" type="button" data-action="remove" data-index="${index}" aria-label="Remover">×</button>
        </article>`).join('');
    }

    const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    drawer.querySelector('.cart-total strong').textContent = formatMoney(total);

    container.querySelectorAll('[data-action]').forEach(button => {
      button.addEventListener('click', () => {
        const index = Number(button.dataset.index);
        if (button.dataset.action === 'plus') cart[index].qty++;
        if (button.dataset.action === 'minus') cart[index].qty = Math.max(1, cart[index].qty - 1);
        if (button.dataset.action === 'remove') cart.splice(index, 1);
        saveAndRender();
      });
    });
  };

  const addProduct = card => {
    const name = card.querySelector('[data-name]')?.dataset.name || card.querySelector('h3')?.textContent.trim() || 'Produto PixelGear';
    const priceText = card.querySelector('.price strong')?.textContent || 'R$ 0,00';
    const price = normalizePrice(priceText);
    const image = card.querySelector('img')?.src || '';
    const existing = cart.find(item => item.name === name);
    if (existing) existing.qty++;
    else cart.push({ name, price, image, qty: 1 });
    saveAndRender();
    openCart();
  };

  document.addEventListener('DOMContentLoaded', () => {
    createDrawer();
    renderCart();

    document.querySelectorAll('.buy-button').forEach(button => {
      button.addEventListener('click', () => {
        addProduct(button.closest('.product-card'));
        const original = button.textContent;
        button.textContent = 'Adicionado ✓';
        setTimeout(() => { button.textContent = original; }, 1300);
      });
    });

    document.querySelector('.cart-button')?.addEventListener('click', openCart);
    document.querySelector('.builder-cart-button')?.addEventListener('click', openCart);
  });

  window.addEventListener('storage', () => {
    cart = JSON.parse(localStorage.getItem(storageKey) || '[]');
    saveAndRender();
  });

  window.addEventListener('pixelgear-cart-updated', () => {
    cart = JSON.parse(localStorage.getItem(storageKey) || '[]');
    saveAndRender();
  });
})();
