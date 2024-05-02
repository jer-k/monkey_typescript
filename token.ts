export const TokenTypes = {
  Illegal: "ILLEGAL",
  Eof: "EOF",
  // Identifiers + literals
  Ident: "IDENT",
  Int: "INT",

  If: "if",
  // Operators
  Assign: "=",
  Plus: "+",

  // Delimiters
  Comma: ",",
  Semicolon: ";",

  LParen: "(",
  RParen: ")",
  LBrace: "{",
  RBrace: "}",

  // Keywords
  Function: "FUNCTION",
  Let: "LET",

  Return: "return",
  True: "true",
  False: "false",
  Else: "else",


  NotEqual: "!=",
  Equal: "==",

  Bang: "!",
  Dash: "-",
  ForwardSlash: "/",
  Asterisk: "*",
  LessThan: "<",
  GreaterThan: ">",
} as const;

type TokenItem = typeof TokenTypes[keyof typeof TokenTypes];

export const Keywords = {
  fn: "FUNCTION",
  let: "LET"
}

export type TokenType = {
  type: TokenItem;
  literal: string;
}

export class Token {
  public type: TokenItem;
  public literal: string;

  constructor(type: TokenItem, literal: string) {
    this.type = type;
    this.literal = literal;
  }
}
