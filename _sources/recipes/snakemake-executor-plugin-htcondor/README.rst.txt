:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snakemake-executor-plugin-htcondor'
.. highlight: bash

snakemake-executor-plugin-htcondor
==================================

.. conda:recipe:: snakemake-executor-plugin-htcondor
   :replaces_section_title:
   :noindex:

   A Snakemake executor plugin for submitting jobs to a HTCondor cluster.

   :homepage: https://github.com/jannisspeer/snakemake-executor-plugin-htcondor
   :license: MIT
   :recipe: /`snakemake-executor-plugin-htcondor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakemake-executor-plugin-htcondor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakemake-executor-plugin-htcondor/meta.yaml>`_

   


.. conda:package:: snakemake-executor-plugin-htcondor

   |downloads_snakemake-executor-plugin-htcondor| |docker_snakemake-executor-plugin-htcondor|

   :versions:
      
      

      ``0.1.2-0``

      

   
   :depends python: ``>=3.11``
   :depends python-htcondor: ``>=23.4.0,<24.0.0``
   :depends snakemake-interface-common: ``>=1.17.1,<2.0.0``
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

      mamba install snakemake-executor-plugin-htcondor

   and update with::

      mamba update snakemake-executor-plugin-htcondor

  To create a new environment, run::

      mamba create --name myenvname snakemake-executor-plugin-htcondor

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/snakemake-executor-plugin-htcondor:<tag>

   (see `snakemake-executor-plugin-htcondor/tags`_ for valid values for ``<tag>``)


.. |downloads_snakemake-executor-plugin-htcondor| image:: https://img.shields.io/conda/dn/bioconda/snakemake-executor-plugin-htcondor.svg?style=flat
   :target: https://anaconda.org/bioconda/snakemake-executor-plugin-htcondor
   :alt:   (downloads)
.. |docker_snakemake-executor-plugin-htcondor| image:: https://quay.io/repository/biocontainers/snakemake-executor-plugin-htcondor/status
   :target: https://quay.io/repository/biocontainers/snakemake-executor-plugin-htcondor
.. _`snakemake-executor-plugin-htcondor/tags`: https://quay.io/repository/biocontainers/snakemake-executor-plugin-htcondor?tab=tags


.. raw:: html

    <script>
        var package = "snakemake-executor-plugin-htcondor";
        var versions = ["0.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snakemake-executor-plugin-htcondor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snakemake-executor-plugin-htcondor/README.html