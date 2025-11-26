<div align="center">

<img src="https://nodejs.org/static/images/logo.svg" alt="Node.js Logo" width="400"/>

# INT222 Node.js Learning Repository

### A Comprehensive Collection of Node.js Concepts and Examples

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)

</div>

---

## 📚 Table of Contents

- [Overview](#overview)
- [Topics Covered](#topics-covered)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Running Examples](#running-examples)
- [Module Types](#module-types)
- [Common Issues](#common-issues)
- [Learning Resources](#learning-resources)

---

## 🎯 Overview

This repository contains hands-on examples and demonstrations of core Node.js concepts, from basic module systems to advanced web application patterns. Each folder focuses on a specific topic with working code examples you can run and modify.

## 🗂️ Topics Covered

### 1. **Basics**

Introduction to Node.js fundamentals including module systems, callbacks, and event-driven architecture.

**Key Files:**

- `first.js` - Entry point and basic Node.js execution
- `Module.js` - Custom module creation
- `ModImport.js` - Module importing patterns
- `callback.js` - Callback function patterns
- `events.js` - Event emitter and event-driven programming

**Concepts:**

- Core modules (fs, path, http)
- Local module creation and exports
- Third-party module integration
- Event-driven architecture
- Callback patterns

### 2. **Asynchronous Programming**

Comprehensive coverage of async patterns in Node.js.

**Key Files:**

- `AsyncFunction.js` - Async/await syntax
- `AsyncIO.js` - Asynchronous I/O operations
- `fetchDataAsync.js` - Fetching data asynchronously
- `Promise.js` - Promise implementation
- `SyncIo.js` - Synchronous vs asynchronous comparison

**Concepts:**

- Promises and promise chaining
- Async/await syntax
- Promise.all and Promise.race
- Error handling in async code
- Synchronous vs asynchronous I/O

### 3. **File System & Modules**

Working with the file system and various module types.

**Key Files:**

- `FileSystem.js` - File system operations
- `fsread.js` & `fswrite.js` - Reading and writing files
- `StreamRead.js` & `StreamWrite.js` - Stream-based file handling
- `compress.js` & `decompress.js` - File compression/decompression
- `ThirdParty.js` - Third-party module usage

**Concepts:**

- File system operations (read, write, delete)
- Stream-based processing
- Data compression and decompression
- JSON file handling
- Buffer and stream APIs

### 4. **HTTP Server & Routing**

Building HTTP servers and implementing routing patterns.

**Key Files:**

- `StaticRouting.js` - Static route handling
- `ReadServer.js` - Server with file reading
- `htmlFileRoute.js` - Serving HTML files
- `Multiple.js` - Multiple route handling

**Concepts:**

- HTTP server creation
- Static routing
- Dynamic routing
- Serving static files
- URL parsing and routing

### 5. **Express.js Framework**

Modern web application framework for Node.js.

**Key Files:**

- `server.js` - Express server setup
- `Router.js` - Express router implementation
- `Middleware.js` - Middleware functions
- `JsonRoute.js` - JSON API routes
- `ExpressValidator.js` - Input validation

**Concepts:**

- Express application setup
- Route handling and organization
- Middleware functions
- Request/response handling
- Input validation
- Error handling middleware

### 6. **Middleware**

Deep dive into Express middleware patterns.

**Key Files:**

- `Middleware02.js` - Custom middleware
- `TestMiddleware.js` - Middleware testing

**Concepts:**

- Custom middleware creation
- Middleware chaining
- Application-level middleware
- Router-level middleware
- Error-handling middleware
- Third-party middleware integration

### 7. **Cookies & Sessions**

User state management using cookies and sessions.

**Key Files:**

- `cookie.js` & `cookie2.js` - Cookie handling
- `express-session.js` - Session management
- `cookie-session.js` & `cookie-session-02.js` - Cookie-based sessions
- `themeCookie.js` - Practical cookie example

**Concepts:**

- Cookie creation and parsing
- Session management
- Cookie-based authentication
- Session storage
- Secure cookie practices
- Theme persistence

### 8. **CRUD Operations**

Create, Read, Update, Delete operations with Node.js.

**Key Files:**

- `Crud01.js` - CRUD implementation

**Concepts:**

- RESTful API design
- Database operations
- HTTP methods (GET, POST, PUT, DELETE)
- Data persistence
- API endpoint design

### 9. **Advanced Server Concepts**

Advanced server-side programming patterns.

**Key Files:**

- `FsServer.js` - File system server
- `FunctionServer.js` - Function-based server
- `factorialServer.js` - Mathematical computation server
- `urlModule.js` - URL parsing
- `WriteJson.js` - JSON data writing

**Concepts:**

- URL module usage
- Query string parsing
- JSON data handling
- Server-side computations
- HTTP headers
- Content types

---

## 📁 Project Structure

```
INT222-NodeJs/
├── Basics/              # Node.js fundamentals
├── Asyncs/              # Asynchronous programming
├── Modules/             # File system and modules
├── Routers/             # HTTP routing
├── Express/             # Express.js framework
├── Middlewares/         # Middleware patterns
├── Cookies-Sessions/    # State management
├── CRUD/                # CRUD operations
└── ServerNode/          # Advanced server concepts
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have Node.js and npm installed:

```cmd
node -v
npm -v
```

### Installation

1. Clone this repository
2. Navigate to the project directory:

```cmd
cd path\to\INT222-NodeJs
```

3. Install dependencies for specific examples:

```cmd
cd Express
npm install
```

---

## ▶️ Running Examples

### Basic Examples

Navigate to the project root and run:

```cmd
node Basics\first.js
node Basics\ModImport.js
node Basics\callback.js
```

### Async Examples

```cmd
node Asyncs\Promise.js
node Asyncs\AsyncFunction.js
node Asyncs\fetchDataAsync.js
```

### Express Server

```cmd
cd Express
npm install
node server.js
```

### CRUD Operations

```cmd
cd CRUD
npm install
node Crud01.js
```

### Cookies & Sessions

```cmd
cd Cookies-Sessions
npm install
node express-session.js
```

---

## 📦 Module Types

### **Core Modules**

Built into Node.js. No installation required.

**Examples:** `fs`, `path`, `http`, `url`, `events`

```javascript
const fs = require("fs");
const path = require("path");
```

### **Local Modules**

Your own files and modules.

```javascript
const myModule = require("./Module");
// Use relative path with ./
```

### **Third-Party Modules**

Packages from npm.

```cmd
npm install express lodash
```

```javascript
const express = require("express");
const _ = require("lodash");
```

---

## ⚠️ Common Issues

### Cannot find module error

Make sure the file exists and you're using the correct relative path:

```javascript
// Correct
const mod = require("./Module");

// Incorrect
const mod = require("Module");
```

### Import statement syntax error

Node.js uses CommonJS by default. Either:

**Option 1:** Use `require()`:

```javascript
const express = require("express");
```

**Option 2:** Enable ES modules in `package.json`:

```json
{
  "type": "module"
}
```

Then use:

```javascript
import express from "express";
```

### Module not found

Install the required packages:

```cmd
npm install
```

Or install specific package:

```cmd
npm install express
```

---

## 📖 Learning Resources

### Official Documentation

- **Node.js Documentation:** https://nodejs.org/docs/
- **Express.js Guide:** https://expressjs.com/
- **npm Documentation:** https://docs.npmjs.com/

### Additional Topics to Explore

- RESTful API design
- Authentication and authorization
- Database integration (MongoDB, PostgreSQL)
- Template engines (EJS, Pug)
- Testing with Jest or Mocha
- Deployment and DevOps

---

<div align="center">

### 🌟 Happy Learning! 🌟

**Master Node.js one concept at a time**

Made with ❤️ for INT222 Course

</div>
