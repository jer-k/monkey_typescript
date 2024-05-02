import { TokenTypes, Token } from "../token";
import { Lexer } from "../lexer";

test("test nextToken()", function() {
  const input = `=+(){},;`;

  const tokens = [
    TokenTypes.Assign,
    TokenTypes.Plus,
    TokenTypes.LParen,
    TokenTypes.RParen,
    TokenTypes.LBrace,
    TokenTypes.RBrace,
    TokenTypes.Comma,
    TokenTypes.Semicolon,
  ];

  const lexer = new Lexer(input);

  for (const token of tokens) {
    expect(lexer.nextToken()?.type).toBe(token);
  }
});