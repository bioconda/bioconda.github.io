:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-simbindprofiles'
.. highlight: bash

bioconductor-simbindprofiles
============================

.. conda:recipe:: bioconductor-simbindprofiles
   :replaces_section_title:

   SimBindProfiles identifies common and unique binding regions in genome tiling array data. This package does not rely on peak calling\, but directly compares binding profiles processed on the same array platform. It implements a simple threshold approach\, thus allowing retrieval of commonly and differentially bound regions between datasets as well as events of compensation and increased binding.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/SimBindProfiles.html
   :license: GPL-3
   :recipe: /`bioconductor-simbindprofiles <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-simbindprofiles>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-simbindprofiles/meta.yaml>`_
   :links: biotools: :biotools:`simbindprofiles`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-simbindprofiles

   |downloads_bioconductor-simbindprofiles| |docker_bioconductor-simbindprofiles|

   :versions: 1.24.0-0, 1.22.0-1, 1.20.0-1, 1.20.0-0, 1.18.0-0, 1.16.0-0, 1.14.0-0
   
   :depends bioconductor-biobase: >=2.46.0,<2.47.0
   :depends bioconductor-limma: >=3.42.0,<3.43.0
   :depends bioconductor-ringo: >=1.50.0,<1.51.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-mclust: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-simbindprofiles

   and update with::

      conda update bioconductor-simbindprofiles

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-simbindprofiles:<tag>

   (see `bioconductor-simbindprofiles/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-simbindprofiles| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-simbindprofiles.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-simbindprofiles
   :alt:   (downloads)
.. |docker_bioconductor-simbindprofiles| image:: https://quay.io/repository/biocontainers/bioconductor-simbindprofiles/status
   :target: https://quay.io/repository/biocontainers/bioconductor-simbindprofiles
.. _`bioconductor-simbindprofiles/tags`: https://quay.io/repository/biocontainers/bioconductor-simbindprofiles?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-simbindprofiles/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-simbindprofiles/README.html