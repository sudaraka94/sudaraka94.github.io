---
layout: post
title: "Coding a neural network from scratch"
image: /assets/images/posts/2024-06-06-neural-network-from-scratch/hero.png
date: 2024-06-06 10:00:00 +0800
categories: [ai, machine-learning]
tags: [neural-network, python, ai, autograd]
author: Sudaraka Jayathilaka
excerpt: "Learning how AI works on a deeper level has always been in my bucket list. I found this amazing video by Andrej Karpathy"
---

Learning how AI works on a deeper level has always been in my bucket list. I found this amazing video by [Andrej Karpathy](https://x.com/karpathy) which walks you through the process of creating an autograd engine first and then move on to create a very basic Neural Network. So here is my experience following the video.

**Video**: [The spelled-out intro to neural networks and backpropagation](https://youtu.be/VMj-3S1tku0?list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ)

## Autograd Engine

![Neural Network Diagram](https://cs231n.github.io/assets/nn1/neural_net2.jpeg)

*Image source: [CS231n](https://cs231n.github.io/neural-networks-1/)*

A Neural Network is basically a graph. once we give an input, the neural network returns an output. Each of these neurons have certain parameters which impacts the output directly. We train neural networks to output a desired value by tweaking these parameters in neurons. But how can we derive the parameter values that could cause the neural network to output the desired value?. 

Turns out, old friend calculus comes to help here. We can approximate the impact of a certain parameter on the output of the Neural Network, by calculating the gradient of the parameter with respect to the output. 

Autograd engine helps us to build a Neural Network (modeled as a graph), and easily do backpropagation to calculate the gradients of each parameter. Hence the name Autograd Engine. 

## Tiny Grad

**GitHub**: [sudaraka94/tinygrad](https://github.com/sudaraka94/tinygrad)

Tiny grad is the engine I build. This is a very basic Auto Grad engine which:

- Supports implementing Simple Neural networks
- Only works with scalaer inputs
- Supports backpropagating through the neural network and calculating gradient values for each parameter

I did a tiny experiment with tinygrad, where I created a simple neural netowrk and trained it to predict a given input. I was simply playing with a set of numbers, but it was quite fun. You can find my jupyter notebook below:

**Notebook**: [tinygrad.ipynb](https://github.com/sudaraka94/tinygrad/blob/main/tinygrad.ipynb)

## Micrograd

The tinygrad engine is mostly inspired by Andrej Karpathi's Micrograd, Autograd Engine.

**GitHub**: [karpathy/micrograd](https://github.com/karpathy/micrograd)

---

*Article banner source: [Medium](https://miro.medium.com/v2/resize:fit:700/0*AONVmd3v4wO_dWr6)*
