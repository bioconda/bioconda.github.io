:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rbowtie2'
.. highlight: bash

bioconductor-rbowtie2
=====================

.. conda:recipe:: bioconductor-rbowtie2
   :replaces_section_title:
   :noindex:

   An R Wrapper for Bowtie2 and AdapterRemoval

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/Rbowtie2.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-rbowtie2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rbowtie2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rbowtie2/meta.yaml>`_

   This package provides an R wrapper of the popular bowtie2 sequencing reads aligner and AdapterRemoval\, a convenient tool for rapid adapter trimming\, identification\, and read merging. The package contains wrapper functions that allow for genome indexing and alignment to those indexes. The package also allows for the creation of .bam files via Rsamtools.


.. conda:package:: bioconductor-rbowtie2

   |downloads_bioconductor-rbowtie2| |docker_bioconductor-rbowtie2|

   :versions:
      
      

      ``2.0.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``

      

   
   :depends bioconductor-rsamtools: ``>=2.10.0,<2.11.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=9.4.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends libstdcxx-ng: ``>=9.4.0``
   :depends libzlib: ``>=1.2.11,<1.3.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-magrittr: 
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rbowtie2

   and update with::

      conda update bioconductor-rbowtie2

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rbowtie2:<tag>

   (see `bioconductor-rbowtie2/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rbowtie2| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rbowtie2.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rbowtie2
   :alt:   (downloads)
.. |docker_bioconductor-rbowtie2| image:: https://quay.io/repository/biocontainers/bioconductor-rbowtie2/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rbowtie2
.. _`bioconductor-rbowtie2/tags`: https://quay.io/repository/biocontainers/bioconductor-rbowtie2?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rbowtie2";
        var versions = ["2.0.0","1.14.0","1.12.0","1.12.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rbowtie2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rbowtie2/README.html