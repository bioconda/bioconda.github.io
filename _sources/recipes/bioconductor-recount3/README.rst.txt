:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-recount3'
.. highlight: bash

bioconductor-recount3
=====================

.. conda:recipe:: bioconductor-recount3
   :replaces_section_title:
   :noindex:

   Explore and download data from the recount3 project

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/recount3.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-recount3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-recount3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-recount3/meta.yaml>`_

   The recount3 package enables access to a large amount of uniformly processed RNA\-seq data from human and mouse. You can download RangedSummarizedExperiment objects at the gene\, exon or exon\-exon junctions level with sample metadata and QC statistics. In addition we provide access to sample coverage BigWig files.


.. conda:package:: bioconductor-recount3

   |downloads_bioconductor-recount3| |docker_bioconductor-recount3|

   :versions:
      
      

      ``1.4.0-0``,  ``1.2.1-0``,  ``1.0.7-0``,  ``1.0.0-1``

      

   
   :depends bioconductor-biocfilecache: ``>=2.2.0,<2.3.0``
   :depends bioconductor-genomicranges: ``>=1.46.0,<1.47.0``
   :depends bioconductor-rtracklayer: ``>=1.54.0,<1.55.0``
   :depends bioconductor-s4vectors: ``>=0.32.0,<0.33.0``
   :depends bioconductor-summarizedexperiment: ``>=1.24.0,<1.25.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-data.table: 
   :depends r-matrix: 
   :depends r-r.utils: 
   :depends r-rcurl: 
   :depends r-sessioninfo: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-recount3

   and update with::

      conda update bioconductor-recount3

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-recount3:<tag>

   (see `bioconductor-recount3/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-recount3| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-recount3.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-recount3
   :alt:   (downloads)
.. |docker_bioconductor-recount3| image:: https://quay.io/repository/biocontainers/bioconductor-recount3/status
   :target: https://quay.io/repository/biocontainers/bioconductor-recount3
.. _`bioconductor-recount3/tags`: https://quay.io/repository/biocontainers/bioconductor-recount3?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-recount3";
        var versions = ["1.4.0","1.2.1","1.0.7","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-recount3/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-recount3/README.html