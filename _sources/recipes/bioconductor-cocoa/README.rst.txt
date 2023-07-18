:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cocoa'
.. highlight: bash

bioconductor-cocoa
==================

.. conda:recipe:: bioconductor-cocoa
   :replaces_section_title:
   :noindex:

   Coordinate Covariation Analysis

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/COCOA.html
   :license: GPL-3
   :recipe: /`bioconductor-cocoa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cocoa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cocoa/meta.yaml>`_

   COCOA is a method for understanding epigenetic variation among samples. COCOA can be used with epigenetic data that includes genomic coordinates and an epigenetic signal\, such as DNA methylation and chromatin accessibility data. To describe the method on a high level\, COCOA quantifies inter\-sample variation with either a supervised or unsupervised technique then uses a database of \"region sets\" to annotate the variation among samples. A region set is a set of genomic regions that share a biological annotation\, for instance transcription factor \(TF\) binding regions\, histone modification regions\, or open chromatin regions. COCOA can identify region sets that are associated with epigenetic variation between samples and increase understanding of variation in your data.


.. conda:package:: bioconductor-cocoa

   |downloads_bioconductor-cocoa| |docker_bioconductor-cocoa|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.14.0-0</code>,  <code>2.12.0-0</code>,  <code>2.8.0-0</code>,  <code>2.6.0-0</code>,  <code>2.4.0-1</code>,  <code>2.4.0-0</code>,  <code>2.2.0-0</code>,  <code>2.0.0-0</code>,  <code>1.2.0-1</code>,  </span></summary>
      

      ``2.14.0-0``,  ``2.12.0-0``,  ``2.8.0-0``,  ``2.6.0-0``,  ``2.4.0-1``,  ``2.4.0-0``,  ``2.2.0-0``,  ``2.0.0-0``,  ``1.2.0-1``,  ``1.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-complexheatmap: ``>=2.16.0,<2.17.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-mira: ``>=1.22.0,<1.23.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
   :depends r-fitdistrplus: 
   :depends r-ggplot2: 
   :depends r-simplecache: 
   :depends r-tidyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cocoa

   and update with::

      conda update bioconductor-cocoa

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cocoa:<tag>

   (see `bioconductor-cocoa/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cocoa| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cocoa.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cocoa
   :alt:   (downloads)
.. |docker_bioconductor-cocoa| image:: https://quay.io/repository/biocontainers/bioconductor-cocoa/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cocoa
.. _`bioconductor-cocoa/tags`: https://quay.io/repository/biocontainers/bioconductor-cocoa?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cocoa";
        var versions = ["2.14.0","2.12.0","2.8.0","2.6.0","2.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cocoa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cocoa/README.html