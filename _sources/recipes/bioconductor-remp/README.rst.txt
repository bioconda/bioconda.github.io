:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-remp'
.. highlight: bash

bioconductor-remp
=================

.. conda:recipe:: bioconductor-remp
   :replaces_section_title:
   :noindex:

   Repetitive Element Methylation Prediction

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/REMP.html
   :license: GPL-3
   :recipe: /`bioconductor-remp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-remp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-remp/meta.yaml>`_

   Machine learning\-based tools to predict DNA methylation of locus\-specific repetitive elements \(RE\) by learning surrounding genetic and epigenetic information. These tools provide genomewide and single\-base resolution of DNA methylation prediction on RE that are difficult to measure using array\-based or sequencing\-based platforms\, which enables epigenome\-wide association study \(EWAS\) and differentially methylated region \(DMR\) analysis on RE.


.. conda:package:: bioconductor-remp

   |downloads_bioconductor-remp| |docker_bioconductor-remp|

   :versions:
      
      

      ``1.22.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.1-1``

      

   
   :depends bioconductor-annotationhub: ``>=3.6.0,<3.7.0``
   :depends bioconductor-biocgenerics: ``>=0.44.0,<0.45.0``
   :depends bioconductor-biocparallel: ``>=1.32.0,<1.33.0``
   :depends bioconductor-biostrings: ``>=2.66.0,<2.67.0``
   :depends bioconductor-bsgenome: ``>=1.66.0,<1.67.0``
   :depends bioconductor-genomeinfodb: ``>=1.34.0,<1.35.0``
   :depends bioconductor-genomicranges: ``>=1.50.0,<1.51.0``
   :depends bioconductor-impute: ``>=1.72.0,<1.73.0``
   :depends bioconductor-iranges: ``>=2.32.0,<2.33.0``
   :depends bioconductor-minfi: ``>=1.44.0,<1.45.0``
   :depends bioconductor-org.hs.eg.db: ``>=3.16.0,<3.17.0``
   :depends bioconductor-rtracklayer: ``>=1.58.0,<1.59.0``
   :depends bioconductor-s4vectors: ``>=0.36.0,<0.37.0``
   :depends bioconductor-summarizedexperiment: ``>=1.28.0,<1.29.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-caret: 
   :depends r-doparallel: 
   :depends r-foreach: 
   :depends r-iterators: 
   :depends r-kernlab: 
   :depends r-ranger: 
   :depends r-readr: 
   :depends r-settings: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-remp

   and update with::

      conda update bioconductor-remp

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-remp:<tag>

   (see `bioconductor-remp/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-remp| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-remp.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-remp
   :alt:   (downloads)
.. |docker_bioconductor-remp| image:: https://quay.io/repository/biocontainers/bioconductor-remp/status
   :target: https://quay.io/repository/biocontainers/bioconductor-remp
.. _`bioconductor-remp/tags`: https://quay.io/repository/biocontainers/bioconductor-remp?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-remp";
        var versions = ["1.22.0","1.18.0","1.16.0","1.14.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-remp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-remp/README.html