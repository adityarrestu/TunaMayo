let albums = [
    {
        id: 1,
        title: 'Takt op. Destiny',
        titleImg: './src/img/aset/takt title.webp',
        poster: './src/img/takt-op.Destiny-Visual.jpg',
        background: './src/img/aset/takt background.webp',
        banner: './src/img/aset/takt banner.webp',
        description: 'Sebuah kisah fana, indah, dan menentukan dari gadis-gadis yang berjuang dengan kekuatan musik di dunia di mana musik telah dilupakan.',
        urlAlbum: '../index.html', 
        rate: '9.7',
        year: '2021',
        tag: [
            "Original",
            "Fantasi",
            "Musik",
            "Remaja Laki-laki",
            "Bahasa Jepang"
        ],
        statusAlbum: 'Baru Tayang',
        episode: 'Diperbarui sampai 12',
        episodeList: [
            {
                id: 1,
                banner: './src/img/Mieruko-chan ep1.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNE1ObnpsYlM0L3dCbnFsU1htMHVqaUozRnJ3Y29KYWRIRjlYR0xWc3BXOVdJRmk0bEE3dXVLcFVVc29YS1B2NU0='
            },
            {
                id: 2,
                banner: './src/img/Mieruko-chan ep2.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNE1ObnpsYlM0L3dCbnFsU1htMHVqaUtCQVVDS3VVSUVGSkppWXhMVStqTHJZRjdvaTRwQ3hQOEk4OVZkZnN6QUw='
            },
            {
                id: 3,
                banner: './src/img/Mieruko-chan ep3.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNE1ObnpsYlM0L3dCbnFsU1htMHVqaUx3VHhDVTFRQndjeG0rNXRIOG9ueXBkYnBXdUFiOFRSeVdFZUg2TWpPTEI='
            },
            {
                id: 4,
                banner: './src/img/Mieruko-chan ep4.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNE1ObnpsYlM0L3dCbnFsU1htMHVqaU1sbHJuRUdiUTFQMDczL3NFL0dCZTYrSm93TjIybVcwaUt2eVVqTVlGSjE='
            },
            {
                id: 5,
                banner: './src/img/Mieruko-chan ep5.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNFBQU2RrbEEwd0FzV3E5Wmg0Zm9RdkIxdVRPUE14ZmxrOUJyeVd3eGNQcmoyanhQUTVacHNIY3BRNytWeWp4YVc='
            },
            {
                id: 6,
                banner: './src/img/Mieruko-chan ep6.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNFBQU2RrbEEwd0FzV3E5Wmg0Zm9RdkdLQ0pwVHU2VTI3R2VycDB4S0svT2txZTZrcXhickNmd0lVL2s2aGI4eTE='
            },
            {
                id: 7,
                banner: './src/img/Mieruko-chan ep7.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNFBQU2RrbEEwd0FzV3E5Wmg0Zm9Rdk5uWmNDQnNwQmZzZEdjSzhPRDVwSWo1QThJTGFibUpRZUFMU3FLNFo2cDc='
            },
            {
                id: 8,
                banner: './src/img/Mieruko-chan ep8.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNFBQU2RrbEEwd0FzV3E5Wmg0Zm9RdkpGcEdlMDNJclRtdFk0MHpWNkhRWkNSNkVZQ2swSWNpNitKNklDd1NyZEM='
            },
            {
                id: 9,
                banner: './src/img/Mieruko-chan ep9.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNFBQU2RrbEEwd0FzV3E5Wmg0Zm9RdktuVk9Fb29oZkZFWmV3NU5KTUQweUYycGp2UWZENEVBL3UzK2xsbUE5VXg='
            },
            {
                id: 10,
                banner: './src/img/Mieruko-chan ep10.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNG1KY1d1ZENZbWF5dEdVc0Q3UFBUMDNPcUxic2RsemxjTDBrQ05ZZ0xiSG53WFJXd2JMSnYxUFlRbTcwS3czMjQ='
            },
            {
                id: 11,
                banner: './src/img/Mieruko-chan ep10.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNG1KY1d1ZENZbWF5dEdVc0Q3UFBUMDFINmN6b2JxV3V3cDhGZy9IbXkyT2M5djM2UnA4WVk1K3gwYW5zTmJXemU='
            },
            {
                id: 12,
                banner: './src/img/Mieruko-chan ep10.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNG1KY1d1ZENZbWF5dEdVc0Q3UFBUMDRrVDUyMGN1MUdmYmhMSVNDVXlOdEZVMSs1SFJoUUZoajAxSjZoWVFUVTg='
            }
        ]
    },
    {
        id: 2,
        title: 'Demon Slayer: Entertainment District Arc',
        titleImg: './src/img/aset/demons title.png',
        poster: './src/img/aset/demons poster.jpg',
        background: './src/img/aset/demons background.png',
        banner: './src/img/Demon Slayer Entertainment District Arc.jpg',
        description: 'Sebuah kisah fana, indah, dan menentukan dari gadis-gadis yang berjuang dengan kekuatan musik di dunia di mana musik telah dilupakan.',
        urlAlbum: '../index2.html', 
        rate: '9.7',
        year: '2021',
        tag: [
            "Manga",
            "Aksi",
            "Remaja Laki-laki",
            "Bahasa Jepang"
        ],
        statusAlbum: 'Baru Tayang',
        episode: 'Diperbarui sampai 13',
        episodeList: [
            {
                id: 1,
                banner: './src/img/Mieruko-chan ep1.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNGtPVXdKcEIrRjZvVjVITTljOXNjMkJleXduUCtLWWdManNISHRzazNJNEk9'
            },
            {
                id: 2,
                banner: './src/img/Mieruko-chan ep2.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNGtPVXdKcEIrRjZvVjVITTljOXNjMk1lQW9JdEpyWlo4bm01RmJFRWFORWM9'
            },
            {
                id: 3,
                banner: './src/img/Mieruko-chan ep3.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNGtPVXdKcEIrRjZvVjVITTljOXNjMkNoNXFvQk1URGRURWcwbzhCTTVndGc9'
            },
            {
                id: 4,
                banner: './src/img/Mieruko-chan ep4.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNFBXbHp0Zk5QSncyeDRWeEJTWW1hQkVUV29vT21OamhZZnI0WEFxa2RGRjA9'
            },
            {
                id: 5,
                banner: './src/img/Mieruko-chan ep5.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNFBXbHp0Zk5QSncyeDRWeEJTWW1hQkZNN2Y1aG5JZkNGelhONGNIb0t3OTA9'
            },
            {
                id: 6,
                banner: './src/img/Mieruko-chan ep6.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNFBXbHp0Zk5QSncyeDRWeEJTWW1hQktxUXZHYlplazNGcmhKekpGQ0NvKzg9'
            },
            {
                id: 7,
                banner: './src/img/Mieruko-chan ep7.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNFBXbHp0Zk5QSncyeDRWeEJTWW1hQk4zYkF0OEhtcEFRUi90WXA1WmhzQk09'
            },
            {
                id: 8,
                banner: './src/img/Mieruko-chan ep8.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNFVHb0FLSUZxRjFUMXRXT2xKeGg2NWdEK3g3QmZMYnVsM1ArMnM4VjBYU0E9'
            },
            {
                id: 9,
                banner: './src/img/Mieruko-chan ep9.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNFVHb0FLSUZxRjFUMXRXT2xKeGg2NXAvei9KTEhEckxwNXE4VlpPQ0g1T289'
            },
            {
                id: 10,
                banner: './src/img/Mieruko-chan ep10.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNFVHb0FLSUZxRjFUMXRXT2xKeGg2NXFadzRZNVYyd1FJQ05YTnl2UmkxVDg9'
            },
            {
                id: 11,
                banner: './src/img/Mieruko-chan ep10.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNFVHb0FLSUZxRjFUMXRXT2xKeGg2NWx2dzZUckV2bk0ybUtlL1VrYTkrYmM9'
            },
            {
                id: 12,
                banner: './src/img/Mieruko-chan ep10.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNFBsS3I3ODNrZlRZWFVFVklKaTRmWW8vOTFCWnpHMWJWTzRlZHlZM3dJa1k9'
            },
            {
                id: 13,
                banner: './src/img/Mieruko-chan ep10.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNFBsS3I3ODNrZlRZWFVFVklKaTRmWXFhSlhpK25JWG1zbEtCY0lMRStFcG89'
            }
        ]
    },
    {
        id: 3,
        title: 'Atttack on Titan OAD',
        titleImg: './src/img/aset/AOT OAD title.webp',
        poster: './src/img/aset/AOT OAD poster.png',
        background: './src/img/aset/AOT OAD background.webp',
        banner: './src/img/aset/AOT OAD banner.webp',
        description: 'Sebuah kisah fana, indah, dan menentukan dari gadis-gadis yang berjuang dengan kekuatan musik di dunia di mana musik telah dilupakan.',
        urlAlbum: '../index3.html', 
        rate: '9.7',
        year: '2021',
        tag: [
            "Manga",
            "Fantasi",
            "Remaja Laki-laki",
            "Militer",
            "Bahasa Jepang"
        ],
        statusAlbum: 'Baru Tayang',
        episode: 'Diperbarui sampai 8',
        episodeList: [
            {
                id: 1,
                banner: './src/img/Mieruko-chan ep1.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNHZSc2RkZ0tvTExyaUdDdk15ajhScW9RakEyb2JVeW1Ndzd0MzFET0tDQXc9'
            },
            {
                id: 2,
                banner: './src/img/Mieruko-chan ep2.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNHZSc2RkZ0tvTExyaUdDdk15ajhScXRmMm0vTHp4SGx2MnIvSkhGU0piS3M9'
            },
            {
                id: 3,
                banner: './src/img/Mieruko-chan ep3.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNHZSc2RkZ0tvTExyaUdDdk15ajhScW5OWlhQL2I3NUlkOFBEaXFIQmNpd2s9'
            },
            {
                id: 4,
                banner: './src/img/Mieruko-chan ep4.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNEhubUhjZjVHZWVyelNXVmhPWUpjRjJVUUFjQmlBQURLSk1KWEZsNWtFNjk4ZnFVVlh5ZGhuRXhsMlRBajhocWU='
            },
            {
                id: 5,
                banner: './src/img/Mieruko-chan ep5.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNFRQdnk0OW5BZStLMWx1V1pMcm9DNnhVakJHYVhQRUd5QlRxMjlhREtoaFU9'
            },
            {
                id: 6,
                banner: './src/img/Mieruko-chan ep6.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNFRQdnk0OW5BZStLMWx1V1pMcm9DNjd0bXBENEl6dWt1QVFDQzdXT2xBb2NwMkZPdUlpcURXZ2hmWFlnMkxKMjg='
            },
            {
                id: 7,
                banner: './src/img/Mieruko-chan ep7.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNFRQdnk0OW5BZStLMWx1V1pMcm9DNjdCQzQzcm02dmxESGVCc3ZHei9wM1E9'
            },
            {
                id: 8,
                banner: './src/img/Mieruko-chan ep8.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNFRQdnk0OW5BZStLMWx1V1pMcm9DNnpXd1JIanJLdFREY21ORVZ5MlNDU0E9'
            },
            {
                id: 9,
                banner: './src/img/Mieruko-chan ep9.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNFdQZ00zNDQ0YTlQSmhMZ0FaTEd0WTJiVy9BRUtLT0NiQXNEZXhGa09TUHc9'
            },
            {
                id: 10,
                banner: './src/img/Mieruko-chan ep10.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNFdQZ00zNDQ0YTlQSmhMZ0FaTEd0WTlIbFpNMDcwZzEyTEh0V0E3bWE3Y1U9'
            },
            {
                id: 11,
                banner: './src/img/Mieruko-chan ep10.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNFdQZ00zNDQ0YTlQSmhMZ0FaTEd0WTQ2WERwa1VPYXlXLy9yT2plSytaRGc9'
            },
            {
                id: 12,
                banner: './src/img/Mieruko-chan ep10.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNFdQZ00zNDQ0YTlQSmhMZ0FaTEd0WTk2S1BQVWhwUjdkbDV4bWlEcVkycG89'
            },
            {
                id: 13,
                banner: './src/img/Mieruko-chan ep10.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNEF1KzlRbWdhUFVub3FzVXFQb2FLb2k2ZGhHV2M0NFNBTXBCaXprOVNPL2s9'
            }, {
                id: 14,
                banner: './src/img/Mieruko-chan ep10.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNEF1KzlRbWdhUFVub3FzVXFQb2FLb2hOeFJCM0QycWxQd0V6UXNiWklqdDA9'
            },
            {
                id: 15,
                banner: './src/img/Mieruko-chan ep10.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNEF1KzlRbWdhUFVub3FzVXFQb2FLb3FlSVJYckhiL215dCs4QTNlaEprbE09'
            },
            {
                id: 16,
                banner: './src/img/Mieruko-chan ep10.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNEF1KzlRbWdhUFVub3FzVXFQb2FLb3ZKM0VveTZPR0k5L1VOVlNCRVAxdkk9'
            },
            {
                id: 17,
                banner: './src/img/Mieruko-chan ep10.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNENLVjg4Y0o0dDAxbEUxODlncDNVVG9qeHFsNnk5QXl2dnlKQ05ya2NQTmM9'
            },
        ]
    },
    {
        id: 4,
        title: 'Mushoku Tensei: Jobless Reincarnation',
        titleImg: './src/img/aset/musoten title.webp',
        poster: './src/img/aset/musoten poster.png',
        background: './src/img/aset/musoten background.webp',
        banner: './src/img/aset/musoten banner.webp',
        description: 'Sebuah kisah fana, indah, dan menentukan dari gadis-gadis yang berjuang dengan kekuatan musik di dunia di mana musik telah dilupakan.',
        urlAlbum: '../index4.html', 
        rate: '9.7',
        year: '2021',
        tag: [
            "Novel",
            "Fantasi",
            "Aksi",
            "Magic",
            "Remaja Laki-laki",
            "Bahasa Jepang"
        ],
        statusAlbum: 'Baru Tayang',
        episode: '23 Episode',
        episodeList: [
            {
                id: 1,
                banner: './src/img/Mieruko-chan ep1.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNDdjc1FMdUc3SmN1TUV0bkFOR0ZhTTVKQUowaU9aUkNKMjlQZVZzZzhLVFE9'
            },
            {
                id: 2,
                banner: './src/img/Mieruko-chan ep2.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNDdjc1FMdUc3SmN1TUV0bkFOR0ZhTTFDYW5ERGt1Y0xqU25takZKQ1YraEU9'
            },
            {
                id: 3,
                banner: './src/img/Mieruko-chan ep3.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNDdjc1FMdUc3SmN1TUV0bkFOR0ZhTXpLbDJjaWpodmxiai9yQlB5NkN1T009'
            },
            {
                id: 4,
                banner: './src/img/Mieruko-chan ep4.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNDdjc1FMdUc3SmN1TUV0bkFOR0ZhTTh2aGFXRS81NXkvcmZ2d2JHVnAwWVk9'
            },
            {
                id: 5,
                banner: './src/img/Mieruko-chan ep5.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNDFoK2M0czN6dGQyMTNWR2N1TWNWSG1NQ0NxMjEwVmxUcEIvRXg5U0ZDM2c9'
            },
            {
                id: 6,
                banner: './src/img/Mieruko-chan ep6.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNDFoK2M0czN6dGQyMTNWR2N1TWNWSG9rTno5MnU5UXhWLzA3K3h5RHMyVFE9'
            },
            {
                id: 7,
                banner: './src/img/Mieruko-chan ep7.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNDFoK2M0czN6dGQyMTNWR2N1TWNWSHB4SHpaWUwvVlc5NmZqemhOV0c4OEE9'
            },
            {
                id: 8,
                banner: './src/img/Mieruko-chan ep8.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNDFoK2M0czN6dGQyMTNWR2N1TWNWSHU5eCtCNTljNERrMkltZi9pbE9uYmhvK3E1eTR6UnFYM21TNEI2Z3F3MHk='
            },
            {
                id: 9,
                banner: './src/img/Mieruko-chan ep9.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNG1BSUlhS1UxNFk5OCthT2JQWVQxRVpiYzhUMnRCcWFzMTFXdWp3SytUZWM9'
            },
            {
                id: 10,
                banner: './src/img/Mieruko-chan ep10.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNG1BSUlhS1UxNFk5OCthT2JQWVQxRVp0VERKbHlUZi9icDcyME1zaEdVS1U9'
            },
            {
                id: 11,
                banner: './src/img/Mieruko-chan ep10.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNG1BSUlhS1UxNFk5OCthT2JQWVQxRVhrdmJHMzc2cEQvTWcyVkdEZUFjYTg9'
            },
            {
                id: 12,
                banner: './src/img/Mieruko-chan ep10.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNGQvY3AzWFVWKy9ORWt3bGJrNENxUXU3QnFFRkhwK1BBalQxME5Edm9MakY4cXhCL1paL1p2cWcvd21NbEdjV0g='
            },
            {
                id: 13,
                banner: './src/img/Mieruko-chan ep10.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNGQvY3AzWFVWKy9ORWt3bGJrNENxUXRRV1lnZGluMWdKOHBPdDlQYjRFZVpycEVSSFNkK3hBbkxIZDY5UDEwSXc='
            },
            {
                id: 14,
                banner: './src/img/Mieruko-chan ep10.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNGQvY3AzWFVWKy9ORWt3bGJrNENxUXIrbUFTWmo4alBZYitNWTNTRzhOS1cwQWxGN0VxT0ZCSERCaFgwdCs1NUU='
            },
            {
                id: 15,
                banner: './src/img/Mieruko-chan ep10.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNGQvY3AzWFVWKy9ORWt3bGJrNENxUXMxc3NtUDNqK01sQ09OQnVzM1k5Rm9WYmtJeUgwN1BFbGZvVTN4WmVSY2E='
            },
            {
                id: 16,
                banner: './src/img/Mieruko-chan ep10.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNGQvY3AzWFVWKy9ORWt3bGJrNENxUWl0VDQ0V2ZMeFMxY1dDRit0cGpLV1pYM3VzSEtFUnhSUXJybStaRWl5dFE='
            },
            {
                id: 17,
                banner: './src/img/Mieruko-chan ep10.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNEJ0Tzd6VEhTNHdWMlcyMisrTnZsRGZWcGVUaTdpcjRBZDBJWVFBS0hja2U3TjB2c0phNGNXakdIaThOL2lrSDg='
            },
            {
                id: 18,
                banner: './src/img/Mieruko-chan ep10.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNEJ0Tzd6VEhTNHdWMlcyMisrTnZsRGZ2OSs1YTFNZmVrOWovcFRDMUlOSTZzVjRuSzVQODhSQkxxa3IyMmFSTDU='
            },
            {
                id: 19,
                banner: './src/img/Mieruko-chan ep10.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNEJ0Tzd6VEhTNHdWMlcyMisrTnZsRFVwbnJaRHRmWUVGWlBTVzFESWdJQ2YyNE5nNVlIdk94VGVrbGxKT0Y2bGY='
            },
            {
                id: 20,
                banner: './src/img/Mieruko-chan ep10.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNEJ0Tzd6VEhTNHdWMlcyMisrTnZsRGNxOWJ5YUJQaWxzWnlUR1FoUzJmM3lNT3B1WGR2VEljZ3hUZy92M09sRmQ='
            },
            {
                id: 21,
                banner: './src/img/Mieruko-chan ep10.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNHpkcW1ZbmJvb3c4ZVFaOFgwcVFnajMxcWVBOThadWc3MnA3eFpQU0p2NUp0V0lxalhEN3NlUWcwMDI3dGE2Y1Y='
            },
            {
                id: 22,
                banner: './src/img/Mieruko-chan ep10.webp',
                link: 'data-src="https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNHpkcW1ZbmJvb3c4ZVFaOFgwcVFnajRGQlhCVFlZeU1JL3g1V0s5ZUZKc3g2aXRydm5UYXlzaGlLcjBYLzZNWnI="'
            },
            {
                id: 23,
                banner: './src/img/Mieruko-chan ep10.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNHpkcW1ZbmJvb3c4ZVFaOFgwcVFnajluVmV2TkZkWVNUdGNxL1l6N1FveEJrS1Q1YWtjTUNYMWlmdFpFeXkrZWM='
            },

        ]
    },
    {
        id: 5,
        title: 'Ranking of Kings',
        titleImg: './src/img/aset/rankings title.png',
        poster: './src/img/aset/rankings poster.png',
        background: './src/img/aset/rankings background.jpg',
        banner: './src/img/aset/rankings banner.jpg',
        description: 'Sebuah kisah fana, indah, dan menentukan dari gadis-gadis yang berjuang dengan kekuatan musik di dunia di mana musik telah dilupakan.',
        urlAlbum: '../index4.html', 
        rate: '9.7',
        year: '2021',
        tag: [
            "Original",
            "Fantasi",
            "Musik",
            "Remaja Laki-laki",
            "Bahasa Jepang"
        ],
        statusAlbum: 'Baru Tayang',
        episode: 'Diperbarui sampai 13',
        episodeList: [
            {
                id: 1,
                banner: './src/img/Mieruko-chan ep1.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNFpET0lYVzJiN1d4ZVhaNzlYQllqRmUvNSsvTkQxbmorR3REQVBENHFEU3YyRzFWcldKUWx6UXJOTnJYWC96Mjg='
            },
            {
                id: 2,
                banner: './src/img/Mieruko-chan ep2.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNFpET0lYVzJiN1d4ZVhaNzlYQllqRmF0QlYwN1h5azZoa3J5b0FPbDNOb1k5Wkh5UklvR05yWk5KUjBSMzIxa00='
            },
            {
                id: 3,
                banner: './src/img/Mieruko-chan ep3.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNFpET0lYVzJiN1d4ZVhaNzlYQllqRmJiU1A4WC9IMXA1YkdibXBobXFZdzVmV2lxdVhmTUpvOTd0cVdkYUtJQ2g='
            },
            {
                id: 4,
                banner: './src/img/Mieruko-chan ep4.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNEx1Y28wM092K1lRaUpDam5qTWpKcTV5RnJ5eHUwUldNZEZUaENadzhYMDdHVmswWTlONmlmR2JLcjdFS2xWS3o='
            },
            {
                id: 5,
                banner: './src/img/Mieruko-chan ep5.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNEx1Y28wM092K1lRaUpDam5qTWpKcTNtL0phZFpYRlpBK011WWlUZTdSVU1XMFAxdEdyOEZHRHV0RFRoT0ZvUzA='
            },
            {
                id: 6,
                banner: './src/img/Mieruko-chan ep6.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNEx1Y28wM092K1lRaUpDam5qTWpKcTZBaDVQUllzcUYxdjArWDlUaUdWa0NmRVZ2ZFVyak5qdCtFN3V5ZmNFem0='
            },
            {
                id: 7,
                banner: './src/img/Mieruko-chan ep7.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNEx1Y28wM092K1lRaUpDam5qTWpKcTdDZHhrVGNhamk0VEJlRFNlWDgvV2RpRHN0ckt2UmNhdXF3QzBRQ2Fjamk='
            },
            {
                id: 8,
                banner: './src/img/Mieruko-chan ep8.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNFlNUnpnQUl3NkpKeDdkYkd2ZHFuUE1JbzFxUmxYbEhPZ25Wc2R4dmNJWERHai81Y09rcGZGblRpVm9ndFdFazc='
            },
            {
                id: 9,
                banner: './src/img/Mieruko-chan ep9.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNFlNUnpnQUl3NkpKeDdkYkd2ZHFuUEVCQkJNMUExdmlsaVRiTk4vRndzT2d6S1dnL2lNUmppL1RDQlYyQkhPcTU='
            },
            {
                id: 10,
                banner: './src/img/Mieruko-chan ep10.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNFlNUnpnQUl3NkpKeDdkYkd2ZHFuUEpBWE14TU9VTDgxTFY5cDUrZ2tBaVBTOXFnUUtVaDBjMURDODlFMHJQWmE='
            },
            {
                id: 11,
                banner: './src/img/Mieruko-chan ep10.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNFlNUnpnQUl3NkpKeDdkYkd2ZHFuUEsyZlNjS0tRR1NJVTFVeWI0MUp0TUFETTNhdWI0UFAwSjEyR1E1S3gyckc='
            },
            {
                id: 12,
                banner: './src/img/Mieruko-chan ep10.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNDhaUmxXN1djN2ZZMERBcnlPMVlaN001V3RpVVkwZm1oTDRoQWQ2OWJDL3dvOSs4aW5UaUpUN3JYbmhoZWZnVnk='
            },
            {
                id: 13,
                banner: './src/img/Mieruko-chan ep10.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNDhaUmxXN1djN2ZZMERBcnlPMVlaN0t5R3VzVi9xc3krMnFZbW83SjNEejhuOUF2TkwwNm1TNzVLV3poVHZJTXM='
            }
        ]
    },
    {
        id: 6,
        title: 'Mieruko-chan',
        titleImg: './src/img/aset/mieruko title.png',
        poster: './src/img/aset/mieruko poster.jpg',
        background: './src/img/aset/mieruko background.png',
        banner: './src/img/Mieruko-chan Banner.webp',
        description: 'Sebuah kisah fana, indah, dan menentukan dari gadis-gadis yang berjuang dengan kekuatan musik di dunia di mana musik telah dilupakan.',
        urlAlbum: '../index4.html', 
        rate: '9.7',
        year: '2021',
        tag: [
            "Manga",
            "Horror",
            "Remaja Perempuan",
            "Misteri",
            "Sekolah",
            "Bahasa Jepang"
        ],
        statusAlbum: 'Baru Tayang',
        episode: 'Diperbarui sampai 12',
        episodeList: [
            {
                id: 1,
                banner: './src/img/Mieruko-chan ep1.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNHp3MUkzSzJHTmZXbnFCeW4rcHlyNXBrSG9uQ3lneUpzdGFhZ1RIRStFT3BOMVpBZlgzdm1rS0dpZU4rSnFkeUM='
            },
            {
                id: 2,
                banner: './src/img/Mieruko-chan ep2.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNHp3MUkzSzJHTmZXbnFCeW4rcHlyNW1oQ25kdmJ1L3NJQ2JES2gzb3FnMzYzMFpSeXhxeng5TjhOM3dQSndzSlc='
            },
            {
                id: 3,
                banner: './src/img/Mieruko-chan ep3.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNHp3MUkzSzJHTmZXbnFCeW4rcHlyNWtaR2pLUHBJd1VYMUEyV3VGdkR1STd2OFpnNFZ1ampOLzNLdVdtU1VrbVY='
            },
            {
                id: 4,
                banner: './src/img/Mieruko-chan ep4.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNHp3MUkzSzJHTmZXbnFCeW4rcHlyNXRFUFZObXdWK2pPM0JFM2NScUdCL29VWkQzdXJsYTI3RjYxc1lRUGhLWEs='
            },
            {
                id: 5,
                banner: './src/img/Mieruko-chan ep5.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNHp3MUkzSzJHTmZXbnFCeW4rcHlyNWxnb3J5Y09OcmQzdDhnZ0RBMjhteUZQelZjNFJuYldBTklSV3hjemJIV1c='
            },
            {
                id: 6,
                banner: './src/img/Mieruko-chan ep6.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNHZ3K01FSEUvbHV1U2k0a2ZlWXB0WGZpcUNLMDJ5aG01TUtnU1NwSW5KVW9KV0ZFcTlQRkJST2NQNGdvN3ZYUGc='
            },
            {
                id: 7,
                banner: './src/img/Mieruko-chan ep7.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNHZ3K01FSEUvbHV1U2k0a2ZlWXB0WFpjR2NwZGdodXJEN2NiTkZySWlxRHA4M0hablkycTNudVlNMkFrVWdjVWc='
            },
            {
                id: 8,
                banner: './src/img/Mieruko-chan ep8.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNHZ3K01FSEUvbHV1U2k0a2ZlWXB0WGNpb2JqYzc4VnlMZTVQdEN5Y0QyTmF4bVRpOFVvVlg3U0l0U2hEaXZsNEo='
            },
            {
                id: 9,
                banner: './src/img/Mieruko-chan ep9.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNHZ3K01FSEUvbHV1U2k0a2ZlWXB0WFlFYjQrU0ZsSGhjY292b1ZZWnFGY0tQMS9sZU8vaWFRNHNES0FFa2dlMkk='
            },
            {
                id: 10,
                banner: './src/img/Mieruko-chan ep10.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNHFrUW5KdXI5V1N3dkhabzMvbTdQQmFHbGxxcVFQbk81VkVlTUtqcjM4eXlVdGdsSU9lVWFlZjlTL1l5Y3RYdSs='
            },
            {
                id: 11,
                banner: './src/img/Mieruko-chan ep10.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNHFrUW5KdXI5V1N3dkhabzMvbTdQQlFaNWI4UkxSRUNQaUNCY2VVOU1qWlU4VGNZNTNVbkdqdCtGMEJsbTQ2clY='
            },
            {
                id: 12,
                banner: './src/img/Mieruko-chan ep10.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNHFrUW5KdXI5V1N3dkhabzMvbTdQQmV5WnQ1QUpIZk9ocU1SVUZxTXJNOEFUMXNvNitTdndYRWhmeG1HcmVIOUY='
            },
        ]
    },
    {
        id: 7,
        title: 'Kisah Gadis Zaman Taisho',
        titleImg: './src/img/aset/taisho title.png',
        poster: './src/img/aset/taisho poster.png',
        background: './src/img/aset/taisho-background.jpg',
        banner: './src/img/aset/taisho banner.png',
        description: 'Sebuah kisah fana, indah, dan menentukan dari gadis-gadis yang berjuang dengan kekuatan musik di dunia di mana musik telah dilupakan.',
        urlAlbum: '../index4.html', 
        rate: '9.7',
        year: '2021',
        tag: [
            "Manga",
            "Fantasi",
            "Aksi",
            "Romance",
            "Remaja Laki-laki",
            "Bahasa Jepang"
        ],
        statusAlbum: 'Completed',
        episode: '12 Episode',
        episodeList: [
            {
                id: 1,
                banner: './src/img/Mieruko-chan ep1.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNDBwN2lHa2lSYlRVRERtcFhFQWltTVlodjgwcVVTZkVxcXh0d2tLdDA1WmlTSXJjeUFvcGRmeko4c1RPUnhNSGQ='
            },
            {
                id: 2,
                banner: './src/img/Mieruko-chan ep2.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNDBwN2lHa2lSYlRVRERtcFhFQWltTVlodjgwcVVTZkVxcXh0d2tLdDA1WmdMcnNEMFNMbjBWOG1XT1dGUmVoV2o='
            },
            {
                id: 3,
                banner: './src/img/Mieruko-chan ep3.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNDBwN2lHa2lSYlRVRERtcFhFQWltTVlodjgwcVVTZkVxcXh0d2tLdDA1WmpJTmVCTzQvaVUrZHNlOHpHSDQwWlM='
            },
            {
                id: 4,
                banner: './src/img/Mieruko-chan ep4.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNDBwN2lHa2lSYlRVRERtcFhFQWltTVlodjgwcVVTZkVxcXh0d2tLdDA1WmdITC9NcGovbUtVY2pxYXZiNkE0ZHM='
            },
            {
                id: 5,
                banner: './src/img/Mieruko-chan ep5.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNDQrT1MvUUhuVlpxckdYVzEvTHhEejdBbWppRnJrWHc2eGFuV1ZHY3NKUytNdkw4ZmpBUGQ3VGZFcTMrR1d2Tkg='
            },
            {
                id: 6,
                banner: './src/img/Mieruko-chan ep6.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNDQrT1MvUUhuVlpxckdYVzEvTHhEejdBbWppRnJrWHc2eGFuV1ZHY3NKUys0c2ZLTGVKRzFkRGVvZnZZU3dFWDE='
            },
            {
                id: 7,
                banner: './src/img/Mieruko-chan ep7.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNDQrT1MvUUhuVlpxckdYVzEvTHhEejdBbWppRnJrWHc2eGFuV1ZHY3NKUyt1MUI4MWVpTFZuS3FXdG94MkxINjI='
            },
            {
                id: 8,
                banner: './src/img/Mieruko-chan ep8.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNDQrT1MvUUhuVlpxckdYVzEvTHhEejdBbWppRnJrWHc2eGFuV1ZHY3NKUy84RlZBYjNWOGhONlFaSUJBT0FsVng='
            },
            {
                id: 9,
                banner: './src/img/Mieruko-chan ep9.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNFZ2SVA4VWpWZTMxengrME1nT28zeTIwRVJnNElvdmFMSVc0LzNsTVpKTWc2bVVzVmh3UkJXVHlnd2IraDlVcVk='
            },
            {
                id: 10,
                banner: './src/img/Mieruko-chan ep10.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNFZ2SVA4VWpWZTMxengrME1nT28zeTIwRVJnNElvdmFMSVc0LzNsTVpKTWhVb29jL0FkQTZVL3pOS0VMZU5jSFY='
            },
            {
                id: 11,
                banner: './src/img/Mieruko-chan ep10.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNFZ2SVA4VWpWZTMxengrME1nT28zeTIwRVJnNElvdmFMSVc0LzNsTVpKTWk3dzJnSlVWL0dqb0p6NHIvTkZrTmU='
            },
            {
                id: 12,
                banner: './src/img/Mieruko-chan ep10.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNFZ2SVA4VWpWZTMxengrME1nT28zeTIwRVJnNElvdmFMSVc0LzNsTVpKTWlUUnVvTTlFMTd3UXdUcnNSOFBFTHk='
            }
        ]
    },
    {
        id: 8,
        title: 'Shinka no Nomi',
        titleImg: './src/img/aset/sinkanomi title.webp',
        poster: './src/img/aset/sinkanomi poster.png',
        background: './src/img/aset/sinkanomi background.webp',
        banner: './src/img/aset/sinkanomi banner.webp',
        description: 'Sebuah kisah fana, indah, dan menentukan dari gadis-gadis yang berjuang dengan kekuatan musik di dunia di mana musik telah dilupakan.',
        urlAlbum: '../index4.html', 
        rate: '9.7',
        year: '2021',
        tag: [
            "Original",
            "Fantasi",
            "Musik",
            "Remaja Laki-laki",
            "Bahasa Jepang"
        ],
        statusAlbum: 'Completed',
        episode: '12 Episode',
        episodeList: [
            {
                id: 1,
                banner: './src/img/Mieruko-chan ep1.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNGpOeGw2eXJNbjFleGxyTVdFV3hyU05MKzhwZ1drcTR0ZEhReVFxYkp6UmIwRmVYU0Qvdm9xSjI5bDNSKzlxSDI='
            },
            {
                id: 2,
                banner: './src/img/Mieruko-chan ep2.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNGpOeGw2eXJNbjFleGxyTVdFV3hyU045Y3crOURvSUZCWU5sNHBBam85cENiVmh2WUlkSUNZenFuMlZnMUZHNkk='
            },
            {
                id: 3,
                banner: './src/img/Mieruko-chan ep3.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNGpOeGw2eXJNbjFleGxyTVdFV3hyU0Mvd0ZCL2JJRE1iVTZsRXBVamtXVEU1QzkvdDFQUlc5VU5IRWovRC8wUUo='
            },
            {
                id: 4,
                banner: './src/img/Mieruko-chan ep4.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNGpOeGw2eXJNbjFleGxyTVdFV3hyU1BHWXpFcUFpUXRZUzR5anJNcWFSNWFXWUdOcklwMnVHR3N2VnppTXBKakU='
            },
            {
                id: 5,
                banner: './src/img/Mieruko-chan ep5.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNFUrUkZobEZjZkdRN3BaUXVkaEZQQUdXRkYvQUY5MUsyd0lsUGZKOTBZdmVSZ3p2RTRLMVNabyt4WHBKaEdjWlo='
            },
            {
                id: 6,
                banner: './src/img/Mieruko-chan ep6.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNFUrUkZobEZjZkdRN3BaUXVkaEZQQUhUVmJUSDRpMWdKMCtyMUVhUnFuamtJa2dNYTZqNTZubE1lTWRSRFNyUUE='
            },
            {
                id: 7,
                banner: './src/img/Mieruko-chan ep7.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNFUrUkZobEZjZkdRN3BaUXVkaEZQQUdONW82dFdFdVMyZ1RYT1NPYWkybHJvb1h4aXdGdXBaUElpTTdMbHpRb1o='
            },
            {
                id: 8,
                banner: './src/img/Mieruko-chan ep8.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNFUrUkZobEZjZkdRN3BaUXVkaEZQQUk3cTRiU0NFZFdhVnVERnF3NmNBZGpKcndQQVVlVDRoa1FHay9SS2gyWW4='
            },
            {
                id: 9,
                banner: './src/img/Mieruko-chan ep9.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNFUrUkZobEZjZkdRN3BaUXVkaEZQQU9od1hyWmllV1ZGNE5mRzNmdXhlb3RDaU9UVUo0K0ZoRUhCMXN0bXgzRVA='
            },
            {
                id: 10,
                banner: './src/img/Mieruko-chan ep10.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNFQ2djgyZ1JDWlhjSjFiQUFIY2NJTG9RcDRRZm1Fbnl6WUx5NE9KeFVPOWVCVUF6L294SzNhYzIreEVpL3BiWXA='
            },
            {
                id: 11,
                banner: './src/img/Mieruko-chan ep10.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNFQ2djgyZ1JDWlhjSjFiQUFIY2NJTHRVaFU3ZkFCcGJJS2MwclJKLzNFZWlJeWpsSlhvODZGYXVtT2JPcjF5T04='
            },
            {
                id: 12,
                banner: './src/img/Mieruko-chan ep10.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNFQ2djgyZ1JDWlhjSjFiQUFIY2NJTGp6RU84WHdQRS9QdHYwUUg3UFdaWVpmUnNqa0pmWU9vOXFISjBOUFRqMDU='
            }
        ]
    },
    {
        id: 9,
        title: "Arifureta: From Commonplace to World's Strongest S2",
        titleImg: './src/img/aset/arifureta2 title.webp',
        poster: './src/img/aset/arifureta2 poster.png',
        background: './src/img/aset/arifureta2 background.webp',
        banner: './src/img/aset/arifureta2 banner.webp',
        description: 'Sebuah kisah fana, indah, dan menentukan dari gadis-gadis yang berjuang dengan kekuatan musik di dunia di mana musik telah dilupakan.',
        urlAlbum: '../index4.html', 
        rate: '9.7',
        year: '2021',
        tag: [
            "Original",
            "Fantasi",
            "Musik",
            "Remaja Laki-laki",
            "Bahasa Jepang"
        ],
        statusAlbum: 'Baru Tayang',
        episode: 'Diperbarui sampai 1',
        episodeList: [
            {
                id: 1,
                banner: './src/img/Mieruko-chan ep1.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNDB0NWdFMm8yc1ZHK09DMjRSZnNaTC9JWDdFZlQ2QU1VR3FSZ0hWdzZJRGtJT2M3NGd6enI4MVBNRFUybFVqOGM='
            }
        ]
    },
    {
        id: 10,
        title: 'My Senpai is Annoying',
        titleImg: './src/img/aset/senpai title.webp',
        poster: './src/img/aset/senpai poster.webp',
        background: './src/img/aset/senpai background.webp',
        banner: './src/img/aset/senpai banner.webp',
        description: 'Sebuah kisah fana, indah, dan menentukan dari gadis-gadis yang berjuang dengan kekuatan musik di dunia di mana musik telah dilupakan.',
        urlAlbum: '../index4.html', 
        rate: '9.7',
        year: '2021',
        tag: [
            "Original",
            "Fantasi",
            "Musik",
            "Remaja Laki-laki",
            "Bahasa Jepang"
        ],
        statusAlbum: 'Completed',
        episode: '12 Episode',
        episodeList: [
            {
                id: 1,
                banner: './src/img/Mieruko-chan ep1.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNEpWOWVQRWdmdmdUb2dsTllhcm9pY1ZDd3RCSW9vVGRBNXFyVjYrVS9pT011cXc4SEpNRVJUNDRaa0srdTFxd0RPSFFoT01Hd1NPNkpXeEx1djFDNFlRPT0='
            },
            {
                id: 2,
                banner: './src/img/Mieruko-chan ep2.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNEpWOWVQRWdmdmdUb2dsTllhcm9pY1ZDd3RCSW9vVGRBNXFyVjYrVS9pT05CVERZTk1LMzZkYTg0RG1RL01aRFd5R29STjlyNHV5eGZRellHWWtBbUtnPT0='
            },
            {
                id: 3,
                banner: './src/img/Mieruko-chan ep3.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNEpWOWVQRWdmdmdUb2dsTllhcm9pY1ZDd3RCSW9vVGRBNXFyVjYrVS9pT08xZlNLcXhodGVxZGRMRHRKWkU2RTQ3NzNOb1lJMTQvMUtScUwvOEd6NUlnPT0='
            },
            {
                id: 4,
                banner: './src/img/Mieruko-chan ep4.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNEpWOWVQRWdmdmdUb2dsTllhcm9pY1ZDd3RCSW9vVGRBNXFyVjYrVS9pT09ORGF2WnlaS043VzYxbEpHa3pHUGZmcUlFNEIrQjQrbkdFeTQ0S1MydkNnPT0='
            },
            {
                id: 5,
                banner: './src/img/Mieruko-chan ep5.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNDhjUEM4Zld4OEY3amZKWDM0aEZxdVJiKzR3REYvMGI2L0xnRWFzQU5hd2V0eFdaeThGYlNDalg2NEkra1VBcU8xNU9wWUxOaGs0aVJQa1ZyWlpROC93PT0='
            },
            {
                id: 6,
                banner: './src/img/Mieruko-chan ep6.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNDhjUEM4Zld4OEY3amZKWDM0aEZxdVJiKzR3REYvMGI2L0xnRWFzQU5hd2RiSEgzMFNPQmh3L24zSERsQS9rYy9WVUNQSVF3MFlESTlyMVZTOWhCWWF3PT0='
            },
            {
                id: 7,
                banner: './src/img/Mieruko-chan ep7.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNDhjUEM4Zld4OEY3amZKWDM0aEZxdVJiKzR3REYvMGI2L0xnRWFzQU5hd2Q2UytlaCt3a0UwVlc1WHk4bzhsVXJ5OVk0dk11QXJ2aWdiWWtiSDRidmZnPT0='
            },
            {
                id: 8,
                banner: './src/img/Mieruko-chan ep8.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNDhjUEM4Zld4OEY3amZKWDM0aEZxdVJiKzR3REYvMGI2L0xnRWFzQU5hd2NQQ3laeExMTit0UFYzSlFQU2hSaGo2dDFVOE5IQ01pVitKMXBJQ2JCa1RnPT0='
            },
            {
                id: 9,
                banner: './src/img/Mieruko-chan ep9.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNDZaMzhrWC96dndZVzV1b21udHNYWDM5amFucnMrL0xXVFAzaUFPdmpacjdhSFY3Sk0vYXoxdm1udmhwQWZPcFBGMUR1M3dLUGdESmx3VTFrRHpwb3VRPT0='
            },
            {
                id: 10,
                banner: './src/img/Mieruko-chan ep10.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNDZaMzhrWC96dndZVzV1b21udHNYWDM5amFucnMrL0xXVFAzaUFPdmpacjZnSStpQ3JaUElyb0JQcFVjc3FsMHF3VzZYdGRITEVlNlNHaStvS3d1MVVBPT0='
            },
            {
                id: 11,
                banner: './src/img/Mieruko-chan ep10.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNDZaMzhrWC96dndZVzV1b21udHNYWDM5amFucnMrL0xXVFAzaUFPdmpacjVjK3BjOThnTTY1VVZPQnJBQlYvamo3SWVLMWppa2J5YjZjOHY4bEk4WmJnPT0='
            },
            {
                id: 12,
                banner: './src/img/Mieruko-chan ep10.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNDZaMzhrWC96dndZVzV1b21udHNYWDM5amFucnMrL0xXVFAzaUFPdmpacjVWeU93ZjhNZVY2MG5Ub1JLOVZMUTlPOC9Fd0V3eXdtNVRVU2dXUnZtWjVRPT0='
            }
        ]
    },
    {
        id: 11,
        title: 'Attack on Titan Final Season',
        titleImg: './src/img/aset/AOT final title.webp',
        poster: './src/img/aset/AOT final poster.png',
        background: './src/img/aset/AOT final background.webp',
        banner: './src/img/aset/AOT final banner.webp',
        description: 'Sebuah kisah fana, indah, dan menentukan dari gadis-gadis yang berjuang dengan kekuatan musik di dunia di mana musik telah dilupakan.',
        urlAlbum: '../index4.html', 
        rate: '9.7',
        year: '2022',
        tag: [
            "Original",
            "Fantasi",
            "Musik",
            "Remaja Laki-laki",
            "Bahasa Jepang"
        ],
        statusAlbum: 'Baru Tayang',
        episode: 'Diperbarui sampai 1',
        episodeList: [
            {
                id: 1,
                banner: './src/img/Mieruko-chan ep1.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNENLVjg4Y0o0dDAxbEUxODlncDNVVHRrdnJkeVd0QTUzOGVtN2NPUkFrYU84Um1uMk8yYzdlTDQwblJoSVFvLzY='
            }
        ]
    },
    {
        id: 12,
        title: '-86-Eighty Six-',
        titleImg: './src/img/aset/86  title.png',
        poster: './src/img/aset/86 poster.jpg',
        background: './src/img/aset/86 banner.webp',
        banner: './src/img/aset/86 banner.webp',
        description: 'Sebuah kisah fana, indah, dan menentukan dari gadis-gadis yang berjuang dengan kekuatan musik di dunia di mana musik telah dilupakan.',
        urlAlbum: '../index4.html', 
        rate: '9.7',
        year: '2021',
        tag: [
            "Original",
            "Fantasi",
            "Musik",
            "Remaja Laki-laki",
            "Bahasa Jepang"
        ],
        statusAlbum: 'Baru Tayang',
        episode: '21 Episode',
        episodeList: [
            {
                id: 1,
                banner: './src/img/Mieruko-chan ep1.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNGJGSE9LSzdNa1JhWHlaTzJlUklCUlNyMVdiUndmbzBCSlNQdkwrdUo1VzQ9'
            },
            {
                id: 2,
                banner: './src/img/Mieruko-chan ep2.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNGJGSE9LSzdNa1JhWHlaTzJlUklCUlNYa21DZWQ1ajUzRnpJdEYwRHlOanM9'
            },
            {
                id: 3,
                banner: './src/img/Mieruko-chan ep3.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNGJGSE9LSzdNa1JhWHlaTzJlUklCUmV6OHRGUVRDU1JMblVPVTd0ZUprazg9'
            },
            {
                id: 4,
                banner: './src/img/Mieruko-chan ep4.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNDRZWjRHNzh3TFFOemtjdUZQTkVKZnhFeE1WTTlWd3lxbWh1d2ZGT1FvT3c9'
            },
            {
                id: 5,
                banner: './src/img/Mieruko-chan ep5.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNDRZWjRHNzh3TFFOemtjdUZQTkVKZjF0UHhoclpYZVNOWmtVdjNUSEpCT1k9'
            },
            {
                id: 6,
                banner: './src/img/Mieruko-chan ep6.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNDRZWjRHNzh3TFFOemtjdUZQTkVKZjZ5VytPZGdDWGsrZnV4UXNkQ2h1S0k9'
            },
            {
                id: 7,
                banner: './src/img/Mieruko-chan ep7.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNDRZWjRHNzh3TFFOemtjdUZQTkVKZnkyMnRlWTZ2UHRwbnhkWkkyN3FhL0U9'
            },
            {
                id: 8,
                banner: './src/img/Mieruko-chan ep8.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNDRZWjRHNzh3TFFOemtjdUZQTkVKZjUrS2RuaUp2SjUxTStPTS9XV1hrcW89'
            },
            {
                id: 9,
                banner: './src/img/Mieruko-chan ep9.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNDB5d3gxVG5EQjJGQkxuOUcvNU96M1V1WTF1VU5XV0RGY2VjWlljVUhVTUE9'
            },
            {
                id: 10,
                banner: './src/img/Mieruko-chan ep10.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNDB5d3gxVG5EQjJGQkxuOUcvNU96M1RhUXorS1doanRKNHNVeTdZNGhObFE9'
            },
            {
                id: 11,
                banner: './src/img/Mieruko-chan ep10.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNDB5d3gxVG5EQjJGQkxuOUcvNU96M1JlSllvcmk5cFI2OGUrQW56ZFZNejQ9'
            },
            {
                id: 12,
                banner: './src/img/Mieruko-chan ep10.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNE5XZ1g0dXhhVnNud1h3SmF6cThheVlkYlhkQ2xyUDVLQ0FlcjRsRFhUb289'
            },
            {
                id: 13,
                banner: './src/img/Mieruko-chan ep10.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNE5XZ1g0dXhhVnNud1h3SmF6cThheVlVUXRtdTU2Vk1HcFJGQllPcmU5N0k9'
            },
            {
                id: 14,
                banner: './src/img/Mieruko-chan ep10.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNE5XZ1g0dXhhVnNud1h3SmF6cThheWVTZEdvUGQ1YTZFbE96OHIvNG5PY2c9'
            },
            {
                id: 15,
                banner: './src/img/Mieruko-chan ep10.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNE5XZ1g0dXhhVnNud1h3SmF6cThheVZTVkMxMVo3UkhLeDQ1TXFhajR2ZG89'
            },
            {
                id: 16,
                banner: './src/img/Mieruko-chan ep10.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNE5XZ1g0dXhhVnNud1h3SmF6cThheVE4UmdEa20rUWMyaXJDR2NyWTI2bTQ9'
            },
            {
                id: 17,
                banner: './src/img/Mieruko-chan ep10.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNEcwVXJKRVdMN1hVVCtqa1E5K1NUN1RJRllqWUx1bVZucm5GZytDdXVYS2s9'
            },
            {
                id: 17.5,
                banner: './src/img/Mieruko-chan ep10.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNEcwVXJKRVdMN1hVVCtqa1E5K1NUN2FDU3FBbUxFNTFhb3FYU3JPejlZV3M9'
            },
            {
                id: 18,
                banner: './src/img/Mieruko-chan ep10.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNEcwVXJKRVdMN1hVVCtqa1E5K1NUN1ZNaWN1SHRBblRSTlZaNlQ5TEZOUEU9'
            },
            {
                id: 18.5,
                banner: './src/img/Mieruko-chan ep10.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNEcwVXJKRVdMN1hVVCtqa1E5K1NUN1VLdHh2ZkFXTmZuOVBPQTBoTktpcFk9'
            },
            {
                id: 19,
                banner: './src/img/Mieruko-chan ep10.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNFgzZk5Yb2hSNmxBa2xTMTZKRDV6M3lHUU5iREVNYmZrQkx4Zi9kd28yNk09'
            },
            {
                id: 20,
                banner: './src/img/Mieruko-chan ep10.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNFgzZk5Yb2hSNmxBa2xTMTZKRDV6Mzl4QXBkZVR0REp0ZEs2ZlNNdUZvTWM9'
            },
            {
                id: 21,
                banner: './src/img/Mieruko-chan ep10.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNFgzZk5Yb2hSNmxBa2xTMTZKRDV6MzM1Wk56STdiM3hiaFlVMmYvLzEzVjg9'
            }
        ]
    },
];    

export default albums;