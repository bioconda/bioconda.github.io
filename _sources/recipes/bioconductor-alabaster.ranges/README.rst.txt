:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-alabaster.ranges'
.. highlight: bash

bioconductor-alabaster.ranges
=============================

.. conda:recipe:: bioconductor-alabaster.ranges
   :replaces_section_title:
   :noindex:

   Load and Save Ranges\-related Artifacts from File

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/alabaster.ranges.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-alabaster.ranges <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-alabaster.ranges>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-alabaster.ranges/meta.yaml>`_

   Save GenomicRanges\, IRanges and related data structures into file artifacts\, and load them back into memory. This is a more portable alternative to serialization of such objects into RDS files. Each artifact is associated with metadata for further interpretation\; downstream applications can enrich this metadata with context\-specific properties.


.. conda:package:: bioconductor-alabaster.ranges

   |downloads_bioconductor-alabaster.ranges| |docker_bioconductor-alabaster.ranges|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-alabaster.base: ``>=1.0.0,<1.1.0``
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-genomeinfodb: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-alabaster.ranges

   and update with::

      conda update bioconductor-alabaster.ranges

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-alabaster.ranges:<tag>

   (see `bioconductor-alabaster.ranges/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-alabaster.ranges| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-alabaster.ranges.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-alabaster.ranges
   :alt:   (downloads)
.. |docker_bioconductor-alabaster.ranges| image:: https://quay.io/repository/biocontainers/bioconductor-alabaster.ranges/status
   :target: https://quay.io/repository/biocontainers/bioconductor-alabaster.ranges
.. _`bioconductor-alabaster.ranges/tags`: https://quay.io/repository/biocontainers/bioconductor-alabaster.ranges?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-alabaster.ranges";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-alabaster.ranges/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-alabaster.ranges/README.html