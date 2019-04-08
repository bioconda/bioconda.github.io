:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-simpleaffy'
.. highlight: bash

bioconductor-simpleaffy
=======================

.. conda:recipe:: bioconductor-simpleaffy
   :replaces_section_title:

   Provides high level functions for reading Affy .CEL files\, phenotypic data\, and then computing simple things with it\, such as t\-tests\, fold changes and the like. Makes heavy use of the affy library. Also has some basic scatter plot functions and mechanisms for generating high resolution journal figures...

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/simpleaffy.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-simpleaffy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-simpleaffy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-simpleaffy/meta.yaml>`_
   :links: biotools: :biotools:`simpleaffy`, doi: :doi:`10.1093/bioinformatics/bti605`

   


.. conda:package:: bioconductor-simpleaffy

   |downloads_bioconductor-simpleaffy| |docker_bioconductor-simpleaffy|

   :versions: 2.58.0-0, 2.56.0-0, 2.54.0-0, 2.52.0-0
   
   :depends bioconductor-affy: >=1.60.0,<1.61.0
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   :depends bioconductor-biocgenerics: >=0.28.0,<0.29.0
   :depends bioconductor-gcrma: >=2.54.0,<2.55.0
   :depends bioconductor-genefilter: >=1.64.0,<1.65.0
   :depends libgcc-ng: >=7.3.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-simpleaffy

   and update with::

      conda update bioconductor-simpleaffy

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-simpleaffy:<tag>

   (see `bioconductor-simpleaffy/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-simpleaffy| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-simpleaffy.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-simpleaffy| image:: https://quay.io/repository/biocontainers/bioconductor-simpleaffy/status
   :target: https://quay.io/repository/biocontainers/bioconductor-simpleaffy
.. _`bioconductor-simpleaffy/tags`: https://quay.io/repository/biocontainers/bioconductor-simpleaffy?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-simpleaffy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-simpleaffy/README.html