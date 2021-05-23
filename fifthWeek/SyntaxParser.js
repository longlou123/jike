/*
 * @Author: dalou
 * @Date: 2021-05-23 10:09:23
 * @LastEditTime: 2021-05-23 11:11:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jike\fifthWeek\SyntaxParser.js
 */
import {
  scan
} from "./LexParser.js"

let syntax = {
  Program: [
    ["StatementList", "EOF"]
  ],
  StatementList: [
    ["Statement"],
    ["StatementList", "Statement"]
  ],
  Statement: [
    ["ExpressionStatement"],
    ["IfStatement"],
    ["VariableDeclaration"],
    ["FunctionDeclaration"]
  ],
  IfStatement: [
    ["if", "(", "Expression", ")", "Statement"]
  ],
  VariableDeclaration: [
    ["var", "Identifier", ";"],
    ["let", "Identifier", ";"]
  ],
  FunctionDeclaration: [
    ["function", "Identifier", "(", ")", "{", "StatementList", "}"]
  ],
  ExpressionStatement: [
    ["Expression", ";"]
  ],
  Expression: [
    ["AdditiveExpression"]
  ],
  AdditiveExpression: [
    ["MultiplicativeExpression"],
    ["AdditiveExpression", "+", "MultiplicativeExpression"],
    ["AdditiveExpression", "-", "MultiplicativeExpression"]
  ],
  MultiplicativeExpression: [
    ["PrimaryExpression"],
    ["MultiplicativeExpression", "*", "PrimaryExpression"],
    ["MultiplicativeExpression", "/", "PrimaryExpression"]
  ],
  PrimaryExpression: [
    ["(", "Expression", ")"],
    ["Literal"],
    ["Identifier"]
  ],
  Literal: [
    ["Number"]
  ]
}

let hash = {

}