---
layout: post
title: "Rubber Ducking with LLMs"
image: /assets/images/posts/2025-12-07-rubber-ducking-with-llms/hero.jpg
date: 2025-12-07 10:00:00 +0800
categories: [software-engineering, productivity]
tags: [llm, debugging, productivity, chatgpt, claude, copilot]
author: Sudaraka Jayathilaka
excerpt: "I've been using LLMs for debugging for a while now. Here's how they've changed the way I approach rubber duck debugging."
---

I've been using LLMs for debugging for a while now. Here's how they've changed the way I approach rubber duck debugging.

## The Classic Rubber Duck

If you've been programming for a while, you've probably heard of rubber duck debugging. When you're stuck on a bug, you explain your code line-by-line to an inanimate object—usually a rubber duck on your desk.

The idea is that explaining forces you to organize your thoughts. You can't just think "this should work" in your head. You have to actually say *why* it should work, and in doing so, you often spot the flaw yourself.

I've used this technique many times. Sometimes I'd talk to my screen. Sometimes I'd write it out in a comment. It works because it forces you to slow down and look at your code more carefully.

## Why It Works

There's actually some science behind this. When you speak or write, you're using different parts of your brain. This forces your brain to turn abstract thoughts into a coherent explanation. Teaching something (even to a duck) also forces you to find gaps in your own understanding. You can't explain what you don't fully understand.

We also tend to see what we *intended* to write rather than what's actually there. Explaining line-by-line forces a slower review that catches those mistakes.

## Enter the LLM

But here's the thing: a rubber duck just sits there. It doesn't respond. It doesn't ask questions.

LLMs change that completely. Instead of explaining to silence, you're now explaining to something that can validate your logic, ask clarifying questions, and point out patterns you might have missed. It's like having someone who never gets tired of your questions.

## How I Use It

I've noticed a big change in how I debug since I started using LLMs regularly. When I'm stuck, instead of spending 30 minutes Googling and browsing Stack Overflow, I can have a 2-minute conversation with an LLM. The context switching is minimal—I stay in my IDE or chat window.

The LLM can analyze stack traces and error logs instantly, often pointing me toward the root cause faster than traditional search.

But there's a catch. I spend less time *writing* code and more time *reviewing* what the LLM suggests. If you just ask the LLM to "fix it" and copy-paste the solution, you lose the benefit of rubber ducking. You might solve the problem, but you haven't understood *why* it broke or *how* it was fixed.

I've seen this pattern in teams: experienced developers use LLMs to *challenge* their logic, while junior developers sometimes use them to *outsource* the logic entirely.

## Three Ways I Interact with LLMs

To avoid the trap of lazy coding, I use three different approaches:

### LLM as a Socratic Tutor

When I'm learning something new or stuck on a logic error, I ask the LLM to guide me instead of giving me the answer:

```
I'm stuck on a logic error in this function. I'm going to explain my 
thought process line-by-line. Do NOT give me the code solution. Act as 
a Socratic tutor: listen to my explanation, and only ask clarifying 
questions if you spot a flaw in my logic. Guide me to find the bug myself.
```

The LLM asks questions that make me think, rather than just giving me answers.

### LLM as a Senior Software Engineer

When I have a solution but I'm not sure if it's the best approach, I use this for design decisions:

```
I'm planning to refactor this component using [Pattern X]. Here is my 
reasoning: [Explanation]. Act as a Senior Staff Engineer. Critique this 
approach. What edge cases am I missing? What are the performance 
implications? Be ruthless.
```

It's like having a code review before you even write the code.

### Asking LLM to clarify my thoughts

Sometimes I'm so confused that I can't even articulate the problem clearly. This is when I use this mode:

```
I'm going to ramble about a bug I'm facing. It's messy. Please listen 
to everything, then summarize my problem back to me in a clear, 
single-sentence problem statement.
```

The LLM takes my brain fog and distills it into clarity. Once I have a clear problem statement, I can usually solve it myself.

## Tool Selection

I've found that different tools work better for different scenarios. I prefer Claude/Gemini 3 for complex reasoning and architectural discussions. The larger context window makes it better when I need to explain an entire system.

ChatGPT is better for quick syntax checks or straightforward questions like "why is this regex failing?" It's faster and more direct for simple debugging tasks.

GitHub Copilot is great for in-editor suggestions, but less useful for the conversational rubber ducking approach.

## Team Considerations

If you're working in a team, there are a few things to keep in mind. Create a shared library of prompts that encourage thinking over copy-pasting. If someone uses an LLM to fix a bug, require them to explain the fix afterward. This ensures comprehension and prevents blind copy-pasting.

## Conclusion

Rubber duck debugging has been around for decades. LLMs haven't replaced it—they've upgraded it. The passive listener has become an intelligent collaborator.

But like any powerful tool, it can be misused. The difference between productive LLM use and lazy coding comes down to how you interact with it. Use it to challenge your thinking, not to avoid thinking altogether.

The next time you're stuck on a bug, try explaining it to an LLM using one of the approaches above. You might be surprised at how much faster you solve the problem—and how much more you understand about why it was broken in the first place.

