// Kullanıcıdan alınan verileri local storage'a yazacak dosya

const pizzaDetails = {
    name: 'Karışık Pizza',
    size: 'Büyük',
    crust: 'İnce',
    toppings: ['Mantar', 'Sosis', 'Mısır']
  };
  
  // Verileri local storage'a yazma
  localStorage.setItem('selectedPizza', JSON.stringify(pizzaDetails));
  console.log('Pizza detayları local storage\'a yazıldı.');

  
  