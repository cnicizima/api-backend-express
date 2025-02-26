export default function createUserController(req, res) {
    return res.json({ 
      message: 'Resposta do router POST /user/',
      user: {
        id: 1,
        name: 'Ciro Nicizima',
        email: 'cironicizima@gmail.com'
      }    
    });
  }