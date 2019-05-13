:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pathprint'
.. highlight: bash

bioconductor-pathprint
======================

.. conda:recipe:: bioconductor-pathprint
   :replaces_section_title:

   Algorithms to convert a gene expression array provided as an expression table or a GEO reference to a \'pathway fingerprint\'\, a vector of discrete ternary scores representing high \(1\)\, low\(\-1\) or insignificant \(0\) expression in a suite of pathways.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/pathprint.html
   :license: GPL
   :recipe: /`bioconductor-pathprint <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pathprint>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pathprint/meta.yaml>`_

   


.. conda:package:: bioconductor-pathprint

   |downloads_bioconductor-pathprint| |docker_bioconductor-pathprint|

   :versions: 1.12.0-0, 1.10.4-0, 1.6.0-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-pathprint

   and update with::

      conda update bioconductor-pathprint

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pathprint:<tag>

   (see `bioconductor-pathprint/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pathprint| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pathprint.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pathprint
   :alt:   (downloads)
.. |docker_bioconductor-pathprint| image:: https://quay.io/repository/biocontainers/bioconductor-pathprint/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pathprint
.. _`bioconductor-pathprint/tags`: https://quay.io/repository/biocontainers/bioconductor-pathprint?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pathprint/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pathprint/README.html