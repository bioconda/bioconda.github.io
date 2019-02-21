:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'smeg'
.. highlight: bash

smeg
====

.. conda:recipe:: smeg
   :replaces_section_title:

   Strain\-level MEtagenomic Growth estimation \(SMEG\) measures growth rates of microbial strains from complex metagenomic dataset at low coverage \(1X\)

   :homepage: https://github.com/ohlab/SMEG
   :license: MIT
   :recipe: /`smeg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/smeg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/smeg/meta.yaml>`_

   


.. conda:package:: smeg

   |downloads_smeg| |docker_smeg|

   :versions: 1.0.1-2, 1.0.1-1, 1.0.1-0
   
   :depends bamtools: 
   
   :depends bowtie2: 
   
   :depends libstdcxx-ng: >=4.9
   
   :depends mauve: 
   
   :depends parallel: 
   
   :depends perl-file-find-rule: 0.34 2
   
   :depends prokka: 
   
   :depends r-ape: 
   
   :depends r-data.table: 
   
   :depends r-dplyr: 
   
   :depends r-dynamictreecut: 
   
   :depends r-getopt: 
   
   :depends r-ggplot2: 
   
   :depends r-gplots: 
   
   :depends r-gsubfn: 
   
   :depends r-wgcna: 
   
   :depends readline: >=6.2
   
   :depends roary: 3.12.0 pl5.22.0_0
   
   :depends samtools: 1.8.*
   
   :depends subread: 
   
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