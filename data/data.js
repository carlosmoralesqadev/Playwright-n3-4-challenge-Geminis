export const Locators = {
    url: {
        saucedemo: "https://www.saucedemo.com",
    },

    credenciales: {
        userName: "standard_user",
        userPass: "secret_sauce",
    },

    selectores: {
        login: {
            nameInput: /Username/i /*Role*/,
            passInput: /Password/i /*Role*/,
            btnLogin: /Login/i /*Role*/,
        },

        products: {
            listContainer: "inventory-list" /*data-id*/,
            btnAddToCart: /Add to cart/i /*Role*/,
            iconCart: "shopping-cart-link" /*data-id*/,
            title: "title", /*data-id*/
            //nameProductInCart: xx, */
        },
    },
};
