.. title:: Package Recipe 'ucsc-hgspeciesrna'
.. highlight: bash


ucsc-hgspeciesrna
=================

.. conda:recipe:: ucsc-hgspeciesrna
   :replaces_section_title:

   Create fasta file with RNA from one species

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-hgspeciesrna <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-hgspeciesrna>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-hgspeciesrna/meta.yaml>`_

   


.. conda:package:: ucsc-hgspeciesrna

   |downloads_ucsc-hgspeciesrna| |docker_ucsc-hgspeciesrna|

   :versions: 366, 357

   :depends: :conda:package:`libgcc-ng` >=4.9 :conda:package:`libpng` >=1.6.34,<1.7.0a0 :conda:package:`libuuid`  :conda:package:`mysql-connector-c`  :conda:package:`openssl` >=1.0.2o,<1.0.3a :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-hgspeciesrna|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-hgspeciesrna

   and update with::

      conda update ucsc-hgspeciesrna

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-hgspeciesrna


.. |required_by_ucsc-hgspeciesrna| conda:required_by:: ucsc-hgspeciesrna
.. |downloads_ucsc-hgspeciesrna| image:: https://img.shields.io/conda/dn/bioconda/ucsc-hgspeciesrna.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-hgspeciesrna| image:: https://quay.io/repository/biocontainers/ucsc-hgspeciesrna/status
   :target: https://quay.io/repository/biocontainers/ucsc-hgspeciesrna







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-hgspeciesrna/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-hgspeciesrna/README.html

