:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snakemake-storage-plugin-sftp'
.. highlight: bash

snakemake-storage-plugin-sftp
=============================

.. conda:recipe:: snakemake-storage-plugin-sftp
   :replaces_section_title:
   :noindex:

   A Snakemake storage plugin that handles files on an SFTP server. 

   :homepage: https://github.com/snakemake/snakemake-storage-plugin-sftp
   :license: MIT
   :recipe: /`snakemake-storage-plugin-sftp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakemake-storage-plugin-sftp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakemake-storage-plugin-sftp/meta.yaml>`_

   


.. conda:package:: snakemake-storage-plugin-sftp

   |downloads_snakemake-storage-plugin-sftp| |docker_snakemake-storage-plugin-sftp|

   :versions:
      
      

      ``0.1.3-0``,  ``0.1.2-0``

      

   
   :depends pysftp: ``>=0.2.9,<0.3.0``
   :depends python: ``>=3.11.0,<4.0.0``
   :depends snakemake-interface-common: ``>=1.14.3,<2.0.0``
   :depends snakemake-interface-storage-plugins: ``>=4.1.0,<5.0.0``
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

      mamba install snakemake-storage-plugin-sftp

   and update with::

      mamba update snakemake-storage-plugin-sftp

  To create a new environment, run::

      mamba create --name myenvname snakemake-storage-plugin-sftp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/snakemake-storage-plugin-sftp:<tag>

   (see `snakemake-storage-plugin-sftp/tags`_ for valid values for ``<tag>``)


.. |downloads_snakemake-storage-plugin-sftp| image:: https://img.shields.io/conda/dn/bioconda/snakemake-storage-plugin-sftp.svg?style=flat
   :target: https://anaconda.org/bioconda/snakemake-storage-plugin-sftp
   :alt:   (downloads)
.. |docker_snakemake-storage-plugin-sftp| image:: https://quay.io/repository/biocontainers/snakemake-storage-plugin-sftp/status
   :target: https://quay.io/repository/biocontainers/snakemake-storage-plugin-sftp
.. _`snakemake-storage-plugin-sftp/tags`: https://quay.io/repository/biocontainers/snakemake-storage-plugin-sftp?tab=tags


.. raw:: html

    <script>
        var package = "snakemake-storage-plugin-sftp";
        var versions = ["0.1.3","0.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snakemake-storage-plugin-sftp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snakemake-storage-plugin-sftp/README.html