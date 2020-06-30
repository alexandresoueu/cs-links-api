# cs-links-api

Slack integrations for slash-command

## Badges

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/6bc4338017a147f7b18f9d1f853981a5)](https://www.codacy.com/manual/concrete/cs-links-api?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=concretesolutions/cs-links-api&amp;utm_campaign=Badge_Grade)
[![Build Status](https://travis-ci.org/concretesolutions/cs-links-api.svg?branch=master)](https://travis-ci.org/concretesolutions/cs-links-api)
[![codecov](https://codecov.io/gh/concretesolutions/cs-links-api/branch/master/graph/badge.svg)](https://codecov.io/gh/concretesolutions/cs-links-api)

## How to use on Slack

Just type the slash command **link** with the desired keyword, as shown below.

`/link guia`

## Available keyword (for now)

| Keyword                                                         | Expected Result                      |
| --------------------------------------------------------------- | ------------------------------------ |
| todos                                                           | Return all available links           |
| valores                                                         | Return Valores Link                  |
| malote, malotes                                                 | Return Malote Link                   |
| guia                                                            | Return Guia de Sobrevivência link    |
| viagem, viagens                                                 | Return Viagens link                  |
| benefício, beneficio, benefícios, beneficios, salário, salario  | Return Salário & Benefícios link     |
| padrão, padrao, material, materiais, apresentação, apresentacao | Return Materiais Padrão link         |
| reembolso, reembolsos, adiantamento, adiantamentos              | Return Reembolso & Adiantamento link |
| departamento pessoal, pessoal, dp                               | Return Departamento Pessoal     link |
| evento, eventos, treinamento, treinamentos                      | Return Eventos & Treinamentos   link |

## **Disclaimer**

 Since it´s deployed on Heroku free tier your first usage might render an error due to the fact that the instance was in a dormant state.
