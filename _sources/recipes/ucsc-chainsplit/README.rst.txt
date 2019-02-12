.. title:: Package Recipe 'ucsc-chainsplit'
.. highlight: bash


ucsc-chainsplit
===============

.. conda:recipe:: ucsc-chainsplit
   :replaces_section_title:

   Split chains up by target or query sequence

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-chainsplit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-chainsplit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-chainsplit/meta.yaml>`_

   


.. conda:package:: ucsc-chainsplit

   |downloads_ucsc-chainsplit| |docker_ucsc-chainsplit|

   :versions: 366, 357, 332, 324

   :depends: :conda:package:`libgcc-ng` >=4.9 :conda:package:`libpng` >=1.6.34,<1.7.0a0 :conda:package:`libuuid`  :conda:package:`mysql-connector-c`  :conda:package:`openssl` >=1.0.2o,<1.0.3a :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-chainsplit|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-chainsplit

   and update with::

      conda update ucsc-chainsplit

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-chainsplit


.. |required_by_ucsc-chainsplit| conda:required_by:: ucsc-chainsplit
.. |downloads_ucsc-chainsplit| image:: https://img.shields.io/conda/dn/bioconda/ucsc-chainsplit.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-chainsplit| image:: https://quay.io/repository/biocontainers/ucsc-chainsplit/status
   :target: https://quay.io/repository/biocontainers/ucsc-chainsplit







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-chainsplit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-chainsplit/README.html

