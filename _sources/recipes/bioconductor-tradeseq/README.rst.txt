:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tradeseq'
.. highlight: bash

bioconductor-tradeseq
=====================

.. conda:recipe:: bioconductor-tradeseq
   :replaces_section_title:
   :noindex:

   trajectory\-based differential expression analysis for sequencing data

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/tradeSeq.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-tradeseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tradeseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tradeseq/meta.yaml>`_

   tradeSeq provides a flexible method for fitting regression models that can be used to find genes that are differentially expressed along one or multiple lineages in a trajectory. Based on the fitted models\, it uses a variety of tests suited to answer different questions of interest\, e.g. the discovery of genes for which expression is associated with pseudotime\, or which are differentially expressed \(in a specific region\) along the trajectory. It fits a negative binomial generalized additive model \(GAM\) for each gene\, and performs inference on the parameters of the GAM.


.. conda:package:: bioconductor-tradeseq

   |downloads_bioconductor-tradeseq| |docker_bioconductor-tradeseq|

   :versions:
      
      

      ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.52.0,<2.53.0``
   :depends bioconductor-biocparallel: ``>=1.26.0,<1.27.0``
   :depends bioconductor-edger: ``>=3.34.0,<3.35.0``
   :depends bioconductor-monocle: ``>=2.20.0,<2.21.0``
   :depends bioconductor-s4vectors: ``>=0.30.0,<0.31.0``
   :depends bioconductor-singlecellexperiment: ``>=1.14.0,<1.15.0``
   :depends bioconductor-slingshot: ``>=2.0.0,<2.1.0``
   :depends bioconductor-summarizedexperiment: ``>=1.22.0,<1.23.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-ggplot2: 
   :depends r-igraph: 
   :depends r-magrittr: 
   :depends r-matrix: 
   :depends r-matrixstats: 
   :depends r-mgcv: 
   :depends r-pbapply: 
   :depends r-princurve: 
   :depends r-rcolorbrewer: 
   :depends r-tibble: 
   :depends r-viridis: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-tradeseq

   and update with::

      conda update bioconductor-tradeseq

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tradeseq:<tag>

   (see `bioconductor-tradeseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tradeseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tradeseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tradeseq
   :alt:   (downloads)
.. |docker_bioconductor-tradeseq| image:: https://quay.io/repository/biocontainers/bioconductor-tradeseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tradeseq
.. _`bioconductor-tradeseq/tags`: https://quay.io/repository/biocontainers/bioconductor-tradeseq?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tradeseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tradeseq/README.html