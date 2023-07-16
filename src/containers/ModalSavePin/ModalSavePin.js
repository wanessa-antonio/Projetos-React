import { useEffect, useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { Modal } from '../../components/Modal/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from '../../components/Button/Button'; // conferir local
import { useAppContext } from '../../store/AppContext';  // conferir local
import { closeModalsAction } from '../../store/actions';  // conferir local
import { fetchFoldersAction, openModalCreateFolder,savePinInFolderAction } from '../../store/actions';

export const ModalSavePin = ({ open }) => {
    const { state, dispatch } = useAppContext();
    const [ itensLoading, setItensLoading ] = useState({});

    const handleClose = () => {
        console.log('fechando!!');
        dispatch(closeModalsAction())
    }

    const handleClickCreateFolder = () => {
        console.log('Clicou em criar pasta')
        dispatch(openModalCreateFolder());
    }

    const handleClick = async (folderId) => {

        //loading true

        setItensLoading((prevState) => {
            return{
            ...prevState,
            [folderId]: true
        }
    });

        await savePinInFolderAction(dispatch, state.activePinId, folderId);

        //loading false

        setItensLoading((prevState) => {
            return{
            ...prevState,
            [folderId]: false
        }
    });

        //console.log('clicou em salvar', folderId, state.activePinId)
    }

    const foldersNormalized = state.folders.map(folder => {
        return ({
            ...folder,
            saved: folder.pins.includes(state.activePinId)
        })
    })

    useEffect(() => {
        fetchFoldersAction(dispatch);
    }, [])


    
    return (
        <Modal 
        title="Salvar Pin"
        open={open}
        onHide={handleClose}
        controls={[
            {
                label: 'Criar Pasta',
                variant: 'secondary',
                loading: false,
                loadingLabel: 'criando',
                onClick: handleClickCreateFolder
            }
        ]}>
    <ListGroup variant="flush">
        {foldersNormalized.map((folder, folderIndex) => (
            <ListGroup.Item key={folderIndex}>
            <Row>
                <Col xs={8}>{folder.name}</Col>
                <Col xs={4} className="text-end">
                    <Button 
                    label={folder.saved ? 'Salvo' : 'Salvar'} 
                    loadingLabel="Salvando" 
                    onClick={() => handleClick(folder.id)} 
                    variant={folder.saved ? 'secondary' : 'primary'}
                    disable={folder.saved}
                    loading={itensLoading[folder.id]}
                    />
                    </Col>
            </Row>
            
        </ListGroup.Item>
        
        ))}
        
        
    </ListGroup>
        </Modal>
    )
}