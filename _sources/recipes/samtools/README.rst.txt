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

   :versions: 1.9, 1.8, 1.7, 1.6, 1.5, 1.4.1, 1.4, 1.3.1, 1.3, 1.2, 1.2.rglab, 1.1, 1.0, 0.1.19, 0.1.18, 0.1.17, 0.1.16, 0.1.15, 0.1.14, 0.1.13, 0.1.12

   :depends: :conda:package:`bzip2` >=1.0.6,<2.0a0 :conda:package:`curl` >=7.59.0,<8.0a0 :conda:package:`libdeflate` >=1.0,<1.1.0a0 :conda:package:`ncurses` >=6.1,<6.2.0a0 :conda:package:`openssl` >=1.0.2p,<1.0.3a :conda:package:`xz` >=5.2.4,<5.3.0a0 :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_samtools|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install samtools

   and update with::

      conda update samtools

   or use the docker container::

      docker pull quay.io/repository/biocontainers/samtools


.. |required_by_samtools| conda:required_by:: samtools
.. |downloads_samtools| image:: https://img.shields.io/conda/dn/bioconda/samtools.svg?style=flat
   :alt:   (downloads)
.. |docker_samtools| image:: https://quay.io/repository/biocontainers/samtools/status
   :target: https://quay.io/repository/biocontainers/samtools







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/samtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/samtools/README.html

