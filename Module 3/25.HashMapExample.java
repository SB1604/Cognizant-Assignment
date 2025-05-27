import java.util.HashMap;
import java.util.Scanner;

public class HashMapExample {
    public static void main(String[] args) {
        HashMap<Integer, String> students = new HashMap<>();
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter ID and Name (type -1 to stop):");
        while (true) {
            int id = scanner.nextInt();
            if (id == -1) break;
            scanner.nextLine(); // consume newline
            String name = scanner.nextLine();
            students.put(id, name);
        }
        System.out.print("Enter ID to search: ");
        int searchId = scanner.nextInt();
        System.out.println("Name: " + students.get(searchId));
    }
}