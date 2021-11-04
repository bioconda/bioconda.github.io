:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-chromvar'
.. highlight: bash

bioconductor-chromvar
=====================

.. conda:recipe:: bioconductor-chromvar
   :replaces_section_title:
   :noindex:

   Chromatin Variation Across Regions

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/chromVAR.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-chromvar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chromvar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chromvar/meta.yaml>`_
   :links: biotools: :biotools:`chromvar`

   Determine variation in chromatin accessibility across sets of annotations or peaks. Designed primarily for single\-cell or sparse chromatin accessibility data\, e.g. from scATAC\-seq or sparse bulk ATAC or DNAse\-seq experiments.


.. conda:package:: bioconductor-chromvar

   |downloads_bioconductor-chromvar| |docker_bioconductor-chromvar|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-1</code>,  <code>1.4.1-0</code>,  <code>1.4.0-1</code>,  </span></summary>
      

      ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.1-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.40.0,<0.41.0``
   :depends bioconductor-biocparallel: ``>=1.28.0,<1.29.0``
   :depends bioconductor-biostrings: ``>=2.62.0,<2.63.0``
   :depends bioconductor-bsgenome: ``>=1.62.0,<1.63.0``
   :depends bioconductor-genomeinfodb: ``>=1.30.0,<1.31.0``
   :depends bioconductor-genomicranges: ``>=1.46.0,<1.47.0``
   :depends bioconductor-iranges: ``>=2.28.0,<2.29.0``
   :depends bioconductor-rsamtools: ``>=2.10.0,<2.11.0``
   :depends bioconductor-s4vectors: ``>=0.32.0,<0.33.0``
   :depends bioconductor-summarizedexperiment: ``>=1.24.0,<1.25.0``
   :depends bioconductor-tfbstools: ``>=1.32.0,<1.33.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libcxx: ``>=11.1.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-dt: 
   :depends r-ggplot2: 
   :depends r-matrix: 
   :depends r-miniui: 
   :depends r-nabor: 
   :depends r-plotly: 
   :depends r-rcolorbrewer: 
   :depends r-rcpp: 
   :depends r-rcpparmadillo: 
   :depends r-rtsne: 
   :depends r-shiny: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-chromvar

   and update with::

      conda update bioconductor-chromvar

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-chromvar:<tag>

   (see `bioconductor-chromvar/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-chromvar| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-chromvar.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-chromvar
   :alt:   (downloads)
.. |docker_bioconductor-chromvar| image:: https://quay.io/repository/biocontainers/bioconductor-chromvar/status
   :target: https://quay.io/repository/biocontainers/bioconductor-chromvar
.. _`bioconductor-chromvar/tags`: https://quay.io/repository/biocontainers/bioconductor-chromvar?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-chromvar";
        var versions = ["1.16.0","1.14.0","1.12.0","1.12.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-chromvar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-chromvar/README.html