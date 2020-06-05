:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rhdf5lib'
.. highlight: bash

bioconductor-rhdf5lib
=====================

.. conda:recipe:: bioconductor-rhdf5lib
   :replaces_section_title:
   :noindex:

   hdf5 library as an R package

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/Rhdf5lib.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-rhdf5lib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rhdf5lib>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rhdf5lib/meta.yaml>`_

   Provides C and C\+\+ hdf5 libraries.


.. conda:package:: bioconductor-rhdf5lib

   |downloads_bioconductor-rhdf5lib| |docker_bioconductor-rhdf5lib|

   :versions:
      
      

      ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.3-0``,  ``1.4.2-3``,  ``1.4.2-2``,  ``1.2.1-0``,  ``1.0.0-0``

      

   
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=7.3.0``
   :depends liblapack: ``>=3.8.0,<3.9.0a0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rhdf5lib

   and update with::

      conda update bioconductor-rhdf5lib

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rhdf5lib:<tag>

   (see `bioconductor-rhdf5lib/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rhdf5lib| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rhdf5lib.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rhdf5lib
   :alt:   (downloads)
.. |docker_bioconductor-rhdf5lib| image:: https://quay.io/repository/biocontainers/bioconductor-rhdf5lib/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rhdf5lib
.. _`bioconductor-rhdf5lib/tags`: https://quay.io/repository/biocontainers/bioconductor-rhdf5lib?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rhdf5lib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rhdf5lib/README.html