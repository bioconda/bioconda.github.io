:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-excluderanges'
.. highlight: bash

bioconductor-excluderanges
==========================

.. conda:recipe:: bioconductor-excluderanges
   :replaces_section_title:
   :noindex:

   Genomic coordinates of problematic genomic regions

   :homepage: https://bioconductor.org/packages/3.14/data/annotation/html/excluderanges.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-excluderanges <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-excluderanges>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-excluderanges/meta.yaml>`_

   Genomic coordinates of problematic genomic regions that should be avoided when working with genomic data. GRanges of exclusion regions \(formerly known as blacklisted\)\, centromeres\, telomeres\, known heterochromatin regions\, etc. \(UCSC \'gap\' table data\). Primarily for human and mouse genomes\, hg19\/hg38 and mm9\/mm10 genome assemblies.


.. conda:package:: bioconductor-excluderanges

   |downloads_bioconductor-excluderanges| |docker_bioconductor-excluderanges|

   :versions:
      
      

      ``0.99.6-2``,  ``0.99.6-1``,  ``0.99.6-0``

      

   
   :depends bioconductor-data-packages: ``>=20221102``
   :depends curl: ``>=7.86.0,<8.0a0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-excluderanges

   and update with::

      conda update bioconductor-excluderanges

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-excluderanges:<tag>

   (see `bioconductor-excluderanges/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-excluderanges| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-excluderanges.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-excluderanges
   :alt:   (downloads)
.. |docker_bioconductor-excluderanges| image:: https://quay.io/repository/biocontainers/bioconductor-excluderanges/status
   :target: https://quay.io/repository/biocontainers/bioconductor-excluderanges
.. _`bioconductor-excluderanges/tags`: https://quay.io/repository/biocontainers/bioconductor-excluderanges?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-excluderanges";
        var versions = ["0.99.6","0.99.6","0.99.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-excluderanges/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-excluderanges/README.html