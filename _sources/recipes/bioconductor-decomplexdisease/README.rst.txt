:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-decomplexdisease'
.. highlight: bash

bioconductor-decomplexdisease
=============================

.. conda:recipe:: bioconductor-decomplexdisease
   :replaces_section_title:
   :noindex:

   A tool for differential expression analysis and DEGs based investigation to complex diseases by bi\-clustering analysis

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/DEComplexDisease.html
   :license: GPL-3
   :recipe: /`bioconductor-decomplexdisease <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-decomplexdisease>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-decomplexdisease/meta.yaml>`_

   It is designed to find the differential expressed genes \(DEGs\) for complex disease\, which is characterized by the heterogeneous genomic expression profiles. Different from the established DEG analysis tools\, it does not assume the patients of complex diseases to share the common DEGs. By applying a bi\-clustering algorithm\, DECD finds the DEGs shared by as many patients. In this way\, DECD describes the DEGs of complex disease in a novel syntax\, e.g. a gene list composed of 200 genes are differentially expressed in 30\% percent of studied complex disease. Applying the DECD analysis results\, users are possible to find the patients affected by the same mechanism based on the shared signatures.


.. conda:package:: bioconductor-decomplexdisease

   |downloads_bioconductor-decomplexdisease| |docker_bioconductor-decomplexdisease|

   :versions:
      
      

      ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.28.0,<1.29.0``
   :depends bioconductor-complexheatmap: ``>=2.10.0,<2.11.0``
   :depends bioconductor-deseq2: ``>=1.34.0,<1.35.0``
   :depends bioconductor-edger: ``>=3.36.0,<3.37.0``
   :depends bioconductor-summarizedexperiment: ``>=1.24.0,<1.25.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=9.4.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends libstdcxx-ng: ``>=9.4.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
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
        var versions = ["1.14.0","1.12.0","1.10.0","1.10.0","1.8.0"];
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