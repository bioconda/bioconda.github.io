:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tidysummarizedexperiment'
.. highlight: bash

bioconductor-tidysummarizedexperiment
=====================================

.. conda:recipe:: bioconductor-tidysummarizedexperiment
   :replaces_section_title:
   :noindex:

   Brings SummarizedExperiment to the Tidyverse

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/tidySummarizedExperiment.html
   :license: GPL-3
   :recipe: /`bioconductor-tidysummarizedexperiment <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tidysummarizedexperiment>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tidysummarizedexperiment/meta.yaml>`_

   The tidySummarizedExperiment package provides a set of tools for creating and manipulating tidy data representations of SummarizedExperiment objects. SummarizedExperiment is a widely used data structure in bioinformatics for storing high\-throughput genomic data\, such as gene expression or DNA sequencing data. The tidySummarizedExperiment package introduces a tidy framework for working with SummarizedExperiment objects. It allows users to convert their data into a tidy format\, where each observation is a row and each variable is a column. This tidy representation simplifies data manipulation\, integration with other tidyverse packages\, and enables seamless integration with the broader ecosystem of tidy tools for data analysis.


.. conda:package:: bioconductor-tidysummarizedexperiment

   |downloads_bioconductor-tidysummarizedexperiment| |docker_bioconductor-tidysummarizedexperiment|

   :versions:
      
      

      ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.1-0``,  ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-cli: 
   :depends r-dplyr: 
   :depends r-ellipsis: 
   :depends r-fansi: 
   :depends r-ggplot2: 
   :depends r-lifecycle: 
   :depends r-magrittr: 
   :depends r-pillar: 
   :depends r-pkgconfig: 
   :depends r-purrr: 
   :depends r-rlang: 
   :depends r-stringr: 
   :depends r-tibble: ``>=3.0.4``
   :depends r-tidyr: 
   :depends r-tidyselect: 
   :depends r-ttservice: ``>=0.4.0``
   :depends r-vctrs: 
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

      mamba install bioconductor-tidysummarizedexperiment

   and update with::

      mamba update bioconductor-tidysummarizedexperiment

  To create a new environment, run::

      mamba create --name myenvname bioconductor-tidysummarizedexperiment

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tidysummarizedexperiment:<tag>

   (see `bioconductor-tidysummarizedexperiment/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tidysummarizedexperiment| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tidysummarizedexperiment.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tidysummarizedexperiment
   :alt:   (downloads)
.. |docker_bioconductor-tidysummarizedexperiment| image:: https://quay.io/repository/biocontainers/bioconductor-tidysummarizedexperiment/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tidysummarizedexperiment
.. _`bioconductor-tidysummarizedexperiment/tags`: https://quay.io/repository/biocontainers/bioconductor-tidysummarizedexperiment?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tidysummarizedexperiment";
        var versions = ["1.16.0","1.12.0","1.10.0","1.8.0","1.4.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tidysummarizedexperiment/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tidysummarizedexperiment/README.html