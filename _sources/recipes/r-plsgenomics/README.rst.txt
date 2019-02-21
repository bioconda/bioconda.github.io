:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-plsgenomics'
.. highlight: bash

r-plsgenomics
=============

.. conda:recipe:: r-plsgenomics
   :replaces_section_title:

   Routines for PLS\-based genomic analyses\, implementing PLS methods for classification with microarray data and prediction of transcription factor activities from combined ChIP\-chip analysis. The \>\=1.2\-1 versions include two new classification methods for microarray data\: GSIM and Ridge PLS. The \>\=1.3 versions includes a new classification method combining variable selection and compression in logistic regression context\: logit\-SPLS\; and an adaptive version of the sparse PLS.

   :homepage: https://CRAN.R-project.org/package=plsgenomics
   :license: GPL3 / GPL (>= 2)
   :recipe: /`r-plsgenomics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-plsgenomics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-plsgenomics/meta.yaml>`_

   


.. conda:package:: r-plsgenomics

   |downloads_r-plsgenomics| |docker_r-plsgenomics|

   :versions: 1.5_2-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-boot: 
   
   :depends r-fields: 
   
   :depends r-mass: 
   
   :depends r-plyr: 
   
   :depends r-reshape2: 
   
   :depends r-rhpcblasctl: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-plsgenomics

   and update with::

      conda update r-plsgenomics

   or use the docker container::

      docker pull quay.io/biocontainers/r-plsgenomics:<tag>

   (see `r-plsgenomics/tags`_ for valid values for ``<tag>``)


.. |downloads_r-plsgenomics| image:: https://img.shields.io/conda/dn/bioconda/r-plsgenomics.svg?style=flat
   :alt:   (downloads)
.. |docker_r-plsgenomics| image:: https://quay.io/repository/biocontainers/r-plsgenomics/status
   :target: https://quay.io/repository/biocontainers/r-plsgenomics
.. _`r-plsgenomics/tags`: https://quay.io/repository/biocontainers/r-plsgenomics?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-plsgenomics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-plsgenomics/README.html