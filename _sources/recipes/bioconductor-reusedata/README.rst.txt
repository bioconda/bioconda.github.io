:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-reusedata'
.. highlight: bash

bioconductor-reusedata
======================

.. conda:recipe:: bioconductor-reusedata
   :replaces_section_title:
   :noindex:

   Reusable and reproducible Data Management

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/ReUseData.html
   :license: GPL-3
   :recipe: /`bioconductor-reusedata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-reusedata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-reusedata/meta.yaml>`_

   ReUseData is an \_R\/Bioconductor\_ software tool to provide a systematic and versatile approach for standardized and reproducible data management. ReUseData facilitates transformation of shell or other ad hoc scripts for data preprocessing into workflow\-based data recipes. Evaluation of data recipes generate curated data files in their generic formats \(e.g.\, VCF\, bed\). Both recipes and data are cached using database infrastructure for easy data management and reuse. Prebuilt data recipes are available through ReUseData portal \(\"https\:\/\/rcwl.org\/dataRecipes\/\"\) with full annotation and user instructions. Pregenerated data are available through ReUseData cloud bucket that is directly downloadable through \"getCloudData\(\)\".


.. conda:package:: bioconductor-reusedata

   |downloads_bioconductor-reusedata| |docker_bioconductor-reusedata|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-basilisk: ``>=1.12.0,<1.13.0``
   :depends bioconductor-biocfilecache: ``>=2.8.0,<2.9.0``
   :depends bioconductor-rcwl: ``>=1.16.0,<1.17.0``
   :depends bioconductor-rcwlpipelines: ``>=1.16.0,<1.17.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-jsonlite: 
   :depends r-yaml: 
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

      mamba install bioconductor-reusedata

   and update with::

      mamba update bioconductor-reusedata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-reusedata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-reusedata:<tag>

   (see `bioconductor-reusedata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-reusedata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-reusedata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-reusedata
   :alt:   (downloads)
.. |docker_bioconductor-reusedata| image:: https://quay.io/repository/biocontainers/bioconductor-reusedata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-reusedata
.. _`bioconductor-reusedata/tags`: https://quay.io/repository/biocontainers/bioconductor-reusedata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-reusedata";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-reusedata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-reusedata/README.html