import React, {useState} from 'react'
import { Button, ButtonGroup, withStyles } from "@material-ui/core";
import './css/standings.scss'

const StyledButton = withStyles({
    root: {
      background: "#00000085",
      border: 0,
      color: "#f5f5f5",
      padding: "0 1em 0 1em",
      borderRadius: "2em",
      boxShadow: "0 3px 5px 2px rgba(6, 6, 6, .2)"
    },
    label: {
      textTransform: "capitalize",
      margin: 0,
      fontFamily: "Orbitron",
      fontSize: "0.8em"
    }
  })(Button);

export const Pagination = ({ standingsPerPage, totalStandings, paginate }) => {
    const pageNumbers = [];

    for(let i=1; i <= Math.ceil(totalStandings / standingsPerPage); i++){
        pageNumbers.push(i);
    }

    return (
        <ButtonGroup id="button">
            {pageNumbers.map(number => (
                <StyledButton key={number} size="small" onClick={() => paginate(number)} href='!#'>
                    {number}
                </StyledButton>
           ))}    
        </ButtonGroup>
    )
}

export default Pagination