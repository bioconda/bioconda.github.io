:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snakemake-interface-scheduler-plugins'
.. highlight: bash

snakemake-interface-scheduler-plugins
=====================================

.. conda:recipe:: snakemake-interface-scheduler-plugins
   :replaces_section_title:
   :noindex:

   This package provides a stable interface for interactions between Snakemake and its scheduler plugins.

   :homepage: https://github.com/snakemake/snakemake-interface-scheduler-plugins
   :license: MIT
   :recipe: /`snakemake-interface-scheduler-plugins <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakemake-interface-scheduler-plugins>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakemake-interface-scheduler-plugins/meta.yaml>`_

   


.. conda:package:: snakemake-interface-scheduler-plugins

   |downloads_snakemake-interface-scheduler-plugins| |docker_snakemake-interface-scheduler-plugins|

   :versions:
      
      

      ``2.0.0-0``,  ``1.0.0-0``

      

   
   :depends python: ``>=3.11.0,<4.0.0``
   :depends snakemake-interface-common: ``>=1.20.1,<2.0.0``
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

      mamba install snakemake-interface-scheduler-plugins

   and update with::

      mamba update snakemake-interface-scheduler-plugins

  To create a new environment, run::

      mamba create --name myenvname snakemake-interface-scheduler-plugins

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/snakemake-interface-scheduler-plugins:<tag>

   (see `snakemake-interface-scheduler-plugins/tags`_ for valid values for ``<tag>``)


.. |downloads_snakemake-interface-scheduler-plugins| image:: https://img.shields.io/conda/dn/bioconda/snakemake-interface-scheduler-plugins.svg?style=flat
   :target: https://anaconda.org/bioconda/snakemake-interface-scheduler-plugins
   :alt:   (downloads)
.. |docker_snakemake-interface-scheduler-plugins| image:: https://quay.io/repository/biocontainers/snakemake-interface-scheduler-plugins/status
   :target: https://quay.io/repository/biocontainers/snakemake-interface-scheduler-plugins
.. _`snakemake-interface-scheduler-plugins/tags`: https://quay.io/repository/biocontainers/snakemake-interface-scheduler-plugins?tab=tags


.. raw:: html

    <script>
        var package = "snakemake-interface-scheduler-plugins";
        var versions = ["2.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snakemake-interface-scheduler-plugins/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snakemake-interface-scheduler-plugins/README.html