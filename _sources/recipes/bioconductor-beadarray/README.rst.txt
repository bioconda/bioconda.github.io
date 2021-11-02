:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-beadarray'
.. highlight: bash

bioconductor-beadarray
======================

.. conda:recipe:: bioconductor-beadarray
   :replaces_section_title:
   :noindex:

   Quality assessment and low\-level analysis for Illumina BeadArray data

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/beadarray.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-beadarray <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-beadarray>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-beadarray/meta.yaml>`_
   :links: biotools: :biotools:`beadarray`

   The package is able to read bead\-level data \(raw TIFFs and text files\) output by BeadScan as well as bead\-summary data from BeadStudio. Methods for quality assessment and low\-level analysis are provided.


.. conda:package:: bioconductor-beadarray

   |downloads_bioconductor-beadarray| |docker_bioconductor-beadarray|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.44.0-0</code>,  <code>2.42.0-0</code>,  <code>2.40.0-1</code>,  <code>2.40.0-0</code>,  <code>2.38.0-0</code>,  <code>2.36.0-0</code>,  <code>2.34.0-1</code>,  <code>2.32.0-0</code>,  <code>2.30.0-0</code>,  </span></summary>
      

      ``2.44.0-0``,  ``2.42.0-0``,  ``2.40.0-1``,  ``2.40.0-0``,  ``2.38.0-0``,  ``2.36.0-0``,  ``2.34.0-1``,  ``2.32.0-0``,  ``2.30.0-0``,  ``2.28.0-0``,  ``2.26.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.56.0,<1.57.0``
   :depends bioconductor-beaddatapackr: ``>=1.46.0,<1.47.0``
   :depends bioconductor-biobase: ``>=2.54.0,<2.55.0``
   :depends bioconductor-biocgenerics: ``>=0.40.0,<0.41.0``
   :depends bioconductor-genomicranges: ``>=1.46.0,<1.47.0``
   :depends bioconductor-illuminaio: ``>=0.36.0,<0.37.0``
   :depends bioconductor-iranges: ``>=2.28.0,<2.29.0``
   :depends bioconductor-limma: ``>=3.50.0,<3.51.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-ggplot2: 
   :depends r-hexbin: 
   :depends r-reshape2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-beadarray

   and update with::

      conda update bioconductor-beadarray

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-beadarray:<tag>

   (see `bioconductor-beadarray/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-beadarray| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-beadarray.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-beadarray
   :alt:   (downloads)
.. |docker_bioconductor-beadarray| image:: https://quay.io/repository/biocontainers/bioconductor-beadarray/status
   :target: https://quay.io/repository/biocontainers/bioconductor-beadarray
.. _`bioconductor-beadarray/tags`: https://quay.io/repository/biocontainers/bioconductor-beadarray?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-beadarray";
        var versions = ["2.44.0","2.42.0","2.40.0","2.40.0","2.38.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-beadarray/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-beadarray/README.html