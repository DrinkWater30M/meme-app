import React from "react";
import {Container, Row, Col, Image} from 'react-bootstrap';

function Gallery({imageUrls}){
    const col = 5;
    const row = imageUrls.length;
    let gallery = [];
    for(let i = 0; i < row; i++){
        let rowGallery = [];
        for(let j = 0; j < col; j++){
            let item = <Col key={j}><Image fluid={true} thumbnail={true} src={imageUrls[i*5+j]} alt="meme" /></Col>;
            rowGallery.push(item);
        }
        let row = <Row key={i}>{rowGallery}</Row>
        gallery.push(row);
    }
    return (
        <Container>{gallery}</Container>
    )
}

export default Gallery;