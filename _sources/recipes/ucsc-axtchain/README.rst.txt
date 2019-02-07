.. title:: Package Recipe 'ucsc-axtchain'
.. highlight: bash


ucsc-axtchain
=============

.. conda:recipe:: ucsc-axtchain
   :replaces_section_title:

   Chain together axt alignments.

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-axtchain <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-axtchain>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-axtchain/meta.yaml>`_

   


.. conda:package:: ucsc-axtchain

   |downloads_ucsc-axtchain| |docker_ucsc-axtchain|

   :versions: 366, 357, 332

   :depends: :conda:package:`libgcc-ng` >=4.9 :conda:package:`libpng` >=1.6.34,<1.7.0a0 :conda:package:`libuuid`  :conda:package:`mysql-connector-c`  :conda:package:`openssl` >=1.0.2o,<1.0.3a :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-axtchain|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-axtchain

   and update with::

      conda update ucsc-axtchain

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-axtchain


.. |required_by_ucsc-axtchain| conda:required_by:: ucsc-axtchain
.. |downloads_ucsc-axtchain| image:: https://img.shields.io/conda/dn/bioconda/ucsc-axtchain.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-axtchain| image:: https://quay.io/repository/biocontainers/ucsc-axtchain/status
   :target: https://quay.io/repository/biocontainers/ucsc-axtchain







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-axtchain/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-axtchain/README.html

