import React from 'react'
import { Button, makeStyles, Table, TableCell, TableRow, TableHead, TableBody } from '@material-ui/core'
import { categories } from '../constants/data';
import { NavLink } from 'react-router-dom';
const useStyle = makeStyles({
    create: {
        margin: '20px 10px ',
        width: '80%',
    },
    navlink:{
        textDecoration:'none',
        color:'inherited'
      
    },
    table:{
        borderRight:'1px solid rgba(224, 224, 224, 1)',
        minWidth:'100px'
    },
 
});

function Categories() {
    const classes = useStyle();

    return (<>

      <NavLink className={classes.navlink} exact to='/create'> <Button className={classes.create} variant="contained" color="primary">CreatBlog</Button> </NavLink>

        <Table className ={classes.table}>
            <TableHead>
                <TableRow>
                    <TableCell>
                      <NavLink to={'/'} className={classes.navlink}> All Categories</NavLink>  
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>

                {
                    categories.map((val, index) => {
                        return <TableRow>
                            <TableCell>
                                <NavLink  exact to={`/?category=${val}`} className={classes.navlink}> {val} </NavLink>
                            </TableCell>
                        </TableRow>

                    })
                }
            </TableBody>
        </Table>

    </>

    )
}

export default Categories
