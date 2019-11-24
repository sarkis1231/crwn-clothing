import React, { Component } from 'react';
import SHOP_DATA from './shopData'
import CollectionPreview from '../../components/collection-preview/CollectionPreview'
import './shopPage.scss';

class ShopPage extends Component {

    state = {
        collections: SHOP_DATA
    }


    render() {
        const { collections } = this.state;
        return (
            <div className='shop-page'>
                {
                    collections.map(({ id, ...otherCollectionsProps }) => (
                        <CollectionPreview key={id} {...otherCollectionsProps} />
                    ))
                }
            </div>
        )
    }

}

export default ShopPage; 
