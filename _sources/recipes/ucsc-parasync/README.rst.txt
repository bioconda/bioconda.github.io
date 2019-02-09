.. title:: Package Recipe 'ucsc-parasync'
.. highlight: bash


ucsc-parasync
=============

.. conda:recipe:: ucsc-parasync
   :replaces_section_title:

   uses paraFetch to recursively mirror url to given path

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-parasync <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-parasync>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-parasync/meta.yaml>`_

   


.. conda:package:: ucsc-parasync

   |downloads_ucsc-parasync| |docker_ucsc-parasync|

   :versions: 366, 357, 332, 324

   :depends: :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-parasync|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-parasync

   and update with::

      conda update ucsc-parasync

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-parasync


.. |required_by_ucsc-parasync| conda:required_by:: ucsc-parasync
.. |downloads_ucsc-parasync| image:: https://img.shields.io/conda/dn/bioconda/ucsc-parasync.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-parasync| image:: https://quay.io/repository/biocontainers/ucsc-parasync/status
   :target: https://quay.io/repository/biocontainers/ucsc-parasync







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-parasync/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-parasync/README.html

