//Import PizzaSizes and display on the site with props
const SelectPizzaSizes = (props) => {

const handleRadioChange= (event)=>{ 
    console.log("data-value : ", event.target.getAttribute("data-value"));
    props.RadioButtonSelected(event.target.getAttribute("data-value"));
}

  return (
    <>
      <div className="SelectPizzaContainer">
        <div className="SelectPizzaRadioButtons">
          <RadioButtons
            id="radioOption1"
            name="myRadioGroup"
            label="Küçük"
            value="small"
            checked={selectedOption === "radioOption1"}
            onChange={handleRadioChange}
          />
        </div>
      </div>
    </>
  );
};

export default SelectPizzaSizes;

/* <h2>Boyut Seç</h2>
<RadioButtons
  id="radioOption1"
  name="myRadioGroup"
  label="Küçük"
  checked={selectedOption === "radioOption1"}
  onChange={handleRadioChange}
/>
<RadioButtons
  id="radioOption2"
  name="myRadioGroup"
  label="Orta"
  checked={selectedOption === "radioOption2"}
  onChange={handleRadioChange}
/>
<RadioButtons
  id="radioOption3"
  name="myRadioGroup"
  label="Büyük"
  checked={selectedOption === "radioOption3"}
  onChange={handleRadioChange}

</div> */
