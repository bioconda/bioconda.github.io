:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snakealtpromoter'
.. highlight: bash

snakealtpromoter
================

.. conda:recipe:: snakealtpromoter
   :replaces_section_title:
   :noindex:

   A comprehensive pipeline for differential alternative promoter analysis.

   :homepage: https://github.com/YidanSunResearchLab/SnakeAltPromoter
   :license: MIT / MIT
   :recipe: /`snakealtpromoter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakealtpromoter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakealtpromoter/meta.yaml>`_

   SnakeAltPromoter is a Snakemake\-based pipeline for streamlined\, reproducible\, and scalable analysis of
   alternative promoter usage from RNA\-seq or CAGE data. It integrates all major steps—from raw read
   preprocessing to promoter\-level quantification and differential analysis—using state\-of\-the\-art tools.



.. conda:package:: snakealtpromoter

   |downloads_snakealtpromoter| |docker_snakealtpromoter|

   :versions:
      
      

      ``1.0.5-0``

      

   
   :depends pandas: 
   :depends pyarrow: 
   :depends python: ``>=3.11``
   :depends snakemake: 
   :depends streamlit: 
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

      mamba install snakealtpromoter

   and update with::

      mamba update snakealtpromoter

  To create a new environment, run::

      mamba create --name myenvname snakealtpromoter

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/snakealtpromoter:<tag>

   (see `snakealtpromoter/tags`_ for valid values for ``<tag>``)


.. |downloads_snakealtpromoter| image:: https://img.shields.io/conda/dn/bioconda/snakealtpromoter.svg?style=flat
   :target: https://anaconda.org/bioconda/snakealtpromoter
   :alt:   (downloads)
.. |docker_snakealtpromoter| image:: https://quay.io/repository/biocontainers/snakealtpromoter/status
   :target: https://quay.io/repository/biocontainers/snakealtpromoter
.. _`snakealtpromoter/tags`: https://quay.io/repository/biocontainers/snakealtpromoter?tab=tags


.. raw:: html

    <script>
        var package = "snakealtpromoter";
        var versions = ["1.0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snakealtpromoter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snakealtpromoter/README.html