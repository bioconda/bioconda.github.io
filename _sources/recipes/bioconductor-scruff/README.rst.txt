:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scruff'
.. highlight: bash

bioconductor-scruff
===================

.. conda:recipe:: bioconductor-scruff
   :replaces_section_title:

   A pipeline which processes single cell RNA\-seq \(scRNA\-seq\) reads from CEL\-seq and CEL\-seq2 protocols. Demultiplex scRNA\-seq FASTQ files\, align reads to reference genome using Rsubread\, and generate UMI filtered count matrix. Also provide visualizations of read alignments and pre\- and post\-alignment QC metrics.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/scruff.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-scruff <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scruff>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scruff/meta.yaml>`_

   


.. conda:package:: bioconductor-scruff

   |downloads_bioconductor-scruff| |docker_bioconductor-scruff|

   :versions: 1.0.1-0
   
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   
   :depends bioconductor-biocgenerics: >=0.28.0,<0.29.0
   
   :depends bioconductor-biocparallel: >=1.16.0,<1.17.0
   
   :depends bioconductor-biostrings: >=2.50.0,<2.51.0
   
   :depends bioconductor-genomeinfodb: >=1.18.0,<1.19.0
   
   :depends bioconductor-genomicalignments: >=1.18.0,<1.19.0
   
   :depends bioconductor-genomicfeatures: >=1.34.0,<1.35.0
   
   :depends bioconductor-genomicranges: >=1.34.0,<1.35.0
   
   :depends bioconductor-ggbio: >=1.30.0,<1.31.0
   
   :depends bioconductor-rsamtools: >=1.34.0,<1.35.0
   
   :depends bioconductor-s4vectors: >=0.20.0,<0.21.0
   
   :depends bioconductor-shortread: >=1.40.0,<1.41.0
   
   :depends bioconductor-singlecellexperiment: >=1.4.0,<1.5.0
   
   :depends bioconductor-summarizedexperiment: >=1.12.0,<1.13.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-data.table: 
   
   :depends r-ggplot2: 
   
   :depends r-ggthemes: 
   
   :depends r-plyr: 
   
   :depends r-refgenome: 
   
   :depends r-scales: 
   
   :depends r-stringdist: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-scruff

   and update with::

      conda update bioconductor-scruff

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-scruff:<tag>

   (see `bioconductor-scruff/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-scruff| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scruff.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-scruff| image:: https://quay.io/repository/biocontainers/bioconductor-scruff/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scruff
.. _`bioconductor-scruff/tags`: https://quay.io/repository/biocontainers/bioconductor-scruff?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scruff/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scruff/README.html