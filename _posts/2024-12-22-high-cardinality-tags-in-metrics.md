---
layout: post
title: "Tackling High Cardinality Tags in Metrics"
image: /assets/images/posts/2024-12-22-high-cardinality-tags-in-metrics/cover.png
date: 2024-12-22 10:00:00 +0800
categories: [observability, metrics]
tags: [metrics, datadog, prometheus, monitoring]
author: Sudaraka Jayathilaka
excerpt: "I wanted to share how I tackled the problem of high cardinality tags in a certain metric"
---

I wanted to share how I tackled the problem of high cardinality tags in a certain metric. But first, let me give some context around the topic of Metrics and Metric tags.

## Metrics

Metrics are a vital part of any software system. You can find many mature Specifications in different technology domains standardizing the usage of metrics. [Microprofile Metrics Specification](https://microprofile.io/specifications/metrics), is one of my favourites. But introducing a metric to a system isn't always a straightforward decision, We always need to figure out what works best for the use case. This comes down to the questions such as,

- Is it A counter? A gauge? or some other type of metric?
- What are the metadata we want to include as tags in the metric?
- How is it going to be visualized? 
- Will there be any monitors set up on the metric?

## Metric Tags

One of the main aspects of a metric is tags. Metric tags give us a lot of agility in visualizing and analyzing certain metrics. Let's take a hypothetical example.

You have an API service that allows users to make event ticket purchases. Now you want to monitor the purchases happening through the API and track the aspects such as,

- Number of purchases by each account per minute 
- Country of origin for each purchase
- Whether each purchase was successful or failed
- Server id, which served the specific purchase

To obtain these types of insights, we can simply tag the metric with the relevant information.

- Tag the metric with, `country: us` to group purchase metrics with the country.
- Tag the metric with, `success: true` or `success: false` depending on the status of the call. This might help track the failure rate of the calls made to the API.

## Collecting and Visualizing Metrics

For collecting and visualizing metrics, you have two options:

1. You can use a self-hosted solution like Prometheus.
2. You can use a platform like DataDog/NewRelic.

I don't want to bore you with the details about the pros and cons of both. But the problem I'm talking about is mostly related to the second option.

When using third-party services like DataDog, they do have a pricing strategy that accounts for the cardinality of the tags added for the metrics. For example, [this Datadog documentation](https://docs.datadoghq.com/account_management/billing/custom_metrics/?tab=countrate#when-are-you-charged-for-ingested-vs-indexed-custom-metrics) explains how tags and the cardinality of tags cause a single metric to be reported as multiple custom metrics in DataDog.

**TLDR;** When you have metrics with exponentially high cardinality, you have to pay so much more.

## How Can we tackle this problem efficiently?

Let's take the previous hypothetical scenario. I gave a few examples of tags we can add to the metric. One of them was adding the accountId (or any other account identifier) to the metric for tracking the rate of purchases in the scope of an account. But unlike adding the country as a tag (there is only a finite amount of countries in the world), adding the accountId can be super expensive due to the sheer number of accounts that can be created within the system. Cost isn't the only problem here. Having a tag with so many values might not provide really meaningful insights as well. 

One of the solutions is to use a histogram metric for tracking the rate of purchases. The histogram aggregates the reported values into different buckets. Consider following values:

- Account A -> 1 purchases per minute
- Account B -> 1000 purchases per minute
- Account C -> 1001 purchases per minute

Instead of tagging the metric with the accountId, the distribution of purchases per minute can be divided into buckets by the number of purchases made within the time window. According to the example:

- `0 <= n < 100`: [Account A]
- `1000 <= n < 1100`: [Account B, Account C]

This way, we can essentially eliminate the high cardinality tags and obtain meaningful insights from the metrics such as:

- How many accounts are there with above 1000 purchases per minute?
- If we were to rate limit the API for too many purchase requests, what would be the limit value?

## Conclusion

It's always critical to think about the cost when adding metrics. High cardinality tags can be the cause of unexpectedly high invoices from observability vendors like NewRelic and Datadog. If this is happening, it's always worth backtracking from what you really want to measure to what kind of metric you need to use.
