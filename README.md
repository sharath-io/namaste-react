# Namaste React

# Parcel
- Dev Build
- Local Server
   (hosts our app to server => created a dev build for us)
- HMR -> Hot Module Replacement
   (saved changes reflected)
   (update code & save => it reflects on the display)
   (code change => is done bcz parcel used file watching algorithm)
- File Watching ALgorithm written in c++
   (parcel keeps a track on each file and saved changes)
   (every next build is built in less time => bcz parcel is also caching)
- Caching - Faster Builds -(where => parcel-cache)
  supporting HMR and parcel-caching
  (Faster dev experience)
- Image Optimizaton (most expensive thing in websites => load images)
- Minification of our file
  (when you create a production build)
- Bundling
  (parcel is a bundler)
- Compressing your file
- Consistent hashing
  ( keeps a track of all)
- Code Splitting => split your files
- Differential Bundling - support older browsers
  (when your app is hoisted => your app can be opened in any browser
   parcel gives support to older browsers
   add some extra code to support diff browsers)
- Diagnostics
- Error handling => gives error suggestions
- HTTPs => currently in dev => we host on http we can use HTTPs as well
- Tree Shaking - remove unused code 
  ( if we have 100s line of code parcel removes unused code)
- Reliable caching
- lazy dev builds => can build slow
- Differential bundling
 (provide extra code for diff browsers)
 - Different dev & prod bundles
 (diff bundle for dev & prod
 there are less optimization on dev build)




 # Namste Food
Header
 - logo
 - nav-items 
Body 
  - Search
  - RestaurantContainer
    Restaurant card
    - Img
    - Name of Res, Star rating, cuisine, delivery time, price
Footer
  - Copyright
  - Links
  - Address
  - Contact