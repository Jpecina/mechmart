require('dotenv').config();
const express = require('express');
const {json} = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const passport = require('passport');
const massive = require('massive');
const Auth0Strategy = require('passport-auth0');
const CreateInitialSession = require('./middleware/session')
const cart_controllers = require('./controllers/cart_controllers');


const port = 3001;

const app = express();

const { 
  CONNECTION_STRING,
  DOMAIN,
  CLIENT_ID,
  CLIENT_SECRET,
  SESSION_SECRET} = process.env;

massive(process.env.CONNECTION_STRING).then(db => {
  app.set('db',db)
}).catch(console.log)

app.use(json());
app.use(cors());
app.use(
  session({
      secret:SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 100000
      }
  })
);
app.use(CreateInitialSession);
app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new Auth0Strategy ({
    domain:DOMAIN,
    clientSecret:CLIENT_SECRET,
    clientID:CLIENT_ID,
    scope:'openid profile',
    callbackURL: "/auth"
  },(accessToken, refreshToken, extraParams, profile, done)=>{
    console.log(profile)
    app
      .get('db')
      .getUserByAuthId(profile.id)
      .then(response => {
        if(!response[0]) {
          app.get('db')
             .createUserByAuthId([profile.id, profile.displayName])
             .then(created => done(null,created[0]))
        }else{
          console.log('response from db', response)
          return done(null,response[0])
        }
        });
  })
);

passport.serializeUser((user, done) => done(null,user) );
passport.deserializeUser((user, done) => done(null,user) );

app.get('/auth',passport.authenticate("auth0",{
  successRedirect: 'http://localhost:3000/#/',
  failureRedirect: 'http://localhost:300/#/login'
}
))

app.get('/api/me', (req,res)=>{
  if(req.user) res.status(200).json(req.user);
  else res.redirect('http://localhost:3000/#/login')
})

app.get('/api/logout', (req,res) => {
  req.session.destroy(()=>{
    res.redirect('http://localhost:3000/#/login')
  })
})

// get all users
app.get('/api/getusers',(req,res) => {
  app
  .get('db')
  .getUsers()
  .then(response => {
    res.status(200).json(response)
  })
  .catch(err => {
    res.status(500).json(response)
  })

})

app.get('/api/products',(req,res)=>{
    console.log(req)
  req.app
     .get('db')
     .getProducts()
     .then(response => {
       res.status(200).json(response)
     })
     .catch(err=>{
       res.status(500).json(err)
     })
});

// fetches product by id 

app.get('/api/product/:id',(req,res,next) => {
  app.get('db')
  .getProductById(req.params.id)
  .then(response => {
    res.status(200).json(response)
  })
  .catch(err=>{
    res.status(500).json(console.log(err))
  })
});

// get product by Brand

app.get('/api/products/:id',(req,res,next) => {
    app.get('db')
    .getProductsByBrand([req.params.id])
    .then(response => {
      console.log("products by brand success:", response)
      res.status(200).json(response)
    }).catch(err => {
      res.status(500).json(console.log(err))
    })
} )

// add Product to database

app.post('/api/products/add',(req,res)=>{
  req.app
     .get('db')
     .addUserItem([req.body.productName, req.body.productDescription, req.body.productPrice])
     .then(response => {
       res.status(200).json(response)
     })
     .catch(err => {
       res.status(500).json(err)
     })

});

// fetch cart in session

app.get("/api/cart", (req, res, next) => res.status(200).json(req.session.user))

//add item to cart

app.post('/api/cart',(req,res,next) => {
  req.session.user.cart.push(req.body)
  res.status(200).json(req.session.user)
} )

// deletes item from cart

app.delete('/api/cart/:id',cart_controllers.destroy)



app.listen(port, () => {
  console.log(`Listening on Port: ${port}`);
});