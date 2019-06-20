:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-smap'
.. highlight: bash

bioconductor-smap
=================

.. conda:recipe:: bioconductor-smap
   :replaces_section_title:

   Functions and classes for DNA copy number profiling of array\-CGH data

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/SMAP.html
   :license: GPL-2
   :recipe: /`bioconductor-smap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-smap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-smap/meta.yaml>`_
   :links: biotools: :biotools:`smap`, doi: :doi:`10.1093/bioinformatics/btn003`

   


.. conda:package:: bioconductor-smap

   |downloads_bioconductor-smap| |docker_bioconductor-smap|

   :versions: 1.48.0-0, 1.46.0-0, 1.44.0-0, 1.42.0-0, 1.40.0-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-smap

   and update with::

      conda update bioconductor-smap

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-smap:<tag>

   (see `bioconductor-smap/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-smap| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-smap.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-smap
   :alt:   (downloads)
.. |docker_bioconductor-smap| image:: https://quay.io/repository/biocontainers/bioconductor-smap/status
   :target: https://quay.io/repository/biocontainers/bioconductor-smap
.. _`bioconductor-smap/tags`: https://quay.io/repository/biocontainers/bioconductor-smap?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-smap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-smap/README.html