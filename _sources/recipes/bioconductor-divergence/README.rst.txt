:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-divergence'
.. highlight: bash

bioconductor-divergence
=======================

.. conda:recipe:: bioconductor-divergence
   :replaces_section_title:

   Divergence\: Functionality for assessing omics data by divergence with respect to a baseline

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/divergence.html
   :license: GPL-2
   :recipe: /`bioconductor-divergence <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-divergence>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-divergence/meta.yaml>`_

   This package provides functionality for performing divergence analysis as presented in Dinalankara et al\, \"Digitizing omics profiles by divergence from a baseline\"\, PANS 2018. This allows the user to simplify high dimensional omics data into a binary or ternary format which encapsulates how the data is divergent from a specified baseline group with the same univariate or multivariate features.


.. conda:package:: bioconductor-divergence

   |downloads_bioconductor-divergence| |docker_bioconductor-divergence|

   :versions: 1.2.0-0, 1.0.0-1
   
   :depends bioconductor-summarizedexperiment: >=1.16.0,<1.17.0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-divergence

   and update with::

      conda update bioconductor-divergence

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-divergence:<tag>

   (see `bioconductor-divergence/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-divergence| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-divergence.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-divergence
   :alt:   (downloads)
.. |docker_bioconductor-divergence| image:: https://quay.io/repository/biocontainers/bioconductor-divergence/status
   :target: https://quay.io/repository/biocontainers/bioconductor-divergence
.. _`bioconductor-divergence/tags`: https://quay.io/repository/biocontainers/bioconductor-divergence?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-divergence/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-divergence/README.html