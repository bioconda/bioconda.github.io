:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biobase'
.. highlight: bash

bioconductor-biobase
====================

.. conda:recipe:: bioconductor-biobase
   :replaces_section_title:

   Biobase\: Base functions for Bioconductor

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/Biobase.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-biobase <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biobase>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biobase/meta.yaml>`_
   :links: biotools: :biotools:`biobase`

   Functions that are needed by many other packages or which replace R functions.


.. conda:package:: bioconductor-biobase

   |downloads_bioconductor-biobase| |docker_bioconductor-biobase|

   :versions: 2.48.0-0, 2.46.0-0, 2.44.0-1, 2.42.0-1, 2.42.0-0, 2.40.0-1, 2.40.0-0, 2.38.0-1, 2.38.0-0, 2.36.2-0, 2.34.0-0, 2.32.0-0, 2.30.0-0
   
   :depends bioconductor-biocgenerics: >=0.34.0,<0.35.0
   :depends libblas: >=3.8.0,<4.0a0
   :depends libgcc-ng: >=7.3.0
   :depends liblapack: >=3.8.0,<3.9.0a0
   :depends r-base: >=4.0,<4.1.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-biobase

   and update with::

      conda update bioconductor-biobase

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-biobase:<tag>

   (see `bioconductor-biobase/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-biobase| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biobase.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-biobase
   :alt:   (downloads)
.. |docker_bioconductor-biobase| image:: https://quay.io/repository/biocontainers/bioconductor-biobase/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biobase
.. _`bioconductor-biobase/tags`: https://quay.io/repository/biocontainers/bioconductor-biobase?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biobase/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biobase/README.html