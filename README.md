# About This Cart System
This project is for students or beginner level developers. We usually use State Management to share data amoung Components like Cart Items/Products, but in this project, we are simply using JSON Server to store info about Cart Items and Products. This project is simple so do not expect much.  
## Working  
Home page shows all products and from there you can add-to-cart products. Add-to-cart will directly upload Product data to the database. Create Pages, as name implies, this is where you can upload info about new product that you want to create. There is no option to upload image in JSON Server, so we will use product image URL from the internet or you can save image in your system and use it. Cart or Items page/component will show all cart items and here we have divided all Items into single Item component. It is easy to manage it that way. Here you can delete Item from cart & Database at the same time. Increase or Decrease Quantity as you wish, price will update accordingly in realtime. Alerts will also appear if something went wrong or right. Like You can not add more than 10x products so if you try to increase then, an alert will popup or less than 1 will also show popup.  
  
Increment & Decement Functions live update item's quantity & Total Price on click. Delete and both functions (inc & drec), emit back to Items page to recalculate item. Live Count of items in cart on cart(button at the bottom), doesn't work. Eveything else is fine.  
  
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```
### Start BackEnd Server
```
npm run back
```
### Start Tailwindcss
```
npm run watch
```
### Start BackEnd Server
```
npm run back
```
### Start Tailwindcss
```
npm run watch
```