import React, { Component } from 'react';
import axios from 'axios';
import { TextField, Button, Box } from '@mui/material';

class FileUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null
    };
  }

  handleFileChange = (e) => {
    this.setState({ file: e.target.files[0] });
  }

  handleFileUpload = () => {
    const formData = new FormData();
    formData.append('file', this.state.file);

    axios.post('https://adofm46-001-site1.ctempurl.com/api/file', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error(error);
    });
  }

  render() {
    return (
      <Box className="Box" sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', margin: 10 }}>
        <TextField type="file" onChange={this.handleFileChange} />
        <Button onClick={this.handleFileUpload}>Загрузить файл</Button>
      </Box>
    );
  }
}

export default FileUpload;
