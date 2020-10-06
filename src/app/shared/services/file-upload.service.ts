import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor() { }

  getFilesInfo(event, maxSize= 10, format= 'MB', maxFiles= 100) {
    const result = {
      error: false,
      maxFilesError: false,
      maxFilesErrorMsg: '',
      files: []
    };
    const files = [];
    if (event.target.files && event.target.files.length > 0) {
      if (event.target.files.length > maxFiles) {
        result['error'] = true;
        result['maxFilesError'] = true;
        result['maxFilesErrorMsg'] = 'Error (Max Files): exceed max files limit of ' + maxFiles + '( " + event.target.files.length + " )';
      }
      for (const file of event.target.files) {
        const reader = new FileReader();
        let fileInfo = {file: file};
        fileInfo = Object.assign(fileInfo, this.isValidFileSize(
          file, maxSize, format));
        if (fileInfo['fileSizeError']) {
          result['error'] = true;
        }
        reader.onload = () => {
          fileInfo = Object.assign(fileInfo, {
            name: file.name,
            type: file.type,
            url: reader.result
          });
          files.push(fileInfo);
        };
        reader.readAsDataURL(file);
      }
    }
    result['files'] = files;
    return result;
  }

  private isValidFileSize(file, maxSize, format) {
    let fileSize;
    if (format === 'GB') {
      fileSize = file.size / (1024 * 1000 * 1000);
    } else if (format === 'MB') {
      fileSize = file.size / (1024 * 1000);
    } else if (format === 'KB') {
      fileSize = file.size / 1024;
    }
    const size = Math.round(fileSize * 100) / 100;
    if (size > maxSize) {
      return {
        fileSizeError: true,
        fileSizeErrorMsg: 'Error (File Size): ' + file.name + ': exceed file size limit of '
        + maxSize + format + ' ( ' + size + format + ' )'
      };
    }
    return {fileSizeError: false, fileSizeErrorMsg: '', 'filesize': fileSize };
  }

}

