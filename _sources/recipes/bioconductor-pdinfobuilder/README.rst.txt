:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pdinfobuilder'
.. highlight: bash

bioconductor-pdinfobuilder
==========================

.. conda:recipe:: bioconductor-pdinfobuilder
   :replaces_section_title:
   :noindex:

   Platform Design Information Package Builder

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/pdInfoBuilder.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-pdinfobuilder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pdinfobuilder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pdinfobuilder/meta.yaml>`_
   :links: biotools: :biotools:`pdinfobuilder`, doi: :doi:`10.1093/bioinformatics/btq431`

   Builds platform design information packages. These consist of a SQLite database containing feature\-level data such as x\, y position on chip and featureSet ID. The database also incorporates featureSet\-level annotation data. The products of this packages are used by the oligo pkg.


.. conda:package:: bioconductor-pdinfobuilder

   |downloads_bioconductor-pdinfobuilder| |docker_bioconductor-pdinfobuilder|

   :versions:
      
      

      ``1.56.0-0``,  ``1.54.0-1``,  ``1.54.0-0``,  ``1.52.0-0``,  ``1.50.0-0``,  ``1.48.0-1``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.42.0-0``

      

   
   :depends bioconductor-affxparser: ``>=1.64.0,<1.65.0``
   :depends bioconductor-biobase: ``>=2.52.0,<2.53.0``
   :depends bioconductor-biocgenerics: ``>=0.38.0,<0.39.0``
   :depends bioconductor-biostrings: ``>=2.60.0,<2.61.0``
   :depends bioconductor-iranges: ``>=2.26.0,<2.27.0``
   :depends bioconductor-oligo: ``>=1.56.0,<1.57.0``
   :depends bioconductor-oligoclasses: ``>=1.54.0,<1.55.0``
   :depends bioconductor-s4vectors: ``>=0.30.0,<0.31.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-dbi: ``>=0.3.1``
   :depends r-rsqlite: ``>=1.0.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-pdinfobuilder

   and update with::

      conda update bioconductor-pdinfobuilder

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pdinfobuilder:<tag>

   (see `bioconductor-pdinfobuilder/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pdinfobuilder| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pdinfobuilder.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pdinfobuilder
   :alt:   (downloads)
.. |docker_bioconductor-pdinfobuilder| image:: https://quay.io/repository/biocontainers/bioconductor-pdinfobuilder/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pdinfobuilder
.. _`bioconductor-pdinfobuilder/tags`: https://quay.io/repository/biocontainers/bioconductor-pdinfobuilder?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pdinfobuilder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pdinfobuilder/README.html