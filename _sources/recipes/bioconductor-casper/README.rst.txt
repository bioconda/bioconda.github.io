:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-casper'
.. highlight: bash

bioconductor-casper
===================

.. conda:recipe:: bioconductor-casper
   :replaces_section_title:

   Infer alternative splicing from paired\-end RNA\-seq data. The model is based on counting paths across exons\, rather than pairwise exon connections\, and estimates the fragment size and start distributions non\-parametrically\, which improves estimation precision.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/casper.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-casper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-casper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-casper/meta.yaml>`_
   :links: biotools: :biotools:`casper`

   


.. conda:package:: bioconductor-casper

   |downloads_bioconductor-casper| |docker_bioconductor-casper|

   :versions: 2.18.0-1, 2.16.0-0, 2.14.0-0, 2.12.0-0, 2.10.0-0
   
   :depends bioconductor-biobase: >=2.44.0,<2.45.0
   :depends bioconductor-biocgenerics: >=0.30.0,<0.31.0
   :depends bioconductor-ebarrays: >=2.48.0,<2.49.0
   :depends bioconductor-gaga: >=2.30.0,<2.31.0
   :depends bioconductor-genomeinfodb: >=1.20.0,<1.21.0
   :depends bioconductor-genomicfeatures: >=1.36.0,<1.37.0
   :depends bioconductor-genomicranges: >=1.36.0,<1.37.0
   :depends bioconductor-iranges: >=2.18.0,<2.19.0
   :depends bioconductor-limma: >=3.40.0,<3.41.0
   :depends bioconductor-rsamtools: >=2.0.0,<2.1.0
   :depends bioconductor-rtracklayer: >=1.44.0,<1.45.0
   :depends bioconductor-s4vectors: >=0.22.0,<0.23.0
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-coda: 
   :depends r-gtools: 
   :depends r-mgcv: 
   :depends r-sqldf: 
   :depends r-survival: 
   :depends r-vgam: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-casper

   and update with::

      conda update bioconductor-casper

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-casper:<tag>

   (see `bioconductor-casper/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-casper| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-casper.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-casper
   :alt:   (downloads)
.. |docker_bioconductor-casper| image:: https://quay.io/repository/biocontainers/bioconductor-casper/status
   :target: https://quay.io/repository/biocontainers/bioconductor-casper
.. _`bioconductor-casper/tags`: https://quay.io/repository/biocontainers/bioconductor-casper?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-casper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-casper/README.html