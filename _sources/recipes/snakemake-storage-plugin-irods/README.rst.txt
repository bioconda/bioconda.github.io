:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snakemake-storage-plugin-irods'
.. highlight: bash

snakemake-storage-plugin-irods
==============================

.. conda:recipe:: snakemake-storage-plugin-irods
   :replaces_section_title:
   :noindex:

   A Snakemake plugin for handling input and output on iRODS

   :homepage: https://github.com/snakemake/snakemake-storage-plugin-irods
   :license: MIT
   :recipe: /`snakemake-storage-plugin-irods <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakemake-storage-plugin-irods>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakemake-storage-plugin-irods/meta.yaml>`_

   


.. conda:package:: snakemake-storage-plugin-irods

   |downloads_snakemake-storage-plugin-irods| |docker_snakemake-storage-plugin-irods|

   :versions:
      
      

      ``0.1.1-0``

      

   
   :depends python: ``>=3.11.0,<4.0.0``
   :depends python-irodsclient: ``>=1.1.9,<2.0.0``
   :depends snakemake-interface-common: ``>=1.15.0,<2.0.0``
   :depends snakemake-interface-storage-plugins: ``>=3.0.0,<4.0.0``
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

      mamba install snakemake-storage-plugin-irods

   and update with::

      mamba update snakemake-storage-plugin-irods

  To create a new environment, run::

      mamba create --name myenvname snakemake-storage-plugin-irods

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/snakemake-storage-plugin-irods:<tag>

   (see `snakemake-storage-plugin-irods/tags`_ for valid values for ``<tag>``)


.. |downloads_snakemake-storage-plugin-irods| image:: https://img.shields.io/conda/dn/bioconda/snakemake-storage-plugin-irods.svg?style=flat
   :target: https://anaconda.org/bioconda/snakemake-storage-plugin-irods
   :alt:   (downloads)
.. |docker_snakemake-storage-plugin-irods| image:: https://quay.io/repository/biocontainers/snakemake-storage-plugin-irods/status
   :target: https://quay.io/repository/biocontainers/snakemake-storage-plugin-irods
.. _`snakemake-storage-plugin-irods/tags`: https://quay.io/repository/biocontainers/snakemake-storage-plugin-irods?tab=tags


.. raw:: html

    <script>
        var package = "snakemake-storage-plugin-irods";
        var versions = ["0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snakemake-storage-plugin-irods/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snakemake-storage-plugin-irods/README.html