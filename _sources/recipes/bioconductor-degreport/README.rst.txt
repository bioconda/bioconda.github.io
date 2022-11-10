:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-degreport'
.. highlight: bash

bioconductor-degreport
======================

.. conda:recipe:: bioconductor-degreport
   :replaces_section_title:
   :noindex:

   Report of DEG analysis

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/DEGreport.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-degreport <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-degreport>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-degreport/meta.yaml>`_
   :links: biotools: :biotools:`degreport`, doi: :doi:`10.1038/nmeth.3252`

   Creation of a HTML report of differential expression analyses of count data. It integrates some of the code mentioned in DESeq2 and edgeR vignettes\, and report a ranked list of genes according to the fold changes mean and variability for each selected gene.


.. conda:package:: bioconductor-degreport

   |downloads_bioconductor-degreport| |docker_bioconductor-degreport|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.34.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-1</code>,  <code>1.19.1-0</code>,  </span></summary>
      

      ``1.34.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.19.1-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.8.2-1``,  ``1.8.2-0``,  ``1.7.2-1``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.58.0,<2.59.0``
   :depends bioconductor-biocgenerics: ``>=0.44.0,<0.45.0``
   :depends bioconductor-complexheatmap: ``>=2.14.0,<2.15.0``
   :depends bioconductor-consensusclusterplus: ``>=1.62.0,<1.63.0``
   :depends bioconductor-deseq2: ``>=1.38.0,<1.39.0``
   :depends bioconductor-edger: ``>=3.40.0,<3.41.0``
   :depends bioconductor-s4vectors: ``>=0.36.0,<0.37.0``
   :depends bioconductor-summarizedexperiment: ``>=1.28.0,<1.29.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-broom: 
   :depends r-circlize: 
   :depends r-cluster: 
   :depends r-cowplot: 
   :depends r-dplyr: 
   :depends r-ggdendro: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-knitr: 
   :depends r-logging: 
   :depends r-magrittr: 
   :depends r-psych: 
   :depends r-rcolorbrewer: 
   :depends r-reshape: 
   :depends r-rlang: 
   :depends r-scales: 
   :depends r-stringr: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-degreport

   and update with::

      conda update bioconductor-degreport

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-degreport:<tag>

   (see `bioconductor-degreport/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-degreport| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-degreport.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-degreport
   :alt:   (downloads)
.. |docker_bioconductor-degreport| image:: https://quay.io/repository/biocontainers/bioconductor-degreport/status
   :target: https://quay.io/repository/biocontainers/bioconductor-degreport
.. _`bioconductor-degreport/tags`: https://quay.io/repository/biocontainers/bioconductor-degreport?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-degreport";
        var versions = ["1.34.0","1.30.0","1.28.0","1.26.0","1.26.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-degreport/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-degreport/README.html