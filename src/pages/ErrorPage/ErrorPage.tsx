import { Alert, Grid } from "@mui/material"
import React from "react"
import Layout from "../../components/entity/Layout"

const ErrorPage = () => {
  return (
    <Layout>
      <Grid container justifyContent="center" mt={6}>
        <Grid item xs={6}>
          <Alert severity="info">404: Ошибка из-за чего-то</Alert>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default ErrorPage
