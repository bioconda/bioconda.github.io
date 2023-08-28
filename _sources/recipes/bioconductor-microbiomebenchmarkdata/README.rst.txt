:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-microbiomebenchmarkdata'
.. highlight: bash

bioconductor-microbiomebenchmarkdata
====================================

.. conda:recipe:: bioconductor-microbiomebenchmarkdata
   :replaces_section_title:
   :noindex:

   Datasets for benchmarking in microbiome research

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/MicrobiomeBenchmarkData.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-microbiomebenchmarkdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-microbiomebenchmarkdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-microbiomebenchmarkdata/meta.yaml>`_

   The MicrobiomeBenchmarkData package provides functionality to access microbiome datasets suitable for benchmarking. These datasets have some biological truth\, which allows to have expected results for comparison. The datasets come from various published sources and are provided as TreeSummarizedExperiment objects. Currently\, only datasets suitable for benchmarking differential abundance methods are available.


.. conda:package:: bioconductor-microbiomebenchmarkdata

   |downloads_bioconductor-microbiomebenchmarkdata| |docker_bioconductor-microbiomebenchmarkdata|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocfilecache: ``>=2.8.0,<2.9.0``
   :depends bioconductor-data-packages: ``>=20230706``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends bioconductor-treesummarizedexperiment: ``>=2.8.0,<2.9.0``
   :depends curl: 
   :depends r-ape: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-microbiomebenchmarkdata

   and update with::

      mamba update bioconductor-microbiomebenchmarkdata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-microbiomebenchmarkdata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-microbiomebenchmarkdata:<tag>

   (see `bioconductor-microbiomebenchmarkdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-microbiomebenchmarkdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-microbiomebenchmarkdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-microbiomebenchmarkdata
   :alt:   (downloads)
.. |docker_bioconductor-microbiomebenchmarkdata| image:: https://quay.io/repository/biocontainers/bioconductor-microbiomebenchmarkdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-microbiomebenchmarkdata
.. _`bioconductor-microbiomebenchmarkdata/tags`: https://quay.io/repository/biocontainers/bioconductor-microbiomebenchmarkdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-microbiomebenchmarkdata";
        var versions = ["1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-microbiomebenchmarkdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-microbiomebenchmarkdata/README.html