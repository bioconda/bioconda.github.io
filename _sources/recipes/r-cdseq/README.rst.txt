:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-cdseq'
.. highlight: bash

r-cdseq
=======

.. conda:recipe:: r-cdseq
   :replaces_section_title:
   :noindex:

   Estimate cell\-type\-specific gene expression profiles and sample\-specific cell\-type proportions simultaneously using bulk sequencing data. Kang et al. \(2019\) \<doi\:10.1371\/journal.pcbi.1007510\>.

   :homepage: https://github.com/omnideconv/CDSeq
   :license: GPL / GPL-3
   :recipe: /`r-cdseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-cdseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-cdseq/meta.yaml>`_
   :links: doi: :doi:`10.1371/journal.pcbi.1007510`

   


.. conda:package:: r-cdseq

   |downloads_r-cdseq| |docker_r-cdseq|

   :versions:
      
      

      ``0-5``,  ``0-3``,  ``0-2``,  ``0-1``,  ``0-0``

      

   
   :depends bioconductor-biobase: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-clue: 
   :depends r-dirmult: 
   :depends r-doparallel: 
   :depends r-dplyr: 
   :depends r-foreach: 
   :depends r-ggplot2: 
   :depends r-ggpubr: 
   :depends r-gplots: 
   :depends r-harmony: 
   :depends r-iterators: 
   :depends r-magrittr: 
   :depends r-mass: 
   :depends r-matrix: 
   :depends r-matrixstats: 
   :depends r-pheatmap: 
   :depends r-qlcmatrix: 
   :depends r-rcpp: ``>=1.0.3``
   :depends r-rcppthread: 
   :depends r-rlang: 
   :depends r-seurat: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-cdseq

   and update with::

      conda update r-cdseq

   or use the docker container::

      docker pull quay.io/biocontainers/r-cdseq:<tag>

   (see `r-cdseq/tags`_ for valid values for ``<tag>``)


.. |downloads_r-cdseq| image:: https://img.shields.io/conda/dn/bioconda/r-cdseq.svg?style=flat
   :target: https://anaconda.org/bioconda/r-cdseq
   :alt:   (downloads)
.. |docker_r-cdseq| image:: https://quay.io/repository/biocontainers/r-cdseq/status
   :target: https://quay.io/repository/biocontainers/r-cdseq
.. _`r-cdseq/tags`: https://quay.io/repository/biocontainers/r-cdseq?tab=tags


.. raw:: html

    <script>
        var package = "r-cdseq";
        var versions = ["0","0","0","0","0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-cdseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-cdseq/README.html