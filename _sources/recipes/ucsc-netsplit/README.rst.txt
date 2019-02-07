.. title:: Package Recipe 'ucsc-netsplit'
.. highlight: bash


ucsc-netsplit
=============

.. conda:recipe:: ucsc-netsplit
   :replaces_section_title:

   Split a genome net file into chromosome net files

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-netsplit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-netsplit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-netsplit/meta.yaml>`_

   


.. conda:package:: ucsc-netsplit

   |downloads_ucsc-netsplit| |docker_ucsc-netsplit|

   :versions: 366, 357

   :depends: :conda:package:`libgcc-ng` >=4.9 :conda:package:`libpng` >=1.6.34,<1.7.0a0 :conda:package:`libuuid`  :conda:package:`mysql-connector-c`  :conda:package:`openssl` >=1.0.2o,<1.0.3a :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-netsplit|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-netsplit

   and update with::

      conda update ucsc-netsplit

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-netsplit


.. |required_by_ucsc-netsplit| conda:required_by:: ucsc-netsplit
.. |downloads_ucsc-netsplit| image:: https://img.shields.io/conda/dn/bioconda/ucsc-netsplit.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-netsplit| image:: https://quay.io/repository/biocontainers/ucsc-netsplit/status
   :target: https://quay.io/repository/biocontainers/ucsc-netsplit







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-netsplit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-netsplit/README.html

