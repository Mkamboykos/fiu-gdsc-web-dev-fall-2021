import IconButton, {IconToggle} from '@material/react-icon-button';
import MaterialIcon from '@material/react-material-icon'
import React from 'react'
import Card from 'react-bootstrap/Card'
import './RecipeCard.css'



function RecipeCard() {
  return (
    <Card className = "margin">
      <Card.Img variant="top" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/210302-vegan-spiral-cover-cauliflower-pizza-086-eb-1626711437.jpg" />
      <div class= "heart-container">
        <div class="like-amount">2.1M</div>
          <IconButton>
          <IconToggle isOn>
            <MaterialIcon icon='favorite' />
          </IconToggle>
          <IconToggle>
            <MaterialIcon icon='favorite_border' />
          </IconToggle>
        </IconButton>
      </div>
      <Card.Body>
        <div class = "bookmark-container">
          <IconButton>
            <IconToggle isOn>
              <MaterialIcon icon='bookmark' />
            </IconToggle>
            <IconToggle>
              <MaterialIcon icon='bookmark_border' />
            </IconToggle>
        </IconButton>
        </div>
        <Card.Title>Recipe Name</Card.Title>
        <div class = "seperator"></div>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
//hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/210302-vegan-spiral-cover-cauliflower-pizza-086-eb-1626711437.jpg?crop=1.00xw:0.667xh;0.00170xw,0.240xh&resize=640:*
export default RecipeCard;
