import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Me from "../../../assets/me_presentation.jpg";
import Couple from "../../../assets/couple_presentation.jpg";
import Family from "../../../assets/family_presentation.jpg";
import Pregnancy from "../../../assets/pregnancy_presentation.jpg";
import Baby from "../../../assets/baby_presentation.jpg";
import MyEvent from "../../../assets/marriage_presentation.jpg";
import "./pricesServicesCards.css";

export default function PricesServicesCards() {
  return (
    <div className="cards-container">
      {/* *******CARD 1 *********** */}   
      <Card className="card-item">
        <CardActionArea>
          <CardMedia
            component="img"
            image={Me}
            alt="femme"
            className="card-img"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" className="prices_card_title">
              « Juste moi »<br></br> 130 euros
            </Typography>
            <Typography variant="body2" color="text.secondary" className="text_sec_prices">
              Séance pour une personne, en extérieur ou en studio
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      {/* *******CARD 2 ****************** */}
      <Card className="card-item">
        <CardActionArea>
          <CardMedia
            component="img"
            image={Couple}
            alt="couple"
            className="card-img"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" className="prices_card_title">
              « Pour deux »<br></br> 195 euros
            </Typography>
            <Typography variant="body2" color="text.secondary" className="text_sec_prices">
              Pour deux personnes, en extérieur ou en studio
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      {/* *******CARD 3****************** */}

      <Card className="card-item">
        <CardActionArea>
          <CardMedia
            component="img"
            image={Family}
            alt="famille"
            className="card-img"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" className="prices_card_title">
              « Famille »<br></br> 220 euros
            </Typography>
            <Typography variant="body2" color="text.secondary" className="text_sec_prices">
              Pour la famille ou les amis jusqu’à 4 personnes,en extérieur ou en
              studio 30 euros en supplément par personne au-delà de 4 (hormis
              enfant jusqu’à 2 ans)
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      {/* *******CARD 4****************** */}
      <Card className="card-item">
        <CardActionArea>
          <CardMedia
            component="img"
            image={Pregnancy}
            alt="grossesse"
            className="card-img"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" className="prices_card_title">
              « Il était une fois »<br></br> 160 euros
            </Typography>
            <Typography variant="body2" color="text.secondary" className="text_sec_prices">
              Photo de grossesse (À votre domicile, en extérieur ou en studio)
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      {/* *******CARD 5****************** */}
      <Card className="card-item">
        <CardActionArea>
          <CardMedia
            component="img"
            image={Baby}
            alt="bébé"
            className="card-img"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" className="prices_card_title">
              « Mon bébé »<br></br> 100 euros
            </Typography>
            <Typography variant="body2" color="text.secondary" className="text_sec_prices">
              Photo d’enfant jusqu’à 3 ans (photo à domicile)
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      {/* *******CARD 6****************** */}
      <Card className="card-item">
        <CardActionArea>
          <CardMedia
            component="img"
            image={MyEvent}
            alt="evenement"
            className="card-img"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" className="prices_card_title">
              « J’immortalise l’événement »<br></br> sur mesure
            </Typography>
            <Typography variant="body2" color="text.secondary" className="text_sec_prices">
              Prestation de mariage ou baptême sur devis
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      
    </div>
  );
}
