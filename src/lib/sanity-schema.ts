// src/lib/sanity-schema.ts

export const schemaTypes = [
    // 1. Medical Condition (Problem)
    {
      name: 'condition',
      title: 'Condição (Condition)',
      type: 'document',
      fields: [
        { name: 'title', type: 'string', title: 'Nome da Condição' },
        { name: 'slug', type: 'slug', options: { source: 'title' } },
        { name: 'description', type: 'text', title: 'Resumo Médico' }
      ]
    },
  
    // 2. Product (The Receipt or Exercise)
    {
      name: 'product',
      title: 'Produto (Remedy/Exercise)',
      type: 'document',
      fields: [
        { name: 'title', type: 'string', title: 'Nome do Produto' },
        { name: 'slug', type: 'slug', options: { source: 'title' } },
        { 
          name: 'price', 
          type: 'number', 
          title: 'Preço (em Centavos - R$)' // Store R$97,00 as 9700
        },
        {
          name: 'type',
          title: 'Tipo de Produto',
          type: 'string',
          options: {
            list: [
              { title: 'Receita (PDF)', value: 'receipt' },
              { title: 'Exercício (Vídeo)', value: 'exercise' }
            ]
          }
        },
        // PANDA VIDEO ID (Crucial for Brazil)
        {
          name: 'pandaVideoId',
          title: 'ID do Panda Video (Se for vídeo)',
          type: 'string',
          description: 'Cole apenas o ID do vídeo do Panda aqui.'
        },
        {
          name: 'treatsCondition',
          title: 'Trata qual condição?',
          type: 'reference',
          to: [{ type: 'condition' }]
        }
      ]
    }
  ]