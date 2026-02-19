# viaTransitTest

## Rendu visuel

Sur la partie visuelle, j'ai essayé d'être le plus fidèle possible à la maquette, notamment sur les espacements, les arrondis et les ombrages. Globalement je pense que le rendu est proche, mais certaines ombres pourraient être ajustées plus finement pour coller exactement à l'original.

## Qualité du code

Au départ j'avais pas mal de styles inline, que j'ai ensuite refactorés vers un `StyleSheet` pour améliorer la lisibilité et la maintenabilité. J'ai aussi extrait le bloc check-in / check-out dans un composant `CheckCard` pour éviter la duplication et rendre le code plus propre.

## Ce que j'aurais amélioré avec plus de temps

Avec plus de temps, j'aurais probablement centralisé davantage les couleurs et les tailles dans un fichier de thème afin d'éviter certaines valeurs "en dur". J'aurais aussi pris un peu plus de temps pour tester le rendu sur différentes tailles d'écran.

## Conclusion

Dans l'ensemble je suis satisfait du résultat, tout en voyant clairement des axes d'amélioration si l'écran devait évoluer dans un contexte produit réel.

---

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
