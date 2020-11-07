:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-branchpointer'
.. highlight: bash

bioconductor-branchpointer
==========================

.. conda:recipe:: bioconductor-branchpointer
   :replaces_section_title:
   :noindex:

   Prediction of intronic splicing branchpoints

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/branchpointer.html
   :license: BSD_3_clause + file LICENSE
   :recipe: /`bioconductor-branchpointer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-branchpointer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-branchpointer/meta.yaml>`_

   Predicts branchpoint probability for sites in intronic branchpoint windows. Queries can be supplied as intronic regions\; or to evaluate the effects of mutations\, SNPs.


.. conda:package:: bioconductor-branchpointer

   |downloads_bioconductor-branchpointer| |docker_bioconductor-branchpointer|

   :versions:
      
      

      ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.8.0-0``

      

   
   :depends bioconductor-biomart: ``>=2.46.0,<2.47.0``
   :depends bioconductor-biostrings: ``>=2.58.0,<2.59.0``
   :depends bioconductor-bsgenome.hsapiens.ucsc.hg38: ``>=1.4.0,<1.5.0``
   :depends bioconductor-genomeinfodb: ``>=1.26.0,<1.27.0``
   :depends bioconductor-genomicranges: ``>=1.42.0,<1.43.0``
   :depends bioconductor-iranges: ``>=2.24.0,<2.25.0``
   :depends bioconductor-rtracklayer: ``>=1.50.0,<1.51.0``
   :depends bioconductor-s4vectors: ``>=0.28.0,<0.29.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-caret: 
   :depends r-cowplot: 
   :depends r-data.table: 
   :depends r-gbm: 
   :depends r-ggplot2: 
   :depends r-kernlab: 
   :depends r-plyr: 
   :depends r-stringr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-branchpointer

   and update with::

      conda update bioconductor-branchpointer

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-branchpointer:<tag>

   (see `bioconductor-branchpointer/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-branchpointer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-branchpointer.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-branchpointer
   :alt:   (downloads)
.. |docker_bioconductor-branchpointer| image:: https://quay.io/repository/biocontainers/bioconductor-branchpointer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-branchpointer
.. _`bioconductor-branchpointer/tags`: https://quay.io/repository/biocontainers/bioconductor-branchpointer?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-branchpointer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-branchpointer/README.html