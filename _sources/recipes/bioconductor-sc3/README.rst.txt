:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sc3'
.. highlight: bash

bioconductor-sc3
================

.. conda:recipe:: bioconductor-sc3
   :replaces_section_title:
   :noindex:

   Single\-Cell Consensus Clustering

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/SC3.html
   :license: GPL-3
   :recipe: /`bioconductor-sc3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sc3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sc3/meta.yaml>`_
   :links: biotools: :biotools:`sc3`

   A tool for unsupervised clustering and analysis of single cell RNA\-Seq data.


.. conda:package:: bioconductor-sc3

   |downloads_bioconductor-sc3| |docker_bioconductor-sc3|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.7.6-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.40.0,<0.41.0``
   :depends bioconductor-s4vectors: ``>=0.32.0,<0.33.0``
   :depends bioconductor-singlecellexperiment: ``>=1.16.0,<1.17.0``
   :depends bioconductor-summarizedexperiment: ``>=1.24.0,<1.25.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libcxx: ``>=11.1.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-cluster: 
   :depends r-doparallel: 
   :depends r-dorng: 
   :depends r-e1071: 
   :depends r-foreach: 
   :depends r-ggplot2: 
   :depends r-pheatmap: ``>=1.0.8``
   :depends r-rcpp: ``>=0.11.1``
   :depends r-rcpparmadillo: 
   :depends r-robustbase: 
   :depends r-rocr: 
   :depends r-rrcov: 
   :depends r-shiny: 
   :depends r-writexls: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-sc3

   and update with::

      conda update bioconductor-sc3

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-sc3:<tag>

   (see `bioconductor-sc3/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-sc3| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sc3.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sc3
   :alt:   (downloads)
.. |docker_bioconductor-sc3| image:: https://quay.io/repository/biocontainers/bioconductor-sc3/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sc3
.. _`bioconductor-sc3/tags`: https://quay.io/repository/biocontainers/bioconductor-sc3?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-sc3";
        var versions = ["1.22.0","1.20.0","1.18.0","1.18.0","1.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sc3/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sc3/README.html