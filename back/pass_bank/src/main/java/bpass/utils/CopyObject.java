package bpass.utils;

import java.lang.reflect.Field;

public class CopyObject {
  
  public static void copiar(Object origem, Object destino) throws IllegalAccessException {
        // Obtém a classe dos objetos
        Class<?> classeOrigem = origem.getClass();
        Class<?> classeDestino = destino.getClass();

        // Obtém todos os campos (atributos) da classe de origem
        Field[] camposOrigem = classeOrigem.getDeclaredFields();

        for (Field campoOrigem : camposOrigem) {
            // Define o acesso ao campo como true para poder obter valores de campos privados
            campoOrigem.setAccessible(true);

            // Obtém o nome do campo
            String nomeCampoOrigem = campoOrigem.getName();

            try {
                // Tenta obter o campo correspondente na classe de destino
                Field campoDestino = classeDestino.getDeclaredField(nomeCampoOrigem);

                // Define o acesso ao campo como true para poder atribuir valores a campos privados
                campoDestino.setAccessible(true);

                // Obtém o valor do campo de origem
                Object valorCampoOrigem = campoOrigem.get(origem);

                // Define o valor do campo de destino com o valor do campo de origem
                campoDestino.set(destino, valorCampoOrigem);
            } catch (NoSuchFieldException e) {
                // Ignora campos que não existem na classe de destino
                continue;
            }
        }
    }
}
