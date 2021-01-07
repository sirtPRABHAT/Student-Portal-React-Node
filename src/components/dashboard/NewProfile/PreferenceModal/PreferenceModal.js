import React from 'react';
import './PreferenceModal.css';

import { Dialog } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import PrefSearch from './PrefSearch';

function PreferenceModal({ pref, open, name, close, set, handlePreferenceUpdate, heading, info, choose, placeholder, selected }) {

    const handelSave = () => {
        handlePreferenceUpdate(name) 
        close(false);
    } 

    return (
        <div>
            <Dialog className='preference__modal' fullScreen open={open} onClose={() => close(false)}>
                <div className='preference__modal__container'>
                    <div className='preference__modal__header'>
                        <CloseIcon onClick={() => close(false)} />
                        <button onClick={handelSave}>Save</button>
                    </div>
                    <div className='preference__modal__roles'>
                        <h2>{heading}</h2>
                        <div className='preference__modal__roles__info'>
                            <h5>{info}</h5>
                            <p>{choose}</p>
                        </div>
                        <PrefSearch pref={pref} set={set} placeholder={placeholder} />
                        <div>
                            {pref?.map((pref, ind) => <p key={ind} style={ selected.length < 7 ? {cursor: 'pointer'} : {cursor: 'default'}} className={ selected?.includes(pref) ? 'preference__modal__roles__role__selected' : 'preference__modal__roles__role'} onClick={() => set(pref)}>{pref}</p>)}
                        </div>
                    </div>
                </div>
            </Dialog>
        </div>
    )
}

export default PreferenceModal
