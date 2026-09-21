
const events = [
  {
    "day": 1,
    "month": 1,
    "event": {
      "preview": "Em 1863, entrou em vigor a Proclamação de Emancipação nos EUA.",
      "fullEvent": "Em 1º de janeiro de 1863, durante a Guerra Civil Americana, entrou em vigor a Proclamação de Emancipação de Abraham Lincoln, declarando livres os escravizados nos estados que estavam em rebelião contra a União."
    }
  },
  {
    "day": 2,
    "month": 1,
    "event": {
      "preview": "Em 1959, a sonda Luna 1 foi lançada rumo à Lua.",
      "fullEvent": "Em 2 de janeiro de 1959, a União Soviética lançou a Luna 1. Ela se tornou a primeira espaçonave a escapar da gravidade terrestre e a passar nas proximidades da Lua."
    }
  },
  {
    "day": 3,
    "month": 1,
    "event": {
      "preview": "Em 1959, o Alasca tornou-se o 49º estado dos EUA.",
      "fullEvent": "Em 3 de janeiro de 1959, o Alasca foi oficialmente admitido como o 49º estado dos Estados Unidos, após décadas como território norte-americano."
    }
  },
  {
    "day": 4,
    "month": 1,
    "event": {
      "preview": "Em 1809, nasceu Louis Braille.",
      "fullEvent": "Em 4 de janeiro de 1809, nasceu Louis Braille, educador francês que criou o sistema de leitura e escrita em pontos em relevo usado mundialmente por pessoas cegas."
    }
  },
  {
    "day": 5,
    "month": 1,
    "event": {
      "preview": "Em 1914, a Ford adotou a jornada de oito horas com salário diário de US$ 5.",
      "fullEvent": "Em 5 de janeiro de 1914, a Ford Motor Company anunciou uma jornada de trabalho de oito horas e o pagamento diário de cinco dólares para trabalhadores qualificados, medida de grande impacto na indústria da época."
    }
  },
  {
    "day": 6,
    "month": 1,
    "event": {
      "preview": "Em 1838, Samuel Morse demonstrou publicamente o telégrafo elétrico.",
      "fullEvent": "Em 6 de janeiro de 1838, Samuel Morse realizou uma demonstração de seu sistema de telégrafo elétrico, tecnologia que ajudaria a transformar a comunicação a longa distância."
    }
  },
  {
    "day": 7,
    "month": 1,
    "event": {
      "preview": "Em 1610, Galileu observou luas de Júpiter.",
      "fullEvent": "Em 7 de janeiro de 1610, Galileu Galilei registrou observações de pequenos astros próximos a Júpiter. Nos dias seguintes percebeu que orbitavam o planeta, evidência importante contra o modelo geocêntrico tradicional."
    }
  },
  {
    "day": 8,
    "month": 1,
    "event": {
      "preview": "Em 1815, ocorreu a Batalha de Nova Orleans.",
      "fullEvent": "Em 8 de janeiro de 1815, forças dos Estados Unidos comandadas por Andrew Jackson derrotaram os britânicos na Batalha de Nova Orleans, travada no fim da Guerra de 1812."
    }
  },
  {
    "day": 9,
    "month": 1,
    "event": {
      "preview": "Em 2007, Steve Jobs apresentou o primeiro iPhone.",
      "fullEvent": "Em 9 de janeiro de 2007, Steve Jobs apresentou publicamente o primeiro iPhone durante a Macworld, combinando telefone, navegador e reprodutor de mídia em um único aparelho com tela sensível ao toque."
    }
  },
  {
    "day": 10,
    "month": 1,
    "event": {
      "preview": "Em 1920, entrou em vigor a Liga das Nações.",
      "fullEvent": "Em 10 de janeiro de 1920, entrou em vigor o Pacto da Liga das Nações, organização internacional criada após a Primeira Guerra Mundial para promover cooperação e segurança coletiva."
    }
  },
  {
    "day": 11,
    "month": 1,
    "event": {
      "preview": "Em 1922, a insulina foi usada pela primeira vez em um paciente.",
      "fullEvent": "Em 11 de janeiro de 1922, Leonard Thompson, de 14 anos, recebeu uma das primeiras injeções de insulina para tratar diabetes. O tratamento seria aperfeiçoado logo depois e revolucionaria a medicina."
    }
  },
  {
    "day": 12,
    "month": 1,
    "event": {
      "preview": "Em 2010, um terremoto devastou o Haiti.",
      "fullEvent": "Em 12 de janeiro de 2010, um forte terremoto atingiu o Haiti e causou destruição catastrófica, especialmente na região de Porto Príncipe, tornando-se uma das maiores tragédias humanitárias recentes do Caribe."
    }
  },
  {
    "day": 13,
    "month": 1,
    "event": {
      "preview": "Em 1898, Émile Zola publicou 'J'accuse'.",
      "fullEvent": "Em 13 de janeiro de 1898, o escritor francês Émile Zola publicou a carta aberta 'J'accuse...!', denunciando irregularidades e antissemitismo no Caso Dreyfus."
    }
  },
  {
    "day": 14,
    "month": 1,
    "event": {
      "preview": "Em 1954, Marilyn Monroe casou-se com Joe DiMaggio.",
      "fullEvent": "Em 14 de janeiro de 1954, Marilyn Monroe e o astro do beisebol Joe DiMaggio se casaram em São Francisco. A união, embora breve, tornou-se um episódio muito lembrado da cultura popular do século XX."
    }
  },
  {
    "day": 15,
    "month": 1,
    "event": {
      "preview": "Em 2001, a Wikipédia entrou no ar.",
      "fullEvent": "Em 15 de janeiro de 2001, Jimmy Wales e Larry Sanger lançaram a Wikipédia, enciclopédia colaborativa online que se tornaria um dos maiores projetos de conhecimento aberto da internet."
    }
  },
  {
    "day": 16,
    "month": 1,
    "event": {
      "preview": "Em 1991, começou a Guerra do Golfo em sua fase aérea.",
      "fullEvent": "Em 16 de janeiro de 1991, forças da coalizão liderada pelos Estados Unidos iniciaram a campanha aérea contra o Iraque na Guerra do Golfo, após a invasão iraquiana do Kuwait."
    }
  },
  {
    "day": 17,
    "month": 1,
    "event": {
      "preview": "Em 1706, nasceu Benjamin Franklin.",
      "fullEvent": "Em 17 de janeiro de 1706, nasceu Benjamin Franklin, impressor, cientista, inventor, diplomata e um dos nomes centrais da independência dos Estados Unidos."
    }
  },
  {
    "day": 18,
    "month": 1,
    "event": {
      "preview": "Em 1919, começou a Conferência de Paz de Paris.",
      "fullEvent": "Em 18 de janeiro de 1919, representantes das potências vencedoras da Primeira Guerra Mundial se reuniram em Paris para negociar os tratados que reorganizariam fronteiras e relações internacionais no pós-guerra."
    }
  },
  {
    "day": 19,
    "month": 1,
    "event": {
      "preview": "Em 1809, nasceu Edgar Allan Poe.",
      "fullEvent": "Em 19 de janeiro de 1809, nasceu o escritor norte-americano Edgar Allan Poe, conhecido por contos de mistério, terror e pela contribuição decisiva ao gênero policial moderno."
    }
  },
  {
    "day": 20,
    "month": 1,
    "event": {
      "preview": "Em 1942, ocorreu a Conferência de Wannsee.",
      "fullEvent": "Em 20 de janeiro de 1942, autoridades nazistas se reuniram na Conferência de Wannsee, em Berlim, para coordenar administrativamente a perseguição e o assassinato em massa de judeus europeus."
    }
  },
  {
    "day": 21,
    "month": 1,
    "event": {
      "preview": "Em 1793, Luís XVI foi executado em Paris.",
      "fullEvent": "Em 21 de janeiro de 1793, o rei Luís XVI da França foi executado na guilhotina durante a Revolução Francesa, marco do rompimento definitivo com a antiga monarquia absoluta."
    }
  },
  {
    "day": 22,
    "month": 1,
    "event": {
      "preview": "Em 1905, ocorreu o Domingo Sangrento na Rússia.",
      "fullEvent": "Em 22 de janeiro de 1905, manifestantes que marchavam pacificamente em São Petersburgo foram atacados por tropas do Império Russo. O episódio, conhecido como Domingo Sangrento, impulsionou a Revolução de 1905."
    }
  },
  {
    "day": 23,
    "month": 1,
    "event": {
      "preview": "Em 1845, o Congresso dos EUA aprovou uma data nacional para eleições presidenciais.",
      "fullEvent": "Em 23 de janeiro de 1845, o Congresso norte-americano definiu que as eleições presidenciais seriam realizadas na terça-feira após a primeira segunda-feira de novembro, regra que permanece em vigor."
    }
  },
  {
    "day": 24,
    "month": 1,
    "event": {
      "preview": "Em 1984, a Apple apresentou o Macintosh.",
      "fullEvent": "Em 24 de janeiro de 1984, a Apple lançou o Macintosh, computador pessoal que popularizou o uso de interface gráfica e mouse para um público amplo."
    }
  },
  {
    "day": 25,
    "month": 1,
    "event": {
      "preview": "Em 1924, começaram os primeiros Jogos Olímpicos de Inverno.",
      "fullEvent": "Em 25 de janeiro de 1924, começou em Chamonix, na França, a Semana Internacional de Esportes de Inverno, mais tarde reconhecida como a primeira edição dos Jogos Olímpicos de Inverno."
    }
  },
  {
    "day": 26,
    "month": 1,
    "event": {
      "preview": "Em 1788, a Primeira Frota britânica chegou a Sydney Cove.",
      "fullEvent": "Em 26 de janeiro de 1788, a Primeira Frota britânica estabeleceu uma colônia penal em Sydney Cove, episódio central na colonização europeia da Austrália e de enorme impacto para os povos aborígenes."
    }
  },
  {
    "day": 27,
    "month": 1,
    "event": {
      "preview": "Em 1945, Auschwitz foi libertado pelo Exército Vermelho.",
      "fullEvent": "Em 27 de janeiro de 1945, tropas soviéticas chegaram ao complexo de Auschwitz-Birkenau e libertaram os sobreviventes encontrados no campo de concentração e extermínio nazista."
    }
  },
  {
    "day": 28,
    "month": 1,
    "event": {
      "preview": "Em 1986, o ônibus espacial Challenger explodiu após o lançamento.",
      "fullEvent": "Em 28 de janeiro de 1986, o ônibus espacial Challenger se desintegrou 73 segundos depois da decolagem. Os sete tripulantes morreram, levando a uma grande revisão do programa espacial norte-americano."
    }
  },
  {
    "day": 29,
    "month": 1,
    "event": {
      "preview": "Em 1886, Karl Benz patenteou seu automóvel.",
      "fullEvent": "Em 29 de janeiro de 1886, Karl Benz registrou a patente de um veículo movido a gasolina, o Benz Patent-Motorwagen, frequentemente considerado o primeiro automóvel moderno."
    }
  },
  {
    "day": 30,
    "month": 1,
    "event": {
      "preview": "Em 1948, Mahatma Gandhi foi assassinado.",
      "fullEvent": "Em 30 de janeiro de 1948, Mahatma Gandhi foi assassinado em Nova Délhi. Ele havia se tornado uma das principais figuras da independência indiana e da resistência política não violenta."
    }
  },
  {
    "day": 31,
    "month": 1,
    "event": {
      "preview": "Em 1958, os EUA lançaram o Explorer 1.",
      "fullEvent": "Em 31 de janeiro de 1958, os Estados Unidos lançaram o Explorer 1, seu primeiro satélite artificial bem-sucedido. A missão também ajudou a identificar os cinturões de radiação de Van Allen."
    }
  },
  {
    "day": 1,
    "month": 2,
    "event": {
      "preview": "Em 2003, o ônibus espacial Columbia se desintegrou na reentrada.",
      "fullEvent": "Em 1º de fevereiro de 2003, o ônibus espacial Columbia se desintegrou ao retornar à Terra. Os sete astronautas morreram e o acidente provocou nova revisão das práticas de segurança da NASA."
    }
  },
  {
    "day": 2,
    "month": 2,
    "event": {
      "preview": "Em 1943, terminou a Batalha de Stalingrado.",
      "fullEvent": "Em 2 de fevereiro de 1943, as últimas forças alemãs cercadas em Stalingrado se renderam. A vitória soviética é considerada um dos grandes pontos de virada da Segunda Guerra Mundial na Europa."
    }
  },
  {
    "day": 3,
    "month": 2,
    "event": {
      "preview": "Em 1959, músicos morreram no acidente lembrado como 'o dia em que a música morreu'.",
      "fullEvent": "Em 3 de fevereiro de 1959, Buddy Holly, Ritchie Valens e J. P. Richardson morreram em um acidente aéreo em Iowa, episódio posteriormente chamado de 'The Day the Music Died'."
    }
  },
  {
    "day": 4,
    "month": 2,
    "event": {
      "preview": "Em 2004, foi lançado o Facebook.",
      "fullEvent": "Em 4 de fevereiro de 2004, Mark Zuckerberg e colegas lançaram o Facebook em Harvard. A rede social cresceria rapidamente e mudaria a comunicação online em escala global."
    }
  },
  {
    "day": 5,
    "month": 2,
    "event": {
      "preview": "Em 1919, foi fundada a United Artists.",
      "fullEvent": "Em 5 de fevereiro de 1919, Charlie Chaplin, Mary Pickford, Douglas Fairbanks e D. W. Griffith fundaram a United Artists, buscando maior controle artístico e financeiro sobre seus filmes."
    }
  },
  {
    "day": 6,
    "month": 2,
    "event": {
      "preview": "Em 1952, Elizabeth II tornou-se rainha do Reino Unido.",
      "fullEvent": "Em 6 de fevereiro de 1952, após a morte de George VI, Elizabeth II ascendeu ao trono britânico. Seu reinado se tornaria o mais longo da história do Reino Unido."
    }
  },
  {
    "day": 7,
    "month": 2,
    "event": {
      "preview": "Em 1964, os Beatles chegaram aos Estados Unidos.",
      "fullEvent": "Em 7 de fevereiro de 1964, os Beatles desembarcaram em Nova York para sua primeira grande visita aos Estados Unidos, momento que simbolizou a expansão mundial da chamada Invasão Britânica."
    }
  },
  {
    "day": 8,
    "month": 2,
    "event": {
      "preview": "Em 1587, Maria Stuart foi executada.",
      "fullEvent": "Em 8 de fevereiro de 1587, Maria, Rainha dos Escoceses, foi executada no Castelo de Fotheringhay após ser condenada por envolvimento em uma conspiração contra Elizabeth I da Inglaterra."
    }
  },
  {
    "day": 9,
    "month": 2,
    "event": {
      "preview": "Em 1964, os Beatles apareceram no Ed Sullivan Show.",
      "fullEvent": "Em 9 de fevereiro de 1964, os Beatles fizeram sua famosa apresentação no programa de Ed Sullivan diante de uma audiência televisiva gigantesca, consolidando sua popularidade nos Estados Unidos."
    }
  },
  {
    "day": 10,
    "month": 2,
    "event": {
      "preview": "Em 1996, o computador Deep Blue venceu Kasparov em uma partida.",
      "fullEvent": "Em 10 de fevereiro de 1996, o supercomputador Deep Blue, da IBM, derrotou Garry Kasparov em uma partida de xadrez. Foi a primeira vitória de um computador sobre um campeão mundial em condições de torneio."
    }
  },
  {
    "day": 11,
    "month": 2,
    "event": {
      "preview": "Em 1990, Nelson Mandela foi libertado.",
      "fullEvent": "Em 11 de fevereiro de 1990, Nelson Mandela deixou a prisão após 27 anos de encarceramento. Sua libertação marcou uma etapa decisiva no processo de encerramento do apartheid na África do Sul."
    }
  },
  {
    "day": 12,
    "month": 2,
    "event": {
      "preview": "Em 1809, nasceram Abraham Lincoln e Charles Darwin.",
      "fullEvent": "Em 12 de fevereiro de 1809, nasceram duas figuras que marcariam o século XIX: Abraham Lincoln, futuro presidente dos Estados Unidos, e Charles Darwin, naturalista associado à teoria da evolução por seleção natural."
    }
  },
  {
    "day": 13,
    "month": 2,
    "event": {
      "preview": "Em 1945, começou o bombardeio de Dresden.",
      "fullEvent": "Em 13 de fevereiro de 1945, forças aéreas britânicas e norte-americanas iniciaram grandes ataques contra Dresden, na Alemanha. O bombardeio e seus efeitos humanitários seguem sendo objeto de estudo e debate histórico."
    }
  },
  {
    "day": 14,
    "month": 2,
    "event": {
      "preview": "Em 1876, Alexander Graham Bell solicitou patente para o telefone.",
      "fullEvent": "Em 14 de fevereiro de 1876, Alexander Graham Bell apresentou seu pedido de patente relacionado ao telefone nos Estados Unidos, em meio a uma intensa corrida tecnológica pela transmissão elétrica da voz."
    }
  },
  {
    "day": 15,
    "month": 2,
    "event": {
      "preview": "Em 1564, nasceu Galileu Galilei.",
      "fullEvent": "Em 15 de fevereiro de 1564, nasceu Galileu Galilei, cientista italiano cujas observações astronômicas e estudos de movimento tiveram enorme influência no desenvolvimento da ciência moderna."
    }
  },
  {
    "day": 16,
    "month": 2,
    "event": {
      "preview": "Em 1923, foi aberto o túmulo de Tutancâmon.",
      "fullEvent": "Em 16 de fevereiro de 1923, Howard Carter abriu a câmara funerária do faraó Tutancâmon no Vale dos Reis, no Egito, uma das descobertas arqueológicas mais célebres do século XX."
    }
  },
  {
    "day": 17,
    "month": 2,
    "event": {
      "preview": "Em 1600, Giordano Bruno foi executado em Roma.",
      "fullEvent": "Em 17 de fevereiro de 1600, o filósofo Giordano Bruno foi executado pela Inquisição Romana após ser condenado por heresia. Sua figura se tornaria símbolo de conflitos entre autoridade religiosa e liberdade intelectual."
    }
  },
  {
    "day": 18,
    "month": 2,
    "event": {
      "preview": "Em 1930, Plutão foi descoberto por Clyde Tombaugh.",
      "fullEvent": "Em 18 de fevereiro de 1930, o astrônomo Clyde Tombaugh identificou Plutão em imagens obtidas no Observatório Lowell. O objeto foi classificado como planeta até 2006, quando passou à categoria de planeta anão."
    }
  },
  {
    "day": 19,
    "month": 2,
    "event": {
      "preview": "Em 1945, começou a Batalha de Iwo Jima.",
      "fullEvent": "Em 19 de fevereiro de 1945, forças norte-americanas desembarcaram em Iwo Jima, iniciando uma das batalhas mais intensas da Guerra do Pacífico durante a Segunda Guerra Mundial."
    }
  },
  {
    "day": 20,
    "month": 2,
    "event": {
      "preview": "Em 1962, John Glenn orbitou a Terra.",
      "fullEvent": "Em 20 de fevereiro de 1962, John Glenn tornou-se o primeiro norte-americano a orbitar a Terra, completando três voltas ao planeta a bordo da cápsula Friendship 7."
    }
  },
  {
    "day": 21,
    "month": 2,
    "event": {
      "preview": "Em 1965, Malcolm X foi assassinado.",
      "fullEvent": "Em 21 de fevereiro de 1965, Malcolm X foi assassinado em Nova York enquanto discursava. Ele foi uma das figuras mais influentes e controversas do movimento negro nos Estados Unidos no século XX."
    }
  },
  {
    "day": 22,
    "month": 2,
    "event": {
      "preview": "Em 1732, nasceu George Washington.",
      "fullEvent": "Em 22 de fevereiro de 1732, nasceu George Washington, comandante do Exército Continental durante a independência dos Estados Unidos e primeiro presidente do país."
    }
  },
  {
    "day": 23,
    "month": 2,
    "event": {
      "preview": "Em 1945, a bandeira dos EUA foi hasteada em Iwo Jima.",
      "fullEvent": "Em 23 de fevereiro de 1945, fuzileiros navais norte-americanos hastearam uma bandeira no monte Suribachi durante a Batalha de Iwo Jima. A fotografia do momento tornou-se uma das imagens mais famosas da guerra."
    }
  },
  {
    "day": 24,
    "month": 2,
    "event": {
      "preview": "Em 1582, o papa Gregório XIII anunciou o calendário gregoriano.",
      "fullEvent": "Em 24 de fevereiro de 1582, o papa Gregório XIII promulgou a bula que estabeleceu a reforma do calendário. O calendário gregoriano seria adotado gradualmente em grande parte do mundo."
    }
  },
  {
    "day": 25,
    "month": 2,
    "event": {
      "preview": "Em 1836, Samuel Colt recebeu patente de seu revólver.",
      "fullEvent": "Em 25 de fevereiro de 1836, Samuel Colt recebeu uma patente norte-americana para um mecanismo de arma de fogo com cilindro giratório, base de seus famosos revólveres."
    }
  },
  {
    "day": 26,
    "month": 2,
    "event": {
      "preview": "Em 1815, Napoleão escapou da ilha de Elba.",
      "fullEvent": "Em 26 de fevereiro de 1815, Napoleão Bonaparte deixou o exílio na ilha de Elba e retornou à França, iniciando o período conhecido como os Cem Dias, encerrado após Waterloo."
    }
  },
  {
    "day": 27,
    "month": 2,
    "event": {
      "preview": "Em 1933, o Reichstag pegou fogo em Berlim.",
      "fullEvent": "Em 27 de fevereiro de 1933, o prédio do Reichstag, sede do parlamento alemão, foi incendiado. O governo nazista usou o episódio para justificar medidas de emergência e repressão política."
    }
  },
  {
    "day": 28,
    "month": 2,
    "event": {
      "preview": "Em 1953, Watson e Crick avançaram no modelo da estrutura do DNA.",
      "fullEvent": "Em 28 de fevereiro de 1953, James Watson e Francis Crick chegaram ao modelo de dupla hélice do DNA, apoiando-se também em dados experimentais fundamentais produzidos por outros pesquisadores, incluindo Rosalind Franklin e Maurice Wilkins."
    }
  },
  {
    "day": 1,
    "month": 3,
    "event": {
      "preview": "Em 1872, foi criado o Parque Nacional de Yellowstone.",
      "fullEvent": "Em 1º de março de 1872, o presidente Ulysses S. Grant assinou a lei que criou Yellowstone, nos Estados Unidos, frequentemente descrito como o primeiro parque nacional do mundo."
    }
  },
  {
    "day": 2,
    "month": 3,
    "event": {
      "preview": "Em 1969, o Concorde realizou seu primeiro voo.",
      "fullEvent": "Em 2 de março de 1969, o protótipo franco-britânico Concorde realizou seu primeiro voo. O avião supersônico comercial operaria rotas transatlânticas por décadas."
    }
  },
  {
    "day": 3,
    "month": 3,
    "event": {
      "preview": "Em 1847, nasceu Alexander Graham Bell.",
      "fullEvent": "Em 3 de março de 1847, nasceu Alexander Graham Bell, inventor e pesquisador associado ao desenvolvimento e patenteamento do telefone."
    }
  },
  {
    "day": 4,
    "month": 3,
    "event": {
      "preview": "Em 1933, Franklin Roosevelt assumiu a presidência dos EUA.",
      "fullEvent": "Em 4 de março de 1933, Franklin D. Roosevelt tomou posse como presidente dos Estados Unidos durante a Grande Depressão e iniciou o conjunto de políticas que ficaria conhecido como New Deal."
    }
  },
  {
    "day": 5,
    "month": 3,
    "event": {
      "preview": "Em 1770, ocorreu o Massacre de Boston.",
      "fullEvent": "Em 5 de março de 1770, soldados britânicos atiraram contra colonos em Boston, matando cinco pessoas. O episódio virou importante símbolo da resistência que antecedeu a Independência dos Estados Unidos."
    }
  },
  {
    "day": 6,
    "month": 3,
    "event": {
      "preview": "Em 1899, a Bayer registrou a marca Aspirin.",
      "fullEvent": "Em 6 de março de 1899, a empresa Bayer registrou a marca Aspirin para seu produto à base de ácido acetilsalicílico, medicamento que se tornaria um dos mais conhecidos do mundo."
    }
  },
  {
    "day": 7,
    "month": 3,
    "event": {
      "preview": "Em 1876, Bell recebeu a patente do telefone.",
      "fullEvent": "Em 7 de março de 1876, Alexander Graham Bell recebeu a patente norte-americana nº 174.465, relacionada a um método de transmissão da voz por sinais elétricos."
    }
  },
  {
    "day": 8,
    "month": 3,
    "event": {
      "preview": "Em 1917, protestos em Petrogrado ajudaram a iniciar a Revolução Russa.",
      "fullEvent": "Em 8 de março de 1917 pelo calendário gregoriano, manifestações em Petrogrado por pão, melhores condições e fim da guerra se ampliaram e contribuíram para a Revolução de Fevereiro na Rússia."
    }
  },
  {
    "day": 9,
    "month": 3,
    "event": {
      "preview": "Em 1959, a boneca Barbie foi apresentada em Nova York.",
      "fullEvent": "Em 9 de março de 1959, a Mattel apresentou a boneca Barbie na Feira de Brinquedos de Nova York. O produto se tornaria um dos brinquedos mais reconhecidos da cultura popular."
    }
  },
  {
    "day": 10,
    "month": 3,
    "event": {
      "preview": "Em 1876, Bell fez uma famosa transmissão telefônica.",
      "fullEvent": "Em 10 de março de 1876, Alexander Graham Bell transmitiu a frase dirigida a Thomas Watson em uma das primeiras demonstrações bem-sucedidas de fala transmitida por telefone."
    }
  },
  {
    "day": 11,
    "month": 3,
    "event": {
      "preview": "Em 2011, terremoto e tsunami atingiram o Japão.",
      "fullEvent": "Em 11 de março de 2011, um terremoto de magnitude 9,0 atingiu a costa nordeste do Japão e gerou um enorme tsunami. O desastre também provocou a crise nuclear de Fukushima."
    }
  },
  {
    "day": 12,
    "month": 3,
    "event": {
      "preview": "Em 1930, Gandhi iniciou a Marcha do Sal.",
      "fullEvent": "Em 12 de março de 1930, Mahatma Gandhi iniciou a Marcha do Sal contra o monopólio e os impostos britânicos na Índia, transformando o ato em um poderoso símbolo de desobediência civil não violenta."
    }
  },
  {
    "day": 13,
    "month": 3,
    "event": {
      "preview": "Em 1781, William Herschel descobriu Urano.",
      "fullEvent": "Em 13 de março de 1781, o astrônomo William Herschel observou Urano. Foi o primeiro planeta descoberto com auxílio de telescópio na era moderna."
    }
  },
  {
    "day": 14,
    "month": 3,
    "event": {
      "preview": "Em 1879, nasceu Albert Einstein.",
      "fullEvent": "Em 14 de março de 1879, nasceu Albert Einstein, físico responsável por contribuições decisivas à física moderna, incluindo a relatividade especial e geral."
    }
  },
  {
    "day": 15,
    "month": 3,
    "event": {
      "preview": "Em 44 a.C., Júlio César foi assassinado.",
      "fullEvent": "Em 15 de março de 44 a.C., Júlio César foi assassinado por um grupo de senadores romanos. O episódio, conhecido como os Idos de Março, acelerou a crise da República Romana."
    }
  },
  {
    "day": 16,
    "month": 3,
    "event": {
      "preview": "Em 1926, Robert Goddard lançou um foguete de combustível líquido.",
      "fullEvent": "Em 16 de março de 1926, Robert H. Goddard lançou com sucesso um foguete movido a combustível líquido em Massachusetts, marco importante na história da tecnologia de foguetes."
    }
  },
  {
    "day": 17,
    "month": 3,
    "event": {
      "preview": "Em 1861, a Itália foi proclamada reino unificado.",
      "fullEvent": "Em 17 de março de 1861, Vítor Emanuel II foi proclamado rei da Itália, consolidando uma etapa central do processo de unificação italiana conhecido como Risorgimento."
    }
  },
  {
    "day": 18,
    "month": 3,
    "event": {
      "preview": "Em 1965, Alexei Leonov realizou a primeira caminhada espacial.",
      "fullEvent": "Em 18 de março de 1965, o cosmonauta soviético Alexei Leonov saiu da nave Voskhod 2 e tornou-se a primeira pessoa a realizar uma atividade extraveicular no espaço."
    }
  },
  {
    "day": 19,
    "month": 3,
    "event": {
      "preview": "Em 1918, o Congresso dos EUA estabeleceu fusos horários legais.",
      "fullEvent": "Em 19 de março de 1918, os Estados Unidos aprovaram uma lei padronizando seus fusos horários e introduzindo o horário de verão em âmbito federal."
    }
  },
  {
    "day": 20,
    "month": 3,
    "event": {
      "preview": "Em 1602, foi criada a Companhia Holandesa das Índias Orientais.",
      "fullEvent": "Em 20 de março de 1602, os Países Baixos concederam carta à Companhia Holandesa das Índias Orientais, uma das mais poderosas companhias comerciais da era moderna."
    }
  },
  {
    "day": 21,
    "month": 3,
    "event": {
      "preview": "Em 1960, ocorreu o Massacre de Sharpeville.",
      "fullEvent": "Em 21 de março de 1960, a polícia sul-africana abriu fogo contra manifestantes que protestavam contra as leis de passe do apartheid em Sharpeville, matando dezenas de pessoas."
    }
  },
  {
    "day": 22,
    "month": 3,
    "event": {
      "preview": "Em 1765, o Parlamento britânico aprovou a Lei do Selo.",
      "fullEvent": "Em 22 de março de 1765, o Parlamento britânico aprovou o Stamp Act, impondo tributos sobre documentos e impressos nas colônias americanas e ampliando a resistência colonial."
    }
  },
  {
    "day": 23,
    "month": 3,
    "event": {
      "preview": "Em 1956, o Paquistão tornou-se uma república islâmica.",
      "fullEvent": "Em 23 de março de 1956, entrou em vigor a primeira constituição do Paquistão, transformando o país em uma república e substituindo o status anterior de domínio britânico."
    }
  },
  {
    "day": 24,
    "month": 3,
    "event": {
      "preview": "Em 1882, Robert Koch anunciou a descoberta do bacilo da tuberculose.",
      "fullEvent": "Em 24 de março de 1882, Robert Koch apresentou a descoberta da bactéria causadora da tuberculose, avanço fundamental para compreender e combater uma das doenças mais mortais da época."
    }
  },
  {
    "day": 25,
    "month": 3,
    "event": {
      "preview": "Em 1957, foram assinados os Tratados de Roma.",
      "fullEvent": "Em 25 de março de 1957, seis países europeus assinaram os Tratados de Roma, criando a Comunidade Econômica Europeia e a Euratom, marcos do processo de integração europeia."
    }
  },
  {
    "day": 26,
    "month": 3,
    "event": {
      "preview": "Em 1971, Bangladesh declarou independência do Paquistão.",
      "fullEvent": "Em 26 de março de 1971, foi proclamada a independência de Bangladesh, dando início a uma guerra que terminaria com a criação do novo Estado no sul da Ásia."
    }
  },
  {
    "day": 27,
    "month": 3,
    "event": {
      "preview": "Em 1964, o terremoto do Alasca atingiu magnitude 9,2.",
      "fullEvent": "Em 27 de março de 1964, o chamado Grande Terremoto do Alasca atingiu magnitude 9,2, um dos maiores já registrados instrumentalmente, e gerou tsunamis no Pacífico."
    }
  },
  {
    "day": 28,
    "month": 3,
    "event": {
      "preview": "Em 1979, ocorreu o acidente nuclear de Three Mile Island.",
      "fullEvent": "Em 28 de março de 1979, uma falha no reator da usina de Three Mile Island, na Pensilvânia, causou o mais grave acidente da história da energia nuclear comercial dos Estados Unidos."
    }
  },
  {
    "day": 29,
    "month": 3,
    "event": {
      "preview": "Em 1974, a sonda Mariner 10 passou por Mercúrio.",
      "fullEvent": "Em 29 de março de 1974, a Mariner 10 realizou a primeira passagem de uma espaçonave por Mercúrio e enviou imagens detalhadas do planeta."
    }
  },
  {
    "day": 30,
    "month": 3,
    "event": {
      "preview": "Em 1867, os EUA compraram o Alasca da Rússia.",
      "fullEvent": "Em 30 de março de 1867, Estados Unidos e Império Russo assinaram o acordo de compra do Alasca por 7,2 milhões de dólares."
    }
  },
  {
    "day": 31,
    "month": 3,
    "event": {
      "preview": "Em 1889, a Torre Eiffel foi inaugurada.",
      "fullEvent": "Em 31 de março de 1889, a Torre Eiffel foi oficialmente inaugurada em Paris. Construída para a Exposição Universal, tornou-se um dos símbolos arquitetônicos mais reconhecidos do mundo."
    }
  },
  {
    "day": 1,
    "month": 4,
    "event": {
      "preview": "Em 1976, a Apple Computer foi fundada.",
      "fullEvent": "Em 1º de abril de 1976, Steve Jobs, Steve Wozniak e Ronald Wayne fundaram a Apple Computer, empresa que teria enorme influência na história dos computadores pessoais e dispositivos móveis."
    }
  },
  {
    "day": 2,
    "month": 4,
    "event": {
      "preview": "Em 1982, a Argentina ocupou as Ilhas Falkland/Malvinas.",
      "fullEvent": "Em 2 de abril de 1982, forças argentinas desembarcaram nas Ilhas Falkland/Malvinas, desencadeando a guerra com o Reino Unido que duraria até junho daquele ano."
    }
  },
  {
    "day": 3,
    "month": 4,
    "event": {
      "preview": "Em 1973, Martin Cooper fez uma das primeiras chamadas de celular portátil.",
      "fullEvent": "Em 3 de abril de 1973, o engenheiro Martin Cooper, da Motorola, realizou em Nova York uma demonstração pública de chamada usando um telefone celular portátil."
    }
  },
  {
    "day": 4,
    "month": 4,
    "event": {
      "preview": "Em 1968, Martin Luther King Jr. foi assassinado.",
      "fullEvent": "Em 4 de abril de 1968, Martin Luther King Jr. foi assassinado em Memphis. O pastor e ativista foi uma das principais lideranças da luta pelos direitos civis nos Estados Unidos."
    }
  },
  {
    "day": 5,
    "month": 4,
    "event": {
      "preview": "Em 1722, europeus chegaram à Ilha de Páscoa em uma expedição holandesa.",
      "fullEvent": "Em 5 de abril de 1722, a expedição do navegador neerlandês Jacob Roggeveen chegou à ilha de Rapa Nui, conhecida pelos europeus como Ilha de Páscoa."
    }
  },
  {
    "day": 6,
    "month": 4,
    "event": {
      "preview": "Em 1896, começaram em Atenas os primeiros Jogos Olímpicos modernos.",
      "fullEvent": "Em 6 de abril de 1896, foi realizada em Atenas a cerimônia de abertura dos primeiros Jogos Olímpicos da era moderna, inspirados nos antigos jogos gregos."
    }
  },
  {
    "day": 7,
    "month": 4,
    "event": {
      "preview": "Em 1948, foi criada a Organização Mundial da Saúde.",
      "fullEvent": "Em 7 de abril de 1948, entrou em vigor a Constituição da Organização Mundial da Saúde, agência das Nações Unidas voltada à cooperação internacional em saúde pública."
    }
  },
  {
    "day": 8,
    "month": 4,
    "event": {
      "preview": "Em 1973, morreu Pablo Picasso.",
      "fullEvent": "Em 8 de abril de 1973, morreu Pablo Picasso, artista espanhol associado a movimentos como o cubismo e uma das figuras mais influentes da arte do século XX."
    }
  },
  {
    "day": 9,
    "month": 4,
    "event": {
      "preview": "Em 1865, Robert E. Lee se rendeu a Ulysses Grant.",
      "fullEvent": "Em 9 de abril de 1865, o general confederado Robert E. Lee se rendeu a Ulysses S. Grant em Appomattox Court House, sinalizando o fim próximo da Guerra Civil Americana."
    }
  },
  {
    "day": 10,
    "month": 4,
    "event": {
      "preview": "Em 1912, o Titanic partiu em sua viagem inaugural.",
      "fullEvent": "Em 10 de abril de 1912, o RMS Titanic deixou Southampton rumo a Nova York em sua viagem inaugural. O navio afundaria poucos dias depois no Atlântico Norte."
    }
  },
  {
    "day": 11,
    "month": 4,
    "event": {
      "preview": "Em 1970, a Apollo 13 foi lançada.",
      "fullEvent": "Em 11 de abril de 1970, a NASA lançou a missão Apollo 13 em direção à Lua. Uma explosão a bordo cancelaria o pouso, e a missão se transformaria em uma dramática operação de retorno seguro."
    }
  },
  {
    "day": 12,
    "month": 4,
    "event": {
      "preview": "Em 1961, Yuri Gagarin tornou-se o primeiro ser humano no espaço.",
      "fullEvent": "Em 12 de abril de 1961, Yuri Gagarin completou uma órbita da Terra a bordo da Vostok 1, tornando-se a primeira pessoa a viajar ao espaço."
    }
  },
  {
    "day": 13,
    "month": 4,
    "event": {
      "preview": "Em 1970, uma explosão atingiu a Apollo 13.",
      "fullEvent": "Em 13 de abril de 1970, um tanque de oxigênio explodiu na nave Apollo 13 durante a viagem à Lua. A frase 'Houston, we've had a problem' se tornaria associada ao episódio."
    }
  },
  {
    "day": 14,
    "month": 4,
    "event": {
      "preview": "Em 1912, o Titanic atingiu um iceberg.",
      "fullEvent": "Na noite de 14 de abril de 1912, o Titanic colidiu com um iceberg no Atlântico Norte. O navio afundou nas primeiras horas do dia seguinte, causando mais de 1.500 mortes."
    }
  },
  {
    "day": 15,
    "month": 4,
    "event": {
      "preview": "Em 1452, nasceu Leonardo da Vinci.",
      "fullEvent": "Em 15 de abril de 1452, nasceu Leonardo da Vinci, artista, inventor e estudioso renascentista conhecido por obras como Mona Lisa e A Última Ceia."
    }
  },
  {
    "day": 16,
    "month": 4,
    "event": {
      "preview": "Em 1943, Albert Hofmann descobriu acidentalmente os efeitos do LSD.",
      "fullEvent": "Em 16 de abril de 1943, o químico suíço Albert Hofmann absorveu acidentalmente uma pequena quantidade de LSD e percebeu seus efeitos psicoativos, que investigaria de forma deliberada três dias depois."
    }
  },
  {
    "day": 17,
    "month": 4,
    "event": {
      "preview": "Em 1961, começou a invasão da Baía dos Porcos.",
      "fullEvent": "Em 17 de abril de 1961, exilados cubanos apoiados pelos Estados Unidos desembarcaram na Baía dos Porcos, em Cuba, numa tentativa fracassada de derrubar o governo de Fidel Castro."
    }
  },
  {
    "day": 18,
    "month": 4,
    "event": {
      "preview": "Em 1906, um grande terremoto atingiu São Francisco.",
      "fullEvent": "Em 18 de abril de 1906, um forte terremoto atingiu São Francisco, na Califórnia. Tremores e incêndios subsequentes destruíram grande parte da cidade."
    }
  },
  {
    "day": 19,
    "month": 4,
    "event": {
      "preview": "Em 1775, ocorreram as batalhas de Lexington e Concord.",
      "fullEvent": "Em 19 de abril de 1775, confrontos entre milícias coloniais e tropas britânicas em Lexington e Concord marcaram o início militar da Guerra de Independência dos Estados Unidos."
    }
  },
  {
    "day": 20,
    "month": 4,
    "event": {
      "preview": "Em 1990, o telescópio espacial Hubble foi lançado.",
      "fullEvent": "Em 20 de abril de 1990, o ônibus espacial Discovery decolou levando o telescópio espacial Hubble, que seria colocado em órbita no dia seguinte e transformaria a astronomia observacional."
    }
  },
  {
    "day": 21,
    "month": 4,
    "event": {
      "preview": "Em 1792, Tiradentes foi executado no Rio de Janeiro.",
      "fullEvent": "Em 21 de abril de 1792, Joaquim José da Silva Xavier, o Tiradentes, foi executado no Rio de Janeiro por sua participação na Inconfidência Mineira. Mais tarde, tornou-se um dos símbolos cívicos da República brasileira."
    }
  },
  {
    "day": 22,
    "month": 4,
    "event": {
      "preview": "Em 1500, a expedição de Pedro Álvares Cabral chegou ao território brasileiro.",
      "fullEvent": "Em 22 de abril de 1500, a frota portuguesa comandada por Pedro Álvares Cabral avistou terras na costa do atual Brasil. O episódio marcou o início da colonização portuguesa, embora o território já fosse habitado por numerosos povos indígenas."
    }
  },
  {
    "day": 23,
    "month": 4,
    "event": {
      "preview": "Em 1616, morreram Miguel de Cervantes e William Shakespeare em datas próximas registradas como 23 de abril.",
      "fullEvent": "O dia 23 de abril ficou associado às mortes de Miguel de Cervantes e William Shakespeare em 1616, embora os calendários usados em Espanha e Inglaterra fossem diferentes. A data inspirou o Dia Mundial do Livro."
    }
  },
  {
    "day": 24,
    "month": 4,
    "event": {
      "preview": "Em 1990, o Hubble foi colocado em órbita.",
      "fullEvent": "Em 24 de abril de 1990, a tripulação do Discovery colocou o Telescópio Espacial Hubble em órbita. Desde então, ele produziu observações fundamentais sobre estrelas, galáxias e a expansão do Universo."
    }
  },
  {
    "day": 25,
    "month": 4,
    "event": {
      "preview": "Em 1974, a Revolução dos Cravos derrubou a ditadura portuguesa.",
      "fullEvent": "Em 25 de abril de 1974, um movimento militar derrubou o Estado Novo em Portugal. A Revolução dos Cravos abriu caminho para a democratização e acelerou a descolonização portuguesa na África."
    }
  },
  {
    "day": 26,
    "month": 4,
    "event": {
      "preview": "Em 1986, ocorreu o desastre nuclear de Chernobyl.",
      "fullEvent": "Em 26 de abril de 1986, o reator 4 da usina de Chernobyl explodiu durante um teste de segurança. O acidente liberou grande quantidade de material radioativo e teve consequências internacionais duradouras."
    }
  },
  {
    "day": 27,
    "month": 4,
    "event": {
      "preview": "Em 1994, a África do Sul realizou sua primeira eleição nacional multirracial.",
      "fullEvent": "Em 27 de abril de 1994, sul-africanos participaram da primeira eleição nacional com sufrágio universal do país, marco do fim institucional do apartheid e da ascensão de Nelson Mandela à presidência."
    }
  },
  {
    "day": 28,
    "month": 4,
    "event": {
      "preview": "Em 1789, ocorreu o motim do Bounty.",
      "fullEvent": "Em 28 de abril de 1789, parte da tripulação do HMS Bounty se amotinou contra o capitão William Bligh no Pacífico Sul. O episódio se tornaria um dos motins navais mais famosos da história."
    }
  },
  {
    "day": 29,
    "month": 4,
    "event": {
      "preview": "Em 1945, o campo de Dachau foi libertado.",
      "fullEvent": "Em 29 de abril de 1945, tropas norte-americanas libertaram o campo de concentração de Dachau, na Alemanha, encontrando milhares de prisioneiros e evidências dos crimes nazistas."
    }
  },
  {
    "day": 30,
    "month": 4,
    "event": {
      "preview": "Em 1945, Adolf Hitler morreu em Berlim.",
      "fullEvent": "Em 30 de abril de 1945, com Berlim cercada pelo Exército Vermelho, Adolf Hitler morreu em seu bunker. A Alemanha nazista se renderia poucos dias depois."
    }
  },
  {
    "day": 1,
    "month": 5,
    "event": {
      "preview": "Em 1886, uma grande mobilização operária nos EUA reivindicou jornada de oito horas.",
      "fullEvent": "Em 1º de maio de 1886, trabalhadores em várias cidades dos Estados Unidos iniciaram greves pela jornada de oito horas. As mobilizações de Chicago e os acontecimentos posteriores ajudaram a transformar a data em símbolo internacional do trabalho."
    }
  },
  {
    "day": 2,
    "month": 5,
    "event": {
      "preview": "Em 2011, Osama bin Laden foi morto no Paquistão.",
      "fullEvent": "Em 2 de maio de 2011, forças especiais dos Estados Unidos mataram Osama bin Laden em Abbottabad, no Paquistão, quase dez anos depois dos atentados de 11 de setembro de 2001."
    }
  },
  {
    "day": 3,
    "month": 5,
    "event": {
      "preview": "Em 1978, foi enviado o primeiro e-mail comercial não solicitado em massa.",
      "fullEvent": "Em 3 de maio de 1978, Gary Thuerk enviou uma mensagem promocional para centenas de usuários da ARPANET, episódio frequentemente citado como o primeiro spam comercial por e-mail."
    }
  },
  {
    "day": 4,
    "month": 5,
    "event": {
      "preview": "Em 1979, Margaret Thatcher tornou-se primeira-ministra britânica.",
      "fullEvent": "Em 4 de maio de 1979, Margaret Thatcher assumiu como primeira-ministra do Reino Unido, tornando-se a primeira mulher a ocupar o cargo."
    }
  },
  {
    "day": 5,
    "month": 5,
    "event": {
      "preview": "Em 1961, Alan Shepard tornou-se o primeiro norte-americano no espaço.",
      "fullEvent": "Em 5 de maio de 1961, Alan Shepard realizou um voo suborbital na cápsula Freedom 7 e tornou-se o primeiro cidadão dos Estados Unidos a viajar ao espaço."
    }
  },
  {
    "day": 6,
    "month": 5,
    "event": {
      "preview": "Em 1937, o dirigível Hindenburg pegou fogo.",
      "fullEvent": "Em 6 de maio de 1937, o dirigível alemão Hindenburg incendiou-se ao tentar pousar em Lakehurst, nos Estados Unidos. O desastre ajudou a encerrar a era dos grandes dirigíveis comerciais de passageiros."
    }
  },
  {
    "day": 7,
    "month": 5,
    "event": {
      "preview": "Em 1945, a Alemanha assinou rendição militar em Reims.",
      "fullEvent": "Em 7 de maio de 1945, representantes alemães assinaram em Reims a rendição incondicional de suas forças armadas aos Aliados, preparando o fim da guerra na Europa."
    }
  },
  {
    "day": 8,
    "month": 5,
    "event": {
      "preview": "Em 1945, celebrou-se a vitória aliada na Europa.",
      "fullEvent": "Em 8 de maio de 1945, a rendição da Alemanha nazista entrou em vigor para as potências ocidentais. A data é lembrada como Dia da Vitória na Europa."
    }
  },
  {
    "day": 9,
    "month": 5,
    "event": {
      "preview": "Em 1950, Robert Schuman apresentou o plano que inspiraria a integração europeia.",
      "fullEvent": "Em 9 de maio de 1950, o ministro francês Robert Schuman propôs integrar a produção de carvão e aço da França e da Alemanha Ocidental, ideia que seria um dos embriões da União Europeia."
    }
  },
  {
    "day": 10,
    "month": 5,
    "event": {
      "preview": "Em 1869, foi concluída a primeira ferrovia transcontinental dos EUA.",
      "fullEvent": "Em 10 de maio de 1869, as ferrovias Union Pacific e Central Pacific foram ligadas em Promontory Summit, Utah, conectando por trilhos as costas leste e oeste dos Estados Unidos."
    }
  },
  {
    "day": 11,
    "month": 5,
    "event": {
      "preview": "Em 1997, Deep Blue derrotou Kasparov em um match de xadrez.",
      "fullEvent": "Em 11 de maio de 1997, o computador Deep Blue, da IBM, venceu Garry Kasparov no sexto jogo de uma disputa de seis partidas, tornando-se o primeiro sistema computacional a derrotar um campeão mundial em um match sob condições oficiais."
    }
  },
  {
    "day": 12,
    "month": 5,
    "event": {
      "preview": "Em 1820, nasceu Florence Nightingale.",
      "fullEvent": "Em 12 de maio de 1820, nasceu Florence Nightingale, enfermeira britânica que teve papel central na profissionalização da enfermagem e no uso de estatísticas em saúde pública."
    }
  },
  {
    "day": 13,
    "month": 5,
    "event": {
      "preview": "Em 1888, a Lei Áurea aboliu legalmente a escravidão no Brasil.",
      "fullEvent": "Em 13 de maio de 1888, a princesa Isabel sancionou a Lei Áurea, extinguindo juridicamente a escravidão no Brasil. A medida não foi acompanhada de políticas amplas de reparação ou integração social para a população liberta."
    }
  },
  {
    "day": 14,
    "month": 5,
    "event": {
      "preview": "Em 1796, Edward Jenner realizou um experimento decisivo de vacinação contra varíola.",
      "fullEvent": "Em 14 de maio de 1796, Edward Jenner inoculou material de varíola bovina em James Phipps e depois demonstrou proteção contra a varíola humana, marco histórico da vacinação."
    }
  },
  {
    "day": 15,
    "month": 5,
    "event": {
      "preview": "Em 1940, abriu a primeira unidade do McDonald's dos irmãos McDonald.",
      "fullEvent": "Em 15 de maio de 1940, Richard e Maurice McDonald abriram um restaurante em San Bernardino, Califórnia, negócio que mais tarde daria origem à rede McDonald's."
    }
  },
  {
    "day": 16,
    "month": 5,
    "event": {
      "preview": "Em 1960, Theodore Maiman operou o primeiro laser funcional.",
      "fullEvent": "Em 16 de maio de 1960, Theodore Maiman demonstrou um laser de rubi funcional no Hughes Research Laboratories, abrindo caminho para inúmeras aplicações científicas, médicas e industriais."
    }
  },
  {
    "day": 17,
    "month": 5,
    "event": {
      "preview": "Em 1954, a Suprema Corte dos EUA decidiu Brown v. Board of Education.",
      "fullEvent": "Em 17 de maio de 1954, a Suprema Corte dos Estados Unidos decidiu que a segregação racial em escolas públicas era inconstitucional, marco jurídico do movimento por direitos civis."
    }
  },
  {
    "day": 18,
    "month": 5,
    "event": {
      "preview": "Em 1980, o monte Santa Helena entrou em erupção.",
      "fullEvent": "Em 18 de maio de 1980, o vulcão Mount St. Helens entrou em erupção no estado de Washington, causando dezenas de mortes e enormes transformações na paisagem."
    }
  },
  {
    "day": 19,
    "month": 5,
    "event": {
      "preview": "Em 1536, Ana Bolena foi executada.",
      "fullEvent": "Em 19 de maio de 1536, Ana Bolena, segunda esposa de Henrique VIII, foi executada na Torre de Londres após ser condenada por acusações de adultério, incesto e traição."
    }
  },
  {
    "day": 20,
    "month": 5,
    "event": {
      "preview": "Em 1927, Charles Lindbergh partiu para seu voo solo transatlântico.",
      "fullEvent": "Em 20 de maio de 1927, Charles Lindbergh decolou de Nova York a bordo do Spirit of St. Louis rumo a Paris, iniciando o primeiro voo solo sem escalas através do Atlântico."
    }
  },
  {
    "day": 21,
    "month": 5,
    "event": {
      "preview": "Em 1927, Lindbergh pousou em Paris após cruzar sozinho o Atlântico.",
      "fullEvent": "Em 21 de maio de 1927, Charles Lindbergh pousou perto de Paris após voar sozinho e sem escalas desde Nova York, feito que o tornou uma celebridade mundial da aviação."
    }
  },
  {
    "day": 22,
    "month": 5,
    "event": {
      "preview": "Em 1843, uma grande caravana partiu pela Trilha do Oregon.",
      "fullEvent": "Em 22 de maio de 1843, centenas de colonos iniciaram uma das maiores migrações iniciais pela Trilha do Oregon, rota decisiva na expansão dos Estados Unidos para o oeste."
    }
  },
  {
    "day": 23,
    "month": 5,
    "event": {
      "preview": "Em 1934, Bonnie e Clyde morreram em uma emboscada.",
      "fullEvent": "Em 23 de maio de 1934, Bonnie Parker e Clyde Barrow foram mortos por policiais em uma emboscada na Louisiana, encerrando a trajetória da dupla de criminosos que se tornou parte do imaginário popular norte-americano."
    }
  },
  {
    "day": 24,
    "month": 5,
    "event": {
      "preview": "Em 1844, Samuel Morse enviou uma famosa mensagem telegráfica.",
      "fullEvent": "Em 24 de maio de 1844, Samuel Morse enviou de Washington a Baltimore a mensagem 'What hath God wrought', demonstrando o potencial da comunicação telegráfica a longa distância."
    }
  },
  {
    "day": 25,
    "month": 5,
    "event": {
      "preview": "Em 1961, John F. Kennedy anunciou a meta de levar um homem à Lua.",
      "fullEvent": "Em 25 de maio de 1961, o presidente John F. Kennedy declarou ao Congresso dos Estados Unidos o objetivo de pousar um ser humano na Lua e trazê-lo de volta com segurança antes do fim da década."
    }
  },
  {
    "day": 26,
    "month": 5,
    "event": {
      "preview": "Em 1896, foi publicado o índice Dow Jones Industrial Average.",
      "fullEvent": "Em 26 de maio de 1896, o índice Dow Jones Industrial Average foi publicado pela primeira vez, tornando-se uma das referências mais conhecidas para acompanhar o mercado acionário dos Estados Unidos."
    }
  },
  {
    "day": 27,
    "month": 5,
    "event": {
      "preview": "Em 1937, a ponte Golden Gate foi aberta para pedestres.",
      "fullEvent": "Em 27 de maio de 1937, milhares de pessoas atravessaram a ponte Golden Gate a pé em sua abertura oficial ao público. Os automóveis começariam a passar no dia seguinte."
    }
  },
  {
    "day": 28,
    "month": 5,
    "event": {
      "preview": "Em 1937, a ponte Golden Gate foi aberta ao tráfego de veículos.",
      "fullEvent": "Em 28 de maio de 1937, a ponte Golden Gate foi aberta ao tráfego de automóveis, ligando São Francisco ao condado de Marin e tornando-se um ícone da engenharia."
    }
  },
  {
    "day": 29,
    "month": 5,
    "event": {
      "preview": "Em 1953, Edmund Hillary e Tenzing Norgay chegaram ao topo do Everest.",
      "fullEvent": "Em 29 de maio de 1953, Edmund Hillary e Tenzing Norgay alcançaram o cume do monte Everest, na primeira ascensão confirmada ao ponto mais alto da Terra."
    }
  },
  {
    "day": 30,
    "month": 5,
    "event": {
      "preview": "Em 1431, Joana d'Arc foi executada em Rouen.",
      "fullEvent": "Em 30 de maio de 1431, Joana d'Arc foi queimada na fogueira em Rouen após um julgamento por heresia. Séculos mais tarde, seria canonizada pela Igreja Católica."
    }
  },
  {
    "day": 31,
    "month": 5,
    "event": {
      "preview": "Em 1911, o Titanic foi lançado ao mar.",
      "fullEvent": "Em 31 de maio de 1911, o casco do RMS Titanic foi lançado ao mar em Belfast para a fase final de construção e acabamento, cerca de um ano antes de sua viagem inaugural."
    }
  },
  {
    "day": 1,
    "month": 6,
    "event": {
      "preview": "Em 1967, foi lançado o álbum Sgt. Pepper's Lonely Hearts Club Band.",
      "fullEvent": "Em 1º de junho de 1967, os Beatles lançaram no Reino Unido o álbum Sgt. Pepper's Lonely Hearts Club Band, obra de enorme influência na música popular e na produção de álbuns conceituais."
    }
  },
  {
    "day": 2,
    "month": 6,
    "event": {
      "preview": "Em 1953, Elizabeth II foi coroada.",
      "fullEvent": "Em 2 de junho de 1953, Elizabeth II foi coroada na Abadia de Westminster. A cerimônia foi televisionada e acompanhada por milhões de pessoas."
    }
  },
  {
    "day": 3,
    "month": 6,
    "event": {
      "preview": "Em 1965, Edward White realizou a primeira caminhada espacial de um norte-americano.",
      "fullEvent": "Em 3 de junho de 1965, Edward H. White II saiu da cápsula Gemini 4 e realizou a primeira atividade extraveicular de um astronauta dos Estados Unidos."
    }
  },
  {
    "day": 4,
    "month": 6,
    "event": {
      "preview": "Em 1989, tropas chinesas reprimiram os protestos em Pequim.",
      "fullEvent": "Em 4 de junho de 1989, forças do governo chinês reprimiram manifestações pró-reforma concentradas na Praça da Paz Celestial e arredores, em Pequim. O número exato de mortos permanece incerto e politicamente sensível."
    }
  },
  {
    "day": 5,
    "month": 6,
    "event": {
      "preview": "Em 1967, começou a Guerra dos Seis Dias.",
      "fullEvent": "Em 5 de junho de 1967, Israel lançou ataques contra forças aéreas de países árabes vizinhos, dando início à Guerra dos Seis Dias e a mudanças territoriais profundas no Oriente Médio."
    }
  },
  {
    "day": 6,
    "month": 6,
    "event": {
      "preview": "Em 1944, ocorreu o desembarque aliado na Normandia.",
      "fullEvent": "Em 6 de junho de 1944, forças aliadas desembarcaram nas praias da Normandia, na França ocupada. O Dia D abriu uma grande frente ocidental contra a Alemanha nazista."
    }
  },
  {
    "day": 7,
    "month": 6,
    "event": {
      "preview": "Em 1494, Portugal e Castela assinaram o Tratado de Tordesilhas.",
      "fullEvent": "Em 7 de junho de 1494, representantes de Portugal e Castela assinaram o Tratado de Tordesilhas, estabelecendo uma linha de divisão das áreas de expansão ultramarina das duas coroas."
    }
  },
  {
    "day": 8,
    "month": 6,
    "event": {
      "preview": "Em 1949, foi publicado '1984', de George Orwell.",
      "fullEvent": "Em 8 de junho de 1949, foi publicado no Reino Unido o romance 'Nineteen Eighty-Four', de George Orwell, obra que popularizou conceitos como Grande Irmão e duplipensar."
    }
  },
  {
    "day": 9,
    "month": 6,
    "event": {
      "preview": "Em 1934, o Pato Donald estreou em um curta-metragem.",
      "fullEvent": "Em 9 de junho de 1934, o personagem Pato Donald apareceu no curta 'The Wise Little Hen', iniciando uma longa trajetória na animação e nos quadrinhos da Disney."
    }
  },
  {
    "day": 10,
    "month": 6,
    "event": {
      "preview": "Em 1967, terminou a Guerra dos Seis Dias.",
      "fullEvent": "Em 10 de junho de 1967, cessaram os principais combates da Guerra dos Seis Dias, conflito que alterou profundamente as fronteiras e a política do Oriente Médio."
    }
  },
  {
    "day": 11,
    "month": 6,
    "event": {
      "preview": "Em 1963, Thích Quảng Đức se imolou em Saigon.",
      "fullEvent": "Em 11 de junho de 1963, o monge budista Thích Quảng Đức ateou fogo ao próprio corpo em Saigon em protesto contra a política religiosa do governo sul-vietnamita. A fotografia do ato ganhou repercussão mundial."
    }
  },
  {
    "day": 12,
    "month": 6,
    "event": {
      "preview": "Em 1987, Ronald Reagan pediu a derrubada do Muro de Berlim.",
      "fullEvent": "Em 12 de junho de 1987, diante do Portão de Brandemburgo, Ronald Reagan fez o discurso em que desafiou Mikhail Gorbachev a 'derrubar este muro', em referência ao Muro de Berlim."
    }
  },
  {
    "day": 13,
    "month": 6,
    "event": {
      "preview": "Em 1983, a Pioneer 10 tornou-se a primeira nave a ultrapassar a órbita de Netuno da época.",
      "fullEvent": "Em 13 de junho de 1983, a Pioneer 10 passou além da órbita de Netuno, então considerado o planeta mais distante em parte de sua órbita, tornando-se uma das primeiras sondas a deixar a região dos planetas principais."
    }
  },
  {
    "day": 14,
    "month": 6,
    "event": {
      "preview": "Em 1777, o Congresso Continental adotou a bandeira dos EUA.",
      "fullEvent": "Em 14 de junho de 1777, o Segundo Congresso Continental aprovou uma resolução definindo a bandeira dos Estados Unidos com 13 listras e 13 estrelas."
    }
  },
  {
    "day": 15,
    "month": 6,
    "event": {
      "preview": "Em 1215, a Magna Carta foi selada.",
      "fullEvent": "Em 15 de junho de 1215, o rei João da Inglaterra aceitou a Magna Carta em Runnymede. O documento tornou-se um símbolo histórico de limites ao poder do soberano e proteção de determinados direitos."
    }
  },
  {
    "day": 16,
    "month": 6,
    "event": {
      "preview": "Em 1963, Valentina Tereshkova tornou-se a primeira mulher no espaço.",
      "fullEvent": "Em 16 de junho de 1963, Valentina Tereshkova foi lançada a bordo da Vostok 6 e se tornou a primeira mulher a viajar ao espaço."
    }
  },
  {
    "day": 17,
    "month": 6,
    "event": {
      "preview": "Em 1972, ocorreu a invasão do complexo Watergate.",
      "fullEvent": "Em 17 de junho de 1972, cinco homens foram presos ao invadir a sede do Comitê Nacional Democrata no complexo Watergate, em Washington. A investigação resultante acabaria levando à renúncia de Richard Nixon."
    }
  },
  {
    "day": 18,
    "month": 6,
    "event": {
      "preview": "Em 1815, Napoleão foi derrotado em Waterloo.",
      "fullEvent": "Em 18 de junho de 1815, Napoleão Bonaparte foi derrotado na Batalha de Waterloo por forças britânicas, aliadas e prussianas, encerrando definitivamente seu retorno ao poder."
    }
  },
  {
    "day": 19,
    "month": 6,
    "event": {
      "preview": "Em 1865, a emancipação foi anunciada em Galveston, origem do Juneteenth.",
      "fullEvent": "Em 19 de junho de 1865, tropas da União chegaram a Galveston, Texas, e anunciaram a aplicação da emancipação aos escravizados do estado. A data deu origem à celebração conhecida como Juneteenth."
    }
  },
  {
    "day": 20,
    "month": 6,
    "event": {
      "preview": "Em 1789, representantes franceses fizeram o Juramento do Jogo da Péla.",
      "fullEvent": "Em 20 de junho de 1789, deputados do Terceiro Estado e aliados juraram não se dispersar antes de elaborar uma constituição para a França, episódio decisivo no início da Revolução Francesa."
    }
  },
  {
    "day": 21,
    "month": 6,
    "event": {
      "preview": "Em 1964, três ativistas dos direitos civis desapareceram no Mississippi.",
      "fullEvent": "Em 21 de junho de 1964, James Chaney, Andrew Goodman e Michael Schwerner desapareceram enquanto participavam da campanha Freedom Summer. Seus corpos seriam encontrados semanas depois."
    }
  },
  {
    "day": 22,
    "month": 6,
    "event": {
      "preview": "Em 1941, a Alemanha nazista invadiu a União Soviética.",
      "fullEvent": "Em 22 de junho de 1941, a Alemanha e seus aliados lançaram a Operação Barbarossa, invasão em larga escala da União Soviética que abriu a maior frente terrestre da Segunda Guerra Mundial."
    }
  },
  {
    "day": 23,
    "month": 6,
    "event": {
      "preview": "Em 2016, o Reino Unido realizou o referendo do Brexit.",
      "fullEvent": "Em 23 de junho de 2016, eleitores do Reino Unido participaram do referendo sobre a permanência na União Europeia. A opção pela saída recebeu a maioria dos votos válidos."
    }
  },
  {
    "day": 24,
    "month": 6,
    "event": {
      "preview": "Em 1948, começou o Bloqueio de Berlim.",
      "fullEvent": "Em 24 de junho de 1948, a União Soviética bloqueou acessos terrestres às zonas ocidentais de Berlim. Os aliados responderam com uma grande ponte aérea para abastecer a cidade."
    }
  },
  {
    "day": 25,
    "month": 6,
    "event": {
      "preview": "Em 1950, começou a Guerra da Coreia.",
      "fullEvent": "Em 25 de junho de 1950, forças da Coreia do Norte atravessaram o paralelo 38 e invadiram a Coreia do Sul, dando início à Guerra da Coreia."
    }
  },
  {
    "day": 26,
    "month": 6,
    "event": {
      "preview": "Em 1945, foi assinada a Carta das Nações Unidas.",
      "fullEvent": "Em 26 de junho de 1945, representantes de 50 países assinaram em São Francisco a Carta das Nações Unidas, documento fundador da ONU."
    }
  },
  {
    "day": 27,
    "month": 6,
    "event": {
      "preview": "Em 1954, começou a operar a primeira usina nuclear ligada a uma rede elétrica.",
      "fullEvent": "Em 27 de junho de 1954, a usina soviética de Obninsk passou a fornecer eletricidade à rede, sendo frequentemente citada como a primeira usina nuclear conectada a um sistema elétrico comercial."
    }
  },
  {
    "day": 28,
    "month": 6,
    "event": {
      "preview": "Em 1914, o arquiduque Francisco Ferdinando foi assassinado.",
      "fullEvent": "Em 28 de junho de 1914, o herdeiro do Império Austro-Húngaro, Francisco Ferdinando, foi assassinado em Sarajevo por Gavrilo Princip. O atentado desencadeou a crise que levaria à Primeira Guerra Mundial."
    }
  },
  {
    "day": 29,
    "month": 6,
    "event": {
      "preview": "Em 2007, o primeiro iPhone começou a ser vendido.",
      "fullEvent": "Em 29 de junho de 2007, o primeiro iPhone chegou às lojas nos Estados Unidos, ajudando a redefinir o mercado de smartphones e interfaces móveis."
    }
  },
  {
    "day": 30,
    "month": 6,
    "event": {
      "preview": "Em 1908, ocorreu o evento de Tunguska.",
      "fullEvent": "Em 30 de junho de 1908, uma enorme explosão atmosférica devastou uma vasta área de floresta próxima ao rio Tunguska, na Sibéria. O fenômeno é geralmente atribuído à entrada de um asteroide ou cometa na atmosfera."
    }
  },
  {
    "day": 1,
    "month": 7,
    "event": {
      "preview": "Em 1867, entrou em vigor a Confederação Canadense.",
      "fullEvent": "Em 1º de julho de 1867, o British North America Act entrou em vigor e criou o Domínio do Canadá, inicialmente formado por Ontário, Quebec, Nova Escócia e Novo Brunswick."
    }
  },
  {
    "day": 2,
    "month": 7,
    "event": {
      "preview": "Em 1937, Amelia Earhart desapareceu no Pacífico.",
      "fullEvent": "Em 2 de julho de 1937, Amelia Earhart desapareceu com o navegador Fred Noonan durante uma tentativa de dar a volta ao mundo de avião. Seu destino permanece objeto de investigação e especulação."
    }
  },
  {
    "day": 3,
    "month": 7,
    "event": {
      "preview": "Em 1863, terminou a Batalha de Gettysburg.",
      "fullEvent": "Em 3 de julho de 1863, terminou a Batalha de Gettysburg, uma das mais importantes da Guerra Civil Americana e um grande revés para o Exército Confederado."
    }
  },
  {
    "day": 4,
    "month": 7,
    "event": {
      "preview": "Em 1776, foi adotada a Declaração de Independência dos EUA.",
      "fullEvent": "Em 4 de julho de 1776, o Segundo Congresso Continental adotou a Declaração de Independência, anunciando a separação das Treze Colônias do Império Britânico."
    }
  },
  {
    "day": 5,
    "month": 7,
    "event": {
      "preview": "Em 1996, nasceu a ovelha Dolly.",
      "fullEvent": "Em 5 de julho de 1996, nasceu Dolly, o primeiro mamífero clonado com sucesso a partir de uma célula somática adulta. Sua existência foi anunciada publicamente no ano seguinte."
    }
  },
  {
    "day": 6,
    "month": 7,
    "event": {
      "preview": "Em 1885, Louis Pasteur aplicou uma vacina contra a raiva em Joseph Meister.",
      "fullEvent": "Em 6 de julho de 1885, Louis Pasteur iniciou em Joseph Meister um tratamento experimental contra a raiva após o menino ter sido mordido por um cão. O sucesso foi um marco na história da vacinação."
    }
  },
  {
    "day": 7,
    "month": 7,
    "event": {
      "preview": "Em 1937, começou a Segunda Guerra Sino-Japonesa em grande escala.",
      "fullEvent": "Em 7 de julho de 1937, o Incidente da Ponte Marco Polo desencadeou combates entre China e Japão que evoluíram para uma guerra em larga escala."
    }
  },
  {
    "day": 8,
    "month": 7,
    "event": {
      "preview": "Em 1497, Vasco da Gama partiu de Lisboa rumo à Índia.",
      "fullEvent": "Em 8 de julho de 1497, Vasco da Gama deixou Lisboa à frente de uma expedição que encontraria uma rota marítima europeia até a Índia contornando a África."
    }
  },
  {
    "day": 9,
    "month": 7,
    "event": {
      "preview": "Em 1816, a Argentina declarou sua independência.",
      "fullEvent": "Em 9 de julho de 1816, o Congresso de Tucumán declarou a independência das Províncias Unidas do Rio da Prata em relação à monarquia espanhola."
    }
  },
  {
    "day": 10,
    "month": 7,
    "event": {
      "preview": "Em 1962, foi lançado o Telstar 1.",
      "fullEvent": "Em 10 de julho de 1962, foi lançado o Telstar 1, satélite que possibilitou algumas das primeiras transmissões de televisão ao vivo através do Atlântico."
    }
  },
  {
    "day": 11,
    "month": 7,
    "event": {
      "preview": "Em 1969, David Bowie lançou 'Space Oddity'.",
      "fullEvent": "Em 11 de julho de 1969, David Bowie lançou o single 'Space Oddity', poucos dias antes da missão Apollo 11. A canção se tornaria uma de suas obras mais conhecidas."
    }
  },
  {
    "day": 12,
    "month": 7,
    "event": {
      "preview": "Em 1962, os Rolling Stones fizeram sua primeira apresentação.",
      "fullEvent": "Em 12 de julho de 1962, os Rolling Stones fizeram sua primeira apresentação no Marquee Club, em Londres, iniciando uma das carreiras mais longevas do rock."
    }
  },
  {
    "day": 13,
    "month": 7,
    "event": {
      "preview": "Em 1985, ocorreram os concertos Live Aid.",
      "fullEvent": "Em 13 de julho de 1985, shows simultâneos do Live Aid ocorreram principalmente em Londres e Filadélfia para arrecadar recursos contra a fome na Etiópia."
    }
  },
  {
    "day": 14,
    "month": 7,
    "event": {
      "preview": "Em 1789, a Bastilha foi tomada em Paris.",
      "fullEvent": "Em 14 de julho de 1789, revolucionários parisienses tomaram a fortaleza-prisão da Bastilha, episódio que se tornou símbolo da Revolução Francesa."
    }
  },
  {
    "day": 15,
    "month": 7,
    "event": {
      "preview": "Em 1799, foi encontrada a Pedra de Roseta.",
      "fullEvent": "Em 15 de julho de 1799, soldados franceses encontraram no Egito a Pedra de Roseta, inscrição em três sistemas de escrita que seria crucial para a decifração dos hieróglifos egípcios."
    }
  },
  {
    "day": 16,
    "month": 7,
    "event": {
      "preview": "Em 1969, a Apollo 11 foi lançada rumo à Lua.",
      "fullEvent": "Em 16 de julho de 1969, a Apollo 11 decolou do Centro Espacial Kennedy com Neil Armstrong, Buzz Aldrin e Michael Collins em direção à Lua."
    }
  },
  {
    "day": 17,
    "month": 7,
    "event": {
      "preview": "Em 1955, a Disneyland foi inaugurada na Califórnia.",
      "fullEvent": "Em 17 de julho de 1955, Walt Disney inaugurou a Disneyland em Anaheim, Califórnia, um parque temático que influenciaria profundamente a indústria de entretenimento."
    }
  },
  {
    "day": 18,
    "month": 7,
    "event": {
      "preview": "Em 1925, foi publicado 'Mein Kampf'.",
      "fullEvent": "Em 18 de julho de 1925, foi publicado o primeiro volume de 'Mein Kampf', de Adolf Hitler, livro que expunha ideias ultranacionalistas, antissemitas e expansionistas do futuro regime nazista."
    }
  },
  {
    "day": 19,
    "month": 7,
    "event": {
      "preview": "Em 1848, começou a Convenção de Seneca Falls.",
      "fullEvent": "Em 19 de julho de 1848, começou em Seneca Falls, Nova York, uma convenção dedicada aos direitos das mulheres, marco importante na história do sufragismo norte-americano."
    }
  },
  {
    "day": 20,
    "month": 7,
    "event": {
      "preview": "Em 1969, seres humanos pousaram na Lua pela primeira vez.",
      "fullEvent": "Em 20 de julho de 1969, o módulo lunar Eagle pousou na Lua com Neil Armstrong e Buzz Aldrin. Horas depois, Armstrong se tornou o primeiro ser humano a caminhar na superfície lunar."
    }
  },
  {
    "day": 21,
    "month": 7,
    "event": {
      "preview": "Em 1969, Armstrong e Aldrin concluíram a caminhada lunar e retornaram ao módulo.",
      "fullEvent": "Em 21 de julho de 1969 no horário universal, Neil Armstrong e Buzz Aldrin encerraram a primeira atividade humana na superfície da Lua e se prepararam para reencontrar Michael Collins em órbita lunar."
    }
  },
  {
    "day": 22,
    "month": 7,
    "event": {
      "preview": "Em 1933, Wiley Post concluiu o primeiro voo solo ao redor do mundo.",
      "fullEvent": "Em 22 de julho de 1933, o aviador Wiley Post completou uma volta ao mundo sozinho em pouco mais de sete dias, estabelecendo um importante recorde da aviação."
    }
  },
  {
    "day": 23,
    "month": 7,
    "event": {
      "preview": "Em 1903, a Ford vendeu seu primeiro automóvel.",
      "fullEvent": "Em 23 de julho de 1903, a Ford Motor Company realizou a venda de um de seus primeiros automóveis, um Model A, poucas semanas depois de sua fundação."
    }
  },
  {
    "day": 24,
    "month": 7,
    "event": {
      "preview": "Em 1911, Hiram Bingham chegou a Machu Picchu e divulgou o sítio internacionalmente.",
      "fullEvent": "Em 24 de julho de 1911, Hiram Bingham chegou às ruínas de Machu Picchu guiado por moradores locais. A expedição ajudou a tornar o sítio inca conhecido internacionalmente, embora ele nunca tivesse sido 'perdido' para as comunidades da região."
    }
  },
  {
    "day": 25,
    "month": 7,
    "event": {
      "preview": "Em 1978, nasceu Louise Brown, primeiro bebê de fertilização in vitro.",
      "fullEvent": "Em 25 de julho de 1978, nasceu na Inglaterra Louise Brown, o primeiro bebê concebido com sucesso por fertilização in vitro, marco da medicina reprodutiva."
    }
  },
  {
    "day": 26,
    "month": 7,
    "event": {
      "preview": "Em 1953, Fidel Castro liderou o ataque ao Quartel Moncada.",
      "fullEvent": "Em 26 de julho de 1953, Fidel Castro e seus aliados atacaram o Quartel Moncada, em Santiago de Cuba. A ação fracassou militarmente, mas tornou-se um marco simbólico da Revolução Cubana."
    }
  },
  {
    "day": 27,
    "month": 7,
    "event": {
      "preview": "Em 1953, foi assinado o armistício da Guerra da Coreia.",
      "fullEvent": "Em 27 de julho de 1953, foi assinado o Acordo de Armistício Coreano, interrompendo os grandes combates da Guerra da Coreia. Um tratado de paz definitivo não foi assinado."
    }
  },
  {
    "day": 28,
    "month": 7,
    "event": {
      "preview": "Em 1914, a Áustria-Hungria declarou guerra à Sérvia.",
      "fullEvent": "Em 28 de julho de 1914, o Império Austro-Húngaro declarou guerra à Sérvia. A sequência de alianças e mobilizações transformaria a crise balcânica na Primeira Guerra Mundial."
    }
  },
  {
    "day": 29,
    "month": 7,
    "event": {
      "preview": "Em 1958, a NASA foi criada por lei.",
      "fullEvent": "Em 29 de julho de 1958, o presidente Dwight Eisenhower sancionou a lei que criou a NASA, agência civil norte-americana dedicada à aeronáutica e exploração espacial."
    }
  },
  {
    "day": 30,
    "month": 7,
    "event": {
      "preview": "Em 1930, o Uruguai venceu a primeira Copa do Mundo.",
      "fullEvent": "Em 30 de julho de 1930, o Uruguai derrotou a Argentina por 4 a 2 em Montevidéu e conquistou a primeira Copa do Mundo de futebol organizada pela FIFA."
    }
  },
  {
    "day": 31,
    "month": 7,
    "event": {
      "preview": "Em 1965, nasceu J. K. Rowling.",
      "fullEvent": "Em 31 de julho de 1965, nasceu a escritora britânica J. K. Rowling, autora da série Harry Potter, uma das franquias literárias mais populares do fim do século XX e início do XXI."
    }
  },
  {
    "day": 1,
    "month": 8,
    "event": {
      "preview": "Em 1834, a escravidão foi abolida em grande parte do Império Britânico.",
      "fullEvent": "Em 1º de agosto de 1834, entrou em vigor o Slavery Abolition Act em grande parte do Império Britânico, embora o processo incluísse períodos de aprendizagem compulsória e não abrangesse todos os territórios."
    }
  },
  {
    "day": 2,
    "month": 8,
    "event": {
      "preview": "Em 1934, Adolf Hitler concentrou os cargos de chefe de Estado e governo da Alemanha.",
      "fullEvent": "Em 2 de agosto de 1934, após a morte do presidente Paul von Hindenburg, Adolf Hitler fundiu a presidência com a chancelaria e consolidou ainda mais seu poder ditatorial."
    }
  },
  {
    "day": 3,
    "month": 8,
    "event": {
      "preview": "Em 1492, Colombo partiu de Palos em sua primeira viagem atlântica.",
      "fullEvent": "Em 3 de agosto de 1492, Cristóvão Colombo partiu do porto de Palos, na Espanha, em uma expedição que chegaria ao Caribe e teria consequências profundas para os povos das Américas."
    }
  },
  {
    "day": 4,
    "month": 8,
    "event": {
      "preview": "Em 1944, Anne Frank e sua família foram presos.",
      "fullEvent": "Em 4 de agosto de 1944, Anne Frank, sua família e outros escondidos no anexo secreto em Amsterdã foram descobertos e presos pelas autoridades nazistas."
    }
  },
  {
    "day": 5,
    "month": 8,
    "event": {
      "preview": "Em 1963, EUA, Reino Unido e URSS assinaram o Tratado de Proibição Parcial de Testes Nucleares.",
      "fullEvent": "Em 5 de agosto de 1963, Estados Unidos, Reino Unido e União Soviética assinaram em Moscou um tratado que proibiu testes nucleares na atmosfera, no espaço e debaixo d'água."
    }
  },
  {
    "day": 6,
    "month": 8,
    "event": {
      "preview": "Em 1945, uma bomba atômica foi lançada sobre Hiroshima.",
      "fullEvent": "Em 6 de agosto de 1945, os Estados Unidos lançaram uma bomba atômica sobre Hiroshima, no Japão. A explosão e seus efeitos posteriores mataram dezenas de milhares de pessoas."
    }
  },
  {
    "day": 7,
    "month": 8,
    "event": {
      "preview": "Em 1947, a balsa Kon-Tiki chegou ao arquipélago de Tuamotu.",
      "fullEvent": "Em 7 de agosto de 1947, a expedição Kon-Tiki de Thor Heyerdahl terminou no Pacífico após percorrer milhares de quilômetros em uma balsa construída com técnicas inspiradas em povos pré-colombianos."
    }
  },
  {
    "day": 8,
    "month": 8,
    "event": {
      "preview": "Em 1974, Richard Nixon anunciou sua renúncia.",
      "fullEvent": "Em 8 de agosto de 1974, o presidente norte-americano Richard Nixon anunciou que renunciaria ao cargo por causa do escândalo Watergate. A renúncia entrou em vigor no dia seguinte."
    }
  },
  {
    "day": 9,
    "month": 8,
    "event": {
      "preview": "Em 1945, uma bomba atômica foi lançada sobre Nagasaki.",
      "fullEvent": "Em 9 de agosto de 1945, os Estados Unidos lançaram uma segunda bomba atômica sobre o Japão, desta vez em Nagasaki, causando enorme destruição e dezenas de milhares de mortes."
    }
  },
  {
    "day": 10,
    "month": 8,
    "event": {
      "preview": "Em 1792, a monarquia francesa foi derrubada de fato com o ataque às Tulherias.",
      "fullEvent": "Em 10 de agosto de 1792, revolucionários atacaram o Palácio das Tulherias em Paris. O episódio levou à suspensão de Luís XVI e marcou uma radicalização da Revolução Francesa."
    }
  },
  {
    "day": 11,
    "month": 8,
    "event": {
      "preview": "Em 1965, começaram os distúrbios de Watts em Los Angeles.",
      "fullEvent": "Em 11 de agosto de 1965, uma abordagem policial desencadeou dias de confrontos e revolta no bairro de Watts, em Los Angeles, em um contexto de desigualdade racial e tensão social."
    }
  },
  {
    "day": 12,
    "month": 8,
    "event": {
      "preview": "Em 1981, a IBM apresentou o IBM PC.",
      "fullEvent": "Em 12 de agosto de 1981, a IBM lançou o IBM Personal Computer 5150. Sua arquitetura ajudou a estabelecer padrões que dominariam o mercado de computadores pessoais por décadas."
    }
  },
  {
    "day": 13,
    "month": 8,
    "event": {
      "preview": "Em 1961, começou a construção do Muro de Berlim.",
      "fullEvent": "Em 13 de agosto de 1961, autoridades da Alemanha Oriental começaram a fechar as passagens entre Berlim Oriental e Ocidental com arame farpado e barreiras, iniciando a construção do Muro de Berlim."
    }
  },
  {
    "day": 14,
    "month": 8,
    "event": {
      "preview": "Em 1945, o Japão anunciou que aceitaria os termos de rendição.",
      "fullEvent": "Em 14 de agosto de 1945, o governo japonês comunicou a aceitação dos termos aliados para a rendição, encerrando na prática a Segunda Guerra Mundial, embora a assinatura formal ocorresse em setembro."
    }
  },
  {
    "day": 15,
    "month": 8,
    "event": {
      "preview": "Em 1947, a Índia tornou-se independente do domínio britânico.",
      "fullEvent": "Em 15 de agosto de 1947, a Índia conquistou a independência do Reino Unido. O processo ocorreu junto à partição que criou o Paquistão e provocou deslocamentos e violência em larga escala."
    }
  },
  {
    "day": 16,
    "month": 8,
    "event": {
      "preview": "Em 1896, ouro foi descoberto na região de Klondike, desencadeando uma corrida.",
      "fullEvent": "Em 16 de agosto de 1896, uma descoberta de ouro no território de Yukon, no Canadá, ajudou a iniciar a Corrida do Ouro de Klondike, atraindo milhares de pessoas ao norte da América."
    }
  },
  {
    "day": 17,
    "month": 8,
    "event": {
      "preview": "Em 1945, a Indonésia declarou independência.",
      "fullEvent": "Em 17 de agosto de 1945, Sukarno e Mohammad Hatta proclamaram a independência da Indonésia, iniciando uma luta política e militar contra a tentativa de restabelecimento do domínio colonial neerlandês."
    }
  },
  {
    "day": 18,
    "month": 8,
    "event": {
      "preview": "Em 1920, mulheres conquistaram constitucionalmente o voto nos EUA.",
      "fullEvent": "Em 18 de agosto de 1920, a ratificação do 19º aditamento à Constituição dos Estados Unidos foi assegurada, proibindo a negação do direito de voto com base no sexo."
    }
  },
  {
    "day": 19,
    "month": 8,
    "event": {
      "preview": "Em 1839, o processo fotográfico de Daguerre foi apresentado ao público.",
      "fullEvent": "Em 19 de agosto de 1839, o governo francês anunciou publicamente o processo do daguerreótipo desenvolvido por Louis Daguerre, marco da história da fotografia."
    }
  },
  {
    "day": 20,
    "month": 8,
    "event": {
      "preview": "Em 1977, a Voyager 2 foi lançada.",
      "fullEvent": "Em 20 de agosto de 1977, a NASA lançou a Voyager 2. A sonda visitou Júpiter, Saturno, Urano e Netuno e continuou viajando rumo ao espaço interestelar."
    }
  },
  {
    "day": 21,
    "month": 8,
    "event": {
      "preview": "Em 1911, a Mona Lisa foi roubada do Louvre.",
      "fullEvent": "Em 21 de agosto de 1911, Vincenzo Peruggia roubou a Mona Lisa do Museu do Louvre. A pintura foi recuperada na Itália mais de dois anos depois."
    }
  },
  {
    "day": 22,
    "month": 8,
    "event": {
      "preview": "Em 1864, foi assinada a primeira Convenção de Genebra.",
      "fullEvent": "Em 22 de agosto de 1864, representantes de diversos países assinaram a primeira Convenção de Genebra, estabelecendo regras de proteção a feridos e equipes médicas em conflitos armados."
    }
  },
  {
    "day": 23,
    "month": 8,
    "event": {
      "preview": "Em 1939, Alemanha e União Soviética assinaram o pacto Molotov-Ribbentrop.",
      "fullEvent": "Em 23 de agosto de 1939, Alemanha nazista e União Soviética assinaram um pacto de não agressão com protocolos secretos que dividiam áreas de influência no Leste Europeu."
    }
  },
  {
    "day": 24,
    "month": 8,
    "event": {
      "preview": "Em 79, o Vesúvio entrou em erupção segundo a data tradicional.",
      "fullEvent": "Tradicionalmente, 24 de agosto do ano 79 é apontado como a data da erupção do Vesúvio que destruiu Pompeia e Herculano. Evidências arqueológicas modernas, porém, sugerem que a erupção pode ter ocorrido mais tarde no ano."
    }
  },
  {
    "day": 25,
    "month": 8,
    "event": {
      "preview": "Em 1609, Galileu demonstrou seu telescópio às autoridades venezianas.",
      "fullEvent": "Em 25 de agosto de 1609, Galileu Galilei apresentou às autoridades de Veneza um telescópio aperfeiçoado, instrumento que logo usaria para observações astronômicas revolucionárias."
    }
  },
  {
    "day": 26,
    "month": 8,
    "event": {
      "preview": "Em 1789, a França aprovou a Declaração dos Direitos do Homem e do Cidadão.",
      "fullEvent": "Em 26 de agosto de 1789, a Assembleia Nacional Constituinte francesa aprovou a Declaração dos Direitos do Homem e do Cidadão, texto fundamental da Revolução Francesa."
    }
  },
  {
    "day": 27,
    "month": 8,
    "event": {
      "preview": "Em 1883, o Krakatoa sofreu sua erupção mais destrutiva.",
      "fullEvent": "Em 27 de agosto de 1883, o vulcão Krakatoa, na atual Indonésia, produziu explosões catastróficas e tsunamis que mataram dezenas de milhares de pessoas."
    }
  },
  {
    "day": 28,
    "month": 8,
    "event": {
      "preview": "Em 1963, Martin Luther King Jr. fez o discurso 'I Have a Dream'.",
      "fullEvent": "Em 28 de agosto de 1963, durante a Marcha sobre Washington, Martin Luther King Jr. pronunciou seu célebre discurso em defesa da igualdade racial diante do Lincoln Memorial."
    }
  },
  {
    "day": 29,
    "month": 8,
    "event": {
      "preview": "Em 1949, a União Soviética testou sua primeira bomba atômica.",
      "fullEvent": "Em 29 de agosto de 1949, a União Soviética detonou seu primeiro dispositivo nuclear no Cazaquistão, encerrando o monopólio nuclear dos Estados Unidos."
    }
  },
  {
    "day": 30,
    "month": 8,
    "event": {
      "preview": "Em 1963, foi estabelecido o telefone direto entre Washington e Moscou.",
      "fullEvent": "Em 30 de agosto de 1963, entrou em operação uma ligação direta de comunicações entre os governos dos Estados Unidos e da União Soviética, criada após a crise dos mísseis de Cuba para reduzir riscos de mal-entendidos."
    }
  },
  {
    "day": 31,
    "month": 8,
    "event": {
      "preview": "Em 1997, Diana, Princesa de Gales, morreu em Paris.",
      "fullEvent": "Em 31 de agosto de 1997, Diana, Princesa de Gales, morreu após um acidente automobilístico em Paris. Sua morte provocou grande comoção pública internacional."
    }
  },
  {
    "day": 1,
    "month": 9,
    "event": {
      "preview": "Em 1939, a Alemanha invadiu a Polônia.",
      "fullEvent": "Em 1º de setembro de 1939, forças alemãs invadiram a Polônia. Reino Unido e França declararam guerra à Alemanha dois dias depois, marcando o início da Segunda Guerra Mundial na Europa."
    }
  },
  {
    "day": 2,
    "month": 9,
    "event": {
      "preview": "Em 1945, o Japão assinou a rendição formal na Segunda Guerra Mundial.",
      "fullEvent": "Em 2 de setembro de 1945, representantes japoneses assinaram a rendição a bordo do USS Missouri, na Baía de Tóquio, encerrando formalmente a Segunda Guerra Mundial."
    }
  },
  {
    "day": 3,
    "month": 9,
    "event": {
      "preview": "Em 1783, o Tratado de Paris reconheceu a independência dos EUA.",
      "fullEvent": "Em 3 de setembro de 1783, Reino Unido e Estados Unidos assinaram o Tratado de Paris, encerrando oficialmente a Guerra de Independência Americana e reconhecendo a nova nação."
    }
  },
  {
    "day": 4,
    "month": 9,
    "event": {
      "preview": "Em 1888, George Eastman registrou a marca Kodak.",
      "fullEvent": "Em 4 de setembro de 1888, George Eastman registrou a marca Kodak e recebeu uma patente relacionada a sua câmera de rolo fotográfico, ajudando a popularizar a fotografia."
    }
  },
  {
    "day": 5,
    "month": 9,
    "event": {
      "preview": "Em 1977, a Voyager 1 foi lançada.",
      "fullEvent": "Em 5 de setembro de 1977, a NASA lançou a Voyager 1. A sonda estudou Júpiter e Saturno e mais tarde tornou-se o objeto humano mais distante da Terra."
    }
  },
  {
    "day": 6,
    "month": 9,
    "event": {
      "preview": "Em 1522, a expedição de Magalhães-Elcano completou a primeira circum-navegação.",
      "fullEvent": "Em 6 de setembro de 1522, o navio Victoria chegou à Espanha sob o comando de Juan Sebastián Elcano, completando a primeira circum-navegação conhecida do planeta iniciada pela expedição de Fernão de Magalhães."
    }
  },
  {
    "day": 7,
    "month": 9,
    "event": {
      "preview": "Em 1822, foi proclamada a Independência do Brasil.",
      "fullEvent": "Em 7 de setembro de 1822, Dom Pedro declarou a separação política do Brasil em relação a Portugal. A independência foi um processo mais amplo, que envolveu conflitos e negociações antes e depois dessa data."
    }
  },
  {
    "day": 8,
    "month": 9,
    "event": {
      "preview": "Em 1966, Star Trek estreou na televisão norte-americana.",
      "fullEvent": "Em 8 de setembro de 1966, a série Star Trek estreou na NBC. Apesar de uma primeira exibição relativamente curta, tornou-se uma das franquias de ficção científica mais influentes da cultura popular."
    }
  },
  {
    "day": 9,
    "month": 9,
    "event": {
      "preview": "Em 1948, a Coreia do Norte foi proclamada.",
      "fullEvent": "Em 9 de setembro de 1948, foi proclamada a República Popular Democrática da Coreia, consolidando a divisão política da península coreana após a Segunda Guerra Mundial."
    }
  },
  {
    "day": 10,
    "month": 9,
    "event": {
      "preview": "Em 2008, o Grande Colisor de Hádrons circulou seu primeiro feixe.",
      "fullEvent": "Em 10 de setembro de 2008, o CERN fez circular pela primeira vez um feixe de prótons pelo Grande Colisor de Hádrons, o maior acelerador de partículas do mundo."
    }
  },
  {
    "day": 11,
    "month": 9,
    "event": {
      "preview": "Em 2001, ataques terroristas atingiram os Estados Unidos.",
      "fullEvent": "Em 11 de setembro de 2001, integrantes da Al-Qaeda sequestraram quatro aviões nos Estados Unidos. Os ataques destruíram as Torres Gêmeas, atingiram o Pentágono e mataram quase três mil pessoas."
    }
  },
  {
    "day": 12,
    "month": 9,
    "event": {
      "preview": "Em 1962, Kennedy reafirmou a meta de levar pessoas à Lua.",
      "fullEvent": "Em 12 de setembro de 1962, John F. Kennedy discursou na Rice University e defendeu o programa lunar norte-americano, resumido pela frase 'we choose to go to the Moon'."
    }
  },
  {
    "day": 13,
    "month": 9,
    "event": {
      "preview": "Em 1993, Israel e OLP assinaram a Declaração de Princípios dos Acordos de Oslo.",
      "fullEvent": "Em 13 de setembro de 1993, líderes de Israel e da Organização para a Libertação da Palestina participaram em Washington da assinatura da Declaração de Princípios que ficou associada aos Acordos de Oslo."
    }
  },
  {
    "day": 14,
    "month": 9,
    "event": {
      "preview": "Em 1812, o exército de Napoleão entrou em Moscou.",
      "fullEvent": "Em 14 de setembro de 1812, tropas de Napoleão entraram em Moscou durante a campanha contra o Império Russo. A cidade estava em grande parte evacuada e sofreu incêndios devastadores."
    }
  },
  {
    "day": 15,
    "month": 9,
    "event": {
      "preview": "Em 1835, o HMS Beagle chegou às Ilhas Galápagos.",
      "fullEvent": "Em 15 de setembro de 1835, o HMS Beagle chegou ao arquipélago de Galápagos. As observações feitas por Charles Darwin ali contribuiriam para o desenvolvimento posterior de suas ideias sobre evolução."
    }
  },
  {
    "day": 16,
    "month": 9,
    "event": {
      "preview": "Em 1620, o Mayflower partiu da Inglaterra rumo à América.",
      "fullEvent": "Em 16 de setembro de 1620, segundo o calendário gregoriano moderno, o Mayflower partiu de Plymouth, na Inglaterra, levando colonos que fundariam a colônia de Plymouth na América do Norte."
    }
  },
  {
    "day": 17,
    "month": 9,
    "event": {
      "preview": "Em 1787, a Constituição dos Estados Unidos foi assinada.",
      "fullEvent": "Em 17 de setembro de 1787, delegados reunidos na Convenção da Filadélfia assinaram a Constituição dos Estados Unidos, que entraria em vigor após a ratificação pelos estados."
    }
  },
  {
    "day": 18,
    "month": 9,
    "event": {
      "preview": "Em 1851, foi publicado o primeiro número do The New York Times.",
      "fullEvent": "Em 18 de setembro de 1851, foi publicado em Nova York o primeiro número do jornal que mais tarde receberia o nome The New York Times."
    }
  },
  {
    "day": 19,
    "month": 9,
    "event": {
      "preview": "Em 1893, a Nova Zelândia concedeu voto parlamentar às mulheres.",
      "fullEvent": "Em 19 de setembro de 1893, o governador da Nova Zelândia sancionou uma lei que garantiu às mulheres o direito de votar em eleições parlamentares, tornando o país pioneiro nesse aspecto em nível nacional."
    }
  },
  {
    "day": 20,
    "month": 9,
    "event": {
      "preview": "Em 1519, a expedição de Magalhães partiu para circum-navegar o mundo.",
      "fullEvent": "Em 20 de setembro de 1519, uma frota comandada por Fernão de Magalhães partiu da Espanha. A expedição acabaria realizando a primeira circum-navegação conhecida da Terra, concluída por Juan Sebastián Elcano."
    }
  },
  {
    "day": 21,
    "month": 9,
    "event": {
      "preview": "Em 1937, 'O Hobbit' foi publicado.",
      "fullEvent": "Em 21 de setembro de 1937, foi publicado no Reino Unido 'O Hobbit', de J. R. R. Tolkien, livro que introduziu leitores à Terra-média e antecedeu O Senhor dos Anéis."
    }
  },
  {
    "day": 22,
    "month": 9,
    "event": {
      "preview": "Em 1862, Lincoln anunciou a Proclamação de Emancipação preliminar.",
      "fullEvent": "Em 22 de setembro de 1862, Abraham Lincoln anunciou uma versão preliminar da Proclamação de Emancipação, declarando que pessoas escravizadas em áreas rebeldes seriam libertadas a partir de 1º de janeiro de 1863."
    }
  },
  {
    "day": 23,
    "month": 9,
    "event": {
      "preview": "Em 1846, Netuno foi observado e identificado como planeta.",
      "fullEvent": "Em 23 de setembro de 1846, Johann Gottfried Galle observou Netuno perto da posição prevista matematicamente por Urbain Le Verrier, um triunfo da astronomia teórica."
    }
  },
  {
    "day": 24,
    "month": 9,
    "event": {
      "preview": "Em 622, Maomé concluiu a Hégira em Medina segundo a tradição cronológica.",
      "fullEvent": "Em setembro de 622, Maomé e seus seguidores chegaram a Medina após deixarem Meca. A Hégira tornou-se o marco inicial do calendário islâmico; 24 de setembro é tradicionalmente associado à chegada de Maomé."
    }
  },
  {
    "day": 25,
    "month": 9,
    "event": {
      "preview": "Em 1513, Vasco Núñez de Balboa avistou o Pacífico a partir do istmo do Panamá.",
      "fullEvent": "Em 25 de setembro de 1513, Vasco Núñez de Balboa alcançou uma elevação no istmo do Panamá e avistou o oceano que chamou de Mar do Sul, hoje conhecido como Pacífico."
    }
  },
  {
    "day": 26,
    "month": 9,
    "event": {
      "preview": "Em 1960, ocorreu o primeiro debate presidencial televisionado dos EUA.",
      "fullEvent": "Em 26 de setembro de 1960, John F. Kennedy e Richard Nixon participaram do primeiro debate presidencial norte-americano transmitido pela televisão, marco na relação entre política e mídia."
    }
  },
  {
    "day": 27,
    "month": 9,
    "event": {
      "preview": "Em 1825, foi inaugurada a Stockton and Darlington Railway.",
      "fullEvent": "Em 27 de setembro de 1825, foi inaugurada na Inglaterra a Stockton and Darlington Railway, uma das primeiras ferrovias públicas a utilizar locomotivas a vapor."
    }
  },
  {
    "day": 28,
    "month": 9,
    "event": {
      "preview": "Em 1928, Alexander Fleming observou o efeito antibacteriano do mofo que levaria à penicilina.",
      "fullEvent": "Em 28 de setembro de 1928, Alexander Fleming observou que um mofo havia inibido o crescimento de bactérias em uma placa de cultura. A descoberta levaria ao desenvolvimento da penicilina."
    }
  },
  {
    "day": 29,
    "month": 9,
    "event": {
      "preview": "Em 1829, foi criada a Polícia Metropolitana de Londres.",
      "fullEvent": "Em 29 de setembro de 1829, começou a operar a Metropolitan Police de Londres, organizada sob influência de Robert Peel e considerada um marco no policiamento profissional moderno."
    }
  },
  {
    "day": 30,
    "month": 9,
    "event": {
      "preview": "Em 1960, Os Flintstones estrearam na televisão.",
      "fullEvent": "Em 30 de setembro de 1960, a série animada The Flintstones estreou nos Estados Unidos e tornou-se uma das primeiras animações de horário nobre de grande sucesso."
    }
  },
  {
    "day": 1,
    "month": 10,
    "event": {
      "preview": "Em 1949, foi proclamada a República Popular da China.",
      "fullEvent": "Em 1º de outubro de 1949, Mao Zedong proclamou em Pequim a República Popular da China após a vitória comunista na guerra civil chinesa."
    }
  },
  {
    "day": 2,
    "month": 10,
    "event": {
      "preview": "Em 1950, estreou a tira Peanuts.",
      "fullEvent": "Em 2 de outubro de 1950, a tira em quadrinhos Peanuts, de Charles M. Schulz, foi publicada pela primeira vez, apresentando personagens que se tornariam mundialmente conhecidos."
    }
  },
  {
    "day": 3,
    "month": 10,
    "event": {
      "preview": "Em 1990, a Alemanha foi reunificada.",
      "fullEvent": "Em 3 de outubro de 1990, a Alemanha Oriental deixou de existir e seus estados passaram a integrar a República Federal da Alemanha, formalizando a reunificação alemã."
    }
  },
  {
    "day": 4,
    "month": 10,
    "event": {
      "preview": "Em 1957, a União Soviética lançou o Sputnik 1.",
      "fullEvent": "Em 4 de outubro de 1957, a União Soviética colocou em órbita o Sputnik 1, primeiro satélite artificial da Terra, inaugurando a era espacial."
    }
  },
  {
    "day": 5,
    "month": 10,
    "event": {
      "preview": "Em 2011, morreu Steve Jobs.",
      "fullEvent": "Em 5 de outubro de 2011, morreu Steve Jobs, cofundador da Apple e figura central na popularização de computadores pessoais, smartphones e outros produtos eletrônicos de consumo."
    }
  },
  {
    "day": 6,
    "month": 10,
    "event": {
      "preview": "Em 1927, estreou 'O Cantor de Jazz'.",
      "fullEvent": "Em 6 de outubro de 1927, estreou em Nova York 'The Jazz Singer', filme famoso por popularizar o cinema comercial com diálogos e canções sincronizados."
    }
  },
  {
    "day": 7,
    "month": 10,
    "event": {
      "preview": "Em 1959, a Luna 3 fotografou o lado oculto da Lua.",
      "fullEvent": "Em 7 de outubro de 1959, a sonda soviética Luna 3 começou a registrar as primeiras imagens do lado da Lua que não é visível diretamente da Terra."
    }
  },
  {
    "day": 8,
    "month": 10,
    "event": {
      "preview": "Em 1871, começou o Grande Incêndio de Chicago.",
      "fullEvent": "Em 8 de outubro de 1871, um incêndio de grandes proporções começou em Chicago e destruiu milhares de edifícios ao longo de vários dias."
    }
  },
  {
    "day": 9,
    "month": 10,
    "event": {
      "preview": "Em 1967, Che Guevara foi executado na Bolívia.",
      "fullEvent": "Em 9 de outubro de 1967, Ernesto 'Che' Guevara foi executado por militares bolivianos após ser capturado durante sua tentativa de organizar uma guerrilha no país."
    }
  },
  {
    "day": 10,
    "month": 10,
    "event": {
      "preview": "Em 1911, a Revolução Xinhai começou com a Revolta de Wuchang.",
      "fullEvent": "Em 10 de outubro de 1911, a Revolta de Wuchang desencadeou a Revolução Xinhai, que acabaria derrubando a dinastia Qing e encerrando mais de dois milênios de governo imperial na China."
    }
  },
  {
    "day": 11,
    "month": 10,
    "event": {
      "preview": "Em 1968, a Apollo 7 foi lançada.",
      "fullEvent": "Em 11 de outubro de 1968, a NASA lançou a Apollo 7, primeira missão tripulada do programa Apollo e importante teste dos sistemas que seriam usados em viagens à Lua."
    }
  },
  {
    "day": 12,
    "month": 10,
    "event": {
      "preview": "Em 1492, a expedição de Colombo chegou às Bahamas.",
      "fullEvent": "Em 12 de outubro de 1492, a expedição de Cristóvão Colombo chegou a uma ilha das Bahamas. O encontro iniciou uma era de colonização europeia das Américas com consequências profundas para povos indígenas."
    }
  },
  {
    "day": 13,
    "month": 10,
    "event": {
      "preview": "Em 2010, terminou o resgate dos mineiros de San José no Chile.",
      "fullEvent": "Em 13 de outubro de 2010, os 33 mineiros presos por mais de dois meses na mina San José, no Chile, foram resgatados com vida em uma operação acompanhada mundialmente."
    }
  },
  {
    "day": 14,
    "month": 10,
    "event": {
      "preview": "Em 1947, Chuck Yeager rompeu a barreira do som em voo nivelado.",
      "fullEvent": "Em 14 de outubro de 1947, Chuck Yeager pilotou o Bell X-1 além da velocidade do som, tornando-se a primeira pessoa reconhecida por realizar o feito em voo controlado e nivelado."
    }
  },
  {
    "day": 15,
    "month": 10,
    "event": {
      "preview": "Em 1997, a sonda Cassini-Huygens foi lançada rumo a Saturno.",
      "fullEvent": "Em 15 de outubro de 1997, a missão Cassini-Huygens foi lançada para estudar Saturno, seus anéis e luas. A missão produziria descobertas durante quase duas décadas."
    }
  },
  {
    "day": 16,
    "month": 10,
    "event": {
      "preview": "Em 1964, a China testou sua primeira arma nuclear.",
      "fullEvent": "Em 16 de outubro de 1964, a China realizou seu primeiro teste nuclear em Lop Nur, tornando-se a quinta potência nuclear declarada da época."
    }
  },
  {
    "day": 17,
    "month": 10,
    "event": {
      "preview": "Em 1931, Al Capone foi condenado por sonegação de impostos.",
      "fullEvent": "Em 17 de outubro de 1931, o gângster Al Capone foi condenado nos Estados Unidos por evasão fiscal. A acusação tributária conseguiu o que diversos processos por crimes violentos não haviam conseguido."
    }
  },
  {
    "day": 18,
    "month": 10,
    "event": {
      "preview": "Em 1867, o Alasca foi formalmente transferido da Rússia aos EUA.",
      "fullEvent": "Em 18 de outubro de 1867, a bandeira russa foi baixada em Sitka e o território do Alasca passou formalmente ao controle dos Estados Unidos."
    }
  },
  {
    "day": 19,
    "month": 10,
    "event": {
      "preview": "Em 1781, as forças britânicas se renderam em Yorktown.",
      "fullEvent": "Em 19 de outubro de 1781, o exército britânico de Lord Cornwallis se rendeu em Yorktown, episódio decisivo para o fim da Guerra de Independência dos Estados Unidos."
    }
  },
  {
    "day": 20,
    "month": 10,
    "event": {
      "preview": "Em 1973, foi inaugurada a Ópera de Sydney.",
      "fullEvent": "Em 20 de outubro de 1973, a rainha Elizabeth II inaugurou oficialmente a Sydney Opera House, edifício que se tornaria um símbolo arquitetônico da Austrália."
    }
  },
  {
    "day": 21,
    "month": 10,
    "event": {
      "preview": "Em 1805, ocorreu a Batalha de Trafalgar.",
      "fullEvent": "Em 21 de outubro de 1805, a frota britânica comandada por Horatio Nelson derrotou as forças franco-espanholas na Batalha de Trafalgar, garantindo a supremacia naval britânica por décadas."
    }
  },
  {
    "day": 22,
    "month": 10,
    "event": {
      "preview": "Em 1962, Kennedy anunciou o bloqueio naval de Cuba.",
      "fullEvent": "Em 22 de outubro de 1962, John F. Kennedy revelou ao público a presença de mísseis soviéticos em Cuba e anunciou uma 'quarentena' naval, ponto crítico da Crise dos Mísseis."
    }
  },
  {
    "day": 23,
    "month": 10,
    "event": {
      "preview": "Em 2001, a Apple apresentou o iPod.",
      "fullEvent": "Em 23 de outubro de 2001, a Apple apresentou o iPod, reprodutor portátil de música que se tornaria um dos produtos tecnológicos mais populares da década."
    }
  },
  {
    "day": 24,
    "month": 10,
    "event": {
      "preview": "Em 1945, a Organização das Nações Unidas entrou oficialmente em existência.",
      "fullEvent": "Em 24 de outubro de 1945, a Carta da ONU entrou em vigor após as ratificações necessárias. A data é celebrada como o Dia das Nações Unidas."
    }
  },
  {
    "day": 25,
    "month": 10,
    "event": {
      "preview": "Em 1415, ocorreu a Batalha de Agincourt.",
      "fullEvent": "Em 25 de outubro de 1415, o exército inglês de Henrique V derrotou uma força francesa numericamente superior em Agincourt durante a Guerra dos Cem Anos."
    }
  },
  {
    "day": 26,
    "month": 10,
    "event": {
      "preview": "Em 1881, ocorreu o tiroteio do O.K. Corral.",
      "fullEvent": "Em 26 de outubro de 1881, ocorreu em Tombstone, Arizona, o confronto armado conhecido como tiroteio do O.K. Corral, envolvendo Wyatt Earp, seus irmãos, Doc Holliday e um grupo rival."
    }
  },
  {
    "day": 27,
    "month": 10,
    "event": {
      "preview": "Em 1962, ocorreu um dos dias mais perigosos da Crise dos Mísseis de Cuba.",
      "fullEvent": "Em 27 de outubro de 1962, um avião U-2 norte-americano foi abatido sobre Cuba e submarinos soviéticos foram pressionados por forças dos EUA. O dia é lembrado como um dos momentos em que o risco de guerra nuclear esteve mais alto."
    }
  },
  {
    "day": 28,
    "month": 10,
    "event": {
      "preview": "Em 1886, a Estátua da Liberdade foi inaugurada.",
      "fullEvent": "Em 28 de outubro de 1886, a Estátua da Liberdade foi inaugurada no porto de Nova York. O monumento havia sido oferecido pela França aos Estados Unidos."
    }
  },
  {
    "day": 29,
    "month": 10,
    "event": {
      "preview": "Em 1929, ocorreu a Terça-Feira Negra em Wall Street.",
      "fullEvent": "Em 29 de outubro de 1929, uma nova onda de vendas derrubou o mercado de ações de Nova York. O episódio ficou conhecido como Terça-Feira Negra e simboliza o início da Grande Depressão."
    }
  },
  {
    "day": 30,
    "month": 10,
    "event": {
      "preview": "Em 1938, a transmissão radiofônica de 'A Guerra dos Mundos' ganhou fama nos EUA.",
      "fullEvent": "Em 30 de outubro de 1938, Orson Welles dirigiu uma adaptação radiofônica de 'A Guerra dos Mundos'. A transmissão ficou famosa pela ideia, posteriormente exagerada, de que teria causado pânico generalizado."
    }
  },
  {
    "day": 31,
    "month": 10,
    "event": {
      "preview": "Em 1517, Martinho Lutero tornou públicas suas 95 Teses segundo a tradição.",
      "fullEvent": "Em 31 de outubro de 1517, a tradição associa Martinho Lutero à divulgação de suas 95 Teses em Wittenberg. O episódio tornou-se símbolo do início da Reforma Protestante."
    }
  },
  {
    "day": 1,
    "month": 11,
    "event": {
      "preview": "Em 1755, um terremoto devastou Lisboa.",
      "fullEvent": "Em 1º de novembro de 1755, um terremoto seguido de tsunami e incêndios destruiu grande parte de Lisboa. A catástrofe teve impacto urbano, científico, religioso e filosófico em toda a Europa."
    }
  },
  {
    "day": 2,
    "month": 11,
    "event": {
      "preview": "Em 1936, a BBC iniciou um serviço regular de televisão em alta definição para a época.",
      "fullEvent": "Em 2 de novembro de 1936, a BBC iniciou transmissões regulares de televisão a partir de Alexandra Palace, em Londres, usando padrões de alta definição segundo os critérios tecnológicos daquele período."
    }
  },
  {
    "day": 3,
    "month": 11,
    "event": {
      "preview": "Em 1957, a cadela Laika foi enviada ao espaço.",
      "fullEvent": "Em 3 de novembro de 1957, a União Soviética lançou a Sputnik 2 com Laika a bordo. Ela se tornou o primeiro animal a orbitar a Terra, embora não houvesse plano de retorno e ela tenha morrido durante a missão."
    }
  },
  {
    "day": 4,
    "month": 11,
    "event": {
      "preview": "Em 1922, foi descoberta a entrada do túmulo de Tutancâmon.",
      "fullEvent": "Em 4 de novembro de 1922, a equipe de Howard Carter encontrou os degraus que levavam à entrada do túmulo de Tutancâmon no Vale dos Reis, no Egito."
    }
  },
  {
    "day": 5,
    "month": 11,
    "event": {
      "preview": "Em 1605, foi descoberta a Conspiração da Pólvora.",
      "fullEvent": "Em 5 de novembro de 1605, Guy Fawkes foi encontrado guardando explosivos sob o Parlamento inglês. A chamada Conspiração da Pólvora pretendia matar o rei Jaime I e membros do governo."
    }
  },
  {
    "day": 6,
    "month": 11,
    "event": {
      "preview": "Em 1860, Abraham Lincoln foi eleito presidente dos EUA.",
      "fullEvent": "Em 6 de novembro de 1860, Abraham Lincoln venceu a eleição presidencial norte-americana. Sua vitória acelerou a crise de secessão que levaria à Guerra Civil."
    }
  },
  {
    "day": 7,
    "month": 11,
    "event": {
      "preview": "Em 1917, os bolcheviques tomaram pontos-chave de Petrogrado.",
      "fullEvent": "Em 7 de novembro de 1917 no calendário gregoriano, os bolcheviques tomaram o poder em Petrogrado na chamada Revolução de Outubro, que recebeu esse nome por ocorrer em outubro no calendário juliano então usado na Rússia."
    }
  },
  {
    "day": 8,
    "month": 11,
    "event": {
      "preview": "Em 1895, Wilhelm Röntgen descobriu os raios X.",
      "fullEvent": "Em 8 de novembro de 1895, Wilhelm Conrad Röntgen observou um novo tipo de radiação capaz de atravessar materiais opacos e produzir imagens do interior do corpo, descoberta que chamou de raios X."
    }
  },
  {
    "day": 9,
    "month": 11,
    "event": {
      "preview": "Em 1989, o Muro de Berlim foi aberto.",
      "fullEvent": "Em 9 de novembro de 1989, uma comunicação confusa do governo da Alemanha Oriental levou multidões aos postos de fronteira, e os guardas acabaram permitindo a passagem. A abertura do Muro de Berlim virou símbolo do fim da Guerra Fria na Europa."
    }
  },
  {
    "day": 10,
    "month": 11,
    "event": {
      "preview": "Em 1969, Vila Sésamo estreou nos Estados Unidos.",
      "fullEvent": "Em 10 de novembro de 1969, Sesame Street estreou na televisão norte-americana, combinando entretenimento e educação infantil com personagens e técnicas inovadoras."
    }
  },
  {
    "day": 11,
    "month": 11,
    "event": {
      "preview": "Em 1918, o armistício encerrou os combates da Primeira Guerra Mundial.",
      "fullEvent": "Em 11 de novembro de 1918, entrou em vigor o armistício entre os Aliados e a Alemanha, encerrando os principais combates da Primeira Guerra Mundial às 11 horas."
    }
  },
  {
    "day": 12,
    "month": 11,
    "event": {
      "preview": "Em 1954, Ellis Island encerrou suas operações de imigração.",
      "fullEvent": "Em 12 de novembro de 1954, Ellis Island fechou como centro federal de processamento de imigração. Milhões de imigrantes haviam passado pelo local desde o fim do século XIX."
    }
  },
  {
    "day": 13,
    "month": 11,
    "event": {
      "preview": "Em 1985, o vulcão Nevado del Ruiz entrou em erupção na Colômbia.",
      "fullEvent": "Em 13 de novembro de 1985, a erupção do Nevado del Ruiz provocou fluxos de lama que soterraram a cidade de Armero, causando mais de 20 mil mortes."
    }
  },
  {
    "day": 14,
    "month": 11,
    "event": {
      "preview": "Em 1889, Nellie Bly iniciou sua volta ao mundo.",
      "fullEvent": "Em 14 de novembro de 1889, a jornalista Nellie Bly partiu de Nova York para tentar dar a volta ao mundo em menos de 80 dias, inspirada no romance de Júlio Verne. Ela completou a viagem em cerca de 72 dias."
    }
  },
  {
    "day": 15,
    "month": 11,
    "event": {
      "preview": "Em 1889, foi proclamada a República no Brasil.",
      "fullEvent": "Em 15 de novembro de 1889, um movimento militar liderado por Deodoro da Fonseca derrubou a monarquia brasileira e proclamou a República, encerrando o Segundo Reinado de Dom Pedro II."
    }
  },
  {
    "day": 16,
    "month": 11,
    "event": {
      "preview": "Em 1974, a mensagem de Arecibo foi transmitida ao espaço.",
      "fullEvent": "Em 16 de novembro de 1974, o radiotelescópio de Arecibo enviou uma mensagem codificada em direção ao aglomerado estelar M13 como demonstração da capacidade do observatório."
    }
  },
  {
    "day": 17,
    "month": 11,
    "event": {
      "preview": "Em 1869, o Canal de Suez foi inaugurado.",
      "fullEvent": "Em 17 de novembro de 1869, o Canal de Suez foi inaugurado no Egito, conectando o Mediterrâneo ao Mar Vermelho e reduzindo drasticamente a rota marítima entre Europa e Ásia."
    }
  },
  {
    "day": 18,
    "month": 11,
    "event": {
      "preview": "Em 1928, Mickey Mouse apareceu em 'Steamboat Willie'.",
      "fullEvent": "Em 18 de novembro de 1928, estreou 'Steamboat Willie', curta de animação sincronizada com som que ajudou a tornar Mickey Mouse um personagem mundialmente conhecido."
    }
  },
  {
    "day": 19,
    "month": 11,
    "event": {
      "preview": "Em 1863, Lincoln fez o Discurso de Gettysburg.",
      "fullEvent": "Em 19 de novembro de 1863, Abraham Lincoln pronunciou o breve Discurso de Gettysburg durante a dedicação de um cemitério militar, redefinindo a guerra em torno da preservação da União e do ideal de igualdade."
    }
  },
  {
    "day": 20,
    "month": 11,
    "event": {
      "preview": "Em 1695, morreu Zumbi dos Palmares.",
      "fullEvent": "Em 20 de novembro de 1695, Zumbi, uma das principais lideranças do Quilombo dos Palmares, foi morto por forças coloniais. A data tornou-se no Brasil o Dia Nacional de Zumbi e da Consciência Negra."
    }
  },
  {
    "day": 21,
    "month": 11,
    "event": {
      "preview": "Em 1783, ocorreu em Paris um dos primeiros voos tripulados de balão livre.",
      "fullEvent": "Em 21 de novembro de 1783, Pilâtre de Rozier e François Laurent d'Arlandes realizaram em Paris um voo livre tripulado em um balão de ar quente dos irmãos Montgolfier."
    }
  },
  {
    "day": 22,
    "month": 11,
    "event": {
      "preview": "Em 1963, John F. Kennedy foi assassinado.",
      "fullEvent": "Em 22 de novembro de 1963, o presidente dos Estados Unidos John F. Kennedy foi assassinado durante uma carreata em Dallas, Texas. Lyndon B. Johnson assumiu a presidência no mesmo dia."
    }
  },
  {
    "day": 23,
    "month": 11,
    "event": {
      "preview": "Em 1963, Doctor Who estreou na BBC.",
      "fullEvent": "Em 23 de novembro de 1963, Doctor Who estreou na televisão britânica. A série de ficção científica se tornaria uma das produções mais longevas do gênero."
    }
  },
  {
    "day": 24,
    "month": 11,
    "event": {
      "preview": "Em 1859, Charles Darwin publicou 'A Origem das Espécies'.",
      "fullEvent": "Em 24 de novembro de 1859, Charles Darwin publicou 'On the Origin of Species', apresentando seu argumento sobre evolução por seleção natural e transformando a biologia."
    }
  },
  {
    "day": 25,
    "month": 11,
    "event": {
      "preview": "Em 1952, estreou 'A Ratoeira', de Agatha Christie.",
      "fullEvent": "Em 25 de novembro de 1952, a peça 'The Mousetrap', de Agatha Christie, estreou em Londres e se tornaria conhecida por sua extraordinária longevidade nos palcos."
    }
  },
  {
    "day": 26,
    "month": 11,
    "event": {
      "preview": "Em 1922, Howard Carter e Lord Carnarvon entraram no túmulo de Tutancâmon.",
      "fullEvent": "Em 26 de novembro de 1922, Howard Carter abriu uma pequena passagem e observou o interior do túmulo de Tutancâmon, revelando uma coleção extraordinária de objetos funerários."
    }
  },
  {
    "day": 27,
    "month": 11,
    "event": {
      "preview": "Em 1895, Alfred Nobel assinou seu testamento criando os prêmios Nobel.",
      "fullEvent": "Em 27 de novembro de 1895, Alfred Nobel assinou em Paris o testamento que destinou grande parte de sua fortuna à criação de prêmios anuais em áreas como ciência, literatura e paz."
    }
  },
  {
    "day": 28,
    "month": 11,
    "event": {
      "preview": "Em 1520, a expedição de Magalhães entrou no oceano Pacífico.",
      "fullEvent": "Em 28 de novembro de 1520, após atravessar o estreito que hoje leva o nome de Magalhães, a expedição europeia entrou no oceano que Fernão de Magalhães chamou de Pacífico."
    }
  },
  {
    "day": 29,
    "month": 11,
    "event": {
      "preview": "Em 1947, a ONU aprovou um plano de partilha da Palestina.",
      "fullEvent": "Em 29 de novembro de 1947, a Assembleia Geral das Nações Unidas aprovou a Resolução 181, propondo a criação de Estados árabe e judeu na Palestina sob mandato britânico e um regime internacional para Jerusalém."
    }
  },
  {
    "day": 30,
    "month": 11,
    "event": {
      "preview": "Em 1874, nasceu Winston Churchill.",
      "fullEvent": "Em 30 de novembro de 1874, nasceu Winston Churchill, político e escritor britânico que se tornaria primeiro-ministro durante parte decisiva da Segunda Guerra Mundial."
    }
  },
  {
    "day": 1,
    "month": 12,
    "event": {
      "preview": "Em 1955, Rosa Parks recusou ceder seu assento em Montgomery.",
      "fullEvent": "Em 1º de dezembro de 1955, Rosa Parks foi presa após recusar ceder seu assento em um ônibus segregado em Montgomery, Alabama. O caso impulsionou um grande boicote e o movimento pelos direitos civis."
    }
  },
  {
    "day": 2,
    "month": 12,
    "event": {
      "preview": "Em 1942, ocorreu a primeira reação nuclear em cadeia controlada.",
      "fullEvent": "Em 2 de dezembro de 1942, a equipe liderada por Enrico Fermi produziu em Chicago a primeira reação nuclear em cadeia controlada e autossustentada, no experimento Chicago Pile-1."
    }
  },
  {
    "day": 3,
    "month": 12,
    "event": {
      "preview": "Em 1967, Christiaan Barnard realizou o primeiro transplante de coração humano bem-sucedido da história.",
      "fullEvent": "Em 3 de dezembro de 1967, o cirurgião Christiaan Barnard e sua equipe realizaram na Cidade do Cabo o primeiro transplante de coração humano de pessoa para pessoa amplamente reconhecido."
    }
  },
  {
    "day": 4,
    "month": 12,
    "event": {
      "preview": "Em 1954, o primeiro Burger King foi aberto em Miami.",
      "fullEvent": "Em 4 de dezembro de 1954, James McLamore e David Edgerton abriram em Miami uma unidade que daria origem à rede Burger King."
    }
  },
  {
    "day": 5,
    "month": 12,
    "event": {
      "preview": "Em 1952, o Grande Nevoeiro começou a cobrir Londres.",
      "fullEvent": "Em 5 de dezembro de 1952, uma combinação de poluição e condições meteorológicas formou o Grande Nevoeiro de Londres. A crise causou milhares de mortes e influenciou leis de controle da poluição do ar."
    }
  },
  {
    "day": 6,
    "month": 12,
    "event": {
      "preview": "Em 1917, a Finlândia declarou independência.",
      "fullEvent": "Em 6 de dezembro de 1917, o Parlamento finlandês aprovou a declaração de independência da Rússia, em meio às transformações provocadas pela Revolução Russa."
    }
  },
  {
    "day": 7,
    "month": 12,
    "event": {
      "preview": "Em 1941, o Japão atacou Pearl Harbor.",
      "fullEvent": "Em 7 de dezembro de 1941, forças japonesas atacaram a base naval norte-americana de Pearl Harbor, no Havaí. Os Estados Unidos entraram na Segunda Guerra Mundial no dia seguinte."
    }
  },
  {
    "day": 8,
    "month": 12,
    "event": {
      "preview": "Em 1980, John Lennon foi assassinado em Nova York.",
      "fullEvent": "Em 8 de dezembro de 1980, John Lennon foi assassinado na entrada do edifício Dakota, em Nova York. O ex-Beatle tinha 40 anos."
    }
  },
  {
    "day": 9,
    "month": 12,
    "event": {
      "preview": "Em 1968, Douglas Engelbart fez a 'Mother of All Demos'.",
      "fullEvent": "Em 9 de dezembro de 1968, Douglas Engelbart e sua equipe demonstraram tecnologias como mouse, hipertexto, edição colaborativa e videoconferência, apresentação posteriormente apelidada de 'Mother of All Demos'."
    }
  },
  {
    "day": 10,
    "month": 12,
    "event": {
      "preview": "Em 1948, a ONU adotou a Declaração Universal dos Direitos Humanos.",
      "fullEvent": "Em 10 de dezembro de 1948, a Assembleia Geral das Nações Unidas adotou a Declaração Universal dos Direitos Humanos em Paris, estabelecendo um marco internacional de direitos e liberdades fundamentais."
    }
  },
  {
    "day": 11,
    "month": 12,
    "event": {
      "preview": "Em 1936, Eduardo VIII abdicou do trono britânico.",
      "fullEvent": "Em 11 de dezembro de 1936, o rei Eduardo VIII formalizou sua abdicação para poder se casar com Wallis Simpson. Seu irmão tornou-se rei George VI."
    }
  },
  {
    "day": 12,
    "month": 12,
    "event": {
      "preview": "Em 1901, Marconi recebeu o primeiro sinal de rádio transatlântico segundo seu relato.",
      "fullEvent": "Em 12 de dezembro de 1901, Guglielmo Marconi afirmou ter recebido em Newfoundland um sinal de rádio enviado da Inglaterra, demonstrando a possibilidade de comunicação sem fio através do Atlântico."
    }
  },
  {
    "day": 13,
    "month": 12,
    "event": {
      "preview": "Em 1972, a Apollo 17 realizou a última caminhada humana na Lua até hoje.",
      "fullEvent": "Em 13 de dezembro de 1972, Eugene Cernan e Harrison Schmitt realizaram a terceira atividade extraveicular da Apollo 17. Cernan foi a última pessoa a deixar a superfície lunar antes do retorno da missão."
    }
  },
  {
    "day": 14,
    "month": 12,
    "event": {
      "preview": "Em 1911, Roald Amundsen chegou ao Polo Sul.",
      "fullEvent": "Em 14 de dezembro de 1911, a expedição de Roald Amundsen alcançou o Polo Sul, tornando-se a primeira equipe conhecida a chegar ao ponto geográfico."
    }
  },
  {
    "day": 15,
    "month": 12,
    "event": {
      "preview": "Em 1791, entrou em vigor a Bill of Rights dos EUA.",
      "fullEvent": "Em 15 de dezembro de 1791, foram ratificadas as dez primeiras emendas à Constituição dos Estados Unidos, conhecidas como Bill of Rights, que protegem liberdades e garantias individuais."
    }
  },
  {
    "day": 16,
    "month": 12,
    "event": {
      "preview": "Em 1773, ocorreu a Festa do Chá de Boston.",
      "fullEvent": "Em 16 de dezembro de 1773, colonos norte-americanos lançaram carregamentos de chá britânico no porto de Boston em protesto contra políticas tributárias do Império Britânico."
    }
  },
  {
    "day": 17,
    "month": 12,
    "event": {
      "preview": "Em 1903, os irmãos Wright realizaram um voo motorizado controlado.",
      "fullEvent": "Em 17 de dezembro de 1903, Orville e Wilbur Wright realizaram em Kitty Hawk uma série de voos com uma aeronave motorizada, mais pesada que o ar e controlável, marco da aviação."
    }
  },
  {
    "day": 18,
    "month": 12,
    "event": {
      "preview": "Em 1865, a 13ª Emenda foi proclamada nos EUA.",
      "fullEvent": "Em 18 de dezembro de 1865, foi oficialmente proclamada a ratificação da 13ª Emenda à Constituição dos Estados Unidos, abolindo a escravidão e a servidão involuntária, exceto como punição por crime."
    }
  },
  {
    "day": 19,
    "month": 12,
    "event": {
      "preview": "Em 1972, a Apollo 17 retornou à Terra.",
      "fullEvent": "Em 19 de dezembro de 1972, a Apollo 17 amerissou no Pacífico, encerrando a última missão tripulada do programa Apollo a pousar na Lua."
    }
  },
  {
    "day": 20,
    "month": 12,
    "event": {
      "preview": "Em 1803, a França transferiu formalmente a Louisiana aos EUA.",
      "fullEvent": "Em 20 de dezembro de 1803, a França entregou formalmente aos Estados Unidos o controle de Nova Orleans e da Louisiana adquirida, ampliando enormemente o território norte-americano."
    }
  },
  {
    "day": 21,
    "month": 12,
    "event": {
      "preview": "Em 1968, a Apollo 8 foi lançada rumo à Lua.",
      "fullEvent": "Em 21 de dezembro de 1968, a Apollo 8 decolou com Frank Borman, Jim Lovell e William Anders. Eles se tornariam os primeiros seres humanos a orbitar a Lua."
    }
  },
  {
    "day": 22,
    "month": 12,
    "event": {
      "preview": "Em 1989, o Portão de Brandemburgo foi reaberto.",
      "fullEvent": "Em 22 de dezembro de 1989, o Portão de Brandemburgo foi reaberto após décadas junto ao Muro de Berlim, tornando-se um poderoso símbolo da reunificação alemã que se aproximava."
    }
  },
  {
    "day": 23,
    "month": 12,
    "event": {
      "preview": "Em 1947, foi demonstrado o primeiro transistor funcional nos Bell Labs.",
      "fullEvent": "Em 23 de dezembro de 1947, John Bardeen e Walter Brattain demonstraram a seus colegas dos Bell Labs um transistor de contato pontual funcional, invenção que revolucionaria a eletrônica."
    }
  },
  {
    "day": 24,
    "month": 12,
    "event": {
      "preview": "Em 1968, a Apollo 8 transmitiu imagens da órbita lunar.",
      "fullEvent": "Em 24 de dezembro de 1968, a tripulação da Apollo 8 orbitou a Lua e realizou uma transmissão televisiva histórica. A missão também produziu a célebre fotografia Earthrise."
    }
  },
  {
    "day": 25,
    "month": 12,
    "event": {
      "preview": "Em 800, Carlos Magno foi coroado imperador.",
      "fullEvent": "Em 25 de dezembro do ano 800, o papa Leão III coroou Carlos Magno como imperador em Roma, episódio de grande importância para a política medieval europeia."
    }
  },
  {
    "day": 26,
    "month": 12,
    "event": {
      "preview": "Em 2004, um terremoto no Índico gerou um tsunami devastador.",
      "fullEvent": "Em 26 de dezembro de 2004, um enorme terremoto submarino próximo a Sumatra gerou tsunamis que atingiram diversos países do Oceano Índico e mataram mais de 200 mil pessoas."
    }
  },
  {
    "day": 27,
    "month": 12,
    "event": {
      "preview": "Em 1831, Charles Darwin partiu no HMS Beagle.",
      "fullEvent": "Em 27 de dezembro de 1831, Charles Darwin deixou a Inglaterra a bordo do HMS Beagle. A viagem de quase cinco anos forneceu observações essenciais para seu trabalho científico posterior."
    }
  },
  {
    "day": 28,
    "month": 12,
    "event": {
      "preview": "Em 1895, os irmãos Lumière fizeram uma famosa exibição pública de cinema em Paris.",
      "fullEvent": "Em 28 de dezembro de 1895, Auguste e Louis Lumière realizaram no Grand Café, em Paris, uma sessão pública paga de filmes projetados com o cinematógrafo, marco da história do cinema."
    }
  },
  {
    "day": 29,
    "month": 12,
    "event": {
      "preview": "Em 1890, ocorreu o Massacre de Wounded Knee.",
      "fullEvent": "Em 29 de dezembro de 1890, tropas norte-americanas mataram centenas de lakotas em Wounded Knee, Dakota do Sul, episódio trágico da expansão dos Estados Unidos sobre terras indígenas."
    }
  },
  {
    "day": 30,
    "month": 12,
    "event": {
      "preview": "Em 1922, foi criada a União Soviética.",
      "fullEvent": "Em 30 de dezembro de 1922, Rússia, Ucrânia, Bielorrússia e a Federação Transcaucasiana formalizaram a criação da União das Repúblicas Socialistas Soviéticas."
    }
  },
  {
    "day": 31,
    "month": 12,
    "event": {
      "preview": "Em 1999, o Canal do Panamá passou integralmente ao controle panamenho.",
      "fullEvent": "Em 31 de dezembro de 1999, os Estados Unidos transferiram ao Panamá o controle integral do Canal do Panamá, conforme os tratados assinados em 1977."
    }
  }
]

module.exports = events
