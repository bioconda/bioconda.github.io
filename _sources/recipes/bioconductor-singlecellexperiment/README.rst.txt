:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-singlecellexperiment'
.. highlight: bash

bioconductor-singlecellexperiment
=================================

.. conda:recipe:: bioconductor-singlecellexperiment
   :replaces_section_title:

   Defines a S4 class for storing data from single\-cell experiments. This includes specialized methods to store and retrieve spike\-in information\, dimensionality reduction coordinates and size factors for each cell\, along with the usual metadata for genes and libraries.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/SingleCellExperiment.html
   :license: GPL-3
   :recipe: /`bioconductor-singlecellexperiment <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-singlecellexperiment>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-singlecellexperiment/meta.yaml>`_

   


.. conda:package:: bioconductor-singlecellexperiment

   |downloads_bioconductor-singlecellexperiment| |docker_bioconductor-singlecellexperiment|

   :versions: 1.4.0-0, 1.2.0-0, 1.0.0-1, 1.0.0-0
   
   :depends bioconductor-biocgenerics: >=0.28.0,<0.29.0
   :depends bioconductor-s4vectors: >=0.20.0,<0.21.0
   :depends bioconductor-summarizedexperiment: >=1.12.0,<1.13.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-singlecellexperiment

   and update with::

      conda update bioconductor-singlecellexperiment

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-singlecellexperiment:<tag>

   (see `bioconductor-singlecellexperiment/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-singlecellexperiment| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-singlecellexperiment.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-singlecellexperiment| image:: https://quay.io/repository/biocontainers/bioconductor-singlecellexperiment/status
   :target: https://quay.io/repository/biocontainers/bioconductor-singlecellexperiment
.. _`bioconductor-singlecellexperiment/tags`: https://quay.io/repository/biocontainers/bioconductor-singlecellexperiment?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-singlecellexperiment/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-singlecellexperiment/README.html