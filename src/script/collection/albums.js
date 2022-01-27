let albums = [
    {
        id: 1,
        title: 'Takt op. Destiny',
        titleImg: 'https://i.ibb.co/rFvYF17/takt-title.webp',
        poster: 'https://i.ibb.co/MD8sDrL/takt-op-Destiny-Visual.jpg',
        frontPoster: 'https://i.ibb.co/MD8sDrL/takt-op-Destiny-Visual.jpg',
        background: 'https://i.ibb.co/C6w9gQw/takt-background.webp',
        banner: 'https://i.ibb.co/m5WZftN/takt-banner.webp',
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
        statusAlbum: 'Completed',
        featuredAlbum: 'true',
        episode: '12 Episode',
        episodeList: [
            {
                id: 1,
                banner: 'https://pic6.iqiyipic.com/image/20211003/9f/06/v_162605279_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNE1ObnpsYlM0L3dCbnFsU1htMHVqaUozRnJ3Y29KYWRIRjlYR0xWc3BXOVdJRmk0bEE3dXVLcFVVc29YS1B2NU0='
            },
            {
                id: 2,
                banner: 'https://pic3.iqiyipic.com/image/20211011/04/5c/v_162747655_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNE1ObnpsYlM0L3dCbnFsU1htMHVqaUtCQVVDS3VVSUVGSkppWXhMVStqTHJZRjdvaTRwQ3hQOEk4OVZkZnN6QUw='
            },
            {
                id: 3,
                banner: 'https://pic7.iqiyipic.com/image/20211018/07/39/v_162948964_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNE1ObnpsYlM0L3dCbnFsU1htMHVqaUx3VHhDVTFRQndjeG0rNXRIOG9ueXBkYnBXdUFiOFRSeVdFZUg2TWpPTEI='
            },
            {
                id: 4,
                banner: 'https://pic8.iqiyipic.com/image/20211025/4d/d8/v_163118031_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNE1ObnpsYlM0L3dCbnFsU1htMHVqaU1sbHJuRUdiUTFQMDczL3NFL0dCZTYrSm93TjIybVcwaUt2eVVqTVlGSjE='
            },
            {
                id: 5,
                banner: 'https://pic9.iqiyipic.com/image/20211101/cf/09/v_163262997_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNFBQU2RrbEEwd0FzV3E5Wmg0Zm9RdkIxdVRPUE14ZmxrOUJyeVd3eGNQcmoyanhQUTVacHNIY3BRNytWeWp4YVc='
            },
            {
                id: 6,
                banner: 'https://pic4.iqiyipic.com/image/20211108/5c/1c/v_163429021_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNFBQU2RrbEEwd0FzV3E5Wmg0Zm9RdkdLQ0pwVHU2VTI3R2VycDB4S0svT2txZTZrcXhickNmd0lVL2s2aGI4eTE='
            },
            {
                id: 7,
                banner: 'https://pic7.iqiyipic.com/image/20211115/39/0d/v_163576313_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNFBQU2RrbEEwd0FzV3E5Wmg0Zm9Rdk5uWmNDQnNwQmZzZEdjSzhPRDVwSWo1QThJTGFibUpRZUFMU3FLNFo2cDc='
            },
            {
                id: 8,
                banner: 'https://pic0.iqiyipic.com/image/20211119/67/9a/v_163841375_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNFBQU2RrbEEwd0FzV3E5Wmg0Zm9RdkpGcEdlMDNJclRtdFk0MHpWNkhRWkNSNkVZQ2swSWNpNitKNklDd1NyZEM='
            },
            {
                id: 9,
                banner: 'https://pic3.iqiyipic.com/image/20211126/15/0c/v_164233507_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNFBQU2RrbEEwd0FzV3E5Wmg0Zm9RdktuVk9Fb29oZkZFWmV3NU5KTUQweUYycGp2UWZENEVBL3UzK2xsbUE5VXg='
            },
            {
                id: 10,
                banner: 'https://pic7.iqiyipic.com/image/20211206/f2/7c/v_164608318_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNG1KY1d1ZENZbWF5dEdVc0Q3UFBUMDNPcUxic2RsemxjTDBrQ05ZZ0xiSG53WFJXd2JMSnYxUFlRbTcwS3czMjQ='
            },
            {
                id: 11,
                banner: 'https://pic9.iqiyipic.com/image/20211214/f6/71/v_164836269_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNG1KY1d1ZENZbWF5dEdVc0Q3UFBUMDFINmN6b2JxV3V3cDhGZy9IbXkyT2M5djM2UnA4WVk1K3gwYW5zTmJXemU='
            },
            {
                id: 12,
                banner: 'https://pic4.iqiyipic.com/image/20211221/2e/4a/v_164977358_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNG1KY1d1ZENZbWF5dEdVc0Q3UFBUMDRrVDUyMGN1MUdmYmhMSVNDVXlOdEZVMSs1SFJoUUZoajAxSjZoWVFUVTg='
            }
        ]
    },
    {
        id: 2,
        title: 'Demon Slayer: Entertainment District Arc',
        titleImg: 'https://i.ibb.co/gSRstPY/demons-title.png',
        poster: 'https://i.ibb.co/yk1VD20/demons-poster.jpg',
        frontPoster: 'https://i.ibb.co/yk1VD20/demons-poster.jpg',
        background: 'https://i.ibb.co/3mxGLby/demons-background.png',
        banner: 'https://i.ibb.co/Q9Nnwzx/Demon-Slayer-Entertainment-District-Arc.jpg',
        description: 'Mengisahkan Tanjiro Kamado (diisi suara oleh Natsuki Hanae), Zenitsu Agatsuma (diisi suara oleh Hiro Shimono), dan Inosuke Hashibira (diisi suara oleh Yoshitsugu Matsuoka), dibantu oleh Hashira Suara, Tengen Uzui (diisi suara oleh Katsuyuki Konishi), melakukan perjalanan ke distrik lampu merah Yoshiwara untuk memburu iblis yang telah meneror kota.',
        urlAlbum: '../index2.html', 
        rate: '9.7',
        year: '2021',
        tag: [
            "Manga",
            "Aksi",
            "Petualangan",
            "Remaja Laki-laki",
            "Bahasa Jepang"
        ],
        statusAlbum: 'Baru Tayang',
        featuredAlbum: 'true',
        episode: 'Diperbarui sampai 15',
        episodeList: [
            {
                id: 1,
                banner: 'https://pic0.iqiyipic.com/image/20211009/c0/cf/v_162711578_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNGtPVXdKcEIrRjZvVjVITTljOXNjMkJleXduUCtLWWdManNISHRzazNJNEk9'
            },
            {
                id: 2,
                banner: 'https://pic8.iqiyipic.com/image/20211017/17/19/v_162930834_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNGtPVXdKcEIrRjZvVjVITTljOXNjMk1lQW9JdEpyWlo4bm01RmJFRWFORWM9'
            },
            {
                id: 3,
                banner: 'https://pic8.iqiyipic.com/image/20211024/e4/3a/v_163093675_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNGtPVXdKcEIrRjZvVjVITTljOXNjMkNoNXFvQk1URGRURWcwbzhCTTVndGc9'
            },
            {
                id: 4,
                banner: 'https://pic1.iqiyipic.com/image/20211106/82/2c/v_163396405_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNFBXbHp0Zk5QSncyeDRWeEJTWW1hQkVUV29vT21OamhZZnI0WEFxa2RGRjA9'
            },
            {
                id: 5,
                banner: 'https://pic8.iqiyipic.com/image/20211113/fb/a3/v_163554074_m_601_en_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNFBXbHp0Zk5QSncyeDRWeEJTWW1hQkZNN2Y1aG5JZkNGelhONGNIb0t3OTA9'
            },
            {
                id: 6,
                banner: 'https://pic4.iqiyipic.com/image/20211121/7e/2f/v_163929976_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNFBXbHp0Zk5QSncyeDRWeEJTWW1hQktxUXZHYlplazNGcmhKekpGQ0NvKzg9'
            },
            {
                id: 7,
                banner: 'https://pic3.iqiyipic.com/image/20211127/99/bc/v_164290324_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNFBXbHp0Zk5QSncyeDRWeEJTWW1hQk4zYkF0OEhtcEFRUi90WXA1WmhzQk09'
            },
            {
                id: 8,
                banner: 'https://pic5.iqiyipic.com/image/20211207/ce/d7/v_164583385_m_601_zh-CN_m2_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNFVHb0FLSUZxRjFUMXRXT2xKeGg2NWdEK3g3QmZMYnVsM1ArMnM4VjBYU0E9'
            },
            {
                id: 9,
                banner: 'https://pic8.iqiyipic.com/image/20211212/0d/bd/v_164778289_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNFVHb0FLSUZxRjFUMXRXT2xKeGg2NXAvei9KTEhEckxwNXE4VlpPQ0g1T289'
            },
            {
                id: 10,
                banner: 'https://pic0.iqiyipic.com/image/20211219/3a/f9/v_164934153_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNFVHb0FLSUZxRjFUMXRXT2xKeGg2NXFadzRZNVYyd1FJQ05YTnl2UmkxVDg9'
            },
            {
                id: 11,
                banner: 'https://pic9.iqiyipic.com/image/20211226/bb/e0/v_165059672_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNFVHb0FLSUZxRjFUMXRXT2xKeGg2NWx2dzZUckV2bk0ybUtlL1VrYTkrYmM9'
            },
            {
                id: 12,
                banner: 'https://pic5.iqiyipic.com/image/20220102/c7/9f/v_165183599_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNFBsS3I3ODNrZlRZWFVFVklKaTRmWW8vOTFCWnpHMWJWTzRlZHlZM3dJa1k9'
            },
            {
                id: 13,
                banner: 'https://pic7.iqiyipic.com/image/20220108/69/93/v_165296659_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNFBsS3I3ODNrZlRZWFVFVklKaTRmWXFhSlhpK25JWG1zbEtCY0lMRStFcG89'
            },
            {
                id: 14,
                banner: 'https://pic1.iqiyipic.com/image/20220115/ae/4a/v_165426346_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNFBsS3I3ODNrZlRZWFVFVklKaTRmWW9JSUZkQWRaQk42OVErbHByMGFlRTA9'
            },
            {
                id: 15,
                banner: 'https://pic1.iqiyipic.com/image/20220123/66/c0/v_165579336_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNFBsS3I3ODNrZlRZWFVFVklKaTRmWXZCM0VPeWtpV0VkbldSZ3RkWmZzUG89'
            },
        ]
    },
    {
        id: 11,
        title: 'Attack on Titan Final Season',
        titleImg: 'https://i.ibb.co/C6xwzCN/AOT-final-title.webp',
        poster: 'https://i.ibb.co/xMpgKbQ/AOT-final-poster.png',
        frontPoster: 'https://i.ibb.co/xMpgKbQ/AOT-final-poster.png',
        background: 'https://i.ibb.co/V9LGSz2/AOT-final-background.webp',
        banner: 'https://i.ibb.co/Kbz3nYy/AOT-final-banner.webp',
        description: 'Musim keempat ini akan menjadi musim terakhir dari serial anime Shingeki no Kyojin. Setelah berhasil sampai ke laut. Eren pun memiliki tujuan lain yang lebih besar. Untuk mengakhiri penderitaan bangsa Eldia. Eren pun membulatkan tekadnya untuk melakukan sesuatu terhadap bangsa lain yang membenci bangsa Eldia.',
        urlAlbum: '../index4.html', 
        rate: '9.7',
        year: '2022',
        tag: [
            "Manga",
            "Tragedi",
            "Militer",
            "Remaja Laki-laki",
            "Bahasa Jepang"
        ],
        statusAlbum: 'Baru Tayang',
        featuredAlbum: 'true',
        episode: 'Diperbarui sampai 19',
        episodeList: [
            {
                id: 1,
                banner: 'https://pic2.iqiyipic.com/image/20201127/63/21/v_155234064_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNHZSc2RkZ0tvTExyaUdDdk15ajhScW9RakEyb2JVeW1Ndzd0MzFET0tDQXc9'
            },
            {
                id: 2,
                banner: 'https://pic6.iqiyipic.com/image/20201214/97/b1/v_155642320_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNHZSc2RkZ0tvTExyaUdDdk15ajhScXRmMm0vTHp4SGx2MnIvSkhGU0piS3M9'
            },
            {
                id: 3,
                banner: 'https://pic8.iqiyipic.com/image/20201221/20/99/v_155836576_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNHZSc2RkZ0tvTExyaUdDdk15ajhScW5OWlhQL2I3NUlkOFBEaXFIQmNpd2s9'
            },
            {
                id: 4,
                banner: 'https://pic5.iqiyipic.com/image/20201228/77/73/v_156038620_m_601_zh-CN_284_160.jpg',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNEhubUhjZjVHZWVyelNXVmhPWUpjRjJVUUFjQmlBQURLSk1KWEZsNWtFNjk4ZnFVVlh5ZGhuRXhsMlRBajhocWU='
            },
            {
                id: 5,
                banner: 'https://pic8.iqiyipic.com/image/20210111/e9/0a/v_156443234_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNFRQdnk0OW5BZStLMWx1V1pMcm9DNnhVakJHYVhQRUd5QlRxMjlhREtoaFU9'
            },
            {
                id: 6,
                banner: 'https://pic3.iqiyipic.com/image/20210118/f9/c3/v_156633854_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNFRQdnk0OW5BZStLMWx1V1pMcm9DNjd0bXBENEl6dWt1QVFDQzdXT2xBb2NwMkZPdUlpcURXZ2hmWFlnMkxKMjg='
            },
            {
                id: 7,
                banner: 'https://pic8.iqiyipic.com/image/20210125/97/e5/v_156822864_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNFRQdnk0OW5BZStLMWx1V1pMcm9DNjdCQzQzcm02dmxESGVCc3ZHei9wM1E9'
            },
            {
                id: 8,
                banner: 'https://pic0.iqiyipic.com/image/20210201/f9/1a/v_157012783_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNFRQdnk0OW5BZStLMWx1V1pMcm9DNnpXd1JIanJLdFREY21ORVZ5MlNDU0E9'
            },
            {
                id: 9,
                banner: 'https://pic3.iqiyipic.com/image/20210208/8d/4c/v_157204716_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNFdQZ00zNDQ0YTlQSmhMZ0FaTEd0WTJiVy9BRUtLT0NiQXNEZXhGa09TUHc9'
            },
            {
                id: 10,
                banner: 'https://pic8.iqiyipic.com/image/20210215/c5/20/v_157327359_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNFdQZ00zNDQ0YTlQSmhMZ0FaTEd0WTlIbFpNMDcwZzEyTEh0V0E3bWE3Y1U9'
            },
            {
                id: 11,
                banner: 'https://pic1.iqiyipic.com/image/20210222/c1/4c/v_157446510_m_601_zh-CN_m1_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNFdQZ00zNDQ0YTlQSmhMZ0FaTEd0WTQ2WERwa1VPYXlXLy9yT2plSytaRGc9'
            },
            {
                id: 12,
                banner: 'https://pic3.iqiyipic.com/image/20210228/f7/42/v_157621852_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNFdQZ00zNDQ0YTlQSmhMZ0FaTEd0WTk2S1BQVWhwUjdkbDV4bWlEcVkycG89'
            },
            {
                id: 13,
                banner: 'https://pic2.iqiyipic.com/image/20210308/ee/a4/v_157808100_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNEF1KzlRbWdhUFVub3FzVXFQb2FLb2k2ZGhHV2M0NFNBTXBCaXprOVNPL2s9'
            }, {
                id: 14,
                banner: 'https://pic3.iqiyipic.com/image/20210321/c0/19/v_157976659_m_601_zh-CN_m1_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNEF1KzlRbWdhUFVub3FzVXFQb2FLb2hOeFJCM0QycWxQd0V6UXNiWklqdDA9'
            },
            {
                id: 15,
                banner: 'https://pic9.iqiyipic.com/image/20210322/6c/8b/v_158152764_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNEF1KzlRbWdhUFVub3FzVXFQb2FLb3FlSVJYckhiL215dCs4QTNlaEprbE09'
            },
            {
                id: 16,
                banner: 'https://pic2.iqiyipic.com/image/20210329/97/ca/v_158326935_m_601_zh-CN_m1_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNEF1KzlRbWdhUFVub3FzVXFQb2FLb3ZKM0VveTZPR0k5L1VOVlNCRVAxdkk9'
            },
            {
                id: 17,
                banner: 'https://pic6.iqiyipic.com/image/20220110/de/c9/v_165285698_m_601_zh-CN_m1_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNENLVjg4Y0o0dDAxbEUxODlncDNVVG9qeHFsNnk5QXl2dnlKQ05ya2NQTmM9'
            },
            {
                id: 18,
                banner: 'https://pic5.iqiyipic.com/image/20220117/a8/d0/v_165452617_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNENLVjg4Y0o0dDAxbEUxODlncDNVVHFqSEZRbkcvOXkrcU52SWpxU3MrL0U9'
            },
            {
                id: 19,
                banner: 'https://pic5.iqiyipic.com/image/20220124/ba/b0/v_165589140_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNENLVjg4Y0o0dDAxbEUxODlncDNVVHZrNFd1M0xHZ0haMTRYRGFJQjB5QkU9'
            },
        ]
    },
    {
        id: 9,
        title: "Arifureta: From Commonplace to World's Strongest S2",
        titleImg: 'https://i.ibb.co/mSkx7d6/arifureta2-title.webp',
        poster: 'https://i.ibb.co/bQfsxJS/arifureta2-poster.png',
        frontPoster: 'https://i.ibb.co/VtsLmXN/arifureta2-front-poster.jpg',
        background: 'https://i.ibb.co/9232pR5/arifureta2-background.webp',
        banner: 'https://i.ibb.co/t3P1BTm/arifureta2-banner.webp',
        description: 'Setelah tersingkir dari kelompok teman kelasnya, rombongan yang dipimpin karakter utama Hajime menuju Labirin Besar untuk mendapatkan sihir baru para dewa. Party yang menerobos berbagai cobaan, terus tumbuh kuat untuk kembali ke dunia asal. Namun, di balik layar, para iblis juga menunjukkan pergerakannya. Sebuah bayangan menyelinap di ibukota kerajaan. "Bunuh semua musuh, meskipun itu dewa". Siapa musuh sebenarnya yang berdiri di depan mereka?',
        urlAlbum: '../index4.html', 
        rate: '9.7',
        year: '2022',
        tag: [
            "Aksi",
            "Petualangan",
            "Fantasi",
            "Remaja Laki-laki",
            "Bahasa Jepang"
        ],
        statusAlbum: 'Baru Tayang',
        featuredAlbum: 'true',
        episode: 'Diperbarui sampai 2',
        episodeList: [
            {
                id: 1,
                banner: 'https://pic4.iqiyipic.com/image/20220112/6f/9e/v_165366957_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNDB0NWdFMm8yc1ZHK09DMjRSZnNaTC9JWDdFZlQ2QU1VR3FSZ0hWdzZJRGtJT2M3NGd6enI4MVBNRFUybFVqOGM='
            },
            {
                id: 2,
                banner: 'https://pic4.iqiyipic.com/image/20220118/89/eb/v_165485366_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNDB0NWdFMm8yc1ZHK09DMjRSZnNaTDlIQ1ZpVWd6UEpJbC9pSldsTUZUd1VVVE14ejgraDBZcFBqeXYwSDRkS3M='
            }
        ]
    },  
    {
        id: 4,
        title: "The Genius Prince's Guide to Raising a Nation Out of Debt",
        titleImg: '',
        poster: 'https://pic2.iqiyipic.com/image/20211231/69/7b/a_100489613_m_601_en_260_360.webp',
        frontPoster: 'https://pic2.iqiyipic.com/image/20211231/69/7b/a_100489613_m_601_en_260_360.webp',
        background: 'http://pic2.iqiyipic.com/image/20211231/69/7b/a_100489613_m_601_en_1013_638.webp',
        banner: 'http://pic2.iqiyipic.com/image/20211231/69/7b/a_100489613_m_601_en_1013_638.webp',
        description: 'Pangeran Wein hanya ingin hidup tenang. Karena itu ia akan mengkhianati rakyatnya dengan menjual kerajaan kecilnya yang menyedihkan. Sayangnya, rintangan terbesar yang harus dihadapi justru adalah dirinya sendiri yang terlalu jenius. Ide cemerlang untuk melelang kerajaannya agar bisa pensiun dan bermalas-malasan justru membuat kesuksesan yang tak terduga dan mendapat sambutan dari rakyat. Popularitasnya melejit dan impiannya untuk hidup tenang semakin menjauh. ',
        urlAlbum: '../index4.html', 
        rate: '9.7',
        year: '2022',
        tag: [
            "Novel",
            "Fantasi",
            "Militer",
            "Remaja Laki-laki",
            "Bahasa Jepang"
        ],
        statusAlbum: 'Baru Tayang',
        featuredAlbum: 'false',
        episode: 'Diperbarui sampai 3',
        episodeList: [
            {
                id: 1,
                banner: 'https://pic1.iqiyipic.com/image/20220111/49/4b/v_165348800_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNDcxNEFnNUsxdndrcVRTQWlNT00vOGpEZys5NmE4RGlBZ21HcjlaTU9UaHJPd2NVdWYyQUxCdUUzeVVleGJYMndyL0o3OE10Rzl1QndOV2NvekZIeW9BPT0='
            },
            {
                id: 2,
                banner: 'https://pic5.iqiyipic.com/image/20220117/07/e7/v_165465273_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNDcxNEFnNUsxdndrcVRTQWlNT00vOGpEZys5NmE4RGlBZ21HcjlaTU9UaHFVQ1A5bWZveXdLZEZCRGg0NWF3TzM2bkJxOHUvSlVybDNxbGJUbDd6RFZRPT0='
            },
            {
                id: 3,
                banner: 'https://pic4.iqiyipic.com/image/20220125/bb/4f/v_165593982_m_601_zh-CN_m1_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNDcxNEFnNUsxdndrcVRTQWlNT00vOGpEZys5NmE4RGlBZ21HcjlaTU9UaHJWd0lmOUtFVVduV2pUUXNYaGpGTTlCZzRYeFBGQis3VnBobnV4RGtUdm9RPT0='
            },
        ]
    },
    {
        id: 4,
        title: "Sabikui Bisco",
        titleImg: '',
        poster: 'https://pic9.iqiyipic.com/image/20220107/79/7f/a_100489608_m_601_zh-CN_m1_260_360.webp',
        frontPoster: 'https://pic9.iqiyipic.com/image/20220107/79/7f/a_100489608_m_601_zh-CN_m1_260_360.webp',
        background: 'http://pic9.iqiyipic.com/image/20220107/79/7f/a_100489608_m_601_zh-CN_m1_1013_638.webp',
        banner: 'http://pic9.iqiyipic.com/image/20220107/79/7f/a_100489608_m_601_zh-CN_m1_1013_638.webp',
        description: 'Kisah ini menggambarkan Bisco Akaboshi dari suku "Mushroom Guardian" yang gesit dan kasar, melakukan perjalanan melalui "angin korosif" yang dapat merusak segalanya dan menjerumuskan umat manusia ke dalam ancaman kematian. Untuk menyelamatkan Master, ia memulai perjalanan untuk menemukan ramuan jamur "pemakan karat".',
        urlAlbum: '../index4.html', 
        rate: '9.7',
        year: '2022',
        tag: [
            "Novel",
            "Aksi",
            "Fantasi",
            "Supernatural",
            "Remaja Laki-laki",
            "Bahasa Jepang"
        ],
        statusAlbum: 'Baru Tayang',
        featuredAlbum: 'false',
        episode: 'Diperbarui sampai 3',
        episodeList: [
            {
                id: 1,
                banner: 'https://pic8.iqiyipic.com/image/20220110/98/e0/v_165322500_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNGJNY1BVVjVkSUswdXArL1ByVHJmcVlrdXNJNm5IdFJCM3dQQVpTMEJzaFR2bk1PRlVSZHRCK1JnN2tocS8xdUQ='
            },
            {
                id: 2,
                banner: 'https://pic8.iqiyipic.com/image/20220111/e4/c7/v_165348636_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNGJNY1BVVjVkSUswdXArL1ByVHJmcWFnMSsyQm1HUDB6QlFnMCswZFNtRkVXZThibHVEWE9DZTBVNlRaYnRTcy8='
            },
            {
                id: 3,
                banner: 'https://pic6.iqiyipic.com/image/20220124/5b/7e/v_165465281_m_601_zh-CN_m1_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNGJNY1BVVjVkSUswdXArL1ByVHJmcWVqbUFmU3pueDhTSk8wM1hXQ3ZZTDlBVUptTkJLQlR5cmdLMFhzUUc0REo='
            },
        ]
    },
    {
        id: 4,
        title: "She Professed Herself Pupil of The Wise Man",
        titleImg: '',
        poster: 'https://pic7.iqiyipic.com/image/20220111/8c/4a/a_100489616_m_601_en_260_360.webp',
        frontPoster: 'https://pic7.iqiyipic.com/image/20220111/8c/4a/a_100489616_m_601_en_260_360.webp',
        background: 'http://pic7.iqiyipic.com/image/20220111/8c/4a/a_100489616_m_601_en_1013_638.webp',
        banner: 'http://pic7.iqiyipic.com/image/20220111/8c/4a/a_100489616_m_601_en_1013_638.webp',
        description: 'Salah satu dari sembilan Great Sage dalam game, Sang Summoner Danblf, terbangun di dalam dunia game, bukan sebagai seorang sage berpengalaman, tetapi seorang gadis malang... Jika ini terus berlanjut, kesan orang bijak yang telah dibangunnya akan hancur! Berdasarkan pikiran ini, Sakimori Kagami pun memutuskan untuk menciptakan persona Mira, murid Sang Sage. Petualangan reinkarnasi gadis cantik di piramida ajaib dimulai!',
        urlAlbum: '../index4.html', 
        rate: '9.7',
        year: '2022',
        tag: [
            "Novel",
            "Fantasi",
            "Petualangan",
            "Bahasa Jepang"
        ],
        statusAlbum: 'Baru Tayang',
        featuredAlbum: 'false',
        episode: 'Diperbarui sampai 3',
        episodeList: [
            {
                id: 1,
                banner: 'https://pic3.iqiyipic.com/image/20220111/a0/e0/v_165346253_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNFpLOHhVMjVzZFpSejhDZnRCYVhGVDJ0VW1Wd0RRdnBQNVhpZVMyNGFkN1lnY3dmdWx3ZDBGZkVRSkloalN0Z2M='
            },
            {
                id: 2,
                banner: 'https://pic5.iqiyipic.com/image/20220118/a0/c9/v_165480003_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNFpLOHhVMjVzZFpSejhDZnRCYVhGVDJ0VW1Wd0RRdnBQNVhpZVMyNGFkN2FUcFFqTFdzZTRWTkd6VnZnVUN4RHc='
            },
            {
                id: 3,
                banner: 'https://pic3.iqiyipic.com/image/20220125/78/73/v_165626764_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNFpLOHhVMjVzZFpSejhDZnRCYVhGVDJ0VW1Wd0RRdnBQNVhpZVMyNGFkN2JkdmE1SG91NndBL3Z6amtGR2JZWm4='
            },
        ]
    },
    {
        id: 3,
        title: 'Atttack on Titan OAD',
        titleImg: 'https://i.ibb.co/k30c8pd/AOT-OAD-title.webp',
        poster: 'https://i.ibb.co/pWQpZBx/AOT-OAD-poster.png',
        frontPoster: 'https://i.ibb.co/pWQpZBx/AOT-OAD-poster.png',
        background: 'https://i.ibb.co/7t6H4Kx/AOT-OAD-background.webp',
        banner: 'https://i.ibb.co/FwxptTv/AOT-OAD-banner.webp',
        description: 'Orang-orang hidup di dunia yang dikelilingi oleh tiga lapisan tembok besar yang melindungi mereka dari raksasa-raksasa pemakan manusia di bagian luar. Cerita ini berkisar seputar protagonis Eren Yeager dan teman-temannya, Mikasa Ackerman and Armin Arlert. Koleksi ini baru mencakup kisah "Lost Girls" (kisah yang tidak diketahui tentang Mikasa Ackerman dan Yani Reinhardt).',
        urlAlbum: '../index3.html', 
        rate: '9.7',
        year: '2021',
        tag: [
            "Manga",
            "Tragedi",
            "Militer",
            "Remaja Laki-laki",
            "Bahasa Jepang"
        ],
        statusAlbum: 'Completed',
        featuredAlbum: 'false',
        episode: 'Diperbarui sampai 3',
        episodeList: [
            {
                id: 1,
                banner: 'https://pic3.iqiyipic.com/image/20211107/a0/80/v_163401626_m_601_zh-CN_m1_284_160.jpg',
                link: 'https://animeku.org/play2.php?id=MnY1aTREN0JscHB1OUNKZWRjaGx2SExFQU9NUERXVm9GNFYrdlIvMEJCeTdOYWw3V2hTYjIxR3Rma01FU2NuL3VJMURyWm04Wm14aCs5OVhlcHIwdGNKZFJZTG1GUXJwTlJ6NXdDWkwyUjQ9'
            },
            {
                id: 2,
                banner: 'https://pic1.iqiyipic.com/image/20211106/8e/f2/v_163401637_m_601_zh-CN_284_160.jpg',
                link: 'https://animeku.org/play2.php?id=MnY1aTREN0JscHB1OUNKZWRjaGx2SExFQU9NUERXVm9GNFYrdlIvMEJCeTdOYWw3V2hTYjIxR3Rma01FU2NuL3VJMURyWm04Wm14aCs5OVhlcHIwdGZzbmpkQzlYRURob2JmYUNrbFE4WUE9'
            },
            {
                id: 3,
                banner: 'https://pic9.iqiyipic.com/image/20211126/73/8a/v_164220897_m_601_zh-CN_284_160.jpg',
                link: 'https://animeku.org/play2.php?id=MnY1aTREN0JscHB1OUNKZWRjaGx2SExFQU9NUERXVm9GNFYrdlIvMEJCeTdOYWw3V2hTYjIxR3Rma01FU2NuL3VJMURyWm04Wm14aCs5OVhlcHIwdGVmQlRBNS9JbmcwRlFaeEFkTld4TzQ9'
            },
        ]
    },
    {
        id: 4,
        title: 'Mushoku Tensei: Jobless Reincarnation',
        titleImg: 'https://i.ibb.co/xCdfSML/musoten-title.webp',
        poster: 'https://i.ibb.co/KLCLhX7/musoten-poster.png',
        frontPoster: 'https://i.ibb.co/KLCLhX7/musoten-poster.png',
        background: 'https://i.ibb.co/KrvR7cJ/musoten-background.webp',
        banner: 'https://i.ibb.co/sFgVBCj/musoten-banner.webp',
        description: 'Menceritakan kisah protagonis pria yang sebelumnya adalah seorang NEET, reinkarnasinya dan terlahir kembali di dunia lain sebagai anak laki-laki bernama Rudeus karena kecelakaan lalu lintas. Dihadapkan dengan kesempatan hidup baru yang diberikan kepadanya oleh dewa takdir, dia bertekad untuk menjalani kehidupan yang tidak akan dia sesali di dunia ini. Terlepas dari tekad ambisius ini, sifat Rudeus sebagai orang yang tidak berguna muncul lagi dan lagi. Hidup dengan sekelompok gadis cantik di dunia lain, kehidupan Rudeus mulai bergerak maju...',
        urlAlbum: '../index4.html', 
        rate: '9.7',
        year: '2021',
        tag: [
            "Novel",
            "Fantasi",
            "Aksi",
            "Magic",
            "Petualangan",
            "Remaja Laki-laki",
            "Bahasa Jepang"
        ],
        statusAlbum: 'Completed',
        featuredAlbum: 'true',
        episode: '23 Episode',
        episodeList: [
            {
                id: 1,
                banner: 'https://pic0.iqiyipic.com/image/20210108/d1/d7/v_156384982_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNDdjc1FMdUc3SmN1TUV0bkFOR0ZhTTVKQUowaU9aUkNKMjlQZVZzZzhLVFE9'
            },
            {
                id: 2,
                banner: 'https://pic7.iqiyipic.com/image/20210115/d9/d8/v_156580109_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNDdjc1FMdUc3SmN1TUV0bkFOR0ZhTTFDYW5ERGt1Y0xqU25takZKQ1YraEU9'
            },
            {
                id: 3,
                banner: 'https://pic0.iqiyipic.com/image/20210122/f4/84/v_156763439_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNDdjc1FMdUc3SmN1TUV0bkFOR0ZhTXpLbDJjaWpodmxiai9yQlB5NkN1T009'
            },
            {
                id: 4,
                banner: 'https://pic0.iqiyipic.com/image/20210131/ae/18/v_156961316_m_601_zh-CN_m2_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNDdjc1FMdUc3SmN1TUV0bkFOR0ZhTTh2aGFXRS81NXkvcmZ2d2JHVnAwWVk9'
            },
            {
                id: 5,
                banner: 'https://pic4.iqiyipic.com/image/20210205/3d/71/v_157146174_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNDFoK2M0czN6dGQyMTNWR2N1TWNWSG1NQ0NxMjEwVmxUcEIvRXg5U0ZDM2c9'
            },
            {
                id: 6,
                banner: 'https://pic5.iqiyipic.com/image/20210212/1a/7f/v_157292126_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNDFoK2M0czN6dGQyMTNWR2N1TWNWSG9rTno5MnU5UXhWLzA3K3h5RHMyVFE9'
            },
            {
                id: 7,
                banner: 'https://pic4.iqiyipic.com/image/20210219/41/73/v_157392887_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNDFoK2M0czN6dGQyMTNWR2N1TWNWSHB4SHpaWUwvVlc5NmZqemhOV0c4OEE9'
            },
            {
                id: 8,
                banner: 'https://pic6.iqiyipic.com/image/20210226/23/38/v_157574302_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNDFoK2M0czN6dGQyMTNWR2N1TWNWSHU5eCtCNTljNERrMkltZi9pbE9uYmhvK3E1eTR6UnFYM21TNEI2Z3F3MHk='
            },
            {
                id: 9,
                banner: 'https://pic7.iqiyipic.com/image/20210305/6a/ed/v_157755450_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNG1BSUlhS1UxNFk5OCthT2JQWVQxRVpiYzhUMnRCcWFzMTFXdWp3SytUZWM9'
            },
            {
                id: 10,
                banner: 'https://pic1.iqiyipic.com/image/20210312/8a/86/v_157923804_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNG1BSUlhS1UxNFk5OCthT2JQWVQxRVp0VERKbHlUZi9icDcyME1zaEdVS1U9'
            },
            {
                id: 11,
                banner: 'https://pic1.iqiyipic.com/image/20210319/4b/c1/v_158106859_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNG1BSUlhS1UxNFk5OCthT2JQWVQxRVhrdmJHMzc2cEQvTWcyVkdEZUFjYTg9'
            },
            {
                id: 12,
                banner: 'https://pic8.iqiyipic.com/image/20211001/94/1c/v_162581883_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNGQvY3AzWFVWKy9ORWt3bGJrNENxUXU3QnFFRkhwK1BBalQxME5Edm9MakY4cXhCL1paL1p2cWcvd21NbEdjV0g='
            },
            {
                id: 13,
                banner: 'https://pic7.iqiyipic.com/image/20211009/c2/0b/v_162712570_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNGQvY3AzWFVWKy9ORWt3bGJrNENxUXRRV1lnZGluMWdKOHBPdDlQYjRFZVpycEVSSFNkK3hBbkxIZDY5UDEwSXc='
            },
            {
                id: 14,
                banner: 'https://pic5.iqiyipic.com/image/20211015/11/37/v_162869382_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNGQvY3AzWFVWKy9ORWt3bGJrNENxUXIrbUFTWmo4alBZYitNWTNTRzhOS1cwQWxGN0VxT0ZCSERCaFgwdCs1NUU='
            },
            {
                id: 15,
                banner: 'https://pic5.iqiyipic.com/image/20211022/bd/a3/v_163061765_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNGQvY3AzWFVWKy9ORWt3bGJrNENxUXMxc3NtUDNqK01sQ09OQnVzM1k5Rm9WYmtJeUgwN1BFbGZvVTN4WmVSY2E='
            },
            {
                id: 16,
                banner: 'https://pic6.iqiyipic.com/image/20211029/a4/75/v_163210382_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNGQvY3AzWFVWKy9ORWt3bGJrNENxUWl0VDQ0V2ZMeFMxY1dDRit0cGpLV1pYM3VzSEtFUnhSUXJybStaRWl5dFE='
            },
            {
                id: 17,
                banner: 'https://pic3.iqiyipic.com/image/20211106/ac/7b/v_163396531_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNEJ0Tzd6VEhTNHdWMlcyMisrTnZsRGZWcGVUaTdpcjRBZDBJWVFBS0hja2U3TjB2c0phNGNXakdIaThOL2lrSDg='
            },
            {
                id: 18,
                banner: 'https://pic7.iqiyipic.com/image/20211112/8b/c7/v_163524941_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNEJ0Tzd6VEhTNHdWMlcyMisrTnZsRGZ2OSs1YTFNZmVrOWovcFRDMUlOSTZzVjRuSzVQODhSQkxxa3IyMmFSTDU='
            },
            {
                id: 19,
                banner: 'https://pic2.iqiyipic.com/image/20211119/da/05/v_163836144_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNEJ0Tzd6VEhTNHdWMlcyMisrTnZsRFVwbnJaRHRmWUVGWlBTVzFESWdJQ2YyNE5nNVlIdk94VGVrbGxKT0Y2bGY='
            },
            {
                id: 20,
                banner: 'https://pic0.iqiyipic.com/image/20211126/cf/8d/v_164224412_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNEJ0Tzd6VEhTNHdWMlcyMisrTnZsRGNxOWJ5YUJQaWxzWnlUR1FoUzJmM3lNT3B1WGR2VEljZ3hUZy92M09sRmQ='
            },
            {
                id: 21,
                banner: 'https://pic2.iqiyipic.com/image/20211203/04/ad/v_164553138_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNHpkcW1ZbmJvb3c4ZVFaOFgwcVFnajMxcWVBOThadWc3MnA3eFpQU0p2NUp0V0lxalhEN3NlUWcwMDI3dGE2Y1Y='
            },
            {
                id: 22,
                banner: 'https://pic4.iqiyipic.com/image/20211210/2e/9e/v_164745472_m_601_zh-CN_284_160.webp',
                link: 'data-src="https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNHpkcW1ZbmJvb3c4ZVFaOFgwcVFnajRGQlhCVFlZeU1JL3g1V0s5ZUZKc3g2aXRydm5UYXlzaGlLcjBYLzZNWnI="'
            },
            {
                id: 23,
                banner: 'https://pic9.iqiyipic.com/image/20211217/13/99/v_164903103_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNHpkcW1ZbmJvb3c4ZVFaOFgwcVFnajluVmV2TkZkWVNUdGNxL1l6N1FveEJrS1Q1YWtjTUNYMWlmdFpFeXkrZWM='
            },

        ]
    },
    {
        id: 5,
        title: 'Ranking of Kings',
        titleImg: 'https://i.ibb.co/0FnrB19/rankings-title.png',
        poster: 'https://i.ibb.co/p4gc4V2/rankings-poster.png',
        frontPoster: 'https://i.ibb.co/p4gc4V2/rankings-poster.png',
        background: 'https://i.ibb.co/gFbZC2W/rankings-background.jpg',
        banner: 'https://i.ibb.co/rFj4w4Z/rankings-banner.jpg',
        description: 'Berkisah pada karakter utama, Bojji.Lahir tuli, lemah, dan tidak dapat menggunakan bahkan belati anak-anak, Bojji adalah menjadi raja terbaik di dunia. Kekayaan negara, jumlah orang kuat, dan raja negara itu sendiri sekuat pahlawan adalah syarat untuk mengevaluasi peringkat raja di setiap negara, yang juga dikenal sebagai Peringkat Raja. Karakter utama, Bojji, adalah pangeran pertama kerajaan yang diperintah oleh Raja Boss, yang menempati peringkat ketujuh di kerajaan. Namun, Bojji terlahir tuli, lemah, dan bahkan tidak bisa menggunakan belati anak-anak. Bojji dicemooh tidak hanya oleh para orang istananya, tetapi juga orang-orang karena tidak layak menjadi raja. Meskipun Bojji yang baik dan kuat terluka oleh kata-kata ini, dia masih menghadapi kehidupan dengan positif karena dia ingin memenuhi janjinya dengan mendiang ibunya. Dia kemudian berteman dengan teman pertamanya dan satu-satunya, Kage, yang membuat perubahan besar dalam hidupnya.',
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
        featuredAlbum: 'true',
        episode: 'Diperbarui sampai 14',
        episodeList: [
            {
                id: 1,
                banner: 'https://pic0.iqiyipic.com/image/20211013/60/2f/v_162795635_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNFpET0lYVzJiN1d4ZVhaNzlYQllqRmUvNSsvTkQxbmorR3REQVBENHFEU3YyRzFWcldKUWx6UXJOTnJYWC96Mjg='
            },
            {
                id: 2,
                banner: 'https://pic0.iqiyipic.com/image/20211018/f7/19/v_162949193_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNFpET0lYVzJiN1d4ZVhaNzlYQllqRmF0QlYwN1h5azZoa3J5b0FPbDNOb1k5Wkh5UklvR05yWk5KUjBSMzIxa00='
            },
            {
                id: 3,
                banner: 'https://pic0.iqiyipic.com/image/20211025/9f/29/v_163116680_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNFpET0lYVzJiN1d4ZVhaNzlYQllqRmJiU1A4WC9IMXA1YkdibXBobXFZdzVmV2lxdVhmTUpvOTd0cVdkYUtJQ2g='
            },
            {
                id: 4,
                banner: 'https://pic4.iqiyipic.com/image/20211103/05/c2/v_163309183_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNEx1Y28wM092K1lRaUpDam5qTWpKcTV5RnJ5eHUwUldNZEZUaENadzhYMDdHVmswWTlONmlmR2JLcjdFS2xWS3o='
            },
            {
                id: 5,
                banner: 'https://pic3.iqiyipic.com/image/20211109/06/6d/v_163454879_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNEx1Y28wM092K1lRaUpDam5qTWpKcTNtL0phZFpYRlpBK011WWlUZTdSVU1XMFAxdEdyOEZHRHV0RFRoT0ZvUzA='
            },
            {
                id: 6,
                banner: 'https://pic3.iqiyipic.com/image/20211116/eb/b8/v_163669284_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNEx1Y28wM092K1lRaUpDam5qTWpKcTZBaDVQUllzcUYxdjArWDlUaUdWa0NmRVZ2ZFVyak5qdCtFN3V5ZmNFem0='
            },
            {
                id: 7,
                banner: 'https://pic3.iqiyipic.com/image/20211122/f8/dd/v_163962417_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNEx1Y28wM092K1lRaUpDam5qTWpKcTdDZHhrVGNhamk0VEJlRFNlWDgvV2RpRHN0ckt2UmNhdXF3QzBRQ2Fjamk='
            },
            {
                id: 8,
                banner: 'https://pic4.iqiyipic.com/image/20211130/9c/e2/v_164412244_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNFlNUnpnQUl3NkpKeDdkYkd2ZHFuUE1JbzFxUmxYbEhPZ25Wc2R4dmNJWERHai81Y09rcGZGblRpVm9ndFdFazc='
            },
            {
                id: 9,
                banner: 'https://pic3.iqiyipic.com/image/20211208/25/66/v_164657428_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNFlNUnpnQUl3NkpKeDdkYkd2ZHFuUEVCQkJNMUExdmlsaVRiTk4vRndzT2d6S1dnL2lNUmppL1RDQlYyQkhPcTU='
            },
            {
                id: 10,
                banner: 'https://pic6.iqiyipic.com/image/20211213/c0/4f/v_164808454_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNFlNUnpnQUl3NkpKeDdkYkd2ZHFuUEpBWE14TU9VTDgxTFY5cDUrZ2tBaVBTOXFnUUtVaDBjMURDODlFMHJQWmE='
            },
            {
                id: 11,
                banner: 'https://pic1.iqiyipic.com/image/20211220/74/44/v_164956680_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNFlNUnpnQUl3NkpKeDdkYkd2ZHFuUEsyZlNjS0tRR1NJVTFVeWI0MUp0TUFETTNhdWI0UFAwSjEyR1E1S3gyckc='
            },
            {
                id: 12,
                banner: 'https://pic2.iqiyipic.com/image/20220104/40/fa/v_165210126_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNDhaUmxXN1djN2ZZMERBcnlPMVlaN001V3RpVVkwZm1oTDRoQWQ2OWJDL3dvOSs4aW5UaUpUN3JYbmhoZWZnVnk='
            },
            {
                id: 13,
                banner: 'https://pic8.iqiyipic.com/image/20220111/a7/e2/v_165345460_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNDhaUmxXN1djN2ZZMERBcnlPMVlaN0t5R3VzVi9xc3krMnFZbW83SjNEejhuOUF2TkwwNm1TNzVLV3poVHZJTXM='
            },
            {
                id: 14,
                banner: 'https://pic7.iqiyipic.com/image/20220117/1d/c0/v_165464775_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNDhaUmxXN1djN2ZZMERBcnlPMVlaN0hYY2NJS1FOWVYycm9KVVppc3h0RXVPWnc2ZGVpVTFzdlJxZE9GRmhxNlg='
            }
        ]
    },
    {
        id: 6,
        title: 'Mieruko-chan',
        titleImg: 'https://i.ibb.co/cYPPD7P/mieruko-title.png',
        poster: 'https://i.ibb.co/GtqVjcY/mieruko-poster.jpg',
        frontPoster: 'https://i.ibb.co/GtqVjcY/mieruko-poster.jpg',
        background: 'https://i.ibb.co/z20Ymvn/mieruko-background.png',
        banner: 'https://i.ibb.co/WHgCyKX/Mieruko-chan-Banner.webp',
        description: 'Miko adalah siswa sekolah menengah biasa yang hidupnya menjadi kacau saat dia tiba-tiba mulai melihat monster yang mengerikan. Meskipun benar-benar ketakutan, Miko melanjutkan kehidupan sehari-harinya, berpura-pura tidak memperhatikan kengerian yang mengelilinginya. Dia harus menanggung rasa takut untuk menjaga dirinya dan temannya Hana dari bahaya, bahkan jika itu berarti berhadapan langsung dengan yang terburuk. Memadukan komedi dan horor, Mieruko-chan menceritakan kisah seorang gadis yang mencoba menghadapi paranormal dengan bersikap acuh tak acuh.',
        urlAlbum: '../index4.html', 
        rate: '9.7',
        year: '2021',
        tag: [
            "Manga",
            "Komedi",
            "Horror",
            "Sekolah",
            "Remaja Perempuan",
            "Bahasa Jepang"
        ],
        statusAlbum: 'Completed',
        featuredAlbum: 'true',
        episode: 'Diperbarui sampai 12',
        episodeList: [
            {
                id: 1,
                banner: 'https://i.ibb.co/02BZNr1/Mieruko-chan-ep1.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNHp3MUkzSzJHTmZXbnFCeW4rcHlyNXBrSG9uQ3lneUpzdGFhZ1RIRStFT3BOMVpBZlgzdm1rS0dpZU4rSnFkeUM='
            },
            {
                id: 2,
                banner: 'https://i.ibb.co/XsZ6MRN/Mieruko-chan-ep2.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNHp3MUkzSzJHTmZXbnFCeW4rcHlyNW1oQ25kdmJ1L3NJQ2JES2gzb3FnMzYzMFpSeXhxeng5TjhOM3dQSndzSlc='
            },
            {
                id: 3,
                banner: 'https://i.ibb.co/j4j3bZ6/Mieruko-chan-ep3.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNHp3MUkzSzJHTmZXbnFCeW4rcHlyNWtaR2pLUHBJd1VYMUEyV3VGdkR1STd2OFpnNFZ1ampOLzNLdVdtU1VrbVY='
            },
            {
                id: 4,
                banner: 'https://i.ibb.co/3h3v1tW/Mieruko-chan-ep4.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNHp3MUkzSzJHTmZXbnFCeW4rcHlyNXRFUFZObXdWK2pPM0JFM2NScUdCL29VWkQzdXJsYTI3RjYxc1lRUGhLWEs='
            },
            {
                id: 5,
                banner: 'https://i.ibb.co/ZJZJ1Z3/Mieruko-chan-ep5.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNHp3MUkzSzJHTmZXbnFCeW4rcHlyNWxnb3J5Y09OcmQzdDhnZ0RBMjhteUZQelZjNFJuYldBTklSV3hjemJIV1c='
            },
            {
                id: 6,
                banner: 'https://i.ibb.co/r7zJHdC/Mieruko-chan-ep6.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNHZ3K01FSEUvbHV1U2k0a2ZlWXB0WGZpcUNLMDJ5aG01TUtnU1NwSW5KVW9KV0ZFcTlQRkJST2NQNGdvN3ZYUGc='
            },
            {
                id: 7,
                banner: 'https://i.ibb.co/r5bNpJh/Mieruko-chan-ep7.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNHZ3K01FSEUvbHV1U2k0a2ZlWXB0WFpjR2NwZGdodXJEN2NiTkZySWlxRHA4M0hablkycTNudVlNMkFrVWdjVWc='
            },
            {
                id: 8,
                banner: 'https://i.ibb.co/vhDGbX5/Mieruko-chan-ep8.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNHZ3K01FSEUvbHV1U2k0a2ZlWXB0WGNpb2JqYzc4VnlMZTVQdEN5Y0QyTmF4bVRpOFVvVlg3U0l0U2hEaXZsNEo='
            },
            {
                id: 9,
                banner: 'https://i.ibb.co/S0Fww2j/Mieruko-chan-ep9.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNHZ3K01FSEUvbHV1U2k0a2ZlWXB0WFlFYjQrU0ZsSGhjY292b1ZZWnFGY0tQMS9sZU8vaWFRNHNES0FFa2dlMkk='
            },
            {
                id: 10,
                banner: 'https://i.ibb.co/ZxKzpNd/Mieruko-chan-ep10.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNHFrUW5KdXI5V1N3dkhabzMvbTdQQmFHbGxxcVFQbk81VkVlTUtqcjM4eXlVdGdsSU9lVWFlZjlTL1l5Y3RYdSs='
            },
            {
                id: 11,
                banner: 'https://i.ytimg.com/vi/8Snq0wGHN6Y/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB-vB87rAEaeEChCNelGSZ_RYYjnA',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNHFrUW5KdXI5V1N3dkhabzMvbTdQQlFaNWI4UkxSRUNQaUNCY2VVOU1qWlU4VGNZNTNVbkdqdCtGMEJsbTQ2clY='
            },
            {
                id: 12,
                banner: 'https://i.ytimg.com/vi/wuWYnsF_Pp4/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAI2DSEfG7aAIuxO791pbwNx_xtyw',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNHFrUW5KdXI5V1N3dkhabzMvbTdQQmV5WnQ1QUpIZk9ocU1SVUZxTXJNOEFUMXNvNitTdndYRWhmeG1HcmVIOUY='
            },
        ]
    },
    {
        id: 7,
        title: 'Kisah Gadis Zaman Taisho',
        titleImg: 'https://i.ibb.co/2dkGd8S/taisho-title.png',
        poster: 'https://i.ibb.co/zG1WT5g/taisho-poster.png',
        frontPoster: 'https://i.ibb.co/zG1WT5g/taisho-poster.png',
        background: 'https://i.ibb.co/mCkF2wT/taisho-background.jpg',
        banner: 'https://i.ibb.co/JpNfb1D/taisho-banner.png',
        description: 'Pada tahun ke-11 era Taisho (Tahun 1922) di Jepang, putra kedua dari keluarga pedagang kaya Shima, Tamahiko, karena sebuah kecelakaan kehilangan ibu dan tangan kanannya. Karena cacat dicampakkan oleh keluarganya, ditempatkan di tempat terpencil. Di saat itu, muncullah seorang gadis muda yang polos dan lincah di depan Tamahiko yang sedang frustasi saat itu sebagai pelayan dan tunangannya. Putra bangsawan yang putus asa bertemu seorang gadis lugu. Kehangatan dan kelembutan apa yang akan ditampilkan?',
        urlAlbum: '../index4.html', 
        rate: '9.7',
        year: '2021',
        tag: [
            "Romance",
            "Keseharian",
            "Remaja Perempuan",
            "Bahasa Jepang"
        ],
        statusAlbum: 'Completed',
        featuredAlbum: 'false',
        episode: '12 Episode',
        episodeList: [
            {
                id: 1,
                banner: 'https://pic4.iqiyipic.com/image/20211008/4f/ab/v_162690585_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNDBwN2lHa2lSYlRVRERtcFhFQWltTVlodjgwcVVTZkVxcXh0d2tLdDA1WmlTSXJjeUFvcGRmeko4c1RPUnhNSGQ='
            },
            {
                id: 2,
                banner: 'https://pic9.iqiyipic.com/image/20211015/29/72/v_162869966_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNDBwN2lHa2lSYlRVRERtcFhFQWltTVlodjgwcVVTZkVxcXh0d2tLdDA1WmdMcnNEMFNMbjBWOG1XT1dGUmVoV2o='
            },
            {
                id: 3,
                banner: 'https://pic3.iqiyipic.com/image/20211022/74/aa/v_163056020_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNDBwN2lHa2lSYlRVRERtcFhFQWltTVlodjgwcVVTZkVxcXh0d2tLdDA1WmpJTmVCTzQvaVUrZHNlOHpHSDQwWlM='
            },
            {
                id: 4,
                banner: 'https://pic7.iqiyipic.com/image/20211029/df/0c/v_163209301_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNDBwN2lHa2lSYlRVRERtcFhFQWltTVlodjgwcVVTZkVxcXh0d2tLdDA1WmdITC9NcGovbUtVY2pxYXZiNkE0ZHM='
            },
            {
                id: 5,
                banner: 'https://pic8.iqiyipic.com/image/20211105/4c/5b/v_163366159_m_601_zh-CN_m1_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNDQrT1MvUUhuVlpxckdYVzEvTHhEejdBbWppRnJrWHc2eGFuV1ZHY3NKUytNdkw4ZmpBUGQ3VGZFcTMrR1d2Tkg='
            },
            {
                id: 6,
                banner: 'https://pic3.iqiyipic.com/image/20211112/e9/b1/v_163518883_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNDQrT1MvUUhuVlpxckdYVzEvTHhEejdBbWppRnJrWHc2eGFuV1ZHY3NKUys0c2ZLTGVKRzFkRGVvZnZZU3dFWDE='
            },
            {
                id: 7,
                banner: 'https://pic7.iqiyipic.com/image/20211119/15/74/v_163831913_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNDQrT1MvUUhuVlpxckdYVzEvTHhEejdBbWppRnJrWHc2eGFuV1ZHY3NKUyt1MUI4MWVpTFZuS3FXdG94MkxINjI='
            },
            {
                id: 8,
                banner: 'https://pic5.iqiyipic.com/image/20211126/3c/0c/v_164228143_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNDQrT1MvUUhuVlpxckdYVzEvTHhEejdBbWppRnJrWHc2eGFuV1ZHY3NKUy84RlZBYjNWOGhONlFaSUJBT0FsVng='
            },
            {
                id: 9,
                banner: 'https://pic3.iqiyipic.com/image/20211203/a1/7c/v_164551832_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNFZ2SVA4VWpWZTMxengrME1nT28zeTIwRVJnNElvdmFMSVc0LzNsTVpKTWc2bVVzVmh3UkJXVHlnd2IraDlVcVk='
            },
            {
                id: 10,
                banner: 'https://pic7.iqiyipic.com/image/20211210/6b/6e/v_164737117_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNFZ2SVA4VWpWZTMxengrME1nT28zeTIwRVJnNElvdmFMSVc0LzNsTVpKTWhVb29jL0FkQTZVL3pOS0VMZU5jSFY='
            },
            {
                id: 11,
                banner: 'https://pic4.iqiyipic.com/image/20211217/e4/26/v_164896899_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNFZ2SVA4VWpWZTMxengrME1nT28zeTIwRVJnNElvdmFMSVc0LzNsTVpKTWk3dzJnSlVWL0dqb0p6NHIvTkZrTmU='
            },
            {
                id: 12,
                banner: 'https://pic8.iqiyipic.com/image/20211224/20/fa/v_165029928_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNFZ2SVA4VWpWZTMxengrME1nT28zeTIwRVJnNElvdmFMSVc0LzNsTVpKTWlUUnVvTTlFMTd3UXdUcnNSOFBFTHk='
            }
        ]
    },
    {
        id: 8,
        title: 'Shinka no Mi',
        titleImg: 'https://i.ibb.co/YbL2dcT/sinkanomi-title.webp',
        poster: 'https://i.ibb.co/pbzXKDV/sinkanomi-poster.png',
        frontPoster: 'https://i.ibb.co/pbzXKDV/sinkanomi-poster.png',
        background: 'https://i.ibb.co/M6SGVxP/sinkanomi-background.webp',
        banner: 'https://i.ibb.co/vL0fh65/sinkanomi-banner.webp',
        description: 'Ini adalah kisah siswa yang sebelumnya diabaikan dan dijahili, tetapi pantang menyerah dan selalu bekerja keras untuk bertahan hidup di dunia baru. Hingga tanpa ia sadari menjadi salah satu yang terbaik.',
        urlAlbum: '../index4.html', 
        rate: '9.7',
        year: '2021',
        tag: [
            "Aksi",
            "Fantasi",
            "Komedi",
            "Romance",
            "Petualangan",
            "Remaja Laki-laki",
            "Bahasa Jepang"
        ],
        statusAlbum: 'Completed',
        featuredAlbum: 'false',
        episode: '12 Episode',
        episodeList: [
            {
                id: 1,
                banner: 'https://pic0.iqiyipic.com/image/20211004/8a/a0/v_162625095_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNGpOeGw2eXJNbjFleGxyTVdFV3hyU05MKzhwZ1drcTR0ZEhReVFxYkp6UmIwRmVYU0Qvdm9xSjI5bDNSKzlxSDI='
            },
            {
                id: 2,
                banner: 'https://pic1.iqiyipic.com/image/20211011/41/39/v_162740650_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNGpOeGw2eXJNbjFleGxyTVdFV3hyU045Y3crOURvSUZCWU5sNHBBam85cENiVmh2WUlkSUNZenFuMlZnMUZHNkk='
            },
            {
                id: 3,
                banner: 'https://pic9.iqiyipic.com/image/20211018/80/76/v_162946937_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNGpOeGw2eXJNbjFleGxyTVdFV3hyU0Mvd0ZCL2JJRE1iVTZsRXBVamtXVEU1QzkvdDFQUlc5VU5IRWovRC8wUUo='
            },
            {
                id: 4,
                banner: 'https://pic4.iqiyipic.com/image/20211022/b4/35/v_163071109_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNGpOeGw2eXJNbjFleGxyTVdFV3hyU1BHWXpFcUFpUXRZUzR5anJNcWFSNWFXWUdOcklwMnVHR3N2VnppTXBKakU='
            },
            {
                id: 5,
                banner: 'https://pic6.iqiyipic.com/image/20211101/e2/8b/v_163264996_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNFUrUkZobEZjZkdRN3BaUXVkaEZQQUdXRkYvQUY5MUsyd0lsUGZKOTBZdmVSZ3p2RTRLMVNabyt4WHBKaEdjWlo='
            },
            {
                id: 6,
                banner: 'https://pic6.iqiyipic.com/image/20211108/58/10/v_163422864_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNFUrUkZobEZjZkdRN3BaUXVkaEZQQUhUVmJUSDRpMWdKMCtyMUVhUnFuamtJa2dNYTZqNTZubE1lTWRSRFNyUUE='
            },
            {
                id: 7,
                banner: 'https://pic9.iqiyipic.com/image/20211115/7a/f0/v_163577936_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNFUrUkZobEZjZkdRN3BaUXVkaEZQQUdONW82dFdFdVMyZ1RYT1NPYWkybHJvb1h4aXdGdXBaUElpTTdMbHpRb1o='
            },
            {
                id: 8,
                banner: 'https://pic7.iqiyipic.com/image/20211122/99/ee/v_163959437_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNFUrUkZobEZjZkdRN3BaUXVkaEZQQUk3cTRiU0NFZFdhVnVERnF3NmNBZGpKcndQQVVlVDRoa1FHay9SS2gyWW4='
            },
            {
                id: 9,
                banner: 'https://pic4.iqiyipic.com/image/20211126/6c/92/v_164228614_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNFUrUkZobEZjZkdRN3BaUXVkaEZQQU9od1hyWmllV1ZGNE5mRzNmdXhlb3RDaU9UVUo0K0ZoRUhCMXN0bXgzRVA='
            },
            {
                id: 10,
                banner: 'https://pic5.iqiyipic.com/image/20211202/ff/7d/v_164516158_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNFQ2djgyZ1JDWlhjSjFiQUFIY2NJTG9RcDRRZm1Fbnl6WUx5NE9KeFVPOWVCVUF6L294SzNhYzIreEVpL3BiWXA='
            },
            {
                id: 11,
                banner: 'https://pic2.iqiyipic.com/image/20211209/d0/14/v_164699485_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNFQ2djgyZ1JDWlhjSjFiQUFIY2NJTHRVaFU3ZkFCcGJJS2MwclJKLzNFZWlJeWpsSlhvODZGYXVtT2JPcjF5T04='
            },
            {
                id: 12,
                banner: 'https://pic8.iqiyipic.com/image/20211220/d0/e0/v_164955808_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNFQ2djgyZ1JDWlhjSjFiQUFIY2NJTGp6RU84WHdQRS9QdHYwUUg3UFdaWVpmUnNqa0pmWU9vOXFISjBOUFRqMDU='
            }
        ]
    },
    {
        id: 10,
        title: 'My Senpai is Annoying',
        titleImg: 'https://i.ibb.co/0KcTFjG/senpai-title.webp',
        poster: 'https://i.ibb.co/P9yYFB9/senpai-poster.png',
        frontPoster: 'https://i.ibb.co/0rPtmrR/senpai-front-poster.webp',
        background: 'https://i.ibb.co/BtVtBNN/senpai-background.webp',
        banner: 'https://i.ibb.co/rdSdQXG/senpai-banner.webp',
        description: 'Senior Takeda Harumi memiliki kepribadian yang kasar, tetapi dia pandai menjaga orang lain. Pada hari pertama ketika generasi muda Igarashi Futaba pergi bekerja, Takeda salah mengira dia adalah seorang siswa sekolah menengah dengan perawakan pendek, yang membuat kesan pertama Igarashi tentang Takeda cukup buruk, tetapi atasan menunjuk Takeda untuk membimbing Igarashi. Karya ini menceritakan tentang berbagai komedi romantis yang terjadi antara Takeda dan Igarashi setelah itu.',
        urlAlbum: '../index4.html', 
        rate: '9.7',
        year: '2021',
        tag: [
            "Romance",
            "Komedi",
            "Keseharian",
            "Remaja Perempuan",
            "Bahasa Jepang"
        ],
        statusAlbum: 'Completed',
        featuredAlbum: 'false',
        episode: '12 Episode',
        episodeList: [
            {
                id: 1,
                banner: 'https://pic2.iqiyipic.com/image/20211008/94/86/v_162689226_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNEpWOWVQRWdmdmdUb2dsTllhcm9pY1ZDd3RCSW9vVGRBNXFyVjYrVS9pT011cXc4SEpNRVJUNDRaa0srdTFxd0RPSFFoT01Hd1NPNkpXeEx1djFDNFlRPT0='
            },
            {
                id: 2,
                banner: 'https://pic8.iqiyipic.com/image/20211015/d9/7a/v_162869949_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNEpWOWVQRWdmdmdUb2dsTllhcm9pY1ZDd3RCSW9vVGRBNXFyVjYrVS9pT05CVERZTk1LMzZkYTg0RG1RL01aRFd5R29STjlyNHV5eGZRellHWWtBbUtnPT0='
            },
            {
                id: 3,
                banner: 'https://pic2.iqiyipic.com/image/20211022/26/07/v_163062712_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNEpWOWVQRWdmdmdUb2dsTllhcm9pY1ZDd3RCSW9vVGRBNXFyVjYrVS9pT08xZlNLcXhodGVxZGRMRHRKWkU2RTQ3NzNOb1lJMTQvMUtScUwvOEd6NUlnPT0='
            },
            {
                id: 4,
                banner: 'https://pic4.iqiyipic.com/image/20211029/cd/0a/v_163209593_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNEpWOWVQRWdmdmdUb2dsTllhcm9pY1ZDd3RCSW9vVGRBNXFyVjYrVS9pT09ORGF2WnlaS043VzYxbEpHa3pHUGZmcUlFNEIrQjQrbkdFeTQ0S1MydkNnPT0='
            },
            {
                id: 5,
                banner: 'https://pic7.iqiyipic.com/image/20211105/ad/e2/v_163381515_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNDhjUEM4Zld4OEY3amZKWDM0aEZxdVJiKzR3REYvMGI2L0xnRWFzQU5hd2V0eFdaeThGYlNDalg2NEkra1VBcU8xNU9wWUxOaGs0aVJQa1ZyWlpROC93PT0='
            },
            {
                id: 6,
                banner: 'https://pic8.iqiyipic.com/image/20211112/a4/50/v_163526858_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNDhjUEM4Zld4OEY3amZKWDM0aEZxdVJiKzR3REYvMGI2L0xnRWFzQU5hd2RiSEgzMFNPQmh3L24zSERsQS9rYy9WVUNQSVF3MFlESTlyMVZTOWhCWWF3PT0='
            },
            {
                id: 7,
                banner: 'https://pic9.iqiyipic.com/image/20211119/3a/40/v_163832507_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNDhjUEM4Zld4OEY3amZKWDM0aEZxdVJiKzR3REYvMGI2L0xnRWFzQU5hd2Q2UytlaCt3a0UwVlc1WHk4bzhsVXJ5OVk0dk11QXJ2aWdiWWtiSDRidmZnPT0='
            },
            {
                id: 8,
                banner: 'https://pic4.iqiyipic.com/image/20211126/50/21/v_164221110_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNDhjUEM4Zld4OEY3amZKWDM0aEZxdVJiKzR3REYvMGI2L0xnRWFzQU5hd2NQQ3laeExMTit0UFYzSlFQU2hSaGo2dDFVOE5IQ01pVitKMXBJQ2JCa1RnPT0='
            },
            {
                id: 9,
                banner: 'https://pic9.iqiyipic.com/image/20211203/7c/07/v_164553108_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNDZaMzhrWC96dndZVzV1b21udHNYWDM5amFucnMrL0xXVFAzaUFPdmpacjdhSFY3Sk0vYXoxdm1udmhwQWZPcFBGMUR1M3dLUGdESmx3VTFrRHpwb3VRPT0='
            },
            {
                id: 10,
                banner: 'https://pic4.iqiyipic.com/image/20211210/94/7e/v_164742309_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNDZaMzhrWC96dndZVzV1b21udHNYWDM5amFucnMrL0xXVFAzaUFPdmpacjZnSStpQ3JaUElyb0JQcFVjc3FsMHF3VzZYdGRITEVlNlNHaStvS3d1MVVBPT0='
            },
            {
                id: 11,
                banner: 'https://pic8.iqiyipic.com/image/20211217/a1/9a/v_164903076_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNDZaMzhrWC96dndZVzV1b21udHNYWDM5amFucnMrL0xXVFAzaUFPdmpacjVjK3BjOThnTTY1VVZPQnJBQlYvamo3SWVLMWppa2J5YjZjOHY4bEk4WmJnPT0='
            },
            {
                id: 12,
                banner: 'https://pic8.iqiyipic.com/image/20211224/69/93/v_165030515_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNDZaMzhrWC96dndZVzV1b21udHNYWDM5amFucnMrL0xXVFAzaUFPdmpacjVWeU93ZjhNZVY2MG5Ub1JLOVZMUTlPOC9Fd0V3eXdtNVRVU2dXUnZtWjVRPT0='
            }
        ]
    },
    {
        id: 12,
        title: '-86-Eighty Six-',
        titleImg: 'https://i.ibb.co/wdHhM4w/86-title.png',
        poster: 'https://i.ibb.co/QKsCL1H/86-poster.jpg',
        frontPoster: 'https://i.ibb.co/QKsCL1H/86-poster.jpg',
        background: 'https://i.ibb.co/Qv0cm4f/86-banner.webp',
        banner: 'https://i.ibb.co/Qv0cm4f/86-banner.webp',
        description: 'Menceritakan kisah Shin, pemimpin skuadron 86 Spearhead Republik San Magnolia, dan Lena, putri tertua dari keluarga bergengsi yang mewarisi darah murni Alba, dijuluki Ratu Darah. Republik San Magnolia menjadi sasaran agresi harian oleh Legiun, senjata mekanis otonom dari Kekaisaran tetangga. Untungnya, Republik juga berhasil mengembangkan jenis senjata yang sama untuk melawan serangannya, dan nyaris tidak berhasil menetralisir ancaman dari negara tetangga tanpa ada korban. Memang benar tidak ada korban di permukaan, tapi korban sebenarnya tidak nol. Di luar distrik ke-85 Republik, ada distrik ke-86, di mana anak-anak kecil yang telah dicap dengan 86 tanda pilot "mesin otonom berawak" dan bertarung siang dan malam. Sebagai seorang 86, Shin menyembunyikan rahasia kejam di tubuhnya. Dia juga dikenal sebagai "pengurus mayat" di militer. Elit, Lena, seorang perwira militer, dipindahkan ke skuadron "Spearhead" tempat Shin berada secara kebetulan. Pertemuan dan pemisahan Shin muda yang memimpin prajurit muda ke perang dan komandan Lena yang memimpin pertempuran melalui mesin di belakang yang jauh, disertai dengan pertempuran heroik namun menyedihkan, dimulai di sini... ',
        urlAlbum: '../index4.html', 
        rate: '9.7',
        year: '2021',
        tag: [
            "Mecha",
            "Aksi",
            "Petualangan",
            "Sci-Fi",
            "Remaja Laki-laki",
            "Bahasa Jepang"
        ],
        statusAlbum: 'Completed',
        episode: '21 Episode',
        episodeList: [
            {
                id: 1,
                banner: 'https://pic0.iqiyipic.com/image/20210405/cf/9a/v_158506120_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNGJGSE9LSzdNa1JhWHlaTzJlUklCUlNyMVdiUndmbzBCSlNQdkwrdUo1VzQ9'
            },
            {
                id: 2,
                banner: 'https://pic6.iqiyipic.com/image/20210416/2e/4a/v_158766711_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNGJGSE9LSzdNa1JhWHlaTzJlUklCUlNYa21DZWQ1ajUzRnpJdEYwRHlOanM9'
            },
            {
                id: 3,
                banner: 'https://pic9.iqiyipic.com/image/20210423/bd/c2/v_158929931_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNGJGSE9LSzdNa1JhWHlaTzJlUklCUmV6OHRGUVRDU1JMblVPVTd0ZUprazg9'
            },
            {
                id: 4,
                banner: 'https://pic2.iqiyipic.com/image/20210430/8d/6e/v_159110953_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNDRZWjRHNzh3TFFOemtjdUZQTkVKZnhFeE1WTTlWd3lxbWh1d2ZGT1FvT3c9'
            },
            {
                id: 5,
                banner: 'https://pic8.iqiyipic.com/image/20210507/ca/06/v_159235571_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNDRZWjRHNzh3TFFOemtjdUZQTkVKZjF0UHhoclpYZVNOWmtVdjNUSEpCT1k9'
            },
            {
                id: 6,
                banner: 'https://pic9.iqiyipic.com/image/20210514/e7/79/v_159400365_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNDRZWjRHNzh3TFFOemtjdUZQTkVKZjZ5VytPZGdDWGsrZnV4UXNkQ2h1S0k9'
            },
            {
                id: 7,
                banner: 'https://pic8.iqiyipic.com/image/20210521/36/7b/v_159556120_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNDRZWjRHNzh3TFFOemtjdUZQTkVKZnkyMnRlWTZ2UHRwbnhkWkkyN3FhL0U9'
            },
            {
                id: 8,
                banner: 'https://pic7.iqiyipic.com/image/20210528/ec/16/v_159722920_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNDRZWjRHNzh3TFFOemtjdUZQTkVKZjUrS2RuaUp2SjUxTStPTS9XV1hrcW89'
            },
            {
                id: 9,
                banner: 'https://pic4.iqiyipic.com/image/20210604/70/08/v_159877566_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNDB5d3gxVG5EQjJGQkxuOUcvNU96M1V1WTF1VU5XV0RGY2VjWlljVUhVTUE9'
            },
            {
                id: 10,
                banner: 'https://pic5.iqiyipic.com/image/20210611/9d/f5/v_160040758_m_601_zh-CN_m1_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNDB5d3gxVG5EQjJGQkxuOUcvNU96M1RhUXorS1doanRKNHNVeTdZNGhObFE9'
            },
            {
                id: 11,
                banner: 'https://pic8.iqiyipic.com/image/20210618/52/2b/v_160198968_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNDB5d3gxVG5EQjJGQkxuOUcvNU96M1JlSllvcmk5cFI2OGUrQW56ZFZNejQ9'
            },
            {
                id: 12,
                banner: 'https://pic1.iqiyipic.com/image/20211001/3e/9f/v_162581231_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNE5XZ1g0dXhhVnNud1h3SmF6cThheVlkYlhkQ2xyUDVLQ0FlcjRsRFhUb289'
            },
            {
                id: 13,
                banner: 'https://pic0.iqiyipic.com/image/20211009/72/36/v_162692242_m_601_zh-CN_m2_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNE5XZ1g0dXhhVnNud1h3SmF6cThheVlVUXRtdTU2Vk1HcFJGQllPcmU5N0k9'
            },
            {
                id: 14,
                banner: 'https://pic8.iqiyipic.com/image/20211015/70/3e/v_162876695_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNE5XZ1g0dXhhVnNud1h3SmF6cThheWVTZEdvUGQ1YTZFbE96OHIvNG5PY2c9'
            },
            {
                id: 15,
                banner: 'https://pic8.iqiyipic.com/image/20211022/d7/f6/v_163061791_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNE5XZ1g0dXhhVnNud1h3SmF6cThheVZTVkMxMVo3UkhLeDQ1TXFhajR2ZG89'
            },
            {
                id: 16,
                banner: 'https://pic7.iqiyipic.com/image/20211029/84/af/v_163209565_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNE5XZ1g0dXhhVnNud1h3SmF6cThheVE4UmdEa20rUWMyaXJDR2NyWTI2bTQ9'
            },
            {
                id: 17,
                banner: 'https://pic4.iqiyipic.com/image/20211106/09/fd/v_163389758_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNEcwVXJKRVdMN1hVVCtqa1E5K1NUN1RJRllqWUx1bVZucm5GZytDdXVYS2s9'
            },
            {
                id: 18,
                banner: 'https://pic1.iqiyipic.com/image/20211119/8b/8a/v_163830655_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNEcwVXJKRVdMN1hVVCtqa1E5K1NUN1ZNaWN1SHRBblRSTlZaNlQ5TEZOUEU9'
            },
            {
                id: 19,
                banner: 'https://pic4.iqiyipic.com/image/20211203/58/ce/v_164560691_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNFgzZk5Yb2hSNmxBa2xTMTZKRDV6M3lHUU5iREVNYmZrQkx4Zi9kd28yNk09'
            },
            {
                id: 20,
                banner: 'https://pic2.iqiyipic.com/image/20211217/d1/df/v_164903175_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNFgzZk5Yb2hSNmxBa2xTMTZKRDV6Mzl4QXBkZVR0REp0ZEs2ZlNNdUZvTWM9'
            },
            {
                id: 21,
                banner: 'https://pic3.iqiyipic.com/image/20211224/e5/de/v_165039144_m_601_zh-CN_284_160.webp',
                link: 'https://animeku.org/play2.php?id=SjMzeTdRcWFEYnlCbDYzOXVLd3pNUGpXaE5OejZKTGFYL0FhTzd2bmJUSEI4YUUzWm9KTEh3KytHSGpOSTJYNFgzZk5Yb2hSNmxBa2xTMTZKRDV6MzM1Wk56STdiM3hiaFlVMmYvLzEzVjg9'
            }
        ]
    },
];    

export default albums;