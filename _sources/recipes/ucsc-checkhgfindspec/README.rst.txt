.. title:: Package Recipe 'ucsc-checkhgfindspec'
.. highlight: bash


ucsc-checkhgfindspec
====================

.. conda:recipe:: ucsc-checkhgfindspec
   :replaces_section_title:

   test and describe search specs in hgFindSpec tables.

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-checkhgfindspec <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-checkhgfindspec>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-checkhgfindspec/meta.yaml>`_

   


.. conda:package:: ucsc-checkhgfindspec

   |downloads_ucsc-checkhgfindspec| |docker_ucsc-checkhgfindspec|

   :versions: 366, 357, 332

   :depends: :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-checkhgfindspec|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-checkhgfindspec

   and update with::

      conda update ucsc-checkhgfindspec

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-checkhgfindspec


.. |required_by_ucsc-checkhgfindspec| conda:required_by:: ucsc-checkhgfindspec
.. |downloads_ucsc-checkhgfindspec| image:: https://img.shields.io/conda/dn/bioconda/ucsc-checkhgfindspec.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-checkhgfindspec| image:: https://quay.io/repository/biocontainers/ucsc-checkhgfindspec/status
   :target: https://quay.io/repository/biocontainers/ucsc-checkhgfindspec







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-checkhgfindspec/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-checkhgfindspec/README.html

