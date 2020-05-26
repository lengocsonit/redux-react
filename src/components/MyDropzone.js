import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import FileManager, { Permissions } from 'devextreme-react/file-manager';

function MyDropzone() {
    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
        console.log(acceptedFiles)
    }, [])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    return (
        <div>
            <h1>Vung khong upload duoc</h1>
            <h1>Vung khong upload duoc</h1>
            <h1>Vung khong upload duoc</h1>
            <div {...getRootProps()}>
            <FileManager />
            <input {...getInputProps({
                onClick: event => {
                    event.preventDefault()
                }
            })} />
            {
                isDragActive ?
                    <p>Drop the files here ...</p> :
                    <p>Drag 'n' drop some files here, or click to select files</p>
            }
        </div>
        </div>
    )
}

export default MyDropzone