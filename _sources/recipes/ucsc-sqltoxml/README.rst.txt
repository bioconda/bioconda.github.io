:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-sqltoxml'
.. highlight: bash

ucsc-sqltoxml
=============

.. conda:recipe:: ucsc-sqltoxml
   :replaces_section_title:

   dump out all or part of a relational database to XML\, guided

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-sqltoxml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-sqltoxml>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-sqltoxml/meta.yaml>`_

   


.. conda:package:: ucsc-sqltoxml

   |downloads_ucsc-sqltoxml| |docker_ucsc-sqltoxml|

   :versions: 377-0, 366-0, 357-2, 357-1, 357-0, 332-0, 324-0
   
   :depends libgcc-ng: >=7.3.0
   :depends libpng: >=1.6.35,<1.7.0a0
   :depends libuuid: >=2.32.1,<3.0a0
   :depends mysql-connector-c: >=6.1.11,<6.1.12.0a0
   :depends openssl: >=1.0.2p,<1.0.3a
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-sqltoxml

   and update with::

      conda update ucsc-sqltoxml

   or use the docker container::

      docker pull quay.io/biocontainers/ucsc-sqltoxml:<tag>

   (see `ucsc-sqltoxml/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-sqltoxml| image:: https://img.shields.io/conda/dn/bioconda/ucsc-sqltoxml.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-sqltoxml| image:: https://quay.io/repository/biocontainers/ucsc-sqltoxml/status
   :target: https://quay.io/repository/biocontainers/ucsc-sqltoxml
.. _`ucsc-sqltoxml/tags`: https://quay.io/repository/biocontainers/ucsc-sqltoxml?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-sqltoxml/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-sqltoxml/README.html