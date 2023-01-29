 🎭 Idioma/language
<p>
    <p> <img alt="ES" src="https://camo.githubusercontent.com/e06699867169d4da7d78ee3e7d61d5264594c13e71c002b629901ed94bdf4d95/68747470733a2f2f656d6f6a6970656469612d75732e73332e6475616c737461636b2e75732d776573742d312e616d617a6f6e6177732e636f6d2f7468756d62732f3234302f747769747465722f3235392f666c61672d737061696e5f31663165612d31663166382e706e67" height="22"  style="max-width:100%;"> Spanish
    </p>
    ## abcd
    <p> <img src="https://camo.githubusercontent.com/1e71db79954d93a6156efdb3f40269cab34b4a12450a5ca15c0ee3dd4904613e/68747470733a2f2f656d6f6a6970656469612d75732e73332e6475616c737461636b2e75732d776573742d312e616d617a6f6e6177732e636f6d2f7468756d62732f3234302f747769747465722f3235392f666c61672d756e697465642d6b696e67646f6d5f31663165632d31663165372e706e67" alt="UK" height="22" data-canonical-src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/259/flag-united-kingdom_1f1ec-1f1e7.png" style="max-width:100%;"> English
    </p>
  
</p>
# Workshop - React Native

## Overview

En este workshop vamos a crear una aplicación mobile utilizando React Native, para ello usaremos Expo para generar el boilerplate inicial y sobre el modificar lo necesario para elaborar la aplicación que se describirá a continuación.

La idea es crear una aplicación sobre Noticias en la cual se incluyan por lo menos las siguientes funcionalidades:

 - Poder mostrar un listado de las principales Noticias (Incluyendo Titulo y foto)
 - Poder mostrar ellistado por distintos paises a partir de una lista.
 - a partir de un input que ingrese el usuario y devuelva solo las noticias que contengan dicha palabra o comienzen con ella.
 - Poder ir al detalle del personaje donde se deben poder seleccionar dos subpantallas:
    * Ver la descripción de la info otorgada por la api (la verdion free otorga solo un par de lineas),autor de la info , feche publicada
    * Ver un link a donde poder acceder a los recursos de la informacion original.

## Configuración de Screens

 nececsitaríamos las siguientes pantallas:

 * __Home__: contendrá la barra de búsqueda y el listado de Noticias
 * __Detail__: cuando el usuario seleccione una Noticia se deberá ingresar a esta pantalla con unos tabs inferiores para ir a switcheando entre `Information` y `Links`. Inicialmente se mostrará la primera.
 * __Information__: contendrá la información detallada de la noticia
 * __Link__: contendrá un link que nos redirigira al origen de la informacion.

 <!-- Get Started / Install: -->

## Getting started
[link text](#abcd)

Prerequisites: To run the react-native project on your mobile or emulator you need some
more specific settings, I recommend this link
(https://facebook.github.io/react-native/docs/getting-started) if you do not already have the recommended settings on your machine.

1. Install
   [Git](http://git-scm.com/downloads) e
   [NodeJS](http://nodejs.org/download/),
   in case you don't have them yet.

2. Clone repository:

   ```sh
   $ git clone https://github.com/Hans-Rafael/React-Native-NewsApp.git
   ```

3. Go to project folder:

   ```sh
   $ cd News
   ```

4. Install all dependences:

   ```sh
   $ npm install ou yarn
   ```

5. Finally run:

   ```sh
   $ react-native run-android (Android)
   or
   $ react-native run-ios (IOS)
   ```
   or
    or
   $ npm start
   ```

   Now you will see the app running on your mobile phone or emulator :D