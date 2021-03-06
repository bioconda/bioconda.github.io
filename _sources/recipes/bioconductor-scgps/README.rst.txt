:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scgps'
.. highlight: bash

bioconductor-scgps
==================

.. conda:recipe:: bioconductor-scgps
   :replaces_section_title:
   :noindex:

   A complete analysis of single cell subpopulations\, from identifying subpopulations to analysing their relationship \(scGPS \= single cell Global Predictions of Subpopulation\)

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/scGPS.html
   :license: GPL-3
   :recipe: /`bioconductor-scgps <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scgps>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scgps/meta.yaml>`_

   The package implements two main algorithms to answer two key questions\: a SCORE \(Stable Clustering at Optimal REsolution\) to find subpopulations\, followed by scGPS to investigate the relationships between subpopulations.


.. conda:package:: bioconductor-scgps

   |downloads_bioconductor-scgps| |docker_bioconductor-scgps|

   :versions:
      
      

      ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-deseq2: ``>=1.32.0,<1.33.0``
   :depends bioconductor-singlecellexperiment: ``>=1.14.0,<1.15.0``
   :depends bioconductor-summarizedexperiment: ``>=1.22.0,<1.23.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-caret: ``>=6.0``
   :depends r-dplyr: 
   :depends r-dynamictreecut: 
   :depends r-fastcluster: 
   :depends r-ggplot2: ``>=2.2.1``
   :depends r-glmnet: ``>2.0``
   :depends r-locfit: 
   :depends r-rcpp: 
   :depends r-rcpparmadillo: 
   :depends r-rcppparallel: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-scgps

   and update with::

      conda update bioconductor-scgps

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-scgps:<tag>

   (see `bioconductor-scgps/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-scgps| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scgps.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scgps
   :alt:   (downloads)
.. |docker_bioconductor-scgps| image:: https://quay.io/repository/biocontainers/bioconductor-scgps/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scgps
.. _`bioconductor-scgps/tags`: https://quay.io/repository/biocontainers/bioconductor-scgps?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scgps/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scgps/README.html