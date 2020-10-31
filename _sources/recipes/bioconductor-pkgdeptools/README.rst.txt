:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pkgdeptools'
.. highlight: bash

bioconductor-pkgdeptools
========================

.. conda:recipe:: bioconductor-pkgdeptools
   :replaces_section_title:
   :noindex:

   Package Dependency Tools

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/pkgDepTools.html
   :license: GPL-2
   :recipe: /`bioconductor-pkgdeptools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pkgdeptools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pkgdeptools/meta.yaml>`_
   :links: biotools: :biotools:`pkgdeptools`, doi: :doi:`10.1038/nmeth.3252`

   This package provides tools for computing and analyzing dependency relationships among R packages.  It provides tools for building a graph\-based representation of the dependencies among all packages in a list of CRAN\-style package repositories.  There are also utilities for computing installation order of a given package.  If the RCurl package is available\, an estimate of the download size required to install a given package and its dependencies can be obtained.


.. conda:package:: bioconductor-pkgdeptools

   |downloads_bioconductor-pkgdeptools| |docker_bioconductor-pkgdeptools|

   :versions:
      
      

      ``1.56.0-0``,  ``1.54.0-0``,  ``1.52.0-0``,  ``1.50.0-1``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.42.0-0``

      

   
   :depends bioconductor-graph: ``>=1.68.0,<1.69.0``
   :depends bioconductor-rbgl: ``>=1.66.0,<1.67.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-pkgdeptools

   and update with::

      conda update bioconductor-pkgdeptools

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pkgdeptools:<tag>

   (see `bioconductor-pkgdeptools/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pkgdeptools| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pkgdeptools.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pkgdeptools
   :alt:   (downloads)
.. |docker_bioconductor-pkgdeptools| image:: https://quay.io/repository/biocontainers/bioconductor-pkgdeptools/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pkgdeptools
.. _`bioconductor-pkgdeptools/tags`: https://quay.io/repository/biocontainers/bioconductor-pkgdeptools?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pkgdeptools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pkgdeptools/README.html