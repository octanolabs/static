---
title: Вступление
description: Static - это CMS на основе Git для начальной загрузки посадочных сайтов для проектов с открытым исходным кодом. Используя Vue.js, Nuxt.js и Vuetify, вся тяжелая работа будет сделана за вас - навыки программирования не требуются. Просто сосредоточьтесь на демонстрации своего проекта и всего, что он может предложить.
icon: mdi-script-text
createdAt: 2021-01-01T00:00:01.966Z
---

## Простой

Написать контент с уценкой просто. Nuxt-i18n поддерживает несколько языков. Вы также можете встраивать теги html / vue для создания более сложных интерфейсов. Небо это предел!

## Красивый

Элегантные материальные компоненты встроены с использованием [Vuetify](https://vuetifyjs.com). Никаких дизайнерских навыков не требуется - все необходимое для создания красивых интерфейсов в вашем распоряжении.

## Кодовые блоки

Кодовые блоки с подсветкой синтаксиса.

```js[server.js]
const http = require('http')
const bodyParser = require('body-parser')

http.createServer((req, res) => {
  bodyParser.parse(req, (error, body) => {
    res.end(body)
  })
}).listen(3000)
```

## Столы

С легкостью создавайте таблицы с помощью Static.

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |
| *inline markdown* | **still renders** | `nicely` |
1 | 2 | 3