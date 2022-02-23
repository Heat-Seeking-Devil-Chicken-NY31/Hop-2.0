import React from "react";

function Filters(props) {

  function handleChange(e, field) {
    let updatedValues = {...props.filterValues};
    updatedValues[field] = e.target.value;
    props.setFilters(updatedValues);

  };

  // const { city, title, hourly_rate_max, hourly_rate_min, description } = req.body;
  return (
    <div>
      <form className="m-auto w-100 d-flex justify-content-center">
          <label>
            City:
             <input type = "text" value = {props.filterValues.city} onChange = {(e) => handleChange(e, 'city')}></input>
          </label>
          <label>
            Title:
            <input type = "text" value = {props.filterValues.title} onChange = {(e) => handleChange(e, 'title')}></input>
          </label>
          <label>
            Minimum Rate:
            <input type = "number" min = "0" step = "10" value = {props.filterValues.hourly_rate_min} onChange = {(e) => handleChange(e, 'hourly_rate_min')}></input>
          </label>
          <label>
            Maximum Rate:
            <input type = "number" min = "0" step = "10" value = {props.filterValues.hourly_rate_max} onChange = {(e) => handleChange(e, 'hourly_rate_max')}></input>
          </label>
          <label>
            Description:
            <input type = "text" value = {props.filterValues.description} onChange = {(e) => handleChange(e, 'description')}></input>
          </label>
          <input className="btn-primary" type="button" value = "Filter" onClick = {props.getFilteredData} />
        
      </form>
    </div>
  );
}

export default Filters;
