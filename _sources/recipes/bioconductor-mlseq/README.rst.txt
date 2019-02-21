:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mlseq'
.. highlight: bash

bioconductor-mlseq
==================

.. conda:recipe:: bioconductor-mlseq
   :replaces_section_title:

   This package applies several machine learning methods\, including SVM\, bagSVM\, Random Forest and CART to RNA\-Seq data.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/MLSeq.html
   :license: GPL(>=2)
   :recipe: /`bioconductor-mlseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mlseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mlseq/meta.yaml>`_
   :links: biotools: :biotools:`mlseq`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-mlseq

   |downloads_bioconductor-mlseq| |docker_bioconductor-mlseq|

   :versions: 2.0.0-0, 1.20.3-0, 1.18.0-0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   
   :depends bioconductor-deseq2: >=1.22.0,<1.23.0
   
   :depends bioconductor-edger: >=3.24.0,<3.25.0
   
   :depends bioconductor-limma: >=3.38.0,<3.39.0
   
   :depends bioconductor-sseq: >=1.20.0,<1.21.0
   
   :depends bioconductor-summarizedexperiment: >=1.12.0,<1.13.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-caret: 
   
   :depends r-foreach: 
   
   :depends r-ggplot2: 
   
   :depends r-plyr: 
   
   :depends r-xtable: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mlseq

   and update with::

      conda update bioconductor-mlseq

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mlseq:<tag>

   (see `bioconductor-mlseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mlseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mlseq.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-mlseq| image:: https://quay.io/repository/biocontainers/bioconductor-mlseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mlseq
.. _`bioconductor-mlseq/tags`: https://quay.io/repository/biocontainers/bioconductor-mlseq?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mlseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mlseq/README.html