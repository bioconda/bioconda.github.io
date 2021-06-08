:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-coseq'
.. highlight: bash

bioconductor-coseq
==================

.. conda:recipe:: bioconductor-coseq
   :replaces_section_title:
   :noindex:

   Co\-Expression Analysis of Sequencing Data

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/coseq.html
   :license: GPL-3
   :recipe: /`bioconductor-coseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-coseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-coseq/meta.yaml>`_

   Co\-expression analysis for expression profiles arising from high\-throughput sequencing data. Feature \(e.g.\, gene\) profiles are clustered using adapted transformations and mixture models or a K\-means algorithm\, and model selection criteria \(to choose an appropriate number of clusters\) are provided.


.. conda:package:: bioconductor-coseq

   |downloads_bioconductor-coseq| |docker_bioconductor-coseq|

   :versions:
      
      

      ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.6.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.26.0,<1.27.0``
   :depends bioconductor-deseq2: ``>=1.32.0,<1.33.0``
   :depends bioconductor-edger: ``>=3.34.0,<3.35.0``
   :depends bioconductor-htsfilter: ``>=1.32.0,<1.33.0``
   :depends bioconductor-s4vectors: ``>=0.30.0,<0.31.0``
   :depends bioconductor-summarizedexperiment: ``>=1.22.0,<1.23.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-capushe: 
   :depends r-compositions: 
   :depends r-corrplot: 
   :depends r-e1071: 
   :depends r-ggplot2: 
   :depends r-htscluster: 
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