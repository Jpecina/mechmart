module.exports = {
    destroy: (req,res,next) => {
      const { id } = req.params;
      const { cart } = req.session.user;
  
        const i = cart.findIndex((item) => item.id == id);
        cart.splice(i,1);
        res.status(200).json(req.session.user);
      }
    }
  