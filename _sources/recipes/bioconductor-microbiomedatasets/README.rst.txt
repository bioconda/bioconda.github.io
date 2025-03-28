:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-microbiomedatasets'
.. highlight: bash

bioconductor-microbiomedatasets
===============================

.. conda:recipe:: bioconductor-microbiomedatasets
   :replaces_section_title:
   :noindex:

   Experiment Hub based microbiome datasets

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/microbiomeDataSets.html
   :license: CC0
   :recipe: /`bioconductor-microbiomedatasets <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-microbiomedatasets>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-microbiomedatasets/meta.yaml>`_

   microbiomeDataSets is a collection of microbiome datasets loaded from Bioconductor\'S ExperimentHub infrastructure. The datasets serve as reference for workflows and vignettes published adjacent to the microbiome analysis tools on Bioconductor. Additional datasets can be added overtime and additions from authors are welcome.


.. conda:package:: bioconductor-microbiomedatasets

   |downloads_bioconductor-microbiomedatasets| |docker_bioconductor-microbiomedatasets|

   :versions:
      
      

      ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-biostrings: ``>=2.74.0,<2.75.0``
   :depends bioconductor-data-packages: ``>=20241103``
   :depends bioconductor-experimenthub: ``>=2.14.0,<2.15.0``
   :depends bioconductor-multiassayexperiment: ``>=1.32.0,<1.33.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends bioconductor-treesummarizedexperiment: ``>=2.14.0,<2.15.0``
   :depends curl: 
   :depends r-ape: 
   :depends r-base: ``>=4.4,<4.5.0a0``
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

      mamba install bioconductor-microbiomedatasets

   and update with::

      mamba update bioconductor-microbiomedatasets

  To create a new environment, run::

      mamba create --name myenvname bioconductor-microbiomedatasets

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-microbiomedatasets:<tag>

   (see `bioconductor-microbiomedatasets/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-microbiomedatasets| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-microbiomedatasets.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-microbiomedatasets
   :alt:   (downloads)
.. |docker_bioconductor-microbiomedatasets| image:: https://quay.io/repository/biocontainers/bioconductor-microbiomedatasets/status
   :target: https://quay.io/repository/biocontainers/bioconductor-microbiomedatasets
.. _`bioconductor-microbiomedatasets/tags`: https://quay.io/repository/biocontainers/bioconductor-microbiomedatasets?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-microbiomedatasets";
        var versions = ["1.14.0","1.10.0","1.8.0","1.6.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-microbiomedatasets/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-microbiomedatasets/README.html