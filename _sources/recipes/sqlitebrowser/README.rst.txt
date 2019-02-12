:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sqlitebrowser'
.. highlight: bash

sqlitebrowser
=============

.. conda:recipe:: sqlitebrowser
   :replaces_section_title:

   DB Browser for SQLite is a high quality\, visual\, open source tool to create\, design\, and edit database files compatible with SQLite.

   :homepage: http://sqlitebrowser.org/
   :license: GPLv3
   :recipe: /`sqlitebrowser <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sqlitebrowser>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sqlitebrowser/meta.yaml>`_

   


.. conda:package:: sqlitebrowser

   |downloads_sqlitebrowser| |docker_sqlitebrowser|

   :versions: 3.8.0-0
   
   :depends libgcc: 
   
   :depends qt: 
   
   :depends sqlite: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sqlitebrowser

   and update with::

      conda update sqlitebrowser

   or use the docker container::

      docker pull quay.io/repository/biocontainers/sqlitebrowser:<tag>

   (see `sqlitebrowser/tags`_ for valid values for ``<tag>``)


.. |downloads_sqlitebrowser| image:: https://img.shields.io/conda/dn/bioconda/sqlitebrowser.svg?style=flat
   :alt:   (downloads)
.. |docker_sqlitebrowser| image:: https://quay.io/repository/biocontainers/sqlitebrowser/status
   :target: https://quay.io/repository/biocontainers/sqlitebrowser
.. _`sqlitebrowser/tags`: https://quay.io/repository/biocontainers/sqlitebrowser?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sqlitebrowser/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sqlitebrowser/README.html