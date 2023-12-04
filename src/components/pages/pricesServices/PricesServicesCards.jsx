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
            <Typography gutterBottom variant="h5" component="div">
              « Juste moi »<br></br> 130 euros
            </Typography>
            <Typography variant="body2" color="text.secondary">
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
            <Typography gutterBottom variant="h5" component="div">
              « Pour deux »<br></br> 195 euros
            </Typography>
            <Typography variant="body2" color="text.secondary">
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
            <Typography gutterBottom variant="h5" component="div">
              « Famille »<br></br> 220 euros
            </Typography>
            <Typography variant="body2" color="text.secondary">
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
            <Typography gutterBottom variant="h5" component="div">
              « Il était une fois »<br></br> 160 euros
            </Typography>
            <Typography variant="body2" color="text.secondary">
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
            <Typography gutterBottom variant="h5" component="div">
              « Mon bébé »<br></br> 100 euros
            </Typography>
            <Typography variant="body2" color="text.secondary">
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
            <Typography gutterBottom variant="h5" component="div">
              « J’immortalise l’événement »<br></br> sur mesure
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Prestation de mariage ou baptême sur devis
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
