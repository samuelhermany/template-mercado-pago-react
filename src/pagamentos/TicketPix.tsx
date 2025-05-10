import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { postCriarPix } from '../api/services'
import { useState } from 'react'
import { Box } from '@mui/material'
import QRCodeViewer from './QRCodeViewer'

export default function TicketPix() {
  const [ticketUrl, setTicketUrl] = useState('')

  const MOCK_BODY = {
    transaction_amount: 5.9,
    description: 'Pagamento de teste v03',
    paymentMethodId: 'pix',
    email: 'samuelhermany1012@gmail.com',
    identificationType: 'CPF',
    number: '19119119100',
  }

  const handlePost = () => {
    postCriarPix(MOCK_BODY).then(response => {
      console.log('response')
      setTicketUrl(response.data.point_of_interaction.transaction_data.ticket_url)
    })
  }

  return (
    <>
      <Box display="flex" gap={4} flexDirection="column">
        <Card sx={{ width: 440, maxHeight: 420 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="https://ogimg.infoglobo.com.br/in/22945566-c56-658/FT1086A/Big-Mac.png"
            title="big mac"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Big Mac
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {MOCK_BODY.description}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Valor: R$ {MOCK_BODY.transaction_amount}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Pagamentos disponíveis: {MOCK_BODY.paymentMethodId}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              seu e-mail: {MOCK_BODY.email}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              CPF: {MOCK_BODY.number}
            </Typography>
          </CardContent>
          <CardActions>
            <Button onClick={handlePost} variant="contained" size="small">
              Pagar com Pix
            </Button>
          </CardActions>
        </Card>
        {ticketUrl && (
          <Card sx={{ width: 440, minHeight: 360 }}>
            <QRCodeViewer src={ticketUrl} />
          </Card>
        )}
      </Box>
    </>
  )
}
