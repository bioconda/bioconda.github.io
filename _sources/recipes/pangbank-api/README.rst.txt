:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pangbank-api'
.. highlight: bash

pangbank-api
============

.. conda:recipe:: pangbank-api
   :replaces_section_title:
   :noindex:

   API for managing the PanGBank pangenome database\, including a CLI to add pangenomes to the database.

   :homepage: https://github.com/labgem/pangbank-api
   :license: CeCiLL 2.1
   :recipe: /`pangbank-api <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pangbank-api>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pangbank-api/meta.yaml>`_

   


.. conda:package:: pangbank-api

   |downloads_pangbank-api| |docker_pangbank-api|

   :versions:
      
      

      ``0.1.2-0``

      

   
   :depends fastapi: ``>=0.115.8``
   :depends packaging: ``>=24``
   :depends pydantic-settings: ``>=2.12.0``
   :depends python: ``>=3.10,<3.14``
   :depends pyyaml: ``>=6.0.2``
   :depends sqlmodel: ``>=0.0.22``
   :depends typer: ``>=0.15.1``
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

      mamba install pangbank-api

   and update with::

      mamba update pangbank-api

  To create a new environment, run::

      mamba create --name myenvname pangbank-api

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pangbank-api:<tag>

   (see `pangbank-api/tags`_ for valid values for ``<tag>``)


.. |downloads_pangbank-api| image:: https://img.shields.io/conda/dn/bioconda/pangbank-api.svg?style=flat
   :target: https://anaconda.org/bioconda/pangbank-api
   :alt:   (downloads)
.. |docker_pangbank-api| image:: https://quay.io/repository/biocontainers/pangbank-api/status
   :target: https://quay.io/repository/biocontainers/pangbank-api
.. _`pangbank-api/tags`: https://quay.io/repository/biocontainers/pangbank-api?tab=tags


.. raw:: html

    <script>
        var package = "pangbank-api";
        var versions = ["0.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pangbank-api/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pangbank-api/README.html