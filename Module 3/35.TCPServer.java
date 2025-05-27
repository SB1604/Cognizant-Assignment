import java.io.*;
import java.net.*;

public class TCPServer {
    public static void main(String[] args) throws IOException {
        ServerSocket serverSocket = new ServerSocket(1234);
        Socket socket = serverSocket.accept();

        BufferedReader input = new BufferedReader(new InputStreamReader(socket.getInputStream()));
        PrintWriter output = new PrintWriter(socket.getOutputStream(), true);

        String message;
        while ((message = input.readLine()) != null) {
            System.out.println("Client: " + message);
            output.println("Server: " + message);
        }

        socket.close();
        serverSocket.close();
    }
}
