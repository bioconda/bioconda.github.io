:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snakemake-storage-plugin-cached-http'
.. highlight: bash

snakemake-storage-plugin-cached-http
====================================

.. conda:recipe:: snakemake-storage-plugin-cached-http
   :replaces_section_title:
   :noindex:

   Snakemake storage plugin for downloading files via HTTP with caching and rate limiting

   :homepage: https://github.com/PyPSA/snakemake-storage-plugin-cached-http
   :license: MIT
   :recipe: /`snakemake-storage-plugin-cached-http <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakemake-storage-plugin-cached-http>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakemake-storage-plugin-cached-http/meta.yaml>`_

   


.. conda:package:: snakemake-storage-plugin-cached-http

   |downloads_snakemake-storage-plugin-cached-http| |docker_snakemake-storage-plugin-cached-http|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends httpx: ``>=0.27,<1.dev0``
   :depends platformdirs: ``>=4.0,<5.dev0``
   :depends python: ``>=3.11,<4.0.0``
   :depends reretry: ``>=0.11,<1.dev0``
   :depends snakemake-interface-common: ``>=1.14,<2.dev0``
   :depends snakemake-interface-storage-plugins: ``>=4.2,<5.0``
   :depends snakemake-storage-plugin-http: ``>=0.3,<1.dev0``
   :depends tqdm-loggable: ``>=0.2,<1.dev0``
   :depends typing_extensions: ``>=4.15,<5.dev0``
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

      mamba install snakemake-storage-plugin-cached-http

   and update with::

      mamba update snakemake-storage-plugin-cached-http

  To create a new environment, run::

      mamba create --name myenvname snakemake-storage-plugin-cached-http

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/snakemake-storage-plugin-cached-http:<tag>

   (see `snakemake-storage-plugin-cached-http/tags`_ for valid values for ``<tag>``)


.. |downloads_snakemake-storage-plugin-cached-http| image:: https://img.shields.io/conda/dn/bioconda/snakemake-storage-plugin-cached-http.svg?style=flat
   :target: https://anaconda.org/bioconda/snakemake-storage-plugin-cached-http
   :alt:   (downloads)
.. |docker_snakemake-storage-plugin-cached-http| image:: https://quay.io/repository/biocontainers/snakemake-storage-plugin-cached-http/status
   :target: https://quay.io/repository/biocontainers/snakemake-storage-plugin-cached-http
.. _`snakemake-storage-plugin-cached-http/tags`: https://quay.io/repository/biocontainers/snakemake-storage-plugin-cached-http?tab=tags


.. raw:: html

    <script>
        var package = "snakemake-storage-plugin-cached-http";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snakemake-storage-plugin-cached-http/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snakemake-storage-plugin-cached-http/README.html