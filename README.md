WEBSITE: https://popmart-sim.vercel.app/ (Just give it a minute to load)
API: https://popmart-sim-api.onrender.com/api/popmarts

Inspiration: 
https://www.youtube.com/watch?v=W5oawMJaXbU credit for glitch effect 
https://codepen.io/lincohn/pen/JjPZgXw for the effect rare card name 
blue pastel buttons from https://codepen.io/brendinventer/pen/YzwOyEr 
top is bootstrap 

I organise all this junk later 

2h for json etc most of the time perfecting css


.env v troublesome for vercel and render, must remember add env variables in render, and vercel no clue why its bugging out. tried CI = false for env variables finally did npm audit fix --force works now 


Refused to load the font 'data:font/truetype;charset=utf-8;base64, because it violates the following Content Security Policy directive: "default-src 'none'". Note that 'font-src' was not explicitly set, so 'default-src' is used as a fallback.

 <meta http-equiv="Content-Security-Policy" content="
    default-src 'self';
    font-src 'self' data:;
    img-src 'self' *;
    style-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net;
    script-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net;
    manifest-src 'self';
  "/>

  lol at that self * 

When you call fetch("/api/popmarts") in your React code, it sends an HTTP GET request to your API to get a JSON response. However, since you're also serving your React app from the same server, the server is sending back the HTML file instead of the JSON response.

put my frontend into a static build folder for my backend to access, 
rn i should try changing the api route in Home.js to make it more "dynamic" ig but if it works it works
