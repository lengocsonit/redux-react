import React from 'react';

import FileManager, { Permissions } from 'devextreme-react/file-manager';
import RemoteFileSystemProvider from 'devextreme/file_management/remote_provider';
import { Popup } from 'devextreme-react/popup';
import Dropzone from 'react-dropzone'
import CustomFileSystemProvider from "devextreme/file_management/custom_provider"

const remoteProvider = new RemoteFileSystemProvider({
    endpointUrl: 'https://js.devexpress.com/Demos/Mvc/api/file-manager-file-system-images'
});

class FileManagerUpload extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentPath: 'Widescreen',
            popupVisible: false,
            imageItemToDisplay: {}
        };

        this.fileManagerRef = React.createRef()

        this.fileSystemProvider = new CustomFileSystemProvider({
            getItems: function (pathInfo) {
                console.log("getItems")
            },
            renameItem: function (item, name) {
                // Your code goes here
            },
            createDirectory: function (parentDir, name) {
                // Your code goes here
            },
            deleteItem: function (item) {
                // Your code goes here
            },
            moveItem: function (item, destinationDir) {
                // Your code goes here
            },
            copyItem: function (item, destinationDir) {
                // Your code goes here
            },
            uploadFileChunk: function (fileData, chunksInfo, destinationDir) {
                console.log("Upload handle");
                console.log(fileData)
                // Your code goes here
            },
            abortFileUpload: function (fileData, chunksInfo, destinationDir) {
                // Your code goes here
            },
            uploadChunkSize: 1000
        })


        this.displayImagePopup = this.displayImagePopup.bind(this);
        this.hideImagePopup = this.hideImagePopup.bind(this);
        this.onCurrentDirectoryChanged = this.onCurrentDirectoryChanged.bind(this);
    }

    displayImagePopup(e) {
        this.setState({
            popupVisible: true,
            imageItemToDisplay: {
                name: e.fileItem.name,
                url: e.fileItem.dataItem.url
            }
        });
    }

    hideImagePopup() {
        this.setState({
            popupVisible: false
        });
    }

    onCurrentDirectoryChanged(e) {
        this.setState({
            currentPath: e.component.option('currentPath')
        });
    }

    render() {
        return (
            <div>
                <Dropzone onDrop={acceptedFiles => {
                    console.log("Drag and drop");
                    this.fileSystemProvider.uploadFileChunk(acceptedFiles);
                    this.fileManagerRef.current.instance.refresh()
                }}>
                    {({ getRootProps, getInputProps }) => (
                        <section>
                            <div {...getRootProps()}>
                                <FileManager
                                    ref={this.fileManagerRef}
                                    currentPath={this.state.currentPath}
                                    fileSystemProvider={this.fileSystemProvider}
                                    onSelectedFileOpened={this.displayImagePopup}
                                    onCurrentDirectoryChanged={this.onCurrentDirectoryChanged}>
                                    <Permissions
                                        create={true}
                                        copy={true}
                                        move={true}
                                        delete={true}
                                        rename={true}
                                        upload={true}
                                        download={true}>
                                    </Permissions>
                                </FileManager>
                                <input {...getInputProps({
                                    onClick: (event) => event.preventDefault()
                                })} />
                                <p>Drag 'n' drop some files here, or click to select files</p>
                            </div>
                        </section>
                    )}
                </Dropzone>


                <Popup
                    maxHeight={600}
                    closeOnOutsideClick={true}
                    title={this.state.imageItemToDisplay.name}
                    visible={this.state.popupVisible}
                    onHiding={this.hideImagePopup}
                    className="photo-popup-content">

                    <img src={this.state.imageItemToDisplay.url} className="photo-popup-image" />
                </Popup>
            </div>
        );
    }
}

export default FileManagerUpload;
