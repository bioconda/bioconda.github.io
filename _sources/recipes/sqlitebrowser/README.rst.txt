:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sqlitebrowser'
.. highlight: bash

sqlitebrowser
=============

.. conda:recipe:: sqlitebrowser
   :replaces_section_title:
   :noindex:

   DB Browser for SQLite is a high quality\, visual\, open source tool to create\, design\, and edit database files compatible with SQLite.

   :homepage: http://sqlitebrowser.org/
   :license: GPLv3
   :recipe: /`sqlitebrowser <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sqlitebrowser>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sqlitebrowser/meta.yaml>`_

   


.. conda:package:: sqlitebrowser

   |downloads_sqlitebrowser| |docker_sqlitebrowser|

   :versions:
      
      

      ``3.8.0-0``

      

   
   :depends libgcc: 
   :depends qt: 
   :depends sqlite: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install sqlitebrowser

   and update with::

      mamba update sqlitebrowser

  To create a new environment, run::

      mamba create --name myenvname sqlitebrowser

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sqlitebrowser:<tag>

   (see `sqlitebrowser/tags`_ for valid values for ``<tag>``)


.. |downloads_sqlitebrowser| image:: https://img.shields.io/conda/dn/bioconda/sqlitebrowser.svg?style=flat
   :target: https://anaconda.org/bioconda/sqlitebrowser
   :alt:   (downloads)
.. |docker_sqlitebrowser| image:: https://quay.io/repository/biocontainers/sqlitebrowser/status
   :target: https://quay.io/repository/biocontainers/sqlitebrowser
.. _`sqlitebrowser/tags`: https://quay.io/repository/biocontainers/sqlitebrowser?tab=tags


.. raw:: html

    <script>
        var package = "sqlitebrowser";
        var versions = ["3.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sqlitebrowser/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sqlitebrowser/README.html