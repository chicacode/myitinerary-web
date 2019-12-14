exports.infoNosotros = (req, res) => {
    res.render('nosotros', {
        pagina: 'Sobre Nosotros' // un segundo parametro como objeto
    }); // aqui va a buscar las carpetas 
}