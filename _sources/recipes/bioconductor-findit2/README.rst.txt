:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-findit2'
.. highlight: bash

bioconductor-findit2
====================

.. conda:recipe:: bioconductor-findit2
   :replaces_section_title:
   :noindex:

   find influential TF and Target based on multi\-omics data

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/FindIT2.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-findit2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-findit2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-findit2/meta.yaml>`_

   This package implements functions to find influential TF and target based on different input type. It have five module\: Multi\-peak multi\-gene annotaion\(mmPeakAnno module\)\, Calculate regulation potential\(calcRP module\)\, Find influential Target based on ChIP\-Seq and RNA\-Seq data\(Find influential Target module\)\, Find influential TF based on different input\(Find influential TF module\)\, Calculate peak\-gene or peak\-peak correlation\(peakGeneCor module\). And there are also some other useful function like integrate different source information\, calculate jaccard similarity for your TF.


.. conda:package:: bioconductor-findit2

   |downloads_bioconductor-findit2| |docker_bioconductor-findit2|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.40.0,<0.41.0``
   :depends bioconductor-biocparallel: ``>=1.28.0,<1.29.0``
   :depends bioconductor-genomeinfodb: ``>=1.30.0,<1.31.0``
   :depends bioconductor-genomicfeatures: ``>=1.46.0,<1.47.0``
   :depends bioconductor-genomicranges: ``>=1.46.0,<1.47.0``
   :depends bioconductor-iranges: ``>=2.28.0,<2.29.0``
   :depends bioconductor-multiassayexperiment: ``>=1.20.0,<1.21.0``
   :depends bioconductor-qvalue: ``>=2.26.0,<2.27.0``
   :depends bioconductor-rtracklayer: ``>=1.54.0,<1.55.0``
   :depends bioconductor-s4vectors: ``>=0.32.0,<0.33.0``
   :depends bioconductor-summarizedexperiment: ``>=1.24.0,<1.25.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-glmnet: 
   :depends r-patchwork: 
   :depends r-progress: 
   :depends r-purrr: 
   :depends r-rlang: 
   :depends r-stringr: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :depends r-withr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-findit2

   and update with::

      conda update bioconductor-findit2

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-findit2:<tag>

   (see `bioconductor-findit2/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-findit2| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-findit2.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-findit2
   :alt:   (downloads)
.. |docker_bioconductor-findit2| image:: https://quay.io/repository/biocontainers/bioconductor-findit2/status
   :target: https://quay.io/repository/biocontainers/bioconductor-findit2
.. _`bioconductor-findit2/tags`: https://quay.io/repository/biocontainers/bioconductor-findit2?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-findit2";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-findit2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-findit2/README.html