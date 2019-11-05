:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-coseq'
.. highlight: bash

bioconductor-coseq
==================

.. conda:recipe:: bioconductor-coseq
   :replaces_section_title:

   Co\-expression analysis for expression profiles arising from high\-throughput sequencing data. Feature \(e.g.\, gene\) profiles are clustered using adapted transformations and mixture models or a K\-means algorithm\, and model selection criteria \(to choose an appropriate number of clusters\) are provided.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/coseq.html
   :license: GPL (>=3)
   :recipe: /`bioconductor-coseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-coseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-coseq/meta.yaml>`_

   


.. conda:package:: bioconductor-coseq

   |downloads_bioconductor-coseq| |docker_bioconductor-coseq|

   :versions: 1.10.0-0, 1.8.0-1, 1.6.0-0
   
   :depends bioconductor-biocparallel: >=1.20.0,<1.21.0
   :depends bioconductor-deseq2: >=1.26.0,<1.27.0
   :depends bioconductor-edger: >=3.28.0,<3.29.0
   :depends bioconductor-htsfilter: >=1.26.0,<1.27.0
   :depends bioconductor-s4vectors: >=0.24.0,<0.25.0
   :depends bioconductor-summarizedexperiment: >=1.16.0,<1.17.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-capushe: 
   :depends r-compositions: 
   :depends r-corrplot: 
   :depends r-e1071: 
   :depends r-ggplot2: >=2.1.0
   :depends r-htscluster: >=2.0.8
   :depends r-mvtnorm: 
   :depends r-rmixmod: 
   :depends r-scales: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-coseq

   and update with::

      conda update bioconductor-coseq

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-coseq:<tag>

   (see `bioconductor-coseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-coseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-coseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-coseq
   :alt:   (downloads)
.. |docker_bioconductor-coseq| image:: https://quay.io/repository/biocontainers/bioconductor-coseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-coseq
.. _`bioconductor-coseq/tags`: https://quay.io/repository/biocontainers/bioconductor-coseq?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-coseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-coseq/README.html