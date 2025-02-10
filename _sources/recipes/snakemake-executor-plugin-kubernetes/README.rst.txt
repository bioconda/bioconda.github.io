:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snakemake-executor-plugin-kubernetes'
.. highlight: bash

snakemake-executor-plugin-kubernetes
====================================

.. conda:recipe:: snakemake-executor-plugin-kubernetes
   :replaces_section_title:
   :noindex:

   A snakemake executor plugin for submission of jobs to Kubernetes

   :homepage: https://github.com/snakemake/snakemake-executor-plugin-kubernetes
   :license: MIT
   :recipe: /`snakemake-executor-plugin-kubernetes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakemake-executor-plugin-kubernetes>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakemake-executor-plugin-kubernetes/meta.yaml>`_

   


.. conda:package:: snakemake-executor-plugin-kubernetes

   |downloads_snakemake-executor-plugin-kubernetes| |docker_snakemake-executor-plugin-kubernetes|

   :versions:
      
      

      ``0.3.0-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.5-0``,  ``0.1.4-0``

      

   
   :depends python: ``>=3.11.0,<4.0.0``
   :depends python-kubernetes: ``>=27.2.0,<28.0.0``
   :depends snakemake-interface-common: ``>=1.14.1,<2.0.0``
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

      mamba install snakemake-executor-plugin-kubernetes

   and update with::

      mamba update snakemake-executor-plugin-kubernetes

  To create a new environment, run::

      mamba create --name myenvname snakemake-executor-plugin-kubernetes

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/snakemake-executor-plugin-kubernetes:<tag>

   (see `snakemake-executor-plugin-kubernetes/tags`_ for valid values for ``<tag>``)


.. |downloads_snakemake-executor-plugin-kubernetes| image:: https://img.shields.io/conda/dn/bioconda/snakemake-executor-plugin-kubernetes.svg?style=flat
   :target: https://anaconda.org/bioconda/snakemake-executor-plugin-kubernetes
   :alt:   (downloads)
.. |docker_snakemake-executor-plugin-kubernetes| image:: https://quay.io/repository/biocontainers/snakemake-executor-plugin-kubernetes/status
   :target: https://quay.io/repository/biocontainers/snakemake-executor-plugin-kubernetes
.. _`snakemake-executor-plugin-kubernetes/tags`: https://quay.io/repository/biocontainers/snakemake-executor-plugin-kubernetes?tab=tags


.. raw:: html

    <script>
        var package = "snakemake-executor-plugin-kubernetes";
        var versions = ["0.3.0","0.2.2","0.2.1","0.2.0","0.1.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snakemake-executor-plugin-kubernetes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snakemake-executor-plugin-kubernetes/README.html