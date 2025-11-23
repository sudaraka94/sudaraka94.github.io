---
layout: post
title: "Kafka Rebalancing, Kafka lag and Deployments"
image: /assets/images/posts/2024-10-13-kafka-rebalancing-lag-deployments/hero.webp
date: 2024-10-13 10:00:00 +0800
categories: [kafka, distributed-systems]
tags: [kafka, rebalancing, deployment, kubernetes]
author: Sudaraka Jayathilaka
excerpt: "I have been working with Kafka for a while now. I wanted to blog about some of the common failure patterns"
---

I have been working with Kafka for a while now. I wanted to blog about some of the common failure patterns I have seen in associated with Kafka Rebalancing, Kafka lag and Deployments.

## Context

### Kafka Consumer Rebalancing

Kafka has this concept of Consumer Groups. Each consumer group can independently consume messages from a given Kafka topic. Each Kafka partition is consumed by a single Kafka consumer within a consumer group. This behavior is very vital when providing processing order guarantees during event consumption. But that's a story for another day. Anyway, Kafka would make sure that all the partitions are being assigned to a Kafka consumer.

But what happens when one or more than one Kafka consumer goes down or a new consumer joins the group?

That's when the Kafka brokers trigger a process called Kafka Consumer Rebalancing. This process redistributes the partitions among the consumers of the consumer group. But, this process causes a stop the world effect on message consumption. During the process, non of the consumers are not able to consume any message. 

### Kafka Lag

During Kafka consumer rebalances the stop the world effect could cause unconsumed kafka messages to get piled up in the topic. The term **Kafka Consumer Lag** refers to the delta between the production and consumption of Kafka messages.

## Consumers getting overwhelmed due to high Kafka lag

When Kafka lag is high, Kafka consumers try to consume all the messages piled up in the topic very fast. This could cause the kafka consumers to hit the resource limits and get restarted or killed (eg: if the consumer runs on Kubernetes). During very high loads, this effect can cause massive service disruptions. 

### The Backpressure

The best way to fix this is implementing back preassure on Kafka consumers.

The term backpressure refers to the ability to control the flow of incoming data. In the context of Kafka Consumers, that means the ability of the Kafka consumer to control the rate of processing incoming kafka messages. This gives the kafka consumer the ability to consume messages in a constant rate even if there is a very high kafka lag.

### Discarding older events

Another approach would be to discard messages that exceed a specified age threshold. This is a highly contextual way to battle the kafka lag and wouldn't be suitable for some scenarios. In certain cases, it might be meaningful to only consider events occured in past few minutes (in real time systems). In such cases, we can add a simple condition to simply discard the older events which aren't really worth processing.

## Kafka consumers and Kubernetes rolling deployments

Kubernetes rolling deployments is a way of doing deployments within kubernetes. It will gradually replace the older pods with the newer version pods. But rolling deployments might not be ideal for the kafka consumers.

During rolling deployments, Kubernetes gradually spawns new pods while simultaneously terminating older ones. However, when considering a single Kafka consumer group, the addition of each new Kafka consumer can trigger rebalances, as can the removal of old consumers. This process can lead to multiple rebalances, resulting in several interruptions to Kafka message consumption.

### Batch Deployments

One of the ways to mitigate this is doing batchwise deployments. Since most of the kafka consumers joins the group during the same time it can drastically reduce the number of triggered rebalances.
