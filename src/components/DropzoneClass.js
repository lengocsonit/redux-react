
import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import FileManagerUpload from './FileManagerUpload'

export default class DropzoneClass extends Component {

    render() {
        return (

            <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
                {({ getRootProps, getInputProps }) => (
                    <section>
                        <div {...getRootProps()}>
                            <FileManagerUpload />
                            <input {...getInputProps()} />
                            <p>Drag 'n' drop some files here, or click to select files</p>
                        </div>
                    </section>
                )}
            </Dropzone>
        )
    }
}
