:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'samtools'
.. highlight: bash

samtools
========

.. conda:recipe:: samtools
   :replaces_section_title:

   Tools for dealing with SAM\, BAM and CRAM files

   :homepage: https://github.com/samtools/samtools
   :license: MIT
   :recipe: /`samtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/samtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/samtools/meta.yaml>`_
   :links: biotools: :biotools:`samtools`

   


.. conda:package:: samtools

   |downloads_samtools| |docker_samtools|

   :versions: 1.9-6, 1.9-5, 1.9-4, 1.9-3, 1.9-2, 1.9-1, 1.9-0, 1.8-5, 1.8-4, 1.8-3, 1.8-2, 1.7-2, 1.7-1, 1.7-0, 1.6-2, 1.6-1, 1.6-0, 1.5-2, 1.5-1, 1.5-0, 1.4.1-0, 1.4-0, 1.3.1-5, 1.3.1-4, 1.3.1-3, 1.3.1-2, 1.3.1-1, 1.3.1-0, 1.3-2, 1.3-1, 1.3-0, 1.2-2, 1.2-1, 1.2-0, 1.2.rglab-1, 1.2.rglab-0, 1.1-1, 1.1-0, 1.0-2, 1.0-1, 1.0-0, 0.1.19-5, 0.1.19-4, 0.1.19-3, 0.1.19-2, 0.1.19-1, 0.1.19-0, 0.1.18-0, 0.1.17-0, 0.1.16-0, 0.1.15-1, 0.1.15-0, 0.1.14-2, 0.1.14-1, 0.1.14-0, 0.1.13-2, 0.1.13-1, 0.1.13-0, 0.1.12-3, 0.1.12-2, 0.1.12-1, 0.1.12-0
   
   :depends bzip2: >=1.0.6,<2.0a0
   
   :depends curl: >=7.59.0,<8.0a0
   
   :depends libdeflate: >=1.0,<1.1.0a0
   
   :depends libgcc-ng: >=7.3.0
   
   :depends ncurses: >=6.1,<6.2.0a0
   
   :depends openssl: >=1.0.2p,<1.0.3a
   
   :depends xz: >=5.2.4,<5.3.0a0
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install samtools

   and update with::

      conda update samtools

   or use the docker container::

      docker pull quay.io/biocontainers/samtools:<tag>

   (see `samtools/tags`_ for valid values for ``<tag>``)


.. |downloads_samtools| image:: https://img.shields.io/conda/dn/bioconda/samtools.svg?style=flat
   :alt:   (downloads)
.. |docker_samtools| image:: https://quay.io/repository/biocontainers/samtools/status
   :target: https://quay.io/repository/biocontainers/samtools
.. _`samtools/tags`: https://quay.io/repository/biocontainers/samtools?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/samtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/samtools/README.html