:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-snapcgh'
.. highlight: bash

bioconductor-snapcgh
====================

.. conda:recipe:: bioconductor-snapcgh
   :replaces_section_title:
   :noindex:

   Segmentation\, normalisation and processing of aCGH data

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/snapCGH.html
   :license: GPL
   :recipe: /`bioconductor-snapcgh <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-snapcgh>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-snapcgh/meta.yaml>`_

   Methods for segmenting\, normalising and processing aCGH data\; including plotting functions for visualising raw and segmented data for individual and multiple arrays.


.. conda:package:: bioconductor-snapcgh

   |downloads_bioconductor-snapcgh| |docker_bioconductor-snapcgh|

   :versions:
      
      

      ``1.58.0-0``,  ``1.56.0-0``,  ``1.54.0-1``

      

   
   :depends bioconductor-acgh: ``>=1.66.0,<1.67.0``
   :depends bioconductor-dnacopy: ``>=1.62.0,<1.63.0``
   :depends bioconductor-glad: ``>=2.52.0,<2.53.0``
   :depends bioconductor-limma: ``>=3.44.0,<3.45.0``
   :depends bioconductor-tilingarray: ``>=1.66.0,<1.67.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=7.3.0``
   :depends liblapack: ``>=3.8.0,<3.9.0a0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-cluster: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-snapcgh

   and update with::

      conda update bioconductor-snapcgh

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-snapcgh:<tag>

   (see `bioconductor-snapcgh/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-snapcgh| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-snapcgh.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-snapcgh
   :alt:   (downloads)
.. |docker_bioconductor-snapcgh| image:: https://quay.io/repository/biocontainers/bioconductor-snapcgh/status
   :target: https://quay.io/repository/biocontainers/bioconductor-snapcgh
.. _`bioconductor-snapcgh/tags`: https://quay.io/repository/biocontainers/bioconductor-snapcgh?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-snapcgh/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-snapcgh/README.html