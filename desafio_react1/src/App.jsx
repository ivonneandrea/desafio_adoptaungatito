import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header"
import MyCard from "./components/MyCard"
import Footer from "./components/Footer"


function App() {
  return (
    <>

    <section className="header">
         <Header titulo="Adopta un gatito" />
    </section>
   



<section className="container">

<article className="cat-card">

      <MyCard
       image= "https://images.pexels.com/photos/2071873/pexels-photo-2071873.jpeg?auto=compress&cs=tinysrgb&w=400"
        name= "Gohan" 
        description= "Un gatito de tamaño pequeño, amigable con los niños y adultos. De un corazon hermoso" 
        pinturaButton = "danger" 
        textoButton= "Gato pelo corto" 
        />
        
  </article>

<article className="cat-card">
      <MyCard
        image = "https://images.pexels.com/photos/177809/pexels-photo-177809.jpeg?auto=compress&cs=tinysrgb&w=400" 
        name= " Bartolo" 
        description= " Lleno de energia y listo para jugar" 
        pinturaButton = "success" 
        textoButton = "Gato Angora"
        />

</article>

<article className="cat-card">
      <MyCard
        image = "https://images.pexels.com/photos/1643457/pexels-photo-1643457.jpeg?auto=compress&cs=tinysrgb&w=400" 
        name= "Messi" 
        description= "Es jugueton, amogable y se lleva bien con los niños y otros animales. " 
        pinturaButton = "primary" 
        textoButton  = " Gato Pelusa"
        />
    
    </article>

  <article className="cat-card">
      <MyCard
        image = "https://images.pexels.com/photos/774731/pexels-photo-774731.jpeg?auto=compress&cs=tinysrgb&w=400" 
        name= "Princesa" 
        description= "Es juguetona, amigable y cariñosa" 
        pinturaButton = "warning " 
        textoButton  = "Gato Angora"
      />

</article>

</section>
    
        <Footer lineFooter="Explora nuestra galeria de adopción de gatos para encontrar a tu compañero perfecto. Tenemos una variedad de gatitos con diferentes personalidades y tamaños, todos en busca de un hogar amoroso. Cada imagen captura su esencia única. Adopta un gato y brindale una segunda oportunidad .Encuentra a tu compañero peludo para siempre."
         />

         </>
     
  
  );
}

export default App
