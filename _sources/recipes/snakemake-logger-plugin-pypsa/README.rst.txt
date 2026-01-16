:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snakemake-logger-plugin-pypsa'
.. highlight: bash

snakemake-logger-plugin-pypsa
=============================

.. conda:recipe:: snakemake-logger-plugin-pypsa
   :replaces_section_title:
   :noindex:

   A PyPSA\-Eur logger plugin for Snakemake

   :homepage: https://github.com/PyPSA/snakemake-logger-plugin-pypsa
   :license: MIT
   :recipe: /`snakemake-logger-plugin-pypsa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakemake-logger-plugin-pypsa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakemake-logger-plugin-pypsa/meta.yaml>`_

   


.. conda:package:: snakemake-logger-plugin-pypsa

   |downloads_snakemake-logger-plugin-pypsa| |docker_snakemake-logger-plugin-pypsa|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends python: ``>=3.11``
   :depends snakemake-interface-logger-plugins: ``>=1.2.0,<2``
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

      mamba install snakemake-logger-plugin-pypsa

   and update with::

      mamba update snakemake-logger-plugin-pypsa

  To create a new environment, run::

      mamba create --name myenvname snakemake-logger-plugin-pypsa

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/snakemake-logger-plugin-pypsa:<tag>

   (see `snakemake-logger-plugin-pypsa/tags`_ for valid values for ``<tag>``)


.. |downloads_snakemake-logger-plugin-pypsa| image:: https://img.shields.io/conda/dn/bioconda/snakemake-logger-plugin-pypsa.svg?style=flat
   :target: https://anaconda.org/bioconda/snakemake-logger-plugin-pypsa
   :alt:   (downloads)
.. |docker_snakemake-logger-plugin-pypsa| image:: https://quay.io/repository/biocontainers/snakemake-logger-plugin-pypsa/status
   :target: https://quay.io/repository/biocontainers/snakemake-logger-plugin-pypsa
.. _`snakemake-logger-plugin-pypsa/tags`: https://quay.io/repository/biocontainers/snakemake-logger-plugin-pypsa?tab=tags


.. raw:: html

    <script>
        var package = "snakemake-logger-plugin-pypsa";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snakemake-logger-plugin-pypsa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snakemake-logger-plugin-pypsa/README.html