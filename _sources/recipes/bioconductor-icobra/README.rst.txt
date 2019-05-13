:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-icobra'
.. highlight: bash

bioconductor-icobra
===================

.. conda:recipe:: bioconductor-icobra
   :replaces_section_title:

   This package provides functions for calculation and visualization of performance metrics for evaluation of ranking and binary classification \(assignment\) methods. It also contains a shiny application for interactive exploration of results.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/iCOBRA.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-icobra <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-icobra>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-icobra/meta.yaml>`_
   :links: biotools: :biotools:`icobra`

   


.. conda:package:: bioconductor-icobra

   |downloads_bioconductor-icobra| |docker_bioconductor-icobra|

   :versions: 1.12.0-0, 1.10.0-0, 1.8.0-0, 1.6.0-0
   
   :depends bioconductor-limma: >=3.40.0,<3.41.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-dplyr: 
   :depends r-dt: 
   :depends r-ggplot2: >=2.0.0
   :depends r-reshape2: 
   :depends r-rocr: 
   :depends r-scales: 
   :depends r-shiny: >=0.9.1.9008
   :depends r-shinybs: 
   :depends r-shinydashboard: 
   :depends r-upsetr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-icobra

   and update with::

      conda update bioconductor-icobra

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-icobra:<tag>

   (see `bioconductor-icobra/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-icobra| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-icobra.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-icobra
   :alt:   (downloads)
.. |docker_bioconductor-icobra| image:: https://quay.io/repository/biocontainers/bioconductor-icobra/status
   :target: https://quay.io/repository/biocontainers/bioconductor-icobra
.. _`bioconductor-icobra/tags`: https://quay.io/repository/biocontainers/bioconductor-icobra?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-icobra/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-icobra/README.html