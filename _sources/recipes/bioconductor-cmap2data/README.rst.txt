:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cmap2data'
.. highlight: bash

bioconductor-cmap2data
======================

.. conda:recipe:: bioconductor-cmap2data
   :replaces_section_title:

   Data package which provides default drug profiles for the DrugVsDisease package as well as associated gene lists and data clusters used by the DrugVsDisease package.

   :homepage: https://bioconductor.org/packages/3.9/data/experiment/html/cMap2data.html
   :license: GPL-3
   :recipe: /`bioconductor-cmap2data <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cmap2data>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cmap2data/meta.yaml>`_

   


.. conda:package:: bioconductor-cmap2data

   |downloads_bioconductor-cmap2data| |docker_bioconductor-cmap2data|

   :versions: 1.20.0-0, 1.18.0-0, 1.16.0-0, 1.14.0-0
   
   :depends curl: >=7.64.1,<8.0a0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cmap2data

   and update with::

      conda update bioconductor-cmap2data

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cmap2data:<tag>

   (see `bioconductor-cmap2data/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cmap2data| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cmap2data.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cmap2data
   :alt:   (downloads)
.. |docker_bioconductor-cmap2data| image:: https://quay.io/repository/biocontainers/bioconductor-cmap2data/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cmap2data
.. _`bioconductor-cmap2data/tags`: https://quay.io/repository/biocontainers/bioconductor-cmap2data?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cmap2data/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cmap2data/README.html