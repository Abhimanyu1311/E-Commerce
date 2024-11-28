const cart = [];

const handleCart = (state = cart, action) => {
    const product = action.payload;

    switch (action.type) {
        case "ADDITEM": {
            const exist = state.find((item) => item.id === product.id);
            if (exist) {
                return state.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [
                    ...state,
                    {
                        ...product,
                        quantity: 1,
                    },
                ];
            }
        }

        case "DELITEM": {
            const exist = state.find((item) => item.id === product.id);
            if (exist) {
                if (exist.quantity === 1) {
                    return state.filter((item) => item.id !== product.id);
                } else {
                    return state.map((item) =>
                        item.id === product.id
                            ? { ...item, quantity: item.quantity - 1 }
                            : item
                    );
                }
            }
            return state;
        }
        default:
            return state;
    }
};

export default handleCart;
