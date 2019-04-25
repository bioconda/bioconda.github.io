:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rpx'
.. highlight: bash

bioconductor-rpx
================

.. conda:recipe:: bioconductor-rpx
   :replaces_section_title:

   The rpx package implements an interface to proteomics data submitted to the ProteomeXchange consortium.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/rpx.html
   :license: GPL-2
   :recipe: /`bioconductor-rpx <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rpx>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rpx/meta.yaml>`_
   :links: biotools: :biotools:`rpx`, doi: :doi:`10.1038/nbt.2839`

   


.. conda:package:: bioconductor-rpx

   |downloads_bioconductor-rpx| |docker_bioconductor-rpx|

   :versions: 1.18.1-0, 1.18.0-0, 1.16.0-0, 1.14.0-0, 1.12.1-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-rcurl: 
   :depends r-xml2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rpx

   and update with::

      conda update bioconductor-rpx

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rpx:<tag>

   (see `bioconductor-rpx/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rpx| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rpx.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-rpx| image:: https://quay.io/repository/biocontainers/bioconductor-rpx/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rpx
.. _`bioconductor-rpx/tags`: https://quay.io/repository/biocontainers/bioconductor-rpx?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rpx/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rpx/README.html