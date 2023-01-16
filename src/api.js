const url = `https://geektrust/catalogue.json`;

export const getProducts = () => {
    return fetch(url)
            .then(res => res.json());
}