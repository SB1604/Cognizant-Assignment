import java.io.*;
import java.net.*;

public class TCPClient {
    public static void main(String[] args) throws IOException {
        Socket socket = new Socket("localhost", 1234);

        BufferedReader input = new BufferedReader(new InputStreamReader(System.in));
        PrintWriter output = new PrintWriter(socket.getOutputStream(), true);
        BufferedReader serverInput = new BufferedReader(new InputStreamReader(socket.getInputStream()));

        String message;
        while ((message = input.readLine()) != null) {
            output.println(message);
            System.out.println(serverInput.readLine());
        }

        socket.close();
    }
}
