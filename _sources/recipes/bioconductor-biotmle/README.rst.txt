:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biotmle'
.. highlight: bash

bioconductor-biotmle
====================

.. conda:recipe:: bioconductor-biotmle
   :replaces_section_title:
   :noindex:

   Targeted Learning with Moderated Statistics for Biomarker Discovery

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/biotmle.html
   :license: file LICENSE
   :recipe: /`bioconductor-biotmle <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biotmle>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biotmle/meta.yaml>`_

   Tools for differential expression biomarker discovery based on microarray and next\-generation sequencing data that leverage efficient semiparametric estimators of the average treatment effect for variable importance analysis. Estimation and inference of the \(marginal\) average treatment effects of potential biomarkers are computed by targeted minimum loss\-based estimation\, with joint\, stable inference constructed across all biomarkers using a generalization of moderated statistics for use with the estimated efficient influence function. The procedure accommodates the use of ensemble machine learning for the estimation of nuisance functions.


.. conda:package:: bioconductor-biotmle

   |downloads_bioconductor-biotmle| |docker_bioconductor-biotmle|

   :versions:
      
      

      ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.6.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.38.0,<0.39.0``
   :depends bioconductor-biocparallel: ``>=1.26.0,<1.27.0``
   :depends bioconductor-limma: ``>=3.48.0,<3.49.0``
   :depends bioconductor-s4vectors: ``>=0.30.0,<0.31.0``
   :depends bioconductor-summarizedexperiment: ``>=1.22.0,<1.23.0``
   :depends r-assertthat: 
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-dofuture: 
   :depends r-dplyr: 
   :depends r-drtmle: ``>=1.0.4``
   :depends r-future: 
   :depends r-ggplot2: 
   :depends r-ggsci: 
   :depends r-superheat: 
   :depends r-tibble: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-biotmle

   and update with::

      conda update bioconductor-biotmle

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-biotmle:<tag>

   (see `bioconductor-biotmle/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-biotmle| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biotmle.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-biotmle
   :alt:   (downloads)
.. |docker_bioconductor-biotmle| image:: https://quay.io/repository/biocontainers/bioconductor-biotmle/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biotmle
.. _`bioconductor-biotmle/tags`: https://quay.io/repository/biocontainers/bioconductor-biotmle?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biotmle/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biotmle/README.html