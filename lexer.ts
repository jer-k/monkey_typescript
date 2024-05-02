import { Token, TokenTypes, Keywords } from "./token";

type LexerType = {
  input: string;
  position: number;
  readPosition: number;
  char: string;
}

export class Lexer {
  private position: number = 0;
  private readPosition: number = 0;
  private char!: string;
  private input: string

  constructor(input: string) {
    this.input = input;
    this.readChar();
  }

  private readChar() {
    if (this.readPosition > this.input.length) {
      this.char = "\0";
    } else {
      this.char = this.input[this.readPosition];
    }
    this.position = this.readPosition;
    this.readPosition += 1;
  }

  nextToken() {
    let token: Token | undefined;

    switch(this.char) {
      case("="): {
        token = new Token(TokenTypes.Assign, this.char)
        break;
      }
      case(";"): {
        token = new Token(TokenTypes.Semicolon, this.char)
        break;
      }
      case("("): {
        token = new Token(TokenTypes.LParen, this.char)
        break;
      }
      case(")"): {
        token = new Token(TokenTypes.RParen, this.char)
        break;
      }
      case(","): {
        token = new Token(TokenTypes.Comma, this.char)
        break;
      }
      case("+"): {
        token = new Token(TokenTypes.Plus, this.char)
        break;
      }
      case("{"): {
        token = new Token(TokenTypes.LBrace, this.char)
        break;
      }
      case("}"): {
        token = new Token(TokenTypes.RBrace, this.char)
        break;
      }
      case("\0"): {
        token = new Token(TokenTypes.Eof, "")
        break;
      }
      default: {
        if (this.isLetter(this.char)) {
          const identifier = this.readIdentifier()
          const keyword = Keywords[identifier as keyof typeof Keywords];
          if (keyword) {
            return new Token(keyword, identifier);
          } else {
            return new Token(TokenTypes.Ident, identifier);
          }

        } else {
          token = new Token(TokenTypes.Illegal, this.char);
        }
      }
    }

    this.readChar();
    return token;
  }

  readIdentifier():string {
    const currentPosition = this.position;
    while (this.isLetter(this.char)) {
      this.readChar()
    }

    return this.input.slice(currentPosition, this.position)
  }

  isLetter(char: string): boolean {
    return "a" <= char && char <= "z" || "A" <= char && char <= "Z" || char == "_"
  }
}