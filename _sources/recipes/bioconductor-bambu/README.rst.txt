:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bambu'
.. highlight: bash

bioconductor-bambu
==================

.. conda:recipe:: bioconductor-bambu
   :replaces_section_title:
   :noindex:

   Context\-Aware Transcript Quantification from Long Read RNA\-Seq data

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/bambu.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-bambu <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bambu>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bambu/meta.yaml>`_

   bambu is a R package for multi\-sample transcript discovery and quantification using long read RNA\-Seq data. You can use bambu after read alignment to obtain expression estimates for known and novel transcripts and genes. The output from bambu can directly be used for visualisation and downstream analysis such as differential gene expression or transcript usage.


.. conda:package:: bioconductor-bambu

   |downloads_bioconductor-bambu| |docker_bioconductor-bambu|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.0.8-0</code>,  <code>3.0.6-0</code>,  <code>3.0.5-0</code>,  <code>3.0.1-0</code>,  <code>2.0.6-1</code>,  <code>2.0.6-0</code>,  <code>2.0.5-0</code>,  <code>2.0.3-0</code>,  <code>2.0.0-0</code>,  </span></summary>
      

      ``3.0.8-0``,  ``3.0.6-0``,  ``3.0.5-0``,  ``3.0.1-0``,  ``2.0.6-1``,  ``2.0.6-0``,  ``2.0.5-0``,  ``2.0.3-0``,  ``2.0.0-0``,  ``1.2.0-0``,  ``1.0.2-1``,  ``1.0.2-0``,  ``1.0.0-2``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.44.0,<0.45.0``
   :depends bioconductor-biocparallel: ``>=1.32.0,<1.33.0``
   :depends bioconductor-bsgenome: ``>=1.66.0,<1.67.0``
   :depends bioconductor-genomeinfodb: ``>=1.34.0,<1.35.0``
   :depends bioconductor-genomicalignments: ``>=1.34.0,<1.35.0``
   :depends bioconductor-genomicfeatures: ``>=1.50.0,<1.51.0``
   :depends bioconductor-genomicranges: ``>=1.50.0,<1.51.0``
   :depends bioconductor-iranges: ``>=2.32.0,<2.33.0``
   :depends bioconductor-rsamtools: ``>=2.14.0,<2.15.0``
   :depends bioconductor-s4vectors: ``>=0.36.0,<0.37.0``
   :depends bioconductor-summarizedexperiment: ``>=1.28.0,<1.29.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-rcpp: 
   :depends r-rcpparmadillo: 
   :depends r-tidyr: 
   :depends r-xgboost: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-bambu

   and update with::

      conda update bioconductor-bambu

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bambu:<tag>

   (see `bioconductor-bambu/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bambu| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bambu.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bambu
   :alt:   (downloads)
.. |docker_bioconductor-bambu| image:: https://quay.io/repository/biocontainers/bioconductor-bambu/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bambu
.. _`bioconductor-bambu/tags`: https://quay.io/repository/biocontainers/bioconductor-bambu?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bambu";
        var versions = ["3.0.8","3.0.6","3.0.5","3.0.1","2.0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bambu/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bambu/README.html