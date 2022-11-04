:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bioqc'
.. highlight: bash

bioconductor-bioqc
==================

.. conda:recipe:: bioconductor-bioqc
   :replaces_section_title:
   :noindex:

   Detect tissue heterogeneity in expression profiles with gene sets

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/BioQC.html
   :license: GPL (>=3) + file LICENSE
   :recipe: /`bioconductor-bioqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bioqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bioqc/meta.yaml>`_
   :links: biotools: :biotools:`bioqc`, doi: :doi:`10.1186/s12864-017-3661-2`

   BioQC performs quality control of high\-throughput expression data based on tissue gene signatures. It can detect tissue heterogeneity in gene expression data. The core algorithm is a Wilcoxon\-Mann\-Whitney test that is optimised for high performance.


.. conda:package:: bioconductor-bioqc

   |downloads_bioconductor-bioqc| |docker_bioconductor-bioqc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.22.0-2</code>,  <code>1.22.0-1</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.22.0-2``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.58.0,<2.59.0``
   :depends bioconductor-edger: ``>=3.40.0,<3.41.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-rcpp: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-bioqc

   and update with::

      conda update bioconductor-bioqc

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bioqc:<tag>

   (see `bioconductor-bioqc/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bioqc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bioqc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bioqc
   :alt:   (downloads)
.. |docker_bioconductor-bioqc| image:: https://quay.io/repository/biocontainers/bioconductor-bioqc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bioqc
.. _`bioconductor-bioqc/tags`: https://quay.io/repository/biocontainers/bioconductor-bioqc?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bioqc";
        var versions = ["1.26.0","1.22.0","1.22.0","1.22.0","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bioqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bioqc/README.html