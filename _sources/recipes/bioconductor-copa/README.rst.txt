:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-copa'
.. highlight: bash

bioconductor-copa
=================

.. conda:recipe:: bioconductor-copa
   :replaces_section_title:
   :noindex:

   Functions to perform cancer outlier profile analysis.

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/copa.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-copa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-copa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-copa/meta.yaml>`_

   COPA is a method to find genes that undergo recurrent fusion in a given cancer type by finding pairs of genes that have mutually exclusive outlier profiles.


.. conda:package:: bioconductor-copa

   |downloads_bioconductor-copa| |docker_bioconductor-copa|

   :versions:
      
      

      ``1.58.0-1``,  ``1.58.0-0``,  ``1.56.0-0``,  ``1.54.0-0``,  ``1.52.0-1``,  ``1.50.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.50.0,<2.51.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-copa

   and update with::

      conda update bioconductor-copa

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-copa:<tag>

   (see `bioconductor-copa/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-copa| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-copa.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-copa
   :alt:   (downloads)
.. |docker_bioconductor-copa| image:: https://quay.io/repository/biocontainers/bioconductor-copa/status
   :target: https://quay.io/repository/biocontainers/bioconductor-copa
.. _`bioconductor-copa/tags`: https://quay.io/repository/biocontainers/bioconductor-copa?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-copa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-copa/README.html