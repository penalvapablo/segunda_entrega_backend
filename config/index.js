import dotenv from 'dotenv'
dotenv.config()
const MONGO_DB = process.env.MONGO_DB_URI



export default {
  mongodb: {
    conexion: MONGO_DB
  },
  firebase :{
    "type": "service_account",
    "project_id": "coderhouse-backend-4556c",
    "private_key_id": "11708616829cb021bbca4deff50520d59c03462e",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCu3LClFxMiL9FB\n4y64sWqjmaNI+87RFI9i0VMC0Kln6f5oBKXzX8D6FYCWYhWcb+EEyHpijA0CLSCv\n3V+YRp5CrOtBT6SgL5eWrWTYJh9OIk+fnC57n8xaOD0/SM0aMLKVLlLQfehzsxON\nk98+lnJCnWkFlkr3h5XztURPTL4kQQJxzZkyBvuBZy5+lfL08LpSYLu4tb0DvvTz\nTERt5JUyqTqs5rTlJXxA36sXG3GfFLsSPtapaWY7Qy1g6KSoxA9CwzV12E4A/p8D\nzervUsHNhcAx9oI3hvK90d2JuwEmQk6Aej6QSgCX70uhxgXYxncc5hIbsOt2+l5Z\nofLrCFyrAgMBAAECggEABylKorg7NF849rXTKAU8FM8p/MczRSTOaoGgILFi/rp6\njNAD69+0C4nt5jrGH84FLSj4uih6L+ihOhKa46WgvaJPUDFu0JCiaK1ZP/Dvv0dw\nc1z2GmIFAHzlJT5aCASOi8WF5rwBVRu0ZUv1DJ8kts2zi2MIVvLalUyLK6Q89UcS\n913ogVUCXw8ErDrHZjFMq530QWItUEzLye4VZ+OBopdhCRcbqcyLlO8VuLpPuy+d\nReh+0pulGU7shiF3JHjdUcB+MrdhjA3If9HVLjNk4rowVzgClmfG6bef6JLHdr5Q\n+Zv6q/22emD5N/oSb6Qow+naGWPULBGJpnpN8dVYAQKBgQDbEvmhOL4GadQotNKY\nTrkxRRbyup3Hoaau6FTye3+zCs07guT9FPe+XBFGbOUVBNmrgoDxqES4hqAgcKFn\nVVcqMPl9pWs3yqY8QgwZXHybpqE+Umixt3PKdeFLDShkQe3/8mIvfzERi6LlqKnx\nPibnFGlJmAQGkXRRQSH0Zp2BAQKBgQDMVfg5qu3NaFLz7a2kkk+t+NE8qAUBvLIE\nivpvhG3lAf381IhSn7SrDuaOpmTdCCvBlg8WsAaRACz8bsDSsmxXqFDH6dZcd0R+\ndHe1VoBk5oEE+18YwjvasJ2glX8m22JzMCYl9fkIODm+A3p3osTprvZL1F+tlgEe\nQzwLGCIxqwKBgDqrLz0U5Bb1moK4QjnVw1TFiurAPWbsDKaEw9MYbc92EhZg7JA2\nYE6Te3Df0s25Oc3rqjqNdLHyI8nsP91bhndfHEGg3kDXvYMfsPvNv/UzP7Vf/nex\niIns3cPqpymKWoGT2OWda3embJ6Sd8iKe4Kg/b1ev50+sObdyYkZPg8BAoGBALgZ\n0P7sMTt7fhnGkEeRh3bAkoxq+a/Z+i47pW3qTDUj+Vndh0GiIN5qG3J1GrVG0l2l\nvMx9Jj1ogh+iDdsH5LOJs9aaqYc/8hdZCi341M+UGrSJYuHkxpa/wBVZ/GjfCrGr\ntQNIveoY9nVrnuDBZ1cAS2qA2v+EAlfozeVVBiHnAoGBAKC3ui41cmDKMA0CHa8u\nWgBfu5swVGedjMRbLPBsW4WyajVhu/7cuLdqKCPR/cUBlqY6W5QDzj2ZFtrHD3At\ngtcMoVAmXHTppTkiDw8Q9ELeR4hxAlSLOWeIJqi5CrOOOFiqIumMt9CxDl4x1vly\n423wDvcG1J+akEA94kFW3pvX\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-6pu4d@coderhouse-backend-4556c.iam.gserviceaccount.com",
    "client_id": "116155115481962654880",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-6pu4d%40coderhouse-backend-4556c.iam.gserviceaccount.com"
  }
}