:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-edger'
.. highlight: bash

bioconductor-edger
==================

.. conda:recipe:: bioconductor-edger
   :replaces_section_title:

   Differential expression analysis of RNA\-seq expression profiles with biological replication. Implements a range of statistical methodology based on the negative binomial distributions\, including empirical Bayes estimation\, exact tests\, generalized linear models and quasi\-likelihood tests. As well as RNA\-seq\, it be applied to differential signal analysis of other types of genomic data that produce counts\, including ChIP\-seq\, Bisulfite\-seq\, SAGE and CAGE.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/edgeR.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-edger <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-edger>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-edger/meta.yaml>`_
   :links: biotools: :biotools:`edger`

   


.. conda:package:: bioconductor-edger

   |downloads_bioconductor-edger| |docker_bioconductor-edger|

   :versions: 3.24.1-0, 3.22.5-0, 3.20.7-0, 3.20.1-0, 3.20.0-0, 3.18.1-0, 3.16.5-0, 3.14.0-1, 3.14.0-0, 3.12.1-1, 3.12.1-0, 3.12.0-0, 3.10.5-0
   
   :depends bioconductor-limma: >=3.38.0,<3.39.0
   
   :depends libcxx: >=4.0.1
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-locfit: 
   
   :depends r-rcpp: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-edger

   and update with::

      conda update bioconductor-edger

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-edger:<tag>

   (see `bioconductor-edger/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-edger| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-edger.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-edger| image:: https://quay.io/repository/biocontainers/bioconductor-edger/status
   :target: https://quay.io/repository/biocontainers/bioconductor-edger
.. _`bioconductor-edger/tags`: https://quay.io/repository/biocontainers/bioconductor-edger?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-edger/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-edger/README.html