.. title:: Package Recipe 'ucsc-psltochain'
.. highlight: bash


ucsc-psltochain
===============

.. conda:recipe:: ucsc-psltochain
   :replaces_section_title:

   Convert psl records to chain records 

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-psltochain <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-psltochain>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-psltochain/meta.yaml>`_

   


.. conda:package:: ucsc-psltochain

   |downloads_ucsc-psltochain| |docker_ucsc-psltochain|

   :versions: 366, 357, 332, 324

   :depends: :conda:package:`libgcc-ng` >=4.9 :conda:package:`libpng` >=1.6.34,<1.7.0a0 :conda:package:`libuuid`  :conda:package:`mysql-connector-c`  :conda:package:`openssl` >=1.0.2o,<1.0.3a :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-psltochain|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-psltochain

   and update with::

      conda update ucsc-psltochain

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-psltochain


.. |required_by_ucsc-psltochain| conda:required_by:: ucsc-psltochain
.. |downloads_ucsc-psltochain| image:: https://img.shields.io/conda/dn/bioconda/ucsc-psltochain.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-psltochain| image:: https://quay.io/repository/biocontainers/ucsc-psltochain/status
   :target: https://quay.io/repository/biocontainers/ucsc-psltochain







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-psltochain/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-psltochain/README.html

