import React from 'react'
import pablo from '../assets/perfil_pablo.jpg'
import anael from '../assets/perfil_anael.jpg'
import { Grid } from '@mui/material'
import { Link, Navigate } from "react-router-dom"
import { useNavigate, useParams } from 'react-router-dom'
import { Card as CardPrime } from 'primereact/card';
import { Divider } from 'primereact/divider';
export function Cards() {
    const navigate = useNavigate()
  

    const redirect = () => {
  
    Navigate('/pablo_page')


    }
  return (
    
    <div className='container '>
        <CardPrime title=""  className="md:w-25rem " >
        <Grid container spacing={3} sx={{ justifyContent: 'center',alignItems: 'center'  }}>
            <Grid item md={4} rowSpacing={5} sx={{ width: 200, my:5, borderRadius:'20px', borderColor: 'primary.main', cursor:'pointer' }} >
                <div className='animate__animated animate__bounceInLeft' onClick={() => navigate('/pablo_page')} >
                    <img className='rounded-full' src={pablo} alt='img_perfil' ></img>
                    <h1 className='card-title center p-card-title'>Pablo</h1>
                    <p class="p-card-subtitle">
                        El pablo A.K.A "El Conserje"
                    </p>
                </div>
                {/* <Link  to="/pablo_page"></Link> */}
                
            </Grid>
           
            <Grid item md={4} sx={{ width: 200, my:5 }}>
                <img className='' src={anael} alt='img_perfil'></img>
                < h4 className='card-title'>Anael</h4>
                <p>
                    El pablo A.K.A "Ana"
                </p>
            </Grid>
        </Grid>

        </CardPrime>
        
        {/* <div className='' >
            <div className='row'>
                <div className='col-6'>
                    <img className='' src={pablo} alt='img_perfil' ></img>
                    <h4 className='card-title'>Pablo</h4>
                    <p>
                        El pablo A.K.A "El Conserje"
                    </p>
                </div>
                <div className='col-6'>
                    <img className='' src={anael} alt='img_perfil'></img>
                    < h4 className='card-title'>Anael</h4>
                    <p>
                        El pablo A.K.A "Ana"
                    </p>
                </div>
            </div>
        </div> */}
            
    </div>
  )
}

