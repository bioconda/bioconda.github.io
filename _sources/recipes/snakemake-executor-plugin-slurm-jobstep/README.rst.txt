:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snakemake-executor-plugin-slurm-jobstep'
.. highlight: bash

snakemake-executor-plugin-slurm-jobstep
=======================================

.. conda:recipe:: snakemake-executor-plugin-slurm-jobstep
   :replaces_section_title:
   :noindex:

   A Snakemake executor plugin for running srun jobs inside of SLURM jobs \(meant for internal use by snakemake\-executor\-plugin\-slurm\)

   :homepage: https://github.com/snakemake/snakemake-executor-plugin-slurm-jobstep
   :license: MIT
   :recipe: /`snakemake-executor-plugin-slurm-jobstep <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakemake-executor-plugin-slurm-jobstep>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakemake-executor-plugin-slurm-jobstep/meta.yaml>`_

   


.. conda:package:: snakemake-executor-plugin-slurm-jobstep

   |downloads_snakemake-executor-plugin-slurm-jobstep| |docker_snakemake-executor-plugin-slurm-jobstep|

   :versions:
      
      

      ``0.4.0-0``,  ``0.3.0-0``,  ``0.2.1-0``,  ``0.1.11-0``,  ``0.1.10-0``,  ``0.1.9-0``,  ``0.1.8-0``

      

   
   :depends python: ``>=3.11.0,<4.0.0``
   :depends snakemake-interface-common: ``>=1.13.0,<2.0.0``
   :depends snakemake-interface-executor-plugins: ``>=9.0.0,<10.0.0``
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

      mamba install snakemake-executor-plugin-slurm-jobstep

   and update with::

      mamba update snakemake-executor-plugin-slurm-jobstep

  To create a new environment, run::

      mamba create --name myenvname snakemake-executor-plugin-slurm-jobstep

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/snakemake-executor-plugin-slurm-jobstep:<tag>

   (see `snakemake-executor-plugin-slurm-jobstep/tags`_ for valid values for ``<tag>``)


.. |downloads_snakemake-executor-plugin-slurm-jobstep| image:: https://img.shields.io/conda/dn/bioconda/snakemake-executor-plugin-slurm-jobstep.svg?style=flat
   :target: https://anaconda.org/bioconda/snakemake-executor-plugin-slurm-jobstep
   :alt:   (downloads)
.. |docker_snakemake-executor-plugin-slurm-jobstep| image:: https://quay.io/repository/biocontainers/snakemake-executor-plugin-slurm-jobstep/status
   :target: https://quay.io/repository/biocontainers/snakemake-executor-plugin-slurm-jobstep
.. _`snakemake-executor-plugin-slurm-jobstep/tags`: https://quay.io/repository/biocontainers/snakemake-executor-plugin-slurm-jobstep?tab=tags


.. raw:: html

    <script>
        var package = "snakemake-executor-plugin-slurm-jobstep";
        var versions = ["0.4.0","0.3.0","0.2.1","0.1.11","0.1.10"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snakemake-executor-plugin-slurm-jobstep/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snakemake-executor-plugin-slurm-jobstep/README.html