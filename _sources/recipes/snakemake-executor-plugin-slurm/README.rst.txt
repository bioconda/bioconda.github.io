:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snakemake-executor-plugin-slurm'
.. highlight: bash

snakemake-executor-plugin-slurm
===============================

.. conda:recipe:: snakemake-executor-plugin-slurm
   :replaces_section_title:
   :noindex:

   A Snakemake executor plugin for submitting jobs to a SLURM cluster.

   :homepage: https://github.com/snakemake/snakemake-executor-plugin-slurm
   :license: MIT
   :recipe: /`snakemake-executor-plugin-slurm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakemake-executor-plugin-slurm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakemake-executor-plugin-slurm/meta.yaml>`_

   


.. conda:package:: snakemake-executor-plugin-slurm

   |downloads_snakemake-executor-plugin-slurm| |docker_snakemake-executor-plugin-slurm|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.14.2-0</code>,  <code>0.14.1-0</code>,  <code>0.14.0-0</code>,  <code>0.12.1-0</code>,  <code>0.12.0-0</code>,  <code>0.11.2-0</code>,  <code>0.11.1-0</code>,  <code>0.11.0-0</code>,  <code>0.10.2-0</code>,  </span></summary>
      

      ``0.14.2-0``,  ``0.14.1-0``,  ``0.14.0-0``,  ``0.12.1-0``,  ``0.12.0-0``,  ``0.11.2-0``,  ``0.11.1-0``,  ``0.11.0-0``,  ``0.10.2-0``,  ``0.10.0-0``,  ``0.9.0-0``,  ``0.8.0-0``,  ``0.7.0-0``,  ``0.6.0-0``,  ``0.5.2-0``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.5-0``,  ``0.4.4-0``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.3.2-0``,  ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.5-0``,  ``0.1.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends python: ``>=3.11.0,<4.0.0``
   :depends snakemake-executor-plugin-slurm-jobstep: ``>=0.2.0,<0.3.0``
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

      mamba install snakemake-executor-plugin-slurm

   and update with::

      mamba update snakemake-executor-plugin-slurm

  To create a new environment, run::

      mamba create --name myenvname snakemake-executor-plugin-slurm

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/snakemake-executor-plugin-slurm:<tag>

   (see `snakemake-executor-plugin-slurm/tags`_ for valid values for ``<tag>``)


.. |downloads_snakemake-executor-plugin-slurm| image:: https://img.shields.io/conda/dn/bioconda/snakemake-executor-plugin-slurm.svg?style=flat
   :target: https://anaconda.org/bioconda/snakemake-executor-plugin-slurm
   :alt:   (downloads)
.. |docker_snakemake-executor-plugin-slurm| image:: https://quay.io/repository/biocontainers/snakemake-executor-plugin-slurm/status
   :target: https://quay.io/repository/biocontainers/snakemake-executor-plugin-slurm
.. _`snakemake-executor-plugin-slurm/tags`: https://quay.io/repository/biocontainers/snakemake-executor-plugin-slurm?tab=tags


.. raw:: html

    <script>
        var package = "snakemake-executor-plugin-slurm";
        var versions = ["0.14.2","0.14.1","0.14.0","0.12.1","0.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snakemake-executor-plugin-slurm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snakemake-executor-plugin-slurm/README.html