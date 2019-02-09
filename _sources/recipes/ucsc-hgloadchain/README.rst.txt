.. title:: Package Recipe 'ucsc-hgloadchain'
.. highlight: bash


ucsc-hgloadchain
================

.. conda:recipe:: ucsc-hgloadchain
   :replaces_section_title:

   Load a generic Chain file into database

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-hgloadchain <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-hgloadchain>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-hgloadchain/meta.yaml>`_

   


.. conda:package:: ucsc-hgloadchain

   |downloads_ucsc-hgloadchain| |docker_ucsc-hgloadchain|

   :versions: 366, 357, 324

   :depends: :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-hgloadchain|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-hgloadchain

   and update with::

      conda update ucsc-hgloadchain

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-hgloadchain


.. |required_by_ucsc-hgloadchain| conda:required_by:: ucsc-hgloadchain
.. |downloads_ucsc-hgloadchain| image:: https://img.shields.io/conda/dn/bioconda/ucsc-hgloadchain.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-hgloadchain| image:: https://quay.io/repository/biocontainers/ucsc-hgloadchain/status
   :target: https://quay.io/repository/biocontainers/ucsc-hgloadchain







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-hgloadchain/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-hgloadchain/README.html

