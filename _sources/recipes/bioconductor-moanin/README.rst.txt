:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-moanin'
.. highlight: bash

bioconductor-moanin
===================

.. conda:recipe:: bioconductor-moanin
   :replaces_section_title:
   :noindex:

   An R Package for Time Course RNASeq Data Analysis

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/moanin.html
   :license: BSD 3-clause License + file LICENSE
   :recipe: /`bioconductor-moanin <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-moanin>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-moanin/meta.yaml>`_

   Simple and efficient workflow for time\-course gene expression data\, built on publictly available open\-source projects hosted on CRAN and bioconductor. moanin provides helper functions for all the steps required for analysing time\-course data using functional data analysis\: \(1\) functional modeling of the timecourse data\; \(2\) differential expression analysis\; \(3\) clustering\; \(4\) downstream analysis.


.. conda:package:: bioconductor-moanin

   |downloads_bioconductor-moanin| |docker_bioconductor-moanin|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-edger: ``>=3.34.0,<3.35.0``
   :depends bioconductor-limma: ``>=3.48.0,<3.49.0``
   :depends bioconductor-s4vectors: ``>=0.30.0,<0.31.0``
   :depends bioconductor-summarizedexperiment: ``>=1.22.0,<1.23.0``
   :depends bioconductor-topgo: ``>=2.44.0,<2.45.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-clusterr: 
   :depends r-mass: ``>=1.0.0``
   :depends r-matrixstats: 
   :depends r-nmi: 
   :depends r-reshape2: 
   :depends r-viridis: 
   :depends r-zoo: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-moanin

   and update with::

      conda update bioconductor-moanin

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-moanin:<tag>

   (see `bioconductor-moanin/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-moanin| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-moanin.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-moanin
   :alt:   (downloads)
.. |docker_bioconductor-moanin| image:: https://quay.io/repository/biocontainers/bioconductor-moanin/status
   :target: https://quay.io/repository/biocontainers/bioconductor-moanin
.. _`bioconductor-moanin/tags`: https://quay.io/repository/biocontainers/bioconductor-moanin?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-moanin/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-moanin/README.html