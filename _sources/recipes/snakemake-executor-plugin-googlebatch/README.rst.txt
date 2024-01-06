:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snakemake-executor-plugin-googlebatch'
.. highlight: bash

snakemake-executor-plugin-googlebatch
=====================================

.. conda:recipe:: snakemake-executor-plugin-googlebatch
   :replaces_section_title:
   :noindex:

   Snakemake executor plugin for Google Batch

   :homepage: https://github.com/snakemake/snakemake-executor-plugin-googlebatch
   :license: MIT / MIT
   :recipe: /`snakemake-executor-plugin-googlebatch <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakemake-executor-plugin-googlebatch>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakemake-executor-plugin-googlebatch/meta.yaml>`_

   


.. conda:package:: snakemake-executor-plugin-googlebatch

   |downloads_snakemake-executor-plugin-googlebatch| |docker_snakemake-executor-plugin-googlebatch|

   :versions:
      
      

      ``0.2.0-0``,  ``0.1.1-0``

      

   
   :depends google-api-core: ``>=2.12.0,<3.0.0``
   :depends google-cloud-batch: ``>=0.17.1,<0.18.0``
   :depends google-cloud-logging: ``>=3.8.0,<4.0.0``
   :depends google-cloud-storage: ``>=2.12.0,<3.0.0``
   :depends jinja2: ``>=3.1.2,<4.0.0``
   :depends python: ``>=3.11.0,<4.0.0``
   :depends requests: ``>=2.31.0,<3.0.0``
   :depends snakemake-interface-common: ``>=1.14.0,<2.0.0``
   :depends snakemake-interface-executor-plugins: ``>=8.1.1,<9.0.0``
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

      mamba install snakemake-executor-plugin-googlebatch

   and update with::

      mamba update snakemake-executor-plugin-googlebatch

  To create a new environment, run::

      mamba create --name myenvname snakemake-executor-plugin-googlebatch

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/snakemake-executor-plugin-googlebatch:<tag>

   (see `snakemake-executor-plugin-googlebatch/tags`_ for valid values for ``<tag>``)


.. |downloads_snakemake-executor-plugin-googlebatch| image:: https://img.shields.io/conda/dn/bioconda/snakemake-executor-plugin-googlebatch.svg?style=flat
   :target: https://anaconda.org/bioconda/snakemake-executor-plugin-googlebatch
   :alt:   (downloads)
.. |docker_snakemake-executor-plugin-googlebatch| image:: https://quay.io/repository/biocontainers/snakemake-executor-plugin-googlebatch/status
   :target: https://quay.io/repository/biocontainers/snakemake-executor-plugin-googlebatch
.. _`snakemake-executor-plugin-googlebatch/tags`: https://quay.io/repository/biocontainers/snakemake-executor-plugin-googlebatch?tab=tags


.. raw:: html

    <script>
        var package = "snakemake-executor-plugin-googlebatch";
        var versions = ["0.2.0","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snakemake-executor-plugin-googlebatch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snakemake-executor-plugin-googlebatch/README.html