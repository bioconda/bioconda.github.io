:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-raerdata'
.. highlight: bash

bioconductor-raerdata
=====================

.. conda:recipe:: bioconductor-raerdata
   :replaces_section_title:
   :noindex:

   A collection of datasets for use with raer package

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/raerdata.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-raerdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-raerdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-raerdata/meta.yaml>`_

   raerdata is an ExperimentHub package that provides a collection of files useful for demostrating functionality in the raer package. Datasets include 10x genomics scRNA\-seq\, bulk RNA\-seq\, and paired whole\-genome and RNA\-seq data. Additionally databases of human and mouse RNA editing sites are provided.


.. conda:package:: bioconductor-raerdata

   |downloads_bioconductor-raerdata| |docker_bioconductor-raerdata|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-data-packages: ``>=20231203``
   :depends bioconductor-experimenthub: ``>=2.10.0,<2.11.0``
   :depends bioconductor-rsamtools: ``>=2.18.0,<2.19.0``
   :depends bioconductor-rtracklayer: ``>=1.62.0,<1.63.0``
   :depends bioconductor-singlecellexperiment: ``>=1.24.0,<1.25.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-raerdata

   and update with::

      mamba update bioconductor-raerdata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-raerdata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-raerdata:<tag>

   (see `bioconductor-raerdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-raerdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-raerdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-raerdata
   :alt:   (downloads)
.. |docker_bioconductor-raerdata| image:: https://quay.io/repository/biocontainers/bioconductor-raerdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-raerdata
.. _`bioconductor-raerdata/tags`: https://quay.io/repository/biocontainers/bioconductor-raerdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-raerdata";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-raerdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-raerdata/README.html