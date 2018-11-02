import React from 'react'
import classes from './Bread.css';
import BreadIngredients from './BreadIngredients/BreadIngredients'

const bread = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map(ingKey => {
            return [...Array(props.ingredients[ingKey])]
                .map((_, i) => {
                    // if()
                    return <BreadIngredients key={ingKey + i} type={ingKey} />
                });
        })
        .reduce((arr, el) => {
            return arr.concat(el);
        }, []);

        if(transformedIngredients.length === 0) {
            transformedIngredients = <h3>Buy bread, else comot for here; *!* gbe body e!</h3>
        }
        console.log(transformedIngredients);


    return (
        <div className={classes.Bread}>
            <BreadIngredients type="bread-top" />
            {transformedIngredients}
            <BreadIngredients type="bread-bottom" />
        </div>
    );
}

export default bread;