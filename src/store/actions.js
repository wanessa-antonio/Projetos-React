
import * as types from './types.js';
import * as pinService from '../services/pinService.js'

const sleep = (time) => (
    new Promise(resolve => {
        setTimeout(resolve, time)
    })
)
export const openModalSavePinAction = (pinId) => ({
    type: types.openModalSavePinType,
    payload: pinId
});

export const openModalCreateFolder = () => ({
    type: types.openModalCreateFolderType
});

export const closeModalsAction = () => ({
    type: types.closeModalsType
});

export const fetchFoldersInitAction = () => ({
    type: types.fetchFoldersInitType

})

;export const fetchFoldersSuccessAction = (folders) => ({
    type: types.fetchFoldersSuccessType,
    payload: folders
});

export const fetchFoldersAction = async (dispatch) => {
    dispatch(fetchFoldersInitAction());
    const folders = await pinService.getFolders();
    dispatch(fetchFoldersSuccessAction(folders))
   
}

//-----

export const saveFolderInitAction = () => ({
    type: types.saveFolderInitType

})

;export const saveFolderSuccessAction = (folder) => ({
    type: types.saveFolderSuccessType,
    payload: folder
});

export const saveFolderAction = async (dispatch, folderName, pinId) => {
    dispatch(saveFolderInitAction());

    //demore 1 segundo
    await sleep(1000);


    const newFolder = await pinService.saveFolder(folderName);
    const folder = await pinService.savePinInFolder(newFolder.id, pinId);
    dispatch(saveFolderSuccessAction(newFolder));
   
};

//----

export const savePinInFolderInitAction = () => ({
    type: types.savePinInFolderInitType

})

;export const savePinInFolderSuccessAction = (folders) => ({
    type: types.savePinInFolderSuccessType,
    payload: folders,
   
});

export const savePinInFolderAction = async ( dispatch, pinId, folderId ) => {
    dispatch(savePinInFolderInitAction());

    await sleep(1000);

    await pinService.savePinInFolder(folderId, pinId)
    const folders = await pinService.getFolders();
    dispatch(savePinInFolderSuccessAction(folders))
    //console.log(pinId, folderId)
}

//-----

export const fetchPinsInitAction = () => ({
    type: types.fetchPinsInitType
});

export const fetchPinsSuccessAction = (pinsData) => ({
    type: types.fetchPinsSuccessType,
    payload: pinsData
});

export const fetchPinsAction = async (dispatch) => {
    dispatch(fetchPinsInitAction());
    await sleep(1000);
    const pinsData = await pinService.getPins();
    dispatch(fetchPinsSuccessAction(pinsData));
}