---
title: "Cómo configurar un Firewall básico en Linux"
date: "15 Ene 2026"
excerpt: "Guía paso a paso para proteger tu servidor usando UFW."
---

En este tutorial aprenderemos a configurar un firewall básico utilizando **UFW** (Uncomplicated Firewall) en Ubuntu/Debian para proteger nuestro servidor de accesos no deseados.

## Paso 1: Instalación

Lo primero es asegurarnos de que UFW está instalado en nuestro sistema. Ejecuta el siguiente comando:

```bash
sudo apt update
sudo apt install ufw
```

![Instalación de UFW](https://placehold.co/100x100)
*Captura de pantalla de la terminal mostrando la instalación.*

## Paso 2: Reglas Básicas

Por defecto, queremos denegar todo el tráfico entrante y permitir el saliente. Esto es una buena práctica de seguridad.

```bash
sudo ufw default deny incoming
sudo ufw default allow outgoing
```

> **IMPORTANTE**: Antes de activar el firewall, asegúrate de permitir SSH, o te quedarás fuera de tu propio servidor.

```bash
sudo ufw allow ssh
```

## Paso 3: Activar

Una vez configuradas las reglas, activamos el firewall:

```bash
sudo ufw enable
```
