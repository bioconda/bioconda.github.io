.. title:: Package Recipe 'mztosqlite'
.. highlight: bash


mztosqlite
==========

.. conda:recipe:: mztosqlite
   :replaces_section_title:

   Convert proteomics data files into a SQLite database.

   :homepage: https://github.com/galaxyproteomics/mzToSQLite
   :license: GPL, Version 2.0
   :recipe: /`mztosqlite <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mztosqlite>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mztosqlite/meta.yaml>`_

   


.. conda:package:: mztosqlite

   |downloads_mztosqlite| |docker_mztosqlite|

   :versions: 2.0.2, 2.0.0, 1.2.0

   :depends: :conda:package:`openjdk` >=8 :conda:package:`python`  

   :required~by: |required_by_mztosqlite|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mztosqlite

   and update with::

      conda update mztosqlite

   or use the docker container::

      docker pull quay.io/repository/biocontainers/mztosqlite


.. |required_by_mztosqlite| conda:required_by:: mztosqlite
.. |downloads_mztosqlite| image:: https://img.shields.io/conda/dn/bioconda/mztosqlite.svg?style=flat
   :alt:   (downloads)
.. |docker_mztosqlite| image:: https://quay.io/repository/biocontainers/mztosqlite/status
   :target: https://quay.io/repository/biocontainers/mztosqlite







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mztosqlite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mztosqlite/README.html

