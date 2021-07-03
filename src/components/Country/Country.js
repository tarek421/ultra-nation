import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
   root: {
      maxWidth: 345,
   },
   media: {
      height: 140,
   },
});

const Country = ({ country }) => {
   console.log(country)
   const classes = useStyles();

   const { name, capital, population, flag, translations } = country;
   console.log(translations)
   return (
      <div className="col-md-4 mt-5">
         <Card className={classes.root}>
            <CardActionArea>
               <CardMedia
                  className={classes.media}
                  image={flag}
                  title="Contemplative Reptile"
               />
               <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                     {name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                  Capital: {capital}. Population: {population}
                  </Typography>
               </CardContent>
            </CardActionArea>
            <CardActions>
               <Button size="small" color="primary">
                  Detail
               </Button>
            </CardActions>
         </Card>
      </div>
   );
};

export default Country;