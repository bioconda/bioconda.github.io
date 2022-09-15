:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-compass'
.. highlight: bash

bioconductor-compass
====================

.. conda:recipe:: bioconductor-compass
   :replaces_section_title:
   :noindex:

   Combinatorial Polyfunctionality Analysis of Single Cells

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/COMPASS.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-compass <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-compass>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-compass/meta.yaml>`_
   :links: biotools: :biotools:`compass`, doi: :doi:`10.1038/nbt.3187`

   COMPASS is a statistical framework that enables unbiased analysis of antigen\-specific T\-cell subsets. COMPASS uses a Bayesian hierarchical framework to model all observed cell\-subsets and select the most likely to be antigen\-specific while regularizing the small cell counts that often arise in multi\-parameter space. The model provides a posterior probability of specificity for each cell subset and each sample\, which can be used to profile a subject\'s immune response to external stimuli such as infection or vaccination.


.. conda:package:: bioconductor-compass

   |downloads_bioconductor-compass| |docker_bioconductor-compass|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.32.0-2</code>,  <code>1.32.0-1</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-1</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-1</code>,  </span></summary>
      

      ``1.32.0-2``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.1-0``,  ``1.20.0-0``,  ``1.18.1-0``,  ``1.18.0-0``,  ``1.16.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocstyle: ``>=2.22.0,<2.23.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-abind: 
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-clue: 
   :depends r-coda: 
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-foreach: 
   :depends r-knitr: 
   :depends r-magrittr: 
   :depends r-pdist: 
   :depends r-plyr: 
   :depends r-rcolorbrewer: 
   :depends r-rcpp: ``>=0.11.0``
   :depends r-reshape2: 
   :depends r-rlang: 
   :depends r-rmarkdown: 
   :depends r-scales: 
   :depends r-tidyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-compass

   and update with::

      conda update bioconductor-compass

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-compass:<tag>

   (see `bioconductor-compass/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-compass| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-compass.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-compass
   :alt:   (downloads)
.. |docker_bioconductor-compass| image:: https://quay.io/repository/biocontainers/bioconductor-compass/status
   :target: https://quay.io/repository/biocontainers/bioconductor-compass
.. _`bioconductor-compass/tags`: https://quay.io/repository/biocontainers/bioconductor-compass?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-compass";
        var versions = ["1.32.0","1.32.0","1.32.0","1.30.0","1.28.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-compass/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-compass/README.html