:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-fastliquidassociation'
.. highlight: bash

bioconductor-fastliquidassociation
==================================

.. conda:recipe:: bioconductor-fastliquidassociation
   :replaces_section_title:

   functions for genome\-wide application of Liquid Association

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/fastLiquidAssociation.html
   :license: GPL-2
   :recipe: /`bioconductor-fastliquidassociation <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fastliquidassociation>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fastliquidassociation/meta.yaml>`_

   This package extends the function of the LiquidAssociation package for genome\-wide application. It integrates a screening method into the LA analysis to reduce the number of triplets to be examined for a high LA value and provides code for use in subsequent significance analyses.


.. conda:package:: bioconductor-fastliquidassociation

   |downloads_bioconductor-fastliquidassociation| |docker_bioconductor-fastliquidassociation|

   :versions: 1.22.0-0, 1.20.0-1, 1.18.0-0
   
   :depends bioconductor-impute: >=1.60.0,<1.61.0
   :depends bioconductor-liquidassociation: >=1.40.0,<1.41.0
   :depends bioconductor-preprocesscore: >=1.48.0,<1.49.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-doparallel: 
   :depends r-hmisc: 
   :depends r-wgcna: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-fastliquidassociation

   and update with::

      conda update bioconductor-fastliquidassociation

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-fastliquidassociation:<tag>

   (see `bioconductor-fastliquidassociation/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-fastliquidassociation| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-fastliquidassociation.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-fastliquidassociation
   :alt:   (downloads)
.. |docker_bioconductor-fastliquidassociation| image:: https://quay.io/repository/biocontainers/bioconductor-fastliquidassociation/status
   :target: https://quay.io/repository/biocontainers/bioconductor-fastliquidassociation
.. _`bioconductor-fastliquidassociation/tags`: https://quay.io/repository/biocontainers/bioconductor-fastliquidassociation?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-fastliquidassociation/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-fastliquidassociation/README.html