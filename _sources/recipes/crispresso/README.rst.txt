:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'crispresso'
.. highlight: bash

crispresso
==========

.. conda:recipe:: crispresso
   :replaces_section_title:

   A software pipeline for the analysis of targeted CRISPR\-Cas9 sequencing data

   :homepage: https://github.com/lucapinello/CRISPResso
   :license: GPLv3
   :recipe: /`crispresso <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crispresso>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crispresso/meta.yaml>`_

   


.. conda:package:: crispresso

   |downloads_crispresso| |docker_crispresso|

   :versions: 1.0.13-2, 1.0.13-1, 1.0.8-0, 1.0.7-0, 1.0.6-0, 1.0-0
   
   :depends argparse: 
   :depends biopython: >=1.6.5
   :depends bowtie2: 
   :depends emboss: 
   :depends flash: 
   :depends matplotlib: >=1.3.1
   :depends mock: 
   :depends nose: 
   :depends numpy: >=1.10.4
   :depends openjdk: >=8
   :depends pandas: >=0.16
   :depends python: >=2.7,<2.8.0a0
   :depends samtools: 
   :depends seaborn: 
   :depends trimmomatic: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install crispresso

   and update with::

      conda update crispresso

   or use the docker container::

      docker pull quay.io/biocontainers/crispresso:<tag>

   (see `crispresso/tags`_ for valid values for ``<tag>``)


.. |downloads_crispresso| image:: https://img.shields.io/conda/dn/bioconda/crispresso.svg?style=flat
   :target: https://anaconda.org/bioconda/crispresso
   :alt:   (downloads)
.. |docker_crispresso| image:: https://quay.io/repository/biocontainers/crispresso/status
   :target: https://quay.io/repository/biocontainers/crispresso
.. _`crispresso/tags`: https://quay.io/repository/biocontainers/crispresso?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/crispresso/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/crispresso/README.html