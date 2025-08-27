:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-omada'
.. highlight: bash

bioconductor-omada
==================

.. conda:recipe:: bioconductor-omada
   :replaces_section_title:
   :noindex:

   Machine learning tools for automated transcriptome clustering analysis

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/omada.html
   :license: GPL-3
   :recipe: /`bioconductor-omada <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-omada>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-omada/meta.yaml>`_

   Symptomatic heterogeneity in complex diseases reveals differences in molecular states that need to be investigated. However\, selecting the numerous parameters of an exploratory clustering analysis in RNA profiling studies requires deep understanding of machine learning and extensive computational experimentation. Tools that assist with such decisions without prior field knowledge are nonexistent and further gene association analyses need to be performed independently. We have developed a suite of tools to automate these processes and make robust unsupervised clustering of transcriptomic data more accessible through automated machine learning based functions. The efficiency of each tool was tested with four datasets characterised by different expression signal strengths. Our toolkit’s decisions reflected the real number of stable partitions in datasets where the subgroups are discernible. Even in datasets with less clear biological distinctions\, stable subgroups with different expression profiles and clinical associations were found.


.. conda:package:: bioconductor-omada

   |downloads_bioconductor-omada| |docker_bioconductor-omada|

   :versions:
      
      

      ``1.8.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.1.0-0``,  ``1.0.0-0``

      

   
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libcxx: ``>=18``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-clvalid: ``>=0.7``
   :depends r-dicer: ``>=0.6.0``
   :depends r-dplyr: ``>=1.0.7``
   :depends r-fpc: ``>=2.2-9``
   :depends r-genieclust: ``>=1.1.3``
   :depends r-ggplot2: ``>=3.3.5``
   :depends r-glmnet: ``>=4.1.3``
   :depends r-kernlab: ``>=0.9-29``
   :depends r-pdfcluster: ``>=1.0-3``
   :depends r-rcpp: ``>=1.0.7``
   :depends r-reshape: ``>=0.8.8``
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

      mamba install bioconductor-omada

   and update with::

      mamba update bioconductor-omada

  To create a new environment, run::

      mamba create --name myenvname bioconductor-omada

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-omada:<tag>

   (see `bioconductor-omada/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-omada| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-omada.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-omada
   :alt:   (downloads)
.. |docker_bioconductor-omada| image:: https://quay.io/repository/biocontainers/bioconductor-omada/status
   :target: https://quay.io/repository/biocontainers/bioconductor-omada
.. _`bioconductor-omada/tags`: https://quay.io/repository/biocontainers/bioconductor-omada?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-omada";
        var versions = ["1.8.0","1.4.0","1.4.0","1.1.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-omada/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-omada/README.html