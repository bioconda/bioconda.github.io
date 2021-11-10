:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bsseq'
.. highlight: bash

bioconductor-bsseq
==================

.. conda:recipe:: bioconductor-bsseq
   :replaces_section_title:
   :noindex:

   Analyze\, manage and store bisulfite sequencing data

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/bsseq.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-bsseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsseq/meta.yaml>`_
   :links: biotools: :biotools:`bsseq`

   A collection of tools for analyzing and visualizing bisulfite sequencing data.


.. conda:package:: bioconductor-bsseq

   |downloads_bioconductor-bsseq| |docker_bioconductor-bsseq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-1</code>,  <code>1.18.0-0</code>,  <code>1.16.1-0</code>,  </span></summary>
      

      ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.18.0-0``,  ``1.16.1-0``,  ``1.14.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-beachmat: ``>=2.10.0,<2.11.0``
   :depends bioconductor-biobase: ``>=2.54.0,<2.55.0``
   :depends bioconductor-biocgenerics: ``>=0.40.0,<0.41.0``
   :depends bioconductor-biocparallel: ``>=1.28.0,<1.29.0``
   :depends bioconductor-biostrings: ``>=2.62.0,<2.63.0``
   :depends bioconductor-bsgenome: ``>=1.62.0,<1.63.0``
   :depends bioconductor-delayedarray: ``>=0.20.0,<0.21.0``
   :depends bioconductor-delayedmatrixstats: ``>=1.16.0,<1.17.0``
   :depends bioconductor-genomeinfodb: ``>=1.30.0,<1.31.0``
   :depends bioconductor-genomicranges: ``>=1.46.0,<1.47.0``
   :depends bioconductor-hdf5array: ``>=1.22.0,<1.23.0``
   :depends bioconductor-iranges: ``>=2.28.0,<2.29.0``
   :depends bioconductor-limma: ``>=3.50.0,<3.51.0``
   :depends bioconductor-rhdf5: ``>=2.38.0,<2.39.0``
   :depends bioconductor-s4vectors: ``>=0.32.0,<0.33.0``
   :depends bioconductor-summarizedexperiment: ``>=1.24.0,<1.25.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=9.4.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends libstdcxx-ng: ``>=9.4.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-data.table: ``>=1.11.8``
   :depends r-gtools: 
   :depends r-locfit: 
   :depends r-permute: 
   :depends r-r.utils: ``>=2.0.0``
   :depends r-rcpp: 
   :depends r-scales: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-bsseq

   and update with::

      conda update bioconductor-bsseq

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bsseq:<tag>

   (see `bioconductor-bsseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bsseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bsseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bsseq
   :alt:   (downloads)
.. |docker_bioconductor-bsseq| image:: https://quay.io/repository/biocontainers/bioconductor-bsseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bsseq
.. _`bioconductor-bsseq/tags`: https://quay.io/repository/biocontainers/bioconductor-bsseq?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bsseq";
        var versions = ["1.30.0","1.28.0","1.26.0","1.26.0","1.24.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bsseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bsseq/README.html