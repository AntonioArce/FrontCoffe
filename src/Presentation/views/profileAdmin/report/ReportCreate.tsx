import React, { useEffect, useState } from 'react'
import { Button, FlatList, Text, View } from 'react-native'
import { printToFileAsync } from 'expo-print'
import { shareAsync } from 'expo-sharing'
import { DateFormatter } from '../../../Utils/DateFormatter'
import useViewModel from './ViewModel'
import styles from './Styles'
import { RoundedButton } from '../../../components/RoundedButton'

export const AdminReportCreateScreen = () => {
    const { ordersDelivery, getOrders } = useViewModel()
    const [total, setTotal] = useState(0.0)
    useEffect(() => {
        getOrders('4')
    }, [])
    useEffect(() => {
        if (total === 0)
            getTotal()
    }, [])


    const getTotal = () => {
        let flag = 0.0
        //let finallyTotal = 0.0
        ordersDelivery.map(function (e) {
            e.products.map(function (i) {
                flag = flag + (i.precio * i.quantity!)
                setTotal(total + flag)
            })
            //console.log(flag+' '+ e.precio+' '+e.quantity)
            /* flag = flag + (e.precio * e.quantity!)
            setTotal(total + flag) */
            //console.log(flag)
        })
        console.log(total)
    }

    const html = `
    <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
    </head>
    <body style="text-align: center;">
      <h1 style="font-size: 50px; font-family: Helvetica Neue; font-weight: normal;">
        Tabla de ventas
      </h1>
      <table cellspacing="10" cellpadding="10" border="3">
        <tr>
            <th>Folio de Orden</th>
            <th>Fecha</th>
            <th>Productos</th>
            <th>Cantidad</th>
            <th>Total de cada pedido</th>
        </tr>
        ${ordersDelivery.map((item) => {
        return `<tr>
                <td>${item.id}</td>
                <td>${DateFormatter(item.timestamp!)}</td>
                <td>${item.products.map((product) => {
            return `<table border="1">
                        <tr>
                            <td>${product.nombre}</td>
                        </tr>
                    </table>`
        })}</td>
            <td>${item.products.map((product) => `<p>${product.quantity!}</p>`)}</td>
            <td>${item.products.map((product) => `<p>${product.quantity! * product.precio!}</p>`)}</td>
            </tr>`
    })}
    <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td bgcolor="#cccccc">${total}</td>
    </tr>
       </table>
    </body>
  </html>
    `

    const generatePDF = async () => {
        const file = await printToFileAsync({
            html: html,
            base64: false
        })
        await shareAsync(file.uri)
    }

    return (
        <View style={styles.container}>
            <View style={styles.action}>
                <Text style={styles.text}>Aqui puedes generar tu reporte de ventas en formato pdf </Text>
                <RoundedButton text='OBTENER PDF' onPress={() => generatePDF()} />

            </View>
        </View>
    )
}

// ${JSON.stringify(ordersDelivery, null, 3)}