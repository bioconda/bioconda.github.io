.. title:: Package Recipe 'bioconductor-casper'
.. highlight: bash


bioconductor-casper
===================

.. conda:recipe:: bioconductor-casper
   :replaces_section_title:

   Infer alternative splicing from paired\-end RNA\-seq data. The model is based on counting paths across exons\, rather than pairwise exon connections\, and estimates the fragment size and start distributions non\-parametrically\, which improves estimation precision.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/casper.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-casper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-casper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-casper/meta.yaml>`_
   :links: biotools: :biotools:`casper`

   


.. conda:package:: bioconductor-casper

   |downloads_bioconductor-casper| |docker_bioconductor-casper|

   :versions: 2.16.0, 2.14.0, 2.12.0, 2.10.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-ebarrays` >=2.46.0,<2.47.0 :conda:package:`bioconductor-gaga` >=2.28.0,<2.29.0 :conda:package:`bioconductor-genomeinfodb` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicfeatures` >=1.34.0,<1.35.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-limma` >=3.38.0,<3.39.0 :conda:package:`bioconductor-rsamtools` >=1.34.0,<1.35.0 :conda:package:`bioconductor-rtracklayer` >=1.42.0,<1.43.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`libstdcxx-ng` >=7.3.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-coda`  :conda:package:`r-gtools`  :conda:package:`r-mgcv`  :conda:package:`r-sqldf`  :conda:package:`r-survival`  :conda:package:`r-vgam`  

   :required~by: |required_by_bioconductor-casper|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-casper

   and update with::

      conda update bioconductor-casper

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-casper


.. |required_by_bioconductor-casper| conda:required_by:: bioconductor-casper
.. |downloads_bioconductor-casper| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-casper.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-casper| image:: https://quay.io/repository/biocontainers/bioconductor-casper/status
   :target: https://quay.io/repository/biocontainers/bioconductor-casper







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-casper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-casper/README.html

