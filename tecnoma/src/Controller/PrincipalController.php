<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Mailer\Transport;
use Symfony\Component\Mailer\Mailer;
use Symfony\Component\Validator\Constraints\Email;
use Symfony\Bridge\Twig\Mime\BodyRenderer;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\Mime\Address;
use Twig\Environment;
use Twig\Loader\FilesystemLoader;
use Symfony\Component\HttpFoundation\JsonResponse;

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

class PrincipalController extends AbstractController
{
    /**
     * @Route("/", name="principal")
     */
    public function index(): Response
    {
        return $this->render('principal/index.html.twig', [
            'controller_name' => 'PrincipalController',
        ]);
    }

    /**
     * @Route("/correoelectronico", name="correoelectronico")
     */
    public function corrreo(Request $request): Response
    {
        $mail = new PHPMailer(true);
        $postdata = file_get_contents("php://input"); 
        $request = json_decode($postdata, true);
        $nombre = $request["nombre"];
        $email = $request["email"];
        $asunto = $request["asunto"]; 
        $mensaje = $request["mensaje"];
        $telefono = $request["telefono"]; 

        try { 
            //Server settings  
            $mail->SMTPDebug = 0;                    
            $mail->isSMTP();                                          
            $mail->Host       = 'smtp.gmail.com';                     
            $mail->SMTPAuth   = true;                                   
            $mail->Username   = 'correo_empresarial';                    
            $mail->Password   = 'clave_correo_empresarial';                               
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;                                                                   
            $mail->Port       = 465;                                                                                            

            //Recipients
            $mail->setFrom('correo_empresarial', 'nombre_usuario_correo');
            $mail->addAddress( $email, $nombre);

            //Contenido
            $mail->isHTML(true);
            $mail->Subject = $asunto;
            $mail->Body  =  $mensaje;
            $mail->send();

            $message = 'OK';
            return new JsonResponse(['data'=> $message ]);
        } catch (Exception $e) {
            $message =  "Mensaje no pudo ser enviado. Mailer Error: {$mail->ErrorInfo}";
            return new JsonResponse(['data'=> $message]);
        }
    }
}
