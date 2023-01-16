import React, { useEffect, useContext } from 'react';
import { Context } from '../context/ContextProvider';
import '../style.css';
import Card from './Card';

import { useDispatch, useSelector } from 'react-redux';
import { get_product, product_filter } from '../redux/actions/prodAction';


const Products = () => {
    const { selected } = useContext(Context);

    const { fetchedData, filterData, loading, error } = useSelector((store) => store.prodReducer);
    const data = filterData.length ? filterData : fetchedData;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(product_filter(selected))
    }, [selected])

    useEffect(() => {
        dispatch(get_product())
    }, [])

    return (
        <>
            <div className="products">
                {
                    loading ?
                        <p>Loading Products...</p>
                        : error ? <p>Error Occured while getting list!! XO</p>
                            :
                            data.map((item) => {
                                return (
                                    <Card item={item} key={item.id} />
                                )
                            })
                }
            </div>

        </>
    )
}

export default Products