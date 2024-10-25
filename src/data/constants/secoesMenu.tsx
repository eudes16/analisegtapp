import { IconAppWindow, IconArrowsLeftRight, IconBrandAppleArcade, IconColorSwatch, IconCopyPlus, IconDatabase, IconDatabaseImport, IconDimensions, IconForms, IconInputSearch, IconLetterCase, IconLock, IconMenu, IconNumbers, IconPin, IconRefreshAlert, IconSection, IconShoppingCart, IconTags, IconTextColor, IconUsers, IconX } from '@tabler/icons-react';
import { MenuSecao } from '../models/MenuSecao';


export const secoes: MenuSecao[] = [
    {
        titulo: "Analise",
        aberta: false,
        itens: [
            {
                titulo: "Analisar GamerTag",
                tag: "personalizados",
                url: "/personalizados/modal",
                icone: <IconInputSearch />
            },
            {
                titulo: "Adicionar GamerTag",
                tag: "personalizados",
                url: "/personalizados/tamanhoJanela",
                icone: <IconCopyPlus />
            },
        ]
    },
    {
        titulo: "Buscas",
        aberta: false,
        itens: [
            {
                titulo: "Jogos",
                tag: "useState",
                url: "/buscas/jogos",
                icone: <IconBrandAppleArcade />,
            },
            {
                titulo: "GamerTags",
                tag: "useState",
                url: "/buscas/gamerTags",
                icone: <IconTags />,
            },
        ],
    },
];

export default secoes;