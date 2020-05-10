:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-asset'
.. highlight: bash

bioconductor-asset
==================

.. conda:recipe:: bioconductor-asset
   :replaces_section_title:

   An R package for subset\-based association analysis of heterogeneous traits and subtypes

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/ASSET.html
   :license: GPL-2 + file LICENSE
   :recipe: /`bioconductor-asset <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-asset>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-asset/meta.yaml>`_

   An R package for subset\-based analysis of heterogeneous traits and subtypes


.. conda:package:: bioconductor-asset

   |downloads_bioconductor-asset| |docker_bioconductor-asset|

   :versions: 2.6.0-0, 2.4.0-0, 2.2.0-1, 2.2.0-0, 2.0.0-0
   
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-mass: 
   :depends r-msm: 
   :depends r-rmeta: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-asset

   and update with::

      conda update bioconductor-asset

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-asset:<tag>

   (see `bioconductor-asset/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-asset| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-asset.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-asset
   :alt:   (downloads)
.. |docker_bioconductor-asset| image:: https://quay.io/repository/biocontainers/bioconductor-asset/status
   :target: https://quay.io/repository/biocontainers/bioconductor-asset
.. _`bioconductor-asset/tags`: https://quay.io/repository/biocontainers/bioconductor-asset?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-asset/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-asset/README.html