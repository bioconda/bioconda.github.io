:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-decomplexdisease'
.. highlight: bash

bioconductor-decomplexdisease
=============================

.. conda:recipe:: bioconductor-decomplexdisease
   :replaces_section_title:
   :noindex:

   A tool for differential expression analysis and DEGs based investigation to complex diseases by bi\-clustering analysis

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/DEComplexDisease.html
   :license: GPL-3
   :recipe: /`bioconductor-decomplexdisease <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-decomplexdisease>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-decomplexdisease/meta.yaml>`_

   It is designed to find the differential expressed genes \(DEGs\) for complex disease\, which is characterized by the heterogeneous genomic expression profiles. Different from the established DEG analysis tools\, it does not assume the patients of complex diseases to share the common DEGs. By applying a bi\-clustering algorithm\, DECD finds the DEGs shared by as many patients. In this way\, DECD describes the DEGs of complex disease in a novel syntax\, e.g. a gene list composed of 200 genes are differentially expressed in 30\% percent of studied complex disease. Applying the DECD analysis results\, users are possible to find the patients affected by the same mechanism based on the shared signatures.


.. conda:package:: bioconductor-decomplexdisease

   |downloads_bioconductor-decomplexdisease| |docker_bioconductor-decomplexdisease|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.18.0-0</code>,  <code>1.14.0-2</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  </span></summary>
      

      ``1.18.0-0``,  ``1.14.0-2``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocparallel: ``>=1.32.0,<1.33.0``
   :depends bioconductor-complexheatmap: ``>=2.14.0,<2.15.0``
   :depends bioconductor-deseq2: ``>=1.38.0,<1.39.0``
   :depends bioconductor-edger: ``>=3.40.0,<3.41.0``
   :depends bioconductor-summarizedexperiment: ``>=1.28.0,<1.29.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-rcpp: ``>=0.12.7``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-decomplexdisease

   and update with::

      conda update bioconductor-decomplexdisease

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-decomplexdisease:<tag>

   (see `bioconductor-decomplexdisease/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-decomplexdisease| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-decomplexdisease.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-decomplexdisease
   :alt:   (downloads)
.. |docker_bioconductor-decomplexdisease| image:: https://quay.io/repository/biocontainers/bioconductor-decomplexdisease/status
   :target: https://quay.io/repository/biocontainers/bioconductor-decomplexdisease
.. _`bioconductor-decomplexdisease/tags`: https://quay.io/repository/biocontainers/bioconductor-decomplexdisease?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-decomplexdisease";
        var versions = ["1.18.0","1.14.0","1.14.0","1.14.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-decomplexdisease/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-decomplexdisease/README.html