import React, {useState} from 'react';
// material ui imports
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: { padding: '2px 4px', display: 'flex', 
  alignItems: 'center', width: '90%', marginLeft: '3.5rem' },
  input: { marginLeft: theme.spacing(1), flex: 1},
  iconButton: { padding: 10 }, divider: { height: 28, margin: 4 }
}));

const maturityMarks = [
    { value: 0, label: '0' },
    { value: 100, label: '100'}
];
const yieldMarks = [
    { value: 0, label: '0' },
    { value: 1 }, { value: 2, label: '2' },
    { value: 3 }, { value: 4, label:  '4' },
    { value: 5 }, { value: 6, label: '6'}
];

function Search({onChange}) {
  const classes = useStyles();
  const [ShowFilters, setShowFilters] = useState(false);
  const [industry, setIndustry] = useState('');
  const [rating, setRating] = useState('');

  const valuetext = value => value;
  const filtersClick = () => !ShowFilters ? setShowFilters(true) 
  : setShowFilters(false);
  const searchClick = event => event.preventDefault();
  const changeIndustry = event => setIndustry(event.target.value);
  const changeRating = event => setRating(event.target.value);

  return (
    <>
    <h3 style={{textAlign: 'left', paddingLeft: '4rem', 
    color: '#444', marginBottom: '8px'}}>
        Search
    </h3>
    <Paper component="form" className={classes.root}>
      <IconButton  onClick={filtersClick} 
      className={classes.iconButton} aria-label="menu">
        <MenuIcon />
      </IconButton>
      <InputBase
        className={classes.input}
        placeholder="Search for bonds"
        inputProps={{ 'aria-label': 'search for bonds' }}
        onChange={onChange}
      />
      <IconButton type="submit" className={classes.iconButton} 
      aria-label="search" onClick={searchClick}>
        <SearchIcon />
      </IconButton>
    </Paper>

    { ShowFilters && <Grid container spacing={0} 
    style={{paddingLeft: '2rem', marginTop: '1.2rem'}}>
        
        <Grid item xs={3}>
            <FormControl style={{ width: '80%' }}>
            <InputLabel>Industry</InputLabel>
            <Select
            native
            value={industry}
            onChange={changeIndustry}
            inputProps={{
                name: 'industry',
                id: 'industry-native-simple',
            }}>
            <option aria-label="None" value="" />
            <option value="finance">Financial</option>
            <option value="tech">Technology</option>
            <option value="industrials">Industrials</option>
            <option value="chem">Chemicals</option>
            <option value="service">Service</option>
            <option value="pharma">Pharmacueticals</option>
            </Select>
            </FormControl>
        </Grid>

        <Grid item xs={3}>
            <FormControl style={{ width: '70%' }}>
            <InputLabel>Rating</InputLabel>
            <Select
            native
            value={rating}
            onChange={changeRating}
            inputProps={{
                name: 'rating',
                id: 'rating-native-simple',
            }}>
            <option aria-label="None" value="" />
            <option value="AAA">AAA</option>
            <option value="AA">AA</option>
            <option value="A">A</option>
            <option value="BBB">BBB</option>
            <option value="BB">BB</option>
            <option value="B">B</option>
            <option value="CCC">CCC</option>
            <option value="CC">CC</option>
            <option value="C">C</option>
            </Select>
            </FormControl>
        </Grid>
    
        <Grid item xs={3}>
            <Typography id="discrete-slider-custom" 
            gutterBottom style={{color: '#777', 
            fontSize: '12px'}}>
                Maturity (0-100)
            </Typography>
            <Slider
            defaultValue={40}
            getAriaValueText={valuetext}
            aria-labelledby="discrete-slider-custom"
            step={10} valueLabelDisplay="auto"
            marks={maturityMarks}
            style={{width: '80%'}} />
        </Grid>

        <Grid item xs={3}>
            <Typography id="discrete-slider-small-steps" 
            gutterBottom style={{color: '#777', 
            fontSize: '12px'}}>
                Yield (0-6)
            </Typography>
            <Slider
            defaultValue={3}
            getAriaValueText={valuetext}
            aria-labelledby="discrete-slider-small-steps"
            step={1} marks={yieldMarks} min={0} max={6}
            valueLabelDisplay="auto"
            style={{width: '60%'}}
            />
        </Grid>
    </Grid>}
    </>
  );
}

export default Search; 