# Demo [Google AI](https://ai.google.dev/docs)

## 	models/gemini-pro-vision - Text and images

### Based on images provided on assets directory (mountains), below are the responses from the model:
- Prompt: "What's different between these pictures?"
- Response: "The first picture is of a volcano. The second picture is of a snow-capped mountain range."

### Based on images provided on assets directory (birds), below are the responses from the model:
- Prompt: "What's the animals name and count the numbers, on these pictures?"
- ❌ 1st Response: "The first picture is of three parrots and the second picture is of `six` birds"
- ✅ 2nd Response: "The first picture is of three parrots. The second picture is of `seven` birds."

Run code
```javascript
node image.js
```

## models/gemini-pro - Text generation
- Prompt: "Write a poem universe under 100 words."
- Response: 
```
In the cosmos vast, where stars ignite,
A universe lies, a wondrous sight.
Planets dance in celestial grace,
Guided by gravity's embrace.

Nebulae glow with vibrant hue,
Painting the canvas of the night's view.
Galaxies swirl, a cosmic dance,
A celestial symphony in endless trance.
```

Run code
```javascript
node app.js
```

## 	models/gemini-pro-vision - Multimodal
- Prompt: "Write a short poem under 100 words, based on this picture."
- Response: 
```
Three parrots sit on a branch,
One blue, one yellow, one green.
They talk and they laugh,
And they make a lot of noise.

The blue parrot says,
"I'm the best parrot in the world!"
The yellow parrot says,
"No, I'm the best!"
The green parrot says,
"We're all the best!"

And they all laugh again.
They're happy to be friends,
And they know that they're all special in their own way.
```

Run code
```javascript
node multimodal.js
```

## models/gemini-pro - Conversations (chat)

- Demo chat [here](https://vertexai.prasetia.me/vertexai)
- Sourcecode [here](https://github.com/ekaone/chatbot-vertexai)