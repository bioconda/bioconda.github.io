:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dasper'
.. highlight: bash

bioconductor-dasper
===================

.. conda:recipe:: bioconductor-dasper
   :replaces_section_title:
   :noindex:

   Detecting abberant splicing events from RNA\-sequencing data

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/dasper.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-dasper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dasper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dasper/meta.yaml>`_

   The aim of dasper is to detect aberrant splicing events from RNA\-seq data. dasper will use as input both junction and coverage data from RNA\-seq to calculate the deviation of each splicing event in a patient from a set of user\-defined controls. dasper uses an unsupervised outlier detection algorithm to score each splicing event in the patient with an outlier score representing the degree to which that splicing event looks abnormal.


.. conda:package:: bioconductor-dasper

   |downloads_bioconductor-dasper| |docker_bioconductor-dasper|

   :versions:
      
      

      ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-2``,  ``1.0.0-1``

      

   
   :depends bioconductor-basilisk: ``>=1.6.0,<1.7.0``
   :depends bioconductor-biocfilecache: ``>=2.2.0,<2.3.0``
   :depends bioconductor-biocparallel: ``>=1.28.0,<1.29.0``
   :depends bioconductor-genomeinfodb: ``>=1.30.0,<1.31.0``
   :depends bioconductor-genomicfeatures: ``>=1.46.0,<1.47.0``
   :depends bioconductor-genomicranges: ``>=1.46.0,<1.47.0``
   :depends bioconductor-iranges: ``>=2.28.0,<2.29.0``
   :depends bioconductor-megadepth: ``>=1.4.0,<1.5.0``
   :depends bioconductor-plyranges: ``>=1.14.0,<1.15.0``
   :depends bioconductor-rtracklayer: ``>=1.54.0,<1.55.0``
   :depends bioconductor-s4vectors: ``>=0.32.0,<0.33.0``
   :depends bioconductor-summarizedexperiment: ``>=1.24.0,<1.25.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-ggpubr: 
   :depends r-ggrepel: 
   :depends r-magrittr: 
   :depends r-readr: 
   :depends r-reticulate: 
   :depends r-stringr: 
   :depends r-tidyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-dasper

   and update with::

      conda update bioconductor-dasper

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-dasper:<tag>

   (see `bioconductor-dasper/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-dasper| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dasper.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dasper
   :alt:   (downloads)
.. |docker_bioconductor-dasper| image:: https://quay.io/repository/biocontainers/bioconductor-dasper/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dasper
.. _`bioconductor-dasper/tags`: https://quay.io/repository/biocontainers/bioconductor-dasper?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-dasper";
        var versions = ["1.4.0","1.2.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dasper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dasper/README.html