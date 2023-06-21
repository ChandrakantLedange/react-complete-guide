import classes from "./MealsSummary.module.css";
const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Food, Delivered To You.</h2>
      <p>
        Choose your favorite meal from our board selection of available meals
        and enjoy a delicious lunch our dinner at home.
      </p>
      <p>
        All our meals are cooked with high-quality and just in time of course by
        experienced chefs!
      </p>
    </section>
  );
};

export default MealsSummary;
