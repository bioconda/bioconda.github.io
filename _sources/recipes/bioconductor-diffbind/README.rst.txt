:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-diffbind'
.. highlight: bash

bioconductor-diffbind
=====================

.. conda:recipe:: bioconductor-diffbind
   :replaces_section_title:
   :noindex:

   Differential Binding Analysis of ChIP\-Seq Peak Data

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/DiffBind.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-diffbind <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-diffbind>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-diffbind/meta.yaml>`_
   :links: biotools: :biotools:`diffbind`, usegalaxy-eu: :usegalaxy-eu:`diffbind`

   Compute differentially bound sites from multiple ChIP\-seq experiments using affinity \(quantitative\) data. Also enables occupancy \(overlap\) analysis and plotting functions.


.. conda:package:: bioconductor-diffbind

   |downloads_bioconductor-diffbind| |docker_bioconductor-diffbind|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.10.0-0</code>,  <code>3.8.0-0</code>,  <code>3.4.11-1</code>,  <code>3.4.11-0</code>,  <code>3.4.0-0</code>,  <code>3.2.7-0</code>,  <code>3.2.1-0</code>,  <code>3.0.15-0</code>,  <code>3.0.3-0</code>,  </span></summary>
      

      ``3.10.0-0``,  ``3.8.0-0``,  ``3.4.11-1``,  ``3.4.11-0``,  ``3.4.0-0``,  ``3.2.7-0``,  ``3.2.1-0``,  ``3.0.15-0``,  ``3.0.3-0``,  ``2.16.0-2``,  ``2.16.0-1``,  ``2.16.0-0``,  ``2.14.0-0``,  ``2.12.0-1``,  ``2.10.0-1``,  ``2.10.0-0``,  ``2.8.0-0``,  ``2.6.6-0``,  ``2.6.5-0``,  ``2.6.0-0``,  ``2.4.8-16``,  ``2.2.12-1``,  ``2.2.12-0``,  ``2.0.9-3``,  ``2.0.9-2``,  ``1.16.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-apeglm: ``>=1.22.0,<1.23.0``
   :depends bioconductor-biocparallel: ``>=1.34.0,<1.35.0``
   :depends bioconductor-deseq2: ``>=1.40.0,<1.41.0``
   :depends bioconductor-genomicalignments: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-greylistchip: ``>=1.32.0,<1.33.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-limma: ``>=3.56.0,<3.57.0``
   :depends bioconductor-rhtslib: ``>=2.2.0,<2.3.0``
   :depends bioconductor-rsamtools: ``>=2.16.0,<2.17.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends bioconductor-systempiper: ``>=2.6.0,<2.7.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libcxx: ``>=15.0.7``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-amap: 
   :depends r-ashr: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-gplots: 
   :depends r-lattice: 
   :depends r-locfit: 
   :depends r-rcolorbrewer: 
   :depends r-rcpp: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-diffbind

   and update with::

      conda update bioconductor-diffbind

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-diffbind:<tag>

   (see `bioconductor-diffbind/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-diffbind| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-diffbind.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-diffbind
   :alt:   (downloads)
.. |docker_bioconductor-diffbind| image:: https://quay.io/repository/biocontainers/bioconductor-diffbind/status
   :target: https://quay.io/repository/biocontainers/bioconductor-diffbind
.. _`bioconductor-diffbind/tags`: https://quay.io/repository/biocontainers/bioconductor-diffbind?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-diffbind";
        var versions = ["3.10.0","3.8.0","3.4.11","3.4.11","3.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-diffbind/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-diffbind/README.html