SERVER-SIDE: 
app.use(express.static('src'));
app.use(cors()); 

mongoose.connect(
  "mongodb+srv://sher:pw@cluster0.yu5pb2m.mongodb.net/?retryWrites=true&w=majority"
);

different URL from mongoDB compass 

https://www.youtube.com/watch?v=W5oawMJaXbU credit for glitch effect 
https://codepen.io/lincohn/pen/JjPZgXw for the effect rare card name 
blue pastel buttons from https://codepen.io/brendinventer/pen/YzwOyEr 
top is bootstrap 

2h for json etc most of the time perfecting css

.env v troublesome for vercel and render, must remember add env variables in render, and vercel no clue why its bugging out. tried CI = false for env variables