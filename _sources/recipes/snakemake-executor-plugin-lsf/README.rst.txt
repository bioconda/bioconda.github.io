:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snakemake-executor-plugin-lsf'
.. highlight: bash

snakemake-executor-plugin-lsf
=============================

.. conda:recipe:: snakemake-executor-plugin-lsf
   :replaces_section_title:
   :noindex:

   A Snakemake executor plugin for submitting jobs to a LSF cluster.

   :homepage: https://github.com/befh/snakemake-executor-plugin-lsf
   :license: MIT
   :recipe: /`snakemake-executor-plugin-lsf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakemake-executor-plugin-lsf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakemake-executor-plugin-lsf/meta.yaml>`_

   


.. conda:package:: snakemake-executor-plugin-lsf

   |downloads_snakemake-executor-plugin-lsf| |docker_snakemake-executor-plugin-lsf|

   :versions:
      
      

      ``0.2.6-0``,  ``0.2.5-0``,  ``0.2.4-0``,  ``0.2.3-0``,  ``0.2.2-0``,  ``0.2.1-0``

      

   
   :depends python: ``>=3.11.0,<4.0.0``
   :depends snakemake-executor-plugin-lsf-jobstep: ``>=0.1.10,<0.2.0``
   :depends snakemake-interface-common: ``>=1.17.1,<2.0.0``
   :depends snakemake-interface-executor-plugins: ``>=9.0.0,<10.0.0``
   :depends throttler: ``>=1.2.2,<2.0.0``
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

      mamba install snakemake-executor-plugin-lsf

   and update with::

      mamba update snakemake-executor-plugin-lsf

  To create a new environment, run::

      mamba create --name myenvname snakemake-executor-plugin-lsf

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/snakemake-executor-plugin-lsf:<tag>

   (see `snakemake-executor-plugin-lsf/tags`_ for valid values for ``<tag>``)


.. |downloads_snakemake-executor-plugin-lsf| image:: https://img.shields.io/conda/dn/bioconda/snakemake-executor-plugin-lsf.svg?style=flat
   :target: https://anaconda.org/bioconda/snakemake-executor-plugin-lsf
   :alt:   (downloads)
.. |docker_snakemake-executor-plugin-lsf| image:: https://quay.io/repository/biocontainers/snakemake-executor-plugin-lsf/status
   :target: https://quay.io/repository/biocontainers/snakemake-executor-plugin-lsf
.. _`snakemake-executor-plugin-lsf/tags`: https://quay.io/repository/biocontainers/snakemake-executor-plugin-lsf?tab=tags


.. raw:: html

    <script>
        var package = "snakemake-executor-plugin-lsf";
        var versions = ["0.2.6","0.2.5","0.2.4","0.2.3","0.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snakemake-executor-plugin-lsf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snakemake-executor-plugin-lsf/README.html