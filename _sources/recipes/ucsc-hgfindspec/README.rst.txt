.. title:: Package Recipe 'ucsc-hgfindspec'
.. highlight: bash


ucsc-hgfindspec
===============

.. conda:recipe:: ucsc-hgfindspec
   :replaces_section_title:

   Create hgFindSpec table from trackDb.ra files.

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-hgfindspec <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-hgfindspec>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-hgfindspec/meta.yaml>`_

   


.. conda:package:: ucsc-hgfindspec

   |downloads_ucsc-hgfindspec| |docker_ucsc-hgfindspec|

   :versions: 366, 357

   :depends: :conda:package:`libgcc-ng` >=4.9 :conda:package:`libpng` >=1.6.34,<1.7.0a0 :conda:package:`libuuid`  :conda:package:`mysql-connector-c`  :conda:package:`openssl` >=1.0.2o,<1.0.3a :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-hgfindspec|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-hgfindspec

   and update with::

      conda update ucsc-hgfindspec

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-hgfindspec


.. |required_by_ucsc-hgfindspec| conda:required_by:: ucsc-hgfindspec
.. |downloads_ucsc-hgfindspec| image:: https://img.shields.io/conda/dn/bioconda/ucsc-hgfindspec.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-hgfindspec| image:: https://quay.io/repository/biocontainers/ucsc-hgfindspec/status
   :target: https://quay.io/repository/biocontainers/ucsc-hgfindspec







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-hgfindspec/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-hgfindspec/README.html

