:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snakemake-executor-plugin-cannon'
.. highlight: bash

snakemake-executor-plugin-cannon
================================

.. conda:recipe:: snakemake-executor-plugin-cannon
   :replaces_section_title:
   :noindex:

   A Snakemake executor plugin for submitting jobs to the Cannon cluster at Harvard University.

   :homepage: https://github.com/harvardinformatics/snakemake-executor-plugin-cannon
   :license: MIT / MIT
   :recipe: /`snakemake-executor-plugin-cannon <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakemake-executor-plugin-cannon>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakemake-executor-plugin-cannon/meta.yaml>`_

   


.. conda:package:: snakemake-executor-plugin-cannon

   |downloads_snakemake-executor-plugin-cannon| |docker_snakemake-executor-plugin-cannon|

   :versions:
      
      

      ``1.2.2.post1-0``,  ``1.2.1a0-0``

      

   
   :depends python: ``>=3.11.0,<4.0.0``
   :depends snakemake-executor-plugin-slurm-jobstep: ``>=0.3.0,<0.4.0``
   :depends snakemake-interface-common: ``>=1.13.0,<2.0.0``
   :depends snakemake-interface-executor-plugins: ``>=9.1.1,<10.0.0``
   :depends throttler: ``>=1.2.2,<2.0.0``
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

      mamba install snakemake-executor-plugin-cannon

   and update with::

      mamba update snakemake-executor-plugin-cannon

  To create a new environment, run::

      mamba create --name myenvname snakemake-executor-plugin-cannon

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/snakemake-executor-plugin-cannon:<tag>

   (see `snakemake-executor-plugin-cannon/tags`_ for valid values for ``<tag>``)


.. |downloads_snakemake-executor-plugin-cannon| image:: https://img.shields.io/conda/dn/bioconda/snakemake-executor-plugin-cannon.svg?style=flat
   :target: https://anaconda.org/bioconda/snakemake-executor-plugin-cannon
   :alt:   (downloads)
.. |docker_snakemake-executor-plugin-cannon| image:: https://quay.io/repository/biocontainers/snakemake-executor-plugin-cannon/status
   :target: https://quay.io/repository/biocontainers/snakemake-executor-plugin-cannon
.. _`snakemake-executor-plugin-cannon/tags`: https://quay.io/repository/biocontainers/snakemake-executor-plugin-cannon?tab=tags


.. raw:: html

    <script>
        var package = "snakemake-executor-plugin-cannon";
        var versions = ["1.2.2.post1","1.2.1a0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snakemake-executor-plugin-cannon/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snakemake-executor-plugin-cannon/README.html