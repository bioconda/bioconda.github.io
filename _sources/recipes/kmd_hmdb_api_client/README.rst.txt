:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kmd_hmdb_api_client'
.. highlight: bash

kmd_hmdb_api_client
===================

.. conda:recipe:: kmd_hmdb_api_client
   :replaces_section_title:
   :noindex:

   The KMD HMDB project API Client

   :homepage: https://pypi.org/project/kmd-hmdb-api-client/
   :license: AGPL-3.0-or-later
   :recipe: /`kmd_hmdb_api_client <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kmd_hmdb_api_client>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kmd_hmdb_api_client/meta.yaml>`_

   


.. conda:package:: kmd_hmdb_api_client

   |downloads_kmd_hmdb_api_client| |docker_kmd_hmdb_api_client|

   :versions:
      
      

      ``1.0.1-0``

      

   
   :depends attrs: ``>=23.1.0``
   :depends click: ``>=8.1.3``
   :depends httpx: ``>=0.24.1``
   :depends python: ``>=3.9``
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

      mamba install kmd_hmdb_api_client

   and update with::

      mamba update kmd_hmdb_api_client

  To create a new environment, run::

      mamba create --name myenvname kmd_hmdb_api_client

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/kmd_hmdb_api_client:<tag>

   (see `kmd_hmdb_api_client/tags`_ for valid values for ``<tag>``)


.. |downloads_kmd_hmdb_api_client| image:: https://img.shields.io/conda/dn/bioconda/kmd_hmdb_api_client.svg?style=flat
   :target: https://anaconda.org/bioconda/kmd_hmdb_api_client
   :alt:   (downloads)
.. |docker_kmd_hmdb_api_client| image:: https://quay.io/repository/biocontainers/kmd_hmdb_api_client/status
   :target: https://quay.io/repository/biocontainers/kmd_hmdb_api_client
.. _`kmd_hmdb_api_client/tags`: https://quay.io/repository/biocontainers/kmd_hmdb_api_client?tab=tags


.. raw:: html

    <script>
        var package = "kmd_hmdb_api_client";
        var versions = ["1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kmd_hmdb_api_client/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kmd_hmdb_api_client/README.html