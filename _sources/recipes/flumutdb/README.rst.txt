:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'flumutdb'
.. highlight: bash

flumutdb
========

.. conda:recipe:: flumutdb
   :replaces_section_title:
   :noindex:

   Utility module for FluMut database.

   :homepage: https://github.com/izsvenezie-virology/FluMutDB
   :license: AGPL / AGPL-3.0-or-later
   :recipe: /`flumutdb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flumutdb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flumutdb/meta.yaml>`_

   


.. conda:package:: flumutdb

   |downloads_flumutdb| |docker_flumutdb|

   :versions:
      
      

      ``6.1-0``,  ``6.0-0``

      

   
   :depends python: ``>=3.7``
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

      mamba install flumutdb

   and update with::

      mamba update flumutdb

  To create a new environment, run::

      mamba create --name myenvname flumutdb

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/flumutdb:<tag>

   (see `flumutdb/tags`_ for valid values for ``<tag>``)


.. |downloads_flumutdb| image:: https://img.shields.io/conda/dn/bioconda/flumutdb.svg?style=flat
   :target: https://anaconda.org/bioconda/flumutdb
   :alt:   (downloads)
.. |docker_flumutdb| image:: https://quay.io/repository/biocontainers/flumutdb/status
   :target: https://quay.io/repository/biocontainers/flumutdb
.. _`flumutdb/tags`: https://quay.io/repository/biocontainers/flumutdb?tab=tags


.. raw:: html

    <script>
        var package = "flumutdb";
        var versions = ["6.1","6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/flumutdb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/flumutdb/README.html