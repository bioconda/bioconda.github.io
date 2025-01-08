:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-alphamissenser'
.. highlight: bash

bioconductor-alphamissenser
===========================

.. conda:recipe:: bioconductor-alphamissenser
   :replaces_section_title:
   :noindex:

   Accessing AlphaMissense Data Resources in R

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/AlphaMissenseR.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-alphamissenser <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-alphamissenser>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-alphamissenser/meta.yaml>`_

   The AlphaMissense publication \<https\:\/\/www.science.org\/doi\/epdf\/10.1126\/science.adg7492\> outlines how a variant of AlphaFold \/ DeepMind was used to predict missense variant pathogenicity. Supporting data on Zenodo \<https\:\/\/zenodo.org\/record\/10813168\> include\, for instance\, 71M variants across hg19 and hg38 genome builds. The \'AlphaMissenseR\' package allows ready access to the data\, downloading individual files to DuckDB databases for exploration and integration into \*R\* and \*Bioconductor\* workflows.


.. conda:package:: bioconductor-alphamissenser

   |downloads_bioconductor-alphamissenser| |docker_bioconductor-alphamissenser|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends bioconductor-biocbaseutils: ``>=1.8.0,<1.9.0``
   :depends bioconductor-biocfilecache: ``>=2.14.0,<2.15.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-curl: 
   :depends r-dbi: 
   :depends r-dplyr: 
   :depends r-duckdb: ``>=0.9.1``
   :depends r-ggplot2: 
   :depends r-memoise: 
   :depends r-rjsoncons: ``>=1.0.1``
   :depends r-rlang: 
   :depends r-spdl: 
   :depends r-whisker: 
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

      mamba install bioconductor-alphamissenser

   and update with::

      mamba update bioconductor-alphamissenser

  To create a new environment, run::

      mamba create --name myenvname bioconductor-alphamissenser

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-alphamissenser:<tag>

   (see `bioconductor-alphamissenser/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-alphamissenser| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-alphamissenser.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-alphamissenser
   :alt:   (downloads)
.. |docker_bioconductor-alphamissenser| image:: https://quay.io/repository/biocontainers/bioconductor-alphamissenser/status
   :target: https://quay.io/repository/biocontainers/bioconductor-alphamissenser
.. _`bioconductor-alphamissenser/tags`: https://quay.io/repository/biocontainers/bioconductor-alphamissenser?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-alphamissenser";
        var versions = ["1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-alphamissenser/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-alphamissenser/README.html