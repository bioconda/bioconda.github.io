:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gesper'
.. highlight: bash

bioconductor-gesper
===================

.. conda:recipe:: bioconductor-gesper
   :replaces_section_title:

   Estimates gene\-specific phenotypes from off\-target confounded RNAi screens. The phenotype of each siRNA is modeled based on on\-targeted and off\-targeted genes\, using a regularized linear regression model.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/gespeR.html
   :license: GPL-3
   :recipe: /`bioconductor-gesper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gesper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gesper/meta.yaml>`_

   


.. conda:package:: bioconductor-gesper

   |downloads_bioconductor-gesper| |docker_bioconductor-gesper|

   :versions: 1.14.0-0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   :depends bioconductor-biomart: >=2.38.0,<2.39.0
   :depends bioconductor-cellhts2: >=2.46.0,<2.47.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-doparallel: 
   :depends r-dplyr: 
   :depends r-foreach: 
   :depends r-ggplot2: 
   :depends r-glmnet: 
   :depends r-matrix: 
   :depends r-reshape2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-gesper

   and update with::

      conda update bioconductor-gesper

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gesper:<tag>

   (see `bioconductor-gesper/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gesper| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gesper.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gesper
   :alt:   (downloads)
.. |docker_bioconductor-gesper| image:: https://quay.io/repository/biocontainers/bioconductor-gesper/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gesper
.. _`bioconductor-gesper/tags`: https://quay.io/repository/biocontainers/bioconductor-gesper?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gesper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gesper/README.html