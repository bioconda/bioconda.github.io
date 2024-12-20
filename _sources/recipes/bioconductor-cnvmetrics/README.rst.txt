:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cnvmetrics'
.. highlight: bash

bioconductor-cnvmetrics
=======================

.. conda:recipe:: bioconductor-cnvmetrics
   :replaces_section_title:
   :noindex:

   Copy Number Variant Metrics

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/CNVMetrics.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-cnvmetrics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cnvmetrics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cnvmetrics/meta.yaml>`_

   The CNVMetrics package calculates similarity metrics to facilitate copy number variant comparison among samples and\/or methods. Similarity metrics can be employed to compare CNV profiles of genetically unrelated samples as well as those with a common genetic background. Some metrics are based on the shared amplified\/deleted regions while other metrics rely on the level of amplification\/deletion. The data type used as input is a plain text file containing the genomic position of the copy number variations\, as well as the status and\/or the log2 ratio values. Finally\, a visualization tool is provided to explore resulting metrics.


.. conda:package:: bioconductor-cnvmetrics

   |downloads_bioconductor-cnvmetrics| |docker_bioconductor-cnvmetrics|

   :versions:
      
      

      ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-gridextra: 
   :depends r-magrittr: 
   :depends r-pheatmap: 
   :depends r-rbeta2009: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-cnvmetrics

   and update with::

      mamba update bioconductor-cnvmetrics

  To create a new environment, run::

      mamba create --name myenvname bioconductor-cnvmetrics

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

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
        var versions = ["1.10.0","1.6.0","1.4.0","1.2.0"];
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