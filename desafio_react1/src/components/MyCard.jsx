import Card from 'react-bootstrap/Card';
import Tags from './Tags';


function MyCard ({image, name,description,pinturaButton,textoButton}) {
return(
<Card style={{ width: '18rem'}}>
    
    <Card.Img variant="top" src={image} />
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text> {description} </Card.Text>
      <Tags pinturaButton ={ pinturaButton} textoButton={textoButton}/>
    </Card.Body>
  </Card>

)

}


export default MyCard;
