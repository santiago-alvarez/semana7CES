const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
   res.render('index', { title: 'Tarea semana 7', PageName: 'Living With Pug' });
});

router.post('/login', (req, res) => {
   const Name = req.body.Nombre;
   const Email = req.body.Correo;
   const Password = req.body.Contraseña;
   res.render('Sign_in',
      {
         Name: Name,
         Email: Email,
         Password: Password,
         error: false
      }
   )
});

router.post('/Principal', (req,res) =>{
   const Name = req.body.name2;
   const Correo = req.body.Correo;
   const Correo2 = req.body.correo2;
   const Password = req.body.Contraseña;
   const Password2 = req.body.contraseña2;

   if(Correo === Correo2 && Password === Password2){
      res.render('Principal', {
         Name: Name,
         Correo: Correo2,
         Password: Password2
      });
   }else{
      res.render('Sign_in', {error: true});
   }
});

router.get('/Contacto', (req, res)=>{
   res.render('Contacto');
});

router.get("/Foro", (req,res) =>{
   res.render('Foro')
})

router.get('/Principal', (req, res) =>{
   res.render('Principal',{Name: "Santiago"})
})

module.exports = router;