:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-monalisa'
.. highlight: bash

bioconductor-monalisa
=====================

.. conda:recipe:: bioconductor-monalisa
   :replaces_section_title:
   :noindex:

   Binned Motif Enrichment Analysis and Visualization

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/monaLisa.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-monalisa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-monalisa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-monalisa/meta.yaml>`_

   Useful functions to work with sequence motifs in the analysis of genomics data. These include methods to annotate genomic regions or sequences with predicted motif hits and to identify motifs that drive observed changes in accessibility or expression. Functions to produce informative visualizations of the obtained results are also provided.


.. conda:package:: bioconductor-monalisa

   |downloads_bioconductor-monalisa| |docker_bioconductor-monalisa|

   :versions:
      
      

      ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-biocparallel: ``>=1.34.0,<1.35.0``
   :depends bioconductor-biostrings: ``>=2.68.0,<2.69.0``
   :depends bioconductor-bsgenome: ``>=1.68.0,<1.69.0``
   :depends bioconductor-complexheatmap: ``>=2.16.0,<2.17.0``
   :depends bioconductor-genomeinfodb: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends bioconductor-tfbstools: ``>=1.38.0,<1.39.0``
   :depends bioconductor-xvector: ``>=0.40.0,<0.41.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-circlize: 
   :depends r-glmnet: 
   :depends r-stabs: 
   :depends r-vioplot: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-monalisa

   and update with::

      conda update bioconductor-monalisa

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-monalisa:<tag>

   (see `bioconductor-monalisa/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-monalisa| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-monalisa.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-monalisa
   :alt:   (downloads)
.. |docker_bioconductor-monalisa| image:: https://quay.io/repository/biocontainers/bioconductor-monalisa/status
   :target: https://quay.io/repository/biocontainers/bioconductor-monalisa
.. _`bioconductor-monalisa/tags`: https://quay.io/repository/biocontainers/bioconductor-monalisa?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-monalisa";
        var versions = ["1.6.0","1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-monalisa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-monalisa/README.html