:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snakemake-storage-plugin-http'
.. highlight: bash

snakemake-storage-plugin-http
=============================

.. conda:recipe:: snakemake-storage-plugin-http
   :replaces_section_title:
   :noindex:

   Snakemake storage plugin for donwloading input files from HTTP\(s\).

   :homepage: https://github.com/snakemake/snakemake-storage-plugin-http
   :license: MIT
   :recipe: /`snakemake-storage-plugin-http <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakemake-storage-plugin-http>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakemake-storage-plugin-http/meta.yaml>`_

   


.. conda:package:: snakemake-storage-plugin-http

   |downloads_snakemake-storage-plugin-http| |docker_snakemake-storage-plugin-http|

   :versions:
      
      

      ``0.2.3-1``,  ``0.2.3-0``

      

   
   :depends python: ``>=3.11.0,<4.0.0``
   :depends requests: ``>=2.31.0,<3.0.0``
   :depends requests-oauthlib: ``>=1.3.1,<2.0.0``
   :depends snakemake-interface-common: ``>=1.14.0,<2.0.0``
   :depends snakemake-interface-storage-plugins: ``>=3.0.0,<4.0.0``
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

      mamba install snakemake-storage-plugin-http

   and update with::

      mamba update snakemake-storage-plugin-http

  To create a new environment, run::

      mamba create --name myenvname snakemake-storage-plugin-http

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/snakemake-storage-plugin-http:<tag>

   (see `snakemake-storage-plugin-http/tags`_ for valid values for ``<tag>``)


.. |downloads_snakemake-storage-plugin-http| image:: https://img.shields.io/conda/dn/bioconda/snakemake-storage-plugin-http.svg?style=flat
   :target: https://anaconda.org/bioconda/snakemake-storage-plugin-http
   :alt:   (downloads)
.. |docker_snakemake-storage-plugin-http| image:: https://quay.io/repository/biocontainers/snakemake-storage-plugin-http/status
   :target: https://quay.io/repository/biocontainers/snakemake-storage-plugin-http
.. _`snakemake-storage-plugin-http/tags`: https://quay.io/repository/biocontainers/snakemake-storage-plugin-http?tab=tags


.. raw:: html

    <script>
        var package = "snakemake-storage-plugin-http";
        var versions = ["0.2.3","0.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snakemake-storage-plugin-http/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snakemake-storage-plugin-http/README.html