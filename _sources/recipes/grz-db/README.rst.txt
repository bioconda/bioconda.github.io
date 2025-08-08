:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'grz-db'
.. highlight: bash

grz-db
======

.. conda:recipe:: grz-db
   :replaces_section_title:
   :noindex:

   SQL models for grz\-cli and grz\-watchdog

   :homepage: https://github.com/BfArM-MVH/grz-tools
   :license: MIT
   :recipe: /`grz-db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/grz-db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/grz-db/meta.yaml>`_

   


.. conda:package:: grz-db

   |downloads_grz-db| |docker_grz-db|

   :versions:
      
      

      ``0.4.0-0``,  ``0.3.0-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.0-0``

      

   
   :depends alembic: ``>=1.16.1``
   :depends cryptography: ``>=45.0.3``
   :depends grz-pydantic-models: ``2.*``
   :depends python: ``>=3.12,<4.0``
   :depends sqlmodel: ``>=0.0.24``
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

      mamba install grz-db

   and update with::

      mamba update grz-db

  To create a new environment, run::

      mamba create --name myenvname grz-db

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/grz-db:<tag>

   (see `grz-db/tags`_ for valid values for ``<tag>``)


.. |downloads_grz-db| image:: https://img.shields.io/conda/dn/bioconda/grz-db.svg?style=flat
   :target: https://anaconda.org/bioconda/grz-db
   :alt:   (downloads)
.. |docker_grz-db| image:: https://quay.io/repository/biocontainers/grz-db/status
   :target: https://quay.io/repository/biocontainers/grz-db
.. _`grz-db/tags`: https://quay.io/repository/biocontainers/grz-db?tab=tags


.. raw:: html

    <script>
        var package = "grz-db";
        var versions = ["0.4.0","0.3.0","0.2.1","0.2.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/grz-db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/grz-db/README.html