:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snakemake-interface-storage-plugins'
.. highlight: bash

snakemake-interface-storage-plugins
===================================

.. conda:recipe:: snakemake-interface-storage-plugins
   :replaces_section_title:
   :noindex:

   This package provides a stable interface for interactions between Snakemake and its storage plugins.

   :homepage: https://github.com/snakemake/snakemake-interface-storage-plugins
   :license: MIT
   :recipe: /`snakemake-interface-storage-plugins <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakemake-interface-storage-plugins>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakemake-interface-storage-plugins/meta.yaml>`_

   


.. conda:package:: snakemake-interface-storage-plugins

   |downloads_snakemake-interface-storage-plugins| |docker_snakemake-interface-storage-plugins|

   :versions:
      
      

      ``3.2.2-0``,  ``3.2.0-0``,  ``3.1.1-0``,  ``3.1.0-0``,  ``3.0.0-0``

      

   
   :depends python: ``>=3.11.0,<4.0.0``
   :depends reretry: ``>=0.11.8,<0.12.0``
   :depends snakemake-interface-common: ``>=1.12.0,<2.0.0``
   :depends throttler: ``>=1.2.2,<2.0.0``
   :depends wrapt: ``>=1.15.0,<2.0.0``
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

      mamba install snakemake-interface-storage-plugins

   and update with::

      mamba update snakemake-interface-storage-plugins

  To create a new environment, run::

      mamba create --name myenvname snakemake-interface-storage-plugins

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/snakemake-interface-storage-plugins:<tag>

   (see `snakemake-interface-storage-plugins/tags`_ for valid values for ``<tag>``)


.. |downloads_snakemake-interface-storage-plugins| image:: https://img.shields.io/conda/dn/bioconda/snakemake-interface-storage-plugins.svg?style=flat
   :target: https://anaconda.org/bioconda/snakemake-interface-storage-plugins
   :alt:   (downloads)
.. |docker_snakemake-interface-storage-plugins| image:: https://quay.io/repository/biocontainers/snakemake-interface-storage-plugins/status
   :target: https://quay.io/repository/biocontainers/snakemake-interface-storage-plugins
.. _`snakemake-interface-storage-plugins/tags`: https://quay.io/repository/biocontainers/snakemake-interface-storage-plugins?tab=tags


.. raw:: html

    <script>
        var package = "snakemake-interface-storage-plugins";
        var versions = ["3.2.2","3.2.0","3.1.1","3.1.0","3.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snakemake-interface-storage-plugins/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snakemake-interface-storage-plugins/README.html