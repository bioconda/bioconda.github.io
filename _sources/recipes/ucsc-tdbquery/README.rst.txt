.. title:: Package Recipe 'ucsc-tdbquery'
.. highlight: bash


ucsc-tdbquery
=============

.. conda:recipe:: ucsc-tdbquery
   :replaces_section_title:

   Query the trackDb system using SQL syntax.

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-tdbquery <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-tdbquery>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-tdbquery/meta.yaml>`_

   


.. conda:package:: ucsc-tdbquery

   |downloads_ucsc-tdbquery| |docker_ucsc-tdbquery|

   :versions: 366, 357, 332, 324

   :depends: :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-tdbquery|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-tdbquery

   and update with::

      conda update ucsc-tdbquery

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-tdbquery


.. |required_by_ucsc-tdbquery| conda:required_by:: ucsc-tdbquery
.. |downloads_ucsc-tdbquery| image:: https://img.shields.io/conda/dn/bioconda/ucsc-tdbquery.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-tdbquery| image:: https://quay.io/repository/biocontainers/ucsc-tdbquery/status
   :target: https://quay.io/repository/biocontainers/ucsc-tdbquery







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-tdbquery/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-tdbquery/README.html

