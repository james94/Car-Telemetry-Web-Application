import React from 'react';
import Axios from 'axios';

class PlayVideoFromImages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [], // Initialize emtpy jpeg
            imageIndex: 0,
            error: ''
        }
        this.changeImage = this.changeImage.bind(this);
    }

    changeImage() {
        this.setState(({imageIndex}) => {
            //console.log("imageIndex: " + imageIndex);
            let nextImageIndex = ++imageIndex % this.state.images.length;
            //console.log("nextImageIndex: " + nextImageIndex);
            return { imageIndex: nextImageIndex};
        }, () => {
            this.timeout = setTimeout(
                this.changeImage,
                this.props.fps * 1000
            );
        });
    }

    async getImages() {
        try {
            let sensorDevice = this.props.sensorDevice;
            let res = await Axios.get('/api/sensor/' + sensorDevice); // send GET request for image index 0
            // console.log('RESPONSE', res);

            let images = res.data;
            // console.log('IMAGES', images);

            this.setState({
                images, error: ''
            });
        } catch (e) {
            this.setState({ error: `BRUTAL FAILURE: ${e}` });
        }
    }

    // When component renders for first time, componentDidMount() gets
    // called right after HTML from render finished loading
    componentDidMount() {
        this.getImages(); // Uses Axios to fetch initial image data from Express.js backend
        this.timeout = setTimeout(
            this.changeImage,
            this.props.fps * 1000
        );
    }

    // Component unmounting period occurs when component removed from DOM
    // componentWillUnmount right before component is removed from DOM
    componentWillUnmount() {
        if (this.timeout) {
            clearTimeout(this.timeout);
        }
    }

    render() {
    //     let imgSrcPath = this.state.images.path + this.state.images.filenames[0];
        return (
            <img src={this.state.images[this.state.imageIndex]} 
                 alt={this.props.alt} 
                 height={this.props.height} 
                 weight={this.props.width} 
            />
        );
    }
}

export default PlayVideoFromImages;