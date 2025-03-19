:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snakemake-executor-plugin-aws-batch'
.. highlight: bash

snakemake-executor-plugin-aws-batch
===================================

.. conda:recipe:: snakemake-executor-plugin-aws-batch
   :replaces_section_title:
   :noindex:

   A Snakemake executor plugin for submitting jobs to AWS Batch.

   :homepage: https://github.com/snakemake/snakemake-executor-plugin-aws-batch
   :license: MIT
   :recipe: /`snakemake-executor-plugin-aws-batch <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakemake-executor-plugin-aws-batch>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakemake-executor-plugin-aws-batch/meta.yaml>`_

   


.. conda:package:: snakemake-executor-plugin-aws-batch

   |downloads_snakemake-executor-plugin-aws-batch| |docker_snakemake-executor-plugin-aws-batch|

   :versions:
      
      

      ``0.2.1-0``

      

   
   :depends boto3: ``>=1.36.5``
   :depends python: 
   :depends snakemake-interface-common: ``>=1.17.4``
   :depends snakemake-interface-executor-plugins: ``>=9.3.2``
   :depends snakemake-storage-plugin-s3: ``>=0.3.1``
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

      mamba install snakemake-executor-plugin-aws-batch

   and update with::

      mamba update snakemake-executor-plugin-aws-batch

  To create a new environment, run::

      mamba create --name myenvname snakemake-executor-plugin-aws-batch

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/snakemake-executor-plugin-aws-batch:<tag>

   (see `snakemake-executor-plugin-aws-batch/tags`_ for valid values for ``<tag>``)


.. |downloads_snakemake-executor-plugin-aws-batch| image:: https://img.shields.io/conda/dn/bioconda/snakemake-executor-plugin-aws-batch.svg?style=flat
   :target: https://anaconda.org/bioconda/snakemake-executor-plugin-aws-batch
   :alt:   (downloads)
.. |docker_snakemake-executor-plugin-aws-batch| image:: https://quay.io/repository/biocontainers/snakemake-executor-plugin-aws-batch/status
   :target: https://quay.io/repository/biocontainers/snakemake-executor-plugin-aws-batch
.. _`snakemake-executor-plugin-aws-batch/tags`: https://quay.io/repository/biocontainers/snakemake-executor-plugin-aws-batch?tab=tags


.. raw:: html

    <script>
        var package = "snakemake-executor-plugin-aws-batch";
        var versions = ["0.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snakemake-executor-plugin-aws-batch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snakemake-executor-plugin-aws-batch/README.html