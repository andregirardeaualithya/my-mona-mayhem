<!-- l10n-sync: source-file="workshop/04-design-vibes.md" -->
# Parte 4: Tematización orientada al diseño

---

En esta parte, usarás los ciclos de planificación e implementación de Copilot para diseñar una transformación completa del tema. Este es un enfoque de desarrollo orientado al diseño: empieza con una visión, itera sobre los elementos visuales y deja que Copilot se encargue del trabajo pesado de CSS.

## Tarea 1: Planifica el tema retro

<!-- track:vscode:start -->
Cambia al modo **Plan** en GitHub Copilot Chat.
<!-- track:vscode:end -->

<!-- track:cli:start -->
Usa `/plan` en GitHub Copilot CLI o pulsa **Shift+Tab** hasta activar el modo de planificación.
<!-- track:cli:end -->

Introduce este prompt:

> Quiero transformar esta página en una experiencia completa de arcade retro. Planifica una renovación visual integral que incluya: efectos de líneas de barrido CRT en el fondo, un brillo de neón pulsante en el título, una insignia VS animada con cambios de color en el degradado, una capa de brillo y resplandor en las tarjetas de resultados de usuario, animaciones de entrada flotante para los campos de texto, texto de carga que cambie entre verde y morado, y efectos de resplandor al pasar el cursor sobre los cuadrados de contribuciones. Mantén el fondo oscuro (`#0a0a1a`) y usa el verde (`#5fed83`) y el morado (`#8a2be2`) como colores de acento. Usa el tema oscuro y la fuente de videojuegos retro Press Start 2P de Google Fonts.

Copilot generará un plan detallado con todos los efectos visuales. **No lo aceptes de inmediato**: revísalo e itera:

- Sugiere ajustes a la duración de las animaciones (por ejemplo, «Haz que el pulso de neón sea más lento, de unos 3 segundos»).
- Pregunta por efectos concretos (por ejemplo, «¿Cómo funcionará la capa de brillo en las tarjetas?»).
- Pide cambios en el enfoque si algún aspecto no te convence.

## Tarea 2: Implementa el tema

Cuando estés satisfecho con el plan, pide a Copilot que lo implemente.

> Implementa el plan para el tema de arcade retro que acabamos de diseñar.

Copilot añadirá varias animaciones CSS, pseudoelementos y transiciones en la hoja de estilos. Por ejemplo:

- `@keyframes` para las líneas de barrido, el pulso de neón, el brillo y la entrada flotante
- Pseudoelementos (`::before`, `::after`) para los efectos superpuestos
- Propiedades personalizadas de CSS para los colores del tema
- Transiciones y estados al pasar el cursor sobre elementos interactivos

<!-- track:cli:start -->
Cuando terminen los cambios, usa `/diff` para revisar los estilos antes de aprobarlos.
<!-- track:cli:end -->

## Tarea 3: Ajusta el diseño

> **⚠️ ¿No ves los cambios?** Si el nuevo tema o las animaciones no aparecen, detén el servidor (`Ctrl+C`), reinícialo con `npm run dev` y haz una recarga forzada (`Ctrl+Shift+R`) en el navegador.

Mantén abierta la vista previa del navegador e itera sobre el diseño. Prueba prompts como estos:

> El efecto de líneas de barrido es demasiado intenso; reduce la opacidad a 0.03.

> Añade un sutil parpadeo eléctrico al texto del título.

> Haz que la insignia VS pulse de forma más marcada.

Este es un enfoque de **desarrollo orientado al diseño**: iteras sobre el resultado visual en tiempo real. Cada prompt refina la experiencia hasta que te convenza. No te conformes con algo «suficientemente bueno»: perfecciona el diseño hasta que la página parezca una máquina de arcade.

## Tarea 4: Actualiza las instrucciones

Tus instrucciones deben reflejar las decisiones de diseño importantes para que los prompts posteriores mantengan la dirección elegida.

<!-- track:vscode:start -->
Pide a Copilot Chat:

> Añade a `copilot-instructions.md` una sección de guía de diseño que describa el tema de arcade retro: colores, fuentes y estilo de animación.
<!-- track:vscode:end -->

<!-- track:cli:start -->
Pide a Copilot CLI:

> Actualiza las instrucciones del repositorio con una guía breve del tema de arcade retro: colores, fuentes, estilo de animación y la regla de que la nueva interfaz conserve la estética de neón.
<!-- track:cli:end -->

Cuando la página tenga el aspecto que buscas, haz commit de las instrucciones y los cambios de diseño.

## ✅ Parte 4 completada

**Lo que has aprendido:**

- Usar flujos de planificación para esbozar un **sistema de diseño antes de implementarlo**
- **Iterar sobre el resultado visual** con prompts de seguimiento rápidos
- **Actualizar las instrucciones tras tomar decisiones importantes** para mantener la identidad visual
