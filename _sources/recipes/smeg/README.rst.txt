:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'smeg'
.. highlight: bash

smeg
====

.. conda:recipe:: smeg
   :replaces_section_title:

   Strain\-level MEtagenomic Growth estimation \(SMEG\) measures growth rates of microbial strains from complex metagenomic dataset

   :homepage: https://github.com/ohlab/SMEG
   :license: MIT
   :recipe: /`smeg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/smeg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/smeg/meta.yaml>`_

   


.. conda:package:: smeg

   |downloads_smeg| |docker_smeg|

   :versions: 1.1.4-1, 1.1.4-0, 1.1.3-0, 1.1.2-0, 1.1.1-0, 1.1-1, 1.1-0, 1.0.1-2, 1.0.1-1, 1.0.1-0
   
   :depends bamtools: 
   :depends bedtools: 
   :depends blast: 
   :depends bowtie2: 
   :depends libgenome: 1.3.1 h470a237_0
   :depends mauve: 
   :depends openssl: 1.0.*
   :depends parallel: 
   :depends prokka: 
   :depends r-ape: 
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-dynamictreecut: 
   :depends r-getopt: 
   :depends r-ggplot2: 
   :depends r-gplots: 
   :depends r-gsubfn: 
   :depends r-seqinr: 
   :depends readline: >=6.2
   :depends roary: 
   :depends samtools: 1.8.*
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install smeg

   and update with::

      conda update smeg

   or use the docker container::

      docker pull quay.io/biocontainers/smeg:<tag>

   (see `smeg/tags`_ for valid values for ``<tag>``)


.. |downloads_smeg| image:: https://img.shields.io/conda/dn/bioconda/smeg.svg?style=flat
   :target: https://anaconda.org/bioconda/smeg
   :alt:   (downloads)
.. |docker_smeg| image:: https://quay.io/repository/biocontainers/smeg/status
   :target: https://quay.io/repository/biocontainers/smeg
.. _`smeg/tags`: https://quay.io/repository/biocontainers/smeg?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/smeg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/smeg/README.html