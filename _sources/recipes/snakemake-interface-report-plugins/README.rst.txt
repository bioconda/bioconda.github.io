:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snakemake-interface-report-plugins'
.. highlight: bash

snakemake-interface-report-plugins
==================================

.. conda:recipe:: snakemake-interface-report-plugins
   :replaces_section_title:
   :noindex:

   This package provides a stable interface for interactions between Snakemake and its report plugins.

   :homepage: https://github.com/snakemake/snakemake-interface-report-plugins
   :license: MIT
   :recipe: /`snakemake-interface-report-plugins <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakemake-interface-report-plugins>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakemake-interface-report-plugins/meta.yaml>`_

   


.. conda:package:: snakemake-interface-report-plugins

   |downloads_snakemake-interface-report-plugins| |docker_snakemake-interface-report-plugins|

   :versions:
      
      

      ``1.1.0-0``,  ``1.0.0-0``

      

   
   :depends python: ``>=3.11.0,<4.0.0``
   :depends snakemake-interface-common: ``>=1.16.0,<2.0.0``
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

      mamba install snakemake-interface-report-plugins

   and update with::

      mamba update snakemake-interface-report-plugins

  To create a new environment, run::

      mamba create --name myenvname snakemake-interface-report-plugins

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/snakemake-interface-report-plugins:<tag>

   (see `snakemake-interface-report-plugins/tags`_ for valid values for ``<tag>``)


.. |downloads_snakemake-interface-report-plugins| image:: https://img.shields.io/conda/dn/bioconda/snakemake-interface-report-plugins.svg?style=flat
   :target: https://anaconda.org/bioconda/snakemake-interface-report-plugins
   :alt:   (downloads)
.. |docker_snakemake-interface-report-plugins| image:: https://quay.io/repository/biocontainers/snakemake-interface-report-plugins/status
   :target: https://quay.io/repository/biocontainers/snakemake-interface-report-plugins
.. _`snakemake-interface-report-plugins/tags`: https://quay.io/repository/biocontainers/snakemake-interface-report-plugins?tab=tags


.. raw:: html

    <script>
        var package = "snakemake-interface-report-plugins";
        var versions = ["1.1.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snakemake-interface-report-plugins/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snakemake-interface-report-plugins/README.html