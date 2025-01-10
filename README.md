# JavaScript Runtimes Benchmarking

This repository contains benchmark scripts and instructions which were used in my bachelor thesis for comparing **Bun.js**, **Node.js**, and **Deno**. By running these tests on any machine or server, everyone can observe differences in startup speed, CPU-bound performance, and HTTP request handling among the three runtimes.

## Table of Contents
- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Benchmarks](#running-the-benchmarks)
  - [1. Startup Test](#1-startup-test)
  - [2. CPU-Bound Calculation](#2-cpu-bound-calculation)
  - [3. HTTP Server Test](#3-http-server-test)
- [Configuring Test Parameters](#configuring-test-parameters)
- [Interpreting Results](#interpreting-results)
- [Troubleshooting](#troubleshooting)

## Overview

Each folder or script in this repo corresponds to a specific benchmark scenario (e.g., **startup**, **CPU-bound**, **HTTP server**). The goal is to measure:
1. **Startup Time** – How quickly each runtime initializes and executes a short script.  
2. **CPU-Bound Performance** – How they handle intensive calculations (e.g., prime generation, large loops).  
3. **I/O-Bound Performance** – How fast each can serve HTTP requests under load.

The results can help you see which runtime might be more suitable for certain workloads, such as serverless environments (where startup time is critical) or high-traffic servers (where I/O throughput is key).

## Prerequisites

1. **Node.js**  
   - Tested with Node.js v23.4.0 
2. **Deno**  
   - Tested with Deno v2.1.4  
3. **Bun**  
   - Tested with Bun v1.1.38  
4. **wrk** (for HTTP load testing)  
   - Optional but recommended for stress testing the HTTP server.
   - Testes with wrk v4.2.0  
5. **Git** (for cloning this repo)

Ensure you have each runtime installed and accessible from the command line (`node`, `deno`, `bun`).  
For `wrk`, refer to [wrk’s official repository](https://github.com/wg/wrk) on how to install.
