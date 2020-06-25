import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import * as S from './styles';
import Qr from 'qrcode.react';

//Nosos componentes
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function QrCode() {
    const [mac, setMac] = useState()
    const [redirect, setRedirect] = useState(false);
    
    async function SaveMac() {
        if(!mac){
            alert('Você precisa informar o número que apareceu no celular')
        }else{
            await localStorage.setItem('@todo/macaddress', mac);
            setRedirect(true);
            window.location.reload();
        }
    }
    
    return (
        <S.Container>
            {redirect && <Redirect to="/" />}

            <Header />

            <S.Content>
                <h1>CAPTURE O QRCODE PELO APP</h1>
                <p>Sua atividades serão csincronizada com a do seu celular</p>
                <S.QrCodeArea>
                    <Qr value='qetmacaddress' size={350} />
                </S.QrCodeArea>
            </S.Content>

            <S.ValidationCode>
                <span>Digite a numeração que apareceu no seu celular</span>
                <input type="text" onChange={e => setMac(e.target.value)} value={mac}/>
                <button type="button" onClick={SaveMac}>Sincronizar</button>
            </S.ValidationCode>

            <Footer />
        </S.Container>
    );
}

export default QrCode;