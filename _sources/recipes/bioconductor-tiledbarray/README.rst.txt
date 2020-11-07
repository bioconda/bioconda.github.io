:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tiledbarray'
.. highlight: bash

bioconductor-tiledbarray
========================

.. conda:recipe:: bioconductor-tiledbarray
   :replaces_section_title:
   :noindex:

   Using TileDB as a DelayedArray Backend

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/TileDBArray.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-tiledbarray <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tiledbarray>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tiledbarray/meta.yaml>`_

   Implements a DelayedArray backend for reading and writing dense or sparse arrays in the TileDB format. The resulting TileDBArrays are compatible with all Bioconductor pipelines that can accept DelayedArray instances.


.. conda:package:: bioconductor-tiledbarray

   |downloads_bioconductor-tiledbarray| |docker_bioconductor-tiledbarray|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-delayedarray: ``>=0.16.0,<0.17.0``
   :depends bioconductor-s4vectors: ``>=0.28.0,<0.29.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=7.5.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-rcpp: 
   :depends r-tiledb: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-tiledbarray

   and update with::

      conda update bioconductor-tiledbarray

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tiledbarray:<tag>

   (see `bioconductor-tiledbarray/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tiledbarray| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tiledbarray.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tiledbarray
   :alt:   (downloads)
.. |docker_bioconductor-tiledbarray| image:: https://quay.io/repository/biocontainers/bioconductor-tiledbarray/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tiledbarray
.. _`bioconductor-tiledbarray/tags`: https://quay.io/repository/biocontainers/bioconductor-tiledbarray?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tiledbarray/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tiledbarray/README.html