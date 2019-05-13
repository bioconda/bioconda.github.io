:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bcrank'
.. highlight: bash

bioconductor-bcrank
===================

.. conda:recipe:: bioconductor-bcrank
   :replaces_section_title:

   Functions and classes for de novo prediction of transcription factor binding consensus by heuristic search

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/BCRANK.html
   :license: GPL-2
   :recipe: /`bioconductor-bcrank <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bcrank>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bcrank/meta.yaml>`_
   :links: biotools: :biotools:`bcrank`, doi: :doi:`10.1093/nar/gkp381`

   


.. conda:package:: bioconductor-bcrank

   |downloads_bioconductor-bcrank| |docker_bioconductor-bcrank|

   :versions: 1.44.0-0, 1.42.0-0, 1.40.0-0, 1.38.0-0
   
   :depends bioconductor-biostrings: >=2.50.0,<2.51.0
   :depends libgcc-ng: >=7.3.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-bcrank

   and update with::

      conda update bioconductor-bcrank

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bcrank:<tag>

   (see `bioconductor-bcrank/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bcrank| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bcrank.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bcrank
   :alt:   (downloads)
.. |docker_bioconductor-bcrank| image:: https://quay.io/repository/biocontainers/bioconductor-bcrank/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bcrank
.. _`bioconductor-bcrank/tags`: https://quay.io/repository/biocontainers/bioconductor-bcrank?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bcrank/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bcrank/README.html