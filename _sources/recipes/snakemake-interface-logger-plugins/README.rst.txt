:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snakemake-interface-logger-plugins'
.. highlight: bash

snakemake-interface-logger-plugins
==================================

.. conda:recipe:: snakemake-interface-logger-plugins
   :replaces_section_title:
   :noindex:

   This package provides a stable interface for interactions between Snakemake and its logger plugins.

   :homepage: https://github.com/snakemake/snakemake-interface-logger-plugins
   :license: MIT
   :recipe: /`snakemake-interface-logger-plugins <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakemake-interface-logger-plugins>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakemake-interface-logger-plugins/meta.yaml>`_

   


.. conda:package:: snakemake-interface-logger-plugins

   |downloads_snakemake-interface-logger-plugins| |docker_snakemake-interface-logger-plugins|

   :versions:
      
      

      ``1.2.4-0``,  ``1.2.3-0``

      

   
   :depends python: ``>=3.11.0,<4.0.0``
   :depends snakemake-interface-common: ``>=1.17.4,<2.0.0``
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

      mamba install snakemake-interface-logger-plugins

   and update with::

      mamba update snakemake-interface-logger-plugins

  To create a new environment, run::

      mamba create --name myenvname snakemake-interface-logger-plugins

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/snakemake-interface-logger-plugins:<tag>

   (see `snakemake-interface-logger-plugins/tags`_ for valid values for ``<tag>``)


.. |downloads_snakemake-interface-logger-plugins| image:: https://img.shields.io/conda/dn/bioconda/snakemake-interface-logger-plugins.svg?style=flat
   :target: https://anaconda.org/bioconda/snakemake-interface-logger-plugins
   :alt:   (downloads)
.. |docker_snakemake-interface-logger-plugins| image:: https://quay.io/repository/biocontainers/snakemake-interface-logger-plugins/status
   :target: https://quay.io/repository/biocontainers/snakemake-interface-logger-plugins
.. _`snakemake-interface-logger-plugins/tags`: https://quay.io/repository/biocontainers/snakemake-interface-logger-plugins?tab=tags


.. raw:: html

    <script>
        var package = "snakemake-interface-logger-plugins";
        var versions = ["1.2.4","1.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snakemake-interface-logger-plugins/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snakemake-interface-logger-plugins/README.html