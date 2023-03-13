SERVER-SIDE: 
app.use(express.static('src'));
app.use(cors()); 

mongoose.connect(
  "mongodb+srv://sher:pw@cluster0.yu5pb2m.mongodb.net/?retryWrites=true&w=majority"
);

different URL from mongoDB compass 
