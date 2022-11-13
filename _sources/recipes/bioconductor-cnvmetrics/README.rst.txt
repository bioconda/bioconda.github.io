:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cnvmetrics'
.. highlight: bash

bioconductor-cnvmetrics
=======================

.. conda:recipe:: bioconductor-cnvmetrics
   :replaces_section_title:
   :noindex:

   Copy Number Variant Metrics

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/CNVMetrics.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-cnvmetrics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cnvmetrics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cnvmetrics/meta.yaml>`_

   The CNVMetrics package calculates similarity metrics to facilitate copy number variant comparison among samples and\/or methods. Similarity metrics can be employed to compare CNV profiles of genetically unrelated samples as well as those with a common genetic background. Some metrics are based on the shared amplified\/deleted regions while other metrics rely on the level of amplification\/deletion. The data type used as input is a plain text file containing the genomic position of the copy number variations\, as well as the status and\/or the log2 ratio values. Finally\, a visualization tool is provided to explore resulting metrics.


.. conda:package:: bioconductor-cnvmetrics

   |downloads_bioconductor-cnvmetrics| |docker_bioconductor-cnvmetrics|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.32.0,<1.33.0``
   :depends bioconductor-genomicranges: ``>=1.50.0,<1.51.0``
   :depends bioconductor-iranges: ``>=2.32.0,<2.33.0``
   :depends bioconductor-s4vectors: ``>=0.36.0,<0.37.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-gridextra: 
   :depends r-magrittr: 
   :depends r-pheatmap: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cnvmetrics

   and update with::

      conda update bioconductor-cnvmetrics

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cnvmetrics:<tag>

   (see `bioconductor-cnvmetrics/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cnvmetrics| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cnvmetrics.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cnvmetrics
   :alt:   (downloads)
.. |docker_bioconductor-cnvmetrics| image:: https://quay.io/repository/biocontainers/bioconductor-cnvmetrics/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cnvmetrics
.. _`bioconductor-cnvmetrics/tags`: https://quay.io/repository/biocontainers/bioconductor-cnvmetrics?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cnvmetrics";
        var versions = ["1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cnvmetrics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cnvmetrics/README.html