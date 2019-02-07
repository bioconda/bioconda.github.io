.. title:: Package Recipe 'bioconductor-scmeth'
.. highlight: bash


bioconductor-scmeth
===================

.. conda:recipe:: bioconductor-scmeth
   :replaces_section_title:

   Functions to analyze methylation data can be found here. Some functions are relevant for single cell methylation data but most other functions can be used for any methylation data. Highlight of this workflow is the comprehensive quality control report.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/scmeth.html
   :license: GPL-2
   :recipe: /`bioconductor-scmeth <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scmeth>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scmeth/meta.yaml>`_

   


.. conda:package:: bioconductor-scmeth

   |downloads_bioconductor-scmeth| |docker_bioconductor-scmeth|

   :versions: 1.2.1

   :depends: :conda:package:`bioconductor-annotationhub` >=2.14.0,<2.15.0 :conda:package:`bioconductor-annotatr` >=1.8.0,<1.9.0 :conda:package:`bioconductor-biostrings` >=2.50.0,<2.51.0 :conda:package:`bioconductor-bsgenome` >=1.50.0,<1.51.0 :conda:package:`bioconductor-bsseq` >=1.18.0,<1.19.0 :conda:package:`bioconductor-delayedarray` >=0.8.0,<0.9.0 :conda:package:`bioconductor-genomeinfodb` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-hdf5array` >=1.10.0,<1.11.0 :conda:package:`bioconductor-summarizedexperiment` >=1.12.0,<1.13.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-dt`  :conda:package:`r-knitr`  :conda:package:`r-reshape2`  :conda:package:`r-rmarkdown`  

   :required~by: |required_by_bioconductor-scmeth|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-scmeth

   and update with::

      conda update bioconductor-scmeth

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-scmeth


.. |required_by_bioconductor-scmeth| conda:required_by:: bioconductor-scmeth
.. |downloads_bioconductor-scmeth| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scmeth.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-scmeth| image:: https://quay.io/repository/biocontainers/bioconductor-scmeth/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scmeth







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scmeth/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scmeth/README.html

