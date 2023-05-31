// Definição dos itens disponíveis
var item1 = { name: "Camisa Polo Santos", price: 249.90 };
var item2 = { name: "Blusa 111 anos Santos", price: 279.90 };
var item3 = { name: "Camisa Peixão de Quebrada", price: 144.90 };
var item4 = { name: "Camisa Charlie Brown Jr", price: 149.90 };
var item5 = { name: "Camisa 2023 OF 2", price: 349.90 };
var item6 = { name: "Camisa Santos Goleiro", price: 349.90 };
var item7 = { name: "Camisa Homenagem ao Rei", price: 493.99 };
var item8 = { name: "Camisa Santos Bi Mundial", price: 199.90 };

// Função para adicionar item ao carrinho
function addItemToCart(item) {
    var cart = localStorage.getItem("cart");
    if (cart) {
        cart = JSON.parse(cart);
    } else {
        cart = [];
    }
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Item adicionado ao carrinho!");
}
