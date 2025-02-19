:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mlstdb'
.. highlight: bash

mlstdb
======

.. conda:recipe:: mlstdb
   :replaces_section_title:
   :noindex:

   A Python package to update and manage the MLST database for the MLST tool.

   :homepage: https://github.com/himal2007/mlstdb
   :license: MIT
   :recipe: /`mlstdb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mlstdb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mlstdb/meta.yaml>`_

   


.. conda:package:: mlstdb

   |downloads_mlstdb| |docker_mlstdb|

   :versions:
      
      

      ``0.1.3-0``

      

   
   :depends click: ``>=8.0.0``
   :depends configparser: ``>=5.0.0``
   :depends mlst: 
   :depends python: ``>=3.0``
   :depends rauth: ``>=0.7.3``
   :depends requests: ``>=2.25.0``
   :depends tqdm: ``>=4.65.0``
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

      mamba install mlstdb

   and update with::

      mamba update mlstdb

  To create a new environment, run::

      mamba create --name myenvname mlstdb

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mlstdb:<tag>

   (see `mlstdb/tags`_ for valid values for ``<tag>``)


.. |downloads_mlstdb| image:: https://img.shields.io/conda/dn/bioconda/mlstdb.svg?style=flat
   :target: https://anaconda.org/bioconda/mlstdb
   :alt:   (downloads)
.. |docker_mlstdb| image:: https://quay.io/repository/biocontainers/mlstdb/status
   :target: https://quay.io/repository/biocontainers/mlstdb
.. _`mlstdb/tags`: https://quay.io/repository/biocontainers/mlstdb?tab=tags


.. raw:: html

    <script>
        var package = "mlstdb";
        var versions = ["0.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mlstdb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mlstdb/README.html