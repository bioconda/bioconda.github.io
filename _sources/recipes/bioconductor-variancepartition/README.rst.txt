:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-variancepartition'
.. highlight: bash

bioconductor-variancepartition
==============================

.. conda:recipe:: bioconductor-variancepartition
   :replaces_section_title:
   :noindex:

   Quantify and interpret divers of variation in multilevel gene expression experiments

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/variancePartition.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-variancepartition <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-variancepartition>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-variancepartition/meta.yaml>`_
   :links: biotools: :biotools:`variancepartition`

   Quantify and interpret multiple sources of biological and technical variation in gene expression experiments. Uses a linear mixed model to quantify variation in gene expression attributable to individual\, tissue\, time point\, or technical variables.  Includes dream differential expression analysis for repeated measures.


.. conda:package:: bioconductor-variancepartition

   |downloads_bioconductor-variancepartition| |docker_bioconductor-variancepartition|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.1-0</code>,  <code>1.14.0-1</code>,  <code>1.12.3-0</code>,  </span></summary>
      

      ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.1-0``,  ``1.14.0-1``,  ``1.12.3-0``,  ``1.12.0-0``,  ``1.10.4-0``,  ``1.8.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.54.0,<2.55.0``
   :depends bioconductor-biocparallel: ``>=1.28.0,<1.29.0``
   :depends bioconductor-limma: ``>=3.50.0,<3.51.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-doparallel: 
   :depends r-foreach: 
   :depends r-ggplot2: 
   :depends r-gplots: 
   :depends r-iterators: 
   :depends r-lme4: ``>=1.1-10``
   :depends r-lmertest: 
   :depends r-mass: 
   :depends r-matrix: 
   :depends r-pbkrtest: ``>=0.4-4``
   :depends r-progress: 
   :depends r-reshape2: 
   :depends r-rlang: 
   :depends r-scales: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-variancepartition

   and update with::

      conda update bioconductor-variancepartition

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-variancepartition:<tag>

   (see `bioconductor-variancepartition/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-variancepartition| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-variancepartition.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-variancepartition
   :alt:   (downloads)
.. |docker_bioconductor-variancepartition| image:: https://quay.io/repository/biocontainers/bioconductor-variancepartition/status
   :target: https://quay.io/repository/biocontainers/bioconductor-variancepartition
.. _`bioconductor-variancepartition/tags`: https://quay.io/repository/biocontainers/bioconductor-variancepartition?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-variancepartition";
        var versions = ["1.24.0","1.22.0","1.20.0","1.20.0","1.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-variancepartition/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-variancepartition/README.html