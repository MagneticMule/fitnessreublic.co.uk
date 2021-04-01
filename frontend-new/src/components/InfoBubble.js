import React, {useState, useEffect} from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';


const Bubble = styled.div`

`;


const InfoBubble = () => {
  return (
    <Bubble>

              <ul className="actions">
                <li>
                  <Link
                    aria-label="Contact Blanka"
                    to="/membership"
                    className="button special arrow"
                  >
                    JOIN or RENEW NOW
                  </Link>
                </li>
              </ul>

      </Bubble>

  );
}


export default InfoBubble;