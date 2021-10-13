# SOLID

## S (Single Responsability Principle) [Princípio da Responsabilidade Única]

Nunca deve haver mais de um motivo para uma classe mudar

## O (Open/Closed Principle) [Princípio Aberto/Fechado]

Aberto para extensão e fechado para modifição
Classe A -> Classe B & Classe C

## L (Liskov Substitution Principle) [Princípio da Substituição de Liskov]

Uma classe derivada pode ser substituível por sua classe base
Caso exista uma classe base, ela pode ser substituída por sua classe pai

## I (Interface Segregation Principle) [Princípio da Segregação de Interface]

Classes não devem ser forçadas a depender de métodos que não usam

## D (Dependency Inversion Principle) [Princípio da Inversão de Dependência]

Módulos de alto nível não devem depender de módulos de baixo nível
Ambos devem depender de abstrações, abastrações nõa devem depender de detalhes
Product -> SQL && Auth
