:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-erccdashboard'
.. highlight: bash

bioconductor-erccdashboard
==========================

.. conda:recipe:: bioconductor-erccdashboard
   :replaces_section_title:
   :noindex:

   Assess Differential Gene Expression Experiments with ERCC Controls

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/erccdashboard.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-erccdashboard <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-erccdashboard>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-erccdashboard/meta.yaml>`_

   Technical performance metrics for differential gene expression experiments using External RNA Controls Consortium \(ERCC\) spike\-in ratio mixtures.


.. conda:package:: bioconductor-erccdashboard

   |downloads_bioconductor-erccdashboard| |docker_bioconductor-erccdashboard|

   :versions:
      
      

      ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.1-0``,  ``1.16.0-0``

      

   
   :depends bioconductor-edger: ``>=3.32.0,<3.33.0``
   :depends bioconductor-limma: ``>=3.46.0,<3.47.0``
   :depends bioconductor-qvalue: ``>=2.22.0,<2.23.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-ggplot2: ``>=2.1.0``
   :depends r-gplots: 
   :depends r-gridextra: ``>=2.0.0``
   :depends r-gtools: 
   :depends r-locfit: 
   :depends r-mass: 
   :depends r-plyr: 
   :depends r-reshape2: 
   :depends r-rocr: 
   :depends r-scales: 
   :depends r-stringr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-erccdashboard

   and update with::

      conda update bioconductor-erccdashboard

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-erccdashboard:<tag>

   (see `bioconductor-erccdashboard/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-erccdashboard| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-erccdashboard.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-erccdashboard
   :alt:   (downloads)
.. |docker_bioconductor-erccdashboard| image:: https://quay.io/repository/biocontainers/bioconductor-erccdashboard/status
   :target: https://quay.io/repository/biocontainers/bioconductor-erccdashboard
.. _`bioconductor-erccdashboard/tags`: https://quay.io/repository/biocontainers/bioconductor-erccdashboard?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-erccdashboard/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-erccdashboard/README.html