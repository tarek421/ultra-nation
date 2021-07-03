import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ReactCircleModal from 'react-circle-modal'


const useStyles = makeStyles({
   root: {
      maxWidth: 345,
   },
   media: {
      height: 140,
   },
});

const Country = ({ country, detailCountry }) => {
   console.log(country)
   const classes = useStyles();
   const languages = country.languages[0].name;
   const currencies = country.currencies[0].name;
   const { name, capital, population, flag, region, numericCode} = country;
   return (
      <div className="col-md-4 mt-5">
         <ReactCircleModal
            backgroundColor="#97349a"
            toogleComponent={onClick => (

               <div>
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
                        <Button onClick={() => onClick(country)} size="small" color="primary">
                           Detail
                        </Button>
                     </CardActions>
                  </Card>
               </div>

            )}
            // Optional fields and their default values
            offsetX={0}
            offsetY={0}
         >
            {(onClick) => (
               <div style={{ backgroundColor: '#fff', padding: '1em', margin:'10px auto' }}>
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
                           <Typography variant="body2" color="textSecondary" component="p">
                              Language: {languages}. currency: {currencies}
                           </Typography>
                           <Typography variant="body2" color="textSecondary" component="p">
                           region: {region}. numericCode: {numericCode}
                           </Typography>
                        </CardContent>
                     </CardActionArea>
                     <CardActions>
                        <Button variant="contained" color="secondary" onClick={onClick}>
                           close
                        </Button>
                     </CardActions>
                  </Card>
               </div>
            )}
         </ReactCircleModal>


      </div>
   );
};

export default Country;