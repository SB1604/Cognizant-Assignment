import java.util.*;

public class LambdaExpression {
    public static void main(String[] args) {
        List<String> list = Arrays.asList("Banana", "Apple", "Mango", "Cherry");
        list.sort((a, b) -> a.compareTo(b));
        System.out.println("Sorted List: " + list);
    }
}