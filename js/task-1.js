class Storage {
    #items;

    constructor(items) {
        this.#items = items; // Ініціалізація приватного поля
    }

    getItems() {
        return this.#items; // Повернення масиву items
    }

    addItem(newItem) {
        this.#items.push(newItem); // Додавання нового елемента до масиву
        return this.#items; // Повернення оновленого масиву
    }

    removeItem(itemToRemove) {
        const index = this.#items.indexOf(itemToRemove); // Знаходимо індекс елемента
        if (index !== -1) {
            this.#items.splice(index, 1); // Видаляємо елемент, якщо знайдений
        }
        return this.#items; // Повертаємо оновлений масив
    }
}


const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem("Scaner");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
