:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dewseq'
.. highlight: bash

bioconductor-dewseq
===================

.. conda:recipe:: bioconductor-dewseq
   :replaces_section_title:
   :noindex:

   Differential Expressed Windows Based on Negative Binomial Distribution

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/DEWSeq.html
   :license: LGPL (>= 3)
   :recipe: /`bioconductor-dewseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dewseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dewseq/meta.yaml>`_

   DEWSeq is a sliding window approach for the analysis of differentially enriched binding regions eCLIP or iCLIP next generation sequencing data.


.. conda:package:: bioconductor-dewseq

   |downloads_bioconductor-dewseq| |docker_bioconductor-dewseq|

   :versions:
      
      

      ``1.14.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.4-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-biocparallel: ``>=1.34.0,<1.35.0``
   :depends bioconductor-deseq2: ``>=1.40.0,<1.41.0``
   :depends bioconductor-genomeinfodb: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: ``>=1.11.8``
   :depends r-r.utils: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-dewseq

   and update with::

      conda update bioconductor-dewseq

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-dewseq:<tag>

   (see `bioconductor-dewseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-dewseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dewseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dewseq
   :alt:   (downloads)
.. |docker_bioconductor-dewseq| image:: https://quay.io/repository/biocontainers/bioconductor-dewseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dewseq
.. _`bioconductor-dewseq/tags`: https://quay.io/repository/biocontainers/bioconductor-dewseq?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-dewseq";
        var versions = ["1.14.0","1.12.0","1.8.0","1.6.0","1.4.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dewseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dewseq/README.html